$(document).ready(function(){
    
    // dropdown-menu
    var w = window.innerWidth;

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About Us', 'Vision and Mission', 'News', 'Agenda', 'Gallery', 'Testimonial', 'Contact Us'],
        scrollBar: true,
        afterRender: function(){
            wow = new WOW( {
              animateClass: 'animated',
              offset:       100
            });
            wow.init();
        },
        sectionSelector : '.pagecontent',
      });

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
            $(".navbar-brand").addClass("beWhite");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
             $(".navbar-brand").removeClass("beWhite");
        }
    });

    // slick
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    $(".slider").slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000
        });
    
    // reply 
    $("#showToggle").click(function(){
        $("#thisToggle").slideToggle("slow");
    });

    //mansory 
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });

    //lightcase
    $('a[data-rel^=lightcase]').lightcase({
      transition: 'fade'
    });

    $('#searchButton').on('click', function(e){
      e.preventDefault()
      $('#search-field').fadeIn()
    })
    $('#closeSearch').on('click', function(e){
      e.preventDefault()
      $('#search-field').fadeOut()
    })

    $('#languageButton').on('click', function(e){
      e.preventDefault()
      $('#language-field').fadeIn()
    })
    $('#closeLanguage').on('click', function(e){
      e.preventDefault()
      $('#language-field').fadeOut()
    })
});