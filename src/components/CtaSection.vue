<template>
  <section class="cta-section">
    <div class="container">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <router-link :to="to" class="btn btn-white">{{ buttonText }}</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "CtaSection",
  props: {
    title: { type: String, required: true },
    text: { type: String, required: true },
    to: { type: String, default: "/contact" },
    buttonText: { type: String, default: "Get in Touch" },
  },
};
</script>

<style scoped>
.cta-section {
  background-color: var(--color-primary);
  color: white;
  padding: 4rem 0;
  text-align: center;
  margin: 3rem 0 0;
}

.cta-section h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
