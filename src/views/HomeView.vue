<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>{{ profile.name }}</h1>
          <h2>{{ profile.title }}</h2>
          <p>
            Building modern, scalable web applications from database to user
            interface with Laravel, Vue.js, and REST APIs, accelerated by
            AI-assisted development and automation.
          </p>
          <div class="cta-buttons">
            <router-link to="/projects" class="btn btn-primary"
              >View My Work</router-link
            >
            <router-link to="/contact" class="btn btn-secondary"
              >Contact Me</router-link
            >
          </div>
        </div>
        <div class="hero-image">
          <img :src="profileImage" :alt="profile.name" />
        </div>
      </div>
    </section>

    <section class="highlights">
      <div class="highlight-card">
        <i class="fas fa-laptop-code"></i>
        <h3>Frontend & Backend</h3>
        <p>
          Proficient in Vue.js, Tailwind CSS, Laravel, PHP, and REST API
          development for responsive, full-stack web applications.
        </p>
      </div>
      <div class="highlight-card">
        <i class="fas fa-database"></i>
        <h3>Database & Server Management</h3>
        <p>
          Experienced with MySQL, PostgreSQL, Supabase, Docker, and VPS server
          management for reliable data handling and smooth deployments.
        </p>
      </div>
      <div class="highlight-card">
        <i class="fas fa-robot"></i>
        <h3>AI & Automation</h3>
        <p>
          Skilled in AI-assisted development, LLM API integration, and workflow
          automation with n8n and MCP.
        </p>
      </div>
    </section>

    <section class="featured-projects">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div
          class="project-card"
          v-for="project in featuredProjects"
          :key="project.id"
        >
          <div class="project-image">
            <img :src="getImageSrc(project.image)" :alt="project.title" />
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <router-link to="/projects" class="project-link"
              >View Details</router-link
            >
          </div>
        </div>
      </div>
      <div class="view-all">
        <router-link to="/projects" class="btn btn-outline"
          >View All Projects</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import profile from "@/data/profile";
import projects from "@/data/projects";
import profileImage from "@/assets/profile.jpg";
import { getImageSrc } from "@/utils/image";

const FEATURED_COUNT = 2;

export default {
  name: "HomeView",
  data() {
    return {
      profile,
      profileImage,
      // projects.js diurutkan dari yang paling baru, jadi ambil yang teratas
      featuredProjects: projects.slice(0, FEATURED_COUNT),
    };
  },
  methods: { getImageSrc },
};
</script>

<style scoped>
.home {
  margin-top: 2rem;
}

/* Hero Section */
.hero {
  padding: 2rem 0 4rem;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-text {
  flex: 1;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.hero-text h2 {
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.hero-text p {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

/* Highlights Section */
.highlights {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 4rem 0;
}

.highlight-card {
  flex: 1;
  padding: 2rem;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--shadow-card);
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-10px);
}

.highlight-card i {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.highlight-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.highlight-card p {
  color: var(--color-text);
}

/* Featured Projects */
.featured-projects {
  margin: 4rem 0;
}

.featured-projects h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-heading);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.project-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

.project-info p {
  color: var(--color-text);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.project-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.project-link:hover::after {
  width: 100%;
}

.view-all {
  text-align: center;
  margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 992px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero-text p {
    margin: 0 auto 2rem;
  }

  .cta-buttons {
    justify-content: center;
  }

  .highlights {
    flex-direction: column;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
