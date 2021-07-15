

//counter-up//
$(document).ready(function(){

$('.counters').counterUp({
    delay: 10,
    time: 1000
});

});

//counter-up//

//wow file//
wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}
)
wow.init();
//wow file//

//slick slide//
$(document).ready(function(){

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    }
  ]
});
});


//slick slide//

//Owl Carousel//

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    item:5,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:3
        },
        768:{
            items:5
        },
         992:{
            items:5
        },
        1200:{
            items:5
        }
    }
})



//Owl Carousel//


   
    
    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });


    
    








