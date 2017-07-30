$(document).ready(function(){
    
    // dropdown-menu
    var w = window.innerWidth;

    if(w > 768) {
        $('.navbar-nav-dropdown li.has-children').hover(function(){
            $(this).children('ul').stop(true,false,true).slideToggle(400);
        });
    } else if(w <= 768) {
        $('.navbar-nav-dropdown li.has-children > a').click(function(){
            $(this).parent().children('ul').stop(true,false,true).slideToggle(400);
        });
    };

    $('.navbar-nav-dropdown li.has-children-onClick > a').click(function(){
      $(this).parent().children('ul').stop(true,false,true).fadeToggle(400);
    });

    // navbar scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();

    // slick
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    
});