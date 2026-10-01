<template>
  <div class="about">
    <PageHero
      title="About Me"
      lead="Get to know who I am and what drives me as a developer"
    />

    <section class="about-content container">
      <div class="profile-section">
        <div class="profile-image">
          <img src="../assets/profile-about.jpg" :alt="profile.name" />
        </div>
        <div class="profile-details">
          <h2>{{ profile.name }}</h2>
          <p class="subtitle">{{ profile.title }}</p>
          <p class="bio">
            I'm a Fullstack Developer who builds web and mobile applications end
            to end, from database design and backend APIs to responsive user
            interfaces. I work with Laravel, Vue.js, Flutter, and PostgreSQL,
            and I deploy and manage my own projects on VPS servers. I also use
            AI-assisted development and automation to ship faster, and I'm
            passionate about turning complex problems into clean, reliable
            solutions.
          </p>
          <div class="personal-info">
            <div class="info-item">
              <span class="label">Name:</span>
              <span>{{ profile.name }}</span>
            </div>
            <div class="info-item">
              <span class="label">Email:</span>
              <span
                ><a :href="`mailto:${profile.email}`">{{
                  profile.email
                }}</a></span
              >
            </div>
            <div class="info-item">
              <span class="label">Location:</span>
              <span>{{ profile.location }}</span>
            </div>
            <div class="info-item">
              <span class="label">Availability:</span>
              <span>{{ profile.availability }}</span>
            </div>
          </div>
          <div class="download-cv">
            <a
              :href="profile.cvUrl"
              target="_blank"
              rel="noopener"
              class="btn btn-primary"
            >
              <i class="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>
      </div>

      <div class="experience-section">
        <h2>Experience & Education</h2>
        <div class="timeline">
          <!-- <div class="timeline-item">
            <div class="timeline-marker">
              <i class="fas fa-briefcase"></i>
            </div>
            <div class="timeline-content">
              <h3>Web Developer</h3>
              <p class="timeline-date">2022 - Present</p>
              <p class="timeline-company">Company Name</p>
              <p class="timeline-description">
                Working with various web technologies to build and maintain
                responsive websites and web applications. Collaborating with
                designers and other developers to create seamless user
                experiences.
              </p>
            </div>
          </div> -->

          <div class="timeline-item">
            <div class="timeline-marker">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="timeline-content">
              <h3>Software Engineering Degree</h3>
              <p class="timeline-date">2022 - Present</p>
              <p class="timeline-company">Global Institute Tangerang</p>
              <p class="timeline-description">
                Pursuing a degree in Software Engineering with a comprehensive
                curriculum covering web development, mobile applications,
                database management, and software design. Applying it through
                hands-on fullstack projects, from backend APIs and databases to
                frontend interfaces and server deployment.
              </p>
            </div>
          </div>

          <!-- <div class="timeline-item">
            <div class="timeline-marker">
              <i class="fas fa-briefcase"></i>
            </div>
            <div class="timeline-content">
              <h3>Internship</h3>
              <p class="timeline-date">2021</p>
              <p class="timeline-company">Internship Company</p>
              <p class="timeline-description">
                Worked on real-world projects that involved designing and
                developing web applications. Gained practical experience in
                working with development teams and understanding business
                requirements.
              </p>
            </div>
          </div> -->
        </div>
      </div>

      <div class="interests-section">
        <h2>My Interests</h2>
        <div class="interests-grid">
          <div class="interest-item">
            <i class="fas fa-code"></i>
            <h3>Coding</h3>
          </div>
          <div class="interest-item">
            <i class="fas fa-dumbbell"></i>
            <h3>Sports</h3>
          </div>
          <div class="interest-item">
            <i class="fas fa-book-open"></i>
            <h3>Learning</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHero from "@/components/PageHero.vue";
import profile from "@/data/profile";

export default {
  name: "AboutView",
  components: { PageHero },
  data() {
    return { profile };
  },
};
</script>

<style scoped>
/* Profile Section */
.profile-section {
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
}

.profile-image {
  flex: 1;
  max-width: 400px;
}

.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.profile-details {
  flex: 2;
}

.profile-details h2 {
  font-size: 2.2rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.3rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.personal-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.label {
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 0.25rem;
}

.info-item a {
  color: var(--color-primary);
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.download-cv {
  margin-top: 2rem;
}

/* Experience Section */
.experience-section {
  margin-bottom: 4rem;
}

.experience-section h2,
.interests-section h2 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
  text-align: center;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 2px;
  background-color: var(--color-border);
  left: 20px;
  top: 0;
}

.timeline-item {
  display: flex;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-marker {
  width: 40px;
  height: 40px;
  background-color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 2rem;
  z-index: 1;
}

.timeline-content {
  flex: 1;
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

.timeline-date {
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.timeline-company {
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.timeline-description {
  line-height: 1.6;
  color: var(--color-text);
}

/* Interests Section */
.interests-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.interest-item {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: var(--shadow-card);
  transition: transform 0.3s ease;
}

.interest-item:hover {
  transform: translateY(-10px);
}

.interest-item i {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.interest-item h3 {
  font-size: 1.2rem;
  color: var(--color-heading);
}

/* Responsive Design */
@media (max-width: 992px) {
  .profile-section {
    flex-direction: column;
  }

  .profile-image {
    margin: 0 auto 2rem;
  }

  .personal-info {
    grid-template-columns: 1fr;
  }

  .interests-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .interests-grid {
    grid-template-columns: 1fr;
  }

  .timeline-marker {
    width: 30px;
    height: 30px;
    margin-right: 1rem;
  }

  .timeline::before {
    left: 15px;
  }
}
</style>
