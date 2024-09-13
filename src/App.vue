<template>
  <div id="app">
    <HeaderView class="header" />
    <main class="main-content">
      <router-view />
    </main>
    <FooterView class="footer" />
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";

export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style>
:root {
  --downy: #64c0d1;
  --tiara: #ced6d9;
  --cloud-burst: #223447;
  --boston-blue: #2f8eb5;
  --slate-gray: #6d8694;
  --fiord: #3c576a;
  --nevada: #5f6d71;
  --viridian: #457a65;
  --mineral-green: #3c5854;
  --ocean-green: #459c6c;

  /* Mapping common names for ease of use */
  --primary-color: var(--boston-blue);
  --secondary-color: var(--downy);
  --background-color: var(--tiara);
  --text-color: var(--cloud-burst);
  --link-color: var(--ocean-green);
  --hover-color: var(--viridian);
  --border-color: var(--slate-gray);
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: Arial, sans-serif;
  margin: 0;
}

#app {
  display: grid;
  grid-template-rows: auto 1fr auto; /* Header, Main, Footer */
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Prevents overall page scrolling */
}

.header,
.footer {
  width: 100%; /* Full width */
  height: 80px; /* Increased height for header and footer */
  display: flex;
  align-items: center;
  justify-content: center; /* Centers content horizontally */
  background-color: var(--primary-color);
  box-sizing: border-box;
  padding: 20px 40px;

}

.header nav, .footer nav {
  display: flex;
  gap: 20px;
}

.header .logo,
.footer .logo {
  width: 60px; /* Adjust size for a larger logo */
  height: auto;
  border-radius: 10px; /* Rounded corners for the logo */
}

.header a,
.footer a {
  font-size: 1.2rem; /* Larger font size for text */
  color: var(--neutral-white);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.header a:hover,
.footer a:hover {
  color: var(--hover-color);
}

.main-content {
  overflow-y: auto; /* Allows scrolling only in the main content */
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('@/assets/logo-light.png');
  background-size: 200px 200px;
  background-repeat: repeat;
  background-position: center;

}

.content-wrapper {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 2vh;
  margin-bottom: 2vh;
}
</style>
