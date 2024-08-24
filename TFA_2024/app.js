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
  const projects = document.querySelectorAll('.projects__list .project');

  projects.forEach(project => {
      const hoverImage = project.querySelector('.hover-image');
      const link = project.querySelector('a');

      project.addEventListener('mousemove', function (e) {
          hoverImage.style.display = 'block';
          hoverImage.style.left = (e.clientX - hoverImage.offsetWidth * 0.8) + 'px';
          hoverImage.style.top = '-40%'; // You can adjust this value as needed
      });

      project.addEventListener('mouseleave', function () {
          hoverImage.style.display = 'none';
      });

      project.addEventListener('click', function (e) {
          e.preventDefault();
          window.location.href = link.href;
      });
  });

  // Additional logic to handle hover image visibility when moving between projects
  projects.forEach((currentProject, index) => {
      currentProject.addEventListener('mousemove', function (e) {
          // Check if the mouse is in the next project area
          if (index < projects.length - 1) {
              const nextProject = projects[index + 1];
              const nextProjectRect = nextProject.getBoundingClientRect();

              if (e.clientY > nextProjectRect.top) {
                  const hoverImageNext = nextProject.querySelector('.hover-image');
                  hoverImageNext.style.display = 'none';
              }
          }
      });
  });
});





