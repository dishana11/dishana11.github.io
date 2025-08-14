---
title: Contact
layout: default
---

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .navbar::-webkit-scrollbar {
    display: none;
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
    white-space: nowrap;
  }
  .navbar a:hover,
  .navbar a:focus {
    color: #2d2d2d;
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

  .content-box h1 {
    color: #2d2d2d;
    font-size: 2em;
    margin: 0 0 20px 0;
    text-align: center;
    padding: 28px 26px 0 26px;
  }
  .content-box p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #f4f4f4;
    text-align: center;
    padding: 0 26px;
  }
  .content-box a {
    color: #00ffc3;
    text-decoration: underline;
  }
  .content-box a:hover {
    color: #00e0a3;
  }

  .video-container {
    position: fixed;
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
    opacity: 0.3;
  }
  .video-container.visible {
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

{% include mobile-responsive-fixes.html %}

<div class="navbar">
  <a href="index.html">Home</a>
  <a href="projects.html">Projects</a>
  <a href="cv.html">CV</a>
  <a href="publications.html">Publications</a>
  <a href="contact.html">Contact</a>
  <a href="about-detail.html">About in Detail</a>
</div>

<div class="video-container" id="videoContainer">
  <video id="backgroundVideo" src="./assets/contact_bg.mp4" autoplay loop muted playsinline>
    Your browser does not support the video tag.
  </video>
</div>

<div class="main-container">
  <div class="sidebar">
    <div class="avatar-wrapper">
      <img src="./assets/avatar.jpg" alt="Your Profile Picture">
    </div>
    <div class="social-links">
      <a class="social-link" href="https://www.linkedin.com/in/dishanarupani/" target="_blank">
        <img src="./assets/linkedin.svg" alt="LinkedIn logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg';">LinkedIn
      </a>
      <a class="social-link" href="https://github.com/dishana11" target="_blank">
        <img src="./assets/github.svg" alt="GitHub logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg';">GitHub
      </a>
      <a class="social-link" href="https://x.com/dishanaa11" target="_blank">
        <img src="./assets/x-twitter.svg" alt="X logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg';">X (Twitter)
      </a>
      <a class="social-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=dishanarupani@gmail.com" target="_blank" rel="noopener">
        <img src="./assets/email.svg" alt="Email logo" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/maildotru.svg';">Email
      </a>
    </div>
  </div>

  <div class="content-box">
    <h1>Contact</h1>
    <p>Email me at <a href="mailto:dishanarupani@gmail.com">dishanarupani@gmail.com</a></p>
  </div>
</div>

{% raw %}
<div class="view-counter">
  <img src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Fdishana11.github.io%2Fcontact&label=&icon=github&color=%23198754&message=&style=flat&tz=UTC" alt="Page Views" id="viewCounter">
</div>
{% endraw %}

<script>
  const videoContainer = document.getElementById('videoContainer');
  function toggleVideo() {
    videoContainer.classList.toggle('visible');
  }
  setInterval(toggleVideo, 5000);
  toggleVideo();
</script>
