/**
 * SISTEMAS AGENTICOS - Main JavaScript
 * Navigation, Theme Toggle, Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initStickyHeader();
  initMobileMenu();
  initSmoothScroll();
  initAccordions();
  initTabs();
  initMobileToc();
  initLessonNavHighlight();
});

/**
 * Theme Toggle (Dark/Light)
 */
function initThemeToggle() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;

  toggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
}

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav-main');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));

    // Update icon
    const isOpen = nav.classList.contains('open');
    toggle.innerHTML = isOpen
      ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>`;
  });

  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL without scroll
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });
}

/**
 * Accordions
 */
function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Close all items in this accordion
      const accordion = item.closest('.accordion');
      accordion.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/**
 * Tabs
 */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    const tabs = tabContainer.querySelectorAll('.tab');
    const contents = tabContainer.parentElement.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-tab');

        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update active content
        contents.forEach(content => {
          content.classList.remove('active');
          if (content.id === targetId) {
            content.classList.add('active');
          }
        });
      });
    });
  });
}

/**
 * Mobile Table of Contents
 */
function initMobileToc() {
  const toc = document.querySelector('.mobile-toc');
  if (!toc) return;

  const trigger = toc.querySelector('.mobile-toc-trigger');

  trigger.addEventListener('click', () => {
    toc.classList.toggle('open');
  });

  // Close when clicking a link
  toc.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toc.classList.remove('open');
    });
  });
}

/**
 * Lesson Navigation Highlight on Scroll
 */
function initLessonNavHighlight() {
  const navLinks = document.querySelectorAll('.lesson-nav-link');
  const blocks = document.querySelectorAll('.lesson-block');

  if (!navLinks.length || !blocks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20% 0% -60% 0%',
      threshold: 0
    }
  );

  blocks.forEach(block => observer.observe(block));
}

/**
 * Staggered Animation on Scroll
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Initialize scroll animations
initScrollAnimations();
