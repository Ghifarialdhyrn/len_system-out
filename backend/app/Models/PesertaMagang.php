<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PesertaMagang extends Model
{
    use HasFactory;

    protected $fillable = [
        'no_peserta',
        'nama',
        'email',
        'no_hp',
        'instansi',
        'program_studi',
        'tanggal_mulai',
        'tanggal_selesai',
        'status_magang',
    ];

    public function administrasi()
    {
        return $this->hasOne(AdministrasiMagang::class, 'peserta_id');
    }

    public function sertifikat()
    {
        return $this->hasOne(Sertifikat::class, 'peserta_id');
    }
}