<template>
  <div class="projects">
    <PageHero
      title="My Projects"
      lead="Showcasing my best work and technical capabilities"
    />

    <section class="projects-content container">
      <CategoryFilter v-model="selectedCategory" :categories="categories" />

      <div class="projects-grid">
        <ProjectCard
          v-for="project in paginatedProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <AppPagination
        v-model:currentPage="currentPage"
        :totalPages="totalPages"
      />
    </section>

    <CtaSection
      title="Interested in working together?"
      text="I'm always open to discussing new projects and opportunities."
    />
  </div>
</template>

<script>
import PageHero from "@/components/PageHero.vue";
import CategoryFilter from "@/components/CategoryFilter.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import AppPagination from "@/components/AppPagination.vue";
import CtaSection from "@/components/CtaSection.vue";
import projects from "@/data/projects";
import useProjectFilter from "@/composables/useProjectFilter";

const ITEMS_PER_PAGE = 6;

export default {
  name: "ProjectsView",
  components: {
    PageHero,
    CategoryFilter,
    ProjectCard,
    AppPagination,
    CtaSection,
  },
  setup() {
    return useProjectFilter(projects, ITEMS_PER_PAGE);
  },
};
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}
</style>
