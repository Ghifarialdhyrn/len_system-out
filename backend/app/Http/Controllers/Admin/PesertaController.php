<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PesertaMagang;
use Illuminate\Http\Request;

class PesertaController extends Controller
{
    public function index(Request $request)
    {
        $query = PesertaMagang::with(['administrasi', 'sertifikat'])
            ->latest();

        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('nama', 'like', '%' . $request->search . '%')
                    ->orWhere('no_peserta', 'like', '%' . $request->search . '%')
                    ->orWhere('instansi', 'like', '%' . $request->search . '%');
            });
        }

        return response()->json([
            'data' => $query->paginate(10),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'no_peserta' => 'required|unique:peserta_magangs,no_peserta',
            'nama' => 'required|string|max:255',
            'email' => 'nullable|email',
            'no_hp' => 'nullable|string|max:20',
            'instansi' => 'required|string|max:255',
            'program_studi' => 'nullable|string|max:255',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date',
            'status_magang' => 'required|in:aktif,selesai',
        ]);

        $peserta = PesertaMagang::create($validated);

        $peserta->administrasi()->create([
            'laporan_akhir' => false,
            'absensi' => false,
            'penilaian_pembimbing' => false,
            'pengembalian_idcard' => false,
            'pengembalian_aset' => false,
        ]);

        return response()->json([
            'message' => 'Peserta berhasil ditambahkan',
            'data' => $peserta->load('administrasi'),
        ], 201);
    }

    public function show($id)
    {
        $peserta = PesertaMagang::with(['administrasi', 'sertifikat'])
            ->findOrFail($id);

        return response()->json([
            'data' => $peserta,
        ]);
    }

    public function update(Request $request, $id)
    {
        $peserta = PesertaMagang::findOrFail($id);

        $validated = $request->validate([
            'no_peserta' => 'required|unique:peserta_magangs,no_peserta,' . $peserta->id,
            'nama' => 'required|string|max:255',
            'email' => 'nullable|email',
            'no_hp' => 'nullable|string|max:20',
            'instansi' => 'required|string|max:255',
            'program_studi' => 'nullable|string|max:255',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date',
            'status_magang' => 'required|in:aktif,selesai',
        ]);

        $peserta->update($validated);

        return response()->json([
            'message' => 'Peserta berhasil diperbarui',
            'data' => $peserta,
        ]);
    }

    public function destroy($id)
    {
        $peserta = PesertaMagang::findOrFail($id);
        $peserta->delete();

        return response()->json([
            'message' => 'Peserta berhasil dihapus',
        ]);
    }
}