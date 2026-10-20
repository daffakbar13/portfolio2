// PF-4 mockup: every screen the content refresh touches, switched by #state=<name>.
// Data mirrors config/experience.ts, config/skills.ts and config/site.ts after the change.
(function () {
  var PUB = "../../public";
  var SITE = "https://daffa-akbar.vercel.app";

  var svg = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    chevronRight: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
    chevronLeft: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>',
    chevronDown: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    contact: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    user: '<svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0z"/></svg>',
    work: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21l1.4-7L2 9.3l7-.8z"/></svg>',
    starO: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m12 2 3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21l1.4-7L2 9.3l7-.8z"/></svg>'
  };

  // config/skills.ts after PF-4 (order kept; featured = first 6)
  var skills = [
    ["React", "Craft interactive user interfaces using components, state, props, and virtual DOM.", 5],
    ["Typescript", "Enhance JavaScript with static types, making code more understandable and reliable.", 5],
    ["Next.js", "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.", 5],
    ["express.js", "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.", 5],
    ["MongoDB", "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.", 5],
    ["Vue 3 / Pinia", "Build reactive interfaces with the Composition API and typed Pinia stores.", 5, "new"],
    ["Javascript", "Create interactive and dynamic web experiences with the versatile scripting language.", 5],
    ["Node.js", "Run JavaScript on the server side, enabling dynamic and responsive applications.", 5],
    ["Tailwind CSS", "Design beautiful, modern websites faster with a utility-first CSS framework.", 5],
    ["Indonesia", "Fluent", 5, "flag"],
    ["English", "Professional", 4, "flag"],
    ["Arabic", "Conversational", 3, "flag"],
    ["Jira", "Track, plan, and ship software with agile boards.", 5],
    ["Bitbucket", "Collaborative Git solution for teams and enterprises.", 5],
    ["AI-assisted development (Claude Code)", "Plan, build, review and test with AI agents in the loop.", 4, "new"],
    ["Redis", "Cache hot data and keep counters and locks in a fast in-memory store.", 4, "new"],
    ["RabbitMQ", "Run background jobs and async workflows through reliable message queues.", 4, "new"],
    ["Kibana", "Search logs and build dashboards to debug and monitor services.", 4, "new"],
    ["Playwright", "Write end-to-end tests that drive real browsers.", 4, "new"],
    ["Docker", "Containerize apps for consistent and scalable deployment.", 4],
    ["Nest.js", "Create scalable and modular applications with a progressive Node.js framework.", 4],
    ["React Native", "Develop cross-platform mobile apps using React for consistent and engaging experiences.", 4],
    ["ElasticSearch", "Powerful, scalable search and indexing platform.", 4],
    ["Github", "The home for open-source and team development.", 4],
    ["Gitlab", "All-in-one DevOps platform with built-in CI/CD.", 4],
    ["Material UI", "Create stunning and responsive UIs with a popular React UI framework.", 4],
    ["Redux", "Manage app state effectively using a predictable and centralized state container.", 4],
    ["MySQL", "Manage and organize relational databases efficiently for data-driven applications.", 4],
    ["PostgreSql", "Advanced SQL database with strong consistency and extensibility.", 4],
    ["Figma", "Design, prototype, and iterate together in real time.", 4],
    ["HTML 5", "Structure web content beautifully with the latest version of HyperText Markup Language.", 4],
    ["CSS 3", "Style web pages creatively with the latest iteration of Cascading Style Sheets.", 4],
    ["Jenkins", "Automate build, test and deploy pipelines.", 3, "new"],
    ["Kubernetes", "Deploy and scale containerized services across a cluster.", 3, "new"],
    ["MQTT", "Stream lightweight publish/subscribe messages between devices and services.", 3, "new"],
    ["Firebase", "Ship auth, push notifications and realtime data without running servers.", 3, "new"],
    ["Go", "Write fast, simple services in a statically typed, compiled language.", 3, "new"],
    ["AWS", "Store and retrieve any file, anytime, from anywhere.", 3],
    ["Socket.io", "Enable real-time, bidirectional communication between clients and servers effortlessly.", 3],
    ["Notion", "Organize ideas, projects, and docs in one place.", 3],
    ["Google Analytics", "Track user behavior and measure site performance.", 2],
    ["Google Maps", "Powerful mapping and geolocation APIs.", 2],
    ["PHP", "Build dynamic websites with ease.", 2],
    ["Laravel", "Developer-friendly framework for web artisans.", 2]
  ];

  // config/experience.ts after PF-4 (only the entries this ticket changes carry full details)
  var exps = [
    { id: "sociolla", name: "Sociolla", type: "Professional", cat: ["Software Engineer", "On Site"], logo: "/experience/sociolla/logo.png",
      short: "Software Engineer on the non-commerce team: built SHIELD HRMS, the customer chat platform and chatbot, Google Business reviews sync and the GenPinkCon 2026 check-in dashboard.",
      dates: "Nov 2023 – Present", web: "https://www.sociolla.com",
      stack: ["Node.js", "express.js", "Vue.js", "MongoDB", "React Native", "Javascript", "Typescript", "AWS", "ElasticSearch", "Redis", "RabbitMQ", "Kibana"],
      paragraphs: [
        "Software Engineer on the non-commerce team, building and maintaining internal tools and service integrations that support business operations. Collaborated closely with cross-functional teams across Indonesia, India, and Vietnam, ensuring smooth communication and delivery across time zones.",
        "Key projects:"
      ],
      projects: [
        ["SHIELD HRMS", "the HR system Sociolla employees use every day."],
        ["Customer chat platform and chatbot", "conversations between customers and customer care, with a chatbot that answers first."],
        ["Google Business reviews sync", "brings store reviews from Google Business Profile into internal tools so the team can follow up in one place."],
        ["Event check-in dashboard (GenPinkCon 2026)", "ticket check-in and live attendance for the event."]
      ],
      respTitle: "Responsibilities:",
      bullets: [
        "Developed scalable backend services using Node.js, Express.js, and MongoDB, with a focus on clean architecture and maintainability.",
        "Built dynamic frontend interfaces with Vue.js to improve user experience for internal tools and dashboards.",
        "Implemented Elasticsearch for fast data retrieval and analytics, enabling efficient querying of large-scale operational data.",
        "Managed background jobs and asynchronous workflows using RabbitMQ, improving system responsiveness and reliability.",
        "Monitored and debugged services using Kibana, identifying issues proactively and improving system observability.",
        "Collaborated with international teams to plan, develop, and deploy features, maintaining strong alignment despite geographic and cultural differences."
      ],
      pages: [["Sociolla", "The Most Complete & Trusted Cosmetic Site #1 in Indonesia", "/experience/sociolla/sociolla.png"], ["SHIELD", "HRMS for Sociolla Employees", "/experience/sociolla/shield.png"]],
      pagesMore: "Lilla, Beauty Journal and SOCO page info stay as they are." },
    { id: "spartan", name: "Confidential", type: "Professional", cat: ["Full Stack Developer", "Remote"], logo: "/experience/spartan/logo.svg",
      short: "Presidential Palace Infrastructure Management System.", dates: "Oct 2024 – Feb 2025",
      stack: ["Vue.js", "Tailwind CSS", "Laravel", "PostgreSQL"],
      paragraphs: [
        "Led the development of a full-stack web application to manage the facilities and infrastructure of Indonesia’s Presidential Palaces. The platform enables real-time asset tracking, maintenance scheduling, and service request processing, helping streamline operations and enhance accountability.",
        "Responsibilities:"
      ],
      bullets: [
        "Developed and maintained frontend components using Vue.js and Tailwind CSS, ensuring responsive and accessible UI design.",
        "Built and optimized RESTful APIs using Laravel, handling data operations related to assets, maintenance, and user management.",
        "Designed and managed relational data structures using PostgreSQL, ensuring data integrity and performance."
      ],
      descMore: "Remaining description unchanged.",
      pages: [["Spartan", "", "/experience/spartan/1.png"]], pagesMore: "7 more Spartan screenshots, unchanged." },
    { id: "binus", name: "Binus University", type: "Professional", cat: ["Backend", "Remote"], logo: "/experience/binus/logo.jpeg",
      short: "Building a scalable backend for Sokrates Superapps, a unified platform that integrates multiple mini applications tailored for BINUS tenants, including features such as threads, articles, videos, and community engagement tools." },
    { id: "poslive", name: "Confidential", type: "Professional", cat: ["UI/UX", "Frontend", "Remote"], logo: "/experience/poslive/logo.jpg",
      short: "Designed and developed a web-based Point of Sale (POS) system tailored for multi-merchant environments, enabling streamlined operations across various types of retail and F&B businesses." },
    { id: "nabati", name: "PT Kaldu Sari Nabati Indonesia", type: "Professional", cat: ["Frontend", "Remote"], logo: "/experience/nabati/logo.jpg",
      short: "Developing a web-based eDOT Distribution System (EDS) designed to manage product sales and streamline logistics operations for B2B and B2C workflows." },
    { id: "bri", name: "PT Bank Rakyat Indonesia", type: "Professional", cat: ["Full Stack Developer", "Remote"], logo: "/experience/bri/logo.png",
      short: "The company have pensionary division. We create article website for pensionary clients. The application includes information and forum about pensionary." },
    { id: "kemenkumham", name: "Rupbasan Kelas I Bandung", type: "Professional", cat: ["Full Stack Developer", "On Site"], logo: "/experience/kemenkumham/logo.png",
      short: "Developing system for guest registration. The application have configs for special guest. We have digital signature features, and diagram for maintaining guest." },
    { id: "office", name: "St. Daffa Moritz Office", type: "Personal Project", cat: ["Full Stack Developer", "AI-assisted"], tile: true,
      short: "An AI-assisted dev workflow: PM, design, dev and QA desks on Claude Code take a rough idea to a reviewed pull request, plus a PR review bot.",
      dates: "Sep 2026 – Present",
      stack: ["Typescript", "Node.js", "Claude Code", "Playwright"],
      paragraphs: [
        "St. Daffa Moritz Office is a local dashboard that runs my side projects like a small team. Each ticket moves through four desks on Claude Code, and I approve the work at each hand-off.",
        "How it works:"
      ],
      bullets: [
        "PM desk turns a rough idea into a user story with Given/When/Then acceptance criteria.",
        "Design desk builds a clickable HTML mockup from the project's own components and screenshots it at mobile and desktop widths.",
        "Dev desk makes the smallest change that meets the criteria, verifies it and opens a draft pull request.",
        "QA desk writes and runs Playwright end-to-end tests and reports pass, fail or flaky with trace and video.",
        "A PR review bot checks pull requests against a fixed checklist and posts blockers with file and line."
      ],
      pages: [] },
    { id: "portfolio", name: "My Portfolio", type: "Personal Project", cat: ["Full Stack Developer"], logo: "/experience/portfolio/logo.png",
      short: "This site: my developer portfolio with experience, career timeline and skills, built with Next.js and Tailwind CSS.",
      dates: "May 2025 – Present", web: "https://daffa-akbar.vercel.app", gh: "https://github.com/daffakbar13/portfolio2",
      stack: ["Next.js", "Tailwind CSS"],
      paragraphs: ["This site: my developer portfolio with experience, career timeline and skills, built with Next.js and Tailwind CSS."],
      bullets: [], pages: [] },
    { id: "mytha-soni", name: "Wedding Invitation Website", type: "Personal Project", cat: ["Full Stack Developer"], logo: "/experience/mytha-soni/logo.png", short: "The wedding invitation" },
    { id: "illa-ahmad", name: "Wedding Invitation Website", type: "Personal Project", cat: ["Full Stack Developer"], logo: "/experience/illa-ahmad/logo.png", short: "The wedding invitation" },
    { id: "fitri-firman", name: "Wedding Invitation Website", type: "Personal Project", cat: ["Full Stack Developer"], logo: "/experience/fitri-firman/logo.png", short: "The wedding invitation" },
    { id: "wedding", name: "My Wedding Invitation Website", type: "Personal Project", cat: ["Full Stack Developer"], logo: "/experience/wedding/logo.png", short: "The wedding invitation" }
  ];
  var byId = {};
  exps.forEach(function (e) { byId[e.id] = e; });
  var detailIds = { sociolla: 1, spartan: 1, office: 1, portfolio: 1 };
  // featuredExperiences stays [0, 1, 4]: the new entry is added among the personal projects
  var featured = [exps[0], exps[1], exps[4]];

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function chips(arr) { return '<div class="chips">' + arr.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + "</div>"; }
  function tile(big) {
    return '<div class="office-tile' + (big ? " big" : "") + '" role="img" aria-label="St. Daffa Moritz Office"><div class="name">St. Daffa Moritz Office</div><div class="desks"><span>PM</span><span>Design</span><span>Dev</span><span>QA</span></div></div>';
  }
  function initials(name) {
    var words = name.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
    return (words.length > 1 ? words[0][0] + words[1][0] : name.slice(0, 2)).toUpperCase();
  }

  function card(e) {
    var href = detailIds[e.id] ? "#state=" + e.id : "#state=experience";
    return '<article class="pcard"><div class="pcard-img">' +
      (e.tile ? tile(false) : '<img src="' + PUB + e.logo + '" alt="' + esc(e.name) + ' logo">') +
      '</div><div class="pcard-body"><h5>' + esc(e.name) + "</h5><p>" + esc(e.short) + "</p>" + chips(e.cat) +
      '<a class="btn btn-default" href="' + href + '">Read more ' + svg.chevronRight + "</a></div>" +
      '<div class="type" title="' + e.type + '">' + (e.type === "Personal Project" ? svg.user : svg.work) + "</div></article>";
  }

  function skillCard(s) {
    var stars = "";
    for (var i = 1; i <= 5; i++) stars += i <= s[2] ? svg.star : svg.starO;
    return '<div class="skill"><div class="skill-in"><div class="skill-icon" aria-hidden="true">' + initials(s[0]) +
      '</div><div class="txt"><h3>' + esc(s[0]) + "</h3><p>" + esc(s[1]) + '</p><div class="stars" aria-label="' + s[2] + ' out of 5">' + stars + "</div></div></div></div>";
  }

  function pageHead(t, d) {
    return '<div class="page-head"><h1 class="font-heading">' + t + '</h1><p>' + d + "</p></div><hr>";
  }

  var screens = {
    home: function () {
      return '<section class="hero"><div class="hero-inner">' +
        '<img class="hero-img" src="' + PUB + '/daffa2.png" alt="M. Daffa Raihan Akbar - Full Stack Developer Portfolio">' +
        '<h1 class="font-heading">M. Daffa Raihan Akbar</h1><h3 class="font-heading role">Full Stack Developer</h3><h3 class="loc" style="font-weight:400">Jakarta, Indonesia</h3>' +
        '<div class="hero-ctas"><a class="btn btn-default btn-lg" href="#state=home">' + svg.github.replace("<svg", '<svg class="ico"') + " GitHub</a>" +
        '<a class="btn btn-outline btn-lg" href="#state=home">' + svg.contact + " Contact</a></div>" + svg.chevronDown.replace('class="ico"', 'class="ico" style="width:1.5rem;height:1.5rem;margin-top:2.5rem"') +
        "</div></section>" +
        '<section class="section bg-muted" id="skills"><div class="section-head"><h2 class="font-heading">Skills</h2><p>Key skills that define my professional identity.</p></div>' +
        '<div class="grid3">' + skills.slice(0, 6).map(skillCard).join("") + "</div>" +
        '<div class="center"><a class="btn btn-outline btn-xl-round" href="#state=skills">' + svg.chevronDown + " View All</a></div></section>" +
        '<section class="section" id="experience" style="margin:3.5rem 0 0"><div class="section-head"><h2 class="font-heading">Experience</h2><p>Highlighting career journey and impactful projects.</p></div>' +
        '<div class="grid3">' + featured.map(card).join("") + "</div>" +
        '<div class="center"><a class="btn btn-outline btn-xl-round" href="#state=experience">' + svg.chevronDown + " View All</a></div></section>" +
        '<p class="mock-note">No Contributions section below Experience; the page ends here.</p>';
    },
    experience: function () {
      return pageHead("Experience", "Highlighting career journey and impactful projects.") +
        '<div class="page-body"><div class="tabs" role="tablist">' +
        ["all", "personal", "professional"].map(function (t, i) {
          return '<button role="tab" data-tab="' + t + '" aria-selected="' + (i === 0) + '">' + t[0].toUpperCase() + t.slice(1) + "</button>";
        }).join("") + '</div><div class="grid3 exp-grid" id="exp-grid">' + exps.map(card).join("") + "</div></div>";
    },
    skills: function () {
      return pageHead("Skills", "Key skills that define my professional identity.") +
        '<p class="mock-note">Added: Vue 3 / Pinia, AI-assisted development (Claude Code), Redis, RabbitMQ, Kibana, Playwright, Jenkins, Kubernetes, MQTT, Firebase, Go; Docker already listed, now 4 stars. Removed: AdobeXD, CodeIgniter, Bootstrap, Angular, GraphQL, Netlify. Real cards use brand icons from components/common/icons.tsx.</p>' +
        '<div class="page-body"><div class="grid3">' + skills.map(skillCard).join("") + "</div></div>";
    },
    "contributions-404": function () {
      return '<div class="nf"><div class="nf-row"><h1>404</h1><p>This page could not be found.</p></div></div>' +
        '<p class="mock-note">/contributions: page, ContributionCard and config/contributions.ts deleted, so Next.js serves its default not-found page inside the site layout.</p>';
    },
    share: function () {
      var robots = "# Allow all crawlers\nUser-agent: *\nAllow: /\n\n# Sitemap location\nSitemap: " + SITE + "/sitemap.xml";
      var routes = ["", "/skills", "/experience", "/career", "/contact", "/resume"];
      var sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        routes.map(function (r) { return "  <url><loc>" + SITE + r + "</loc></url>"; }).join("\n") + "\n</urlset>";
      return '<div class="share-wrap"><div><div class="label">Link preview (WhatsApp, LinkedIn, X)</div>' +
        '<div class="og"><div class="og-img"><img src="' + PUB + '/daffa2.png" alt="M. Daffa Raihan Akbar"></div>' +
        '<div class="og-meta"><div class="d">daffa-akbar.vercel.app</div><div class="h">M. Daffa Raihan Akbar | Developer Portfolio</div><div class="x">M. Daffa Raihan Akbar\'s portfolio.</div></div></div>' +
        '<p class="mock-note">og:image = ' + SITE + "/daffa2.png, og:url and canonical = " + SITE + ". Platforms crop public/daffa2.png to 1.91:1 as shown; no new image is made.</p></div>" +
        '<div><div class="label">' + SITE + "/robots.txt</div><pre class=\"file\">" + esc(robots) + "</pre>" +
        '<div class="label">' + SITE + "/sitemap.xml (no /contributions)</div><pre class=\"file\">" + esc(sitemap) + "</pre></div></div>";
    }
  };

  function detail(e) {
    var desc = e.paragraphs.slice();
    var html = '<article class="article">' +
      "<time>" + e.dates + "</time>" +
      '<h1 class="font-heading"><span>' + esc(e.name) + '</span><span class="links">' +
      (e.gh ? '<a href="' + e.gh + '" target="_blank" rel="noreferrer" aria-label="Source code on GitHub" title="' + e.gh + '">' + svg.github + "</a>" : "") +
      (e.web ? '<a href="' + e.web + '" target="_blank" rel="noreferrer" aria-label="Open live site" title="' + e.web + '">' + svg.external + "</a>" : "") +
      "</span></h1>" + chips(e.cat) +
      '<a class="author" href="#state=home"><img src="' + PUB + '/daffa2.png" alt="daffa"><span><strong style="font-weight:500">M. Daffa Raihan Akbar</strong><small>@daffakbar13</small></span></a>' +
      (e.tile ? '<div style="margin:2rem 0">' + tile(true) + "</div>" : '<img class="cover" src="' + PUB + e.logo + '" alt="' + esc(e.name) + '">') +
      '<div class="block"><h2 class="font-heading">Tech Stack</h2>' + chips(e.stack) + "</div>" +
      '<div class="block desc"><h2 class="font-heading">Description</h2>';
    if (e.projects) {
      html += "<p>" + esc(desc[0]) + "</p><p>" + esc(desc[1]) + "</p><ul>" +
        e.projects.map(function (p) { return "<li><strong>" + esc(p[0]) + "</strong>: " + esc(p[1]) + "</li>"; }).join("") +
        '</ul><p style="margin-top:.75rem">' + e.respTitle + "</p>";
    } else {
      html += desc.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    }
    if (e.bullets.length) html += "<ul>" + e.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>";
    if (e.descMore) html += '<p class="mock-note">' + e.descMore + "</p>";
    html += "</div>";
    if (e.pages.length) {
      html += '<div class="block page-info"><h2 class="font-heading" style="margin-bottom:1.25rem">Page Info</h2>' +
        e.pages.map(function (p) {
          return '<h3 class="font-heading"><span style="width:1.25rem;display:grid">' + svg.star + "</span>" + esc(p[0]) + "</h3>" +
            (p[1] ? "<p>" + esc(p[1]) + "</p>" : "") + '<img src="' + PUB + p[2] + '" alt="' + esc(p[0]) + '">';
        }).join("") + (e.pagesMore ? '<p class="mock-note">' + e.pagesMore + "</p>" : "") + "</div>";
    }
    html += '<hr style="margin-top:3rem"><div class="back"><a class="btn btn-ghost" href="#state=experience">' + svg.chevronLeft + " All Experience</a></div></article>";
    return html;
  }

  var states = document.querySelector('meta[name="office-states"]').content.split(",");
  var navFor = { home: "", experience: "experience", sociolla: "experience", spartan: "experience", office: "experience", portfolio: "experience", skills: "skills", "contributions-404": "", share: "" };

  function current() {
    var m = /state=([\w-]+)/.exec(location.hash);
    return m && states.indexOf(m[1]) > -1 ? m[1] : "home";
  }

  function render() {
    var s = current();
    var main = document.getElementById("screen");
    main.innerHTML = detailIds[s] ? detail(byId[s]) : screens[s]();
    document.title = "PF-4 · " + s;
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === navFor[s]) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.querySelectorAll(".statebar a").forEach(function (a) { a.setAttribute("aria-current", String(a.dataset.state === s)); });
    document.getElementById("mobile-menu").classList.remove("open");
    document.getElementById("menu-btn").setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);
  }

  document.addEventListener("click", function (ev) {
    var tab = ev.target.closest("[data-tab]");
    if (!tab) return;
    var t = tab.dataset.tab;
    document.querySelectorAll("[data-tab]").forEach(function (b) { b.setAttribute("aria-selected", String(b === tab)); });
    var list = exps.filter(function (e) {
      return t === "all" || (t === "personal" ? e.type === "Personal Project" : e.type === "Professional");
    });
    document.getElementById("exp-grid").innerHTML = list.map(card).join("");
  });
  document.getElementById("menu-btn").addEventListener("click", function () {
    var m = document.getElementById("mobile-menu");
    var open = m.classList.toggle("open");
    this.setAttribute("aria-expanded", String(open));
  });
  document.getElementById("mode").addEventListener("click", function () { document.documentElement.classList.toggle("dark"); });

  document.getElementById("statebar").innerHTML = states.map(function (s) {
    return '<a href="#state=' + s + '" data-state="' + s + '">' + s + "</a>";
  }).join("");
  if (/[?&]clean\b/.test(location.search) || navigator.webdriver) document.documentElement.classList.add("clean");
  // review notes stay visible in shots unless ?clean; only the state bar hides for automation
  if (navigator.webdriver && !/[?&]clean\b/.test(location.search)) {
    document.documentElement.classList.remove("clean");
    document.getElementById("statebar").hidden = true;
  }

  window.addEventListener("hashchange", render);
  render();
})();
