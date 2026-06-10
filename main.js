/* ═══════════════════════════════════════════════════════════════════════════
   PORTFOLIO MAIN JAVASCRIPT
   Interactivity, animations, and dynamic link population
   ═══════════════════════════════════════════════════════════════════════════ */

// ───────────────────────────────────────────────────────────────────────────
// TYPEWRITER EFFECT
// ───────────────────────────────────────────────────────────────────────────

const roles = ["Game Developer", "Web Developer", "UI/UX Designer"];
const typewriterEl = document.querySelector(".typewriter");
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 2000;

function typewriterEffect() {
  const currentRole = roles[currentRoleIndex];
  const displayText = currentRole.substring(0, currentCharIndex);

  typewriterEl.textContent = displayText;

  if (!isDeleting) {
    if (currentCharIndex < currentRole.length) {
      currentCharIndex++;
      setTimeout(typewriterEffect, typingSpeed);
    } else {
      // Pause before deleting
      setTimeout(() => {
        isDeleting = true;
        typewriterEffect();
      }, delayBetweenRoles);
    }
  } else {
    if (currentCharIndex > 0) {
      currentCharIndex--;
      setTimeout(typewriterEffect, deletingSpeed);
    } else {
      // Move to next role
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      setTimeout(typewriterEffect, typingSpeed);
    }
  }
}

// ───────────────────────────────────────────────────────────────────────────
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ───────────────────────────────────────────────────────────────────────────

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      // Animate progress bars when skills grid becomes visible
      const bars = entry.target.querySelectorAll(".bar-fill");
      bars.forEach((bar) => {
        const targetWidth = bar.getAttribute("data-width");
        if (targetWidth) {
          bar.style.width = targetWidth + "%";
        }
      });
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// ───────────────────────────────────────────────────────────────────────────
// NAVBAR SCROLL & ACTIVE LINK BEHAVIOR
// ───────────────────────────────────────────────────────────────────────────

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

// Navbar background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Update active nav link based on section in view
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// Smooth scroll with mobile menu close
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ───────────────────────────────────────────────────────────────────────────
// MOBILE HAMBURGER MENU
// ───────────────────────────────────────────────────────────────────────────

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// ───────────────────────────────────────────────────────────────────────────
// DYNAMIC LINK POPULATION FROM links.js
// ───────────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // Ensure PORTFOLIO_LINKS is loaded from links.js
  if (typeof window.PORTFOLIO_LINKS === "undefined") {
    console.error("PORTFOLIO_LINKS not found. Make sure links.js is loaded.");
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PRELOADER
  // ─────────────────────────────────────────────────────────────────────────
  const preloader = document.getElementById("preloader");
  const preloaderFill = document.getElementById("preloaderFill");
  
  if (preloader && preloaderFill) {
    // Start the progress bar fill
    preloaderFill.style.width = "100%";
    
    // After 1500ms, add hidden class to fade out
    setTimeout(() => {
      preloader.classList.add("hidden");
      // After CSS transition (500ms), remove from DOM
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 1500);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // STATS COUNTER (Count-up animation)
  // ─────────────────────────────────────────────────────────────────────────
  const statsBar = document.getElementById("stats");
  let hasAnimated = false;

  if (statsBar) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateStats();
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsBar);
  }

  function animateStats() {
    const statNumbers = document.querySelectorAll(".stat-number");
    const duration = 1200; // 1.2 seconds
    const startTime = Date.now();

    statNumbers.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-target"));
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(progress * target);
        stat.textContent = current;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CONTACT FORM SUBMISSION (Formspree)
  // ─────────────────────────────────────────────────────────────────────────
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const submitButton = contactForm.querySelector("button[type='submit']");
      const originalText = submitButton.textContent;
      
      // Disable button and show sending state
      submitButton.disabled = true;
      submitButton.textContent = "Sending…";
      
      // Clear previous message
      formMessage.textContent = "";
      formMessage.className = "form-message";
      
      try {
        const formData = new FormData(contactForm);
        const endpoint = window.PORTFOLIO_LINKS.formspree;
        
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });
        
        if (response.ok) {
          formMessage.classList.add("success");
          formMessage.textContent = "Message sent! I'll get back to you soon.";
          contactForm.reset();
        } else {
          formMessage.classList.add("error");
          formMessage.textContent = "Something went wrong. Please try again.";
        }
      } catch (error) {
        console.error("Form submission error:", error);
        formMessage.classList.add("error");
        formMessage.textContent = "Something went wrong. Please try again.";
      } finally {
        // Re-enable button and restore text
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // BACK-TO-TOP BUTTON
  // ─────────────────────────────────────────────────────────────────────────
  const backToTopButton = document.getElementById("backToTop");
  
  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Find all elements with data-link attribute and set their href
  const linkElements = document.querySelectorAll("[data-link]");
  linkElements.forEach((element) => {
    const linkKey = element.getAttribute("data-link");
    if (window.PORTFOLIO_LINKS[linkKey]) {
      element.href = window.PORTFOLIO_LINKS[linkKey];
    } else {
      console.warn(
        `Link key "${linkKey}" not found in PORTFOLIO_LINKS. Update links.js`
      );
    }
  });

  // Start typewriter effect
  typewriterEffect();
});

// ───────────────────────────────────────────────────────────────────────────
// SMOOTH SCROLL BEHAVIOR (fallback for older browsers)
// ───────────────────────────────────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
