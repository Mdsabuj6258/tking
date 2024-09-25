$(function () {

    "use strict";

    //======NICE SELECT=======
    $('.select_js').niceSelect();

    //=====datepicker.js======   
    $(function () {
        var $startDate = $('.start-date');
        var $endDate = $('.end-date');

        $startDate.datepicker({
            autoHide: true,
        });
        $endDate.datepicker({
            autoHide: true,
            startDate: $startDate.datepicker('getDate'),
        });

        $startDate.on('change', function () {
            $endDate.datepicker('setStartDate', $startDate.datepicker('getDate'));
        });
    });

    //======= search quntty ========
    $(".guest_input").on("click", function (event) {
        $(".qantaty_droofdown").toggleClass("show_qnty");
        event.stopPropagation();
    });

    $('body').click(function (event) {
        if ($(".qantaty_droofdown").hasClass("show_qnty")) {
            if (!$(event.target).closest('.guest').length) {
                $(".qantaty_droofdown").removeClass("show_qnty");
            }
        }
    });





    //======destinations slider====== 
    $('.destination_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });






});
