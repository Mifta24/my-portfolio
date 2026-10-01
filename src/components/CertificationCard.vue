<template>
  <div class="certification-item">
    <div class="certification-icon">
      <i :class="cert.icon"></i>
    </div>
    <div class="certification-content">
      <h3>{{ cert.name }}</h3>
      <p class="certification-issuer">{{ cert.issuer }}</p>
      <p class="certification-date">{{ cert.date }}</p>
      <a
        v-if="cert.url"
        :href="cert.url"
        target="_blank"
        rel="noopener noreferrer"
        class="view-credential"
      >
        View Credential <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificationCard",
  props: {
    cert: { type: Object, required: true },
  },
};
</script>

<style scoped>
.certification-item {
  display: flex;
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: var(--shadow-card);
}

.certification-icon {
  font-size: 2rem;
  color: var(--color-accent);
  margin-right: 1.5rem;
}

.certification-content {
  flex: 1;
}

.certification-content h3 {
  font-size: 1.2rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.certification-issuer {
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.certification-date {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.view-credential {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.view-credential:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .certification-item {
    flex-direction: column;
    text-align: center;
  }

  .certification-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
