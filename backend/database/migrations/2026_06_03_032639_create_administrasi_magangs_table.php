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
        Schema::create('administrasi_magangs', function (Blueprint $table) {
            $table->id();

            $table->foreignId('peserta_id')
            ->constrained('peserta_magangs')
            ->cascadeOnDelete();

            $table->boolean('laporan_akhir')->default(false);
            $table->boolean('absensi')->default(false);
            $table->boolean('penilaian_pembimbing')->default(false);
            $table->boolean('pengembalian_idcard')->default(false);
            $table->boolean('pengembalian_aset')->default(false);
            
            $table->text('catatan')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('administrasi_magangs');
    }
};
