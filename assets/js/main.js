// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// =============================================================================
// MAIN JAVASCRIPT FILE
// Executes after the entire page is loaded.
// =============================================================================

function initializePage() {
    // -----------------------------------------------------------------------------
    // SMOOTH SCROLL LOGIC
    // -----------------------------------------------------------------------------
    document.body.addEventListener('click', function(event) {
        const link = event.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        if (href === '#' || link.closest('[id^="theme-switcher-container"]')) return;

        try {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } catch (e) {
            console.warn(`Smooth scroll could not find element for selector: ${href}`);
        }
    });

    // -----------------------------------------------------------------------------
    // PROJECT MODAL LOGIC
    // -----------------------------------------------------------------------------
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        const modalContentContainer = document.getElementById('projectModalContentContainer');

        if (modalContentContainer) {
            modalContentContainer.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        }

        projectModal.addEventListener('click', (event) => {
            // This check is more robust, ensuring we only close if the direct target is the overlay
            if (event.target === projectModal) {
                closeProjectModal();
            }
        });
    }
    
    // -----------------------------------------------------------------------------
    // NAVIGATION (Mobile Menu) LOGIC
    // -----------------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (link.getAttribute('href').startsWith('#')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }
}

// This is the key: Wait for the entire window, including all content (images, scripts, etc.), to be fully loaded.
// This is more reliable than DOMContentLoaded for preventing race conditions.
if (document.readyState === 'complete') {
    initializePage();
} else {
    window.addEventListener('load', initializePage);
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-ctp-base');
            navbar.classList.remove('bg-ctp-base/95');
        } else {
            navbar.classList.add('bg-ctp-base/95');
            navbar.classList.remove('bg-ctp-base');
        }
    }
});

// Project modal functions (aşağıda _includes/project_modal_scripts.html içinde olacak)
// Bu dosya sadece genel UI etkileşimlerini içermeli

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        // Hamburger butonuna tıklandığında menüyü aç/kapat
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Menü içindeki bir linke tıklandığında menüyü otomatik olarak kapat
        // Bu, özellikle #about gibi sayfa içi linkler için kullanıcı deneyimini iyileştirir.
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
