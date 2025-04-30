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
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="details">
                <h3>Email</h3>
                <p>
                  <a href="mailto:miftafree3@gmail.com">miftafree3@gmail.com</a>
                </p>
              </div>
            </div>

            <div class="contact-method">
              <div class="icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="details">
                <h3>Phone</h3>
                <p><a href="tel:+1234567890">+62 838-9327-1424</a></p>
              </div>
            </div>

            <div class="contact-method">
              <div class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="details">
                <h3>Location</h3>
                <p>Indonesia</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <h3>Connect with Me</h3>
            <div class="social-icons">
              <a
                href="https://github.com/Mifta24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send Me a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="Your Name"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="Your Email"
                required
              />
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                placeholder="Subject"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              :disabled="submitting"
            >
              <i class="fas fa-paper-plane"></i>
              {{ submitting ? "Sending..." : "Send Message" }}
            </button>

            <div class="form-status" v-if="formStatus">
              <p :class="formStatus.type">{{ formStatus.message }}</p>
            </div>
          </form>
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
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      submitting: false,
      formStatus: null,
    };
  },
  methods: {
    submitForm() {
      this.submitting = true;
      this.formStatus = null;

      // Simulate form submission with a timeout
      setTimeout(() => {
        // Here you would typically make an API call to your backend
        console.log("Form submitted:", this.form);

        // Show success message
        this.formStatus = {
          type: "success",
          message:
            "Your message has been sent successfully! I'll get back to you soon.",
        };

        // Reset form
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };

        this.submitting = false;
      }, 1500);

      // For a real implementation, you would use axios or fetch:
      /*
        axios.post('/api/contact', this.form)
          .then(response => {
            this.formStatus = {
              type: "success",
              message: "Your message has been sent successfully! I'll get back to you soon."
            };
            this.form = { name: "", email: "", subject: "", message: "" };
          })
          .catch(error => {
            this.formStatus = {
              type: "error",
              message: "Oops! There was an error sending your message. Please try again."
            };
            console.error(error);
          })
          .finally(() => {
            this.submitting = false;
          });
        */
    },
  },
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
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.contact-info h2,
.contact-form h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.contact-info > p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Contact Methods */
.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.icon {
  width: 50px;
  height: 50px;
  background-color: #f5f9fc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #3498db;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.contact-method:hover .icon {
  background-color: #3498db;
  color: white;
}

.details h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.details p,
.details a {
  color: #555;
  text-decoration: none;
}

.details a:hover {
  color: #3498db;
}

/* Social Links */
.social-links h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  width: 40px;
  height: 40px;
  background-color: #f5f9fc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background-color: #3498db;
  color: white;
  transform: translateY(-5px);
}

/* Contact Form */
.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  transition: border 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #3498db;
  outline: none;
}

.btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover:not([disabled]) {
  background-color: #2980b9;
}

.btn[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-status {
  margin-top: 1rem;
}

.success {
  color: #27ae60;
}

.error {
  color: #e74c3c;
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
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 576px) {
  .contact-method {
    flex-direction: column;
    text-align: center;
  }

  .icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
