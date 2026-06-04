<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Public\SearchController;
use App\Http\Controllers\Public\SertifikatController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PesertaController;
use App\Http\Controllers\Admin\AdministrasiController;

Route::post('/login', [AuthController::class, 'login']);

Route::get('/search/{noPeserta}', [SearchController::class, 'search']);
Route::get('/sertifikat/{noPeserta}/download', [SertifikatController::class, 'download']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::prefix('admin')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index']);
        Route::apiResource('/peserta', PesertaController::class);
        Route::put('/peserta/{id}/administrasi', [AdministrasiController::class, 'update']);
    });
});