const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const IntervalTime = 10000;
let slideInterval;

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})


const nextSlide = () => {
  // get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // check for next slide
  if (current.nextElementSibling) {
    // add current to next  sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  // get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // check for prev slide
  if (current.previousElementSibling) {
    // add current to next  sibling
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


