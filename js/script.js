document.addEventListener('DOMContentLoaded', () => {
  // --- ТЕМА ---
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', current);

    btn.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // --- ВИПАДАЮЧЕ МЕНЮ РОЗДІЛІВ ---
  const toggleButton = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.getElementById('chapterDropdown');

  if (toggleButton && dropdownMenu) {
    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = dropdownMenu.style.display === 'block';
      dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
      if (!toggleButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }
// --- ЗМЕНШЕННЯ/СХОВУВАННЯ ЗАГОЛОВКА ПРИ ПРОКРУТЦІ ---
document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const header = document.querySelector('.sticky-header');

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop + 10) {
        // Прокрутка вниз — сховати плашку
        header.classList.add('header-hidden');
      } else if (currentScroll < lastScrollTop - 10) {
        // Прокрутка вгору — показати плашку
        header.classList.remove('header-hidden');
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }
});


