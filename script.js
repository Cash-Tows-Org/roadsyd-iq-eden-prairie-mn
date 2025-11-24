// Scroll to top on page load/navigation
// Disable browser's automatic scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Scroll to top when page loads
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// Also scroll to top immediately if page is already loaded
if (document.readyState !== 'loading') {
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
let mobileMenuInitialized = false;

function initMobileMenu() {
    if (mobileMenuInitialized) return;
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const isShown = mobileMenu.classList.contains('show');
            if (isShown) {
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('hidden');
            } else {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('show');
            }
        });
        mobileMenuInitialized = true;
    }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    
    // Services Dropdown Toggle
    const servicesToggle = document.querySelector('.services-toggle');
    const servicesMenu = document.querySelector('.services-menu');
    const servicesDropdown = document.querySelector('.services-dropdown');
    
    if (servicesToggle && servicesMenu) {
        servicesToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            servicesMenu.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (servicesDropdown && !servicesDropdown.contains(event.target)) {
                servicesMenu.classList.add('hidden');
            }
        });
    }
    
    
    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // FAQ Accordion Functionality
    const faqButtons = document.querySelectorAll('.faq-question-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            // Toggle current FAQ item
            this.setAttribute('aria-expanded', !isExpanded);
        });
    });
});

// Also initialize immediately if DOM is already loaded (fallback)
if (document.readyState !== 'loading') {
    initMobileMenu();
}

