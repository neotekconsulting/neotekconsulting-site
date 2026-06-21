---
layout: ../../layouts/BaseLayout.astro
title: "Local AI Models Research"
description: "A living research summary of local AI and LLM model sources, with emphasis on agentic-optimized models and local-first deployment."
---

<section class="section">
  <div class="container">

# Local AI Models Research Report

Sources: hermesguide.xyz, vLLM docs/supported_models, Ollama library, additional local model hubs, and 2025–2026 agentic-LLM research. Focus: local-first, with emphasis on agentic-optimized models.

---

## 1. HermesGuide Model Landscape (Snapshot)
Source: https://hermesguide.xyz/ai-models/

### Tier Structure
1. **Tier 1 — Frontier**: complex reasoning, strategy, planning, external dev only  
2. **Tier 2 — Agent Execution**: tool calls, long task chains, multi-step pipelines  
3. **Tier 3 — Balanced**: content, code, research, day-to-day tasks  
4. **Open Source — Runs on Device**: local inference, zero API cost, full privacy, split by system RAM requirements

### Local-Relevant Tiers
- **Tier 2 / Open Source local candidates**: open-weight models capable of tool use and agent workflows.
- **Tier 4 local split**: explicitly organized by device RAM requirements, which matters for on-device deployment.

### Notable Models With Local / Open-Weight Relevance
- **GLM-5.1** — 744B total / 40B active (MoE); MIT license; strong benchmarks; open weights on HuggingFace
- **Kimi K2.5 / K2.6** — open weights; long-context; strong agentic scores
- **DeepSeek V4 Pro** — open weights; large MoE; strong SWE-Verified performance
- **Qwen3 family** — widely represented in local hubs; good tool-use performance
- **Gemma 4** — consumer hardware-friendly multimodal option

---

## 2. vLLM Supported Models
Source: https://docs.vllm.ai/en/latest/models/supported_models/

### How vLLM Covers Models
vLLM supports models through 4 paths:
1. **Native vLLM implementations** — highest performance
2. **Transformers modeling backend** — <5% performance gap; supports embedding, language, vision-language (image-only), encoder-only, decoder-only, MoE, full/sliding attention, and all parallelization schemes
3. **Plugin system** — for unsupported architectures
4. **Custom Transformers-compatible models** — can be loaded via `trust_remote_code=True` or local path

### Practical Implication for Local Agents
- Many local models can be served efficiently with vLLM if they are Transformers-compatible.
- For agentic deployments requiring high throughput or multi-agent serving, vLLM is a strong backend choice.
- Official model tables were referenced in docs; for exact model names, consult the live supported model tables in the docs.

### Local / Local-Serving-Friendly Architectures
- Decoder-only models: LLaMA-family, Qwen-family, Gemma-family, Mistral-family, Phi-family, DeepSeek-family
- Vision-language models: supported for image-only use cases
- MoE models: tensor/expert/pipeline parallel supported, which matters for larger local runs

---

## 3. Ollama Model Library
Source: https://ollama.com/library

### Models Best Suited for Agentic / Tool-Use Workloads
- `llama3.1` (8b / 70b / 405b)
- `deepseek-r1` (1.5b–671b)
- `qwen2.5` and `qwen3` (0.5b–235b+)
- `qwen2.5-coder`, `qwen3-coder`, `qwen3-coder-next`
- `mistral-nemo`, `mistral-small`, `mistral-large-3`
- `gemma4`
- `qwen3.5`, `qwen3.6`
- `gpt-oss` (20b / 120b)
- `devstral` / `devstral-small-2` / `devstral-2`
- `granite4.1`
- `functiongemma` (270m function-calling specialist)
- `glm-5` / `glm-5.1` / `glm-4.7` / `glm-4.7-flash`
- `kimi-k2.5` / `kimi-k2.6` / `kimi-k2.7-code`
- `laguna-xs.2`
- `north-mini-code-1.0`
- `athene-v2`
- `llama4` multimodal + tools

### Specialty Models by Task
- **Coding**: deepseek-coder, codellama, qwen2.5-coder, qwen3-coder, starcoder2, granite-code, devstral
- **Reasoning**: deepseek-r1, qwen3, gpt-oss, qwen3.5, cogito, phi4-reasoning
- **Multimodal**: qwen3-vl, llama4, gemma3/4, mistral-large-3, ministral-3
- **Embedding / RAG**: nomic-embed-text, mxbai-embed-large, bge-m3, qwen3-embedding

