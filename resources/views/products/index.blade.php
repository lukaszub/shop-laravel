@extends('layouts.app')

@section('content')
<div class="container">
  @include('helpers.flash_messages')
  <div class="row">
    <div class="col-6">
      <h1><i class="fa-solid fa-table-list"></i> Lista produktów</h1>
    </div>
    <div class="col-6">
      <a class="float-end" href="{{ route('products.create') }}">
        <button type="button"class="btn btn-primary"><i class="fa-solid fa-square-plus"></i></button>
      </a>    
    </div>
  </div>
  <div class="row">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nazwa</th>
          <th scope="col">Opis</th>
          <th scope="col">Ilość</th>
          <th scope="col">Cena</th>
          <th scope="col">{{ __('shop.product.fields.category') }}</th>
          <th scope="col">Akcja</th>
        </tr>
      </thead>
      <tbody>
        @foreach ($products as $product)
          <tr>
            <th scope="row">{{ $product->id }}</th>
            <td>{{ $product->name }}</td>
            <td>{{ $product->description }}</td>
            <td>{{ $product->amount }}</td>
            <td>{{ $product->price }}</td>
            <td>@if ($product->hasCategory()){{ $product->category->name }}@endif</td>
      
            <td>
              <a href="{{ route('products.show', $product->id ) }}">
                <button class="btn btn-primary btn-sm"><i class="fa-solid fa-magnifying-glass"></i></button>
              </a>
              <a href="{{ route('products.edit', $product->id ) }}">
                <button class="btn btn-success btn-sm"><i class="fa-regular fa-pen-to-square"></i></button>
              </a>
              <button class="btn btn-danger btn-sm delete" data-id="{{ $product->id }}"><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>        
        @endforeach
      </tbody>
    </table>

    {{ $products->links() }}
  </div>
</div>
@endsection
@section('javascript')
  const deleteUrl = "{{ url('products') }}/";
@endsection
@section('js-files')
  <script src="{{ asset('js/delete.js') }}"></script>
@endsection