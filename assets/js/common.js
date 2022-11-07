$(document).ready(function(){
	//toggle mobile mobile
	$(".js-open-menu").click(function(e){
		e.preventDefault();
		$(".l-header-mobile").addClass("show-canvas");
	});
	$(".js-close-menu").click(function(e){
		e.preventDefault();
		$(".l-header-mobile").removeClass("show-canvas");
	});

	//toggle dropdown languages
	$(".js-open-dropdown-languages").click(function(){
		$(".l-header-mobile__canvas__languages").toggleClass("show")
	});
	
	//home slider
	$(".p-home__technology--pc .p-home__technology-slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
						<img src="./assets/img/home/icn_prev.svg" alt="">
					</button>`,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
						<img src="./assets/img/home/icn_next.svg" alt="">
					</button>`,
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    $(".p-home__products-slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
						<img src="./assets/img/home/icn_prev.svg" alt="">
					</button>`,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
						<img src="./assets/img/home/icn_next.svg" alt="">
					</button>`,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
						<img src="./assets/img/home/icn_prev_02.svg" alt="">
					</button>`,
                    nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
                                    <img src="./assets/img/home/icn_next_02.svg" alt="">
					</button>`,
                }
            }
        ]
    });

    $(".p-home__solution-slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: false,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
						<img src="./assets/img/home/icn_prev_02.svg" alt="">
					</button>`,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
						<img src="./assets/img/home/icn_next_02.svg" alt="">
					</button>`,
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".p-home__news-slider").slick({
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: false,
        prevArrow: ``,
        nextArrow: ``,
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".p-home__fields-slider").slick({
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        prevArrow: ``,
        nextArrow: ``,
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // products
    $('.slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        infinite: false,
        // centerMode: true,
        speed: 1000,
        arrows: false,
        prevArrow: '',
        nextArrow: '',
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '84px',
                }
            }
        ]
    });

    $(".p-products__block-01 .slick-dots li button").html(`<img src="./assets/img/products/img_egate_01.png">`)
    $(".p-products__block-01 .slick-dots").clone(true).appendTo(".p-products__block-01 .p-products__block-slider");
    $(".p-products__block-01 .slick-dots li").click(function(){
        $(this).siblings().removeClass("slick-active")
        $(this).addClass("slick-active")
    })
    
    $(".p-products__block-02 .slick-dots li button").html(`<img src="./assets/img/products/img_egate_02.png">`)
    $(".p-products__block-02 .slick-dots").clone(true).appendTo(".p-products__block-02 .p-products__block-slider");
    $(".p-products__block-02 .slick-dots li").click(function(){
        $(this).siblings().removeClass("slick-active")
        $(this).addClass("slick-active")
    })

    $(".p-products__block-03 .slick-dots li button").html(`<img src="./assets/img/products/img_egate_03.png">`)
    $(".p-products__block-03 .slick-dots").clone(true).appendTo(".p-products__block-03 .p-products__block-slider");
    $(".p-products__block-03 .slick-dots li").click(function(){
        $(this).siblings().removeClass("slick-active")
        $(this).addClass("slick-active")
    })
    

    //back to top
    var btnBack = $('.c-back-to-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btnBack.addClass('show');
    } else {
        btnBack.removeClass('show');
    }
    });

    btnBack.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

    changeTextDots();
})

function changeTextDots(){
    //change text dots progress slider
    $('.p-home__technology #slick-slide-control00').text("Face Recognition")
    $('.p-home__technology #slick-slide-control01').text("Video Motion Detection")
    $('.p-home__technology #slick-slide-control02').text("Line Crossing Detection")
    $('.p-home__technology #slick-slide-control03').text("Anomaly Behavior Detection")
    $('.p-home__technology #slick-slide-control04').text("AIoT Camera Solution")
    $('.p-home__technology #slick-slide-control05').text("Defect Detection")
    $('.p-home__technology #slick-slide-control06').text("Vehicle Detection")
}


//counter slider project
counterSlider('.p-home__solution-slider-count', '.p-home__solution-slider');
counterSlider('.p-home__products-slider-count', '.p-home__products-slider');

function counterSlider(x, y){
    var $status = $(x);
    var $slickElement = $(y);

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        if(slick.slideCount < 10){
            $status.html(`
            <span class="current-slide">0${i}</span>
            <span class="separate"></span>
            <span class="total-slide">0${slick.slideCount}</span>`
            );
        }else{
            $status.html(`
            <span class="current-slide">${i}</span>
            <span class="separate"></span>
            <span class="total-slide">${slick.slideCount}</span>`
            );
        }
    });
}


// Aos animation
AOS.init({
    duration: 1000
});
$(window).on("scroll", function() {
    AOS.init({
        duration: 1000
    });
});