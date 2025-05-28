---
title: Home
layout: default
---

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: url('assets/my-background.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
  }

  .navbar {
    width: 100%;
    padding: 15px 30px;
    background-color: #1a1a1a;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    font-size: 16px;
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .navbar a {
    color: #00ffc3;
    text-decoration: none;
    cursor: pointer;
  }

  .main-container {
    display: flex;
    padding: 120px 40px 40px;
    gap: 40px;
  }

  .sidebar {
    width: 250px;
    text-align: center;
  }

  .sidebar img {
    width: 180px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 3px solid #00ffc3;
  }

  .social-links a {
    display: block;
    color: #fff;
    text-decoration: none;
    margin: 8px 0;
    font-size: 16px;
  }

  .content-box {
    flex: 1;
    max-height: 80vh;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.8); /* Black scrollable box */
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  .content-box h1 {
    color: #00ffc3;
    margin-top: 0;
  }

  .content-box p {
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .main-container {
      flex-direction: column;
      padding: 100px 20px;
      align-items: center;
    }

    .sidebar {
      width: 100%;
    }

    .content-box {
      width: 100%;
      max-height: none;
    }
  }
</style>

<div class="navbar">
  <a onclick="showSection('home')">Home</a>
  <a onclick="showSection('cv')">CV</a>
  <a onclick="showSection('publications')">Publications</a>
  <a onclick="showSection('contact')">Contact</a>
</div>

<div class="main-container">
  <div class="sidebar">
    <img src="assets/images/avatar.jpg" alt="Your Profile Picture">
    <div class="social-links">
      <a href="https://linkedin.com/in/yourusername" target="_blank">🔗 LinkedIn</a>
      <a href="https://github.com/yourusername" target="_blank">💻 GitHub</a>
      <a href="https://twitter.com/yourhandle" target="_blank">🐦 Twitter</a>
      <a href="mailto:and@gmail.com">✉️ Email</a>
    </div>
  </div>

  <div class="content-box" id="content-area">
    <!-- Default Home Content -->
    <div id="home">
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
      <p><strong>Mid-2019:</strong> Started competitive PC gaming and battle royale tournaments, overcoming gender biases and team challenges while learning valuable lessons on trust and resilience.</p>
      <p><strong>2014:</strong> Volunteered for hearing-impaired and visually-impaired children fundraising campaign, awarded a medal for community service.</p>
      <p><strong>2014 onwards:</strong> Consistently involved in STEM projects, academic competitions, and community volunteering, shaping my passion for science and service.</p>
    </div>

    <div id="cv" style="display: none;">
      <h1>My CV</h1>
      <iframe src="assets/Dishana cv (3).pdf" width="100%" height="600px" style="border: none;"></iframe>
    </div>

    <div id="publications" style="display: none;">
      <h1>Publications</h1>
      <p>I have published a research paper on Quantum Temporal Lattice (QTL).</p>
    </div>

    <div id="contact" style="display: none;">
      <h1>Contact</h1>
      <p>Email me at <a href="mailto:and@gmail.com">and@gmail.com</a></p>
    </div>
  </div>
</div>

<script>
  function showSection(section) {
    const sections = ['home', 'cv', 'publications', 'contact'];
    sections.forEach(id => {
      document.getElementById(id).style.display = id === section ? 'block' : 'none';
    });
  }
</script>
