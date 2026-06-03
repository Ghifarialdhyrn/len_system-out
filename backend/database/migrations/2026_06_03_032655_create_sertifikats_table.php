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
        Schema::create('sertifikats', function (Blueprint $table) {
            $table->id();

            $table->foreignId('peserta_id')
            ->constrained('peserta_magangs')
            ->cascadeOnDelete();

            $table->string('nomor_sertifikat');
            $table->string('file_sertifikat');
            $table->date('tanggal_terbit');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sertifikats');
    }
};
