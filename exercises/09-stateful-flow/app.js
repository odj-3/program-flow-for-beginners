/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `

flowchart TD
    A("Start") --> B["Locked"]
    B -->|Coin| C["Unlocked"]
    B -->|Push| B
    C -->|Push| D["Person passes"]
    D --> B
    C -->|Coin| C
    B -->|No more events| E("End")
    C -->|No more events| E

`;

module.exports = answer.trim();