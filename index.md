---
title: Home
layout: default
---

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: url('assets/my-background.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    overflow: hidden;
  }

  /* --- Enhanced Animated White Glow Overlay (with dark/light mode support) --- */
  .glow-overlay {
    pointer-events: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 105;
    overflow: hidden;
    /* blend mode will be set by JS */
  }
  .glow-light, .glow-light2 {
    position: absolute;
    width: 180vw;
    height: 120vh;
    left: -100vw;
    top: -10vh;
    filter: blur(40px);
    opacity: 0;
    transition: opacity 0.4s;
    background: linear-gradient(110deg, transparent 10%, #fff 48%, #fff 55%, transparent 90%);
  }
  .glow-light.glow-animate {
    animation: lightflow 2s linear forwards;
    opacity: var(--glow-opacity, 0.85);
  }
  .glow-light2.glow-animate {
    animation: lightflow2 2s linear forwards;
    opacity: var(--glow-opacity2, 0.5);
    background: linear-gradient(70deg, transparent 30%, #fff 54%, #fff 60%, transparent 80%);
  }
  @keyframes lightflow {
    0% { left: -100vw; opacity: var(--glow-opacity, 0.85);}
    90% { opacity: var(--glow-opacity, 0.85);}
    100% { left: 100vw; opacity: 0; }
  }
  @keyframes lightflow2 {
    0% { left: 100vw; opacity: var(--glow-opacity2, 0.5);}
    90% { opacity: var(--glow-opacity2, 0.5);}
    100% { left: -80vw; opacity: 0; }
  }
</style>

<!-- Enhanced Animated Glow Overlay -->
<div class="glow-overlay" id="glow-overlay">
  <div class="glow-light" id="glow1"></div>
  <div class="glow-light2" id="glow2"></div>
</div>

<div class="navbar">
  <a onclick="showSection('home')">Home</a>
  <a onclick="showSection('projects')">Projects</a>
  <a onclick="showSection('cv')">CV</a>
  <a onclick="showSection('publications')">Publications</a>
  <a onclick="showSection('contact')">Contact</a>
  <a onclick="showSection('about-detail')">About in Detail</a>
</div>

<div class="main-container">
  <div class="sidebar">
    <div class="avatar-wrapper">
      <img src="assets/avatar.jpg" alt="Your Profile Picture">
    </div>
    <div class="social-links">
      <a class="social-link" href="https://www.linkedin.com/in/dishanarupani/" target="_blank">
        <img src="assets/linkedin.svg" alt="LinkedIn logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg';">LinkedIn
      </a>
      <a class="social-link" href="https://github.com/meowww11" target="_blank">
        <img src="assets/github.svg" alt="GitHub logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg';">GitHub
      </a>
      <a class="social-link" href="https://x.com/dishanaa11" target="_blank">
        <img src="assets/x-twitter.svg" alt="X logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg';">X (Twitter)
      </a>
      <!-- Email link opens Gmail compose in new tab -->
      <a class="social-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=dishanarupani@gmail.com" target="_blank" rel="noopener">
        <img src="assets/email.svg" alt="Email logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/maildotru.svg';">Email
      </a>
    </div>
  </div>

  <div class="content-box" id="content-area">
    <!-- HOME -->
    <div id="home">
      <div class="home-vertical-stack">
        <div class="intro-text" id="intro-text">
          Hi! My name is Dishana. I recently completed high school and was a fully funded YTS scholar at Plaksha University, where I co-built “Marvin,” an autonomous indoor robot. I’ve published a research paper on Quantum Temporal Lattice theory and worked on applied AI projects, including NLP bots and CLI tools. I’ve also freelanced in AI automation and received a 90% scholarship at FIITJEE for academic excellence.
        </div>
        <h1 class="updates-heading">Updates</h1>
        <div class="updates-scrollbox">
          <p><strong>2025:</strong> Started internship at Lawroom AI as a Junior AI Evangelist — contributed to automation in legal AI pipelines, improved model accuracy, and supported prompt engineering for client-focused systems.</p>
          <p><strong>2025:</strong> Published a research paper on Quantum Temporal Lattice, a theoretical physics concept merging M-theory with time loops.</p>
          <p><strong>2025:</strong> Provided a hands-on demo and guided people on how AI could be efficiently used in real-world scenarios.</p>
          <p><strong>2024:</strong> Conducted a detailed theoretical project on Gauss’s Law — performed calculations, thought experiments, and reached a formal conclusion about electric flux distribution.</p>
          <p><strong>2024:</strong> Joined The Indian Vidyarthi as a summer student, engaging in workshops on sustainability and global development.</p>
          <p><strong>2023:</strong> Participated in a CLI-based hackathon; secured second position and received a ₹7,000 cash prize.</p>
          <p><strong>2023:</strong> Explored machine learning; created bots and AI agents — including a Twitter bot that automates pre-call research and lead qualification.</p>
          <p><strong>2022:</strong> Received a 100% scholarship to attend the YTS program; built an autonomous robot named Marvin equipped with LiDAR and ultrasonic sensors.</p>
          <p><strong>2021:</strong> Received a diploma in software learning.</p>
          <p><strong>2019:</strong> Enrolled in a formal software learning program.</p>
          <p><strong>2018:</strong> Received a silver medal in the BOB Wonderkid IQ-based competition.</p>
          <p><strong>2018:</strong> Built an HTML-based webpage that served as a reference guide for users facing common CMD issues.</p>
          <p><strong>2017:</strong> Started training at Infotech Solutions; later began working there.</p>
          <p><strong>2017:</strong> Participated in a city-wide Go Green campaign and received a prize for the same.</p>
          <p><strong>2016:</strong> Received a token of recognition for raising funds for people with visual and hearing impairments.</p>
        </div>
      </div>
    </div>
    <!-- PROJECTS (INVISIBLE SCROLLBAR) -->
    <div id="projects" style="display: none;">
      <div class="projects-box">
        <div class="projects-header-row">
          <h1>Projects</h1>
        </div>
        <ul class="projects-list">
          <li>
            <strong><a href="https://github.com/dishana11/Marvin" target="_blank" style="color:#00ffc3;text-decoration:underline;">Marvin (Autonomous Indoor Robot)</a></strong><br>
            Designed and built an autonomous robot during YTS at Plaksha University. Marvin uses a LiDAR sensor, ultrasonic sensors, and a Raspberry Pi to map and navigate indoor spaces, detect obstacles and people, and carry items. The project included hardware assembly, Python firmware, and hands-on robotics teamwork.
          </li>
          <li>
            <strong><a href="https://github.com/dishana11/Cmd_Termux-Integration" target="_blank" style="color:#00ffc3;text-decoration:underline;">CMD Error Detector & Fixer</a></strong><br>
            Developed a CLI tool to automatically detect common Windows CMD errors, explain them, and offer one-click fixes. Won 2nd place and a cash prize in a competitive hackathon.
          </li>
          <li>
            <strong><a href="https://github.com/dishana11/PROGRAMMING_LANGUAGES_PREDICTOR" target="_blank" style="color:#00ffc3;text-decoration:underline;">Programming Languages Predictor</a></strong><br>
            Created a Python-based tool that predicts which programming language a code snippet is written in. Utilizes various ML models for accurate language detection.
          </li>
          <li>
            <strong>Twitter AI Lead Qualifier Bot</strong><br>
            Created a Python-based bot for Twitter/X that uses NLP to qualify leads for outreach, automating profile scanning and message sending. Improved outreach efficiency for freelance clients.
          </li>
          <li>
            <strong>ML Bots & Automation Agents</strong><br>
            Built several smart bots, including NLP-powered customer support chatbots and automation pipelines for document management, using Python and cloud APIs for various freelance projects.
          </li>
          <li>
            <strong>Gauss’s Law Simulation</strong><br>
            Conducted a project to simulate and analyze the effects of a hole in a charged spherical shell using Gauss’s Law, blending theoretical physics with computational modeling.
          </li>
        </ul>
      </div>
    </div>
    <!-- CV SECTION -->
    <div id="cv" style="display: none;">
      <div class="cv-header-row">
        <a class="cv-fullscreen-link" href="assets/dishana_cv.pdf" target="_blank" rel="noopener">
          Click to open in fullscreen
        </a>
        <a class="cv-download-link" href="assets/dishana_cv.pdf" download>
          Download
        </a>
      </div>
      <iframe class="cv-iframe-box" src="assets/dishana_cv.pdf"></iframe>
    </div>
    <div id="publications" style="display: none;">
      <h1>Publications</h1>
      <p>
        I have published a research paper on Quantum Temporal Lattice (QTL) in the International Journal for Science, Arts and Technology.<br>
        <a href="https://www.ijsat.org/research-paper.php?id=1707" target="_blank" style="color:#00ffc3;text-decoration:underline;">Read the paper here</a>.<br>
        The paper proposes an innovative approach to traveling in time by manipulating encoded space-time data, suggesting that by altering the mathematical structure of space-time at a quantum level, it may be possible to engineer traversable loops or paths that connect different points in time. This merges concepts from string theory and time-loop physics to open new possibilities in theoretical physics.
      </p>
    </div>
    <div id="contact" style="display: none;">
      <h1>Contact</h1>
      <p>Email me at <a href="mailto:dishanarupani@gmail.com">dishanarupani@gmail.com</a></p>
    </div>
    <!-- ABOUT IN DETAIL: SCROLLABLE BOX -->
    <div id="about-detail" style="display: none;">
      <div class="about-detail-container">
        <div class="about-detail-intro">This section contains life updates in detail:</div>
        <div class="about-detail-scrollbox">
          <strong>2016:</strong> Received a token of recognition for raising funds for visually and hearing-impaired individuals during a city-wide charity campaign.<br><br>
          <strong>2017:</strong> Participated in a city-wide Go Green campaign; awarded for contributions.<br>
          Began training at Infotech Solutions in hardware troubleshooting and system recovery.<br><br>
          <strong>2018:</strong> Built an HTML-based reference webpage to assist users with common CMD errors.<br>
          Won a silver medal in the Brainobrain Wonderkid competition for IQ and logical thinking.<br><br>
          <strong>2019:</strong> Enrolled in software learning to deepen understanding of system and program architecture.<br><br>
          <strong>2021:</strong> Received a diploma in Computer Science Software Learning from Next Generation Technical Institute.<br><br>
          <strong>2022:</strong> Awarded a 100% scholarship to attend the YTS program at Plaksha University.<br>
          Built Marvin, an autonomous robot equipped with LiDAR and ultrasonic sensors for indoor navigation.<br><br>
          <strong>2023:</strong> Set up a fundraiser shop at the school fete, raising the second-highest amount for Ukrainian relief efforts (₹19,500).<br>
          Developed ML-driven bots and AI agents including a Twitter automation tool for lead qualification.<br>
          Secured 2nd position and ₹7,000 in a CLI-based hackathon for developing the CMD Error Detector & Fixer tool.<br><br>
          <strong>2024:</strong> Selected as a Summer Student at The Indian Vidyarthi, focused on urban sustainability and global policy workshops.<br>
          Theoretically conducted and completed a high-level project on Gauss’s Law, involving precise calculations and thought experiments, culminating in insightful conclusions about electric flux through non-uniform shells.<br><br>
          <strong>2025:</strong> Led an AI awareness session with hands-on demos, guiding students and young professionals on how to efficiently leverage AI in their daily workflows.<br>
          Published a research paper on Quantum Temporal Lattice theory in IJSAT, combining string theory and time-loop concepts.<br>
          Began internship as Junior AI Evangelist at Lawroom AI, contributing to the automation of NLP pipelines and improving the quality and performance of legal-tech models.
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  function showSection(section) {
    const sections = ['home', 'projects', 'cv', 'publications', 'contact', 'about-detail'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = id === section ? 'block' : 'none';
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
    showSection('home');
  });

  // --- Glow effect: every 12 seconds, with light/dark mode support ---
  function setGlowBlendModeAndOpacity() {
    const overlay = document.getElementById('glow-overlay');
    let isDark = false;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) isDark = true;
    // Chrome dark flag also triggers prefers-color-scheme: dark
    if (isDark) {
      overlay.style.mixBlendMode = 'lighten';
      document.documentElement.style.setProperty('--glow-opacity', '0.85');
      document.documentElement.style.setProperty('--glow-opacity2', '0.5');
    } else {
      overlay.style.mixBlendMode = 'darken';
      document.documentElement.style.setProperty('--glow-opacity', '0.45');
      document.documentElement.style.setProperty('--glow-opacity2', '0.28');
    }
  }
  setGlowBlendModeAndOpacity();
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setGlowBlendModeAndOpacity);
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', setGlowBlendModeAndOpacity);
  }

  function triggerGlow() {
    var glow1 = document.getElementById('glow1');
    var glow2 = document.getElementById('glow2');
    glow1.classList.remove('glow-animate');
    glow2.classList.remove('glow-animate');
    void glow1.offsetWidth; // force reflow
    void glow2.offsetWidth;
    glow1.classList.add('glow-animate');
    glow2.classList.add('glow-animate');
    setTimeout(function(){
      glow1.classList.remove('glow-animate');
      glow2.classList.remove('glow-animate');
    }, 2100);
  }
  document.addEventListener('DOMContentLoaded', function(){
    triggerGlow();
    setInterval(triggerGlow, 12000); // every 12 seconds
  });
</script>
