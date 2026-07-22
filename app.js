// --- BASE DE DATOS LOCAL ---
// Aquí es donde vive todo el contenido.
const nodesList = [
    {
        id: "1",
        title: "1. Introduction",
        desc: "El punto de partida para entender el ecosistema de la IA en 2026. Define el rol del AI Engineer como el arquitecto que integra modelos pre-entrenados en productos de software, diferenciándolo del investigador académico y estableciendo la mentalidad de \"orientación a producto\".",
        topics: [
            {
                title: "What is AI?",
                file: "content/1.1.md"
            },
            {
                title: "What is AI Engineering?",
                file: "content/1.2.md"
            },
            {
                title: "What is an AI Engineer and What Do They Do?",
                file: "content/1.3.md"
            },
            {
                title: "Why is This Role Necessary?",
                file: "content/1.4.md"
            },
            {
                title: "Use Cases (Where It's Applied)",
                file: "content/1.5.md"
            }
        ]
    },
    {
        id: "2",
        title: "2. LLMs 101",
        desc: "El estudio del \"cerebro\" desde su arquitectura básica. Comprender qué es un Transformer, cómo funciona la atención, la tokenización y la naturaleza probabilística de la generación de texto para saber qué esperar de cada modelo.",
        topics: [
            {
                title: "What is an LLM?",
                file: "content/2.1.md"
            },
            {
                title: "Tokenization",
                file: "content/2.2.md"
            },
            {
                title: "Token Embeddings",
                file: "content/2.3.md"
            },
            {
                title: "The Transformer Block",
                file: "content/2.4.md"
            },
            {
                title: "The Attention Mechanism",
                file: "content/2.5.md"
            },
            {
                title: "Decoding and Sampling",
                file: "content/2.6.md"
            }
        ]
    },
    {
        id: "3",
        title: "3. Types of Models",
        desc: "Evaluación y clasificación del ecosistema: Modelos Propietarios (comerciales en la nube) frente a modelos Open Source (código abierto con pesos libres). Entender sus diferencias de arquitectura, licencias y potencial.",
        topics: [
            {
                title: "The Pre-trained Paradigm (From Engine to Ecosystem)",
                file: "content/3.1.md"
            },
            {
                title: "The Ecosystem Division: Open vs. Closed Source",
                file: "content/3.2.md"
            },
            {
                title: "Proprietary Models (Closed Source)",
                file: "content/3.3.md"
            },
            {
                title: "Open Source and Open Weights",
                file: "content/3.4.md"
            },
            {
                title: "Model APIs vs. Self-Hosting",
                file: "content/3.5.md"
            }
        ]
    },
    {
        id: "4",
        title: "4. The AI Workbench",
        desc: "Antes de interactuar con cualquier modelo de IA, un AI Engineer debe preparar su entorno de desarrollo. En este nodo se aprende la disciplina de aislamiento y seguridad que exige la industria.",
        topics: [
            {
                title: "Why Python and the Professional Environment",
                file: "content/4.1.md"
            },
            {
                title: "Project Architecture and Modularity",
                file: "content/4.2.md"
            },
            {
                title: "Virtual Environments and Dependencies",
                file: "content/4.3.md"
            },
            {
                title: "Secrets Management",
                file: "content/4.4.md"
            },
            {
                title: "Code Formatting and Linting",
                file: "content/4.5.md"
            },
            {
                title: "Version Control (Git & GitHub)",
                file: "content/4.6.md"
            }
        ]
    },
    {
        id: "5",
        title: "5. Model Selection & Running",
        desc: "Aprender a elegir el modelo correcto para cada proyecto, evaluando las métricas clave (costo, latencia, contexto) tanto para APIs en la nube como para modelos locales. Implementación práctica con Gemini y Ollama.",
        topics: [
            {
                title: "Matching the Model to the Project",
                file: "content/5.1.md"
            },
            {
                title: "The Decision Matrix (Strategy and Cloud APIs)",
                file: "content/5.2.md"
            },
            {
                title: "The Decision Matrix (Local Hardware and Open Weights)",
                file: "content/5.3.md"
            },
            {
                title: "Cloud APIs (The Fast Lane)",
                file: "content/5.4.md"
            },
            {
                title: "Local Inference with Ollama (The Private Lane)",
                file: "content/5.5.md"
            }
        ]
    },
    {
        id: "6",
        title: "6. Prompt Engineering",
        desc: "La ingeniería de la instrucción. Aprender a programar en lenguaje natural utilizando estructuras precisas (System, User, Assistant), técnicas de pocos ejemplos (Few-shot) y cadenas de pensamiento (CoT) para guiar al modelo hacia una respuesta exacta.",
        topics: [
            {
                title: "The Anatomy of a Prompt (System, User & Assistant)",
                file: "content/6.1.md"
            },
            {
                title: "In-Context Learning (Zero-Shot & Few-Shot Prompting)",
                file: "content/6.2.md"
            },
            {
                title: "Advanced Reasoning (Chain-of-Thought & Self-Consistency)",
                file: "content/6.3.md"
            },
            {
                title: "Structured Outputs (JSON Prompting)",
                file: "content/6.4.md"
            },
            {
                title: "Defensive Prompting (Security and Prompt Injections)",
                file: "content/6.5.md"
            }
        ]
    },
    {
        id: "7",
        title: "7. Context Engineering",
        desc: "La gestión de la memoria inmediata y el entorno del modelo. Consiste en seleccionar, filtrar y organizar qué información relevante se le entrega a la IA dentro de su ventana de contexto para evitar alucinaciones o sesgos por exceso de datos.",
        topics: [
            {
                title: "El Desafío del Contexto: CPU vs. RAM",
                file: "content/7.1.md"
            },
            {
                title: "Las 6 Dimensiones del Contexto (La Arquitectura de la Información)",
                file: "content/7.2.md"
            },
            {
                title: "Gestión de Memoria y Estado (Corto vs. Largo Plazo)",
                file: "content/7.3.md"
            },
            {
                title: "Compactación y Caché de Contexto (La Economía de 2M de Tokens)",
                file: "content/7.4.md"
            },
            {
                title: "Contexto Estático vs. Dinámico (Recuperación Just-in-Time)",
                file: "content/7.5.md"
            }
        ]
    },
    {
        id: "8",
        title: "8. Semantic Embeddings",
        desc: "Aborda desde la base teórica de qué es un vector hasta la implementación de modelos para transformar lenguaje en coordenadas matemáticas. Permite a las máquinas medir la similitud semántica entre conceptos sin depender de coincidencias exactas de palabras.",
        topics: [
            {
                title: "What are Semantic Embeddings? (From Words to Vectors)",
                file: "content/8.1.md"
            },
            {
                title: "Beyond Search: Use Cases for Embeddings",
                file: "content/8.2.md"
            },
            {
                title: "The Infrastructure: Cloud APIs vs Open Source",
                file: "content/8.3.md"
            },
            {
                title: "The Architecture of Search: Bi-Encoders vs Cross-Encoders (SBERT)",
                file: "content/8.4.md"
            },
            {
                title: "Vector Dimensionality & Latency (The Trade-off of Space)",
                file: "content/8.5.md"
            }
        ]
    },
    {
        id: "9",
        title: "9. Vector Databases",
        desc: "El depósito de memoria a largo plazo. Sistemas especializados como ChromaDB o Pinecone diseñados para almacenar y buscar billones de vectores de forma eficiente, permitiendo recuperar información relevante en milisegundos.",
        topics: [
            {
                title: "Purpose & Functionality (The Long-Term Memory)",
                file: "content/9.1.md"
            },
            {
                title: "Indexing Embeddings (HNSW & IVF)",
                file: "content/9.2.md"
            },
            {
                title: "Performing Similarity Search (k-NN vs ANN)",
                file: "content/9.3.md"
            },
            {
                title: "ChromaDB (Open-Source Infrastructure)",
                file: "content/9.4.md"
            },
            {
                title: "Hands-On: Semantic Storage (The Full Flow)",
                file: "content/9.5.md"
            }
        ]
    },
    {
        id: "10",
        title: "10. RAG (Retrieval Augmented Generation)",
        desc: "La arquitectura de \"examen a libro abierto\". Unifica la base de datos vectorial con el modelo de lenguaje para que la IA responda basándose en información privada y actualizada, eliminando la necesidad de re-entrenar modelos.",
        topics: [
            {
                title: "What is RAG? (The Open-Book Exam)",
                file: "content/10.1.md"
            },
            {
                title: "Data Ingestion & Chunking Strategies",
                file: "content/10.2.md"
            },
            {
                title: "The Retrieval Process & Reranking",
                file: "content/10.3.md"
            },
            {
                title: "Grounded Generation (The LLM Step)",
                file: "content/10.4.md"
            },
            {
                title: "Infrastructure: SDKs vs Orchestration Frameworks",
                file: "content/10.5.md"
            },
            {
                title: "Hands-On: Building a RAG System (The Complete Flow)",
                file: "content/10.6.md"
            }
        ]
    },
    {
        id: "11",
        title: "11. AI Agents",
        desc: "El paso de la respuesta a la ejecución autónoma. Construcción de sistemas que no solo generan texto, sino que razonan sobre una meta y planifican pasos intermedios para cumplir una misión, decidiendo por sí mismos cuándo y cómo interactuar con el entorno.",
        topics: [
            {
                title: "The AI Agent (Beyond Chatbots)",
                file: "content/11.1.md"
            },
            {
                title: "The ReAct Pattern (Reason + Act)",
                file: "content/11.2.md"
            },
            {
                title: "Manual Implementation (The Agent Loop)",
                file: "content/11.3.md"
            },
            {
                title: "Google Functions & Tools (Function Calling)",
                file: "content/11.4.md"
            },
            {
                title: "Agentic Pitfalls & Best Practices (Loops, Cost & Guardrails)",
                file: "content/11.5.md"
            },
            {
                title: "Hands-On: Building an Academic Agent",
                file: "content/11.6.md"
            }
        ]
    },
    {
        id: "12",
        title: "12. MCP (Model Context Protocol)",
        desc: "El estándar de conexión universal para la IA. Implementación del protocolo para crear \"enchufes\" seguros que permiten a cualquier modelo interactuar con herramientas externas, bases de datos SQL o el sistema operativo de forma estandarizada.",
        topics: [
            {
                title: "The Integration Problem & What is MCP?",
                file: "content/12.1.md"
            },
            {
                title: "MCP Architecture (Host, Client & Server)",
                file: "content/12.2.md"
            },
            {
                title: "The Data Layer (Tools, Resources & Prompts)",
                file: "content/12.3.md"
            },
            {
                title: "The Transport Layer (Local vs. Remote)",
                file: "content/12.4.md"
            },
            {
                title: "Building a \"Hello World\" MCP Server",
                file: "content/12.5.md"
            }
        ]
    },
    {
        id: "13",
        title: "13. Multimodal AI",
        desc: "La expansión sensorial del sistema. Implementación de capacidades para que un mismo modelo pueda procesar y razonar sobre múltiples tipos de datos de forma nativa, integrando visión, audio y video en el flujo de inferencia.",
        topics: [
            {
                title: "The Sensory Expansion & Use Cases",
                file: "content/13.1.md"
            },
            {
                title: "Architecture: How AI \"Sees\" (ViT & CLIP)",
                file: "content/13.2.md"
            },
            {
                title: "The Audio Modality (Speech-to-Text & Text-to-Speech)",
                file: "content/13.3.md"
            },
            {
                title: "Frameworks: Multimodal RAG & Agents",
                file: "content/13.4.md"
            },
            {
                title: "Hands-On: Multimodal Vision",
                file: "content/13.5.md"
            }
        ]
    },
    {
        id: "14",
        title: "14. AI Guardrails",
        desc: "La etapa de protección activa. Aplicación de marcos éticos y \"guardrails\" técnicos (filtros de seguridad y lógica de código) para asegurar que la IA responda dentro de límites seguros y confiables en producción.",
        topics: [
            {
                title: "What are Guardrails?",
                file: "content/14.1.md"
            },
            {
                title: "Types of Guardrails and The Data Flow",
                file: "content/14.2.md"
            },
            {
                title: "When to Choose Which Guardrails",
                file: "content/14.3.md"
            },
            {
                title: "Implementing Input Guardrails",
                file: "content/14.4.md"
            },
            {
                title: "Implementing Output Guardrails",
                file: "content/14.5.md"
            }
        ]
    }
    ,
    {
        id: "15",
        title: "15. AI Evals (Red Teaming)",
        desc: "La etapa de auditoría de calidad. Implementación de pruebas sistemáticas y métricas (determinísticas y basadas en modelos) para medir científicamente la precisión, sesgo y calidad de las respuestas antes del despliegue.",
        topics: [
            {
                title: "The Evaluation Dilemma: Benchmarks vs. Real-World Apps",
                file: "content/15.1.md"
            },
            {
                title: "Red Teaming: The Offensive Audit",
                file: "content/15.2.md"
            },
            {
                title: "The Evaluation Workflow (A Full Red Teaming Assessment)",
                file: "content/15.3.md"
            },
            {
                title: "LLM Vulnerabilities & Exploits",
                file: "content/15.4.md"
            }
        ]
    },
    {
        id: "16",
        title: "16. Deploy",
        desc: "Paso de script a servicio productivo. Empaquetado de aplicaciones de IA para el usuario final utilizando herramientas como Streamlit (web rápida) o PyInstaller (.exe), y su distribución en servidores cloud o infraestructura local (edge).",
        topics: [
            {
                title: "From Script to Service",
                file: "content/16.1.md"
            },
            {
                title: "Delivery Methods: Web (Streamlit) vs. Executable (PyInstaller)",
                file: "content/16.2.md"
            },
            {
                title: "Fast Web Interfaces (Streamlit)",
                file: "content/16.3.md"
            },
            {
                title: "The Edge: Packaging to .exe (PyInstaller)",
                file: "content/16.4.md"
            }
        ]
    },
    {
        id: "17",
        title: "17. Observability & Tracing",
        desc: "Monitoreo de la \"caja negra\" en tiempo real. Uso de logs y sistemas de trazabilidad para registrar cada paso del razonamiento de la IA, permitiendo detectar dónde se trabó un agente o por qué falló una recuperación de datos en producción.",
        topics: [
            {
                title: "Evaluation vs. Observability",
                file: "content/17.1.md"
            },
            {
                title: "Tracing the Black Box",
                file: "content/17.2.md"
            },
            {
                title: "Drift Detection",
                file: "content/17.3.md"
            },
            {
                title: "Hands-On: Vanilla Tracing Logger",
                file: "content/17.4.md"
            }
        ]
    },
    {
        id: "18",
        title: "18. AI-Augmented Development",
        desc: "Metodología de trabajo del ingeniero moderno. Integración de Spec-Driven Development (SDD) utilizando agentes de IA y herramientas de autocompletado para acelerar la creación de software robusto y documentado.",
        topics: [
            {
                title: "The Vibe Coding Era & Rapid Prototyping",
                file: "content/18.1.md"
            },
            {
                title: "AI Pair Programming & Technical Debt",
                file: "content/18.2.md"
            },
            {
                title: "Spec-Driven Development (SDD)",
                file: "content/18.3.md"
            },
            {
                title: "Hands-On: The Brewery App",
                file: "content/18.4.md"
            }
        ]
    }
];

