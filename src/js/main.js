window.onload = function () {

    const mobileMenuPhoneButton = document.getElementById("mobileMenuPhoneButton");
    const phonePopup = document.getElementById("phonePopup");
    const phonePopupBlackout = document.getElementById("phonePopupBlackout");
    const navbar = document.getElementById("navbar");

    const pcategorySliderNext = document.getElementById("pcslider-next");
    const pcategorySliderPrev = document.getElementById("pcslider-prev");
    const customerChoiceSliderNext = document.getElementById("customerchoise-slider-next");
    const customerChoiceSliderPrev = document.getElementById("customerchoise-slider-prev");
    const reviewsNext = document.getElementById("reviewsNext")
    const reviewsPrev = document.getElementById("reviewsPrev")

    const pcategorySlider = new Flickity('.pcategory__slider');
    const customerChoiceSlider = new Flickity('.customerchoice__slider');

    let customerChoiceCardCompare = document.querySelectorAll('.customerchoice__slider-element-compare'),
        index, button;
    let customerChoiceCardInfo = document.querySelectorAll("#customerChoiceInfo")

    const reviewsSlider = new Flickity('#reviewsSlider');

    let scrollPos = 0;

    mobileMenuPhoneButton.onclick = function ( ) { // Поп-ап с телефоном
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


    $(window).scroll(function(){ // Поведение меню при скролле
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


    pcategorySliderNext.onclick = function ( ) { // Кнопки управления слайдера Популярные категории
        pcategorySlider.next();
    }
    pcategorySliderPrev.onclick = function ( ) {
        pcategorySlider.previous();
    }

    customerChoiceSliderNext.onclick = function ( ) { // Кнопки управления слайдера Выбор покупателей
        customerChoiceSlider.next();
    }
    customerChoiceSliderPrev.onclick = function ( ) {
        customerChoiceSlider.previous();
    }

    reviewsNext.onclick = function ( ) { // Кнопки управления слайдера Отзывы
        reviewsSlider.next();
    }
    reviewsPrev.onclick = function ( ) {
        reviewsSlider.previous();
    }


    for (index = 0; index < customerChoiceCardCompare.length; index++) { // Меню карточек товара
        button = customerChoiceCardCompare[index];
        button.addEventListener('click', {handleEvent: clickHandler, index: index});
    }
    function clickHandler(event) {
        console.log(this.index);
            if (customerChoiceCardCompare[this.index].classList.length == 1 ) {
                customerChoiceCardCompare[this.index].classList += ' customerchoice-compare-active';
                customerChoiceCardInfo[this.index].classList += ' customerchoice-element-open';
            } else {
                customerChoiceCardCompare[this.index].classList = 'customerchoice__slider-element-compare'
                customerChoiceCardInfo[this.index].classList = 'customerchoice__slider-element__info';
            }
        event.preventDefault();
    }


}