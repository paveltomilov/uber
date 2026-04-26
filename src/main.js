import "./styles/main.scss";
console.log("работает");
// main.js
import "./styles/main.scss";

// Бургер-меню
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navClose = document.querySelector(".nav__close");
const overlay = document.querySelector(".overlay");
const body = document.body;

// Функция открытия меню
function openMenu() {
  burger.classList.add("active");
  nav.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("menu-open");
}

// Функция закрытия меню
function closeMenu() {
  burger.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("menu-open");
}

// Переключение меню
function toggleMenu() {
  if (nav.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Открытие/закрытие по клику на бургер
if (burger) {
  burger.addEventListener("click", toggleMenu);
}

// Закрытие по клику на крестик
if (navClose) {
  navClose.addEventListener("click", closeMenu);
}

// Закрытие по клику на оверлей
if (overlay) {
  overlay.addEventListener("click", closeMenu);
}

// Закрытие по клику на ссылки с плавным скроллом
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Получаем ID цели
    const targetId = link.getAttribute("href");
    if (targetId && targetId !== "#") {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Плавный скролл
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    // Закрываем меню
    closeMenu();
  });
});

// Закрытие по клавише Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("active")) {
    closeMenu();
  }
});

// Предотвращаем закрытие при клике внутри меню
if (nav) {
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
