/*!
* Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    // Video ad after button click
    const primaryButton = document.querySelector('.btn-primary');
    if (primaryButton) {
        primaryButton.addEventListener('click', function() {
            setTimeout(function() {
                const videoModal = new bootstrap.Modal(document.getElementById('videoAdModal'));
                const youtubeIframe = document.getElementById('youtubeVideo');
                
                // Replace VIDEO_ID with your actual YouTube video ID
                // Example: For https://www.youtube.com/watch?v=dQw4w9WgXcQ
                // The ID is dQw4w9WgXcQ
                youtubeIframe.src = "https://www.youtube.com/watch?v=gFITP2zSzT0";
                
                videoModal.show();
            }, 15000); // 15 seconds in milliseconds
        });
    }

});