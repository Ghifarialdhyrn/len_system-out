<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PesertaMagangFactory extends Factory
{
    public function definition(): array
    {
        $mulai = fake()->dateTimeBetween('-1 year', 'now');

        $selesai = (clone $mulai)
            ->modify('+6 months');

        return [
            'no_peserta' => 'MGG-' . fake()->unique()->numberBetween(1000, 9999),

            'nama' => fake()->name(),

            'email' => fake()->unique()->safeEmail(),

            'no_hp' => '08' . fake()->numerify('##########'),

            'instansi' => fake()->randomElement([
                'Institut Teknologi Bandung',
                'Universitas Indonesia',
                'Universitas Pendidikan Indonesia',
                'Universitas Padjadjaran',
                'Telkom University',
                'Politeknik Negeri Bandung',
                'Universitas Diponegoro',
                'Universitas Gadjah Mada',
                'Universitas Brawijaya',
                'Universitas Airlangga',
            ]),

            'program_studi' => fake()->randomElement([
                'Teknik Informatika',
                'Sistem Informasi',
                'Teknik Elektro',
                'Teknik Industri',
                'Teknik Mesin',
                'Teknik Telekomunikasi',
                'Data Science',
                'Cyber Security',
                'Manajemen',
                'Akuntansi',
                'Hukum',
                'Psikologi',
                'Desain Komunikasi Visual',
            ]),

            'tanggal_mulai' => $mulai,

            'tanggal_selesai' => $selesai,

            'status_magang' => fake()->randomElement([
                'aktif',
                'selesai',
            ]),
        ];
    }
}