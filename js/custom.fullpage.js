$(document).ready(function(){

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About Us', 'Vision and Mission', 'News', 'Agenda', 'Gallery', 'Testimonial', 'Contact Us'],
        scrollBar: true,
        afterRender: function(){
            wow = new WOW({
              animateClass: 'animated',
              offset:       100
            });
            wow.init();
        },
        sectionSelector : '.pagecontent',
      });

});