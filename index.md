---
title: About Me
layout: default
---

<style>
  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: url('/assets/my-background.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow: auto;
    color: #fff;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    backdrop-filter: blur(6px);
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Top navigation bar */
  .top-nav {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 25px;
    font-weight: 600;
    font-size: 16px;
    z-index: 100;
  }

  .top-nav a {
    color: #4a4a4a; /* Dark grey */
    text-decoration: none;
    white-space: nowrap; /* Prevent cutting */
    transition: color 0.3s ease;
  }

  .top-nav a:hover {
    color: #00ffc3; /* bright teal on hover */
  }

  /* Social links below */
  .social-links {
    position: fixed;
    top: 70px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 18px;
    z-index: 100;
  }

  .social-links a {
    color: #4a4a4a;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: #00ffc3;
  }

  .about-box {
    max-width: 600px;
    width: 90%;
    max-height: 60vh;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    text-align: left;
    overflow-y: auto;
    color: #e0e0e0; /* softer light grey for text */
  }

  h1 {
    margin-top: 0;
    color: #00ffc3;
  }

  p {
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .about-box {
      padding: 20px;
      max-width: 95vw;
      max-height: 80vh;
    }
    .top-nav {
      position: static;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      margin-bottom: 20px;
    }
    .social-links {
      position: static;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
    }
  }
</style>

<div class="top-nav">
  <a href="/">About</a>
  <a href="/publications.html" target="_blank">Publications</a>
  <a href="/assets/Dishana cv (3).pdf" target="_blank">CV</a>
  <a href="/contact.html" target="_blank">Contact</a>
</div>

<div class="social-links">
  <a href="https://www.linkedin.com/in/meowww11" target="_blank">LinkedIn</a>
  <a href="https://twitter.com/yourtwitterhandle" target="_blank">Twitter</a>
</div>

<div class="container">
  <div class="about-box">
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
