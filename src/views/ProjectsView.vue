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
          v-for="project in paginatedProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-image">
            <img
              :src="require(`@/assets/${project.image}`)"
              :alt="project.title"
              class="project-img"
              @error="handleImageError"
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

      <!-- Pagination -->
      <div class="pagination" v-if="totalPages > 1">
        <button
          class="pagination-btn"
          :class="{ disabled: currentPage === 1 }"
          @click="currentPage--"
          :disabled="currentPage === 1"
        >
          <i class="fas fa-chevron-left"></i> Previous
        </button>

        <div class="pagination-numbers">
          <button
            v-for="page in totalPages"
            :key="page"
            class="page-number"
            :class="{ active: currentPage === page }"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
        </div>

        <button
          class="pagination-btn"
          :class="{ disabled: currentPage === totalPages }"
          @click="currentPage++"
          :disabled="currentPage === totalPages"
        >
          Next <i class="fas fa-chevron-right"></i>
        </button>
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
      currentPage: 1,
      itemsPerPage: 6, // Jumlah proyek per halaman
      projects: [
        {
          id: 1,
          title: "Phone Match",
          category: "Web Development",
          description:
            "Smartphone recommendation system using the TOPSIS method with Tailwind CSS and Laravel Fullstack",
          technologies: ["Tailwind CSS", "Laravel", "PostgreSQL", "Supabase"],
          image: "phone_match.jpeg",
          demoUrl: "https://phonematch.laravel.cloud/",
          codeUrl: "https://github.com/Mifta24/spk-hp-topsis",
        },
        {
          id: 2,
          title: "Perfume Shop",
          category: "Web Application",
          description:
            "A perfume store website built using Bootstrap and Laravel, equipped with a payment gateway.",
          technologies: ["Bootstrap", "Laravel", "MySQL"],
          image: "Mistify.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/Mistify",
        },

        {
          id: 3,
          title: "Coffee Shop Booking System",
          category: "Web Application",
          description:
            "A coffee shop booking system with user authentication, booking management, and payment integration.",
          technologies: ["PHP", "Bootstrap", "MySQL"],
          image: "trackercoffee.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/Tracker-Coffee",
        },
        {
          id: 4,
          title: "Learning Management System (LMS)",
          category: "Web Application",
          description:
            "An online learning management system with course creation, user management, and progress tracking.",
          technologies: ["Bootstrap", "Laravel", "SQLite"],
          image: "lms-cihuy.png",
          demoUrl: "#",
          codeUrl:
            "https://github.com/Mifta24/Learning-Management-System-Cihuy-University",
        },

        {
          id: 5,
          title: "Course Management System",
          category: "Web Application",
          description:
            "A course management system with user authentication, course creation, and progress tracking.",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: "learningbymiftah.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/LearningbyMiftah",
        },
        {
          id: 6,
          title: "Company Profile",
          category: "Web Development",
          description:
            "A company profile website with a modern design and responsive layout.",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: "technodigits.png",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: 7,
          title: "Food Ordering System",
          category: "Web Application",
          description:
            "A food ordering system with user authentication, order management, and payment integration.",
          technologies: ["PHP", "CSS", "JavaScript", "Bootstrap", "MySQL"],
          image: "cateringku.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/cateringku",
        },
        {
          id: 8,
          title: "Ticketing Event System",
          category: "Web Application",
          description:
            "A ticketing event system with user authentication, event management, and payment integration.",
          technologies: ["Laravel", "Bootstrap", "JavaScript", "MySQL"],
          image: "prevents.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/prevents",
        },
        {
          id: 9,
          title: "Registration KKN - KKP System",
          category: "Web Application",
          description:
            "A registration system for KKN and KKP programs with user authentication and document management.",
          technologies: [".NET", "C#", "Bootstrap", "JavaScript"],
          image: "kkn-kkp.png",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: 10,
          title: "Recipe app",
          category: "Mobile Application",
          description:
            "A mobile application for sharing and discovering recipes with user authentication.",
          technologies: ["Flutter", "Firebase"],
          image: "logo.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/recipesapp",
        },
        {
          id: 11,
          title: "Task Management App",
          category: "Mobile Application",
          description:
            "A task management app with user authentication, task creation, and notifications.",
          technologies: ["Flutter", "Firebase", "Cloud Firestore"],
          image: "logo.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/master_plans_flutter",
        },
        {
          id: 12,
          title: "Tire Api",
          category: "Rest API",
          description:
            "A RESTful API for managing tire data with CRUD operations and authentication.",
          technologies: ["Laravel", "PostgreSQL", "JSON", "PHP"],
          image: "tire-api.jpeg",
          demoUrl: "https://tire.fts.biz.id/docs/api#/",
          codeUrl: "https://github.com/Mifta24/tires",
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === "all") {
        return this.projects;
      }
      return this.projects.filter(
        (project) => project.category === this.selectedCategory
      );
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProjects.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredProjects.length / this.itemsPerPage);
    },
    categories() {
      return [...new Set(this.projects.map((project) => project.category))];
    },
  },
  methods: {
    handleImageError(e) {
      // Fallback untuk gambar yang tidak ditemukan
      e.target.src = "https://via.placeholder.com/450x250?text=Project+Image";
    },
  },
  watch: {
    selectedCategory() {
      this.currentPage = 1; // Reset ke halaman pertama ketika kategori berubah
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
  margin-bottom: 2rem;
}

.project-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%; /* Memastikan semua card memiliki tinggi yang sama */
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  height: 220px; /* Tinggi gambar konsisten */
  overflow: hidden;
  position: relative;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Mengisi sisa ruang */
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
  flex-grow: 1; /* Memastikan deskripsi mengisi ruang yang tersedia */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Batasi jumlah baris teks */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin-top: auto; /* Pindahkan tombol ke bagian bawah card */
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

/* Pagination Styles */
.pagination {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pagination-btn {
  background-color: white;
  color: #3498db;
  border: 1px solid #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination-btn:hover:not(.disabled) {
  background-color: #f5f9fc;
}

.pagination-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background-color: white;
  color: #555;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-number:hover:not(.active) {
  background-color: #f5f9fc;
}

.page-number.active {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}

/* Penyesuaian responsif untuk pagination */
@media (max-width: 576px) {
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }

  .pagination-numbers {
    order: -1;
  }
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
