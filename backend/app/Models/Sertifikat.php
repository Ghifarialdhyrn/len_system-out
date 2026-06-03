<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sertifikat extends Model
{
    protected $fillable = [
        'peserta_id',
        'nomor_sertifikat',
        'file_sertifikat',
        'tanggal_terbit',
    ];

    public function peserta()
    {
        return $this->belongsTo(PesertaMagang::class, 'peserta_id');
    }
}