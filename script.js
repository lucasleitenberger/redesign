// Replace this with your real email address once, then every email button works.
const EMAIL = "LLeitenberger@greenkeyllc.com";

document.querySelectorAll(".email-link").forEach((link) => {
  link.href = `mailto:${EMAIL}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
