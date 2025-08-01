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
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.sticky-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScroll && currentScroll > 50) {
      // Скрол вниз — ховаємо
      header.style.opacity = '0';
      header.style.pointerEvents = 'none';
    } else {
      // Скрол вгору — показуємо
      header.style.opacity = '1';
      header.style.pointerEvents = 'auto';
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });
});

