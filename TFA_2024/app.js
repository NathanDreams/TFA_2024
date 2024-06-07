'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById('toggleTheme');
    const body = document.getElementById('body');
    const toggleThemeText = document.getElementById('toggleThemeText');

    // Initialize theme based on localStorage or prefers-color-scheme
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleTheme.checked = true;
        toggleThemeText.textContent = 'Dark';
    } else {
        body.classList.add('light-mode');
    }

    // Event listener for theme toggle
    toggleTheme.addEventListener('change', () => {
        if (toggleTheme.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            toggleThemeText.textContent = 'Dark';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            toggleThemeText.textContent = 'Light';
        }
    });
});




let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
