$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        100: {
            items: 3
        },
        300: {
            items: 4
        },
        650: {
            items: 5
        },
        1000: {
            items: 6
        }
    }
})