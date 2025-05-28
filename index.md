---
title: About Me
layout: default
---

<style>
  html, body {
    margin: 0;
    height: 100%;
    overflow: hidden; /* no page scroll */
    font-family: Arial, sans-serif;
    color: white;
    background: url('/assets/images/avatar.jpg') no-repeat center center fixed;
    background-size: cover;
  }

  /* Profile image + socials top-left */
  .profile-container {
    position: fixed;
    top: 20px;
    left: 20px;
    text-align: center;
    color: white;
    z-index: 10;
  }

  .profile-container img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid white;
    object-fit: cover;
  }

  .social-links {
    margin-top: 10px;
    display: flex;
    gap: 12px;
    justify-content: center;
  }

  .social-links a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: #1da1f2;
  }

  /* Center container */
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  /* Scrollable about box */
  .about-box {
    background: rgba(0, 0, 0, 0.75);
    width: 420px;
    max-height: 70vh;
    padding: 25px 30px;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 0 15px rgba(0,0,0,0.9);
    font-family: 'Courier New', monospace;
    font-size: 15px;
    line-height: 1.5;
  }

  .about-box p {
    margin: 0 0 10px 0;
  }

  .about-box strong {
    font-size: 18px;
  }

</style>

<div class="profile-container">
  <img src="/assets/images/avatar.jpg" alt="Dishana's Photo" />
  <div class="social-links">
    <a href="https://github.com/meowww11" target="_blank" aria-label="GitHub">🐱</a>
    <a href="https://linkedin.com/in/meowww11" target="_blank" aria-label="LinkedIn">🔗</a>
  </div>
</div>

<div class="container">
  <div class="about-box">
    <p><strong>Hi, I'm Dishana.</strong></p>
    
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
