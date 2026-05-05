const projects = [{
        title: "DataAgent Core",
        repo: "https://github.com/tpercival01/DataAgent-Core",
        live: "https://dataagent.thomaspercival.dev/",
        type: "AI data workflow engine",
        language: "Python",
        categories: ["python", "backend", "ai", "data"],
        featured: true,
        summary: "Autonomous Python execution engine that turns plain-English spreadsheet questions into sandboxed pandas and matplotlib workflows with error recovery, logs, and chart output.",
        stack: ["Python", "FastAPI", "Pydantic", "Groq", "Llama 3", "E2B", "pandas"]
    },
    {
        title: "Project Onyx API",
        repo: "https://github.com/tpercival01/Project-Onyx-API",
        live: "https://onyx.thomaspercival.dev/",
        type: "Async API sync engine",
        language: "Python",
        categories: ["python", "backend", "data"],
        featured: true,
        summary: "FastAPI backend for asynchronous Xbox data ingestion, using Celery, Redis, PostgreSQL, delta syncing, and idempotent upserts.",
        stack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Docker", "SQLAlchemy"]
    },
    {
        title: "Prism Desktop",
        repo: "https://github.com/tpercival01/Prism-Desktop",
        live: "https://prism.thomaspercival.dev/",
        type: "Local Python worker",
        language: "Python",
        categories: ["python", "ai", "automation"],
        featured: true,
        summary: "Desktop worker that connects to OBS, listens for voice-triggered clipping, processes video with FFmpeg, and generates AI captions for short-form content.",
        stack: ["Python", "OBS WebSocket", "FFmpeg", "Whisper", "PyInstaller"]
    },
    {
        title: "SheetSignal",
        repo: "https://github.com/tpercival01/sheetsignal",
        live: "",
        type: "Spreadsheet automation demo",
        language: "Python",
        categories: ["python", "data", "automation"],
        featured: true,
        summary: "Lightweight tool that turns messy CSV and Excel files into data quality scores, insights, charts, next steps, and downloadable reports.",
        stack: ["Python", "Streamlit", "pandas", "Matplotlib"]
    },
    {
        title: "VCT Draft Analyst",
        repo: "https://github.com/tpercival01/val-ai",
        live: "",
        type: "AI gaming assistant",
        language: "Python",
        categories: ["python", "ai", "data", "game"],
        featured: true,
        summary: "Streamlit-based Valorant draft assistant that combines VCT composition data, rule-based validation, and constrained LLM prompting to recommend ranked agent picks.",
        stack: ["Python", "Streamlit", "pandas", "Groq", "Llama 3", "JSON"]
    },
    {
        title: "Fabricated AI Engine",
        repo: "https://github.com/tpercival01/Fabricated-AI-Engine",
        live: "https://fabricated.thomaspercival.dev/",
        type: "LLM backend",
        language: "Python",
        categories: ["python", "backend", "ai", "game"],
        featured: true,
        summary: "FastAPI orchestration layer for a procedural detective game, using strict Pydantic schemas and a multi-step LLM pipeline to generate playable mystery cases.",
        stack: ["Python", "FastAPI", "Pydantic", "Groq", "Supabase", "PostgreSQL"]
    },
    {
        title: "Aletheia",
        repo: "https://github.com/tpercival01/aletheia",
        live: "",
        type: "AI text detection",
        language: "JavaScript",
        categories: ["ai", "web"],
        featured: true,
        summary: "Privacy-preserving Chrome extension that runs AI-generated text detection locally in the browser using a quantised DistilBERT model and WebAssembly inference.",
        stack: ["JavaScript", "Chrome Extension", "ONNX", "WebAssembly", "Transformers.js"]
    },
    {
        title: "Marina's Garden Backend",
        repo: "https://github.com/tpercival01/Marinas-Garden-Backend",
        live: "https://garden.thomaspercival.dev/",
        type: "FastAPI microservice",
        language: "Python",
        categories: ["python", "backend", "ai"],
        featured: false,
        summary: "Python FastAPI service for an AI-powered digital garden, handling CRUD operations, authentication routing, Supabase storage, and Groq-generated botany data.",
        stack: ["Python", "FastAPI", "Pydantic", "Groq", "Supabase", "PostgreSQL"]
    },
    {
        title: "DataAgent UI",
        repo: "https://github.com/tpercival01/DataAgent-UI",
        live: "https://dataagent.thomaspercival.dev/",
        type: "Frontend client",
        language: "TypeScript",
        categories: ["frontend", "ai", "data"],
        featured: false,
        summary: "Next.js interface for DataAgent, designed around spreadsheet upload, natural-language analysis requests, generated code visibility, logs, and chart output.",
        stack: ["TypeScript", "Next.js", "UI", "FastAPI client", "Data analysis"]
    },
    {
        title: "Project Onyx",
        repo: "https://github.com/tpercival01/Project-Onyx",
        live: "https://onyx.thomaspercival.dev/",
        type: "Frontend client",
        language: "TypeScript",
        categories: ["frontend", "data"],
        featured: false,
        summary: "Next.js frontend for Project Onyx, paired with the Python API sync engine to present tracked Xbox achievement and profile data.",
        stack: ["TypeScript", "Next.js", "PostgreSQL", "Drizzle"]
    },
    {
        title: "Prism",
        repo: "https://github.com/tpercival01/Prism",
        live: "https://prism.thomaspercival.dev/",
        type: "Creator tool web app",
        language: "TypeScript",
        categories: ["frontend", "automation", "ai"],
        featured: false,
        summary: "Web hub for a hybrid creator automation platform, connecting Twitch authentication, dashboard settings, app keys, and a local Python desktop worker.",
        stack: ["TypeScript", "Next.js", "Tailwind", "NextAuth", "Twitch OAuth", "Drizzle"]
    },
    {
        title: "Fabricated",
        repo: "https://github.com/tpercival01/Fabricated",
        live: "https://fabricated.thomaspercival.dev/",
        type: "AI game frontend",
        language: "TypeScript",
        categories: ["frontend", "ai", "game"],
        featured: false,
        summary: "Next.js frontend for a procedural true-crime mystery game, using React Flow to let players connect clues, suspects, and theories on a digital evidence board.",
        stack: ["TypeScript", "Next.js", "React Flow", "Tailwind", "FastAPI client"]
    },
    {
        title: "Marina's Garden Frontend",
        repo: "https://github.com/tpercival01/Marinas-Garden-Frontend",
        live: "https://garden.thomaspercival.dev/",
        type: "Interactive web app",
        language: "TypeScript",
        categories: ["frontend", "ai", "web"],
        featured: false,
        summary: "Responsive Next.js client for a digital garden app, with plant care state, Supabase authentication, local tutorial logic, and a custom FastAPI backend.",
        stack: ["TypeScript", "Next.js", "React", "Tailwind", "Supabase"]
    },
    {
        title: "AI Internal Tools",
        repo: "https://github.com/tpercival01/ai-internal-tools",
        live: "https://tools.thomaspercival.dev/",
        type: "Consulting landing page",
        language: "TypeScript",
        categories: ["frontend", "web", "automation"],
        featured: false,
        summary: "Lightweight consulting site focused on automation services, client pain points, delivery speed, and custom internal tool offers.",
        stack: ["TypeScript", "Next.js", "Tailwind", "Vercel"]
    },
    {
        title: "Portfolio",
        repo: "https://github.com/tpercival01/Portfolio",
        live: "https://tpercival01.github.io/Portfolio/",
        type: "Portfolio site",
        language: "HTML",
        categories: ["web"],
        featured: false,
        summary: "Personal portfolio site for presenting projects, contact links, and professional positioning.",
        stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
    },
    {
        title: "tpercival01",
        repo: "https://github.com/tpercival01/tpercival01",
        live: "",
        type: "GitHub profile",
        language: "Markdown",
        categories: ["web"],
        featured: false,
        summary: "GitHub profile repository used to present headline positioning, technical focus, and public developer identity.",
        stack: ["Markdown", "GitHub Profile"]
    },
    {
        title: "Education Platform",
        repo: "https://github.com/tpercival01/Education_platform",
        live: "",
        type: "Education website",
        language: "HTML",
        categories: ["web"],
        featured: false,
        summary: "Static education platform project from earlier web development work.",
        stack: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Manor Murder Mystery",
        repo: "https://github.com/tpercival01/Manor-Murder-Mystery",
        live: "",
        type: "Python game",
        language: "Python",
        categories: ["python", "game"],
        featured: false,
        summary: "Text adventure mystery game built in Python, focused on exploration, clues, and deduction.",
        stack: ["Python", "Game logic", "Text adventure"]
    },
    {
        title: "Circuit Puzzle Game",
        repo: "https://github.com/tpercival01/circuit-puzzle-game",
        live: "",
        type: "Python game",
        language: "Python",
        categories: ["python", "game"],
        featured: false,
        summary: "Puzzle game where players connect circuit tiles to complete a path, built as an earlier Python game project.",
        stack: ["Python", "Pygame", "Puzzle logic"]
    }
];

