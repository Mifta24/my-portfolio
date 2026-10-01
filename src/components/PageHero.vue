<template>
  <section class="page-hero">
    <div class="container">
      <h1>{{ title }}</h1>
      <p class="lead">{{ lead }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageHero",
  props: {
    title: { type: String, required: true },
    lead: { type: String, default: "" },
  },
};
</script>

<style scoped>
.page-hero {
  background-color: var(--color-surface-alt);
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 3rem;
}

.page-hero h1 {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.3rem;
  color: var(--color-text);
  max-width: 700px;
  margin: 0 auto;
}
</style>
