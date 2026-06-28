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
    {
        id: "2",
        title: "2. LLMs 101",
        desc: "El estudio del \"cerebro\" desde su arquitectura básica. Comprender qué es un Transformer, cómo funciona la atención, la tokenización y la naturaleza probabilística de la generación de texto para saber qué esperar de cada modelo.",
        topics: [
            {
                title: "¿Qué es un LLM?",
                content: "Dejemos la ciencia ficción de lado, ya que un LLM no es magia ni un ente con consciencia propia intentando dominar el mundo. En su forma más fundamental, es software avanzado y un motor estadístico masivo impulsado por redes neuronales (específicamente modelos *Transformer*),. Toda su arquitectura está diseñada para una única tarea principal: predecir cuál es el siguiente fragmento de texto (*token*) más lógico en una secuencia,.\n\nCuando le envías un *prompt*, el modelo no \"piensa\" la respuesta completa de antemano. En su lugar, funciona calculando la probabilidad condicional de cada posible siguiente palabra basándose estrictamente en el contexto que vino antes. A través de este proceso probabilístico, va eligiendo y generando el texto paso a paso de forma secuencial (*Autoregressive Models*),.\n\nAunque predecir el siguiente *token* parece una tarea simple, el lenguaje humano naturalmente codifica conocimiento fáctico, pasos lógicos y patrones de comunicación. Al exponer el modelo a cantidades masivas de texto (código, libros, artículos), la máquina internaliza estos patrones, lo que le otorga la capacidad emergente de razonar, resumir o escribir código de manera asombrosa,.\n\n*Source: AI Engineering Path & AI Engineering Guidebook*"
            },
            {
                title: "Tokenización",
                content: "Para que un LLM procese lenguaje humano, primero necesitamos resolver un problema de arquitectura fundamental: las redes neuronales solo entienden números, no texto crudo. El flujo de datos arranca pasando nuestro *prompt* por un **`tokenizer`**, una herramienta que actúa como el traductor inicial del sistema. Su trabajo es despedazar el texto de entrada en unidades más pequeñas llamadas *tokens*, que pueden ser palabras completas, fragmentos de palabras o incluso signos de puntuación.\n\nEl motivo por el que el sistema no corta simplemente el texto por espacios es puramente por escalabilidad. Utilizar *subword tokens* permite que el modelo maneje palabras nuevas, raras o en otros idiomas dividiéndolas en fragmentos más pequeños que ya existen en su memoria. Este enfoque arquitectónico mantiene el tamaño del vocabulario manejable y le permite a la IA procesar prácticamente cualquier entrada de manera eficiente.\n\nUna vez que el texto está fragmentado, el **`tokenizer`** busca cada pieza en su diccionario interno y la reemplaza por un identificador numérico entero y único. La salida de este proceso es una secuencia matemática de **`input_ids`**. Esta lista cruda de números es el verdadero combustible que ingresará al chasis del modelo para la siguiente etapa de procesamiento.\n\n*Source: Hands-On Large Language Models & AI Engineering Guidebook*"
            },
            {
                title: "Embeddings de Tokens",
                content: "Ya tenemos nuestros **`input_ids`** gracias al **`tokenizer`**, pero para la red neuronal esos números son solo etiquetas arbitrarias sin valor semántico, como si fueran números de DNI. Para que el modelo realmente pueda procesar la información, necesita traducir esos identificadores a un formato donde la relación y el significado entre los conceptos puedan calcularse matemáticamente.\n\nAcá es donde entran en juego los *Token Embeddings*, mapeando cada **`input_id`** a un vector denso (una lista de números de punto flotante) que funciona como sus coordenadas exactas dentro de un espacio multidimensional masivo. Gracias a esta arquitectura, los *tokens* que representan conceptos con significados similares terminan ubicados físicamente muy cerca unos de otros en ese espacio matemático.\n\nEl resultado de esta etapa es que la secuencia cruda de números se transforma en una matriz de embeddings rica en el significado base de cada palabra. Con estas coordenadas listas, los datos ya tienen la estructura correcta para ingresar al chasis principal del modelo: los bloques del *Transformer*, donde las palabras empezarán a interactuar entre sí para entender el contexto global de tu *prompt*.\n\n*Source: Hands-On Large Language Models & AI Engineering Path*"
            },
            {
                title: "El Bloque Transformer",
                content: "Ya con la matriz de *Token Embeddings* lista, la información ingresa al verdadero motor del sistema: la pila de *Transformer Blocks*. A diferencia de las arquitecturas neuronales antiguas que leían el texto palabra por palabra de forma secuencial, este chasis permite que todos los *tokens* fluyan y se procesen en paralelo. Cada bloque actúa como una estación de refinamiento por donde pasa tu *prompt* para que el modelo construya una comprensión cada vez más profunda y compleja del texto.\n\nDentro de cada bloque, el flujo de datos atraviesa dos componentes críticos. Primero, pasan por una capa de *Self-Attention* (el motor de contexto que analizaremos en el próximo nodo) y luego ingresan a una *Feedforward Neural Network*. Para evitar que esta tubería matemática colapse o se descontrole tras pasar por decenas de bloques apilados, los datos se estabilizan continuamente utilizando técnicas como *Layer Normalization* y conexiones residuales.\n\nLo más interesante desde nuestro enfoque de arquitectos es la división de responsabilidades. Mientras que la capa de atención se encarga de analizar cómo se relacionan las palabras actuales de tu *prompt* entre sí, las capas *Feedforward* actúan como el verdadero depósito de conocimiento a largo plazo del modelo. Es en los pesos de estas redes densas donde reside la \"memoria\" fáctica y los conceptos que la IA internalizó tras leer medio internet durante su entrenamiento.\n\n*Source: Hands-On Large Language Models & AI Engineering Guidebook*"
            },
            {
                title: "El Mecanismo de Atención",
                content: "Cuando procesamos lenguaje, el significado de una palabra cambia drásticamente según su entorno. Para resolver esto sistémicamente, el motor del *Transformer* utiliza el *Self-Attention Mechanism*. En lugar de procesar cada *token* de forma aislada, este mecanismo le permite al modelo \"mirar hacia atrás\" y calcular qué tanta relevancia debe prestarle a cada una de las palabras anteriores de tu *prompt* mientras procesa la palabra actual.\n\nEl flujo de datos funciona creando tres representaciones matemáticas para cada *token*: **`Queries`** (la información que el *token* actual está buscando), **`Keys`** (las etiquetas de lo que los *tokens* anteriores tienen para ofrecer) y **`Values`** (el contenido real o significado de esos *tokens*). El sistema multiplica el vector **`Query`** del *token* actual por la matriz de **`Keys`** de los *tokens* previos para calcular un *relevance score* exacto entre las palabras.\n\nUna vez que esos puntajes matemáticos se normalizan usando una función **`softmax`** (para convertirlos en probabilidades que sumen 1), el sistema los multiplica por la matriz de **`Values`**. El resultado final es que la representación matemática cruda de tu palabra se transforma en un vector enriquecido que absorbió el contexto de toda la oración. Esto es lo que le da al LLM su \"magia\", permitiéndole seguir el hilo de una conversación larga, entender referencias cruzadas o captar dependencias a gran distancia dentro del texto.\n\n*Source: Hands-On Large Language Models & AI Engineering Guidebook*"
            },
            {
                title: "Decodificación y Muestreo",
                content: "Una vez que los bloques del *Transformer* y el motor de *Attention* terminan de procesar todo el contexto, la máquina debe tomar una decisión final. La última capa de la red escupe una lista masiva de puntajes crudos llamados **`logits`**, donde cada número corresponde a un posible siguiente *token* dentro de su vocabulario. Para que estos números tengan utilidad real, atraviesan una función matemática llamada **`softmax`**, que los normaliza y los convierte en una distribución de probabilidad limpia que suma exactamente 1 (o 100%). Esto le dice al sistema qué tan probable es cada fragmento para continuar tu *prompt*.\n\nCon las probabilidades sobre la mesa, llega el momento de elegir. El enfoque más básico es el *greedy decoding*, que consiste en seleccionar siempre el *token* con la probabilidad más alta. Aunque suena lógico, en la práctica esto suele generar textos robóticos, atrapados en bucles y muy repetitivos. Para que la IA suene natural y humana, los motores modernos utilizan *sampling* (muestreo): en lugar de quedarse ciegamente con el ganador absoluto, eligen el siguiente *token* al azar pero respetando su peso estadístico. Si una palabra tiene un 30% de probabilidad, el sistema la elegirá el 30% de las veces.\n\nComo arquitectos, acá es donde tomamos el control del comportamiento del modelo. Modificando el parámetro de **`temperature`**, alteramos esa distribución de probabilidades justo antes del *sampling*: una temperatura baja (cercana a 0) concentra las probabilidades y hace que el modelo sea determinista y analítico, mientras que una alta aplana la curva, volviéndolo mucho más creativo y caótico. Además, para evitar que la creatividad termine en alucinaciones puras, aplicamos filtros dinámicos como **`top_k`** (que restringe la ruleta solo a los \"K\" tokens más probables) o **`top_p`** (que limita las opciones hasta que la suma de sus probabilidades alcance un porcentaje \"P\").\n\n*Source: Hands-On Large Language Models & AI Engineering Guidebook*"
            }
        ]
    },
    {
        id: "3",
        title: "3. Types of Models",
        desc: "Evaluación y clasificación del ecosistema: Modelos Propietarios (comerciales en la nube) frente a modelos Open Source (código abierto con pesos libres). Entender sus diferencias de arquitectura, licencias y potencial.",
        topics: [
            {
                title: "El Paradigma Pre-entrenado (Del Motor al Ecosistema)",
                content: "En el nodo anterior vimos cómo fluyen los datos por la matemática interna del *Transformer*. Pero en la práctica, como *AI Engineers*, no nos ponemos a ensamblar ese motor desde cero, ya que el enfoque sistémico actual se basa en consumir *Foundation Models* pre-entrenados. Durante su fase inicial de *pre-training*, estos modelos utilizan un enfoque *self-supervised* procesando cantidades masivas de texto crudo para aprender a predecir el siguiente *token*. Esta arquitectura les permite absorber la gramática y hechos del mundo a gran escala sin depender del costoso y lento proceso de etiquetado manual humano.\n\nComo resultado de este entrenamiento masivo, obtenemos un modelo base generalista que actúa como un \"cerebro\" crudo, capaz de entender el lenguaje y resolver múltiples tareas *out-of-the-box*. Sin embargo, estos modelos recién salidos de fábrica vienen \"desnudos\", no tienen memoria sobre interacciones pasadas, ni acceso a bases de datos corporativas, ni capacidad para ejecutar acciones por sí solos.\n\nAcá es donde conectamos el motor con el resto del ecosistema. Nuestro rol principal como orquestadores es tomar estos modelos pre-entrenados, ya sean de la familia *Llama, Claude* o *Gemini*, e integrarlos mediante APIs y código a un producto de software real. En lugar de investigar y entrenar redes neuronales, le diseñamos el \"cuerpo\" a ese cerebro para que pueda interactuar de forma segura y predecible con el entorno del usuario.\n\n*Source: AI Engineering Path, AI Engineering Guidebook & AI Engineering*"
            },
            {
                title: "La División del Ecosistema: Open vs. Closed Source",
                content: "En la práctica, una vez que decidimos usar un *Foundation Model*, nos encontramos con la gran bifurcación del ecosistema actual: ¿consumimos un modelo cerrado o uno abierto? Esta elección define fundamentalmente la arquitectura de nuestro sistema y cómo van a fluir los datos, dividiendo el mercado entre modelos *Closed Source* y *Open Source* (o más precisamente, *Open Weights*).\n\nEl camino de los modelos propietarios (*Closed Source*) implica que el \"cerebro\" corre en la infraestructura de un gigante tecnológico. Como arquitectos, nos comunicamos con él enviando nuestro contexto a través de una API en la nube. Es la ruta de menor fricción para salir a producción, pero sistémicamente significa delegar el procesamiento a una \"caja negra\" donde no tenemos acceso a los pesos internos y los datos abandonan definitivamente nuestro entorno.\n\nLa alternativa descentralizada es el paradigma *Open Source*. Acá descargamos el modelo directamente desde repositorios como el *Hugging Face Hub* y lo levantamos en nuestra propia infraestructura usando motores de inferencia locales. Al aislar la ejecución (*Self-Hosting*), garantizamos que la información nunca salga de nuestras máquinas, obteniendo privacidad total sobre los datos del usuario, aunque a cambio asumimos la responsabilidad técnica de mantener el hardware y el entorno de ejecución.\n\n*Source: AI Engineer Roadmap, AI Engineering Path & AI Engineering Guidebook*"
            },
            {
                title: "Modelos Propietarios (Closed Source)",
                content: "Cuando elegimos integrar un modelo propietario (como GPT-4 o Gemini), estamos optando por una arquitectura donde los pesos (*weights*) y el código interno del modelo se mantienen en secreto. Desde el punto de vista del flujo de datos, interactuamos con una caja negra gestionada íntegramente por el proveedor, accediendo a ella de forma exclusiva a través de una *API*,. En este escenario, todo el cómputo de *inference* ocurre en la infraestructura del tercero, donde enviamos nuestro contexto y simplemente esperamos recibir los *tokens* generados de vuelta.\n\nLa gran ventaja de esta decisión de diseño es que nos quita de encima el dolor de cabeza del hardware. Como *AI Engineers*, no necesitamos aprovisionar ni mantener costosos clústeres de GPUs para levantar estos monstruos matemáticos; el proveedor se encarga de la escalabilidad. Esto permite iterar y lanzar productos a producción rapidísimo, apoyándonos en modelos que actualmente suelen ser los más potentes del mercado \"out-of-the-box\".\n\nSin embargo, el precio a pagar por esta comodidad es la pérdida drástica de control sobre el sistema base. Cada vez que hacemos una llamada a la *API*, la información abandona nuestro entorno seguro, lo que introduce serios riesgos de privacidad y fugas de datos de nuestros clientes,. Además, quedamos atados a los costos por *token* del ecosistema cerrado y a sus decisiones comerciales: si la empresa actualiza, sobre-censura o retira el modelo, nuestro producto puede romperse de un día para el otro porque es imposible \"congelar\" y guardar localmente una versión específica de un modelo comercial,,.\n\n*Source: AI Engineering Path, AI Engineering & ai-engineer-roadmap/roadmap.json*"
            },
            {
                title: "Open Source y Open Weights",
                content: "La otra cara de la moneda son los modelos **Open Source** o, para ser más precisos en esta industria, **Open Weights** (pesos abiertos). A diferencia del software tradicional donde tenés todo el código fuente, acá lo que liberan empresas como Meta (**`Llama`**) o **`Mistral AI`** son los miles de millones de parámetros matemáticos ya entrenados. Esto te da el poder de descargar el cerebro crudo desde repositorios como **`Hugging Face`**, que actúa como el verdadero hub central de este ecosistema.\n\nDesde la perspectiva arquitectónica, esta ruta te da **control absoluto y privacidad total**. Como el modelo corre directamente en tu propia infraestructura local, los datos de tus usuarios nunca viajan a servidores de terceros, lo cual es crítico para empresas con reglas estrictas de seguridad. Además, tener los pesos en la mano es el único camino posible si necesitas hacer un **fine-tuning** profundo para adaptar el modelo a tareas de nicho súper específicas.\n\nPero no todo es color de rosa. El costo oculto de los **`Open Weights`** es la carga operativa. Ahora la responsabilidad técnica de levantar los servidores de inferencia, optimizar la latencia y lidiar con la gestión de clústeres de **GPUs** recae enteramente sobre tus hombros como AI Engineer. Pasás de ser un simple consumidor de una **`API`** a ser el administrador de una infraestructura pesada.\n\n*Source: AI Engineer Roadmap & AI Engineering Path*"
            },
            {
                title: "APIs de Modelos vs. Self-Hosting",
                content: "Al decidir entre consumir **Model APIs** o ir por el camino del **Self-Hosting**, la balanza ha cambiado drásticamente en los últimos años. Usar una **`API`** comercial sigue siendo la ruta de menor fricción para prototipar: simplemente envías tu *prompt*, delegás la infraestructura al proveedor y pagás por el uso exacto de tus *tokens*. Sin embargo, montar tu propio servidor de inferencia pasó de ser una pesadilla técnica reservada para gigantes *Cloud* a una realidad completamente accesible para el desarrollador promedio gracias a la evolución de la industria,.\n\nEste cambio fue posible porque la arquitectura interna de los modelos mutó hacia sistemas **MoE (Mixture of Experts)**. En lugar de encender toda la red neuronal para cada palabra, estos modelos activan solo una pequeña fracción de \"expertos\" por cada *token*, permitiendo escalar la inteligencia del sistema sin multiplicar su costo computacional,. Si a esta eficiencia sistémica le sumamos técnicas agresivas de **quantization** (que comprimen matemáticamente los pesos del modelo a formatos ultra livianos como **`GGUF`**), el resultado es brutal: hoy podés correr IA de nivel empresarial de forma local. Con la masificación de **TPUs** en notebooks y chips como el *Apple Neural Engine* que traen hardware nativo para inteligencia artificial, ejecutar un modelo pesado en tu propia máquina pasó a ser rápido y altamente eficiente.\n\nFinalmente, esta democratización del hardware se cruza con un factor crítico que todo *AI Engineer* debe dominar: la geopolítica y la privacidad. Consumir una **`API`** implica inevitablemente que los datos sensibles abandonen tu entorno seguro hacia servidores ajenos. Por cuestiones de soberanía de datos y seguridad nacional, cada vez más países e instituciones prohíben por ley que su información cruce fronteras o sea procesada por terceros,. Ante este panorama, el viraje estratégico hacia el **Open Source** mediante **Self-Hosting** ya no es solo una preferencia técnica, sino un requisito arquitectónico obligatorio para garantizar privacidad absoluta y evitar el bloqueo de proveedores (*vendor lock-in*) en proyectos de alta confidencialidad,.\n\n*Source: AI Engineering, AI Engineering Guidebook & Hands-On Large Language Models*"
            }
        ]
    }
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