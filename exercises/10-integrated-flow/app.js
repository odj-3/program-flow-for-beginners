/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `

flowchart TD
    A("Start") --> B["Select product"]
    B --> C{"Valid selection?"}
    C -->|No| D["Show error"]
    D --> B
    C -->|Yes| E["Insert money"]
    E --> F{"Enough money?"}
    F -->|No| G["Insert more money"]
    G --> E
    F -->|Yes| H["Dispense product"]
    H --> I["Return change"]
    I --> J("End")

`;

module.exports = answer.trim();