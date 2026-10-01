<template>
  <footer>
    <div class="social-links">
      <a :href="socials.github" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
      </a>
      <a :href="socials.linkedin" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>
      <a :href="`mailto:${email}`">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} {{ shortName }}. All Rights
      Reserved.
    </div>
  </footer>
</template>

<script>
import profile from "@/data/profile";

export default {
  name: "AppFooter",
  data() {
    return {
      socials: profile.socials,
      email: profile.email,
      shortName: profile.shortName,
    };
  },
};
</script>

<style scoped>
footer {
  padding: 2rem 5%;
  background-color: var(--color-heading);
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
  color: var(--color-primary);
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
