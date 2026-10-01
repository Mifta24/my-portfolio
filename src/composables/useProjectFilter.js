import { computed, ref, watch } from "vue";

// Filter kategori + pagination untuk daftar project.
// Urutan mengikuti susunan array projects (paling baru di atas).
export default function useProjectFilter(projects, itemsPerPage = 6) {
  const selectedCategory = ref("all");
  const currentPage = ref(1);

  const categories = computed(() => [
    ...new Set(projects.map((project) => project.category)),
  ]);

  const filteredProjects = computed(() =>
    selectedCategory.value === "all"
      ? [...projects]
      : projects.filter(
          (project) => project.category === selectedCategory.value
        )
  );

  const totalPages = computed(() =>
    Math.ceil(filteredProjects.value.length / itemsPerPage)
  );

  const paginatedProjects = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredProjects.value.slice(start, start + itemsPerPage);
  });

  // Kembali ke halaman pertama ketika kategori berubah
  watch(selectedCategory, () => {
    currentPage.value = 1;
  });

  return {
    selectedCategory,
    currentPage,
    categories,
    totalPages,
    paginatedProjects,
  };
}
