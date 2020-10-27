$(document).ready(function(){

    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.main-slider__controls'),
        prevArrow: '<button type = "button" class = "slick-prev svg-left"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="18" viewBox="0 0 10 18"><defs><path id="haeta" d="M26.155 2384.64l8.951-8.49c.211-.2.55-.2.76 0 .21.2.21.52 0 .72l-8.57 8.129 8.57 8.13c.21.2.21.52 0 .72a.556.556 0 0 1-.378.15.537.537 0 0 1-.378-.15l-8.951-8.491a.489.489 0 0 1-.004-.717z"/></defs><g><g transform="translate(-26 -2376)"><use xlink:href="#haeta"/></g></g></svg> </button>',
        nextArrow: '<button type = "button" class = "slick-next svg-right"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="18" viewBox="0 0 10 18"><defs><path id="1yx9a" d="M1413.845 2384.64l-8.951-8.49a.556.556 0 0 0-.76 0 .49.49 0 0 0 0 .72l8.57 8.129-8.57 8.13a.49.49 0 0 0 0 .72c.103.098.242.15.378.15a.537.537 0 0 0 .378-.15l8.951-8.491a.489.489 0 0 0 .004-.717z"/></defs><g><g transform="translate(-1404 -2376)"><use xlink:href="#1yx9a"/></g></g></svg> </button>'
    });

    $('.shop-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        //autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type = "button" class = "slick-prev svg-left"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="18" viewBox="0 0 10 18"><defs><path id="haeta" d="M26.155 2384.64l8.951-8.49c.211-.2.55-.2.76 0 .21.2.21.52 0 .72l-8.57 8.129 8.57 8.13c.21.2.21.52 0 .72a.556.556 0 0 1-.378.15.537.537 0 0 1-.378-.15l-8.951-8.491a.489.489 0 0 1-.004-.717z"/></defs><g><g transform="translate(-26 -2376)"><use xlink:href="#haeta"/></g></g></svg> </button>',
        nextArrow: '<button type = "button" class = "slick-next svg-right"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="18" viewBox="0 0 10 18"><defs><path id="1yx9a" d="M1413.845 2384.64l-8.951-8.49a.556.556 0 0 0-.76 0 .49.49 0 0 0 0 .72l8.57 8.129-8.57 8.13a.49.49 0 0 0 0 .72c.103.098.242.15.378.15a.537.537 0 0 0 .378-.15l8.951-8.491a.489.489 0 0 0 .004-.717z"/></defs><g><g transform="translate(-1404 -2376)"><use xlink:href="#1yx9a"/></g></g></svg> </button>',
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });

    $(".nav__link a").click(function(event) {
      event.preventDefault();
      let href = $(this).attr('href');
          $('html, body').animate({
              scrollTop: $(href).offset().top
          }, 2000);
      });
});