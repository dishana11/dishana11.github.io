---
title: CV
layout: default
---

{% include mobile-responsive-fixes.html %}

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
    background-color: rgba(0, 0, 0, 0.8);
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
  }

  .cv-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    padding: 40px 0 0 0;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
  .cv-heading {
    color: #fff;
    margin: 0 0 9px 0;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 1;
    display: block;
    padding-bottom: 0;
  }
  .cv-scrollbox {
    font-size: 0.98em;
    color: #e0e0e0;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 9px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    padding: 18px 20px;
    width: 100%;
    max-width: 1000px;
    min-width: 310px;
    max-height: 340px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .cv-scrollbox::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  .cv-scrollbox a {
    color: #00ffc3;
    text-decoration: underline;
  }
  .cv-scrollbox a:hover {
    color: #00e0a3;
  }

  .gif-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  .gif-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }
  .gif-container.visible {
    opacity: 1;
  }

  .view-counter {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 4;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
  }
  .view-counter img {
    vertical-align: middle;
    width: 100px;
    height: auto;
  }
</style>

<div class="navbar">
  <a href="/">Home</a>
  <a href="javascript:void(0)" onclick="window.location.href='/index.html#projects'">Projects</a>
  <a href="javascript:void(0)" onclick="window.location.href='/index.html#publications'">Publications</a>
  <a href="cv.html">CV</a>
  <a href="contact.html">Contact</a>
  <a href="about-detail.html">About in Detail</a>
</div>

<div class="gif-container" id="gifContainer">
  <img id="backgroundGif" src="assets/cv.gif" alt="Background GIF">
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
      <a class="social-link" href="https://github.com/dishana11" target="_blank">
        <img src="assets/github.svg" alt="GitHub logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg';">GitHub
      </a>
      <a class="social-link" href="https://x.com/dishanaa11" target="_blank">
        <img src="assets/x-twitter.svg" alt="X logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg';">X (Twitter)
      </a>
      <a class="social-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=dishanarupani@gmail.com" target="_blank" rel="noopener">
        <img src="assets/email.svg" alt="Email logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/maildotru.svg';">Email
      </a>
    </div>
  </div>

  <div class="content-box">
    <div class="cv-container">
      <h1 class="cv-heading">Curriculum Vitae</h1>
      <div class="cv-scrollbox">
        <p>
          Download my full CV here: <a href="assets/dishana_cv.pdf" target="_blank">Dishana_Rupani_CV.pdf</a>
        </p>
        <p>
          <strong>Education</strong><br>
          - High School (2024), 90% Scholarship at FIITJEE for Academic Excellence<br>
          - YTS Scholar, Plaksha University (2022), Fully Funded
        </p>
        <p>
          <strong>Experience</strong><br>
          - Junior AI Evangelist, Lawroom AI (2025–Present): Contributed to automation in legal AI pipelines, improved model accuracy, and supported prompt engineering.<br>
          - Freelance AI Developer (2023–Present): Built NLP bots and CLI tools for clients.<br>
          - Summer Student, The Indian Vidyarthi (2024): Engaged in sustainability workshops.<br>
          - Trainee, Infotech Solutions (2017): Software development training.
        </p>
        <p>
          <strong>Projects</strong><br>
          - <a href="https://github.com/dishana11/Marvin" target="_blank">Marvin (Autonomous Indoor Robot)</a>: Built at Plaksha University with LiDAR and Raspberry Pi.<br>
          - <a href="https://github.com/dishana11/Cmd_Termux-Integration" target="_blank">CMD Error Detector</a>: CLI tool, 2nd place in hackathon.<br>
          - <a href="https://github.com/dishana11/PROGRAMMING_LANGUAGES_PREDICTOR" target="_blank">Programming Languages Predictor</a>: ML-based code language detection.
        </p>
        <p>
          <strong>Publications</strong><br>
          - Quantum Temporal Lattice, International Journal for Science, Arts and Technology (2025): <a href="https://www.ijsat.org/research-paper.php?id=1707" target="_blank">Read here</a>.
        </p>
        <p>
          <strong>Awards</strong><br>
          - 100% YTS Scholarship (2022)<br>
          - 2nd Place, CLI Hackathon (2023), ₹7,000 Prize<br>
          - Silver Medal, BOB Wonderkid IQ Competition (2018)<br>
          - Go Green Campaign Prize (2017)<br>
          - Fundraising Recognition (2016)
        </p>
      </div>
    </div>
  </div>
</div>

<div class="view-counter">
  <img src="https://hitscounter.dev/api/count/incr/badge.svg?url=https%3A%2F%2Fdishana11.github.io%2Fcv.html&label=&icon=github&color=%23198754&style=flat" alt="Page Views" id="viewCounter">
</div>

<script>
  const gifContainer = document.getElementById('gifContainer');
  function toggleGif() {
    gifContainer.classList.toggle('visible');
  }
  setInterval(toggleGif, 5000);
  toggleGif();
</script>
