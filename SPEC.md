# Specification: Markdown Content Engine Integration

## 1. Context & Goal
Actualmente, la plataforma "AI Engineering Path" renderiza texto plano estático en la vista de detalle de cada subtema.
El objetivo de esta especificación es migrar el sistema a una arquitectura **Data-Driven basada en archivos Markdown (.md)**.
Cada subtema del índice tendrá su propio archivo de texto `.md` independiente dentro de una carpeta `/content`. Al hacer clic en una tarjeta, el sistema cargará, parseará y renderizará el Markdown con resaltado de sintaxis (Syntax Highlighting) para bloques de código.


## 2. Directory Structure

/ai-engineer-roadmap
├── index.html                  # Main layout (CDN links for Marked & Highlight)
├── style.css                   # Custom styles (no structural changes needed)
├── app.js                      # Core JS (manages state and fetches markdown)
└── /content                    # New folder containing raw study notes
    ├── 1.1-what-is-ai-eng.md   # Sample markdown file
    └── 1.2-roles.md            # Sample markdown file


## 3. Dependencies (Required CDN in index.html)

Deben agregarse estas tres líneas dentro de la sección <head> de index.html si no están presentes:
Marked.js (Traductor de Markdown a HTML):
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
Highlight.js (Resaltador de sintaxis - Tema Dracula):
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/dracula.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>


## 4. Data Structure Adaptation (app.js)
El array nodesList debe modificarse para que en lugar de recibir una lista de strings en topics, reciba una lista de objetos con el título del botón y la ruta física al archivo Markdown correspondiente.
Ejemplo de esquema para nodesList:

const nodesList = [
    { 
        id: "1", 
        title: "1. Introduction", 
        desc: "El rol del AI Engineer en la industria.", 
        topics: [
            { title: "What is an AI Engineer?", file: "content/1.1-what-is-ai-eng.md" },
            { title: "Roles and Responsibilities", file: "content/1.2-roles.md" }
        ] 
    }
];


## 5. JavaScript Implementation Steps (app.js)

**A. Generación de Tarjetas (Topics Grid):** Al renderizar las tarjetas en loadActiveNode(), debemos pasar el objeto de tópico completo (con su título y ruta de archivo) al evento de escucha del clic:
```javascript
// En la función loadActiveNode()
node.topics.forEach(topic => {
    // ...
    card.addEventListener('click', () => showTopicDetail(topic)); // Pasamos el objeto completo
});
```

**B. Carga y Renderizado Dinámico (showTopicDetail):** La función showTopicDetail debe ser asíncrona (async/await) y realizar el siguiente flujo:
1.  Hacer un `fetch()` a la ruta del archivo especificada en `topic.file` para obtener el texto plano del Markdown.
2.  Si la petición es exitosa, convertir el texto plano a HTML usando `marked.parse(markdownText)`.
3.  Poblar los elementos de la vista de detalle:
    *   Inyectar el título (`topic.title`) en el elemento `#topic-detail-title`.
    *   Inyectar el HTML resultante en el contenedor `#topic-detail-body`.
4.  Ejecutar el resaltador de sintaxis en todos los bloques de código recién inyectados: `hljs.highlightAll()`.
5.  Manejar la visibilidad de los paneles para mostrar la vista de detalle y ocultar la grilla (la lógica actual ya hace esto).
6.  **Manejo de errores:** Si el `fetch()` falla (ej. error 404), mostrar un mensaje amigable en `#topic-detail-body`, como `"Error: No se pudo cargar el contenido."`.


## 6. CSS Requirements (style.css)
El CSS actual ya soporta el desbordamiento de contenido en la vista de detalle. Solo se necesita asegurar que los estilos del tema `dracula.min.css` se apliquen correctamente a los bloques `<pre><code>` generados por `marked.js`. No se requieren cambios estructurales en `style.css`.