<template>
  <div class="app-container">
    <!-- Header/Navigation -->
    <header>
      <div class="logo">
        <router-link to="/">Miftahudin Aldi Saputra</router-link>
      </div>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/skills" class="nav-link">Skills</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <!-- Footer -->
    <footer>
      <div class="social-links">
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
        <a href="mailto:miftafree3@gmail.com">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }} Miftah. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header Styles */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo a {
  font-size: 1.8rem;
  font-weight: 700;
  color: #546ec5;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #555;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #3498db;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.router-link-active {
  color: #3498db;
}

/* Main Content */
main {
  flex: 1;
  padding: 2rem 5%;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Footer */
footer {
  padding: 2rem 5%;
  background-color: #2c3e50;
  color: white;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.social-links a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #3498db;
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 1rem;
  }

  .logo {
    margin-bottom: 1rem;
  }

  nav {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
