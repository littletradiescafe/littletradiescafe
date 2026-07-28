// ===============================================
// LITTLE TRADIES CAFE — MAIN JS
// ===============================================

// Form handling for Netlify Forms
function handleFormSubmit(event, formName) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // Submit to Netlify
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData)
  })
  .then(() => {
    // Show success message
    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '✓ Submitted!';
    btn.disabled = true;
    
    // Reset form after 2 seconds
    setTimeout(() => {
      form.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2000);
  })
  .catch(error => {
    console.error('Form submission error:', error);
    alert('There was an error submitting the form. Please try again.');
  });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }
  
  // Add animation to page load
  document.querySelectorAll('.fade-up').forEach((el, index) => {
    el.style.animationDelay = (index * 0.1) + 's';
  });
});

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Analytics placeholder (can integrate Google Analytics here)
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_ID');
