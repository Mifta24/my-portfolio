<template>
  <div class="skills">
    <section class="skills-hero">
      <div class="container">
        <h1>My Skills</h1>
        <p class="lead">
          A comprehensive look at my technical abilities and professional skills
        </p>
      </div>
    </section>

    <section class="skills-content container">
      <div class="skill-categories">
        <div class="skill-category">
          <h2><i class="fas fa-code"></i> Front-End Development</h2>
          <div class="skills-grid">
            <div
              class="skill-item"
              v-for="skill in frontendSkills"
              :key="skill.name"
            >
              <div class="skill-icon">
                <i :class="skill.icon"></i>
              </div>
              <h3>{{ skill.name }}</h3>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <h2><i class="fas fa-server"></i> Back-End Development</h2>
          <div class="skills-grid">
            <div
              class="skill-item"
              v-for="skill in backendSkills"
              :key="skill.name"
            >
              <div class="skill-icon">
                <i :class="skill.icon"></i>
              </div>
              <h3>{{ skill.name }}</h3>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <h2><i class="fas fa-tools"></i> Tools & Technologies</h2>
          <div class="skills-grid">
            <div class="skill-item" v-for="tool in tools" :key="tool.name">
              <div class="skill-icon">
                <i :class="tool.icon"></i>
              </div>
              <h3>{{ tool.name }}</h3>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <h2><i class="fas fa-file-alt"></i> Office & Productivity</h2>
          <div class="skills-grid">
            <div
              class="skill-item"
              v-for="office in officeSkills"
              :key="office.name"
            >
              <div class="skill-icon">
                <i :class="office.icon"></i>
              </div>
              <h3>{{ office.name }}</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="soft-skills-section">
        <h2>Soft Skills</h2>
        <div class="soft-skills-grid">
          <div
            class="soft-skill-item"
            v-for="(skill, index) in softSkills"
            :key="index"
          >
            <div class="soft-skill-icon">
              <i :class="skill.icon"></i>
            </div>
            <div class="soft-skill-content">
              <h3>{{ skill.name }}</h3>
              <p>{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="certifications-section">
        <h2>Certifications</h2>
        <div class="certifications-grid">
          <div
            class="certification-item"
            v-for="cert in certifications"
            :key="cert.name"
          >
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
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Let's work together on your next project</h2>
        <p>
          Looking for a skilled developer to join your team or build your next
          project?
        </p>
        <router-link to="/contact" class="btn btn-primary"
          >Get in Touch</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SkillsView",
  data() {
    return {
      frontendSkills: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Vue.js", icon: "fab fa-vuejs" },
        { name: "Tailwind CSS", icon: "fas fa-wind" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
      ],
      backendSkills: [
        { name: "PHP", icon: "fab fa-php" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Java", icon: "fab fa-java" },
        { name: "C#", icon: "fas fa-hashtag" },
        { name: ".NET", icon: "fas fa-code" },
        { name: "Laravel", icon: "fab fa-laravel" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "SQLite", icon: "fas fa-database" },
        { name: "Supabase", icon: "fas fa-database" },
        { name: "REST APIs", icon: "fas fa-plug" },
      ],
      tools: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "VS Code", icon: "fas fa-code" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Figma", icon: "fab fa-figma" },
        { name: "NPM", icon: "fab fa-npm" },
        { name: "Postman", icon: "fas fa-paper-plane" },
        { name: "Canva", icon: "fas fa-paint-brush" },
      ],
      officeSkills: [
        { name: "Microsoft Word", icon: "fas fa-file-word" },
        { name: "Microsoft Excel", icon: "fas fa-file-excel" },
        { name: "Microsoft PowerPoint", icon: "fas fa-file-powerpoint" },
        { name: "Microsoft Access", icon: "fas fa-database" },
        { name: "Microsoft Outlook", icon: "fas fa-envelope" },
        { name: "Google Docs", icon: "fab fa-google" },
        { name: "Google Sheets", icon: "fab fa-google" },
        { name: "Google Slides", icon: "fab fa-google" },
      ],
      softSkills: [
        {
          name: "Communication",
          icon: "fas fa-comments",
          description:
            "Excellent written and verbal communication skills with the ability to explain complex technical concepts in simple terms.",
        },
        {
          name: "Problem Solving",
          icon: "fas fa-lightbulb",
          description:
            "Strong analytical and problem-solving abilities to tackle challenging technical issues and find efficient solutions.",
        },
        {
          name: "Team Collaboration",
          icon: "fas fa-users",
          description:
            "Experience working in agile teams with a collaborative mindset and effective interpersonal skills.",
        },
        {
          name: "Time Management",
          icon: "fas fa-clock",
          description:
            "Ability to manage multiple projects, prioritize tasks, and meet deadlines in a fast-paced environment.",
        },
      ],
      certifications: [
        {
          name: "Alibaba Cloud Certifcation",
          icon: "fas fa-certificate",
          issuer: "Alibaba Cloud",
          date: "2024",
          url: "https://drive.google.com/file/d/1GvjYf4EJosLxgqk2kig9oY34Z2FrTFUT/view?usp=sharing",
        },
        {
          name: "Laravel 11, Breeze, Spatie: Bikin Web Platform Online Course",
          icon: "fas fa-certificate",
          issuer: "BuildWithAngga",
          date: "2024",
          url: "https://drive.google.com/file/d/1GvjYf4EJosLxgqk2kig9oY34Z2FrTFUT/view?usp=sharing",
        },
        {
          name: "Teknik Pembuatan Surat, Dokumen dan Presentasi, Pengolahan Data Bisnis serta Visualisasi Grafis dengan Microsoft Office untuk Tenaga Perkantoran Umum (Administrasi Perkantoran)",
          icon: "fas fa-certificate",
          issuer: "Course-NET",
          date: "2023",
          url: "https://drive.google.com/file/d/1rmpf6bw63qLXP7El4Sc8asGEq-IfPeXI/view?usp=sharing",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.skills-hero {
  background-color: #f5f9fc;
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 3rem;
}

.skills-hero h1 {
  font-size: 2.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.3rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

/* Skill Categories */
.skill-category {
  margin-bottom: 4rem;
}

.skill-category h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-category h2 i {
  color: #3498db;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
}

/* Skill Item - Simplified */
.skill-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
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
  color: #3498db;
  margin-bottom: 1rem;
}

.skill-item h3 {
  font-size: 1rem;
  color: #2c3e50;
  margin: 0;
}

/* Soft Skills Section */
.soft-skills-section {
  margin-bottom: 4rem;
}

.soft-skills-section h2,
.certifications-section h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
}

.soft-skill-item {
  display: flex;
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.soft-skill-icon {
  font-size: 2.5rem;
  color: #3498db;
  margin-right: 1.5rem;
}

.soft-skill-content {
  flex: 1;
}

.soft-skill-content h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.soft-skill-content p {
  color: #555;
  line-height: 1.6;
}

/* Certifications Section */
.certifications-section {
  margin-bottom: 4rem;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.certification-item {
  display: flex;
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.certification-icon {
  font-size: 2rem;
  color: #f39c12;
  margin-right: 1.5rem;
}

.certification-content {
  flex: 1;
}

.certification-content h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.certification-issuer {
  color: #555;
  margin-bottom: 0.25rem;
}

.certification-date {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.view-credential {
  color: #3498db;
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

/* CTA Section */
.cta-section {
  background-color: #3498db;
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

.btn {
  padding: 0.8rem 1.8rem;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background-color: white;
  color: #3498db;
}

.btn-primary:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

/* Responsive Design */
@media (max-width: 992px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .soft-skills-grid {
    grid-template-columns: 1fr;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .soft-skill-item,
  .certification-item {
    flex-direction: column;
    text-align: center;
  }

  .soft-skill-icon,
  .certification-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

@media (max-width: 576px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
