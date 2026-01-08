---
layout: project
title: ML Model to Predict House Turnovers
image: assets/money (1).jpg
github: https://github.com/dishana11/Marvin
date: 2022-06-26
---

## ML Model to Predict House Turnovers

### Introduction  
This project dives into the concept of *house turnover prediction* and the deceptive mechanisms underlying online “color trading” platforms. These platforms claim to offer users a chance to double their money through simple predictions, but the reality is far more complex and rigged against the participants.  

### Background  
During my exploration of multiple such trading websites, I obtained access to a few source codes used by these platforms. Analyzing the code revealed a crucial pattern — around **70% of the time**, the system intentionally displays the *opposite* outcome of the majority's bet.  
This subtle manipulation ensures that, in the long run, the **house always wins**, while the majority of players lose money regardless of their strategy or prediction accuracy.

### The Hidden Logic  
Unlike legitimate trading systems, these websites are not connected to regulated exchanges. The algorithms inside them are pre-programmed to generate outcomes that appear random but are actually *biased against users*.  
The code often follows this logic:
1. Track the percentage of users betting on each color (or side).  
2. Select the color that causes the **maximum total loss** for the majority.  
3. Display it as the “winning” result.  

As a result, even if a player uses advanced strategies or statistical modeling, their probability of long-term profit remains close to zero.

### Socioeconomic Impact  
The most concerning aspect of this pattern is **who it affects**.  
The majority of participants are from economically weaker backgrounds, often lured by ads promising “guaranteed profits” or “double returns.” These individuals deposit real money through digital wallets or payment links that lead to **unregistered or shell bank accounts**.  

Once enough funds accumulate, the operators often:
- **Disable withdrawals**,  
- **Shut down the website**,  
- Or **rebrand under a new domain**, repeating the cycle.  

This makes legal recovery nearly impossible and turns these schemes into large-scale digital scams.

### My Analysis  
Using the obtained data and behavioral records, I built an **ML model** to simulate these turnover patterns.  
The model’s goal was **not** to predict player winnings but to understand how the *system’s design* ensures consistent profits for the operator.  
The machine learning component used:
- Player bet data  
- Color outcome sequences  
- Round-wise turnover distributions  

By applying regression and probability-based prediction models, it became evident that the “turnover” always converged toward maximizing the platform’s revenue rather than random fairness.

### Conclusion  
This study and model highlight the **predatory mathematics** behind color trading platforms. The illusion of randomness conceals a deterministic algorithm designed for controlled losses.  
Understanding such mechanisms not only helps expose fraudulent systems but also provides insight into how manipulation in algorithmic systems can exploit psychological trust in technology.  

### Future Scope  
This research could be extended into:
- Designing AI-based fraud detectors for online prediction platforms.  
- Collaborating with financial cybersecurity teams to trace fund flows through digital shell networks.  
- Building educational tools to warn users about algorithmic exploitation in online “trading” apps.  
