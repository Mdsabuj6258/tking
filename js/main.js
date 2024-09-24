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


    // // ==========type js==========
    // var type = new typed(".auto_type", {
    //     srtings: ["sabuj",
    //         "nadim",
    //         "light",
    //         "fan",
    //     ]
    //     typeSpeed: 150,
    //     backSpeed: 150,
    //     loop: true
    // })











});
