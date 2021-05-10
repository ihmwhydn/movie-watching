$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    $('#exampleCheck1').click(function () {
        if ($(this).is(':checked')) {
            $('#exampleInputPassword1').attr('type', 'text');
        } else {
            $('#exampleInputPassword1').attr('type', 'password');
        }
    })

});