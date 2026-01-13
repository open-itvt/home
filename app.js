// ============================================
// ITVT - INTERACTIVE JAVASCRIPT
// ============================================

// === PRELOADER ===
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  // Dodatkowe opóźnienie dla efektu (min 1s)
  setTimeout(() => {
    preloader.classList.add('hidden');
    // Usuń preloader z DOM po animacji
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 1000);
});

// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
});

// === SMOOTH SCROLLING FOR NAVIGATION LINKS ===
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all links
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    // Add active class to clicked link
    this.classList.add('active');
    
    // Smooth scroll to section
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// === BACK TO TOP BUTTON ===
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// === MOBILE MENU TOGGLE ===
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
});

// === INTERSECTION OBSERVER FOR ANIMATIONS ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// === NEWSLETTER FORM ===
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('.newsletter-input');
    const email = emailInput.value;
    
    if (email) {
      // Here you would typically send the email to your backend
      alert(`Dziękujemy! Email ${email} został zapisany do newslettera.`);
      emailInput.value = '';
    }
  });
}

// === TYPING ANIMATION ===
const typingText = document.querySelector('.typing-text');
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Start typing after a short delay
  setTimeout(typeWriter, 500);
}

// === ACTIVE SECTION HIGHLIGHTING ===
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

console.log('🚀 iTVT loaded successfully!');
