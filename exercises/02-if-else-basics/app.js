/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `

flowchart TD
    A("Start") --> B["Ask for Age"]
    B["Ask for Age"] --> C{"Age >= 18?"}
    C -->|Yes| D["Can drink"]
    C -->|No| E["Cannot drink"]
    D["Can drink"] --> F("End")
    E["Cannot drink"] --> F("End")
`;

// Do not modify this
module.exports = answer.trim();