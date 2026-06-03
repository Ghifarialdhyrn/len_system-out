<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\PesertaMagang;
use App\Services\CertificateService;

class SertifikatController extends Controller
{
    public function download(
        $noPeserta,
        CertificateService $certificateService
    ) {
        $peserta = PesertaMagang::with(['administrasi', 'sertifikat'])
            ->where('no_peserta', $noPeserta)
            ->firstOrFail();

        $sertifikat = $certificateService->generateIfEligible($peserta);

        if (!$sertifikat) {
            return response()->json([
                'message' => 'Administrasi peserta belum lengkap.',
            ], 422);
        }

        return $certificateService->download($sertifikat);
    }
}