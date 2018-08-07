$(document).ready(function(){
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  $(".click2").click(function() {
    $(".dog-showing").fadeToggle();
    $(".dog-hiding").fadeToggle();
  });
  //
  // $(".click2").click(function() {
  //   $(".dog-showing").fadeToggle();
  // });


});
