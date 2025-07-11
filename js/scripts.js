$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    loop: true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        1100:{
            items:3
        }
    }

})

$( function() {
    $( "#accordion" ).accordion();
} );

