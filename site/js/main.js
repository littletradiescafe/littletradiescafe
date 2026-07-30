// Little Tradies Cafe - Main JavaScript
// Performance: Defer non-critical scripts

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  }
});

// Form submission handling (Netlify Forms)
function handleFormSubmit(e, formName) {
  const form = e.target;
  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  })
  .then(() => {
    form.innerHTML = '<p style="text-align: center; font-size: 18px; color: #1F8A8A;"><strong>Thanks! We\'ll be in touch soon.</strong></p>';
    setTimeout(() => {
      form.closest('.sticker, .newsletter, .nominate-band').innerHTML = '<p style="text-align: center; font-weight: 600;">Thank you for reaching out! Check your email for a confirmation.</p>';
    }, 3000);
  })
  .catch(error => {
    console.error('Form submission error:', error);
    alert('Sorry, there was an error submitting the form. Please try again.');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Lazy load images for better performance
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Analytics tracking (Google Analytics)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_TRACKING_ID');

// Track page views
window.addEventListener('load', function() {
  gtag('event', 'page_view', {
    page_path: window.location.pathname,
    page_title: document.title
  });
});

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    gtag('event', 'button_click', {
      button_text: this.textContent,
      button_class: this.className
    });
  });
});

// Performance: Print load times in console
window.addEventListener('load', function() {
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  console.log('Page load time: ' + pageLoadTime + 'ms');
});
