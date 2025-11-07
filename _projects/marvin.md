---
layout: project
title: Marvin
image: assets/pixel.jpg
github_link: https://github.com/dishana11/Marvin
---

## Marvin — The Autonomous Service Robot 🤖

**Marvin** is an autonomous service robot I built during a 12-day YTS (Young Technology Scholars) program.  
It was designed to **detect people**, **navigate autonomously**, **avoid obstacles**, and **carry items** from one place to another using intelligent path planning.  

This project combined **hardware design**, **embedded programming**, and **AI-driven sensing** — giving me a deep understanding of how real robots perceive and interact with the world.

---

### ⚙️ Hardware Overview

Marvin’s system consisted of the following key components:

- **Arduino Uno** — served as the **motor controller** and handled basic sensor I/O.
- **Raspberry Pi 4** — acted as the **main processing unit**, responsible for data interpretation, communication, and remote control.
- **LiDAR Sensor (Light Detection and Ranging)** — continuously scanned the surroundings to **map obstacles** and **detect movement** using reflected laser pulses.
- **Motor Driver (L298N)** — controlled the **DC motors** to enable smooth movement in different directions.
- **Ultrasonic Sensors** — provided **proximity detection** at short ranges for precise navigation.
- **Servo Motors** — controlled head rotation and small item-carrying arm.
- **Li-ion Battery Pack** — provided power with enough capacity for 3–4 hours of continuous operation.
- **Wi-Fi Module** — allowed **remote control and monitoring** through a mobile interface.

---

### 🧠 How It Worked

1. **Sensing & Mapping**  
   The LiDAR scanned the environment in real-time and created a 2D point map.  
   This allowed Marvin to “see” walls, humans, or furniture within a few meters.

2. **Data Processing**  
   The Raspberry Pi processed incoming LiDAR data and sensor feedback, running a lightweight Python script to:
   - Identify obstacles
   - Calculate clear paths
   - Maintain safe distances
   - Send movement commands to the Arduino

3. **Motion Control**  
   The Arduino received serial commands from the Raspberry Pi and translated them into motor actions.  
   PWM (Pulse Width Modulation) controlled speed, ensuring smooth and precise motion.

4. **Object Detection**  
   Using LiDAR distance data and a simple computer vision model (via the Pi camera), Marvin could **detect people or objects** in its path and **slow down or stop** accordingly.

5. **Autonomous Delivery**  
   Marvin could carry light objects (like medicine, keys, or notes) on its top platform and deliver them to another room by following programmed waypoints or user input.

---

### 📱 Control Interface

A **mobile web dashboard** (built with Flask + HTML/CSS) allowed users to:
- View live LiDAR mapping data
- Send “Go to Room A” or “Return to Dock” commands
- Control Marvin manually with arrow buttons if needed

It also displayed **battery status**, **connection signal**, and **speed metrics** in real time.

---

### 💡 Real-World Application — Helping the Elderly

Marvin was inspired by the idea of **assistive robotics** for the elderly or mobility-restricted individuals.  
Some envisioned use cases included:

- Carrying medicines, water, or personal items between rooms  
- Detecting if someone has fallen using motion sensors and notifying caretakers  
- Following the user to provide assistance on command  
- Acting as a simple **home companion robot**

This concept merges **autonomous robotics with compassion** — using technology to help people live more independently.

---

### 🧩 Technologies Used

| Component | Purpose | Technology |
|------------|----------|-------------|
| **Raspberry Pi 4** | Processing + Communication | Python, Flask, Socket Programming |
| **Arduino Uno** | Motor & Sensor Control | C++ (Arduino IDE) |
| **LiDAR Sensor** | Mapping & Obstacle Detection | Serial Data Processing |
| **Ultrasonic Sensors** | Short-range Obstacle Avoidance | HC-SR04 Modules |
| **Motor Driver (L298N)** | Drive Control | PWM signals |
| **Web Dashboard** | Remote Interface | Flask + HTML/CSS |
| **Wi-Fi** | Communication | ESP8266 module |

---

### 🧪 Learnings

Through Marvin, I learned how to:
- Interface hardware with software layers efficiently  
- Use LiDAR and sensors for real-time decision making  
- Debug serial communication between Arduino and Raspberry Pi  
- Balance computational load between microcontrollers  
- Build scalable robotics logic in Python  

The most valuable insight was realizing that **hardware problems often require software empathy** — understanding how sensors “think” before commanding them.

---

### 🛰️ Future Improvements

- Integrating **SLAM (Simultaneous Localization and Mapping)** for better room mapping  
- Adding **voice commands** using speech recognition  
- Enabling **autonomous charging** through docking stations  
- Using **TensorFlow Lite** for improved visual detection on the Pi  

---

![Marvin Image](assets/pixel.jpg)

---

Would you like me to include a short **“code workflow diagram”** (showing how Raspberry Pi, Arduino, LiDAR, and sensors communicate)? It would look visually clean in Markdown and help explain the control flow.
