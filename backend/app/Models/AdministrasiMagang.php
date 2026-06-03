<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdministrasiMagang extends Model
{
    protected $fillable = [
        'peserta_id',
        'laporan_akhir',
        'absensi',
        'penilaian_pembimbing',
        'pengembalian_idcard',
        'pengembalian_aset',
        'catatan',
    ];

    protected $casts = [
        'laporan_akhir' => 'boolean',
        'absensi' => 'boolean',
        'penilaian_pembimbing' => 'boolean',
        'pengembalian_idcard' => 'boolean',
        'pengembalian_aset' => 'boolean',
    ];

    public function peserta()
    {
        return $this->belongsTo(PesertaMagang::class, 'peserta_id');
    }

    public function isLengkap(): bool
{
    return
        $this->laporan_akhir &&
        $this->absensi &&
        $this->penilaian_pembimbing &&
        $this->pengembalian_idcard &&
        $this->pengembalian_aset;
}
}