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
    // YouTube Video Popup - Mobile Optimized
    document.querySelector('.btn-primary')?.addEventListener('click', () => {
    setTimeout(() => {
        const modal = new bootstrap.Modal('#videoAdModal');
        const modalBody = document.querySelector('#videoAdModal .modal-body');
        
        // Clear previous iframe if any
        modalBody.innerHTML = '';
        
        // Create responsive YouTube iframe
        const iframe = document.createElement('iframe');
        iframe.className = 'w-100 h-100';
        iframe.src = 'https://www.youtube.com/watch?v=gFITP2zSzT0';
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('frameborder', '0');
        
        // Mobile-specific optimizations
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            iframe.src += '&playsinline=1';
        }
        
        modalBody.appendChild(iframe);
        modal.show();
    }, 5000);
});

});