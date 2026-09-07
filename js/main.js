document.addEventListener('DOMContentLoaded', function () {
  // Sticky header shadow
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      menuToggle.innerHTML = mainNav.classList.contains('open') ? '&#10005;' : '&#9776;';
    });
  }

  // Mobile dropdown toggle
  document.querySelectorAll('.has-dropdown > .nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Blog filters
  const filterBtns = document.querySelectorAll('.blog-filters button');
  const postCards = document.querySelectorAll('[data-category]');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      postCards.forEach(function (card) {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Back to top
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) backToTop.classList.add('show');
      else backToTop.classList.remove('show');
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact form (demo submit)
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message Sent ✓';
      contactForm.reset();
      setTimeout(() => { btn.textContent = original; }, 2500);
    });
  }
});

// Close mobile menu after selecting a navigation link
 document.querySelectorAll('.main-nav a').forEach(function(link) {
   link.addEventListener('click', function() {
     if (window.innerWidth <= 991 && mainNav && mainNav.classList.contains('open') && !link.parentElement.classList.contains('has-dropdown')) {
       mainNav.classList.remove('open');
       if (menuToggle) menuToggle.innerHTML = '&#9776;';
     }
   });
 });
