<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Miftahudin Aldi Saputra</h1>
          <h2>Web Developer & Designer</h2>
          <p>Building elegant, responsive and high-performance web applications</p>
          <div class="cta-buttons">
            <router-link to="/projects" class="btn btn-primary">View My Work</router-link>
            <router-link to="/contact" class="btn btn-secondary">Contact Me</router-link>
          </div>
        </div>
        <div class="hero-image">
          <!-- <img src="../assets/profile.jpg" alt="Miftahudin Aldi Saputra" /> -->
        </div>
      </div>
    </section>

    <section class="highlights">
      <div class="highlight-card">
        <i class="fas fa-code"></i>
        <h3>Web Development</h3>
        <p>Creating modern and responsive websites with cutting-edge technologies.</p>
      </div>
      <div class="highlight-card">
        <i class="fas fa-palette"></i>
        <h3>UI/UX Design</h3>
        <p>Crafting beautiful and intuitive user interfaces for the best user experience.</p>
      </div>
      <div class="highlight-card">
        <i class="fas fa-mobile-alt"></i>
        <h3>Responsive Design</h3>
        <p>Ensuring your website looks great on all devices and screen sizes.</p>
      </div>
    </section>

    <section class="featured-projects">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <!-- <img src="../assets/project1.jpg" alt="Project 1" /> -->
          </div>
          <div class="project-info">
            <h3>E-Commerce Website</h3>
            <p>A full-stack e-commerce solution with Vue.js and Laravel</p>
            <router-link to="/projects" class="project-link">View Details</router-link>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <!-- <img src="../assets/project2.jpg" alt="Project 2" /> -->
          </div>
          <div class="project-info">
            <h3>Portfolio Website</h3>
            <p>A responsive portfolio website built with Vue.js</p>
            <router-link to="/projects" class="project-link">View Details</router-link>
          </div>
        </div>
      </div>
      <div class="view-all">
        <router-link to="/projects" class="btn btn-outline">View All Projects</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView"
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
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero-text h2 {
  font-size: 1.8rem;
  font-weight: 500;
  color: #3498db;
  margin-bottom: 1.5rem;
}

.hero-text p {
  font-size: 1.2rem;
  color: #555;
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

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-10px);
}

.highlight-card i {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1rem;
}

.highlight-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.highlight-card p {
  color: #555;
}

/* Featured Projects */
.featured-projects {
  margin: 4rem 0;
}

.featured-projects h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
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
  color: #2c3e50;
}

.project-info p {
  color: #555;
  margin-bottom: 1rem;
}

.project-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.project-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: #3498db;
  transition: width 0.3s ease;
}

.project-link:hover::after {
  width: 100%;
}

.view-all {
  text-align: center;
  margin-top: 2rem;
}

.btn-outline {
  background-color: transparent;
  color: #3498db;
  border: 2px solid #3498db;
}

.btn-outline:hover {
  background-color: #3498db;
  color: white;
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