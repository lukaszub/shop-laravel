<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Product;
use Illuminate\View\View;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
use App\Http\Requests\StoreProductRequest;
use Illuminate\Contracts\View\View as ViewView;
use Illuminate\Support\Facades\Redirect;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * 
     */
    public function index()
    {
        return view('products.index',[
            'products' => Product::paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * 
     */
    public function create()
    {
        return view('products.create',[
            'categories' => ProductCategory::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request): RedirectResponse
    {

        $product = New Product($request->all());
        if($request->hasFile('image')){
            $product->image_path = $request->file('image')->store('products');
        }
        $product->save();
        return redirect(route('products.index'))->with('status', __('shop.product.status.store.success'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return view('products.show',[
            'product' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        
        return view('products.edit',[
            'product' => $product,
            'categories' => ProductCategory::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  StoreProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return RedirectResponse
     */
    public function update(StoreProductRequest $request, Product $product)
    {

        $oldImagePath = $product->image_path;
        $product->fill($request->all());
        if($request->hasFile('image')){
            if(Storage::exists($oldImagePath)){
                Storage::delete($oldImagePath);
            }
            $product->image_path = $request->file('image')->store('products');
        }
        $product->save();
        return redirect(route('products.index'))->with('status', __('shop.product.status.update.success'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        try{
            $product->delete();
            Session::flash('status', __('shop.product.status.delete.success'));
            return response()->json([
                'status' => 'success'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Wystąpił błąd'
            ])->setStatusCode(500);
        }
    }

        /**
     * Download image of the specified resource in storage.
     *
     * @param  \App\Models\Product  $product
     * @return RedirectResponse
     */
    public function downloadImage(Product $product)
    {
            if(Storage::exists($product->image_path)){
                 return Storage::download($product->image_path);
             }

        return Redirect::back();
    }

}
