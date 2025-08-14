---
title: About in Detail
layout: default
---

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: url('./assets/my-background.jpg') no-repeat center center fixed;
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
    color: #2d2d2d;
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
    color: #2d2d2d;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.22), 0 1.5px 4px 0 rgba(0,255,195, 0.25);
    background: none;
    outline: none;
  }

  .content-box {
    position: relative;
    z-index: 2;
    margin: 80px auto 0 auto;
    max-width: 900px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    padding: 28px 26px 24px 26px;
    box-shadow: 0 8px 22px rgba(0,0,0,0.40);
    min-height: 360px;
    max-height: 80vh;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .content-box::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  .about-detail-intro {
    color: #2d2d2d;
    font-size: 1.12em;
    margin-bottom: 18px;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-align: center;
  }
  .about-detail-scrollbox {
    background: #fff;
    color: #232323;
    font-size: 1.02em;
    border-radius: 10px;
    max-height: 320px;
    min-height: 210px;
    overflow-y: auto;
    text-align: left;
    padding: 19px 26px 14px 26px;
    box-shadow: 0 2px 9px rgba(0,0,0,0.06);
    border: 1px solid #e2e2e2;
    line-height: 1.7;
    width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .about-detail-scrollbox::-webkit-scrollbar {
    width: 0px;
    background: transparent;
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

{% include mobile-responsive-fixes.html %}

<div class="navbar">
  <a href="index.html">Home</a>
  <a href="projects.html">Projects</a>
  <a href="cv.html">CV</a>
  <a href="publications.html">Publications</a>
  <a href="contact.html">Contact</a>
  <a href="about-detail.html">About in Detail</a>
</div>

<div class="content-box">
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

{% raw %}
<div class="view-counter">
  <img src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Fdishana11.github.io%2Fabout-detail&label=&icon=github&color=%23198754&message=&style=flat&tz=UTC" alt="Page Views" id="viewCounter">
</div>
{% endraw %}
