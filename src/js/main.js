$(document).ready(function() {

  //This is used to collapse the navbar on click - Mobile
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  //Smooth scrolling on navbar click
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        
        return false;
      }
    }
  });

});
