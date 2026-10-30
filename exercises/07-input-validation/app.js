/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `

flowchart TD
    A("Start") --> B["Ask email"]
    B --> C{"Email valid?"}
    C -->|Yes| D["Continue registration"]
    C -->|No| E["Show error: invalid email"]
    E --> B
    D --> F("End")

`;

module.exports = answer.trim();