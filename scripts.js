function slideComment(){
  $("#seccion-1 ul li:first-child").slideUp(1000, function(){
    	$('ul').append($(this));
      $(this).show();
    });
}

setInterval(slideComment, 3000);
