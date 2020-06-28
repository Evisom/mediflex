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
        index
    let itemCard = document.getElementsByClassName("customerchoice__slider-element")
    let customerChoiceCardInfo = document.querySelectorAll("#customerChoiceInfo")
    const filtersTrigger = document.getElementById("filtersTrigger")
    const filtersR = document.getElementById("filtersR")
    const itemPopupTrigger = document.getElementById("item-cart-popup-trigger")

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
            if (st > scrollPos && scrollPos > 160 ) {
                navbar.className = 'navbar navbar-scrollup';
                navbarmenu.classList.add('navbar-menu-scrollup');

            } else if (st < scrollPos) {
                navbar.className = 'navbar';
                navbarmenu.classList.remove('navbar-menu-scrollup')
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
                navbarmenu.className += ' navbar-menu-active'
                navbarBurgerIco[0].setAttribute('src', './img/close-ico.svg')
                navbarBurgerIco[1].setAttribute('src', './img/close-ico.svg')

            } else {
                $(navbarmenu).removeClass("navbar-menu-active")
                navbarBurgerIco[0].setAttribute('src', './img/menu-ico.svg')
                navbarBurgerIco[1].setAttribute('src', './img/menu-ico.svg')
            }
        }
    }
    const navbarMenuSlideTopClose = document.getElementById("navbarMenuSlideTopClose");
    if (navbarMenuSlideTopClose) {
        navbarMenuSlideTopClose.onclick = function () {
            navbarmenu.className = 'navbar-menu-wrapper'
            navbarBurgerIco[0].setAttribute('src', './img/menu-ico.svg')
            navbarBurgerIco[1].setAttribute('src', './img/menu-ico.svg')
        }
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




            let tid4 = this.id[4]
            if (tid4 == 'a') {
                navbarmenu.classList.add('navbar-menu-active');
                navbarr3links[parseInt(this.id[4]) + 1].classList += ' navbar__r3-link-active'

            } else {

                if (document.documentElement.clientWidth > 752) {
                    ID = setTimeout(function(){
                        navbarr3links[parseInt(tid4) + 1].classList += ' navbar__r3-link-active'
                        navbarmenu.classList.add('navbar-menu-active-l');
                        navbarmenuSlide[tid4].setAttribute("style", "z-index: " + zindex++)
                    }, 500)

                } else {

                    navbarr3links[parseInt(tid4) + 1].classList += ' navbar__r3-link-active'
                    navbarmenu.classList.add('navbar-menu-active-l');
                    navbarmenuSlide[tid4].setAttribute("style", "z-index: " + zindex++)
                }



            }

        }

        for (let i = 1; i < navbarr3links.length; i++) {
            navbarr3links[i].addEventListener("mouseover", navbarMenuOnclick)
        }
        for (let i = 1; i < navbarr3links.length; i++) {
            navbarr3links[i].addEventListener("mouseout",
                function () {
                    // for (let i = 1; i < navbarr3links.length; i++) {
                    //     navbarr3links[i].className = 'navbar__r3-link'
                    // }
                    clearTimeout(ID)
                })

        }

    }
    $(".navbar__r2").hover(function () {
        navbarMenuClose1()
    })
    $("#navbar").hover(function () {
        navbarMenuClose1()
    })
    function navbarMenuClose1() {
        if (event.target.classList[0] == 'navbar-menu-wrapper' || event.target.classList[0] == 'navbar' ||  event.target.classList[0] == 'navbar__r2') {
            navbarmenu.classList = 'navbar-menu-wrapper'
            navbarBurgerIco[0].setAttribute('src', './img/menu-ico.svg')
            navbarBurgerIco[1].setAttribute('src', './img/menu-ico.svg')
            for (let i = 1; i < navbarr3links.length; i++) {
                navbarr3links[i].className = 'navbar__r3-link'
            }
        }
    }

    if (navbarmenu) {
        navbarmenu.addEventListener("mouseover", navbarMenuClose1)
    }


    function navbarMenuTopCLoseHandler() {
        for (let i = 0; i < navbarMenuTopCLose.length; i++) {
            navbarmenuSlide[i].removeAttribute("style")
        }
    }

    for (let i = 0; i < navbarMenuTopCLose.length; i++) {
        navbarMenuTopCLose[i].addEventListener('click', navbarMenuTopCLoseHandler);
    }

    if (document.documentElement.clientWidth > 752) {
        $(".customerchoice__slider-element").hover(
            function () {
                this.children[2].className += ' customerchoice-element-open'
            },
            function () {
                this.children[2].className = 'customerchoice__slider-element__info'
            });
    }

    if (itemPopupTrigger) {
        itemPopupTrigger.onclick = function () {
            $(itemMenu).removeClass('item-menu-active')
        }
    }
    const itemMenu = document.getElementById("itemMenu")

    var scrollPos2 = 0;
    $(window).scroll(function () {

        if (!itemMenu) {
            return;
        }

        var st = $(this).scrollTop();
        if (document.documentElement.clientWidth > 752) {
            if (st > scrollPos2 && scrollPos2 > 200) {
                $(itemMenu).addClass('item-menu-active')
            } else if (st < scrollPos2 ) {
                $(itemMenu).removeClass('item-menu-active')
            } else {
                $(itemMenu).removeClass('item-menu-active')

            }
        } else {
            if (st > scrollPos2 && scrollPos2 > 70) {
                $(itemMenu).addClass('item-menu-active')
                itemMenu.setAttribute('style', 'top: 24px !important')
            } else if (st < scrollPos2 && scrollPos2 > 70) {
                itemMenu.setAttribute('style', '')
                $(itemMenu).addClass('item-menu-active')
            } else {
                $(itemMenu).removeClass('item-menu-active')
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
        '#ccslider',
        '#itpSlider',
        "#item2slider",
        "#item3Slider",
        '#officeSlider',
        "#cpuslider",
        "#projectSlider",
        "#projectPageSlider"
    ].forEach(function(selector) {
        const el = document.querySelector(selector)
        if (el) {
            const slider = new Flickity(el);
            const prevEl = document.querySelector(`${selector}Prev`);
            const nextEl = document.querySelector(`${selector}Next`);
    
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

    // --- map ---

    const map = document.querySelector('#map');
    if (map) {
        const widget = document.createElement('script');
        if (window.outerWidth <= 768) {
            widget.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4d807253597a3e3d7c52827a8964c46ca25f4e174f8ff0380dc048cd66ff9e29&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=false;';
        } else {
            widget.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4d807253597a3e3d7c52827a8964c46ca25f4e174f8ff0380dc048cd66ff9e29&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false';
        }
        map.appendChild(widget);
    }

    // --- popups ---

    $("#item-cart-popup-trigger").magnificPopup({
      items: {
        src: "#item-cart-popup",
        type: "inline",
      },
        callbacks: {
            beforeOpen: function() { $('body').attr('style' , 'overflow: hidden'); },
            close: function() { $('body').removeAttr('style'); }
        }
    });

    $("#cart-popup-trigger").magnificPopup({
        items: {
            src: "#cart-popup",
            type: "inline",
        },
        callbacks: {
            beforeOpen: function() { $('body').attr('style' , 'overflow: hidden'); },
            close: function() { $('body').removeAttr('style'); }
        }

    });

    $("#cartpopupaddtrigger").magnificPopup({
        items: {
            src: "#caraddpopup",
            type: "inline",
        },
        callbacks: {
            beforeOpen: function() { $('body').attr('style' , 'overflow: hidden'); },
            close: function() { $('body').removeAttr('style'); }
        }
    });


    // ---------------

    if (document.documentElement.clientWidth > 1023) {
        $("#filtersMultiselect1").dropdownchecklist({
            firstItemChecksAll: true, emptyText: "Бренд", icon: {}, textFormatFunction: function (options) {
                return "Бренд"
            }
        });
    } else {
        $("#filtersMultiselect1").dropdownchecklist({
            firstItemChecksAll: true, emptyText: "Бренд", icon: {} ,textFormatFunction: function(options) {
                var selectedOptions = options.filter(":selected");
                var countOfSelected = selectedOptions.size();
                var size = options.size();
                var selected = selectedOptions.text().replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2").split(" ")
                switch (countOfSelected) {
                    case 0:
                        return "Бренд";
                    case 1:
                        return selectedOptions.text();
                    case options.size():
                        return "Все";
                    default:
                        return selected[1] + "<span class='filtersBrandSpan'> и еще " + (selected.length - 2 ) + '</span>'
                }
            }
        })
    }
    $("#filtersMultiselect2").dropdownchecklist({ firstItemChecksAll: true , emptyText: "Поток кислорода", icon: {}, textFormatFunction: function(options) {
            return "Поток кислорода"
    }});
    if (filtersR) {
        filtersR.className = 'filters-r1'
    }

    if (filtersTrigger) {
        filtersTrigger.onclick = function () {
            filtersR.classList += ' filters-r1-active'
        }
        document.getElementById("filtersResult").onclick = function () {
            filtersR.className = 'filters-r1'
        }
        document.getElementById("filtersClose").onclick = function () {
            filtersR.className = 'filters-r1'
        }
    }

    if (document.documentElement.clientWidth > 1023) {
        $("#filtersSort").dropdownchecklist({ icon: {}  });
    } else {
        $("#filtersSort").dropdownchecklist({ icon: {} , emptyText: "Сортировать", textFormatFunction: function(options) {
            var txt = options.filter(":selected").text()
            switch (txt) {
                case "по возрастанию цены":
                    return "По цене (по возрастанию)"
                    break;
                case "по убыванию цены":
                    return "По цене (по убыванию)"
                    break;
                case "по рейтингу":
                    return "По рейтингу"
                    break;
                default:
                    return "Сортировать"
            }

            } });
    }

    $('#itemSliderPlay , .video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


    if (document.documentElement.clientWidth > 768) {
        $('.letters-slider-sl-element').magnificPopup({
            type: 'image'
        });


        $('.item-main-preview-main').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            showCloseBtn: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title')
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }

        });
    }

    $('#projectPageSliderPlay').on('click', function(event) {
        event.preventDefault();

        $("#projectPageSlider").magnificPopup({
            delegate: 'a',
            type:'image',
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');
    });



}
