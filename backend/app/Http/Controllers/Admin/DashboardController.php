<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PesertaMagang;

class DashboardController extends Controller
{
    public function index()
    {
        $totalPeserta = PesertaMagang::count();

        $pesertaAktif = PesertaMagang::where('status_magang', 'aktif')->count();

        $alumni = PesertaMagang::where('status_magang', 'selesai')->count();

        $belumLengkap = PesertaMagang::whereHas('administrasi', function ($query) {
            $query->where('laporan_akhir', false)
                ->orWhere('absensi', false)
                ->orWhere('penilaian_pembimbing', false)
                ->orWhere('pengembalian_idcard', false)
                ->orWhere('pengembalian_aset', false);
        })->count();

        return response()->json([
            'total_peserta' => $totalPeserta,
            'peserta_aktif' => $pesertaAktif,
            'alumni' => $alumni,
            'administrasi_belum_lengkap' => $belumLengkap,
        ]);
    }
}