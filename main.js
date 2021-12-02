$(function () {

    // scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset - 50
        }, 700);
    });


});