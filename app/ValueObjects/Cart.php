<?php

namespace App\ValueObjects;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class Cart{
  
  private Collection $items;

  public function __construct(Collection $items = null)
  {
    $this->items = $items ?? Collection::empty();    
  }

  /**
   * Get the value of items
   */ 
  public function getItems()
  {
    return $this->items;
  }

  public function addItem(Product $product){
    $items = $this->items;
    $item = $items->first(function($item) use ($product){
      return $product->id == $item->getProductId();
    });
    
    if(!is_null($item)){
      $items = $items->reject(function($item) use ($product){
        return $product->id == $item->getProductId();
      });
      $newItem = $item->addQuantity($product);
    } else {
      $newItem = new CartItem($product);  
    }
    $items->add($newItem);
    return new Cart($items);
  }


}

