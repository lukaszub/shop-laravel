<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

//cz 12 9:17
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
    return view('welcome');
});

Auth::routes();

Route::get('/users/list', [UserController::class, 'index'])->middleware('auth');
Route::delete('/users/{id}', [UserController::class, 'destroy'])->middleware('auth');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'); 