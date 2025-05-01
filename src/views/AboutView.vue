<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1>About Me</h1>
        <p class="lead">
          Get to know who I am and what drives me as a developer
        </p>
      </div>
    </section>

    <section class="about-content container">
      <div class="profile-section">
        <div class="profile-image">
          <img
            src="../assets/profile-about.jpg"
            alt="Miftahudin Aldi Saputra"
          />
        </div>
        <div class="profile-details">
          <h2>Miftahudin Aldi Saputra</h2>
          <p class="subtitle">Web Developer & Mobile Developer</p>
          <p class="bio">
            I'm a passionate web developer with a focus on creating clean,
            user-friendly websites and applications. With a strong foundation in
            both front-end and back-end technologies, I enjoy bringing ideas to
            life through code and design.
          </p>
          <div class="personal-info">
            <div class="info-item">
              <span class="label">Name:</span>
              <span>Miftahudin Aldi Saputra</span>
            </div>
            <div class="info-item">
              <span class="label">Email:</span>
              <span
                ><a href="mailto:miftafree3@gmail.com"
                  >miftafree3@gmail.com</a
                ></span
              >
            </div>
            <div class="info-item">
              <span class="label">Location:</span>
              <span>Indonesia</span>
            </div>
            <div class="info-item">
              <span class="label">Availability:</span>
              <span>Open to opportunities</span>
            </div>
          </div>
          <div class="download-cv">
            <a
              href="https://drive.google.com/file/d/13dnaha3AngJQkpKRhv26LwTchnNe1gCq/view?usp=sharing"
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
                Pursuing a degree in Software Engineering, focusing on web
                development, mobile applications, and software design
                principles. Gaining knowledge in various programming languages
                and frameworks.
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
            <i class="fas fa-gamepad"></i>
            <h3>Gaming</h3>
          </div>
          <div class="interest-item">
            <i class="fas fa-music"></i>
            <h3>Music</h3>
          </div>
          <div class="interest-item">
            <i class="fas fa-mountain"></i>
            <h3>Traveling</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-hero {
  background-color: #f5f9fc;
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 3rem;
}

.about-hero h1 {
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
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.3rem;
  color: #3498db;
  margin-bottom: 1.5rem;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
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
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.info-item a {
  color: #3498db;
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.download-cv {
  margin-top: 2rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

/* Experience Section */
.experience-section {
  margin-bottom: 4rem;
}

.experience-section h2,
.interests-section h2 {
  font-size: 2rem;
  color: #2c3e50;
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
  background-color: #e0e0e0;
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
  background-color: #3498db;
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
  color: #2c3e50;
}

.timeline-date {
  font-weight: 600;
  color: #3498db;
  margin-bottom: 0.25rem;
}

.timeline-company {
  font-weight: 500;
  color: #555;
  margin-bottom: 0.75rem;
}

.timeline-description {
  line-height: 1.6;
  color: #555;
}

/* Interests Section */
.interests-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.interest-item {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.interest-item:hover {
  transform: translateY(-10px);
}

.interest-item i {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1rem;
}

.interest-item h3 {
  font-size: 1.2rem;
  color: #2c3e50;
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
