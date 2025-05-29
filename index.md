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

  .navbar {
    width: 100%;
    padding: 15px 30px;
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    gap: 40px;
    font-size: 16px;
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .navbar a {
    color: #fff;
    text-decoration: none;
    padding: 7px 22px;
    border-radius: 13px;
    font-size: 1.14em;
    font-weight: 500;
    background: transparent;
    transition: 
      box-shadow 0.22s cubic-bezier(.45,.03,.52,1.06),
      background 0.22s,
      color 0.16s;
    cursor: pointer;
    outline: none;
    border: none;
    position: relative;
    user-select: none;
  }
  .navbar a:hover, .navbar a:focus {
    color: #00ffc3;
    background: rgba(22, 22, 22, 0.16);
    box-shadow: 0 0 0 2.5px #00ffc3, 0 0 14px 3px #00ffc399;
  }
  .navbar a.active {
    color: #222;
    background: #00ffc3;
    box-shadow: 0 0 0 2.5px #00ffc3, 0 0 18px 5px #00ffc36e;
    font-weight: 700;
    cursor: default;
  }

  .main-container {
    display: flex;
    align-items: stretch;
    padding: 0 40px 0 40px;
    gap: 40px;
    box-sizing: border-box;
    height: calc(100vh - 80px);
    margin-top: 80px;
    overflow: hidden;
  }

  .sidebar {
    width: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 80px;
    left: 40px;
    z-index: 20;
    height: calc(100vh - 80px);
    justify-content: flex-start;
    background: transparent;
    pointer-events: auto;
  }
  .main-container {
    margin-left: 290px;
  }

  .avatar-wrapper {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 14px auto;
    border: 3px solid #00ffc3;
    background: #fff;
  }
  .avatar-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .social-links {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    align-items: flex-start;
    width: 100%;
    padding-left: 18px;
  }
  .social-link {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.15s;
  }
  .social-link:hover {
    color: #00ffc3;
    text-decoration: underline;
  }
  .social-link img {
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    filter: drop-shadow(0 0 2px #2229);
    background: white;
    border-radius: 4px;
  }

  .content-box {
    flex: 1;
    background-color: rgba(0, 0, 0, 0.85);
    border-radius: 18px;
    padding: 0 0 25px 0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    height: 100%;
    max-width: 900px;
    max-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    position: relative;
    min-width: 0;
  }

  .home-intro-center {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 42px;
    margin-bottom: 40px;
  }
  .home-intro-center-text {
    max-width: 600px;
    font-size: 1.15em;
    color: #222;
    background: none;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
    margin: 0 auto;
    box-shadow: none;
    padding: 0;
  }
  .home-content-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 36px;
    margin-top: 0;
    height: calc(100% - 0px);
    width: 100%;
  }
  .updates-title {
    color: #2d2d2d;
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: .5px;
    padding-bottom: 0;
    line-height: 1;
    align-self: flex-start;
  }
  .updates-scrollbox {
    font-size: 0.98em;
    color: #e0e0e0;
    background: rgba(40,40,40,0.97);
    border-radius: 9px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    padding: 18px 20px;
    min-height: 120px;
    max-height: 320px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #00ffc3 #232323;
  }
  .updates-scrollbox::-webkit-scrollbar {
    width: 10px;
    background: #232323;
  }
  .updates-scrollbox::-webkit-scrollbar-thumb {
    background: #00ffc3;
    border-radius: 8px;
  }

  .projects-box {
    width: 100%;
    max-width: 900px;
    margin: 40px auto 0 auto;
    background-color: rgba(0, 0, 0, 0.87);
    border-radius: 15px;
    padding: 28px 26px 24px 26px;
    box-shadow: 0 8px 22px rgba(0,0,0,0.40);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 360px;
    max-height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    scrollbar-width: thin;
    scrollbar-color: #00ffc3 #232323;
  }
  .projects-box::-webkit-scrollbar {
    width: 10px;
    background: #232323;
  }
  .projects-box::-webkit-scrollbar-thumb {
    background: #00ffc3;
    border-radius: 8px;
  }
  .projects-header-row {
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 8px;
    position: relative;
    z-index: 2;
  }
  .projects-header-row h1 {
    color: #2d2d2d;
    margin: 0 0 0 0;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: .5px;
    padding-bottom: 0;
    line-height: 1;
    flex: 1 1 auto;
    text-align: left;
  }
  .projects-list {
    margin-top: 0;
    padding-left: 0;
    width: 100%;
    color: #f4f4f4;
    z-index: 2;
    position: relative;
  }
  .projects-list li {
    margin-bottom: 26px;
    font-size: 1.05em;
    line-height: 1.6;
    list-style: disc inside;
  }
  .projects-list strong {
    color: #00ffc3;
    font-weight: 600;
    font-size: 1.07em;
  }

  .cv-box {
    width: 100%;
    max-width: 900px;
    margin: 40px auto 0 auto;
    background-color: rgba(0, 0, 0, 0.87);
    border-radius: 18px;
    padding: 28px 26px 24px 26px;
    box-shadow: 0 8px 22px rgba(0,0,0,0.40);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 70vh;
    min-height: 360px;
    overflow: hidden;
    position: relative;
  }
  .cv-header-row {
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 8px;
    position: relative;
    z-index: 2;
  }
  .cv-header-row h1 {
    color: #2d2d2d;
    margin: 0 0 0 0;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: .5px;
    padding-bottom: 0;
    line-height: 1;
    flex: 1 1 auto;
    text-align: left;
    min-width: 0;
  }
  .cv-fullscreen-link {
    font-size: 16px;
    color: #2d2d2d;
    text-decoration: underline;
    vertical-align: middle;
    cursor: pointer;
    background: none;
    border: none;
    margin-left: auto;
    margin-bottom: 0;
    padding-left: 10px;
    white-space: nowrap;
    align-self: flex-end;
    max-width: 48%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cv-iframe-wrap {
    width: 100%;
    height: 56vh;
    margin-top: 18px;
    border-radius: 8px;
    background: #181818;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    flex: 1 1 auto;
    min-height: 180px;
    overflow: auto;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }
  .cv-iframe-box {
    width: 100%;
    height: 100%;
    min-height: 180px;
    border: none;
    display: block;
  }
  .cv-iframe-wrap::-webkit-scrollbar {
    width: 10px;
    background: #232323;
  }
  .cv-iframe-wrap::-webkit-scrollbar-thumb {
    background: #00ffc3;
    border-radius: 8px;
  }
  .cv-iframe-wrap {
    scrollbar-width: thin;
    scrollbar-color: #00ffc3 #232323;
  }

  .content-section {
    padding-top: 64px;
    padding-left: 50px;
  }
  .content-section h1 {
    margin-top: 0;
  }

  .about-detail-container {
    margin: 38px auto 0 auto;
    background: rgba(255,255,255,0.62);
    border-radius: 14px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.10);
    max-width: 760px;
    padding: 25px 24px 20px 24px;
    text-align: center;
  }
  .about-detail-intro-outer {
    width: 100vw;
    text-align: center;
    margin-top: 60px;
    font-size: 1.13em;
    color: #232323;
    font-weight: 500;
    letter-spacing: 0.01em;
    margin-bottom: 6px;
  }
  .about-detail-scrollbox {
    background: #fff;
    color: #232323;
    font-size: 0.99em;
    border-radius: 10px;
    max-height: 340px;
    overflow-y: scroll !important;
    overflow-x: hidden !important;
    text-align: left;
    padding: 19px 20px 14px 20px;
    box-shadow: 0 2px 9px rgba(0,0,0,0.06);
    border: 1px solid #e2e2e2;
    line-height: 1.7;
    scrollbar-width: thin;
    scrollbar-color: #00ffc3 #232323;
  }
  .about-detail-scrollbox::-webkit-scrollbar {
    width: 10px;
    background: #232323;
  }
  .about-detail-scrollbox::-webkit-scrollbar-thumb {
    background: #00ffc3;
    border-radius: 8px;
  }

  @media (max-width: 900px) {
    .main-container {
      flex-direction: column;
      padding: 0 10px 30px 10px;
      align-items: center;
      margin-left: 0;
      height: auto;
    }
    .sidebar {
      width: 100%;
      margin-top: 10px;
      align-items: center;
      position: static;
      top: unset;
      left: unset;
      height: auto;
    }
    .avatar-wrapper {
      width: 130px;
      height: 130px;
    }
    .social-links {
      padding-left: 0;
      align-items: center;
    }
    .about-detail-container {
      max-width: 98vw;
      padding: 14px 4vw 12px 4vw;
    }
    .about-detail-intro-outer {
      margin-top: 30px;
    }
    .about-detail-scrollbox {
      max-height: 240px;
      padding: 12px 5vw 8px 5vw;
    }
    .content-box {
      padding: 0;
    }
    .projects-box {
      width: 99vw;
      min-width: 0;
      margin: 14px 0 0 0;
      padding: 12px 2vw 10px 2vw;
      max-height: 48vh;
    }
    .cv-box {
      width: 99vw;
      min-width: 0;
      margin: 14px 0 0 0;
      padding: 12px 2vw 10px 2vw;
      height: 48vh;
      min-height: 220px;
    }
    .cv-header-row, .projects-header-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
    .cv-fullscreen-link {
      margin-left: 0;
      align-self: flex-start;
      margin-top: 5px;
      max-width: 100%;
    }
    .content-section {
      padding-top: 30px;
      padding-left: 0;
    }
  }
</style>

<!-- NAVBAR -->
<div class="navbar">
  <a id="nav-home" onclick="showSection('home')">Home</a>
  <a id="nav-cv" onclick="showSection('cv')">CV</a>
  <a id="nav-projects" onclick="showSection('projects')">Projects</a>
  <a id="nav-publications" onclick="showSection('publications')">Publications</a>
  <a id="nav-contact" onclick="showSection('contact')">Contact</a>
  <a id="nav-about-detail" onclick="showSection('about-detail')">About in Detail</a>
</div>

<!-- Home intro, centered, not a box -->
<div id="home-intro-box" class="home-intro-center">
  <div class="home-intro-center-text">
    Hi! My name is Dishana. I recently completed high school and was a fully funded YTS scholar at Plaksha University, where I co-built “Marvin,” an autonomous indoor robot. I’ve published a research paper on Quantum Temporal Lattice theory and worked on applied AI projects, including NLP bots and CLI tools. I’ve also freelanced in AI automation and received a 90% scholarship at FIITJEE for academic excellence.
  </div>
</div>

<div id="about-detail-intro-outer" class="about-detail-intro-outer" style="display:none;">
  This section contains life updates in detail:
</div>
<div class="about-detail-container" id="about-detail-container" style="display:none;">
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
      <a class="social-link" href="mailto:dishanarupani@gmail.com">
        <img src="assets/email.svg" alt="Email logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/maildotru.svg';">Email
      </a>
    </div>
  </div>

  <div class="content-box" id="content-area">
    <div id="home">
      <div class="home-content-col">
        <div class="updates-title">Updates</div>
        <div class="updates-scrollbox">
          <p><strong>May 2025:</strong> Preparing my application to MBZUAI with a focus on AI, AGI, and robotics, sharing my journey through personal stories and hackathons.</p>
          <p><strong>April 2025:</strong> Actively building my personal brand on LinkedIn by posting engaging science-themed content mixing humor and deep insights to grow my audience.</p>
          <p><strong>March 2025:</strong> Developed Marvin, an autonomous robot equipped with LiDAR capable of detecting people and carrying items; built over 12 days during a youth technology program.</p>
          <p><strong>January 2025:</strong> Deep dive into brain research and neurological health motivated by my brother’s serious health condition, balancing academics and personal challenges.</p>
          <p><strong>December 2024:</strong> Writing a research paper on M-Theory, exploring advanced physics concepts beyond standard curriculum.</p>
          <p><strong>November 2024:</strong> Conducting a detailed project on Gauss’s Law investigating the effect of a hole on a charged spherical shell, combining theory with practical experimentation.</p>
          <p><strong>September 2024:</strong> Scored 90% scholarship at FITJEE, focusing on Physics preparation for upcoming competitive exams.</p>
          <p><strong>September 2024:</strong> Developed Quantum Temporal Lattice theory as part of my exploration into theoretical physics.</p>
          <p><strong>October 2023:</strong> Internship project on continual training of vision-language models (TiC-CLIP) accepted as Oral at NeurIPS Distribution Shift Workshop 2023.</p>
          <p><strong>September 2023:</strong> Collaborated with Dishana Rupani on project ‘Time Trace: Fact or Fiction,’ merging physics and philosophy in innovative research.</p>
          <p><strong>Mid-2019:</strong> Started competitive PC gaming and battle royale tournaments, overcoming gender biases and team challenges while learning valuable lessons on trust and resilience.</p>
          <p><strong>2014:</strong> Volunteered for hearing-impaired and visually-impaired children fundraising campaign, awarded a medal for community service.</p>
          <p><strong>2014 onwards:</strong> Consistently involved in STEM projects, academic competitions, and community volunteering, shaping my passion for science and service.</p>
        </div>
      </div>
    </div>

    <div id="cv" style="display: none;">
      <div class="cv-box">
        <div class="cv-header-row">
          <h1>My CV</h1>
          <a class="cv-fullscreen-link" href="assets/Dishana cv (3).pdf" target="_blank" rel="noopener">
            Click to open in fullscreen
          </a>
        </div>
        <div class="cv-iframe-wrap">
          <iframe class="cv-iframe-box" src="assets/Dishana cv (3).pdf"></iframe>
        </div>
      </div>
    </div>

    <div id="projects" style="display: none;">
      <div class="projects-box">
        <div class="projects-header-row">
          <h1>Projects</h1>
        </div>
        <ul class="projects-list">
          <li>
            <strong>Marvin (Autonomous Indoor Robot)</strong><br>
            Designed and built an autonomous robot during YTS at Plaksha University. Marvin uses a LiDAR sensor, ultrasonic sensors, and a Raspberry Pi to map and navigate indoor spaces, detect obstacles and people, and carry items. The project included hardware assembly, Python firmware, and hands-on robotics teamwork.
          </li>
          <li>
            <strong>Quantum Temporal Lattice Theory</strong><br>
            Published a research paper introducing a new theoretical framework to combine aspects of string theory and time loops. This project involved deep theoretical physics research, mathematical modeling, and scientific writing.
          </li>
          <li>
            <strong>CMD Error Detector & Fixer</strong><br>
            Developed a CLI tool to automatically detect common Windows CMD errors, explain them, and offer one-click fixes. Won 2nd place and a cash prize in a competitive hackathon.
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
          <li>
            <strong>Fundraiser Shop Platform</strong><br>
            Organized and built the technical backbone for a school fundraiser, raising over ₹19,500 for Ukrainian relief by setting up a digital inventory and payment system.
          </li>
        </ul>
      </div>
    </div>

    <div id="publications" style="display: none;">
      <div class="content-section">
        <h1>Publications</h1>
        <p>I have published a research paper on Quantum Temporal Lattice (QTL).</p>
      </div>
    </div>

    <div id="contact" style="display: none;">
      <div class="content-section">
        <h1>Contact</h1>
        <p>
          Email me at
          <a href="mailto:dishanarupani@gmail.com" target="_blank">
            dishanarupani@gmail.com
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

<script>
  function showSection(section) {
    const sections = ['home', 'cv', 'projects', 'publications', 'contact', 'about-detail'];
    sections.forEach(id => {
      document.getElementById(id)?.style && (document.getElementById(id).style.display = id === section ? 'block' : 'none');
      document.getElementById("nav-" + id)?.classList.remove('active');
    });
    // Set active nav
    document.getElementById("nav-" + section)?.classList.add('active');
    // Home intro
    document.getElementById('home-intro-box').style.display = (section === 'home') ? 'flex' : 'none';
    // About in detail intro
    document.getElementById('about-detail-intro-outer').style.display = (section === 'about-detail') ? 'block' : 'none';
    document.getElementById('about-detail-container').style.display = (section === 'about-detail') ? 'block' : 'none';
  }
  document.addEventListener('DOMContentLoaded', function(){
    showSection('home');
  });
</script>
