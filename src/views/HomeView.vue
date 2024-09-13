<template>
    <section class="content-wrapper hero hero-content">
      <!-- <div class="hero-content"> -->
        <h1>Welcome to My Digital World</h1>
        <p>I'm Dafna, a full-stack developer and digital nomad living my passion for coding and exploration.</p>
        <button @click="goToProjects">Explore My Work</button>
      <!-- </div> -->
    </section>
</template>

<script>
export default {
  methods: {
    goToProjects() {
      this.$router.push('/projects');
    }
  }
};
</script>

<style scoped>
.content-wrapper {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.hero {
  text-align: center;
  padding: 20px;
  position: relative;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: var(--primary-color); /* Main color for titles */
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--text-color); /* Text color */
}

.hero-content button {
  padding: 12px 24px;
  font-size: 1.2rem;
  color: var(--background-color); /* Button text color */
  background-color: var(--link-color); /* Button background */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hero-content button:hover {
  background-color: var(--hover-color); /* Button hover effect */
}
</style>
