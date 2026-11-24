
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

if (burgerBtn) {
  burgerBtn.onclick = () => navMenu.classList.toggle("open");
}

// 2. Filtre des projets par catégorie
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterBtns.forEach((btn) => {
  btn.onclick = () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.dataset.cat;
    projects.forEach((p) => {
      p.classList.toggle("hidden", cat !== "all" && p.dataset.cat !== cat);
    });
  };
});

// 3. Validation du formulaire de contact
const form = document.getElementById("contactForm");

if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();

    document.getElementById("nomErr").textContent = nom ? "" : "Nom obligatoire.";
    document.getElementById("emailErr").textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "E-mail invalide.";
    document.getElementById("msgErr").textContent = msg.length >= 10 ? "" : "Minimum 10 caractères.";

    if (nom && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && msg.length >= 10) {
      document.getElementById("successMsg").textContent = "Message envoyé !";
      form.reset();
    }
  };
}