const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const pageCounter = document.querySelector('.counter');

pageCounter.innerText = '1';

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});

prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length - 1) {
    nextBtn.disabled = true;
    prevBtn.disabled = false;
  }

  if (counter === 0 ) {
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  }

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  pageCounter.innerText = `${counter + 1}`;
}