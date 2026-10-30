/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
   A("Start") --> B["Ask for Age"]
   B["Ask for Age"] --> C{"Age >= 21?"}
   C -->|Yes| D["Check valid license"]
   C -->|No| G["Reject: no rental"]
   D["Check valid license"] --> E{"Valid license?"}
   E -->|Yes| F["Rent the car"]
   E -->|No| G["Reject: no rental"]
   F["Rent the car"] --> H("End")
   G["Reject: no rental"] --> H("End")
`;

module.exports = answer.trim();