# AURA Protocol — Attribution & Usage Reporting for AI

**Version 0.1 – July 2025**

AURA is an open protocol for documenting, attributing, and verifying the use of generative artificial intelligence in the creation or editing of content. It is designed to promote transparency, reproducibility, and authorship integrity in an age where AI systems can produce human-like output at scale.

---

## 🌐 Why AURA?

While AI-generated content is rapidly becoming mainstream, there is no established technical or ethical framework for reporting its origin, model usage, or degree of human intervention. AURA provides a transparent and verifiable system to:

- Standardize the citation of AI involvement.
- Generate persistent metadata for content provenance.
- Encourage responsible use of generative models.
- Avoid disincentivizing transparency or intellectual honesty.

---

## 📦 What is the AURA Block?

The AURA Block is a structured metadata unit (in JSON or YAML) that captures key information about how a piece of content was generated or modified with AI tools.

### Example

```json
{
  "aura_version": "0.1",
  "uid": "AURA-2025-000001",
  "timestamp": "2025-07-11T23:10Z",
  "model": "ChatGPT 4.0",
  "provider": "OpenAI",
  "prompt": "Describe the impact of AI on education",
  "user_edit": false,
  "content_hash": "a0f4c9bd7e...",
  "license": "CC-BY-4.0",
  "notes": "Generated content with no user revision."
}
