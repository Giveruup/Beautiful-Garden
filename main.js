$(function () {

    let nav = $('#nav');
    let navToggle = $('#navToggle');

    // scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass('show');
        navToggle.removeClass('active');

        $('html, body').animate({
            scrollTop: elementOffset - 50
        }, 700);
    });

    // nav toggle


    navToggle.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('show');
        navToggle.toggleClass('active');
    });
});
