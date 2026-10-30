/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
   A("Start") --> B["Read light color"]
   B["Read light color"] --> C{"Light color?"}
   C -->|Green| D["Go"]
   C -->|Yellow| E["Slow down"]
   C -->|Red| F["Stop"]
   D["Go"] --> G["Continue"]
   E["Slow down"] --> G["Continue"]
   F["Stop"] --> G["Continue"]
   G["Continue"] --> H("End")
`;

module.exports = answer.trim();