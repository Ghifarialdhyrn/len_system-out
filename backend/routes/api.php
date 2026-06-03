<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Public\SearchController;
use App\Http\Controllers\Public\SertifikatController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PesertaController;
use App\Http\Controllers\Admin\AdministrasiController;

Route::get('/search/{noPeserta}', [SearchController::class, 'search']);

Route::get('/sertifikat/{noPeserta}/download', [SertifikatController::class, 'download']);

Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::apiResource('/peserta', PesertaController::class);

    Route::put('/peserta/{id}/administrasi', [AdministrasiController::class, 'update']);
});