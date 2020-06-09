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
    const navbarr3links = document.getElementsByClassName('navbar__r3-link')
    const aboutreviewsPrev = document.getElementById("aboutReviewsPrev")
    const aboutreviewsNext = document.getElementById("aboutReviewsNext")
    const navbarMenuTopCLose = document.getElementsByClassName('navbar-menu-c2-slide-top-close')
    const navbarmenuLinks = document.getElementsByClassName('navbar-menu-c1-link')
    const navbarmenuSlide = document.getElementsByClassName('navbar-menu-c2-slide')

    const itemSliderPrev = document.getElementById('itemSliderPrev')
    const itemSliderNext = document.getElementById('itemSliderNext')
    const itemSlider = new Flickity('#itemSlider');

    const needtoknowPrev = document.getElementById("needtoknowPrev")
    const needtoknowNext = document.getElementById("needtoknowNext")
    const navbarBurgerIco = document.getElementsByClassName('navbar-menu-burger-ico')
    const aboutreviewsSlider = new Flickity('#aboutreviewsSlider');
    const catalogcategory1 = new Flickity('#catalogcategory1');
    const lettersSlider = new Flickity('#lettersSlider');
    const compareSlider = new Flickity('#compareSlider');
    const catalogcategory2 = new Flickity('#catalogcategory2');
    const pcategorySlider = new Flickity('.pcategory__slider');
    const customerChoiceSlider = new Flickity('#ccslider');
    const needtoknowSlider = new Flickity('#needtoknowSlider');
    const navbarmenu = document.getElementById("navbar-menu")
    const navbarMenuBurger = document.getElementById("navbar-menu-burger")
    const navbarMenuBurgerScrollup = document.getElementById("navbar-menu-burger-scrollup")
    let customerChoiceCardCompare = document.querySelectorAll('.customerchoice__slider-element-compare'),
        index, button;
    let customerChoiceCardInfo = document.querySelectorAll("#customerChoiceInfo")

    const reviewsSlider = new Flickity('#reviewsSlider');

    let scrollPos = 0;

    if (mobileMenuPhoneButton) {
        mobileMenuPhoneButton.onclick = function () { // Поп-ап с телефоном
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
    }



    $(window).scroll(function(){ // Поведение меню при скролле
            if (document.documentElement.clientWidth > 752) {
                var st = $(this).scrollTop();
                if (st > scrollPos || scrollPos < 160) {
                    navbar.className = 'navbar';
                    navbarmenu.classList.remove('navbar-menu-scrollup')
                } else if (scrollPos > 160 ) {
                    navbar.className = 'navbar navbar-scrollup';
                    navbarmenu.classList.add('navbar-menu-scrollup');
                }
                scrollPos = st;
            }
        });

    if (pcategorySliderNext) {
        pcategorySliderNext.onclick = function ( ) { // Кнопки управления слайдера Популярные категории
            pcategorySlider.next();
        }
        pcategorySliderPrev.onclick = function ( ) {
            pcategorySlider.previous();
        }
    }


    if (customerChoiceSliderNext) {
        customerChoiceSliderNext.onclick = function ( ) { // Кнопки управления слайдера Выбор покупателей
            customerChoiceSlider.next();
        }
        customerChoiceSliderPrev.onclick = function ( ) {
            customerChoiceSlider.previous();
        }
    }


    if (reviewsNext) {
        reviewsNext.onclick = function ( ) { // Кнопки управления слайдера Отзывы
            reviewsSlider.next();
        }
        reviewsPrev.onclick = function ( ) {
            reviewsSlider.previous();
        }
    }

    if (catalogcategory1Next) {
        catalogcategory1Next.onclick = function ( ) { // Кнопки управления слайдера каталога
            catalogcategory1.next();
        }
        catalogcategory1Prev.onclick = function ( ) {
            catalogcategory1.previous();
        }
    }

    if (catalogcategory2Next) {
        catalogcategory2Next.onclick = function ( ) { // Кнопки управления слайдера каталога
            catalogcategory2.next();
        }
        catalogcategory2Prev.onclick = function ( ) {
            catalogcategory2.previous();
        }
    }

    if (needtoknowPrev) {
        needtoknowNext.onclick = function ( ) { // Кнопки управления слайдера Нужно знать
            needtoknowSlider.next();
        }
        needtoknowPrev.onclick = function ( ) {
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

    if (aboutreviewsNext) {
        aboutreviewsNext.onclick = function () { // Кнопки управления слайдера с письмами
            aboutreviewsSlider.next();
        }
        aboutreviewsPrev.onclick = function () {
            aboutreviewsSlider.previous();
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

    if (navbarMenuBurger) {
        navbarMenuBurger.onclick = function (navbarMenuBurger) {
            navbarMenuScrollupFunc()
        }
        navbarMenuBurgerScrollup.onclick = function (navbarMenuBurgerScrollup) {
            navbarMenuScrollupFunc()
        }

        function navbarMenuScrollupFunc(button) {
            if (navbarmenu.className === 'navbar-menu-wrapper' || navbarmenu.className === 'navbar-menu-wrapper navbar-menu-scrollup' || navbarmenu.className === 'navbar-menu-wrapper navbar-menu-active-l navbar-menu-scrollup' || navbarmenu.className === 'navbar-menu-wrapper navbar-menu-active-l') {
                navbarmenu.className = 'navbar-menu-wrapper navbar-menu-active'
                navbarBurgerIco[0].setAttribute('src', './img/close-ico.svg')
                navbarBurgerIco[1].setAttribute('src', './img/close-ico.svg')

            } else {
                console.log("1")
                navbarmenu.className = 'navbar-menu-wrapper'
                navbarBurgerIco[0].setAttribute('src', './img/menu-ico.svg')
                navbarBurgerIco[1].setAttribute('src', './img/menu-ico.svg')
            }
        }
    }
    document.getElementById("navbarMenuSlideTopClose").onclick = function () {
        navbarmenu.className = 'navbar-menu-wrapper'
        navbarBurgerIco[0].setAttribute('src', './img/menu-ico.svg')
        navbarBurgerIco[1].setAttribute('src', './img/menu-ico.svg')
    }

    if (navbarmenuLinks) {

        function navbarMenuOnclickMobile(index) {
            console.log(this.id[4])
            for (let i = 0; i < navbarmenuSlide.length; i++) {
                navbarmenuSlide[i].removeAttribute('style')
            }
            navbarmenuSlide[this.id[4]].setAttribute("style", "z-index: " + zindex++ + "; display: block")
        }


        function navbarMenuOnHover(index) {
            console.log(this.id[4], navbarmenuLinks[0].className)
            for (let i = 0; i < navbarmenuSlide.length; i++) {
                navbarmenuSlide[i].removeAttribute('style')
            }
            for (let i = 0; i < navbarmenuLinks.length; i++) {
                navbarmenuLinks[i].className = 'navbar-menu-c1-link'
            }
            navbarmenuLinks[(this.id[4])].classList += ' navbar-menu-c1-link-active'
            console.log(this.id[4])
            navbarmenuSlide[this.id[4]].setAttribute("style", "z-index: 9999")
        }


        if (document.documentElement.clientWidth < 752) {
            for (let i = 0; i < navbarmenuLinks.length; i++) {
                navbarmenuLinks[i].addEventListener("click", navbarMenuOnclickMobile)
            }
        } else {
            for (let i = 0; i < navbarmenuLinks.length; i++) {
                navbarmenuLinks[i].addEventListener("mouseover", navbarMenuOnHover)
            }
        }
    }

    if (navbarr3links) {
        var zindex = 9999

        function navbarMenuOnclick(index) {
            for (let i = 1; i < navbarr3links.length; i++) {
                navbarr3links[i].className = 'navbar__r3-link'
            }
            if (this.id[4] == 'a') {
                navbarmenu.classList.add('navbar-menu-active');
                navbarr3links[parseInt(this.id[4]) + 1].classList += ' navbar__r3-link-active'

            } else {

                navbarr3links[parseInt(this.id[4]) + 1].classList += ' navbar__r3-link-active'
                navbarmenu.classList.add('navbar-menu-active-l');

                navbarmenuSlide[this.id[4]].setAttribute("style", "z-index: " + zindex++)
            }

        }

        for (let i = 1; i < navbarr3links.length; i++) {
            navbarr3links[i].addEventListener("mouseover", navbarMenuOnclick)
        }
    }

    navbarmenu.onclick = function () {
        if (event.target.classList[0] == 'navbar-menu-wrapper')
            navbarmenu.classList = 'navbar-menu-wrapper'
        navbarBurgerIco[0].setAttribute('src', './img/menu-ico.svg')
        navbarBurgerIco[1].setAttribute('src', './img/menu-ico.svg')
    }

    function navbarMenuTopCLoseHandler() {
        console.log(1)
        for (let i = 0; i < navbarMenuTopCLose.length; i++) {
            navbarmenuSlide[i].removeAttribute("style")
        }
    }

    for (let i = 0; i < navbarMenuTopCLose.length; i++) {
        navbarMenuTopCLose[i].addEventListener('click', navbarMenuTopCLoseHandler);
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

    if (itemSliderNext) {
        itemSliderNext.onclick = function () { // Кнопки управления слайдера товара
            itemSlider.next();
        }
        itemSliderPrev.onclick = function () {
            itemSlider.previous();
        }
    }

    const itemMenu = document.getElementById("itemMenu")

    var scrollPos2 = 0;
    $(window).scroll(function(){

        console.log(scrollPos2)
        var st = $(this).scrollTop();
        if (document.documentElement.clientWidth > 752) {
            if (st > scrollPos2) {
                console.log('down')
                itemMenu.setAttribute("style", "")
            } else if (st < scrollPos2 && scrollPos2 > 800) {
                console.log('up')
                itemMenu.setAttribute('style', 'position: fixed; left: 0; right: 0; top: -30px; z-index: 99999999; border-top: 2px solid rgba(146,148,151, 0.3)')
            } else {
                itemMenu.setAttribute("style", "")
            }
        } else {
            if (st > scrollPos2) {
                console.log('down')
                itemMenu.setAttribute("style", "")
            } else if (st < scrollPos2 && scrollPos2 > 700) {
                console.log('up')
                itemMenu.setAttribute('style', 'position: fixed; left: 0; right: 0; top: -30px; z-index: 99999999; border-top: 2px solid rgba(146,148,151, 0.3)')
            } else {
                itemMenu.setAttribute("style", "")
            }
        }
        scrollPos2 = st;
    });




}