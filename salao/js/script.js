// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();

    // Initialize automatic date updates
    initAutomaticDates();

    // Wait for schema.js to load, then update schema
    setTimeout(function() {
        if (typeof window.updateSchemaWithCurrentDate === 'function') {
            window.updateSchemaWithCurrentDate();
        }
    }, 100);
});

// Mobile Menu Toggle
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (navToggle && navMenu) {
        // Function to close menu
        function closeMenu() {
            navMenu.classList.remove('active');
            const hamburgerIcon = navToggle.querySelector('.hamburger-icon');
            if (hamburgerIcon) {
                hamburgerIcon.style.transform = 'rotate(0deg)';
            }
        }

        // Function to open menu
        function openMenu() {
            navMenu.classList.add('active');
            const hamburgerIcon = navToggle.querySelector('.hamburger-icon');
            if (hamburgerIcon) {
                hamburgerIcon.style.transform = 'rotate(90deg)';
            }
        }

        // Toggle menu on hamburger click
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu when clicking the X button
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeMenu();
            });
        }

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                closeMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });
    }
}

// Automatic Date Updates
function initAutomaticDates() {
    updateCopyrightYear();
    updateMetaDates();
    updateSitemapDates();
}

// Update Copyright Year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();

    // Update footer copyright
    const copyrightElements = document.querySelectorAll('[data-copyright], .footer-bottom p');
    copyrightElements.forEach(element => {
        if (element.textContent.includes('©')) {
            element.innerHTML = element.innerHTML.replace(/©\s*\d{4}/, `© ${currentYear}`);
        }
    });

    // Update any span or element with class 'current-year'
    const yearElements = document.querySelectorAll('.current-year, [data-year="current"]');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Update Meta Tags (JSON-LD Schema)
function updateMetaDates() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD format

    // Update JSON-LD schema if exists
    const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (jsonLdScript) {
        try {
            const jsonData = JSON.parse(jsonLdScript.textContent);

            // Update any date fields in schema
            if (jsonData.dateModified !== undefined) {
                jsonData.dateModified = formattedDate;
            }
            if (jsonData.lastReviewed !== undefined) {
                jsonData.lastReviewed = formattedDate;
            }

            // Update the script content
            jsonLdScript.textContent = JSON.stringify(jsonData, null, 2);
        } catch (e) {
            console.log('Schema JSON update skipped - no modifications needed');
        }
    }
}

// Update Sitemap Dates (for client-side generated sitemap)
function updateSitemapDates() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    // Store last modified date in localStorage for sitemap generation
    localStorage.setItem('lastModified', formattedDate);

    // Update any elements with data-lastmod attribute
    const lastModElements = document.querySelectorAll('[data-lastmod]');
    lastModElements.forEach(element => {
        element.setAttribute('data-lastmod', formattedDate);
        if (element.textContent.match(/\d{4}-\d{2}-\d{2}/)) {
            element.textContent = element.textContent.replace(/\d{4}-\d{2}-\d{2}/, formattedDate);
        }
    });
}

// Format current date for different contexts
function getCurrentFormattedDate(format = 'iso') {
    const now = new Date();

    switch (format) {
        case 'iso':
            return now.toISOString().split('T')[0]; // YYYY-MM-DD
        case 'br':
            return now.toLocaleDateString('pt-BR'); // DD/MM/YYYY
        case 'full-br':
            return now.toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        case 'year':
            return now.getFullYear().toString();
        case 'month-year':
            return now.toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long'
            });
        default:
            return now.toISOString().split('T')[0];
    }
}

// Update all automatic dates on page (can be called manually)
function updateAllDates() {
    updateCopyrightYear();
    updateMetaDates();
    updateSitemapDates();
    console.log('All dates updated automatically');
}

// Expose functions globally for manual use
window.updateAllDates = updateAllDates;
window.getCurrentFormattedDate = getCurrentFormattedDate;
