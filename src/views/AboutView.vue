<template>
    <section class="content-wrapper about ">
      <img src="@/assets/photo.jpg" alt="Your Name" class="profile-photo" />
      <h1>About Me</h1>
      <p>
        I'm Dafna, a full-stack developer specializing in Vue.js and Python. I
        have a passion for tackling challenging projects, especially those that
        push the boundaries of technology and creativity.
      </p>
      <p>
        As a freelancer, I enjoy the freedom to work on diverse projects from
        anywhere in the world. Living the digital nomad lifestyle, I combine my
        love for coding with a passion for travel and exploring new cultures.
        This lifestyle not only fuels my creativity but also allows me to bring
        fresh perspectives to the projects I work on.
      </p>
      <p>
        Over the years, I've collaborated with startups, agencies, and
        individual clients, delivering high-quality solutions tailored to their
        needs. I thrive in environments where I can continuously learn and apply
        my skills in innovative ways.
      </p>
    </section>
</template>

<style scoped>
h1 {
  margin-bottom: 10px;
}
p {
  margin-bottom: 15px;
  line-height: 1.6;
}
.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.content-wrapper {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

</style>
