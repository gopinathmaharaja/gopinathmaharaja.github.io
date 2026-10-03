/**
 * Portfolio Animation System
 * Implements all phases from portfolio-animation-plan.md:
 * - Scroll reveals & staggered container animations
 * - Skill bar fill transitions
 * - Experience timeline drawing
 * - Statistics counting animations
 * - Technical background particle canvas
 * - Magnetic micro-interactions for buttons
 * - Mobile menu & scroll navigation indicator
 * - Contact form state transitions
 * - Konami code easter egg terminal
 * - Full prefers-reduced-motion accessibility support
 */

(function () {
  'use strict';

  /* ========================================
   * CONFIGURATION & STATE
   * ======================================== */
  const CONFIG = {
    scrollRevealThreshold: 0.15,
    staggerDelay: 90,
    navScrollThreshold: 40,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  };

  /* ========================================
   * 1. SCROLL PROGRESS BAR
   * ======================================== */
  function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ========================================
   * 2. NAVIGATION SCROLL EFFECT
   * ======================================== */
  function initNavScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > CONFIG.navScrollThreshold) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ========================================
   * 3. SCROLL REVEAL (Intersection Observer)
   * ======================================== */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    if (CONFIG.reducedMotion) {
      revealElements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: CONFIG.scrollRevealThreshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  /* ========================================
   * 4. STAGGERED REVEAL ANIMATIONS
   * ======================================== */
  function initStaggerAnimations() {
    const staggerContainers = new Set();
    document.querySelectorAll('.stagger-item').forEach((item) => {
      if (item.parentElement) {
        staggerContainers.add(item.parentElement);
      }
    });

    if (CONFIG.reducedMotion) {
      document.querySelectorAll('.stagger-item').forEach((el) => el.classList.add('revealed'));
      return;
    }

    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll('.stagger-item');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('revealed');
                }, index * CONFIG.staggerDelay);
              });
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px',
        }
      );

      observer.observe(container);
    });
  }

  /* ========================================
   * 5. SKILL BAR ANIMATIONS
   * ======================================== */
  function initSkillBars() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;

    const bars = skillsGrid.querySelectorAll('.skill-card__bar');

    if (CONFIG.reducedMotion) {
      bars.forEach((bar) => {
        const width = bar.dataset.width;
        if (width) {
          bar.style.setProperty('--bar-width', width + '%');
          bar.classList.add('bar-filled');
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bars.forEach((bar, index) => {
              const width = bar.dataset.width;
              if (width) {
                setTimeout(() => {
                  bar.style.setProperty('--bar-width', width + '%');
                  bar.classList.add('bar-filled');
                }, index * 75);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(skillsGrid);
  }

  /* ========================================
   * 6. EXPERIENCE TIMELINE DRAWING
   * ======================================== */
  function initTimeline() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;

    if (CONFIG.reducedMotion) {
      timeline.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeline.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(timeline);
  }

  /* ========================================
   * 7. STATISTICS COUNTERS ANIMATION
   * ======================================== */
  function initCounters() {
    const statNumbers = document.querySelectorAll('.about__stat-number');
    if (!statNumbers.length) return;

    if (CONFIG.reducedMotion) {
      statNumbers.forEach((el) => {
        el.textContent = el.dataset.target || el.textContent;
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statNumbers.forEach((counter) => {
              const target = parseInt(counter.dataset.target, 10);
              if (isNaN(target)) return;

              const duration = 1400; // ms
              const startTime = performance.now();

              function updateCount(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.floor(easeOut * target);

                counter.textContent = currentVal;

                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                } else {
                  counter.textContent = target;
                }
              }

              requestAnimationFrame(updateCount);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const statsContainer = document.querySelector('.about__stats');
    if (statsContainer) {
      observer.observe(statsContainer);
    }
  }

  /* ========================================
   * 8. TECHNICAL BACKGROUND CANVAS
   * ======================================== */
  function initBackgroundCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || CONFIG.reducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isSmall = window.innerWidth < 768;
    const particleCount = isSmall ? 18 : 34;
    const maxDistance = isSmall ? 90 : 130;
    const particles = [];

    // Get brand theme color
    function getParticleColor() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return isDark ? 'rgba(129, 140, 248, ' : 'rgba(99, 102, 241, ';
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.6 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        else if (this.x > width) this.x = 0;

        if (this.y < 0) this.y = height;
        else if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = getParticleColor() + '0.6)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId;
    let isVisible = true;

    function render() {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);
      const colorPrefix = getParticleColor();

      // Connect close particles with faint lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = colorPrefix + alpha + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(render);
    }

    render();

    // Resize handler
    window.addEventListener(
      'resize',
      () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      },
      { passive: true }
    );

    // Pause when tab not visible to save CPU/GPU
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isVisible = false;
        cancelAnimationFrame(animationId);
      } else {
        isVisible = true;
        render();
      }
    });
  }

  /* ========================================
   * 9. MAGNETIC BUTTON MICRO-INTERACTION
   * ======================================== */
  function initMagneticButtons() {
    if (CONFIG.reducedMotion || CONFIG.isTouch) return;

    const magneticButtons = document.querySelectorAll('.magnetic-btn');

    magneticButtons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - btnCenterX) * 0.22;
        const deltaY = (e.clientY - btnCenterY) * 0.22;

        btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }



  /* ========================================
   * 11. THEME SWITCHER
   * ======================================== */
  function initThemeSwitcher() {
    const themeSwitcher = document.getElementById('theme-switcher');
    if (!themeSwitcher) return;

    const icon = themeSwitcher.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (icon) {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
      }
    }

    themeSwitcher.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');

      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        if (icon) {
          icon.classList.remove('bx-sun');
          icon.classList.add('bx-moon');
        }
        localStorage.removeItem('theme');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icon) {
          icon.classList.remove('bx-moon');
          icon.classList.add('bx-sun');
        }
        localStorage.setItem('theme', 'dark');
      }

      themeSwitcher.style.transform = 'rotate(180deg) scale(1.12)';
      setTimeout(() => {
        themeSwitcher.style.transform = '';
      }, 300);
    });
  }

  /* ========================================
   * 12. SMOOTH SCROLL FOR ANCHOR LINKS
   * ======================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#' || !href) return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.getElementById('header')?.offsetHeight || 64;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight + 5;

          window.scrollTo({
            top: targetPosition,
            behavior: CONFIG.reducedMotion ? 'auto' : 'smooth',
          });
        }
      });
    });
  }

  /* ========================================
   * 13. MOBILE MENU
   * ======================================== */
  function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (toggle && navMenu) {
      toggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
      });

      // Close menu when a link inside is clicked
      navMenu.querySelectorAll('.nav__link').forEach((link) => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('show');
        });
      });

      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (
          navMenu.classList.contains('show') &&
          !navMenu.contains(e.target) &&
          !toggle.contains(e.target)
        ) {
          navMenu.classList.remove('show');
        }
      });
    }
  }

  /* ========================================
   * 14. SCROLL ACTIVE LINK INDICATOR
   * ======================================== */
  function initScrollActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__menu .nav__link');

    function onScroll() {
      const scrollY = window.scrollY;
      const headerHeight = document.getElementById('header')?.offsetHeight || 64;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 30;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active-link');
            } else {
              link.classList.remove('active-link');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ========================================
   * 15. KONAMI CODE EASTER EGG TERMINAL
   * ======================================== */
  function initEasterEgg() {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
    ];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          showEasterEgg();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    });
  }

  function showEasterEgg() {
    if (document.querySelector('.easter-egg-terminal')) return;

    const terminal = document.createElement('div');
    terminal.className = 'easter-egg-terminal';
    terminal.innerHTML = `
      <div class="terminal__header">
        <span class="terminal__dot terminal__dot--red"></span>
        <span class="terminal__dot terminal__dot--yellow"></span>
        <span class="terminal__dot terminal__dot--green"></span>
        <span class="terminal__title">dev-terminal</span>
        <button class="terminal__close" aria-label="Close terminal">&times;</button>
      </div>
      <div class="terminal__body">
        <p class="terminal__line"><span class="terminal__prompt">$</span> whoami</p>
        <p class="terminal__line terminal__output">gopinath-maharaja (Gopinath Maharaja)</p>
        <p class="terminal__line"><span class="terminal__prompt">$</span> location</p>
        <p class="terminal__line terminal__output">Chennai, India</p>
        <p class="terminal__line"><span class="terminal__prompt">$</span> experience</p>
        <p class="terminal__line terminal__output">8+ Years Senior Software Engineering (10+ Projects)</p>
        <p class="terminal__line"><span class="terminal__prompt">$</span> tech-stack</p>
        <p class="terminal__line terminal__output">Node.js, NestJS, TypeScript, React, React Native, Kafka, Redis, MongoDB, PostgreSQL, Docker, AWS</p>
        <p class="terminal__line"><span class="terminal__prompt">$</span> current-role</p>
        <p class="terminal__line terminal__output">Senior Software Engineer @ Emirates NBD</p>
        <p class="terminal__line"><span class="terminal__prompt">$</span> <span class="terminal__cursor">_</span></p>
      </div>
    `;
    document.body.appendChild(terminal);

    terminal.querySelector('.terminal__close').addEventListener('click', () => {
      terminal.remove();
    });

    setTimeout(() => {
      if (terminal.parentElement) {
        terminal.remove();
      }
    }, 12000);
  }

  /* ========================================
   * INITIALIZATION
   * ======================================== */
  function init() {
    initScrollProgress();
    initNavScroll();
    initScrollReveal();
    initStaggerAnimations();
    initSkillBars();
    initTimeline();
    initCounters();
    initBackgroundCanvas();
    initMagneticButtons();
    initThemeSwitcher();
    initSmoothScroll();
    initMobileMenu();
    initScrollActiveLink();
    initEasterEgg();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
