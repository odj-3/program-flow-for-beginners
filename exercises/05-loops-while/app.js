/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Ask password"]
    B --> C{"Password correct?"}
    C -->|Yes| D["Access granted"]
    C -->|No| E["Show error"]
    E --> B
    D --> F("End")
`;

module.exports = answer.trim();