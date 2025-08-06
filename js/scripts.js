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
    // Working YouTube Video Popup
    document.addEventListener('DOMContentLoaded', function() {
        const primaryButton = document.querySelector('.btn-primary');
        
        if (primaryButton) {
            primaryButton.addEventListener('click', function() {
                setTimeout(function() {
                    const modal = new bootstrap.Modal(document.getElementById('videoAdModal'));
                    const container = document.getElementById('youtubeContainer');
                    
                    // Clear previous content
                    container.innerHTML = '';
                    
                    // Create YouTube iframe (REPLACE VIDEO_ID with your actual ID)
                    const iframe = document.createElement('iframe');
                    iframe.src = 'https://www.youtube.com/embed/gFITP2zSzT0?autoplay=1&mute=1&playsinline=1';
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                    iframe.setAttribute('allowfullscreen', '');
                    iframe.classList.add('w-100', 'h-100');
                    
                    container.appendChild(iframe);
                    modal.show();
                    
                    // Unmute after user interaction (for mobile)
                    document.getElementById('videoAdModal').addEventListener('shown.bs.modal', function() {
                        iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
                    });
                }, 5000); // 5 second delay
            });
        }
    });

});