// Mobile Menu
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
mobileToggle.addEventListener('click', () => nav.classList.toggle('active'));

// Cart
let cartCount = 0;
const cartIcon = document.querySelector('.cart-count');
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartIcon.textContent = cartCount;
    alert(`Added "${btn.dataset.name}" to cart!`);
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('active');
  });
});

// Dark Mode Toggle + Save Preference
const darkModeCheckbox = document.getElementById('darkModeCheckbox');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark' || 
   (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  body.setAttribute('data-theme', 'dark');
  darkModeCheckbox.checked = true;
}

darkModeCheckbox.addEventListener('change', () => {
  if (darkModeCheckbox.checked) {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
});
