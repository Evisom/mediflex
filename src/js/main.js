window.onload = function () {

    const mobileMenuPhoneButton = document.getElementById("mobileMenuPhoneButton");
    const phonePopup = document.getElementById("phonePopup");
    const wrapper = document.getElementById("wrapper");
    const phonePopupBlackout = document.getElementById("phonePopupBlackout");
    const navbar = document.getElementById("navbar");
    const sliderNext = document.getElementById("slider-next");
    const sliderPrev = document.getElementById("slider-prev");

    mobileMenuPhoneButton.onclick = function ( ) {
        if ( phonePopup.classList.length == 1 ) {
            phonePopup.classList += " hidden__phone-popup-active";
            phonePopupBlackout.classList += " hidden__phone-popup-active";
            mobileMenuPhoneButton.classList += " hidden__phone-popup-active";

        } else {
            phonePopup.classList = "hidden__phone-popup";
            phonePopupBlackout.classList = "hidden_phone-popup-blackout";
            mobileMenuPhoneButton.classList = "navbar__r2__phone-ico-mobile";

        }
    }

    let scrollPos = 0;
    $(window).scroll(function(){
            if (document.documentElement.clientWidth > 752) {
                var st = $(this).scrollTop();
                if (st > scrollPos || scrollPos < 160) {
                    navbar.className = 'navbar';
                } else if (scrollPos > 160 ) {
                    navbar.className = 'navbar navbar-scrollup';
                }
                scrollPos = st;
            }
        });

    // $('.pcategory__slider').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     prevArrow: "#slider-prev",
    //     nextArrow: "#slider-next",
    //     dots: false,
    //     centerMode: true,
    //     infinite: false,
    //     // focusOnSelect: true,
    //     // initialSlide: 3,
    //
    // });

    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 3,
    //     centeredSlides: true,
    //     spaceBetween: 30,
    //     grabCursor: true,
    //     // pagination: {
    //     //     el: '.swiper-pagination',
    //     //     clickable: true,
    //     // },
    // });
    const slider = document.getElementById('slider');

    // if (slider) {
    //
    //     var glide = new Glide(slider, {});
    //     console.log(slider.className)
    //     glide.mount();
    // }
var flkty = new Flickity('.pcategory__slider');

sliderNext.onclick = function ( ) {
    flkty.next()
}
sliderPrev.onclick = function ( ) {
    flkty.previous()
}




}