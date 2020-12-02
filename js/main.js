

// aos animation

AOS.init();


// preLoader 

let countingFinish = false;
const loader = document.getElementById('preloader');

$(window).scroll(function () {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$(window).scroll(function () {
    $('.navbar-nav li').toggleClass('scrolled', $(this).scrollTop() > 100);
});

function preLoader() {
    loader.style.display = 'none';
}



//carousel
$('.dot-list').owlCarousel({
    loop: true,
    autoplayHoverPause: true,
    margin: 30,
    nav: false,
    autoplay: true,
    dots: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        700: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

//counter

$(window).on("load scroll",function(){
    startCounting();
});

function startCounting() {
    if (isElementVisible($('.counter')) && !countingFinish) {
        countingFinish = true;
        $('.counter').each(function (e) {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
}

function isElementVisible($elementToBeChecked) {
    const TopView = $(window).scrollTop();
    const BotView = TopView + $(window).height();
    const TopElement = $elementToBeChecked.offset().top;
    const BotElement = TopElement + $elementToBeChecked.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

//scrollup

$.scrollUp({
    scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
    easingType: 'linear',
    scrollSpeed: 1000,
    animation: 'fade'
});

$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
        },
        1500

        );
    }
});