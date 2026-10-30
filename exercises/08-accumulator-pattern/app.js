/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `

flowchart TD
    A("Start") --> B["total = 0"]
    B --> C{"More items?"}
    C -->|Yes| D["Read price"]
    D --> E["total = total + price"]
    E --> C
    C -->|No| F["Show total"]
    F --> G("End")

`;

module.exports = answer.trim();