---

## 4. Other Local Model Sources & Ecosystems

### HuggingFace GGUF
- ~185k+ GGUF models
- Notable recent trending models: Gemma-4-12B-Agentic, Qwen3.6-27B/35B, GLM-5.2, Kimi-K2.7-Code, MiniMax-M3
- Best source for broad quantization + hardware-specific variants

### LM Studio
- Curated GGUF catalog with quantization recommendations
- Notable new entries: Gemma 4, Granite 4.1, Qwen3.6, Nemotron 3 Omni, Devstral 2, Qwen3-Coder-Next, GLM-4.7, Ministral 3

### llama.cpp
- Reference GGUF runtime
- Compatible with most major open-weight families
- Heavy overlap with Ollama and LM Studio catalogs

### Jan.ai
- 123 open models via HuggingFace hub
- Privacy-first desktop client
- Supports Llama 4, Qwen 3/3.6, DeepSeek, Gemma 4, Mistral, Kimi, GPT-OSS, Phi-3

### GPT4All / LocalAI / Local AI Zone
- GPT4All: CPU-friendly, consumer desktop inference
- LocalAI: OpenAI-compatible local API layer
- Local AI Zone: curated GGUF discovery hub

---

## 5. Agentic-Optimized Local LLMs (2025–2026)
Focus: models known for strong tool use, function calling, reasoning, and agentic workflows when run locally. Sources include Docker Blog, J.D. Hodges eval, MindStudio, Pinggy, Fast.io, and BFCL V4.

### Top Agentic Local Models
- **Qwen3.5 4B** — best local tool caller overall; small and fast; weaker on sequential multi-turn
- **Qwen3 8B / 14B** — strong tool selection; widely available via Ollama
- **GLM-4.7-Flash** — fast parallel tool caller; strong BFCL rank
- **Nemotron Nano 4B** — strong sequential multi-turn reasoning
- **Mistral Nemo 12B** — solid all-around agentic coder
- **DeepSeek V3.1-Terminus** — improved tool calling + search agent behavior
- **Kimi K2.5 / K2.6** — long-context sub-agent tasks
- **GPT-OSS 20B** — balanced tool use
- **Devstral 2** — second-gen agentic coding + vision
- **Qwen3-Coder-Next** — agentic coding MoE

### Recommended Local Runtimes for Agents
- **Ollama** — easiest setup, native tool calling, OpenAI API compatibility
- **LM Studio** — GUI prototyping, visual tool-call debugging
- **vLLM** — production throughput, multi-agent serving
- **llama.cpp** — low-level control, wide hardware support

---

## 6. Cross-Hub Consensus Models
These appear consistently across Ollama, vLLM-compatible families, LM Studio, and HuggingFace GGUF:
- Qwen3 / Qwen3.5 / Qwen3.6
- Llama 3.1 / 3.2 / 4
- Gemma 3 / 4
- DeepSeek-R1 / V3.x / V4.x
- Mistral Small 3.1 / Mixtral / Ministral
- Phi-4 / Phi-4-mini
- GPT-OSS 20B / 120B
- Devstral / Devstral 2
- Kimi K2.x

---

## 7. Key Sources
- https://hermesguide.xyz/ai-models/
- https://docs.vllm.ai/en/latest/models/supported_models/
- https://ollama.com/library
- https://huggingface.co/models?library=gguf
- https://lmstudio.ai/models
- https://jan.ai/
- https://local-ai-zone.github.io/
- https://www.docker.com/blog/local-llm-tool-calling-a-practical-evaluation/
- https://www.jdhodges.com/blog/local-llms-on-tool-calling-2026-pt1-local-lm/
- https://www.mindstudio.ai/blog/best-open-source-llms-agentic-coding-2026
- https://pinggy.io/blog/top_5_local_llm_tools_and_models/
- https://gorilla.cs.berkeley.edu/leaderboard.html

---

Report generated: 2026-06-21
Focus: local and agentic-optimized models, with a path to broaden to all agentic-capable models next.

  </div>
</section>
