<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\PesertaMagang;
use App\Services\CertificateService;

class SearchController extends Controller
{
    public function search($noPeserta, CertificateService $certificateService)
    {
        $peserta = PesertaMagang::with(['administrasi', 'sertifikat'])
            ->where('no_peserta', $noPeserta)
            ->first();

        if (!$peserta) {
            return response()->json([
                'message' => 'Peserta magang tidak ditemukan',
            ], 404);
        }

        $sertifikat = $certificateService->generateIfEligible($peserta);

        $peserta = $peserta->fresh(['administrasi', 'sertifikat']);

        $administrasi = $peserta->administrasi;

        $lengkap = $administrasi
            ? $administrasi->isLengkap()
            : false;

        return response()->json([
            'data' => $peserta,
            'administrasi_lengkap' => $lengkap,
            'sertifikat_tersedia' => $lengkap && $peserta->sertifikat !== null,
            'download_url' => $sertifikat
                ? url('/api/sertifikat/' . $peserta->no_peserta . '/download')
                : null,
        ]);
    }
}