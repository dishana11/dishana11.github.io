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
    overflow: hidden; /* Disable page scroll */
    color: #fff;
  }

  .page-container {
    display: flex;
    min-height: 100vh;
    backdrop-filter: blur(6px);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
  }

  /* Left sidebar with image and links */
  .sidebar {
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ccc;
    font-weight: 600;
  }

  .profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #00ffc3;
    margin-bottom: 20px;
  }

  .sidebar-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    font-size: 1.1rem;
  }

  .sidebar-links a {
    color: #aaa;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .sidebar-links a:hover {
    color: #00ffc3;
  }

  /* Top navigation */
  .top-nav {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 25px;
    font-weight: 700;
    color: #444; /* dark grey */
    font-size: 1.1rem;
    z-index: 10;
  }

  .top-nav a {
    color: #444;
    text-decoration: none;
    cursor: pointer;
  }

  .top-nav a:hover {
    color: #00ffc3;
  }

  /* Scrollable about me box */
  .about-box {
    flex-grow: 1;
    max-width: 700px;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    padding: 30px;
    margin-left: 40px;
    color: #eee;
    overflow-y: auto;
    max-height: 80vh;
  }

  .about-box h1 {
    color: #00ffc3;
    margin-top: 0;
  }

  .about-box p {
    line-height: 1.6;
  }

  /* Responsive for small screens */
  @media (max-width: 700px) {
    .page-container {
      flex-direction: column;
      padding: 10px;
    }
    .sidebar {
      width: 100%;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 20px;
    }
    .profile-img {
      margin-bottom: 0;
      margin-right: 20px;
    }
    .sidebar-links {
      flex-direction: row;
      gap: 15px;
      width: auto;
      font-size: 0.9rem;
    }
    .about-box {
      margin-left: 0;
      max-width: 100%;
      max-height: 60vh;
      padding: 20px;
    }
    .top-nav {
      position: static;
      margin-bottom: 15px;
      justify-content: center;
      gap: 15px;
    }
  }
</style>

<div class="top-nav">
  <a href="/publications.html" target="_blank">Publications</a>
  <a href="/assets/Dishana%20cv%20(3).pdf" target="_blank" download>CV</a>
  <a href="/contact.html" target="_blank">Contact</a>
</div>

<div class="page-container">
  <div class="sidebar">
    <img src="/assets/images/avatar.jpg" alt="Dishana's Profile Image" class="profile-img" />
    <div class="sidebar-links">
      <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/yourtwitter" target="_blank">Twitter</a>
    </div>
  </div>

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
