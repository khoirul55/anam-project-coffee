/**
 * Anam Project Coffee - Main Logic
 */

// WhatsApp Order Function
function orderWA(product) {
  let msg = "Halo Meng! Saya lihat dari website Anam Project Coffee.";
  if (product) {
    msg += " Saya tertarik untuk pesan produk " + product + ".";
  } else {
    msg += " Boleh info produk yang tersedia?";
  }
  const phoneNumber = "6281267124265";
  window.open(`https://wa.me/${phoneNumber}?text=` + encodeURIComponent(msg), "_blank");
}

// Tab Switching Logic
function switchTab(tabId, btn) {
  // Reset buttons
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  // Activate clicked button
  btn.classList.add('active');

  // Hide all contents
  document.querySelectorAll('.tab-content').forEach(c => {
    c.classList.remove('active');
  });

  // Show target content
  document.getElementById(tabId).classList.add('active');
}

// Navbar Scroll Effect & Parallax
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;

  const nav = document.getElementById('navbar');
  if (nav) {
    nav.classList.toggle('scrolled', scrolled > 50);
  }

  const parallaxBg = document.querySelector('.parallax-bg');
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrolled * 0.4}px)`;
  }
});

// Animations Observer
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal-text').forEach(el => revealObserver.observe(el));
});
