document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-item");
    const themeToggle = document.querySelector("#checkbox");
    const htmlElement = document.documentElement;
    const progressBars = document.querySelectorAll(".progress");
    const focusAreas = document.querySelectorAll('.focus-area');
    const skillItems = document.querySelectorAll('.skill-item');

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
              if (entry.target.classList.contains("focus-area")) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
              }
          }
      });
  }, observerOptions);

  // Observe all animated elements
  document
      .querySelectorAll(".project-card, .timeline-item, .skill-bar, .focus-area")
      .forEach((el) => observer.observe(el));

  // New Skills Section Interactions
  function initializeSkillsInteractions() {
      // Focus area hover effects
      focusAreas.forEach(area => {
          area.addEventListener('mouseenter', () => {
              focusAreas.forEach(other => {
                  if (other !== area) {
                      other.style.opacity = '0.7';
                  }
              });
          });
          
          area.addEventListener('mouseleave', () => {
              focusAreas.forEach(other => {
                  other.style.opacity = '1';
              });
          });

          // Set initial state for animation
          area.style.opacity = '0';
          area.style.transform = 'translateY(20px)';
      });

      // Skill items click handling
      skillItems.forEach(item => {
          item.addEventListener('click', () => {
              const projects = item.dataset.projects.split(',');
              highlightRelatedProjects(projects);
          });
      });
  }

  // Function to highlight related projects
  function highlightRelatedProjects(projectNames) {
      const projectCards = document.querySelectorAll('.project-card');
      
      projectCards.forEach(card => {
          const cardTitle = card.querySelector('h3').textContent.trim();
          if (projectNames.includes(cardTitle)) {
              card.classList.add('highlighted');
              // Scroll to the first related project
              if (projectNames[0] === cardTitle) {
                  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
          } else {
              card.classList.remove('highlighted');
          }
      });

      // Remove highlight after a delay
      setTimeout(() => {
          projectCards.forEach(card => card.classList.remove('highlighted'));
      }, 2000);
  }

  
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

    document.querySelectorAll('.section-content').forEach(section => {
        section.style.scrollBehavior = 'smooth';
    });
  
    // Initialize
    function initialize() {
      initializeTheme();
      showSection("home");
      initTypewriter();
      animateSkillBars();
      initializeSkillsInteractions();
    }
  
    initialize();
  });
  