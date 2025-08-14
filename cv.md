---
title: CV
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

  .cv-header-row {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 10px;
  }
  .cv-fullscreen-link, .cv-download-link {
    display: inline-block;
    font-size: 16px;
    color: #2d2d2d;
    text-decoration: underline;
    cursor: pointer;
    background: none;
    border: none;
    margin-right: 20px;
    white-space: nowrap;
  }
  .cv-download-link:hover, .cv-fullscreen-link:hover {
    color: #00ffc3;
  }
  .cv-iframe-box {
    width: 96%;
    height: 80vh;
    border: none;
    margin: 18px 2% 0 2%;
    border-radius: 8px;
    background: #181818;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
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
  <div class="cv-header-row">
    <a class="cv-fullscreen-link" href="./assets/dishana_cv.pdf" target="_blank" rel="noopener">Click to open in fullscreen</a>
    <a class="cv-download-link" href="./assets/dishana_cv.pdf" download>Download</a>
  </div>
  <iframe class="cv-iframe-box" src="./assets/dishana_cv.pdf"></iframe>
</div>

{% raw %}
<div class="view-counter">
  <img src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Fdishana11.github.io%2Fcv&label=&icon=github&color=%23198754&message=&style=flat&tz=UTC" alt="Page Views" id="viewCounter">
</div>
{% endraw %}
