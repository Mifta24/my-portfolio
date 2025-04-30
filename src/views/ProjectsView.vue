<template>
  <div class="projects">
    <section class="projects-hero">
      <div class="container">
        <h1>My Projects</h1>
        <p class="lead">Showcasing my best work and technical capabilities</p>
      </div>
    </section>

    <section class="projects-content container">
      <div class="filter-tabs">
        <button
          @click="selectedCategory = 'all'"
          :class="{ active: selectedCategory === 'all' }"
          class="filter-btn"
        >
          All
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="{ active: selectedCategory === category }"
          class="filter-btn"
        >
          {{ category }}
        </button>
      </div>

      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-image">
            <img
              :src="require(`@/assets/${project.image}`)"
              :alt="project.title"
            />
          </div>
          <div class="project-info">
            <h2>{{ project.title }}</h2>
            <p class="project-category">{{ project.category }}</p>
            <p class="project-description">{{ project.description }}</p>
            <div class="tech-stack">
              <span
                class="tech-item"
                v-for="tech in project.technologies"
                :key="tech"
              >
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
              <a
                v-if="project.codeUrl"
                :href="project.codeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary"
              >
                <i class="fas fa-code"></i> View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="call-to-action">
      <div class="container">
        <h2>Interested in working together?</h2>
        <p>I'm always open to discussing new projects and opportunities.</p>
        <router-link to="/contact" class="btn btn-white"
          >Get in Touch</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      selectedCategory: "all",
      projects: [
        {
          id: 1,
          title: "E-Commerce Website",
          category: "Web Development",
          description:
            "A full-stack e-commerce platform with product catalog, user authentication, shopping cart, and payment integration.",
          technologies: ["Vue.js", "Laravel", "MySQL", "Stripe API"],
          image: "logo.png",
          demoUrl: "https://example.com/demo1",
          codeUrl: "https://github.com/yourusername/project1",
        },
        {
          id: 2,
          title: "Portfolio Website",
          category: "Web Design",
          description:
            "A responsive portfolio website to showcase professional work and skills.",
          technologies: ["Vue.js", "SCSS", "Animation"],
          image: "logo.png",
          demoUrl: "https://example.com/demo2",
          codeUrl: "https://github.com/yourusername/project2",
        },
        {
          id: 3,
          title: "Task Management App",
          category: "Web Development",
          description:
            "A task management application with drag-and-drop functionality, user authentication, and real-time updates.",
          technologies: ["Vue.js", "Firebase", "Vuetify"],
          image: "logo.png",
          demoUrl: "https://example.com/demo3",
          codeUrl: "https://github.com/yourusername/project3",
        },
        {
          id: 4,
          title: "Restaurant Booking System",
          category: "Web Application",
          description:
            "A restaurant booking system with reservation management, table allocation, and email notifications.",
          technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
          image: "logo.png",
          demoUrl: "https://example.com/demo4",
          codeUrl: "https://github.com/yourusername/project4",
        },
        {
          id: 5,
          title: "Weather Dashboard",
          category: "Web Application",
          description:
            "A weather dashboard that displays current weather conditions and forecasts using third-party APIs.",
          technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
          image: "logo.png",
          demoUrl: "https://example.com/demo5",
          codeUrl: "https://github.com/yourusername/project5",
        },
        {
          id: 6,
          title: "Company Website",
          category: "Web Design",
          description:
            "A modern company website with animated sections and responsive design.",
          technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
          image: "logo.png",
          demoUrl: "https://example.com/demo6",
          codeUrl: "https://github.com/yourusername/project6",
        },
      ],
    };
  },
  computed: {
    categories() {
      // Extract unique categories from projects
      return [...new Set(this.projects.map((project) => project.category))];
    },
    filteredProjects() {
      if (this.selectedCategory === "all") {
        return this.projects;
      }
      return this.projects.filter(
        (project) => project.category === this.selectedCategory
      );
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.projects-hero {
  background-color: #f5f9fc;
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 3rem;
}

.projects-hero h1 {
  font-size: 2.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.3rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-btn {
  background: transparent;
  border: 1px solid #e0e0e0;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #555;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  height: 220px;
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

.project-info h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.project-category {
  color: #3498db;
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.project-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-item {
  background-color: #f5f9fc;
  color: #3498db;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-secondary {
  background-color: transparent;
  color: #3498db;
  border: 1px solid #3498db;
}

.btn-secondary:hover {
  background-color: #3498db;
  color: white;
}

/* Call to Action */
.call-to-action {
  background-color: #3498db;
  color: white;
  padding: 4rem 0;
  text-align: center;
  margin: 3rem 0 0;
}

.call-to-action h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.call-to-action p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn-white {
  background-color: white;
  color: #3498db;
}

.btn-white:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  .filter-tabs {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 576px) {
  .project-links {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .filter-btn {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
}
</style>
