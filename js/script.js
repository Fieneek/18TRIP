<style>
  .dropdown-container {
    position: relative;
    display: inline-block;
  }

  .dropdown-toggle {
    padding: 8px 16px;
    background-color: #eee;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 6px;
  }

  #chapterDropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ccc;
    min-width: 160px;
    z-index: 1000;
    border-radius: 6px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  #chapterDropdown a {
    display: block;
    padding: 10px;
    color: black;
    text-decoration: none;
  }

  #chapterDropdown a:hover {
    background-color: #f0f0f0;
  }
</style>

<div class="dropdown-container">
  <button class="dropdown-toggle">Розділи</button>
  <div id="chapterDropdown">
    <a href="1_prologue.html">Розділ 1</a>
    <a href="2_something.html">Розділ 2</a>
    <!-- інші -->
  </div>
</div>

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

