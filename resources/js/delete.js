$(function(){
  $('.delete').click(function(){
    Swal.fire({
      title: 'Czy napewno chcesz usunąć rekord?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tak',
      cancelButtonText: 'Nie'
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          method: "DELETE",
          //url: "localhost:8000/users/" + $(this).data("id"),
          url: deleteUrl + $(this).data("id"),
          //data: {id: $(this).data("id")}
        })
        .done(function(data){
          window.location.reload();
        })
        .fail(function(data){
          Swal.fire('Oppss', data.responseJSON.message, data.responseJSON.status);            
        })  
      }
    })
  });
}); 