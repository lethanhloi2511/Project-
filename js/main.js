$(document).ready(function () {
    $(".row__isotope").isotope({
        // options
        itemSelector: ".choose__content__isotope",
        layoutMode: "fitRows",
    });

    // choose-nav__menu active
    $(".choose-nav__menu li a").click(function () {
        $(".choose-nav__menu li a").removeClass("active");
        $(this).addClass("active");

        const selector = $(this).attr("data-filter");
        $(".row__isotope").isotope({
            filter: selector,
        });
    });
});
