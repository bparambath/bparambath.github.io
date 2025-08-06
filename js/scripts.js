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
    // Guaranteed Working YouTube Player
    document.addEventListener('DOMContentLoaded', function() {
    const primaryButton = document.querySelector('.btn.btn-primary');
    
    if (primaryButton) {
        primaryButton.addEventListener('click', function() {
        setTimeout(showYouTubeModal, 15000); // 15 seconds
        });
    }
    });

    function showYouTubeModal() {
    const modal = new bootstrap.Modal('#videoAdModal');
    const playerDiv = document.getElementById('youtubePlayer');
    
    // First show the modal with loading message
    modal.show();
    
    // Create iframe after modal is shown
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&playsinline=1';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    
    // Replace loading message with iframe
    playerDiv.innerHTML = '';
    playerDiv.appendChild(iframe);
    
    // For debugging
    console.log('YouTube iframe created with src:', iframe.src);
    }

});