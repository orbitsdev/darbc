<?php

use App\Http\Controllers\LandController;
use App\Http\Controllers\MasterListController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('login');
});
Route::get('/login', function () {
    return Inertia::render('login');
});
Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
});

Route::get('/masterlist', [MasterListController::class, 'index'])->name('masterlist.index');
Route::get('/inquery', function () {
    return Inertia::render('inquery');
});
Route::get('/calendar', function () {
    return Inertia::render('calendar');
});
Route::get('/reports', function () {
    return Inertia::render('reports');
});

Route::group(['as'=>'land.'], function () {
    Route::post('/lot', [LandController::class, 'create']);

});
