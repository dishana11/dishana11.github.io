---
title: Publications
layout: default
---

<style>
  body {
    margin: 0;
    overflow: hidden;
    background-image: url('./assets/my-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    font-family: Arial, sans-serif;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3;
    padding: 10px 0;
  }

  .navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .navbar li {
    margin: 0 20px;
  }

  .navbar a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
  }

  .navbar a:hover {
    color: #ddd;
  }

  .gif-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  img#introGif {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    display: block;
    opacity: 0.3;
  }

  .gif-container.visible {
    opacity: 1;
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    margin-top: 60px;
    color: #fff;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    max-height: 80vh;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .content::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome, Safari */
  }

  .content h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .content p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .content a {
    color: #00ffc3;
    text-decoration: underline;
  }

  .content a:hover {
    color: #00e0a3;
  }

  .fallback {
    display: none;
    color: red;
    font-size: 18px;
    text-align: center;
    padding: 20px;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
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

<nav class="navbar">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="cv.html">CV</a></li>
    <li><a href="publications.html">Publications</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="about-detail.html">About in Detail</a></li>
  </ul>
</nav>

<div class="gif-container" id="gifContainer">
  <img src="./assets/intro.gif" alt="Intro GIF" id="introGif">
</div>

<div class="fallback" id="fallbackMessage">
  Failed to load GIF. Please check the file path: ./assets/intro.gif
</div>

<div class="content">
  <h1>Publications</h1>
  <p>
    I have published a research paper on Quantum Temporal Lattice (QTL) in the International Journal for Science, Arts and Technology.<br>
    <a href="https://www.ijsat.org/research-paper.php?id=1707" target="_blank" style="color:#00ffc3;text-decoration:underline;">Read the paper here</a>.<br>
    The paper proposes an innovative approach to traveling in time by manipulating encoded space-time data, suggesting that by altering the mathematical structure of space-time at a quantum level, it may be possible to engineer traversable loops or paths that connect different points in time. This merges concepts from string theory and time-loop physics to open new possibilities in theoretical physics.
  </p>
  <p>
    The research builds on foundational work in string theory, particularly M-theory, and explores how quantum entanglement can be leveraged to encode temporal information. By modeling space-time as a lattice structure, the paper introduces a framework for creating stable temporal loops, potentially enabling controlled time travel within the constraints of quantum mechanics.
  </p>
  <p>
    This work has implications for both theoretical physics and practical applications, such as quantum computing and information processing. Ongoing research aims to refine the mathematical models and explore experimental validations using quantum simulation platforms.
  </p>
</div>

{% raw %}
<div class="view-counter">
  <img src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Fdishana11.github.io%2Fpublications&label=&icon=github&color=%23198754&message=&style=flat&tz=UTC" alt="Page Views" id="viewCounter">
</div>
{% endraw %}

<script>
  const gifContainer = document.getElementById('gifContainer');
  const introGif = document.getElementById('introGif');
  const fallbackMessage = document.getElementById('fallbackMessage');

  console.log('GIF path:', introGif.src);
  console.log('Background path:', getComputedStyle(document.body).backgroundImage);

  introGif.onerror = () => {
    console.error('Error: GIF failed to load at ./assets/intro.gif');
    fallbackMessage.style.display = 'block';
  };

  introGif.onload = () => {
    console.log('GIF loaded successfully');
    fallbackMessage.style.display = 'none';
  };

  function toggleGif() {
    gifContainer.classList.toggle('visible');
  }

  setInterval(toggleGif, 5000);
  toggleGif();
</script>
