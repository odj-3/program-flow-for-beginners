/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `

flowchart TD
    A("Start") --> B["i = 1"]
    B --> C{"i <= 5?"}
    C -->|Yes| D["Grade assignment i"]
    D --> E["i = i + 1"]
    E --> C
    C -->|No| F["Show summary"]
    F --> G("End")

`;

module.exports = answer.trim();