const filters = [
    { label: "All", value: "all" },
    { label: "Python", value: "python" },
    { label: "Backend", value: "backend" },
    { label: "AI", value: "ai" },
    { label: "Automation", value: "automation" },
    { label: "Data", value: "data" },
    { label: "Frontend", value: "frontend" },
    { label: "Games", value: "game" },
    { label: "Web", value: "web" }
];

const featuredContainer = document.querySelector("#featured-projects");
const allProjectsContainer = document.querySelector("#all-projects");
const filterRow = document.querySelector("#filter-row");
const searchInput = document.querySelector("#project-search");
const projectCount = document.querySelector("#project-count");

let activeFilter = "all";
let activeSearch = "";

function createProjectCard(project) {
    const article = document.createElement("article");
    article.className = "project-card";

    const links = [
            project.live ?
            `<a class="project-link" href="${project.live}" target="_blank" rel="noopener noreferrer">Live</a>` :
            "",
            `<a class="project-link" href="${project.repo}" target="_blank" rel="noopener noreferrer">GitHub</a>`
        ]
        .filter(Boolean)
        .join("");

    article.innerHTML = `
    <div class="project-topline">
      <span class="project-type">${project.type}</span>
      <span class="project-language">${project.language}</span>
    </div>

    <h3>${project.title}</h3>

    <p class="project-summary">${project.summary}</p>

    <ul class="stack-list">
      ${project.stack.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <div class="project-links">
      ${links}
    </div>
  `;

  return article;
}

function renderFeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  featuredContainer.innerHTML = "";
  featuredProjects.forEach((project) => {
    featuredContainer.appendChild(createProjectCard(project));
  });
}

function getFilteredProjects() {
  return projects.filter((project) => {
    const matchesFilter =
      activeFilter === "all" || project.categories.includes(activeFilter);

    const searchText = [
      project.title,
      project.type,
      project.language,
      project.summary,
      project.stack.join(" "),
      project.categories.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchText.includes(activeSearch.toLowerCase());

    return matchesFilter && matchesSearch;
  });
}

function renderAllProjects() {
  const filteredProjects = getFilteredProjects();

  allProjectsContainer.innerHTML = "";

  filteredProjects.forEach((project) => {
    allProjectsContainer.appendChild(createProjectCard(project));
  });

  projectCount.textContent = `${filteredProjects.length} of ${projects.length} public repositories shown`;
}

function renderFilters() {
  filterRow.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = `filter-button${filter.value === activeFilter ? " active" : ""}`;
    button.type = "button";
    button.textContent = filter.label;
    button.dataset.filter = filter.value;

    button.addEventListener("click", () => {
      activeFilter = filter.value;
      renderFilters();
      renderAllProjects();
    });

    filterRow.appendChild(button);
  });
}

searchInput.addEventListener("input", (event) => {
  activeSearch = event.target.value.trim();
  renderAllProjects();
});

renderFeaturedProjects();
renderFilters();
renderAllProjects();