let activeIndex = 0; // Control de página activa

document.addEventListener('DOMContentLoaded', () => {
    buildSidebar();
    loadActiveNode();

    // --- Eventos de Navegación Principal ---
    document.getElementById('btn-next').addEventListener('click', nextPage);
    document.getElementById('btn-prev').addEventListener('click', prevPage); 
    document.getElementById('btn-back-to-grid').addEventListener('click', showGridView);

    // --- Lógica del Menú Hamburguesa (Móvil) ---
    const btnToggle = document.getElementById('btn-toggle-sidebar');
    const sidebar = document.querySelector('.sidebar-panel');
    const btnClose = document.getElementById('btn-close-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    function toggleSidebar() {
        sidebar.classList.toggle('is-open');
        overlay.classList.toggle('hidden');
    }
    
    btnToggle.addEventListener('click', toggleSidebar);
    btnClose.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
});

function closeSidebarIfOpen() {
    const sidebar = document.querySelector('.sidebar-panel');
    if (sidebar.classList.contains('is-open')) {
        const overlay = document.getElementById('sidebar-overlay');
        sidebar.classList.remove('is-open');
        overlay.classList.add('hidden');
    }
}

// 1. DIBUJAR EL SIDEBAR
function buildSidebar() {
    const list = document.getElementById('nodes-list');
    list.innerHTML = "";
    
    nodesList.forEach((node, index) => {
        const li = document.createElement('li');
        li.className = `node-item ${index === activeIndex ? 'active' : ''}`;
        li.innerText = node.title;
        li.addEventListener('click', () => {
            activeIndex = index;
            closeSidebarIfOpen(); // Cierra el menú al seleccionar un tema
            updateUI();
        });
        list.appendChild(li);
    });
}

