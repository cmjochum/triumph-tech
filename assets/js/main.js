jQuery(document).ready(function ($) {
    $('#volunteer-carousel').owlCarousel({
        loop: true,
        margin: 32,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            300: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            },
            1920: {
                items: 7,
                nav: true,
                loop: false
            }
        }
    });

    $('#mission-carousel').owlCarousel({
        loop: true,
        margin: 32,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1200: {
                items: 3,
                nav: false
            }
        }
    });
});

const header = document.getElementById("header");
const hero = document.querySelector(".hero");
const heroHeight = hero.offsetHeight;

window.addEventListener("scroll", () => {
    if (window.scrollY >= heroHeight) {
        header.classList.remove("header-absolute");
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
        header.classList.add("header-absolute");
    }
});

// Animate on scroll
const animateElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

animateElements.forEach(el => observer.observe(el));