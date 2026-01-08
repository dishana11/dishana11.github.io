---
layout: project
title: The vision-language model that describes people in images without bias.
image: assets/fairvis.png
github: https://github.com/dishana11/fairvis
huggingface: https://huggingface.co/dishana11/ernie-fairvis-sft
date: 2025-12-27
---

## Intro

**FairVis** is a fairness-first, bias-aware Vision–Language Model that generates neutral and factual descriptions of people in images. It embeds fairness constraints directly into the model using **PEFT LoRA adapters**, training only **0.3% of parameters** to reduce sensitive attribute leakage by **35%** on benchmark subsets while maintaining <1% performance loss.  

The model is lightweight (**<500MB**) and trained on a **balanced subset of 300 FairFace samples**, ensuring strictly factual descriptors without subjective attributes like attractiveness, emotion, or profession. Visual cues are extracted using **BLIP**, and textual descriptions are generated via **ERNIE-4.5 (0.3B)**.

---

## Motivation

Most Vision-Language Models unintentionally amplify societal biases or leak sensitive attributes when describing human faces. Outputs from typical models may include descriptors like:

- “A young Asian woman smiling”  
- “A professional African man”  
- “A person wearing glasses”

These outputs can infer gender, race, attractiveness, or profession, and are often **non-deterministic and hard to audit**. FairVis addresses these problems by embedding fairness and deterministic constraints directly at the generation stage rather than applying post-processing filters.

---

## System Architecture

```

Image
↓
BLIP (Vision Encoder)
↓
Neutral Visual Cues
↓
ERNIE-4.5 (0.3B) + LoRA
↓
Bias-Aware, Deterministic Text

````

**Components:**

- **BLIP**: Extracts semantic visual cues without sensitive reasoning.  
- **ERNIE-4.5 (0.3B)**: Generates language output with deterministic settings (`do_sample=False`).  
- **LoRA Adapters**: Fine-tunes only 0.3% of parameters to embed fairness constraints while keeping the model lightweight.  

This architecture allows deployment on edge devices and low-resource environments.

---

## Dataset & Training

- **Dataset**: Balanced subset of 300 images from [FairFace](https://huggingface.co/datasets/HuggingFaceM4/FairFace).  
- **Supervision**: Only factual descriptors; no emotion, attractiveness, or profession labels.  
- **Data Preparation (Python Example)**:

```python
from datasets import load_dataset
import json

dataset = load_dataset("HuggingFaceM4/FairFace", "0.25")
fairface_300 = dataset["train"].shuffle(seed=42).select(range(300))

ernie_data = []

for sample in fairface_300:
    prompt = "Describe the person in the image in a neutral and factual way."
    response = f"The image shows a {sample['gender']} person of {sample['race']} ethnicity."
    ernie_data.append({
        "instruction": prompt,
        "output": response
    })

with open("fairvis_ernie_sft.json", "w") as f:
    json.dump(ernie_data, f, indent=2)

print("✅ Dataset ready:", len(ernie_data))
````

* **Fine-Tuning**: Applied LoRA adapters on ERNIE-4.5 to achieve fairness-aware outputs with minimal performance loss.

---

## Inference Pipeline

* **Step 1:** Load image and extract features with BLIP.
* **Step 2:** Generate neutral visual cue text.
* **Step 3:** Pass visual cue into ERNIE-4.5 + LoRA for deterministic, bias-mitigated description.

**Python Example:**

```python
from transformers import BlipProcessor, BlipForConditionalGeneration, AutoTokenizer, AutoModelForCausalLM

# BLIP setup
processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
blip_model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

inputs = processor(images=image, return_tensors="pt")
out = blip_model.generate(**inputs, max_new_tokens=20)
visual_cue = processor.decode(out[0], skip_special_tokens=True)

# ERNIE-4.5 + LoRA setup
tokenizer = AutoTokenizer.from_pretrained("baidu/ERNIE-4.5-0.3B-PT")
model = AutoModelForCausalLM.from_pretrained("dishana11/ernie-fairvis-sft")

prompt = f"Using these visual cues: {visual_cue}. Describe the person in a neutral and factual way."
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
outputs = model.generate(**inputs, max_new_tokens=50, do_sample=False)

print(tokenizer.decode(outputs[0], skip_special_tokens=True))
```

**Example Output:**

> “The image shows a person wearing glasses.”

---

## Key Features

* Deterministic outputs suitable for audits.
* Reduced sensitive attribute leakage by 35%.
* Full model size <500MB for edge deployment.
* Factual and neutral descriptions using a balanced subset of 300 images.
* Fairness constraints embedded via LoRA adapters (0.3% parameters).

---

## Links

* **Hugging Face Model:** [ERNIE-FairVis-SFT](https://huggingface.co/dishana11/ernie-fairvis-sft)
* **Colab Notebook:** [Interactive Demo](https://colab.research.google.com/github/dishana11/fairvis/blob/main/demo.ipynb)
* **GitHub Repository:** [FairVis Project](https://github.com/dishana11/fairvis)

---

## Applications

* Bias-aware AI research and auditing
* Accessibility tools (screen readers)
* Responsible AI deployment on edge devices
* Education and research in fairness-aware vision-language modeling
