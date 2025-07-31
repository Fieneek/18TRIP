<script>
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.getElementById('chapterDropdown');

    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
      if (!toggleButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  });
</script>

