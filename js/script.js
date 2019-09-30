$(function(){  
    let header = $(".header");
    let startPage = $(".startPage");
    let aboutUs = $(".aboutUs");
    let photo = $(".photo");
    let option = $(".option");
    let ourServices = $(".ourServices");
    let team = $(".team");
    let pricing = $(".pricing");
    let map = $(".map");
    let tryBlock = $(".try");
    let footer = $(".footer");
    let nav = $(".nav");
    let navToggle = $("#nav__toggle");
    let scrollPos = $(window).scrollTop();
    let startPageH = startPage.innerHeight();
    console.log(startPageH); 

    checkScroll(scrollPos, startPageH);

    $(window).on("scroll resize", function() {
        startPageH = startPage.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, startPageH);
    });

    function checkScroll(scrollPos, startPageH) {
        if( scrollPos > startPageH ) {
            header.addClass("fixed");
            aboutUs.addClass("heightDown");
        } else {
            header.removeClass("fixed");
            aboutUs.removeClass("heightDown");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();
        // console.log("_______");
        nav.toggleClass("show");
    });

    /* Reviews: https://kenwheeler.github.io/slick/ */
    // let slider = $("#reviewsSlider");

    // slider.slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     arrows: false,
    //     dots: true
    // });


});