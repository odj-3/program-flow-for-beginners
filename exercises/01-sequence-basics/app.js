/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Reemplaza el contenido del literal de cadena `answer` con tu diagrama Mermaid.

Mantén este formato:
    const answer = `...`;
    module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A("Start") --> B["Calentar el agua"]
    B["Calentar el agua"] --> C["Preparar café"]
    C["Preparar café"] --> D["Servir café"]
    D["Servir café"] --> E("End")

`;

module.exports = answer.trim();