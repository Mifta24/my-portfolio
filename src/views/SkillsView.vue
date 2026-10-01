<template>
  <div class="skills">
    <PageHero
      title="My Skills"
      lead="A comprehensive look at my technical abilities and professional skills"
    />

    <section class="skills-content container">
      <div class="skill-categories">
        <SkillCategory
          v-for="category in skillCategories"
          :key="category.title"
          :title="category.title"
          :icon="category.icon"
          :skills="category.skills"
        />
      </div>

      <div class="soft-skills-section">
        <h2>Soft Skills</h2>
        <div class="soft-skills-grid">
          <SoftSkillCard
            v-for="skill in softSkills"
            :key="skill.name"
            :skill="skill"
          />
        </div>
      </div>

      <div class="certifications-section">
        <h2>Certifications</h2>
        <div class="certifications-grid">
          <CertificationCard
            v-for="cert in certifications"
            :key="cert.name"
            :cert="cert"
          />
        </div>
      </div>
    </section>

    <CtaSection
      title="Let's work together on your next project"
      text="Looking for a skilled developer to join your team or build your next project?"
    />
  </div>
</template>

<script>
import PageHero from "@/components/PageHero.vue";
import SkillCategory from "@/components/SkillCategory.vue";
import SoftSkillCard from "@/components/SoftSkillCard.vue";
import CertificationCard from "@/components/CertificationCard.vue";
import CtaSection from "@/components/CtaSection.vue";
import { skillCategories, softSkills, certifications } from "@/data/skills";

export default {
  name: "SkillsView",
  components: {
    PageHero,
    SkillCategory,
    SoftSkillCard,
    CertificationCard,
    CtaSection,
  },
  data() {
    return { skillCategories, softSkills, certifications };
  },
};
</script>

<style scoped>
.soft-skills-section,
.certifications-section {
  margin-bottom: 4rem;
}

.soft-skills-section h2,
.certifications-section h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
  text-align: center;
}

.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 992px) {
  .soft-skills-grid,
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
</style>
