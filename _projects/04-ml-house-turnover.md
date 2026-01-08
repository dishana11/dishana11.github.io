---
layout: project
title: Uncovering Algorithmic Bias in Prediction Platforms with ML
image: assets/money (1).jpg
github: https://github.com/dishana11/ML-House-Turnover
order: 3
---

## Overview

This project exposes the inner workings of online prediction platforms by reverse-engineering their source code to reveal a deterministic, adversarial logic. Instead of fair, stochastic outcomes, these platforms were found to systematically invert majority player bets in approximately 70% of rounds to maximize operator revenue.

An ML-based simulation was developed to model this system as an **adversarial decision process**. By analyzing player bet distributions, outcome sequences, and turnover data, the model demonstrates a clear convergence toward revenue maximization, not chance. This work has significant implications for **fraud detection** and **algorithmic risk auditing**.

---

## Key Findings

- **Deterministic Logic:** Discovered that platform outcomes were not random but were algorithmically chosen to counter the majority of player predictions.
- **Adversarial Model:** The system was successfully modeled as an adversarial process where the operator (the "house") actively plays against its users.
- **Revenue Maximization:** The simulation confirmed that the platform's logic is optimized to ensure operator profitability over time, rather than to provide a fair gaming experience.

---

## Methodology

The project involved two main phases:

1.  **Code Auditing:** A thorough review of the platform's source code was conducted to identify the core logic governing game outcomes.
2.  **ML Simulation:** A Python-based simulation was built using historical data on player bets and outcomes. This model was used to test the hypothesis that the system was adversarial and to quantify the extent of the bias.

This investigation highlights the critical need for transparency and auditing in algorithmic systems, especially those involving financial transactions.

---

## Applications

- **Fraud Detection:** The techniques used in this project can be adapted to identify other forms of algorithmic manipulation in online systems.
- **Algorithmic Auditing:** This work serves as a case study for the importance of auditing black-box algorithms to ensure fairness and prevent exploitation.
