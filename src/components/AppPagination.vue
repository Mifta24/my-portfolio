<template>
  <div class="pagination" v-if="totalPages > 1">
    <button
      class="pagination-btn"
      :class="{ disabled: currentPage === 1 }"
      @click="$emit('update:currentPage', currentPage - 1)"
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
        @click="$emit('update:currentPage', page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="pagination-btn"
      :class="{ disabled: currentPage === totalPages }"
      @click="$emit('update:currentPage', currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      Next <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "AppPagination",
  props: {
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true },
  },
  emits: ["update:currentPage"],
};
</script>

<style scoped>
.pagination {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pagination-btn {
  background-color: white;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination-btn:hover:not(.disabled) {
  background-color: var(--color-surface-alt);
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
  border: 1px solid var(--color-border);
  background-color: white;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-number:hover:not(.active) {
  background-color: var(--color-surface-alt);
}

.page-number.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

@media (max-width: 576px) {
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }

  .pagination-numbers {
    order: -1;
  }
}
</style>
