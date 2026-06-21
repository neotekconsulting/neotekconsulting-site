---
layout: ../../layouts/BaseLayout.astro
title: "AI & LLM Glossary for Beginners"
description: "A beginner-friendly glossary of AI terms and acronyms, written for middle-school clarity. A living document that will grow over time."
---

<section class="section">
  <div class="container">

# AI & LLM Glossary for Beginners

A living dictionary of terms and acronyms for people new to AI and large language models. Written for middle-school clarity, but useful for anyone building a mental model of the space.

---

## How to Use This Document
- **Terms**: plain-language definitions, usually 1–3 sentences.
- **Acronyms**: what the letters stand for, plus a simple explanation.
- **Examples**: everyday analogies are included whenever possible.
- This doc is meant to grow. Add new terms at the bottom under the matching section, grouped by category when it helps.

---

## Core Concepts

### Artificial Intelligence (AI)
Machines that can do tasks usually needing human smarts, like understanding pictures, answering questions, or driving cars. Think of it as teaching computers to think — at least in narrow ways.

### Machine Learning (ML)
A branch of AI where computers learn from examples instead of being told every rule explicitly. Show it thousands of cat photos, and it learns what cats look like on its own.

### Large Language Model (LLM)
A very big neural network trained on lots of text from the internet. It learns patterns in language so it can write answers, stories, code, and more — like a super-powered autocomplete.

### Neural Network
A computing system loosely inspired by the brain. It uses many simple math units ("neurons") connected in layers to find patterns in data.

### Model
In AI, a "model" is the finished product of training — a bundle of learned patterns stored in numbers (weights). You can think of it like a brain that has already studied for a test.

### Training
The process of teaching a model by showing it examples and adjusting its internal numbers until it gets better at a task. For LLMs, this usually means reading huge amounts of text.

### Inference
Using a trained model to actually do something — like generating a reply, translating text, or classifying an image. It's the "test" phase after studying.

### Parameters (Weights)
The internal numbers a model learned during training. More parameters usually mean a more capable (and bigger) model. Examples: 7B = 7 billion parameters; 70B = 70 billion.

### Token
A piece of a word or punctuation that a model reads or writes. "Hello" might become ["Hello"] or ["He", "llo"], depending on the tokenizer. Models charge by tokens, and longer texts use more tokens.

### Context Window
The amount of text a model can look at or remember at one time. A 128K context window can hold roughly 96,000 words — about 200 pages.

### Prompt
The text you type into a model to get it to do something. "Write a poem about robots" is a prompt.

### Prompt Engineering
The art of writing prompts that get the best results from a model. It's like learning the best way to ask a very literal genie for a wish.

### Temperature
A setting that controls how creative or random a model's answers are. Low temperature = more predictable; high temperature = more surprising.

---

## Acronyms & Jargon

### A.I.
**Artificial Intelligence** — machines performing tasks that normally need human intelligence.

### ML
**Machine Learning** — AI that learns from data instead of following hard-coded rules.

### LLM
**Large Language Model** — an AI trained on massive amounts of text to understand and generate language.

### NLP
**Natural Language Processing** — AI that works with human language (speech, text, translation, etc.).

### API
**Application Programming Interface** — a way for one program to talk to another program. When you use ChatGPT in another app, that app is probably using an API.

### GPU
**Graphics Processing Unit** — a computer chip originally for games and videos, now essential for training and running AI models fast.

### TPU
**Tensor Processing Unit** — a Google-made chip designed specifically to speed up AI math.

### MoE
**Mixture of Experts** — a model design where different parts ("experts") activate only for certain inputs, making big models faster and cheaper to run.

### RAG
**Retrieval-Augmented Generation** — giving a model access to outside information (like a search result or document) so it can answer with facts instead of just guessing.

### Hugging Face
A popular website and company where people share AI models and datasets. Think of it like GitHub for AI models.

### Ollama
A tool that lets you run LLMs on your own computer easily. It's like a portable AI assistant that lives on your machine.

### vLLM
A high-speed engine for serving LLMs, especially on GPUs, so many people can use the same model at once without slowdowns.

### GGUF
A file format for running models on regular computers without big servers. Named after "GGML" + "U" + "F" (format). Used by llama.cpp, Ollama, LM Studio, and others.

### llama.cpp
An open-source project that lets LLMs run locally on CPUs and consumer GPUs. It made local AI practical for regular hardware.

### MLX
**Machine Learning eXpress** — Apple's framework for running AI models efficiently on Mac chips (M1/M2/M4 family).

### Agentic
Describes a model or system that can act on its own — planning steps, using tools, and working toward a goal, not just answering one question at a time.

### Tool Use / Function Calling
When a model doesn't just reply with text, but also triggers an action (like running code, searching the web, or pulling a database record).

### Fine-tuning
Taking an existing model and training it a little more on a specific dataset so it gets better at one job (like medical notes or legal writing).

### Quantization
Shrinking a model by reducing the precision of its numbers. A 70B model might be quantized from full precision to 4-bit, making it much smaller and faster with only a small drop in smarts.

### Embedding
Turning text into a list of numbers that capture meaning. Similar meanings become similar number patterns, so computers can compare ideas mathematically.

### Hallucination
When a model confidently says something that isn't true. It's not lying on purpose — it's predicting text that sounds right but is factually wrong.

### AGI
**Artificial General Intelligence** — a hypothetical AI as flexible and smart as a human across many different tasks. We don't have this yet.

---

## Categories to Expand Next
- **Hardware & Running Models**: CPU, GPU, VRAM, RAM, CUDA, Metal, Apple Silicon
- **Model Formats & Files**: PyTorch, Safetensors, GGML, ONNX, GGUF, .bin
- **Training Methods**: RLHF, DPO, PPO, GRPO, supervised fine-tuning
- **Benchmarks & Eval**: MMLU, HumanEval, SWE-Bench, BFCL, ARC-AGI, GPQA
- **Open Source & Licensing**: Apache 2.0, MIT, Llama Community License, Gemma ToS
- **Deployment & Serving**: API, OpenAI-compatible, local-first, cloud-only, hybrid
- **Agents & Tools**: MCP (Model Context Protocol), A2A, multi-agent, sub-agent, orchestrator, worker

---

## Quick-Start Cheat Sheet

| Term | One-Sentence Definition |
|------|------------------------|
| AI | Computers doing smart tasks |
| ML | Computers learning from examples |
| LLM | Big text-predicting AI model |
| Token | Smallest piece of text a model reads |
| Context window | How much text a model sees at once |
| Prompt | What you type to talk to a model |
| Temperature | How wild or strict the model's answers are |
| GPU | The best chip for running AI fast |
| RAG | Letting a model look up facts before answering |
| Agentic | A model that can act and use tools on its own |
| Quantization | Shrinking a model so it fits on cheaper hardware |
| Embedding | Turning meaning into numbers a computer can compare |
| Hallucination | When the AI makes stuff up confidently |

---

*Start here, then add as you learn. Every expert was once a beginner.*

  </div>
</section>
