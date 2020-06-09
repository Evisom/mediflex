window.onload = function () {

    const mobileMenuPhoneButton = document.getElementById("mobileMenuPhoneButton");
    const phonePopup = document.getElementById("phonePopup");
    const phonePopupBlackout = document.getElementById("phonePopupBlackout");
    const navbar = document.getElementById("navbar");
    const compareNavbarButton = document.getElementById("compareNavbarButton")
    const compareWrapper = document.getElementById("compareWrapper")
    const comparePopup = document.getElementById("comparePopup")
    const navbarr3links = document.getElementsByClassName('navbar__r3-link')
    const navbarMenuTopCLose = document.getElementsByClassName('navbar-menu-c2-slide-top-close')
    const navbarmenuLinks = document.getElementsByClassName('navbar-menu-c1-link')
    const navbarmenuSlide = document.getElementsByClassName('navbar-menu-c2-slide')
    const navbarBurgerIco = document.getElementsByClassName('navbar-menu-burger-ico')
    const navbarmenu = document.getElementById("navbar-menu")
    const navbarMenuBurger = document.getElementById("navbar-menu-burger")
    const navbarMenuBurgerScrollup = document.getElementById("navbar-menu-burger-scrollup")
    let customerChoiceCardCompare = document.querySelectorAll('.customerchoice__slider-element-compare'),
        index, button;
    let customerChoiceCardInfo = document.querySelectorAll("#customerChoiceInfo")

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
                navbarmenu.classList.remove('navbar-menu-scrollup')
            } else if (scrollPos > 160) {
                navbar.className = 'navbar navbar-scrollup';
                navbarmenu.classList.add('navbar-menu-scrollup');
            }
            scrollPos = st;
        }
    });

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
            for (let i = 0; i < navbarmenuSlide.length; i++) {
                navbarmenuSlide[i].removeAttribute('style')
            }
            navbarmenuSlide[this.id[4]].setAttribute("style", "z-index: " + zindex++ + "; display: block")
        }


        function navbarMenuOnHover(index) {
            for (let i = 0; i < navbarmenuSlide.length; i++) {
                navbarmenuSlide[i].removeAttribute('style')
            }
            for (let i = 0; i < navbarmenuLinks.length; i++) {
                navbarmenuLinks[i].className = 'navbar-menu-c1-link'
            }
            navbarmenuLinks[(this.id[4])].classList += ' navbar-menu-c1-link-active'
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


    function navbarMenuClose1() {
        if (event.target.classList[0] == 'navbar-menu-wrapper')
            navbarmenu.classList = 'navbar-menu-wrapper'
        navbarBurgerIco[0].setAttribute('src', './img/menu-ico.svg')
        navbarBurgerIco[1].setAttribute('src', './img/menu-ico.svg')
    }
    navbarmenu.addEventListener("mouseover", navbarMenuClose1)


    function navbarMenuTopCLoseHandler() {
        for (let i = 0; i < navbarMenuTopCLose.length; i++) {
            navbarmenuSlide[i].removeAttribute("style")
        }
    }

    for (let i = 0; i < navbarMenuTopCLose.length; i++) {
        navbarMenuTopCLose[i].addEventListener('click', navbarMenuTopCLoseHandler);
    }


    for (index = 0; index < customerChoiceCardCompare.length; index++) { // Меню карточек товара
        button = customerChoiceCardCompare[index];
        button.addEventListener('click', { handleEvent: clickHandler, index: index });
    }

    function clickHandler(event) {
        if (customerChoiceCardCompare[this.index].classList.length == 1) {
            customerChoiceCardCompare[this.index].classList += ' customerchoice-compare-active';
            customerChoiceCardInfo[this.index].classList += ' customerchoice-element-open';
        } else {
            customerChoiceCardCompare[this.index].classList = 'customerchoice__slider-element-compare'
            customerChoiceCardInfo[this.index].classList = 'customerchoice__slider-element__info';
        }
        event.preventDefault();
    }

    const itemMenu = document.getElementById("itemMenu")

    var scrollPos2 = 0;
    $(window).scroll(function () {
        if (!itemMenu) {
            return;
        }

        var st = $(this).scrollTop();
        if (document.documentElement.clientWidth > 752) {
            if (st > scrollPos2) {
                itemMenu.setAttribute("style", "")
            } else if (st < scrollPos2 && scrollPos2 > 800) {
                itemMenu.setAttribute('style', 'position: fixed; left: 0; right: 0; top: -30px; z-index: 99999999; border-top: 2px solid rgba(146,148,151, 0.3)')
            } else {
                itemMenu.setAttribute("style", "")
            }
        } else {
            if (st > scrollPos2) {
                itemMenu.setAttribute("style", "")
            } else if (st < scrollPos2 && scrollPos2 > 700) {
                itemMenu.setAttribute('style', 'position: fixed; left: 0; right: 0; top: -30px; z-index: 99999999; border-top: 2px solid rgba(146,148,151, 0.3)')
            } else {
                itemMenu.setAttribute("style", "")
            }
        }
        scrollPos2 = st;
    });
    const createReview = document.getElementById("createReview");
    if (createReview) {
        createReview.onclick = function () {
            document.getElementById("createReviewHidden").classList += ' article-reviews-hidden-active'
            createReview.setAttribute("style", "opacity: 0")
        }
        function close() {
            document.getElementById("createReviewHidden").classList = 'article-reviews-hidden'
            createReview.setAttribute("style", "opacity: 1")
        }
        document.getElementById("reviewClose").onclick = function () {
            close()
        }
        document.getElementById("reviewCloseMobile").onclick = function () {
            close()
        }
    }

    const prizeButton = document.getElementById("prizeButton")

    if (prizeButton) {
        prizeButton.onclick = function () {
            document.getElementById("prizePopup").classList += ' item-main-info-buttons-hidden-active'
            $(document).mouseup(function (e){
                var div = $("#prizePopup");
                if (!div.is(e.target)
                    && div.has(e.target).length === 0) {
                    document.getElementById("prizePopup").classList = 'item-main-info-buttons-hidden'
                }
            });
        }
        document.getElementById("prizeCloseButton").onclick = function () {
            document.getElementById("prizePopup").classList = 'item-main-info-buttons-hidden'
        }
    }





    // ----- sliders ---

    [
        '#itemSlider',  
        '#aboutreviewsSlider', 
        '#reviewsSlider', 
        '#needtoknowSlider',
        '#catalogcategory1',
        '#catalogcategory2',
        '#lettersSlider',
        '#compareSlider',
        '#pcslider',
        '#ccslider'
    ].forEach(function(selector) {
        const el = document.querySelector(selector)
        if (el) {
            const slider = new Flickity(el);
            const prevEl = document.querySelector(`${selector}Prev`);
            const nextEl = document.querySelector(`${selector}Next`);
            console.log(slider, prevEl, nextEl);
    
            if (prevEl && nextEl) {
                nextEl.onclick = function () {
                    slider.next();
                };
                prevEl.onclick = function () {
                    slider.previous();
                };
            }
        }
    })


}