const projects = [
    {
        title: "DataAgent Core",
        repo: "https://github.com/tpercival01/DataAgent-Core",
        live: "https://dataagent.thomaspercival.dev/",
        type: "AI spreadsheet analysis engine",
        language: "Python",
        categories: ["python", "backend", "ai", "data", "automation"],
        featured: true,
        summary: "AI-powered data workflow engine that turns natural-language spreadsheet requests into sandboxed Python analysis scripts with logs, charts, retries, and error recovery.",
        stack: [
            "Python",
            "FastAPI",
            "Pydantic",
            "Groq",
            "Llama 3",
            "E2B",
            "pandas",
        ],
    },
    {
        title: "Project Onyx API",
        repo: "https://github.com/tpercival01/Project-Onyx-API",
        live: "https://onyx.thomaspercival.dev/",
        type: "Async API sync backend",
        language: "Python",
        categories: ["python", "backend", "data", "automation"],
        featured: true,
        summary: "FastAPI backend for external API ingestion and PostgreSQL synchronisation, using Celery, Redis, delta syncing, and idempotent updates for reliable background processing.",
        stack: [
            "Python",
            "FastAPI",
            "Celery",
            "Redis",
            "PostgreSQL",
            "Docker",
            "SQLAlchemy",
        ],
    },
    {
        title: "Fabricated AI Engine",
        repo: "https://github.com/tpercival01/Fabricated-AI-Engine",
        live: "https://fabricated.thomaspercival.dev/",
        type: "Structured LLM workflow engine",
        language: "Python",
        categories: ["python", "backend", "ai", "automation"],
        featured: true,
        summary: "FastAPI orchestration layer for multi-step LLM workflows, using strict schemas, staged generation, structured outputs, and PostgreSQL-backed workflow state.",
        stack: [
            "Python",
            "FastAPI",
            "Pydantic",
            "Groq",
            "PostgreSQL",
            "Structured outputs",
        ],
    },
    {
        title: "Aletheia",
        repo: "https://github.com/tpercival01/aletheia",
        live: "",
        type: "AI-generated media detection",
        language: "Python / JavaScript",
        categories: ["python", "ai", "web"],
        featured: true,
        summary: "MSc Artificial Intelligence dissertation project combining machine learning inference, browser-based analysis, and responsible AI education for detecting and flagging AI-generated media.",
        stack: [
            "Python",
            "JavaScript",
            "TensorFlow",
            "Docker",
            "Computer Vision",
            "Browser Extension",
        ],
    },
    {
        title: "Prism Desktop",
        repo: "https://github.com/tpercival01/Prism-Desktop",
        live: "https://prism.thomaspercival.dev/",
        type: "Local Python worker",
        language: "Python",
        categories: ["python", "ai", "automation"],
        featured: false,
        summary: "Local Python worker that connects to OBS, listens for voice-triggered clipping, processes video with FFmpeg, and generates AI captions for short-form content.",
        stack: ["Python", "OBS WebSocket", "FFmpeg", "Whisper", "PyInstaller"],
    },
    {
        title: "SheetSignal",
        repo: "https://github.com/tpercival01/sheetsignal",
        live: "",
        type: "Spreadsheet automation demo",
        language: "Python",
        categories: ["python", "data", "automation"],
        featured: false,
        summary: "Lightweight tool that turns messy CSV and Excel files into data quality scores, insights, charts, next steps, and downloadable reports.",
        stack: ["Python", "Streamlit", "pandas", "Matplotlib"],
    },
    {
        title: "Perzevol.OS",
        repo: "https://github.com/tpercival01/perzevol-os",
        live: "",
        type: "Algorithmic gaming suite",
        language: "Python",
        categories: ["python", "ai", "data", "game"],
        featured: false,
        summary: "Modular Streamlit operating system containing algorithmic scripts to analyse competitive games, featuring a data-driven Valorant draft advisor powered by pandas pipelines and constrained Groq LLM calls.",
        stack: ["Python", "Streamlit", "pandas", "Groq", "Llama 3"],
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
        stack: ["Python", "FastAPI", "Pydantic", "Groq", "Supabase", "PostgreSQL"],
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
        stack: ["TypeScript", "Next.js", "UI", "FastAPI client", "Data analysis"],
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
        stack: ["TypeScript", "Next.js", "PostgreSQL", "Drizzle"],
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
        stack: ["TypeScript", "Next.js", "Tailwind", "NextAuth", "Twitch OAuth"],
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
        stack: ["TypeScript", "Next.js", "React Flow", "Tailwind", "FastAPI"],
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
        stack: ["TypeScript", "Next.js", "React", "Tailwind", "Supabase"],
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
        stack: ["TypeScript", "Next.js", "Tailwind", "Vercel"],
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
        stack: ["Python", "Game logic", "Text adventure"],
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
        stack: ["Python", "Pygame", "Puzzle logic"],
    },
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
    { label: "Web", value: "web" },
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
            `<a class="project-link" href="${project.repo}" target="_blank" rel="noopener noreferrer">GitHub</a>`,
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
      project.categories.join(" "),
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
    const activeClass = filter.value === activeFilter ? " active" : "";
    button.className = `filter-button${activeClass}`;
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
