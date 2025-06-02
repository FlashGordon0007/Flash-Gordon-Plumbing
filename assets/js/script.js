// Hamburger menu functionality - these elements are always expected
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

if (btn && nav) { // Only run if both elements exist
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    });
}


// Slider functionality - only run if slider elements exist on the page
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// Check if slider elements exist before trying to use them
if (slides.length > 0 && next && prev) { // Ensure there are slides AND next/prev buttons
    const auto = true;
    const IntervalTime = 10000;
    let slideInterval;

    const nextSlide = () => {
        // get current class
        const current = document.querySelector('.current');
        // remove current class
        current.classList.remove('current');
        // check for next slide
        if (current.nextElementSibling) {
            // add current to next sibling
            current.nextElementSibling.classList.add('current');
        } else {
            // add current to start
            slides[0].classList.add('current');
        }
        // This setTimeout is common for slight delay before removing, but often not strictly needed
        // If you see issues with current class not being removed, check your CSS transitions
        setTimeout(() => current.classList.remove('current')); 
    };

    const prevSlide = () => {
        // get current class
        const current = document.querySelector('.current');
        // remove current class
        current.classList.remove('current');
        // check for prev slide
        if (current.previousElementSibling) {
            // add current to prev sibling
            current.previousElementSibling.classList.add('current');
        } else {
            // add current to last
            slides[slides.length - 1].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'));
    };

    // button events
    next.addEventListener('click', e => {
        nextSlide();
        if (auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, IntervalTime);
        }
    });

    prev.addEventListener('click', e => {
        prevSlide();
        if (auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, IntervalTime);
        }
    });

    // auto slide
    if (auto) {
        // run next slide at interval time
        slideInterval = setInterval(nextSlide, IntervalTime);
    }
}