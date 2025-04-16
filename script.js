document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-item");
    const themeToggle = document.querySelector("#checkbox");
    const htmlElement = document.documentElement;
    const progressBars = document.querySelectorAll(".progress");
  
    // Theme Management
    function initializeTheme() {
      const savedTheme = localStorage.getItem("theme") || "dark";
      htmlElement.setAttribute("data-theme", savedTheme);
      themeToggle.checked = savedTheme === "light";
    }
  
    themeToggle.addEventListener("change", () => {
      const newTheme = themeToggle.checked ? "light" : "dark";
      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  
    // Section Navigation
    function showSection(sectionId) {
      sections.forEach((section) => {
        section.classList.remove("active");
        section.style.display = "none";
      });
  
      const targetSection = document.getElementById(sectionId);
      targetSection.style.display = "block";
      setTimeout(() => targetSection.classList.add("active"), 50);
  
      // Update navigation
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
  
      // Update page indicator
      const sectionIndex = Array.from(sections).findIndex(
        (section) => section.id === sectionId
      );
      updatePageIndicator(sectionIndex);
    }
  
    // Navigation Click Handlers
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        showSection(targetId);
      });
    });
  
    // Page Indicator
    function updatePageIndicator(index) {
      const currentPage = document.querySelector(".current-page");
      currentPage.textContent = (index + 1).toString().padStart(2, "0");
    }
  
    // Typewriter Effect
    function initTypewriter() {
      const typewriterText = document.querySelector("#typed-text");
      const phrases = [
        "Python Developer 🐍",
        "Data Analyst 📊",
        "Automation Expert 🤖",
        "Problem Solver 🔧",
        "Achievement Hunter 🏆",
        "Tech Enthusiast 🚀",
        "Coffee to Code Converter ☕️",
        "sudo make me_a_developer 💻",
        "!false === true 🤔"
      ];
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
  
      function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
          typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }
  
        if (!isDeleting && charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, isDeleting ? 50 : 100);
        }
      }
  
      type();
    }
  
    // Skill Bars Animation
    function animateSkillBars() {
      progressBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress");
        bar.style.width = `${progress}%`;
      });
    }
  
    // Intersection Observer for Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          if (entry.target.classList.contains("skill-bar")) {
            animateSkillBars();
          }
        }
      });
    }, observerOptions);
  
    // Observe elements for animation
    document
      .querySelectorAll(".project-card, .timeline-item, .skill-bar")
      .forEach((el) => observer.observe(el));
  
    // Keyboard Navigation
    document.addEventListener("keydown", (e) => {
      const currentSection = document.querySelector(".section.active");
      const currentIndex = Array.from(sections).indexOf(currentSection);
  
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % sections.length;
        showSection(sections[nextIndex].id);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex =
          (currentIndex - 1 + sections.length) % sections.length;
        showSection(sections[prevIndex].id);
      }
    });
  
    // Mouse Wheel Navigation
    // let isScrolling = false;
    // document.addEventListener("wheel", (e) => {
    //   if (!isScrolling) {
    //     isScrolling = true;
    //     const currentSection = document.querySelector(".section.active");
    //     const currentIndex = Array.from(sections).indexOf(currentSection);
  
    //     if (e.deltaY > 0) {
    //       const nextIndex = (currentIndex + 1) % sections.length;
    //       showSection(sections[nextIndex].id);
    //     } else {
    //       const prevIndex =
    //         (currentIndex - 1 + sections.length) % sections.length;
    //       showSection(sections[prevIndex].id);
    //     }
  
    //     setTimeout(() => {
    //       isScrolling = false;
    //     }, 1000);
    //   }
    // });

    document.querySelectorAll('.section-content').forEach(section => {
        section.style.scrollBehavior = 'smooth';
    });
  
    // Initialize
    function initialize() {
      initializeTheme();
      showSection("home");
      initTypewriter();
      animateSkillBars();
    }
  
    initialize();
  });
  