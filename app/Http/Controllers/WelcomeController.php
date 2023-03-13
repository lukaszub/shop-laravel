<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\View as ViewView;

class WelcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * 
     */
    public function index()
    {
        return view('welcome',[
            'products' => Product::paginate(10),
            'categories' => ProductCategory::orderBy('name', 'ASC')->get()
        ]);
    }

}
