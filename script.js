const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
// script.js

// Carrega o conteúdo do header.html
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;

      // Ativa a função toggleMenu após carregar o header
      const btn = document.querySelector(".hamburger");
      const nav = document.querySelector(".nav-links");

      if (btn && nav) {
        btn.addEventListener("click", () => {
          nav.classList.toggle("active");
        });
      }
    });
});
