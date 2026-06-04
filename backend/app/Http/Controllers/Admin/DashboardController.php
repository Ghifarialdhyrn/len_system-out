<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PesertaMagang;
use Illuminate\Support\Facades\DB;

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

        $applicationTrends = PesertaMagang::select(
                DB::raw('MONTH(tanggal_mulai) as month'),
                DB::raw('COUNT(*) as total')
            )
            ->whereYear('tanggal_mulai', date('Y'))
            ->groupBy(DB::raw('MONTH(tanggal_mulai)'))
            ->orderBy(DB::raw('MONTH(tanggal_mulai)'))
            ->get()
            ->map(function ($item) {
                $months = [
                    1 => 'Jan',
                    2 => 'Feb',
                    3 => 'Mar',
                    4 => 'Apr',
                    5 => 'Mei',
                    6 => 'Jun',
                    7 => 'Jul',
                    8 => 'Agu',
                    9 => 'Sep',
                    10 => 'Okt',
                    11 => 'Nov',
                    12 => 'Des',
                ];

                return [
                    'month' => $months[$item->month],
                    'total' => $item->total,
                ];
            });

        $internDistribution = PesertaMagang::select(
                'program_studi',
                DB::raw('COUNT(*) as total')
            )
            ->groupBy('program_studi')
            ->orderByDesc('total')
            ->get()
            ->map(function ($item) use ($totalPeserta) {
                return [
                    'name' => $item->program_studi ?? 'Tidak Diketahui',
                    'total' => $item->total,
                    'percentage' => $totalPeserta > 0
                        ? round(($item->total / $totalPeserta) * 100)
                        : 0,
                ];
            });

        $recentActivity = PesertaMagang::with('administrasi')
            ->latest()
            ->limit(5)
            ->get()
            ->map(function ($peserta) {
                return [
                    'action' => 'Peserta Magang Ditambahkan',
                    'user' => $peserta->nama,
                    'department' => $peserta->program_studi ?? '-',
                    'date' => $peserta->created_at->format('d M Y'),
                    'status' => $peserta->status_magang,
                ];
            });

        return response()->json([
            'data' => [
                'total_peserta' => $totalPeserta,
                'peserta_aktif' => $pesertaAktif,
                'alumni' => $alumni,
                'belum_lengkap' => $belumLengkap,
                'application_trends' => $applicationTrends,
                'intern_distribution' => $internDistribution,
                'recent_activity' => $recentActivity,
            ],
        ]);
    }
}