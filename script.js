const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") root.classList.add("light");
themeButton.textContent = root.classList.contains("light") ? "☾" : "☼";
themeButton.addEventListener("click", () => {
  root.classList.toggle("light");
  const theme = root.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("portfolio-theme", theme);
  themeButton.textContent = theme === "light" ? "☾" : "☼";
});

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

const dropdownButton = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector("#projects-menu");

if (dropdownButton && dropdownMenu) {
  dropdownButton.addEventListener("click", () => {
    const isOpen = dropdownButton.getAttribute("aria-expanded") === "true";

    dropdownMenu.hidden = isOpen;
    dropdownButton.setAttribute("aria-expanded", String(!isOpen));
  });
}