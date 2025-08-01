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

  // --- НАВІГАЦІЯ РОЗДІЛАМИ ---
  const nav = document.getElementById('chapter-navigation');
  if (nav) {
    const currentIndex = parseInt(nav.dataset.index, 10);
    const total = parseInt(nav.dataset.total, 10);

    const prev = nav.querySelector('.prev-chapter');
    const next = nav.querySelector('.next-chapter');
    const info = nav.querySelector('.chapter-info');

    if (prev && currentIndex > 1) {
      prev.href = `chapter${currentIndex - 1}.html`;
    } else {
      prev.style.visibility = 'hidden';
    }

    if (next && currentIndex < total) {
      next.href = `chapter${currentIndex + 1}.html`;
    } else {
      next.style.visibility = 'hidden';
    }

    if (info) {
      info.textContent = `Глава ${currentIndex} / ${total}`;
    }
  }

  // --- ПРОГРЕС ЛІНІЯ ---
  const progress = document.getElementById('progress-bar');
  if (progress) {
    document.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      progress.style.width = `${percent}%`;
    });
  }
});


