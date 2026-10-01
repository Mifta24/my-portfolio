<template>
  <div class="contact">
    <section class="contact-hero">
      <div class="container">
        <h1>Contact Me</h1>
        <p class="lead">
          Have a question or want to work together? Reach out to me!
        </p>
      </div>
    </section>

    <section class="contact-content container">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p class="intro">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div class="contact-methods">
          <a class="contact-card" href="mailto:miftafree3@gmail.com">
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <span>miftafree3@gmail.com</span>
          </a>

          <a class="contact-card" href="tel:+6283893271424">
            <div class="icon">
              <i class="fas fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <span>+62 838-9327-1424</span>
          </a>

          <div class="contact-card">
            <div class="icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>Location</h3>
            <span>Indonesia</span>
          </div>
        </div>

        <div class="social-links">
          <h3>Connect with Me</h3>
          <div class="social-icons">
            <a
              href="https://github.com/Mifta24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://x.com/MiftaAldi24?t=hkYF19hu2v1wSUtGWoGCOg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/mifta_xh_ui?utm_source=qr&igsh=OXZyb3pibDJmOXcw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <h2>Where to Find Me</h2>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.637956807143!2d106.60548937376329!3d-6.179191893808246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fed8e67cb0ad%3A0x2888b42a70065bd2!2sGlobal%20Institute%20%7C%20Institut%20Teknologi%20dan%20Bisnis%20Bina%20Sarana%20Global!5e0!3m2!1sid!2sid!4v1746026291379!5m2!1sid!2sid"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-hero {
  background-color: #f5f9fc;
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 3rem;
}

.contact-hero h1 {
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

/* Contact Content */
.contact-info {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-info h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.intro {
  color: #555;
  line-height: 1.7;
  max-width: 650px;
  margin: 0 auto 2.5rem;
}

/* Contact Methods */
.contact-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

a.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(52, 152, 219, 0.15);
}

.icon {
  width: 60px;
  height: 60px;
  background-color: #f5f9fc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #3498db;
  font-size: 1.4rem;
  transition: all 0.3s ease;
}

a.contact-card:hover .icon {
  background-color: #3498db;
  color: white;
}

.contact-card h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.4rem;
}

.contact-card span {
  color: #555;
  overflow-wrap: anywhere;
}

/* Social Links */
.social-links h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icons a {
  width: 45px;
  height: 45px;
  background-color: #f5f9fc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background-color: #3498db;
  color: white;
  transform: translateY(-5px);
}

/* Map Section */
.map-section {
  margin-bottom: 4rem;
}

.map-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.map-container {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-methods {
    grid-template-columns: 1fr;
  }
}
</style>
