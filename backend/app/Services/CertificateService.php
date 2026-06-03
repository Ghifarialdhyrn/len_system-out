<?php

namespace App\Services;

use App\Models\PesertaMagang;
use App\Models\Sertifikat;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class CertificateService
{
    public function generateNomorSertifikat(): string
    {
        $tahun = date('Y');

        $last = Sertifikat::latest('id')->first();

        $urutan = $last ? $last->id + 1 : 1;

        return sprintf('LEN/MAGANG/%s/%04d', $tahun, $urutan);
    }

    public function isEligible(PesertaMagang $peserta): bool
    {
        if (!$peserta->administrasi) {
            return false;
        }

        return
            $peserta->administrasi->laporan_akhir &&
            $peserta->administrasi->absensi &&
            $peserta->administrasi->penilaian_pembimbing &&
            $peserta->administrasi->pengembalian_idcard &&
            $peserta->administrasi->pengembalian_aset;
    }

    public function generateIfEligible(PesertaMagang $peserta): ?Sertifikat
    {
        $peserta->loadMissing(['administrasi', 'sertifikat']);

        if (!$this->isEligible($peserta)) {
            return null;
        }

        $sertifikat = $peserta->sertifikat;

        if (!$sertifikat) {
            $sertifikat = Sertifikat::create([
                'peserta_id' => $peserta->id,
                'nomor_sertifikat' => $this->generateNomorSertifikat(),
                'file_sertifikat' => '',
                'tanggal_terbit' => Carbon::now()->toDateString(),
            ]);
        }

        if (
            !$sertifikat->file_sertifikat ||
            !Storage::disk('public')->exists($sertifikat->file_sertifikat)
        ) {
            $this->generatePdfFile($peserta, $sertifikat);
        }

        return $sertifikat->fresh();
    }

    public function generatePdfFile(
        PesertaMagang $peserta,
        Sertifikat $sertifikat
    ): Sertifikat {
        $fileName = 'sertifikat-' . $peserta->no_peserta . '.pdf';

        $filePath = 'sertifikat/' . $fileName;

        $pdf = Pdf::loadView('pdf.sertifikat', [
            'peserta' => $peserta,
            'sertifikat' => $sertifikat,
        ])->setPaper('a4', 'landscape');

        Storage::disk('public')->put(
            $filePath,
            $pdf->output()
        );

        $sertifikat->update([
            'file_sertifikat' => $filePath,
        ]);

        return $sertifikat->fresh();
    }

    public function download(Sertifikat $sertifikat)
    {
        $sertifikat->loadMissing('peserta');

        if (
            !$sertifikat->file_sertifikat ||
            !Storage::disk('public')->exists($sertifikat->file_sertifikat)
        ) {
            $this->generatePdfFile(
                $sertifikat->peserta,
                $sertifikat
            );

            $sertifikat = $sertifikat->fresh('peserta');
        }

        return Storage::disk('public')->download(
            $sertifikat->file_sertifikat,
            'sertifikat-' . $sertifikat->peserta->no_peserta . '.pdf'
        );
    }
}