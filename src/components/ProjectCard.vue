<template>
  <div class="project-card">
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
</template>

<script>
import { getImageSrc, handleImageError } from "@/utils/image";

export default {
  name: "ProjectCard",
  props: {
    project: { type: Object, required: true },
  },
  methods: { getImageSrc, handleImageError },
};
</script>

<style scoped>
.project-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-card);
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
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.project-category {
  color: var(--color-primary);
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.project-description {
  color: var(--color-text);
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
  background-color: var(--color-surface-alt);
  color: var(--color-primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: auto; /* Pindahkan tombol ke bagian bawah card */
}

.project-links .btn {
  padding: 0.7rem 1.2rem;
  font-size: 0.9rem;
}

@media (max-width: 576px) {
  .project-links {
    flex-direction: column;
  }

  .project-links .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
