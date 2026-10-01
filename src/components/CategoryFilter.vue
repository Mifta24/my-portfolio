<template>
  <div class="filter-tabs">
    <button
      @click="$emit('update:modelValue', 'all')"
      :class="{ active: modelValue === 'all' }"
      class="filter-btn"
    >
      All
    </button>
    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('update:modelValue', category)"
      :class="{ active: modelValue === category }"
      class="filter-btn"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CategoryFilter",
  props: {
    categories: { type: Array, required: true },
    modelValue: { type: String, default: "all" },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.filter-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--color-border);
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--color-text);
}

.filter-btn:hover,
.filter-btn.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

@media (max-width: 768px) {
  .filter-tabs {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 576px) {
  .filter-btn {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
}
</style>
