document.addEventListener('DOMContentLoaded', () => {
  // --- 1. HEADER SCROLL EFFECT ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 2. MOBILE MENU TOGGLE ---
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- 3. SERVICES TABS FILTERING ---
  const serviceTabBtns = document.querySelectorAll('.services-tabs .tab-btn');
  const serviceCards = document.querySelectorAll('.services-grid .service-card');

  if (serviceTabBtns.length > 0 && serviceCards.length > 0) {
    serviceTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all tabs
        serviceTabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked tab
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        serviceCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'flex';
          } else {
            const categories = card.getAttribute('data-category').split(' ');
            if (categories.includes(filterValue)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // --- 4. GALLERY TABS FILTERING ---
  const galleryTabBtns = document.querySelectorAll('.gallery-tabs .tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

  if (galleryTabBtns.length > 0 && galleryItems.length > 0) {
    galleryTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        galleryTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (filterValue === 'all') {
            item.style.display = 'block';
          } else {
            const categories = item.getAttribute('data-category').split(' ');
            if (categories.includes(filterValue)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // --- 5. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');

  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content');

      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        faqItems.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq-content').style.maxHeight = '0px';
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // --- 6. SERVICE SELECTION AUTOFILL ---
  const bookBtns = document.querySelectorAll('.service-cta, .hero-actions .btn-primary');
  const serviceSelect = document.getElementById('booking-service');
  const bookingSection = document.getElementById('booking');

  if (bookBtns.length > 0 && serviceSelect) {
    bookBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const serviceName = btn.getAttribute('data-service-select');
        if (serviceName) {
          serviceSelect.value = serviceName;
        }
        
        // Smooth scroll to booking section
        if (bookingSection) {
          e.preventDefault();
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // --- 7. BOOKING FORM SUBMISSION & MODAL ---
  const bookingForm = document.getElementById('appointment-form');
  const modalOverlay = document.getElementById('booking-confirmation-modal');
  const modalClose = document.getElementById('modal-close');
  const modalClientName = document.getElementById('modal-client-name');
  const modalConfirmDetails = document.getElementById('modal-confirm-details');

  if (bookingForm && modalOverlay && modalClose) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form details
      const name = document.getElementById('booking-name').value.trim();
      const phone = document.getElementById('booking-phone').value.trim();
      const service = document.getElementById('booking-service').value;
      const date = document.getElementById('booking-date').value;

      // Premium validation check
      if (!name || !phone || !service || !date) {
        alert('Please fill out all required fields.');
        return;
      }

      // Populate confirmation modal content
      if (modalClientName) {
        modalClientName.textContent = name;
      }
      if (modalConfirmDetails) {
        // Format date beautifully
        const dateObj = new Date(date);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        modalConfirmDetails.innerHTML = `Your session for <strong>${service}</strong> is reserved for <strong>${formattedDate}</strong>.<br><br>Our team will reach out to you shortly at <strong>${phone}</strong> to confirm your exact slot.`;
      }

      // Open Modal
      modalOverlay.classList.add('active');

      // Reset form
      bookingForm.reset();
    });

    // Close Modal event
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    // Close modal by clicking overlay background
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // --- 8. ACTIVE NAV LINK HIGHTLIGHT ON SCROLL ---
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // offset for sticky navigation
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
      
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  });

  // --- 9. STICKY MOBILE CTA VISIBILITY ---
  const stickyCta = document.querySelector('.sticky-mobile-cta');
  const heroSection = document.getElementById('hero');
  
  if (stickyCta && heroSection) {
    window.addEventListener('scroll', () => {
      const heroHeight = heroSection.offsetHeight;
      // Show sticky CTA after scrolling past half of the hero height
      if (window.scrollY > (heroHeight / 2)) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    });
  }

  // --- 10. HIGHLIGHT CURRENT DAY IN OPENING HOURS ---
  const dayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const hoursRows = document.querySelectorAll('.hours-table tr');
  
  if (hoursRows.length > 0) {
    // Map Javascript day indices to table rows (assuming table starts with Monday at row 0)
    // Javascript: 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
    // Table rows: row 0 = Mon, row 1 = Tue, row 2 = Wed, row 3 = Thu, row 4 = Fri, row 5 = Sat, row 6 = Sun
    let tableRowIndex = dayIndex - 1;
    if (dayIndex === 0) {
      tableRowIndex = 6; // Sunday is the last row
    }
    
    if (hoursRows[tableRowIndex]) {
      hoursRows[tableRowIndex].classList.add('today');
      
      // Append "(Today)" text to the day label
      const dayCell = hoursRows[tableRowIndex].cells[0];
      if (dayCell) {
        dayCell.innerHTML += ' <span style="font-size:0.75rem; font-style:italic; opacity:0.85;">(Today)</span>';
      }
    }
  }
});
