$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    loop: true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        905:{
            items:2
        },
        1055:{
            items:3
        },

        1400:{
            items:4
        }
    }

})


$( function() {
    $( "#accordion" ).accordion();
} );

