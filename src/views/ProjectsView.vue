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
              :src="getImageSrc(project.image)"
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
          id: 20,
          title: "FTS Hotel AI",
          category: "Web Application",
          description:
            "A hotel guest platform with an AI concierge that welcomes visitors and helps them explore rooms, view facilities, plan reservations, and talk to hotel staff. Supports multiple languages (ID/EN/JA) with a voice toggle.",
          technologies: [
            "PHP 8.3",
            "Laravel 13",
            "Tailwind CSS 4",
            "Vite",
            "PostgreSQL",
            "LLM Tool Calling",
            "LM Studio",
          ],
          image: "hotel-ai.png",
          demoUrl: "https://hotel-ai.fts-tech.co.id",
          codeUrl: "https://github.com/Mifta24/fts-hotel-ai",
        },
        {
          id: 19,
          title: "QRIS Self-Managed Payment System",
          category: "Web API",
          description:
            "A centralized internal payment API for multiple projects. It creates invoices with unique codes, generates dynamic QRIS payloads using a custom TLV/CRC16 implementation, serves a public payment page, and lets admins confirm payments manually from a dashboard, with signed (HMAC) callbacks and full audit logs.",
          technologies: [
            "PHP 8.3",
            "Laravel 13",
            "Filament 4",
            "Tailwind CSS 4",
            "Alpine.js",
            "PostgreSQL",
            "Laravel Worker",
            "jsQR",
          ],
          image: "qris-payment.png",
          demoUrl: "https://qris-self-managed-payment-system.fts-tech.co.id/",
          codeUrl:
            "https://github.com/Mifta24/qris-self-managed-payment-system",
        },
        {
          id: 18,
          title: "FTS Menu",
          category: "Web Application",
          description:
            "A digital menu platform for restaurants and cafes. Owners update prices, photos, descriptions, and availability from a dashboard, while customers scan a single QR code to see the latest menu. Includes tiered pricing plans and multi-language support.",
          technologies: [
            "PHP 8.3",
            "Laravel 13",
            "Tailwind CSS",
            "Alpine.js",
            "PostgreSQL",
            "QR Code",
          ],
          image: "fts-menu.png",
          demoUrl: "https://fts-menu.fts-tech.co.id",
          codeUrl: "https://github.com/Mifta24/fts-resturant-menu",
        },
        {
          id: 17,
          title: "Premier Laundry",
          category: "Mobile Application",
          description:
            "A pickup-and-delivery laundry app with three roles in one: Customer, Courier, and Admin. Customers order per-kilo or per-item laundry, pick locations on a map, pay via QRIS or Xendit, and track status in real time while earning loyalty points. Admins weigh orders, verify payments, assign couriers, and export revenue reports.",
          technologies: [
            "Flutter",
            "Dart",
            "Provider",
            "GoRouter",
            "Supabase",
            "PostgreSQL",
            "Supabase Edge Functions",
            "Firebase FCM",
            "Xendit",
            "Flutter Map",
            "Geolocator",
          ],
          image: "premier-laundry.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/premire_laundry",
        },
        {
          id: 16,
          title: "Posyandu Merpati",
          category: "Mobile Application",
          description:
            "An Android posyandu management app for health workers (kader) and parents. Kader manage toddler data, record immunizations and growth, schedule activities, and export PDF/Excel reports. Parents register toddlers, view growth charts with automatic nutritional status, track immunization history and agenda, and receive real-time notifications.",
          technologies: [
            "Flutter",
            "Dart",
            "Provider",
            "Supabase",
            "PostgreSQL",
            "Supabase Edge Functions",
            "Firebase FCM",
            "FL Chart",
            "PDF & Excel Export",
          ],
          image: "posyandu-merpati.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/posyandu_merpati",
        },
        {
          id: 15,
          title: "MyPengaduan Mobile App",
          category: "Mobile Application",
          description:
            "A citizen complaint mobile app connected to a Laravel backend. Residents submit complaints with category, location, and photos, track status in real time with push notifications, and read announcements. Includes an admin panel for verification, handling complaints, and PDF/Excel reports.",
          technologies: [
            "Flutter",
            "Dart",
            "Provider",
            "GoRouter",
            "Dio",
            "Laravel API",
            "Firebase FCM",
            "PDF & Excel Export",
          ],
          image: "mypengaduan-banner.jpg",
          demoUrl:
            "https://drive.google.com/drive/folders/1HhLJULIqwtSnwuUuyLL0gC318XoqON4k",
          codeUrl: "https://github.com/Mifta24/mypengaduan_app",
        },
        {
          id: 14,
          title: "Digital Complaint Web and Api",
          category: "Web Application",
          description:
            "A digital complaint system with user authentication, complaint management, and response tracking.",
          technologies: [
            "PHP 8.3",
            "Laravel 12",
            "Laravel Sanctum",
            "Tailwind CSS",
            "Alpine.js",
            "Chart.js",
            "PostgreSQL",
            "Laravel Worker",
            "Firebase",
            "Cloudinary",
          ],
          image: "my-pengaduan.png",
          demoUrl: "https://my-pengaduan.miftahaldi.my.id",
          codeUrl: "https://github.com/Mifta24/my-pengaduan",
        },
        {
          id: 13,
          title: "Law Office Syarif & Partners",
          category: "Company Website",
          description:
            "A company profile website for a law office providing legal services to foreign investors, companies, and residents in Indonesia, covering visa and immigration (KITAS, KITAP), company setup (PT PMA), and business advisory. Includes a lawyer profile, legal guides, blog, consultation booking, and WhatsApp chat.",
          technologies: ["WordPress", "PHP", "Polylang", "WPForms"],
          image: "law-office.png",
          demoUrl: "https://law.fts-tech.co.id",
          codeUrl: "#",
        },
        {
          id: 12,
          title: "Thai Travel",
          category: "Web Application",
          description:
            "A transportation and tourism booking platform for Thailand, offering private airport transfers, hourly city car rentals, and curated tour packages. Features verified drivers, real-time flight tracking, and a membership loyalty points program.",
          technologies: [
            "PHP 8.3",
            "Laravel 12",
            "Tailwind CSS",
            "Alpine.js",
            "Laravel Reverb",
            "Stripe",
            "Laravel Socialite",
            "DomPDF",
          ],
          image: "thai-travel.png",
          demoUrl: "https://thai-travel.fts-tech.co.id/",
          codeUrl: "https://github.com/Mifta24/Thai-Travel",
        },
        {
          id: 11,
          title: "Tire Api",
          category: "Web API",
          description:
            "A RESTful API for managing tire data with CRUD operations and authentication.",
          technologies: [
            "PHP 8.2",
            "Laravel 12",
            "Laravel Sanctum",
            "Scramble API Docs",
            "PostgreSQL",
            "AWS S3",
            "Tailwind CSS",
            "Alpine.js",
          ],
          image: "tire-api.jpeg",
          demoUrl: "https://tire.fts.biz.id/docs/api#/",
          codeUrl: "https://github.com/Mifta24/tires",
        },
        {
          id: 10,
          title: "Library App",
          category: "Mobile Application",
          description:
            "A library app with user authentication, book catalog, and borrowing features.",
          technologies: [
            "Flutter",
            "Dart",
            "Riverpod",
            "GoRouter",
            "Firebase Auth",
            "Cloud Firestore",
            "Firebase Messaging",
            "Mobile Scanner",
          ],
          image: "my-pengaduan-mockup.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/perpus-glo",
        },
        {
          id: 9,
          title: "Phone Match",
          category: "Web Application",
          description:
            "Smartphone recommendation system using the TOPSIS method with Tailwind CSS and Laravel Fullstack",
          technologies: [
            "PHP 8.2",
            "Laravel 12",
            "Tailwind CSS 4",
            "Vite",
            "MySQL",
            "TOPSIS",
          ],
          image: "phone_match.jpeg",
          demoUrl: "https://phonematch.laravel.cloud/",
          codeUrl: "https://github.com/Mifta24/spk-hp-topsis",
        },
        {
          id: 8,
          title: "Perfume Shop",
          category: "Web Application",
          description:
            "A perfume store website built using Bootstrap and Laravel, equipped with a payment gateway.",
          technologies: [
            "PHP 8.2",
            "Laravel 11",
            "Filament 3",
            "Tailwind CSS",
            "Alpine.js",
            "Midtrans",
            "Laravel Sanctum",
            "MySQL",
          ],
          image: "Mistify.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/Mistify",
        },
        {
          id: 7,
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
          id: 6,
          title: "Learning Management System (LMS)",
          category: "Web Application",
          description:
            "An online learning management system with course creation, user management, and progress tracking.",
          technologies: [
            "PHP 8.2",
            "Laravel 11",
            "Filament 3",
            "Tailwind CSS",
            "Alpine.js",
            "Spatie Permission",
            "SQLite",
          ],
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
          technologies: [
            "PHP 8.2",
            "Laravel 11",
            "Blade",
            "Tailwind CSS",
            "Alpine.js",
            "Spatie Permission",
            "SQLite",
          ],
          image: "learningbymiftah.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/LearningbyMiftah",
        },
        {
          id: 4,
          title: "Ticketing Event System",
          category: "Web Application",
          description:
            "A ticketing event system with user authentication, event management, and payment integration.",
          technologies: [
            "PHP 8.2",
            "Laravel 11",
            "Tailwind CSS",
            "Alpine.js",
            "Spatie Permission",
            "Laravel Telescope",
            "MySQL",
          ],
          image: "prevents.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/prevents",
        },
        {
          id: 3,
          title: "Food Ordering System",
          category: "Web Application",
          description:
            "A food ordering system with user authentication, order management, and payment integration.",
          technologies: [
            "PHP 8.2",
            "MySQL",
            "Bootstrap 4",
            "HTML",
            "CSS",
            "JavaScript",
          ],
          image: "cateringku.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/cateringku",
        },
        {
          id: 2,
          title: "Coffee Shop Booking System",
          category: "Web Application",
          description:
            "A coffee shop booking system with user authentication, booking management, and payment integration.",
          technologies: [
            "PHP 8.2",
            "MySQL",
            "Bootstrap",
            "HTML",
            "CSS",
            "JavaScript",
          ],
          image: "trackercoffee.png",
          demoUrl: "#",
          codeUrl: "https://github.com/Mifta24/Tracker-Coffee",
        },
        {
          id: 1,
          title: "Company Profile",
          category: "Company Website",
          description:
            "A company profile website with a modern design and responsive layout.",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: "technodigits.png",
          demoUrl: "#",
          codeUrl: "#",
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      // Urutan mengikuti susunan array projects (paling baru di atas)
      if (this.selectedCategory === "all") {
        return [...this.projects];
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
    getImageSrc(image) {
      // URL eksternal dipakai langsung, file lokal di-resolve dari assets
      if (/^https?:\/\//.test(image)) return image;
      try {
        return require(`@/assets/${image}`);
      } catch (e) {
        return "https://via.placeholder.com/450x250?text=Project+Image";
      }
    },
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
