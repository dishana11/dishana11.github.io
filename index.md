---
title: About Me
layout: default
---

<style>
  html, body {
    margin: 0;
    height: 100%;
    overflow: auto; /* allows scroll if needed */
    font-family: Arial, sans-serif;
    color: white;
    background: url('/assets/images/avatar.jpg') no-repeat center center fixed;
    background-size: cover;
  }

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

  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

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

  @media (max-width: 600px) {
    .profile-container {
      position: static;
      margin-bottom: 20px;
    }
    .container {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 60px;
    }
    .about-box {
      width: 95%;
      max-width: 99vw;
      max-height: 60vh;
    }
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
    <p><strong>May 2025:</strong> Preparing my application to MBZUAI with a focus on AI, AGI, and robotics...</p>
    <!-- More timeline items here -->
  </div>
</div>