// 2. CARGAR EL CONTENIDO DEL NODO ACTIVO
function loadActiveNode() {
    const node = nodesList[activeIndex];
    
    // Títulos del Escenario
    // Modificación: ya no se actualiza el título del header, solo el del aula.
    document.getElementById('classroom-title').innerText = node.title;
    document.getElementById('classroom-desc').innerText = node.desc;

    // Grid de Subtemas
    const grid = document.getElementById('topics-grid');
    grid.innerHTML = "";
    
    node.topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = "topic-card";
        card.innerHTML = `<h4>${topic.title}</h4>`; 
        card.addEventListener('click', () => showTopicDetail(topic)); // Modificación: Llama a la nueva función
        grid.appendChild(card);
    });

    // Asegurarse de que siempre empecemos en la vista de grilla
    showGridView();
}

// 3. CAMBIAR DE PÁGINA (NAVEGACIÓN)
function nextPage() {
    if (activeIndex < nodesList.length - 1) {
        activeIndex++;
        updateUI();
    }
}

function prevPage() {
    if (activeIndex > 0) {
        activeIndex--;
        updateUI();
    }
}

function updateUI() {
    buildSidebar();
    loadActiveNode();
}

// 4. VISTAS DEL AULA (GRILLA vs DETALLE)
async function showTopicDetail(topic) { // Modificación: La función ahora es asíncrona
    // Referencias a los contenedores
    const classroomHeader = document.querySelector('.classroom-header');
    const gridView = document.getElementById('topics-grid');
    const detailView = document.getElementById('topic-detail-view');
    const navFooter = document.querySelector('.navigation-footer');
    const detailTitle = document.getElementById('topic-detail-title');
    const detailBody = document.getElementById('topic-detail-body');

    // Poblar título
    detailTitle.innerText = topic.title;

    // Lógica condicional para cargar contenido
    if (topic.file) {
        // --- NUEVO FLUJO ---
        detailBody.innerHTML = '<p>Cargando...</p>'; // Mensaje de carga
        try {
            const response = await fetch(topic.file);
            if (!response.ok) throw new Error(`Error ${response.status}: No se pudo encontrar el archivo.`);
            const markdownText = await response.text();
            detailBody.innerHTML = marked.parse(markdownText);
            hljs.highlightAll(); // Aplicar resaltado de sintaxis
        } catch (error) {
            console.error('Error al cargar el Markdown:', error);
            detailBody.innerHTML = `<p>Error: No se pudo cargar el contenido.</p>`;
        }
    } else {
        // --- FLUJO ANTIGUO (para retrocompatibilidad) ---
        detailBody.innerHTML = topic.content;
    }
    
    // Modificación: Ocultar todos los elementos del aula y mostrar solo la vista de detalle
    classroomHeader.classList.add('hidden');
    gridView.classList.add('hidden');
    navFooter.classList.add('hidden');
    detailView.classList.remove('hidden');
}

function showGridView() {
    // Referencias a los contenedores
    const classroomHeader = document.querySelector('.classroom-header');
    const gridView = document.getElementById('topics-grid');
    const detailView = document.getElementById('topic-detail-view');
    const navFooter = document.querySelector('.navigation-footer');

    // Modificación: Ocultar el detalle y restaurar la vista principal del aula
    detailView.classList.add('hidden');
    classroomHeader.classList.remove('hidden');
    gridView.classList.remove('hidden');
    navFooter.classList.remove('hidden');
}