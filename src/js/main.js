function htmlbodyHeightUpdate() {

  var height3 = $(window).height()
  var height1 = $('.nav').height() + 50

  height2 = $('.main').height()

  if (height2 > height3) {
    $('html').height(Math.max(height1, height3, height2) + 10);
    $('body').height(Math.max(height1, height3, height2) + 10);
  } else {
    $('html').height(Math.max(height1, height3, height2));
    $('body').height(Math.max(height1, height3, height2));
  }
  
}

$(document).ready(function() {
  
  htmlbodyHeightUpdate()

  $(window).resize(function() {
    htmlbodyHeightUpdate()
  });

  $(window).scroll(function() {
    height2 = $('.main').height()
    htmlbodyHeightUpdate()
  });

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
