---
layout: project
title: NLP-Powered Twitter Bot with Sentiment Analysis & Trend Detection
image: assets/automation.png
github: https://github.com/dishana11/Twitter-X-Automation-Bot
date: 2023-05-10
order: 2
---

## Overview

This project features an intelligent NLP-based X (Twitter) automation bot designed for sophisticated content scheduling and engagement. It leverages **sentiment analysis** and **trend-aware filtering** to guide content strategy, ensuring posts are both timely and contextually appropriate.

The bot offers two posting modes: manual prompt-based publishing for real-time content and a cron-driven scheduling system using GitHub Actions for automated, long-term planning. To guarantee reliability, it includes a multi-API fallback mechanism that ensures uninterrupted service even if a primary provider fails.

---

## Key Features

- **Dual Posting Modes:**
    - **Manual Mode:** Instantly publish content based on a user-provided prompt.
    - **Scheduled Mode:** Automate posts using a cron schedule powered by GitHub Actions for consistent engagement.

- **Intelligent Content Filtering:**
    - **Sentiment Analysis:** Analyzes content to align with a positive or neutral tone, avoiding potentially negative posts.
    - **Trend-Aware Logic:** Filters content based on current trends to maximize relevance and reach.

- **Reliability & Robustness:**
    - **100% Post Success Rate:** Engineered for flawless execution in all test cases.
    - **Multi-API Fallback Routing:** Intelligently switches between multiple APIs to prevent downtime during provider failures.
    - **Character Limit Enforcement:** Automatically truncates posts to 280 characters to comply with non-premium account limits.

---

## Technical Details

The core of the bot is built with Python and leverages several key libraries for its functionality. The scheduling is handled by GitHub Actions, which triggers the posting script based on a defined cron schedule. The NLP capabilities, including sentiment analysis, are integrated to process and refine the content before it goes live.

This architecture ensures the bot is not only reliable but also "smart" about the content it shares, making it a powerful tool for automated social media management.
