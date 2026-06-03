<?php

namespace Database\Seeders;

use App\Models\PesertaMagang;
use Illuminate\Database\Seeder;

class PesertaMagangSeeder extends Seeder
{
    public function run(): void
    {
        $peserta = PesertaMagang::create([
            'no_peserta' => 'MGG-001',
            'nama' => 'Ahmad Fauzan',
            'email' => 'ahmad@example.com',
            'no_hp' => '081234567890',
            'instansi' => 'Universitas Pendidikan Indonesia',
            'program_studi' => 'Teknik Informatika',
            'tanggal_mulai' => '2026-01-01',
            'tanggal_selesai' => '2026-06-30',
            'status_magang' => 'aktif',
        ]);

        $peserta->administrasi()->create([
            'laporan_akhir' => true,
            'absensi' => true,
            'penilaian_pembimbing' => false,
            'pengembalian_idcard' => true,
            'pengembalian_aset' => false,
            'catatan' => 'Belum menyerahkan penilaian pembimbing dan aset.',
        ]);

        $peserta2 = PesertaMagang::create([
            'no_peserta' => 'MGG-002',
            'nama' => 'Siti Nurhaliza',
            'email' => 'siti@example.com',
            'no_hp' => '082345678901',
            'instansi' => 'Institut Teknologi Bandung',
            'program_studi' => 'Sistem Informasi',
            'tanggal_mulai' => '2025-08-01',
            'tanggal_selesai' => '2026-01-31',
            'status_magang' => 'selesai',
        ]);

        $peserta2->administrasi()->create([
            'laporan_akhir' => true,
            'absensi' => true,
            'penilaian_pembimbing' => true,
            'pengembalian_idcard' => true,
            'pengembalian_aset' => true,
            'catatan' => 'Administrasi lengkap.',
        ]);

        $peserta2->sertifikat()->create([
            'nomor_sertifikat' => 'LEN/MGG/2026/001',
            'file_sertifikat' => 'sertifikat/MGG-002.pdf',
            'tanggal_terbit' => '2026-02-01',
        ]);
    }
}