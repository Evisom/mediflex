window.onload = function () {

    const mobileMenuPhoneButton = document.getElementById("mobileMenuPhoneButton");
    const phonePopup = document.getElementById("phonePopup");
    const phonePopupBlackout = document.getElementById("phonePopupBlackout");
    const navbar = document.getElementById("navbar");

    const pcategorySliderNext = document.getElementById("pcslider-next");
    const pcategorySliderPrev = document.getElementById("pcslider-prev");
    const customerChoiceSliderNext = document.getElementById("ccsliderNext");
    const customerChoiceSliderPrev = document.getElementById("ccsliderPrev");
    const reviewsNext = document.getElementById("reviewsNext")
    const reviewsPrev = document.getElementById("reviewsPrev")
    const catalogcategory1Next = document.getElementById("catalogcategory1Next")
    const catalogcategory1Prev = document.getElementById("catalogcategory1Prev")
    const catalogcategory2Next = document.getElementById("catalogcategory2Next")
    const catalogcategory2Prev = document.getElementById("catalogcategory2Prev")
    const compareSliderPrev = document.getElementById("compareSliderPrev")
    const compareSliderNext = document.getElementById("compareSliderNext")
    const compareNavbarButton = document.getElementById("compareNavbarButton")
    const compareWrapper = document.getElementById("compareWrapper")
    const comparePopup = document.getElementById("comparePopup")
    const lettersSliderPrev = document.getElementById("letterSliderPrev")
    const letterSliderNext = document.getElementById("lettersSliderNext")

    const needtoknowPrev = document.getElementById("needtoknowPrev")
    const needtoknowNext = document.getElementById("needtoknowNext")

    const catalogcategory1 = new Flickity('#catalogcategory1');
    const lettersSlider = new Flickity('#lettersSlider');
    const compareSlider = new Flickity('#compareSlider');
    const catalogcategory2 = new Flickity('#catalogcategory2');
    const pcategorySlider = new Flickity('.pcategory__slider');
    const customerChoiceSlider = new Flickity('#ccslider');
    const needtoknowSlider = new Flickity('#needtoknowSlider');

    let customerChoiceCardCompare = document.querySelectorAll('.customerchoice__slider-element-compare'),
        index, button;
    let customerChoiceCardInfo = document.querySelectorAll("#customerChoiceInfo")

    const reviewsSlider = new Flickity('#reviewsSlider');

    let scrollPos = 0;

    if (mobileMenuPhoneButton) {
        mobileMenuPhoneButton.onclick = function () { // Поп-ап с телефоном
            if (phonePopup.classList.length == 1) {
                phonePopup.classList += " hidden__phone-popup-active";
                phonePopupBlackout.classList += " hidden__phone-popup-active";
                mobileMenuPhoneButton.classList += " hidden__phone-popup-active";

            } else {
                phonePopup.classList = "hidden__phone-popup";
                phonePopupBlackout.classList = "hidden_phone-popup-blackout";
                mobileMenuPhoneButton.classList = "navbar__r2__phone-ico-mobile";

            }
        }
    }


    $(window).scroll(function () { // Поведение меню при скролле
        if (document.documentElement.clientWidth > 752) {
            var st = $(this).scrollTop();
            if (st > scrollPos || scrollPos < 160) {
                navbar.className = 'navbar';
            } else if (scrollPos > 160) {
                navbar.className = 'navbar navbar-scrollup';
            }
            scrollPos = st;
        }
    });

    if (pcategorySliderNext) {
        pcategorySliderNext.onclick = function () { // Кнопки управления слайдера Популярные категории
            pcategorySlider.next();
        }
        pcategorySliderPrev.onclick = function () {
            pcategorySlider.previous();
        }
    }


    if (customerChoiceSliderNext) {
        customerChoiceSliderNext.onclick = function () { // Кнопки управления слайдера Выбор покупателей
            customerChoiceSlider.next();
        }
        customerChoiceSliderPrev.onclick = function () {
            customerChoiceSlider.previous();
        }
    }


    if (reviewsNext) {
        reviewsNext.onclick = function () { // Кнопки управления слайдера Отзывы
            reviewsSlider.next();
        }
        reviewsPrev.onclick = function () {
            reviewsSlider.previous();
        }
    }

    if (catalogcategory1Next) {
        catalogcategory1Next.onclick = function () { // Кнопки управления слайдера каталога
            catalogcategory1.next();
        }
        catalogcategory1Prev.onclick = function () {
            catalogcategory1.previous();
        }
    }

    if (catalogcategory2Next) {
        catalogcategory2Next.onclick = function () { // Кнопки управления слайдера каталога
            catalogcategory2.next();
        }
        catalogcategory2Prev.onclick = function () {
            catalogcategory2.previous();
        }
    }

    if (needtoknowPrev) {
        needtoknowNext.onclick = function () { // Кнопки управления слайдера Нужно знать
            needtoknowSlider.next();
        }
        needtoknowPrev.onclick = function () {
            needtoknowSlider.previous();
        }
    }
    if (compareSliderNext) {
        compareSliderNext.onclick = function () { // Кнопки управления слайдера сравнений
            compareSlider.next();
        }
        compareSliderPrev.onclick = function () {
            compareSlider.previous();
        }
    }
    if (letterSliderNext) {
        letterSliderNext.onclick = function () { // Кнопки управления слайдера с письмами
            lettersSlider.next();
        }
        letterSliderPrev.onclick = function () {
            lettersSlider.previous();
        }
    }

    if (compareNavbarButton && compareWrapper) {
        compareNavbarButton.onclick = function () {
            compareWrapper.classList += ' compare-popup-active'
        }
        compareWrapper.onclick = function () {
            if (event.target.classList[0] == 'compare-popup-wrapper')
                compareWrapper.classList = 'compare-popup-wrapper'
        }
    }


    for (index = 0; index < customerChoiceCardCompare.length; index++) { // Меню карточек товара
        button = customerChoiceCardCompare[index];
        button.addEventListener('click', {handleEvent: clickHandler, index: index});
    }

    function clickHandler(event) {
        console.log(this.index);
        if (customerChoiceCardCompare[this.index].classList.length == 1) {
            customerChoiceCardCompare[this.index].classList += ' customerchoice-compare-active';
            customerChoiceCardInfo[this.index].classList += ' customerchoice-element-open';
        } else {
            customerChoiceCardCompare[this.index].classList = 'customerchoice__slider-element-compare'
            customerChoiceCardInfo[this.index].classList = 'customerchoice__slider-element__info';
        }
        event.preventDefault();
    }


}