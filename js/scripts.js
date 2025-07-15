$('.part-1').owlCarousel({
    autoplay:true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    loop: true,
    center:true,
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

        1350:{
            items:3
        },
        1500:{
            items:4
        }
    }

})
$('.part-2').owlCarousel({
    autoplay:true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    dots:true,
    center:true,
    loop: true,
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

