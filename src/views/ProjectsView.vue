<template>
  <section class="content-wrapper hero">
    <h1>Projects</h1>
    <div class="project-grid">
      <div
        v-for="repo in sortedRepositories"
        :key="repo.id"
        class="project-card"
      >
        <h2>{{ repo.name }}</h2>
        <p>{{ repo.description || "No description available" }}</p>
        <div class="links">
          <!-- Conditionally render both links if available -->
          <a v-if="repo.homepage" :href="repo.homepage" target="_blank">Visit Site</a>
          <a :href="repo.html_url" target="_blank">View on GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { getRepositories } from "../services/githubService";

export default {
  setup() {
    const repositories = ref([]);
    const loading = ref(true);

    onMounted(async () => {
      repositories.value = await getRepositories();
      loading.value = false;
    });

    // Computed property to sort repositories, prioritizing those with both links
    const sortedRepositories = computed(() => {
      return repositories.value.slice().sort((a, b) => {
        // Sort by presence of both homepage and html_url
        const aHasBoth = a.homepage && a.html_url ? 1 : 0;
        const bHasBoth = b.homepage && b.html_url ? 1 : 0;
        return bHasBoth - aHasBoth; // Sort descending by presence of both links
      });
    });

    return {
      repositories,
      sortedRepositories,
      loading,
    };
  },
};
</script>

<style scoped>
.content-wrapper{
  margin-top: 80vh;

}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
}

.project-card {
  border: 1px solid var(--border-color);
  padding: 20px;
  background: var(--neutral-white);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.project-card p {
  flex-grow: 1;
  margin-bottom: 10px;
  color: var(--text-color);
}

.links {
  display: flex;
  gap: 10px; /* Space between links */
  flex-wrap: wrap; /* Wraps links if they overflow */
}

.project-card a {
  padding: 10px 15px;
  background-color: var(--link-color);
  color: var(--background-color);
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.project-card a:hover {
  background-color: var(--hover-color);
  transform: scale(1.05);
}
</style>
