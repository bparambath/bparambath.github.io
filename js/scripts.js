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
    // Debugged YouTube Video Popup - Working Version
    document.addEventListener('DOMContentLoaded', function() {
        const primaryButton = document.querySelector('.btn.btn-primary'); // More specific selector
        
        if (primaryButton) {
            primaryButton.addEventListener('click', function() {
                console.log('Button clicked - timer started'); // Debug log
                
                setTimeout(function() {
                    console.log('15 seconds elapsed - showing modal'); // Debug log
                    
                    const modal = new bootstrap.Modal('#videoAdModal');
                    const container = document.getElementById('youtubeContainer');
                    
                    // Clear container while keeping ratio
                    container.innerHTML = '<div class="d-flex justify-content-center align-items-center h-100"><div class="spinner-border text-primary" role="status"></div></div>';
                    
                    // Create iframe after slight delay to allow modal to initialize
                    setTimeout(function() {
                        console.log('Creating YouTube iframe'); // Debug log
                        
                        // REPLACE THIS WITH YOUR YOUTUBE VIDEO ID
                        const videoId = 'dgFITP2zSzT0'; // Example ID - replace with yours
                        
                        const iframe = document.createElement('iframe');
                        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0`;
                        iframe.setAttribute('frameborder', '0');
                        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                        iframe.setAttribute('allowfullscreen', '');
                        iframe.classList.add('w-100', 'h-100');
                        
                        container.innerHTML = '';
                        container.appendChild(iframe);
                        
                        console.log('Iframe created and added'); // Debug log
                    }, 300); // Small delay to ensure modal is ready
                    
                    modal.show();
                    
                }, 5000); // 5 seconds delay
            });
        }
    });

});