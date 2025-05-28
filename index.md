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
      left: 250px;
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
      color: #00ffc3;
      font-weight: bold;
      font-size: 18px;
    }

    .navbar a:hover {
      color: #fff;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 250px;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      z-index: 1001;
    }

    .sidebar img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      margin-bottom: 15px;
      border: 3px solid #00ffc3;
      object-fit: cover;
    }

    .social-links a {
      display: block;
      color: #fff;
      text-decoration: none;
      margin: 8px 0;
      font-size: 16px;
    }

    .main-container {
      margin-left: 250px;
      padding: 100px 40px 40px;
    }

    .content-box {
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 15px;
      padding: 25px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    .content-box h1 {
      color: #00ffc3;
      margin-top: 0;
    }

    .content-box p {
      line-height: 1.6;
    }

    iframe {
