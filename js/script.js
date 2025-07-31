document.addEventListener('DOMContentLoaded', () => {
  // Темна тема
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Зберігання обраної теми
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }

  themeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Випадаючий список "Розділи"
  const toggleButton = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.getElementById('chapterDropdown');

  if (toggleButton && dropdownMenu) {
    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
      if (!toggleButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }
});
