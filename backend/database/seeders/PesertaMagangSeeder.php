<?php

namespace Database\Seeders;

use App\Models\PesertaMagang;
use Illuminate\Database\Seeder;

class PesertaMagangSeeder extends Seeder
{
    public function run(): void
    {
        PesertaMagang::factory()
            ->count(250)
            ->create()
            ->each(function ($peserta) {

                $lengkap = fake()->boolean(70);

                $peserta->administrasi()->create([

                    'laporan_akhir' =>
                        $lengkap
                            ? true
                            : fake()->boolean(),

                    'absensi' =>
                        $lengkap
                            ? true
                            : fake()->boolean(),

                    'penilaian_pembimbing' =>
                        $lengkap
                            ? true
                            : fake()->boolean(),

                    'pengembalian_idcard' =>
                        $lengkap
                            ? true
                            : fake()->boolean(),

                    'pengembalian_aset' =>
                        $lengkap
                            ? true
                            : fake()->boolean(),

                    'catatan' => fake()->sentence(),
                ]);

                if (
                    $lengkap &&
                    $peserta->status_magang === 'selesai'
                ) {

                    $peserta->sertifikat()->create([
                        'nomor_sertifikat' =>
                            'LEN/MGG/' .
                            date('Y') .
                            '/' .
                            str_pad(
                                $peserta->id,
                                4,
                                '0',
                                STR_PAD_LEFT
                            ),

                        'file_sertifikat' =>
                            'sertifikat/' .
                            $peserta->no_peserta .
                            '.pdf',

                        'tanggal_terbit' =>
                            now()->subDays(
                                rand(1, 90)
                            ),
                    ]);
                }
            });
    }
}