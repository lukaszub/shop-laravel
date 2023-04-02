<?php

namespace App\Http\Controllers;

use App\Dtos\CartDto;
use App\Dtos\CartItemDto;
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
      dd(Session::get('cart', new CartDto()));
        return view('home');
    }

    public function show()
    {
        return view('welcome');   
    }

  
    public function store(Product $product)
    {

      $cart = Session::get('cart', new CartDto());
      $items = $cart->getItems();
      //dd($items);
      
      if(Arr::exists($items, $product->id)){
        $items[$product->id]->incementQuantity();
      } else {

        //$cartItemDto = $this->getCartItemDto($product);
        $cartItemDto = new CartItemDto();
        $cartItemDto->setProductId($product->id);
        $cartItemDto->setPrice($product->price);
        $cartItemDto->setQuantity(1);
        $cartItemDto->setImagePath($product->image_path);
        $items[$product->id] = $cartItemDto;
      }
      $cart->setItems($items);
      $cart->incementTotalQuantity();
      $cart->incementTotalSum($product->price);

      Session::put('cart',$cart);
      return response()->json([
        'status' => 'success'
      ]);    
    }
}
