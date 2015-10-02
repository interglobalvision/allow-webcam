$.ajax({
  type: "GET",
  url: "listImages.php",
  dataType: "json",
  success: function(data) {
    console.log(data);
    $.each(data, function( i, val ) {
      $('#images').append('<img src="' + val + '">');
    });
  }
});