<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes(['verify' => true]);
Route::get('/', [WelcomeController::class, 'index']);


Route::middleware(['auth', 'verified'])->group(function(){
  Route::middleware(['can:isAdmin'])->group(function(){
    Route::get('/products/{product}/download', [ProductController::class, 'downloadImage'])->name('products.downloadImage');
    Route::resource('products', ProductController::class);
    Route::get('/users/list', [UserController::class, 'index']);
    Route::delete('/users/{user}', [UserController::class, 'destroy']);
  });
  Route::get('/cart/list', [App\Http\Controllers\CartController::class, 'index'])->name('cart.index'); 
  Route::post('/cart/{product}', [App\Http\Controllers\CartController::class, 'store'])->name('cart.store'); 
  Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'); 
});
// Route::get('/products', [ProductController::class, 'index'])->name('products.index')->middleware('auth');
// Route::get('/products/create', [ProductController::class, 'create'])->name('products.create')->middleware('auth');
// Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show')->middleware('auth');
// Route::post('/products', [ProductController::class, 'store'])->name('products.store')->middleware('auth');
// Route::get('/products/edit/{product}', [ProductController::class, 'edit'])->name('products.edit')->middleware('auth');
// Route::post('/products/{product}', [ProductController::class, 'update'])->name('products.update')->middleware('auth');
// Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy')->middleware('auth');

// Route::get('/users/list', [UserController::class, 'index'])->middleware('auth');
// Route::delete('/users/{user}', [UserController::class, 'destroy'])->middleware('auth');
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'); 