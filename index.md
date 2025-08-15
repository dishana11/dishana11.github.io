---
title: Home
layout: default
---

{% include mobile-responsive-fixes.html %}
{% include navbar.html %}

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: url('/assets/my-background.jpg') no-repeat center center fixed;
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
    z-index: 101;
  }
  .navbar a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    padding: 8px 20px;
    border-radius: 7px;
    transition: box-shadow 0.2s;
    box-shadow: none;
    font-weight: 500;
    background: none;
  }
  .navbar a:hover,
  .navbar a:focus {
    color: #fff;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.22), 0 1.5px 4px 0 rgba(0,255,195, 0.25);
    background: none;
    outline: none;
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
    margin-left: 290px;
  }

  .sidebar {
    width: 250px;
    min-width: 250px;
    max-width: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 80px;
    left: 40px;
    z-index: 20;
    height: calc(100vh - 80px);
    background: transparent;
    pointer-events: auto;
    padding: 0;
    gap: 0;
  }
  .avatar-wrapper {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    margin: 40px auto 14px auto;
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
    background-color: rgba(0, 0, 0, 0.3);
    background-clip: content-box;
    border-radius: 15px;
    padding: 0 0 25px 0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    position: relative;
    z-index: 2;
  }

  .home-vertical-stack {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    padding: 40px 0 0 0;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto 15px auto;
  }
  .intro-text {
    font-size: 1.2em;
    color: #ffffff;
    text-align: left;
    font-weight: 500;
    background: rgba(255,255,255,0.2);
    border-radius: 10px;
    width: 100%;
    max-width: 1000px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.11);
    padding: 15px 20px 13px 20px;
    line-height: 1.45;
    margin: 0;
  }
  .updates-heading {
    color: #ffffff;
    margin: 0 0 9px 0;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 1;
    display: block;
    padding-bottom: 0;
  }
  .updates-scrollbox {
    font-size: 0.98em;
    color: #ffffff;
    background: rgba(40,40,40,0.3);
    border-radius: 9px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    padding: 18px 20px;
    width: 100%;
    max-width: 1000px;
    min-width: 310px;
    max-height: 340px;
    overflow-y: auto;
    scrollbar-width: auto;
  }
  .updates-scrollbox::-webkit-scrollbar {
    width: 8px;
  }
  .updates-scrollbox::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 4px;
  }
  .updates-scrollbox::-webkit-scrollbar-track {
    background: #000;
  }

  .projects-box, .publications-box, .cv-box, .contact-box, .about-detail-container {
    width: 100%;
    max-width: 900px;
    margin: 20px auto 20px auto;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    padding: 0 0 25px 0;
    box-shadow: 0 8px 22px rgba(0,0,0,0.40);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 360px;
    max-height: 450px;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;
  }
  .projects-box, .publications-box {
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .projects-box::-webkit-scrollbar, .publications-box::-webkit-scrollbar {
    display: none;
  }
  .projects-header-row, .publications-box h1, .cv-box h1, .contact-box h1, .about-detail-container h1 {
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 8px;
    position: relative;
    z-index: 2;
  }
  .projects-header-row h1, .publications-box h1, .cv-box h1, .contact-box h1, .about-detail-container h1 {
    color: #ffffff;
    margin: 0 0 20px 0;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: .5px;
    padding-bottom: 0;
    line-height: 1;
    flex: 1 1 auto;
    text-align: left;
  }
  .projects-list, .publications-box p, .cv-box p, .contact-box p, .about-detail-scrollbox {
    margin-top: 0;
    padding-left: 0;
    width: 100%;
    color: #ffffff;
    z-index: 2;
    position: relative;
  }
  .projects-list li {
    margin-bottom: 26px;
    font-size: 1.05em;
    line-height: 1.6;
    list-style: disc inside;
  }
  .projects-list strong, .projects-list a {
    color: #00ffc3;
    font-weight: 600;
    font-size: 1.07em;
    text-decoration: underline;
  }
  .publications-box a, .cv-box a, .contact-box a, .about-detail-scrollbox a {
    color: #00ffc3;
    font-weight: 600;
    font-size: 1.07em;
    text-decoration: underline;
  }
  .publications-box p, .cv-box p, .contact-box p, .about-detail-scrollbox {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  .publications-box a:hover, .cv-box a:hover, .contact-box a:hover, .about-detail-scrollbox a:hover {
    color: #00e0a3;
  }

  .cv-header-row {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 32px;
    margin-left: 36px;
    margin-bottom: 10px;
  }
  .cv-fullscreen-link, .cv-download-link {
    display: inline-block;
    font-size: 16px;
    color: #2d2d2d;
    text-decoration: underline;
    vertical-align: middle;
    cursor: pointer;
    background: none;
    border: none;
    margin-left: 0px;
    margin-right: 20px;
    margin-bottom: 0;
    white-space: nowrap;
  }
  .cv-fullscreen-link:hover, .cv-download-link:hover {
    color: #00ffc3;
  }
  .cv-iframe-box {
    width: 96%;
    height: 90vh;
    border: none;
    margin: 18px 2% 20px 2%;
    border-radius: 8px;
    background: #181818;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    flex: 1 1 auto;
  }

  .about-detail-container {
    max-width: 1000px;
    background: rgba(0, 0, 0, 0.3);
  }
  .about-detail-intro {
    color: #ffffff;
    font-size: 1.12em;
    margin-bottom: 18px;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
  .about-detail-scrollbox {
    background: rgba(40,40,40,0.3);
    color: #ffffff;
    font-size: 1.02em;
    border-radius: 10px;
    max-height: 320px;
    min-height: 210px;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: left;
    padding: 19px 26px 14px 26px;
    box-shadow: 0 2px 9px rgba(0,0,0,0.06);
    border: 1px solid #e2e2e2;
    line-height: 1.7;
    width: 100%;
    word-wrap: break-word;
    scrollbar-width: auto;
  }
  .about-detail-scrollbox::-webkit-scrollbar {
    width: 8px;
  }
  .about-detail-scrollbox::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 4px;
  }
  .about-detail-scrollbox::-webkit-scrollbar-track {
    background: #000;
  }

  .video-container {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  .video-container video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
    display: none;
  }
  .video-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
    display: none;
  }
  .video-container.visible {
    opacity: 1;
  }

  .view-counter {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
    visibility: visible;
    opacity: 1;
    pointer-events: none;
    border: 1px solid #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  }
  .view-counter img {
    vertical-align: middle;
    width: 100px;
    height: auto;
    visibility: visible;
    opacity: 1;
    display: block;
  }
  .view-counter span {
    color: #fff;
    font-size: 18px;
    display: none;
  }
</style>

<div class="video-container" id="videoContainer">
  <video id="backgroundVideo" autoplay loop muted playsinline>
    <source id="videoSource" src="/assets/intro.mp4" type="video/mp4">
  </video>
  <img id="gifEvy" src="/assets/evy.gif" alt="Projects GIF" style="display: none;">
  <img id="gifIntro" src="/assets/intro.gif" alt="About GIF" style="display: none;">
</div>

<div class="main-container">
  <div class="sidebar" id="sidebar">
    <div class="avatar-wrapper">
      <img src="/assets/avatar.jpg" alt="Your Profile Picture">
    </div>
    <div class="social-links">
      <a class="social-link" href="https://www.linkedin.com/in/dishanarupani/" target="_blank">
        <img src="/assets/linkedin.svg" alt="LinkedIn logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg';">LinkedIn
      </a>
      <a class="social-link" href="https://github.com/dishana11" target="_blank">
        <img src="/assets/github.svg" alt="GitHub logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg';">GitHub
      </a>
      <a class="social-link" href="https://x.com/dishanaa11" target="_blank">
        <img src="/assets/x-twitter.svg" alt="X logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg';">X (Twitter)
      </a>
      <a class="social-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=dishanarupani@gmail.com" target="_blank" rel="noopener">
        <img src="/assets/email.svg" alt="Email logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/maildotru.svg';">Email
      </a>
    </div>
  </div>

  <div class="content-box" id="content-area">
    <div id="home">
      <div class="home-vertical-stack">
        <div class="intro-text">
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
    <div id="projects" style="display: none;">
      <div class="projects-box">
        <div class="projects-header-row">
          <h1>Projects</h1>
        </div>
        <ul class="projects-list">
          <li>
            <strong><a href="https://github.com/dishana11/Marvin" target="_blank">Marvin (Autonomous Indoor Robot)</a></strong><br>
            Designed and built an autonomous robot during YTS at Plaksha University. Marvin uses a LiDAR sensor, ultrasonic sensors, and a Raspberry Pi to map and navigate indoor spaces, detect obstacles and people, and carry items. The project included hardware assembly, Python firmware, and hands-on robotics teamwork.
          </li>
          <li>
            <strong><a href="https://github.com/dishana11/Cmd_Termux-Integration" target="_blank">CMD Error Detector & Fixer</a></strong><br>
            Developed a CLI tool to automatically detect common Windows CMD errors, explain them, and offer one-click fixes. Won 2nd place and a cash prize in a competitive hackathon.
          </li>
          <li>
            <strong><a href="https://github.com/dishana11/PROGRAMMING_LANGUAGES_PREDICTOR" target="_blank">Programming Languages Predictor</a></strong><br>
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
    <div id="publications" style="display: none;">
      <div class="publications-box">
        <h1>Publications</h1>
        <p>
          I have published a research paper on Quantum Temporal Lattice (QTL) in the International Journal for Science, Arts and Technology.<br>
          <a href="https://www.ijsat.org/research-paper.php?id=1707" target="_blank">Read the paper here</a>.<br>
          The paper proposes an innovative approach to traveling in time by manipulating encoded space-time data, suggesting that by altering the mathematical structure of space-time at a quantum level, it may be possible to engineer traversable loops or paths that connect different points in time. This merges concepts from string theory and time-loop physics to open new possibilities in theoretical physics.
        </p>
        <p>
          The research builds on foundational work in string theory, particularly M-theory, and explores how quantum entanglement can be leveraged to encode temporal information. By modeling space-time as a lattice structure, the paper introduces a framework for creating stable temporal loops, potentially enabling controlled time travel within the constraints of quantum mechanics.
        </p>
        <p>
          This work has implications for both theoretical physics and practical applications, such as quantum computing and information processing. Ongoing research aims to refine the mathematical models and explore experimental validations using quantum simulation platforms.
        </p>
      </div>
    </div>
    <div id="cv" style="display: none;">
      <div class="cv-box">
        <div class="cv-header-row">
          <a class="cv-fullscreen-link" href="/assets/dishana_cv.pdf" target="_blank" rel="noopener">Click to open in fullscreen</a>
          <a class="cv-download-link" href="/assets/dishana_cv.pdf" download>Download</a>
        </div>
        <iframe class="cv-iframe-box" src="/assets/dishana_cv.pdf"></iframe>
      </div>
    </div>
    <div id="contact" style="display: none;">
      <div class="contact-box">
        <h1>Contact</h1>
        <p>Email: <a href="mailto:dishanarupani@gmail.com">dishanarupani@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/dishanarupani/" target="_blank">linkedin.com/in/dishanarupani</a></p>
        <p>GitHub: <a href="https://github.com/dishana11" target="_blank">github.com/dishana11</a></p>
        <p>X: <a href="https://x.com/dishanaa11" target="_blank">x.com/dishanaa11</a></p>
      </div>
    </div>
    <div id="about-detail" style="display: none;">
      <div class="about-detail-container">
        <h1>About in Detail</h1>
        <div class="about-detail-intro">This section contains life updates in detail:</div>
        <div class="about-detail-scrollbox">
          <p><strong>2016:</strong> Received a token of recognition for raising funds for visually and hearing-impaired individuals during a city-wide charity campaign.</p>
          <p><strong>2017:</strong> Participated in a city-wide Go Green campaign; awarded for contributions.<br>
          Began training at Infotech Solutions in hardware troubleshooting and system recovery.</p>
          <p><strong>2018:</strong> Built an HTML-based reference webpage to assist users with common CMD errors.<br>
          Won a silver medal in the Brainobrain Wonderkid competition for IQ and logical thinking.</p>
          <p><strong>2019:</strong> Enrolled in software learning to deepen understanding of system and program architecture.</p>
          <p><strong>2021:</strong> Received a diploma in Computer Science Software Learning from Next Generation Technical Institute.</p>
          <p><strong>2022:</strong> Awarded a 100% scholarship to attend the YTS program at Plaksha University.<br>
          Built Marvin, an autonomous robot equipped with LiDAR and ultrasonic sensors for indoor navigation.</p>
          <p><strong>2023:</strong> Set up a fundraiser shop at the school fete, raising the second-highest amount for Ukrainian relief efforts (₹19,500).<br>
          Developed ML-driven bots and AI agents including a Twitter automation tool for lead qualification.<br>
          Secured 2nd position and ₹7,000 in a CLI-based hackathon for developing the CMD Error Detector & Fixer tool.</p>
          <p><strong>2024:</strong> Selected as a Summer Student at The Indian Vidyarthi, focused on urban sustainability and global policy workshops.<br>
          Theoretically conducted and completed a high-level project on Gauss’s Law, involving precise calculations and thought experiments, culminating in insightful conclusions about electric flux through non-uniform shells.</p>
          <p><strong>2025:</strong> Led an AI awareness session with hands-on demos, guiding students and young professionals on how to efficiently leverage AI in their daily workflows.<br>
          Published a research paper on Quantum Temporal Lattice theory in IJSAT, combining string theory and time-loop concepts.<br>
          Began internship as Junior AI Evangelist at Lawroom AI, contributing to the automation of NLP pipelines and improving the quality and performance of legal-tech models.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="view-counter">
  <img src="https://hitscounter.dev/api/count/incr/badge.svg?url=https%3A%2F%2Fdishana11.github.io%2F&label=&icon=github&color=%23198754&style=flat" alt="Page Views" id="viewCounter" onerror="this.style.display='none';this.nextElementSibling.style.display='inline';setTimeout(() => {this.src=this.src;}, 5000);">
  <span>Page Views: Loading...</span>
</div>

<script>
  function showSection(section) {
    const sections = ['home', 'projects', 'publications', 'cv', 'contact', 'about-detail'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = id === section ? 'block' : 'none';
    });
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('backgroundVideo');
    const videoSource = document.getElementById('videoSource');
    const gifEvy = document.getElementById('gifEvy');
    const gifIntro = document.getElementById('gifIntro');
    const sidebar = document.getElementById('sidebar');

    // Reset visibility
    video.style.display = 'none';
    gifEvy.style.display = 'none';
    gifIntro.style.display = 'none';
    videoContainer.classList.add('visible');

    // Handle sidebar visibility on mobile
    if (window.innerWidth <= 900) {
      sidebar.classList.remove('contact-visible');
      if (section === 'contact') {
        sidebar.classList.add('contact-visible');
      }
    } else {
      sidebar.classList.add('contact-visible');
    }

    // Set media based on section
    if (section === 'home') {
      video.style.display = 'block';
      videoSource.src = '/assets/intro.mp4';
      videoSource.type = 'video/mp4';
      video.load();
      video.play();
    } else if (section === 'projects') {
      gifEvy.style.display = 'block';
    } else if (section === 'publications') {
      video.style.display = 'block';
      videoSource.src = '/assets/publications.mp4';
      videoSource.type = 'video/mp4';
      video.load();
      video.play();
    } else if (section === 'cv') {
      video.style.display = 'block';
      videoSource.src = '/assets/CyberPunkCity2077.webm';
      videoSource.type = 'video/webm';
      video.load();
      video.play();
    } else if (section === 'contact') {
      video.style.display = 'block';
      videoSource.src = '/assets/contact_bg.mp4';
      videoSource.type = 'video/mp4';
      video.load();
      video.play();
    } else if (section === 'about-detail') {
      gifIntro.style.display = 'block';
    }

    window.history.pushState(null, '', '/');
  }

  document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    const videoContainer = document.getElementById('videoContainer');
    function toggleVideo() {
      videoContainer.classList.toggle('visible');
    }
    setInterval(toggleVideo, 5000);
    toggleVideo();
    const video = document.getElementById('backgroundVideo');
    video.addEventListener('error', function() {
      const gifIntro = document.getElementById('gifIntro');
      gifIntro.style.display = 'block';
      video.style.display = 'none';
    });
    window.addEventListener('resize', function() {
      showSection(document.querySelector('#content-area > div:not([style*="display: none"])').id || 'home');
    });
  });
</script>
