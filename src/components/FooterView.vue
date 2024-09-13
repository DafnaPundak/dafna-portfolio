<template>
    <footer class="site-footer">
      <div class="social-links">
        <a href="https://github.com/DafnaPundak" target="_blank" aria-label="GitHub">
          <img src="@/assets/github-icon.png" alt="GitHub Logo" class="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/dafna-pundak/" target="_blank" aria-label="LinkedIn">
          <img src="@/assets/linkedin-icon.png" alt="LinkedIn Logo" class="social-icon" />
        </a>
        <a href="https://www.facebook.com/dafna.mordechai" target="_blank" aria-label="Facebook">
          <img src="@/assets/facebook-icon.png" alt="Facebook Logo" class="social-icon" />
        </a>
      </div>
      <div class="rights">
        © Dafna Pundak 2023.
      </div>
    </footer>
  </template>
  
  <style scoped>
  .site-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px; /* Match header height */
    background-color: var(--primary-color);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .social-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .social-icon {
    width: 30px; /* Match header element sizes */
    height: 30px;
    transition: transform 0.3s ease;
  }
  
  .social-icon:hover {
    transform: scale(1.1);
  }
  
  .rights {
    color: var(--neutral-white);
    font-size: 1rem; /* Match header text size */
    text-align: right;
  }
  </style>
  