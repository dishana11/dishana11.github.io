<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dishana's Portfolio</title>
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
      left: 200px;
      right: 0;
      height: 60px;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      padding-left: 30px;
      z-index: 1000;
    }

    .navbar a {
      margin-right: 30px;
      cursor: pointer;
      text-decoration: none;
      color: #444;
      font-weight: bold;
      font-size: 18px;
    }

    .navbar a:hover {
      color: #00ffc3;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      z-index: 1001;
    }

    .sidebar img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-bottom: 20px;
      border: 2px solid #00ffc3;
    }

    .social-links a {
      display: block;
      color: #00ffc3;
      text-decoration: none;
      margin: 10px 0;
      font-size: 16px;
    }

    .main {
      margin-left: 200px;
      padding: 100px 40px 40px;
    }

    .content-box {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 15px;
      padding: 30px;
      max-height: 70vh;
      overflow-y: auto;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    h1 {
      color: #00ffc3;
    }

    p {
      line-height: 1.6;
    }

    iframe {
      width: 100%;
      height: 500px;
      border: none;
    }

    @media (max-width: 768px) {
      .navbar {
        left: 0;
      }
      .sidebar {
        display: none;
      }
      .main {
        margin-left: 0;
        padding-top: 80px;
      }
    }
  </style>
</head>

<body>
  <div class="sidebar">
    <img src="/assets/your-image.jpg" alt="Profile Picture" />
    <div class="social-links">
      <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/yourprofile" target="_blank">Twitter</a>
    </div>
  </div>

  <div class="navbar">
    <a onclick="showSection('home')">Home</a>
    <a onclick="showSection('cv')">CV</a>
    <a onclick="showSection('publications')">Publications</a>
    <a onclick="showSection('contact')">Contact</a>
  </div>

  <div class="main">
    <div class="content-box" id="content-box">
      <!-- Content gets loaded here -->
    </div>
  </div>

  <script>
    function showSection(section) {
      const content = document.getElementById('content-box');

      if (section === 'home') {
        content.innerHTML = `
          <h1>Welcome</h1>
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

    // Load default content
    document.addEventListener("DOMContentLoaded", function () {
      showSection('home');
    });
  </script>
</body>
</html>
