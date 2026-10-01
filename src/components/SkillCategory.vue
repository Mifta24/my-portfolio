<template>
  <div class="skill-category">
    <h2><i :class="icon"></i> {{ title }}</h2>
    <div class="skills-grid">
      <div class="skill-item" v-for="skill in skills" :key="skill.name">
        <div class="skill-icon">
          <i :class="skill.icon"></i>
        </div>
        <h3>{{ skill.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCategory",
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    skills: { type: Array, required: true },
  },
};
</script>

<style scoped>
.skill-category {
  margin-bottom: 4rem;
}

.skill-category h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-category h2 i {
  color: var(--color-primary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: var(--shadow-card);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.skill-item h3 {
  font-size: 1rem;
  color: var(--color-heading);
  margin: 0;
}

@media (max-width: 992px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

@media (max-width: 576px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
