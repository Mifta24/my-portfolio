<template>
  <div class="soft-skill-item">
    <div class="soft-skill-icon">
      <i :class="skill.icon"></i>
    </div>
    <div class="soft-skill-content">
      <h3>{{ skill.name }}</h3>
      <p>{{ skill.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoftSkillCard",
  props: {
    skill: { type: Object, required: true },
  },
};
</script>

<style scoped>
.soft-skill-item {
  display: flex;
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: var(--shadow-card);
}

.soft-skill-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-right: 1.5rem;
}

.soft-skill-content {
  flex: 1;
}

.soft-skill-content h3 {
  font-size: 1.2rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.soft-skill-content p {
  color: var(--color-text);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .soft-skill-item {
    flex-direction: column;
    text-align: center;
  }

  .soft-skill-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
