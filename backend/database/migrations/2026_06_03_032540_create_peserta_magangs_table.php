<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('peserta_magangs', function (Blueprint $table) {
            $table->id();

            $table->string('no_peserta')->unique();

            $table->string('nama');
            $table->string('email')->nullable();
            $table->string('no_hp')->nullable();

            $table->string('instansi');
            $table->string('program_studi')->nullable();

            $table->date('tanggal_mulai');
            $table->date('tanggal_selesai');

            $table->enum('status_magang',[
                'aktif',
                'selesai'
            ])->default('aktif');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peserta_magangs');
    }
};
