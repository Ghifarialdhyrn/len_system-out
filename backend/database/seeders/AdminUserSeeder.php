<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'adminhcslen@gmail.com'],
            [
                'name' => 'Admin HCS LEN',
                'password' => Hash::make('hcslen12345'),
            ]
        );
    }
}