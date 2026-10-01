<template>
  <div class="contact">
    <PageHero
      title="Contact Me"
      lead="Have a question or want to work together? Reach out to me!"
    />

    <section class="contact-content container">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p class="intro">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div class="contact-methods">
          <a class="contact-card" :href="`mailto:${profile.email}`">
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <span>{{ profile.email }}</span>
          </a>

          <a class="contact-card" :href="profile.phoneHref">
            <div class="icon">
              <i class="fas fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <span>{{ profile.phone }}</span>
          </a>

          <div class="contact-card">
            <div class="icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>Location</h3>
            <span>{{ profile.location }}</span>
          </div>
        </div>

        <div class="social-links">
          <h3>Connect with Me</h3>
          <div class="social-icons">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
            >
              <i :class="social.icon"></i>
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
import PageHero from "@/components/PageHero.vue";
import profile from "@/data/profile";

const { socials } = profile;

export default {
  name: "ContactView",
  components: { PageHero },
  data() {
    return {
      profile,
      socialLinks: [
        { label: "GitHub", href: socials.github, icon: "fab fa-github" },
        { label: "LinkedIn", href: socials.linkedin, icon: "fab fa-linkedin" },
        { label: "Twitter", href: socials.twitter, icon: "fab fa-twitter" },
        {
          label: "Instagram",
          href: socials.instagram,
          icon: "fab fa-instagram",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Contact Content */
.contact-info {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-info h2 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.intro {
  color: var(--color-text);
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
  box-shadow: var(--shadow-card);
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
  background-color: var(--color-surface-alt);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-size: 1.4rem;
  transition: all 0.3s ease;
}

a.contact-card:hover .icon {
  background-color: var(--color-primary);
  color: white;
}

.contact-card h3 {
  font-size: 1.2rem;
  color: var(--color-heading);
  margin-bottom: 0.4rem;
}

.contact-card span {
  color: var(--color-text);
  overflow-wrap: anywhere;
}

/* Social Links */
.social-links h3 {
  font-size: 1.2rem;
  color: var(--color-heading);
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
  background-color: var(--color-surface-alt);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-5px);
}

/* Map Section */
.map-section {
  margin-bottom: 4rem;
}

.map-section h2 {
  font-size: 2rem;
  color: var(--color-heading);
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
