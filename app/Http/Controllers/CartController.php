<?php

namespace App\Http\Controllers;

use App\ValueObjects\Cart;
use App\ValueObjects\CartItem;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProductRequest;
use Illuminate\Http\RedirectResponse;
use App\Models\Product;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Arr;

class CartController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
      dd(Session::get('cart', new Cart()));
        return view('home');
    }

    public function show()
    {
        return view('welcome');   
    }

  
    public function store(Product $product)
    {

      $cart = Session::get('cart', new Cart());
  
      Session::put('cart',$cart->addItem($product));
      return response()->json([
        'status' => 'success'
      ]);    
    }
}
