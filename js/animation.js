
$(document).ready(function(){
  $("#nav").click(function(){
    $(this).toggleClass("closed");
    $("#main-nav").toggleClass("closed");
    $("#header").toggleClass("closed");
    $("body, html").toggleClass("mobile-no-scroll");
  });


  $(".scroll").click(function(){
    $('html').toggleClass("no-scroll");
  });


  $("#about-video-play").click(function(){
    $("#popup-container-about").toggleClass("hide");
  });
  $("#close-popup-01").click(function(){
    $("#popup-container-about").toggleClass("hide");
    $('html').toggleClass("no-scroll");
  });



  $('.close').click(function(){
    $('.myVideoClass').each(function(){
      $(this).stopVideo();
    });
  });



  $("#valentines-video-01-parent").click(function(){
    $("#popup-container-01").toggleClass("hide");
  });
  $("#close-popup-01").click(function(){
    $("#popup-container-01").toggleClass("hide");
  });


  $("#valentines-video-02-parent").click(function(){
    $("#popup-container-02").toggleClass("hide");
  });
  $("#close-popup-02").click(function(){
    $("#popup-container-02").toggleClass("hide");
  });


  $("#valentines-video-03-parent").click(function(){
    $("#popup-container-03").toggleClass("hide");
  });
  $("#close-popup-03").click(function(){
    $("#popup-container-03").toggleClass("hide");
  });
});



wow = new WOW(
{
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       100,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();




$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// fade out when scroll down

$(window).scroll(function(i){
    var scrollVar = $(window).scrollTop();
    $('.scroll-fade').css({'opacity':1-((scrollVar)/300)});
})



$(window).scroll(function() {
  if ($(window).scrollTop() >= ($(".fade-out").height()/2)) {
    // user scrolled 50 pixels or more;
    // do stuff
    $('#sub-nav-holder').addClass('reveal');
  }
  else {
    $('#sub-nav-holder').removeClass('reveal');
  }
});

// detect scrolling
$(window).scroll(function() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('#sub-nav-holder').removeClass('reveal');
    }, 1000)); 
  }
});





$(document).ready(function(){
  $("#share-hover").on({
    mouseenter: function () {
        $('.share').toggleClass('slideDown');
    },
    mouseleave: function () {
        $('.share').toggleClass('slideDown');
    }
  });
});


// slide overlay black/white on scroll down


$(window).scroll(function(){
  var scrollVar = $(window).scrollTop();
  $('.fade-out').css({'opacity':(scrollVar )/($(".fade-out").height()*.8)});
});



// slide container pointer events none on scroll down

 $(document).scroll(function(){
     $('#video-wrap, #slide-team, #blog-header, #home-slider, .slide-content-container').toggleClass('pointer-none', $(this).scrollTop() > 200);
 });




 $(document).ready(function(){
  $('#blog-main, #work-main').mixItUp({
    animation: {
      enable: false   
    }
  })
});
