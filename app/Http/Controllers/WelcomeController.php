<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\View as ViewView;
use PSpell\Config;

class WelcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * 
     */
    public function index(Request $request)
    {
        $filters = $request->query('filter');
        $paginate = $request->query('paginate') ?? 5;

        $query = Product::query();

        if(!is_null($filters)){
           if(array_key_exists('categories',$filters)){
            $query = $query->whereIn('category_id', $filters['categories']); 
           } 
           if(!is_null($filters['price_min'])){
            $query = $query->where('price','>=', $filters['price_min']);
           }
           if(!is_null($filters['price_max'])){
            $query = $query->where('price','<=', $filters['price_max']); 
           }
           return response()->json($query->paginate($paginate));
        }

        return view('welcome',[
            'products' => $query->paginate($paginate),
            'categories' => ProductCategory::orderBy('name', 'ASC')->get(),
            'defaultImage' => config('shop.defaultImage',)
        ]);
    }

}
