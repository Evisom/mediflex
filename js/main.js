window.onload = function () {

    const mobileMenuPhoneButton = document.getElementById("mobileMenuPhoneButton");
    const phonePopup = document.getElementById("phonePopup");
    const wrapper = document.getElementById("wrapper");
    const phonePopupBlackout = document.getElementById("phonePopupBlackout");
    const navbar = document.getElementById("navbar");

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


}