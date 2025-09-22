/**
 * Main JavaScript for Figuras Históricas
 * Handles mobile menu, animations, and accessibility features
 */
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    initMobileMenu();
    
    // Lazy load and animate sections on scroll
    initScrollAnimations();
    
    // Add accessibility enhancements
    enhanceAccessibility();
});

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        document.body.classList.toggle('menu-open');
        
        // Close menu when clicking outside
        if (!isExpanded) {
            document.addEventListener('click', closeMenuOnClickOutside);
        } else {
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    });
    
    // Close menu when clicking on links
    const menuLinks = navLinks.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Close menu function for clicking outside
    function closeMenuOnClickOutside(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    }
    
    // Handle escape key press
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    // Check if the browser supports IntersectionObserver
    if (!('IntersectionObserver' in window)) return;
    
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.hero-banner, .content-section, .timeline-item, .card'
    );
    
    // Don't animate if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animateElements.forEach(el => el.classList.add('fade-in'));
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

/**
 * Add accessibility enhancements
 */
function enhanceAccessibility() {
    // Add focus styles for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-user');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-user');
    });
    
    // Make WhatsApp button more accessible
    const whatsappButton = document.querySelector('.whatsapp-button a');
    if (whatsappButton) {
        whatsappButton.addEventListener('focus', function() {
            document.querySelector('.whatsapp-tooltip').style.opacity = '1';
        });
        
        whatsappButton.addEventListener('blur', function() {
            document.querySelector('.whatsapp-tooltip').style.opacity = '0';
        });
    }
    
    // Enhance timeline interactivity
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.setAttribute('tabindex', '0');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.querySelector('.timeline-content').classList.toggle('active');
            }
        });
    });
    
    // Add current year to copyright if needed
    const copyright = document.querySelector('.copyright p');
    if (copyright && copyright.textContent.includes('2025')) {
        const currentYear = new Date().getFullYear();
        if (currentYear !== 2025) {
            copyright.textContent = copyright.textContent.replace('2025', currentYear);
        }
    }
}

/**
 * Detect and handle scroll position for sticky header
 */
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/**
 * Handle smooth scroll to anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            // Don't use smooth scroll if user prefers reduced motion
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                targetElement.scrollIntoView();
            } else {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Update URL without scrolling
            history.pushState(null, null, targetId);
        }
    });
});

/**
 * Add touch capability detection
 */
window.addEventListener('touchstart', function onFirstTouch() {
    document.body.classList.add('touch-device');
    window.removeEventListener('touchstart', onFirstTouch);
});

/**
 * Add resize handler for responsive adjustments
 */
window.addEventListener('resize', debounce(function() {
    // Reset mobile menu state on viewport change
    if (window.innerWidth > 768) {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
}, 250));

/**
 * Debounce function to limit rapid function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}