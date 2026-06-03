<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PesertaMagang;
use App\Services\CertificateService;
use Illuminate\Http\Request;

class AdministrasiController extends Controller
{
    public function update(
        Request $request,
        $id,
        CertificateService $certificateService
    ) {
        $validated = $request->validate([
            'laporan_akhir' => 'required|boolean',
            'absensi' => 'required|boolean',
            'penilaian_pembimbing' => 'required|boolean',
            'pengembalian_idcard' => 'required|boolean',
            'pengembalian_aset' => 'required|boolean',
            'catatan' => 'nullable|string',
        ]);

        $peserta = PesertaMagang::with(['administrasi', 'sertifikat'])
            ->findOrFail($id);

        $peserta->administrasi()->updateOrCreate(
            ['peserta_id' => $peserta->id],
            $validated
        );

        $certificateService->generateIfEligible(
            $peserta->fresh(['administrasi', 'sertifikat'])
        );

        return response()->json([
            'message' => 'Administrasi berhasil diperbarui',
            'data' => $peserta->fresh(['administrasi', 'sertifikat']),
        ]);
    }
}