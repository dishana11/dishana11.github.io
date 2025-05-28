---
title: Dishana | Portfolio
layout: default
---

<style>
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: url('/assets/my-background.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 30px;
    z-index: 100;
  }

  .navbar a {
    color: #ccc;
    text-decoration: none;
    margin-left: 30px;
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.3s;
    cursor: pointer;
  }

  .navbar a:hover {
    color: #00ffc3;
  }

  .main {
    padding-top: 80px;
    max-width: 1100px;
    margin: auto;
    display: flex;
    gap: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .left-side {
    flex: 0 0 250px;
    text-align: center;
  }

  .left-side img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 3px solid #00ffc3;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .left-side a {
    display: block;
    color: #aaa;
    margin: 10px 0;
    text-decoration: none;
    transition: color 0.3s;
  }

  .left-side a:hover {
    color: #00ffc3;
  }

  .content-box {
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    padding: 30px;
    max-height: 75vh;
    overflow-y: auto;
    color: #eee;
  }

  .content-box h1 {
    color: #00ffc3;
    margin-top: 0;
  }

  .content-box p {
    line-height: 1.6;
  }

  iframe {
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 12px;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    .main {
      flex-direction: column;
    }
  }
</style>

<!-- Navigation -->
<div class="navbar">
  <a onclick="showSection('about')">About</a>
  <a onclick="showSection('cv')">CV</a>
  <a onclick="showSection('publications')">Publications</a>
  <a onclick="showSection('contact')">Contact</a>
</div>

<!-- Main Layout -->
<div class="main">
  <div class="left-side">
    <img src="/assets/images/avatar.jpg" alt="Dishana's Image" />
    <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank">LinkedIn</a>
    <a href="https://twitter.com/yourtwitter" target="_blank">Twitter</a>
  </div>

  <div class="content-box" id="content-box">
    <!-- Default content (About) loads here -->
    <h1>About Me</h1>
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
    <p><strong>September 2023:</strong> Participated in history exhibitions and organized charitable fundraising events for orphans and Ukraine war relief.</p>
    <p><strong>Mid-2019:</strong> Started competitive PC gaming and battle royale tournaments, overcoming gender biases and team challenges while learning valuable lessons on trust and resilience.</p>
    <p><strong>2014:</strong> Volunteered for hearing-impaired and visually-impaired children fundraising campaign, awarded a medal for community service.</p>
    <p><strong>2014 onwards:</strong> Consistently involved in STEM projects, academic competitions, and community volunteering, shaping my passion for science and service.</p>
  </div>
</div>

<!-- JavaScript to switch sections -->
<script>
  function showSection(section) {
    const content = document.getElementById('content-box');
    if (section === 'about') {
      content.innerHTML = `
        <h1>About Me</h1>
        <p><strong>May 2025:</strong> Preparing my application to MBZUAI...</p>
        <p><strong>April 2025:</strong> Actively building my personal brand...</p>
        <p><strong>March 2025:</strong> Developed Marvin, an autonomous robot...</p>
        <p><strong>January 2025:</strong> Deep dive into brain research...</p>
        <p><strong>December 2024:</strong> Writing a research paper on M-Theory...</p>
        <p><strong>November 2024:</strong> Conducting a detailed project on Gauss’s Law...</p>
        <p><strong>September 2024:</strong> Scored 90% scholarship at FITJEE...</p>
        <p><strong>September 2024:</strong> Developed Quantum Temporal Lattice theory...</p>
        <p><strong>October 2023:</strong> Internship project on vision-language models...</p>
        <p><strong>September 2023:</strong> Collaborated on ‘Time Trace: Fact or Fiction’...</p>
        <p><strong>Mid-2019:</strong> Started competitive PC gaming...</p>
        <p><strong>2014:</strong> Volunteered and awarded for community service...</p>
        <p><strong>2014 onwards:</strong> Active in STEM and volunteering.</p>
      `;
    } else if (section === 'cv') {
      content.innerHTML = `
        <h1>My CV</h1>
        <iframe src="/assets/Dishana cv (3).pdf"></iframe>
      `;
    } else if (section === 'publications') {
      content.innerHTML = `
        <h1>Publications</h1>
        <p>I have published a research paper on Quantum Temporal Lattice (QTL), which explores the deep interplay between time, quantum fields, and theoretical lattice structures.</p>
      `;
    } else if (section === 'contact') {
      content.innerHTML = `
        <h1>Contact</h1>
        <p>Email me at <a href="mailto:and@gmail.com" style="color:#00ffc3;">and@gmail.com</a></p>
      `;
    }
  }
</script>
