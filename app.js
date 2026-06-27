// --- BASE DE DATOS LOCAL ---
// Aquí es donde vive todo el contenido.
const nodesList = [
    {
        id: "1",
        title: "1. Introduction",
        desc: "El punto de partida para entender el ecosistema de la IA en 2026. Define el rol del AI Engineer como el arquitecto que integra modelos pre-entrenados en productos de software, diferenciándolo del investigador académico y estableciendo la mentalidad de \"orientación a producto\".",
        topics: [
            {
                title: "¿Qué es la IA?",
                content: "Dejemos la ciencia ficción de lado. Hoy en día, la Inteligencia Artificial Generativa no es magia ni son robots con consciencia propia intentando dominar el mundo. En su forma más fundamental, es software avanzado impulsado por Redes Neuronales (específicamente modelos Transformer) que ha sido entrenado con cantidades masivas de texto para predecir, generar y razonar sobre el lenguaje humano con una precisión asombrosa."
            },
            {
                title: "¿Qué es el AI Engineering?",
                content: "Si la Inteligencia Artificial es el \"cerebro\", el *AI Engineering* es el arte de construirle un \"cuerpo\" a ese cerebro para que pueda interactuar con el mundo real. Es la disciplina que se encarga de tomar estos modelos lingüísticos masivos (LLMs) y transformarlos en productos de software robustos, predecibles y seguros. Se trata de diseño de sistemas, no de investigación teórica."
            },
            {
                title: "¿Qué es un AI Engineer y qué hace?",
                content: "Acá es donde la mayoría se confunde. Un *AI Engineer* (Ingeniero de IA) **no** se dedica a crear ni a entrenar modelos desde cero. Esa es la tarea de los *AI Researchers* o los *ML Engineers*, quienes se enfocan en la matemática y la teoría profunda.\n\nEl *AI Engineer* es, ante todo, un constructor y un orquestador. Según el estándar de la industria, el ingeniero utiliza modelos pre-entrenados (como Gemini, Claude o Llama) y los integra mediante APIs y herramientas existentes para resolver problemas reales y mejorar la experiencia de los usuarios. Nuestro trabajo diario implica escribir código para conectar bases de datos, gestionar el contexto que se le envía a la IA, asegurarnos de que no alucine y darle herramientas para que actúe de forma autónoma."
            },
            {
                title: "¿Por qué es necesario este rol?",
                content: "Podrías preguntarte: *\"Si la IA ya hace todo, ¿para qué hace falta un ingeniero?\"*. La respuesta es simple: los modelos base vienen \"desnudos\". Un LLM recién salido de fábrica no sabe quiénes son los clientes de tu empresa, no tiene acceso a tu base de datos de ventas, no puede apretar un botón en una página web y pierde la memoria en cada nueva conversación. El *AI Engineer* es el puente necesario para conectar la inteligencia cruda del modelo con la infraestructura de datos privada de una empresa."
            },
            {
                title: "Casos de uso (Dónde se aplica)",
                content: "Para bajar todo esto a la realidad, acá tenés ejemplos prácticos de lo que un AI Engineer construye en su día a día:\n\n- **Sistemas RAG (Chatbots sobre datos privados):** Un bot de recursos humanos que conoce todas las políticas internas de la empresa porque sabe buscar en los PDFs de la compañía antes de responder.\n- **Agentes Autónomos:** Un asistente de investigación que entra a internet, busca *papers* médicos, los resume, extrae los datos clave y arma un reporte en Excel automáticamente.\n- **Herramientas de Análisis Multimodal:** Un sistema que permite subir la foto de una factura arrugada y extrae el monto, el proveedor y la fecha para cargarlo en el sistema contable."
            }
        ]
    },
];

let activeIndex = 0; // Control de página activa

document.addEventListener('DOMContentLoaded', () => {
    buildSidebar();
    loadActiveNode();

    // Eventos de botones
    document.getElementById('btn-next').addEventListener('click', nextPage);
    document.getElementById('btn-prev').addEventListener('click', prevPage); 
    document.getElementById('btn-back-to-grid').addEventListener('click', showGridView); // Modificación: Nuevo evento para el botón de volver
});

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

    // Actualizar barra de progreso
    const fill = document.getElementById('progress-fill');
    const percentage = ((activeIndex + 1) / nodesList.length) * 100;
    fill.style.width = `${percentage}%`;

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
function showTopicDetail(topic) {
    // Referencias a los contenedores
    const classroomHeader = document.querySelector('.classroom-header');
    const gridView = document.getElementById('topics-grid');
    const detailView = document.getElementById('topic-detail-view');
    const navFooter = document.querySelector('.navigation-footer');

    // Poblar el contenido del detalle (ahora usamos el objeto 'topic')
    document.getElementById('topic-detail-title').innerText = topic.title;
    // Usamos innerHTML para renderizar saltos de línea y otros formatos HTML si los hubiera
    document.getElementById('topic-detail-body').innerHTML = topic.content.replace(/\n/g, '<br>');

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