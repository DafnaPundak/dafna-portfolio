<template>
  <header class="site-header">
    <div class="logo-name-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <span class="animated-name">
        <span 
          v-for="(char, index) in nameChars" 
          :key="index" 
          :style="{'--i': index}"
        >
          {{ char === ' ' ? '\u00A0' : char }} <!-- Handle space explicitly -->
        </span>
      </span>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/cv">CV</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      nameChars: 'Dafna Pundak.'.split('') // Splitting the name into individual characters
    };
  }
};
</script>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo-name-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px; /* Adjust the size as needed */
  margin-right: 10px;
}

.animated-name {
  font-size: 1.5rem; /* Keep size consistent with the header height */
  color: var(--neutral-white);
  font-weight: bold;
  display: inline-block;
}

.animated-name span {
  display: inline-block;
  animation: wave 4s infinite ease-in-out; /* Extend animation duration to include pause */
  animation-delay: calc(var(--i) * 0.1s); /* Create wave effect by staggering each letter */
}

@keyframes wave {
  0%, 20%, 100% {
    transform: translateY(0); /* Start, return to start, and hold at 0 for pause */
  }
  50% {
    transform: translateY(-8px); /* Adjust the wave height */
  }
}

nav {
  display: flex;
  gap: 15px;
}

a {
  color: var(--neutral-white);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--hover-color);
}
</style>
