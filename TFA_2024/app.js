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




document.addEventListener('DOMContentLoaded', function () {
    const iolceProject = document.getElementById('iolce');
    const hoverImage = iolceProject.querySelector('.hover-image');
    
    iolceProject.addEventListener('mousemove', function (e) {
        hoverImage.style.display = 'block';

        // Calculer la position de l'image en fonction de la position horizontale de la souris
        hoverImage.style.left = (e.clientX - hoverImage.offsetWidth * 0.8) + 'px';


        // Fixer la position verticale de l'image
        hoverImage.style.top = '2%'; 
    });

    iolceProject.addEventListener('mouseleave', function () {
        hoverImage.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const ruxProject = document.querySelector('.projects__list .project:nth-child(2)'); // Sélectionnez le deuxième projet
    const hoverImageRUX = ruxProject.querySelector('.hover-image');

    ruxProject.addEventListener('mousemove', function (e) {
        hoverImageRUX.style.display = 'block';
        hoverImageRUX.style.left = (e.clientX - hoverImageRUX.offsetWidth * 0.6) + 'px';
        hoverImageRUX.style.top = '45%';
    });

    ruxProject.addEventListener('mouseleave', function () {
        hoverImageRUX.style.display = 'none';
    });
});

