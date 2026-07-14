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
                file: "content/1.1.md"
            },
            {
                title: "¿Qué es el AI Engineering?",
                file: "content/1.2.md"
            },
            {
                title: "¿Qué es un AI Engineer y qué hace?",
                file: "content/1.3.md"
            },
            {
                title: "¿Por qué es necesario este rol?",
                file: "content/1.4.md"
            },
            {
                title: "Casos de uso (Dónde se aplica)",
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
                title: "¿Qué es un LLM?",
                file: "content/2.1.md"
            },
            {
                title: "Tokenización",
                file: "content/2.2.md"
            },
            {
                title: "Embeddings de Tokens",
                file: "content/2.3.md"
            },
            {
                title: "El Bloque Transformer",
                file: "content/2.4.md"
            },
            {
                title: "El Mecanismo de Atención",
                file: "content/2.5.md"
            },
            {
                title: "Decodificación y Muestreo",
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
                title: "El Paradigma Pre-entrenado (Del Motor al Ecosistema)",
                file: "content/3.1.md"
            },
            {
                title: "La División del Ecosistema: Open vs. Closed Source",
                file: "content/3.2.md"
            },
            {
                title: "Modelos Propietarios (Closed Source)",
                file: "content/3.3.md"
            },
            {
                title: "Open Source y Open Weights",
                file: "content/3.4.md"
            },
            {
                title: "APIs de Modelos vs. Self-Hosting",
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
                title: "Por qué Python y el Entorno Profesional",
                file: "content/4.1.md"
            },
            {
                title: "Arquitectura de Proyecto y Modularidad",
                file: "content/4.2.md"
            },
            {
                title: "Entornos Virtuales y Dependencias",
                file: "content/4.3.md"
            },
            {
                title: "Gestión de Secretos",
                file: "content/4.4.md"
            },
            {
                title: "Formateo de Código y Linting",
                file: "content/4.5.md"
            },
            {
                title: "Control de Versiones (Git & GitHub)",
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
                title: "Emparejando el Modelo con el Proyecto",
                file: "content/5.1.md"
            },
            {
                title: "La Matriz de Decisión (Estrategia y APIs en la Nube)",
                file: "content/5.2.md"
            },
            {
                title: "La Matriz de Decisión (Hardware Local y Pesos Abiertos)",
                file: "content/5.3.md"
            },
            {
                title: "APIs en la Nube (El Carril Rápido)",
                file: "content/5.4.md"
            },
            {
                title: "Inferencia Local con Ollama (El Carril Privado)",
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
                title: "La Anatomía de un Prompt (System, User & Assistant)",
                file: "content/6.1.md"
            },
            {
                title: "Aprendizaje en Contexto (Prompting Zero-Shot & Few-Shot)",
                file: "content/6.2.md"
            },
            {
                title: "Razonamiento Avanzado (Chain-of-Thought & Self-Consistency)",
                file: "content/6.3.md"
            },
            {
                title: "Salidas Estructuradas (JSON Prompting)",
                file: "content/6.4.md"
            },
            {
                title: "Prompting Defensivo (Seguridad e Inyecciones de Prompt)",
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
                content: `<p>Hasta ahora, nuestros proyectos han sido sistemas de software extremadamente inteligentes, pero vivían encerrados en una caja oscura y silenciosa donde solo entraba y salía texto plano. La <strong>Multimodal AI</strong> representa la expansión sensorial del sistema: literalmente le damos "ojos y oídos" al modelo para que pueda procesar, entender y razonar sobre múltiples tipos de datos (imágenes, video, audio y texto) de forma simultánea y nativa.</p><p>A nivel de arquitectura, esto no significa simplemente encadenar un transcriptor de voz tradicional antes de tu LLM. Significa que el motor interno del modelo aprendió a mapear píxeles y frecuencias de sonido en el mismo espacio semántico (espacio vectorial) donde viven las palabras. Cuando un modelo multimodal moderno analiza la foto de un cachorro, su representación matemática se activa exactamente en la misma región que la palabra "perro", rompiendo por completo la barrera técnica entre la visión y el lenguaje.</p><p>En producción, esta expansión sensorial cambia las reglas del juego y habilita casos de uso increíblemente potentes:</p><ul><li><strong>Visual Question Answering (VQA):</strong> Permite enviarle al modelo la foto de una factura arrugada o un gráfico arquitectónico complejo y hacerle preguntas lógicas sobre lo que está "viendo".</li><li><strong>Captioning:</strong> Generación automática de descripciones textuales para imágenes o videos, vital para accesibilidad y para estructurar datos visuales.</li><li><strong>Multimodal Search:</strong> Buscar imágenes utilizando texto descriptivo o buscar documentos utilizando imágenes de referencia, gracias a ese espacio vectorial compartido que mencionamos.</li><li><strong>Creative Generation:</strong> Flujos de trabajo de <em>Text-to-Image</em> o <em>Text-to-Video</em> donde la IA sintetiza nuevos activos visuales desde cero basándose en instrucciones de texto.</li></ul>`
            },
            {
                title: "Architecture: How AI \"Sees\" (ViT & CLIP)",
                content: `<p>Para que un LLM pueda procesar una imagen, primero tenemos que resolver un problema de arquitectura fundamental: los Transformers fueron diseñados para leer secuencias de palabras (tokens), no grillas de píxeles. La solución de la industria a este problema es el <strong>Vision Transformer (ViT)</strong> y su técnica de <strong>Patching</strong>.</p><p>En lugar de intentar procesar píxel por píxel de forma aislada, el sistema toma la imagen completa y la corta en una cuadrícula de pequeños "parches" cuadrados. Cada uno de estos parches se aplana y se proyecta matemáticamente en un vector. A partir de ese momento, la arquitectura trata a esos parches visuales exactamente igual que si fueran una secuencia de palabras en una oración, permitiendo usar la arquitectura Transformer estándar para procesar los datos.</p><p>Pero para que el sistema realmente entienda lo que está viendo y sea útil, necesitamos conectar esa visión con el lenguaje. Acá es donde entra en juego la arquitectura de modelos como <strong>CLIP</strong>. CLIP utiliza dos motores en paralelo: un <em>Text Encoder</em> y un <em>Image Encoder</em> (generalmente un ViT). El sistema procesa pares de imágenes con sus descripciones textuales y calcula la similitud entre ambos. A través de este entrenamiento, el modelo ajusta sus pesos para que el <em>embedding</em> de la foto de un gato y el <em>embedding</em> de la frase "una foto de un gato" queden matemáticamente pegados en el mismo espacio vectorial.</p><p>Este espacio vectorial compartido es la verdadera magia de la IA multimodal. Al lograr que el contenido visual y el texto hablen el mismo idioma matemático, permitimos que un sistema realice búsquedas semánticas de imágenes (buscando fotos solo con texto) o que analice una foto directamente como parte de su contexto.</p>`
            },
            {
                title: "The Audio Modality (Speech-to-Text & Text-to-Speech)",
                content: `<p>Darle "oídos" a nuestra arquitectura implica resolver la conversión de ondas de sonido a un formato que el modelo de lenguaje pueda procesar. La primera pieza de este puente es el <strong>Speech-to-Text (STT)</strong>, también conocido como <em>Automatic Speech Recognition</em> (ASR). Modelos especializados (como <strong>Whisper</strong>) toman el audio crudo del usuario y lo transcriben a texto escrito con una precisión altísima, manejando múltiples idiomas y acentos. En un flujo tradicional, esta transcripción es la que finalmente se inyecta como un <em>prompt</em> dentro de la ventana de contexto de nuestro sistema.</p><p>Para cerrar el ciclo conversacional y darle "voz" al sistema, aplicamos el proceso inverso: <strong>Text-to-Speech (TTS)</strong>. En la ingeniería de IA moderna, esto superó por completo a la lectura robótica de las décadas pasadas. Los modelos actuales toman el texto generado por la IA y sintetizan voz artificial logrando entonaciones naturales, pausas emocionales e incluso la clonación de voces específicas para crear interfaces inmersivas que se sienten humanas.</p><p>Sin embargo, la verdadera vanguardia de la multimodalidad es el <strong>Audio Processing</strong> nativo. En lugar de triangular pasando de audio a texto y luego al LLM, los modelos de frontera actuales procesan el archivo de audio de forma directa. Esto les permite entender matices que se pierden en una transcripción de texto, como el tono de voz (sarcasmo, tristeza), la identificación de múltiples hablantes, o el análisis de sonidos ambientales y música.</p>`
            },
            {
                title: "Frameworks: Multimodal RAG & Agents",
                content: `<p>En la arquitectura tradicional de RAG que construimos antes, extraíamos texto crudo, lo vectorizábamos y lo guardábamos. Pero en la vida real, los documentos corporativos o universitarios (como un PDF) no son solo texto plano; están llenos de gráficos, diagramas y tablas que contienen información crítica. Para resolver este problema, la industria utiliza frameworks especializados para construir arquitecturas de <strong>Multimodal RAG</strong>. A nivel de flujo de datos, el sistema ingesta el documento, separa el texto de las imágenes y utiliza modelos de <em>embeddings</em> (como CLIP) para proyectar ambas modalidades en un mismo espacio vectorial. Al recibir una consulta, el sistema recupera cruzando modalidades: trae tanto los párrafos de texto como las imágenes relevantes, y se los inyecta juntos en el contexto de un modelo multimodal para que redacte la respuesta final.</p><p>Por otro lado, cuando necesitamos que el sistema no solo lea información sino que tome decisiones sobre ella, utilizamos frameworks de orquestación para construir <strong>Multimodal Agents</strong>. En este paradigma, le damos al LLM central acceso a "herramientas visuales" dinámicas. Por ejemplo, si un usuario sube la foto de un auto chocado y pide un presupuesto, el agente entra en su bucle lógico: razona sobre la imagen, decide invocar una herramienta de análisis de daños (<em>Action</em>), recibe un reporte de las piezas rotas (<em>Observation</em>), y luego usa una herramienta de búsqueda web para cotizar los repuestos.</p><p>De esta manera, los frameworks de orquestación actúan como el "pegamento" sistémico. Nos salvan de tener que programar desde cero toda la lógica matemática para extraer imágenes de un PDF, indexarlas en una base de datos vectorial y coordinar los bucles de razonamiento visual.</p>`
            },
            {
                title: "Hands-On: Multimodal Vision",
                content: `<p>A nivel de arquitectura de sistemas, cuando queremos que nuestro modelo analice una imagen local, no le enviamos la ruta del archivo. Lo que hacemos es leer los <em>bytes</em> de la imagen y codificarlos en <strong>Base64</strong>. Esto convierte la imagen cruda en una cadena de texto inmensa que podemos inyectar de forma segura en nuestra carga útil (<em>payload</em>) HTTP hacia la API.</p><p>Además, en un entorno de producción, rara vez queremos que el modelo nos devuelva un párrafo libre describiendo la foto. Si estamos construyendo una aplicación que etiqueta imágenes automáticamente, necesitamos datos estructurados. Para resolver esto, combinamos la API de <em>Interactions</em> con <strong>Pydantic</strong> para definir un esquema estricto. El servidor de Google intercepta este esquema y restringe el motor de generación (usando <em>Structured Outputs</em>) para garantizar que el modelo solo pueda devolver un objeto JSON válido que coincida exactamente con nuestras variables.</p><p>Acá tenés el flujo completo y profesional para analizar una imagen de tu computadora:</p><img src="assets/images/node-13/node13-img1.png" alt="Análisis de imagen con Gemini y Pydantic">`
            }
        ]
    },
    {
        id: "14",
        title: "14. AI Safety and Ethics",
        desc: "La etapa de protección activa. Aplicación de marcos éticos y \"guardrails\" técnicos (filtros de seguridad y lógica de código) para asegurar que la IA responda dentro de límites seguros y confiables en producción.",
        topics: [
            {
                title: "The Security Landscape (Bias & Privacy)",
                content: `<p>En el desarrollo de software tradicional, la seguridad suele tratarse de proteger bases de datos, gestionar roles y encriptar contraseñas. Sin embargo, al integrar modelos fundacionales, el paradigma cambia drásticamente debido a los nuevos riesgos de privacidad y exfiltración de datos. Como los LLMs son entrenados con volúmenes masivos de información, tienen la capacidad de memorizar y regurgitar sus datos de entrenamiento, lo que significa que un usuario malintencionado podría extraer información de identificación personal (PII) o secretos corporativos si interactúa con el modelo usando los <em>prompts</em> adecuados. Además, si utilizamos modelos cerrados a través de una API, existe el riesgo de que los datos sensibles que enviamos en nuestras consultas se utilicen para entrenar futuras versiones, provocando fugas accidentales de propiedad intelectual de la empresa.</p><p>Más allá de la privacidad de los datos, el otro gran riesgo sistémico es el sesgo (<strong>Bias</strong>) y la equidad (<strong>Fairness</strong>). Dado que los modelos aprenden de textos crudos y sin filtrar extraídos de internet, inevitablemente heredan y hasta amplifican los estereotipos humanos, los sesgos raciales, de género o las alineaciones políticas. Si desplegamos un sistema de IA en producción sin aplicar una alineación adecuada, corremos el riesgo de que la aplicación genere contenido tóxico o discriminatorio que dañe a nuestros usuarios y a la reputación del producto.</p><p>Como arquitectos del sistema, no podemos simplemente confiar en que el modelo se comportará bien por defecto. Es nuestra responsabilidad técnica mitigar estos problemas desde el diseño de la infraestructura, ya sea balanceando meticulosamente los ejemplos si hacemos <em>fine-tuning</em>, o aplicando barreras de contención (<strong>guardrails</strong>) y técnicas de alineación para interceptar salidas tóxicas antes de que vean la luz.</p>`
            },
            {
                title: "Prompt Injections & Adversarial Testing",
                content: `<p>A nivel de arquitectura, el eslabón más débil de un sistema basado en LLMs es que procesa las instrucciones del backend y los datos del usuario a través del mismo canal: el lenguaje natural. Esto abre la puerta a los <strong>Prompt Injections</strong> y al <strong>Jailbreaking</strong>, ataques donde un usuario malintencionado manipula su mensaje para que el modelo ignore tus reglas de negocio y ejecute código malicioso o filtre información. Estos ataques pueden ser <em>directos</em> (pidiendo explícitamente "ignora tus instrucciones anteriores") o <em>indirectos</em>, donde las órdenes maliciosas están ocultas en datos externos que el modelo ingesta automáticamente, como un PDF manipulado o una página web.</p><p>Además de engaños lógicos, los sistemas enfrentan vulnerabilidades estructurales extrañas. Un ejemplo fascinante es el <em>Divergence Attack</em>, donde un atacante simplemente le pide al modelo que repita una misma palabra (por ejemplo, "poema") para siempre. Esta instrucción rompe la distribución de probabilidad de la red neuronal y hace que el modelo colapse, empezando a escupir datos privados memorizados de su set de entrenamiento, como números de teléfono o correos electrónicos reales.</p><p>Para descubrir estas vulnerabilidades antes de salir a producción, la industria estandarizó el <strong>Adversarial Testing</strong> o <strong>Red Teaming</strong>, que consiste en evaluar proactivamente la arquitectura intentando "atacarla" y romperla. Como testear esto a mano es inviable, los ingenieros utilizan herramientas automatizadas (como Garak, PyRIT o frameworks de evaluación como DeepTeam) que despliegan otros modelos de IA en el rol de atacantes. Estas IAs "hackers" generan iterativamente miles de inyecciones de prompt mutadas hasta encontrar una brecha en tu defensa.</p>`
            },
            {
                title: "Input Guardrails (Protection at the door)",
                content: `<p>Cuando un usuario envía un mensaje, no podemos pasarlo crudo directamente al modelo. La primera línea de defensa arquitectónica ocurre en nuestro propio backend, antes de hacer la llamada HTTP a la API. Una técnica fundamental acá es el enmascaramiento de datos o <strong>PII Redaction</strong>. Utilizando código tradicional (como expresiones regulares), interceptamos el texto y ocultamos información confidencial (como correos, contraseñas o tokens de acceso) reemplazándola por etiquetas vacías, garantizando que los secretos nunca viajen a los servidores del proveedor.</p><p>La segunda gran barrera es el <strong>Defensive Prompting</strong>. Para evitar que un atacante "hackee" el sistema mediante lenguaje natural, aplicamos delimitadores estrictos (como etiquetas XML <strong><code>&lt;user_input&gt;</code></strong>) para "enjaular" los datos ingresados y aislar la entrada del usuario del resto de nuestras instrucciones de sistema. A esto se le suma la famosa <strong>Sandwich Defense</strong>: como la red neuronal tiende a prestar mayor atención al principio y al final del texto, envolvemos los datos del usuario colocando nuestras reglas de seguridad antes y repitiéndolas estratégicamente justo después.</p><p>Finalmente, a nivel de la llamada a la API, la industria recomienda siempre inyectar <strong>End-user IDs</strong>. Al enviar un identificador único por cada cliente junto con el <em>prompt</em>, si un atacante logra vulnerar las defensas e inyectar código malicioso, el sistema nos permite rastrear, limitar la tasa de peticiones (rate-limit) o banear a ese usuario específico sin afectar el servicio para el resto de la aplicación.</p><p>Acá tenés un ejemplo en código de cómo implementamos estos tres conceptos en el backend antes de llamar al modelo:</p><img src="assets/images/node-14/node14-img1.png" alt="Implementación de Input Guardrails">`
            },
            {
                title: "Output Guardrails (Catching the failures)",
                content: `<p>En la arquitectura de nuestro sistema, los <strong>Output Guardrails</strong> actúan como la última línea de defensa en la "puerta de salida". Interceptan la respuesta generada por el LLM para evaluar distintos modos de falla justo antes de que se le muestre al usuario final. Su función principal es atrapar respuestas que rompan nuestros estándares de calidad, verificar que no haya contenido tóxico y asegurar que no se hayan generado textos que supongan un riesgo para la marca.</p><p>A nivel técnico, esto se implementa validando que la salida cumpla con formatos estrictos (como un JSON válido mediante muestreo restringido) o escaneando el texto en busca de filtraciones de datos. Si el <em>guardrail</em> detecta un problema, nuestra arquitectura puede ejecutar un <em>retry logic</em> automático: dado que los LLMs son probabilísticos, volver a hacer la consulta en <em>backend</em> suele generar una respuesta diferente que sí sea correcta. Si el error persiste o la solicitud es muy compleja, el sistema puede hacer un <em>fallback</em> (plan de contingencia) derivando la consulta a un operador humano.</p><p>El gran <em>trade-off</em> arquitectónico de estas barreras ocurre cuando usamos el <em>stream completion mode</em>. Al transmitir los <em>tokens</em> al usuario a medida que se generan para reducir la latencia, se vuelve muy difícil aplicar <em>output guardrails</em> efectivos, ya que el contenido peligroso o alucinado podría mostrarse en la pantalla de la aplicación antes de que el sistema logre analizar el contexto completo y bloquearlo.</p>`
            },
            {
                title: "Hands-On: Building a Secure Pipeline",
                content: `<p>A nivel arquitectónico, un <em>pipeline</em> seguro asume que el usuario siempre va a intentar romper el sistema. Por lo tanto, interceptamos su mensaje antes de enviarlo, lo sanitizamos, y luego blindamos la puerta de salida para que el modelo no pueda responder con texto libre, sino que deba encajar su respuesta en nuestro molde estructurado.</p><p>Acá tenés la implementación completa utilizando el SDK moderno de Google:</p><img src="assets/images/node-14/node14-img2.png" alt="Implementación de un pipeline seguro">`
            }
        ]
    }
    ,
    {
        id: "15",
        title: "15. LLM Evaluations",
        desc: "La etapa de auditoría de calidad. Implementación de pruebas sistemáticas y métricas (determinísticas y basadas en modelos) para medir científicamente la precisión, sesgo y calidad de las respuestas antes del despliegue.",
        topics: [
            {
                title: "The Evaluation Dilemma",
                content: `<p>En el Machine Learning tradicional, evaluar un modelo era un problema que se resolvía con pura matemática. Si construías un clasificador para detectar si un correo era <em>Spam</em> o no, simplemente usabas métricas objetivas y estructuradas como la precisión (<em>Accuracy</em>) o el <em>F1-Score</em>. Tenías una respuesta correcta, el modelo te daba una predicción, y no había lugar para la subjetividad.</p><p>El gran dilema de la ingeniería de IA moderna es que <strong>los LLMs generan texto abierto (<em>open-ended</em>)</strong>. ¿Cómo evalúas matemáticamente si un resumen es "bueno", si un chatbot tiene "empatía" o si el agente programó algo con estilo limpio? Dos respuestas generadas por tu modelo pueden usar <em>tokens</em> completamente diferentes y, aun así, transmitir el mismo mensaje correcto de fondo. Una métrica tradicional de coincidencia exacta fracasa rotundamente acá.</p><p>Frente a esta dificultad, la industria reconoce unánimemente que <strong>la evaluación humana es el estándar de oro (<em>Gold Standard</em>)</strong>. Como los LLMs se construyen para interactuar con personas, la mejor forma de saber si un sistema funciona es que un humano lo lea y dictamine si sirve para el caso de uso.</p><p>Pero a nivel de arquitectura y despliegue, <strong>depender de humanos no escala</strong>. No podés pedirle a un equipo de expertos que lea 5.000 respuestas cada vez que modificás tu <em>System Prompt</em> o cambiás un parámetro en tu base de datos vectorial para ver si el sistema mejoró o empeoró.</p><p>Por lo tanto, la tarea del AI Engineer consiste en <strong>construir tuberías de evaluación automáticas que intenten imitar o aproximar este juicio humano</strong> para auditar que el modelo razone bien, use las herramientas correctas y no alucine. No existe una única métrica perfecta ni un estándar definitivo para todos los casos de uso.</p>`
            },
            {
                title: "Exact & Semantic Metrics (Code & Math)",
                content: `<p>Aunque evaluar texto abierto es un dilema, existen ciertas tareas donde la evaluación exacta (<em>Exact Evaluation</em>) produce un juicio claro y sin ambigüedades. En estos casos, podemos auditar la calidad del sistema usando puramente código de Python y matemáticas, sin depender de otro modelo de lenguaje como juez.</p><p>La primera gran métrica determinista es la <strong>Functional Correctness</strong> (Corrección Funcional). Esto significa evaluar el sistema basándonos en si logra o no realizar la funcionalidad prevista. Por ejemplo, si nuestro agente genera código en Python, consultas en SQL o realiza llamadas a funciones, no evaluamos sus palabras, sino la ejecución. Ejecutamos el código generado y validamos si pasa un test unitario (usando <strong><code>assert</code></strong> en Python). Otro ejemplo clásico son los <em>game bots</em>; si la IA juega al Tetris, su calidad se mide matemáticamente por la puntuación que obtiene al final de la partida.</p><p>Cuando sí necesitamos evaluar el texto generado contra una base de datos de referencia (<em>Reference Data</em>), la métrica más rústica es el <strong>Exact Match</strong> (Coincidencia Exacta), que verifica si la salida es idéntica a la respuesta esperada. Sin embargo, esta métrica es extremadamente frágil. Por ejemplo, si la respuesta correcta es "5" y el modelo responde "La respuesta es 5", el <em>Exact Match</em> lo marca como un fallo porque no coinciden exactamente los caracteres.</p><p>Para resolver esa debilidad sin perder la automatización matemática, los AI Engineers recurren a la <strong>Semantic Similarity</strong> (Similitud Semántica). A diferencia de la similitud léxica (que solo mira si las letras coinciden), esta métrica evalúa si dos textos tienen el mismo significado de fondo. A nivel de arquitectura, implementamos esto reciclando lo que vimos en el Nodo 8: tomamos la respuesta de referencia y la respuesta generada por nuestro modelo, las pasamos por un modelo de <em>embeddings</em> para convertirlas en vectores, y calculamos la <strong>Similitud del Coseno</strong> (<em>Cosine Similarity</em>) entre ambas. Si los vectores están cerca matemáticamente, nuestro script aprueba la respuesta.</p>`
            },
            {
                title: "LLM-as-a-Judge (Model-Based Evals)",
                content: `<p>¿Qué hacemos cuando la matemática ya no nos alcanza? Si tenés que evaluar qué tan "bueno" es un resumen, qué tan empático fue tu chatbot de atención al cliente, o si el tono de un correo es el correcto, las métricas de coincidencia exacta o los vectores fracasan rotundamente. Acá es donde la industria implementa el patrón <strong>LLM-as-a-Judge</strong>: usamos un modelo de lenguaje poderoso para que evalúe y audite las respuestas de nuestro propio sistema.</p><p>A nivel de arquitectura, un "juez de IA" no es un modelo diferente o mágico; es simplemente un sistema compuesto por un modelo fundacional (como Gemini o GPT-4) encapsulado en un <em>prompt</em> evaluador extremadamente estricto. Para que este juez funcione sin alucinar y nos sirva en nuestro <em>pipeline</em> automático, su <em>prompt</em> debe contener tres bloques innegociables:</p><ol><li><strong>La tarea y los datos:</strong> Explicarle qué está haciendo y pasarle el contexto (ej. la pregunta original del usuario, los documentos de fondo y la respuesta generada por nuestra IA).</li><li><strong>El criterio (Rúbrica):</strong> Definir exactamente qué estamos midiendo y cómo se ve una buena o mala respuesta. Criterios muy estandarizados en la industria son la <em>Faithfulness</em> (fidelidad al contexto para medir si hubo alucinaciones) o la <em>Relevance</em> (relevancia de la respuesta).</li><li><strong>El sistema de puntuación:</strong> Restringir la salida a un valor determinista. La industria descubrió que los LLMs son mejores evaluando cuando usamos clasificaciones discretas (escala del 1 al 5) o binarias (aprobado/rechazado), en lugar de pedirles porcentajes continuos.</li></ol><p><strong>El gran trade-off: Las limitaciones del juez</strong> Como arquitectos, no podemos confiar a ciegas en este enfoque. Dado que el juez es otro LLM, hereda su naturaleza probabilística y nos trae un problema grave: la <strong>inconsistencia</strong>. Si le pasás exactamente la misma respuesta dos veces, el juez podría darle un "3" la primera vez y un "5" la segunda.</p><p>Además, nos enfrentamos a la <strong>ambigüedad de criterios</strong>: si en nuestro <em>prompt</em> del juez no definimos matemáticamente qué significa "ser fiel al texto", el modelo lo va a interpretar de forma subjetiva, lo que hace que nuestra métrica sea imposible de medir en el tiempo.</p>`
            },
            {
                title: "Comparative Evaluation (A/B Testing)",
                content: `<p>Como vimos, pedirle a un juez de IA que califique un texto en aislamiento sufre del problema de la inconsistencia, ya que calibrar el valor absoluto de una respuesta es muy difícil y a menudo engañoso. La solución arquitectónica a este problema es cambiar la pregunta: en lugar de pedir un puntaje en el vacío, le pasamos al juez dos respuestas distintas generadas para un mismo <em>prompt</em> y le preguntamos simplemente: "¿Cuál de las dos es mejor?". Esto se conoce como evaluación comparativa o <strong>A/B Testing</strong>.</p><p>Resulta que, tanto para evaluadores humanos como para modelos, comparar opciones en un formato de "frente a frente" es una tarea mucho más sencilla, rápida y consistente que intentar asignarles una calificación absoluta.</p><p>En la industria de la IA moderna, este concepto de enfrentamiento es el motor detrás de plataformas de evaluación masivas como el <strong>Chatbot Arena</strong> de LMSYS. En estos sistemas, en lugar de promediar puntajes fijos, se recolectan miles de señales comparativas (victorias, derrotas y empates) entre los distintos modelos que responden al mismo <em>prompt</em>. Luego, para transformar este historial de combates en una métrica global que podamos leer, se utilizan algoritmos de clasificación competitiva. El estándar absoluto de la industria para esto es el <strong>sistema de ranking Elo</strong> (exactamente la misma matemática que se usa para clasificar a los jugadores de ajedrez).</p><p><strong>El límite de esta métrica:</strong> Como ingenieros, es fundamental entender que no debemos usar la evaluación comparativa para todo. Poner a competir respuestas es ideal para medir <em>preferencias</em> (como el tono, la fluidez o qué tan amigable suena un agente), pero es peligroso para evaluar hechos concretos. Si le preguntas al sistema por un dato factual complejo, no deberías someter las opciones a un juez de preferencias para ver cuál "suena mejor" o más convincente; para esas tareas, siempre debes volver a las métricas deterministas de corrección exacta que vimos en el nodo 15.2.</p>`
            },
            {
                title: "Hands-On: Building a Vanilla Eval Pipeline",
                content: `<p>A nivel de arquitectura, un pipeline de evaluación basado en modelos (<em>Model-Based Evals</em>) funciona en un bucle de dos fases. Primero, iteramos sobre nuestro dataset de prueba (nuestro <em>Gold Standard</em>) y le pedimos a nuestro sistema que genere una respuesta para cada consulta. Segundo, empaquetamos esa pregunta, la respuesta recién generada y el contexto esperado, y se los enviamos a nuestro "modelo juez".</p><p>Para evitar el problema de la inconsistencia y no tener que parsear texto libre a mano, acá cruzamos los conceptos de los nodos anteriores: usamos <strong>Structured Outputs</strong> con Pydantic. Le damos al juez un esquema estricto donde lo obligamos a razonar primero (aplicando <em>Chain-of-Thought</em> internamente) y a escupir un puntaje determinista del 1 al 5 al final.</p><p>Acá tenés el código profesional para tu pipeline de evaluación <em>vanilla</em>:</p><img src="assets/images/node-15/node15-img1.png" alt="Pipeline de evaluación con Pydantic">`
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
                content: `<p>Hasta ahora, vinimos trabajando bajo condiciones ideales: escribimos un <em>script</em> en nuestra terminal, le pasamos un <em>prompt</em> controlado, esperamos a que termine y analizamos el resultado. Pero el despliegue (<strong>Deploy</strong>) transforma ese modelo o código local en un servicio en ejecución con el que los usuarios y las aplicaciones interactúan en tiempo real. Una vez que nuestro sistema queda expuesto a través de una API o una interfaz gráfica, empieza a enfrentarse al tráfico real, a cargas fluctuantes y a las restricciones operativas inquebrantables de un entorno de producción.</p><p>Este cambio de mentalidad es brutal porque el comportamiento de nuestro sistema ya no se define únicamente por las pruebas prolijas que hicimos en nuestra computadora. En producción, son los usuarios reales, sus <em>prompts</em> totalmente impredecibles, los casos extremos (<em>edge cases</em>) y las interacciones internas del propio sistema los que terminan de moldear cómo rinde realmente la aplicación. Para ponerlo en perspectiva: si tu agente autónomo entra en un bucle infinito de razonamiento en tu terminal, simplemente lo frenás presionando <strong><code>Ctrl+C</code></strong>. En producción, ese mismo bucle no solo te consume el presupuesto de la API por hora, sino que deja al cliente colgado esperando una respuesta que nunca llega.</p><p>Además, exponer nuestra lógica y nuestras barreras de seguridad (<em>guardrails</em>) a interacciones en tiempo real trae retos arquitectónicos enormes. Por ejemplo, en producción los usuarios exigen respuestas inmediatas, lo que nos obliga a usar técnicas como el <em>streaming</em> de <em>tokens</em>. Como vimos antes, transmitir la respuesta en vivo dificulta muchísimo la aplicación de nuestros <em>output guardrails</em>, ya que no podemos analizar la respuesta completa para bloquearla antes de que el usuario ya la esté leyendo en su pantalla. Pasar de un <em>script</em> a un servicio significa dejar de pensar solo en que "el modelo responda bien" y empezar a diseñar para que el sistema sobreviva al usuario.</p>`
            },
            {
                title: "Delivery Methods: Web (Streamlit) vs. Executable (PyInstaller)",
                content: `<p>Como arquitectos de IA, una vez que el <em>pipeline</em> funciona, la gran pregunta es: ¿dónde va a vivir este código? La respuesta define toda nuestra infraestructura y se reduce a dos caminos principales: desplegarlo como un servicio web en la nube o empaquetarlo para que corra localmente en la máquina del cliente (<strong>Edge</strong>).</p><p>Ambos enfoques resuelven el problema de entrega, pero tienen <em>trade-offs</em> arquitectónicos radicalmente distintos:</p><p><strong>Web Interfaces (Cloud / Streamlit)</strong> Levantar una aplicación web es el enfoque clásico y el estándar para interacciones en tiempo real. Acá, tu código, tus <em>guardrails</em> y, lo más importante, tus secretos (como la <em>API Key</em> de Gemini) viven protegidos en tu servidor. El usuario solo accede a través del navegador.</p><ul><li><strong>La ventaja:</strong> Tienes control absoluto. Si detectás que los usuarios están haciendo un <em>prompt injection</em> nuevo, actualizás la lógica de tu servidor y todos tus clientes quedan protegidos al instante.</li><li><strong>La desventaja:</strong> Dependés de una conexión a internet constante, y vos (o tu empresa) asumís todos los costos de infraestructura y escalabilidad.</li></ul><p><strong>Executables (The Edge / PyInstaller)</strong> Desplegar en el <strong>Edge</strong> significa tomar todo tu entorno virtual, tus dependencias y tu código, y "congelarlos" en un archivo ejecutable (como un <strong><code>.exe</code></strong>) que corre físicamente en el hardware del usuario final.</p><ul><li><strong>La ventaja:</strong> La privacidad extrema y la capacidad <em>offline</em>. Si combinás este ejecutable con inferencia local (como un modelo corriendo en Ollama), los datos del usuario jamás salen de su computadora. Además, el costo de cómputo recae en el hardware del cliente, no en tus servidores.</li><li><strong>La desventaja:</strong> Perdés el control de las actualizaciones (el usuario tiene que descargar la nueva versión manualmente). Además, si tu <strong><code>.exe</code></strong> llama a una API de la nube (como Gemini), vas a tener que diseñar una interfaz para que el usuario ingrese su propia <em>API Key</em>, ya que jamás debés compilar y distribuir tu propia clave secreta dentro del código.</li></ul>`
            },
            {
                title: "Fast Web Interfaces (Streamlit)",
                content: `<p>Desplegar una interfaz web en Python puro solía ser una pesadilla que requería aprender HTML, CSS, JavaScript y frameworks como Flask o Django. Hoy en día, el estándar de la industria para los AI Engineers es <strong>Streamlit</strong>. Nos permite levantar una interfaz de usuario (UI) interactiva y moderna escribiendo únicamente código Python.</p><p>El reto arquitectónico más grande al pasar de un <em>script</em> de consola a una aplicación web con Streamlit es que <strong>la web no tiene memoria por defecto</strong>. Por diseño, cada vez que un usuario interactúa con la pantalla (hace clic en un botón o envía un mensaje), Streamlit vuelve a ejecutar todo el código de arriba hacia abajo. Si no guardamos la conversación de forma explícita, la interfaz se "reinicia" y el bot olvida todo lo que se habló.</p><p>Para solucionar esto, utilizamos el <strong><code>session_state</code></strong> (estado de la sesión). Es una especie de "caja fuerte" o diccionario temporal que vive en la memoria RAM del servidor mientras la pestaña del navegador esté abierta. Ahí es donde guardamos nuestro historial de mensajes (la <em>Short-term Memory</em> que vimos en nodos anteriores) para que persista entre cada recarga de la página.</p><p>A continuación, tenes el ejemplo de la implementación de una interfaz de chat simulada (<em>Mock AI</em>) que funciona de manera 100% local, sin consumir APIs externas. Este enfoque permite aislar y entender puramente la arquitectura de la interfaz y el manejo de memoria:</p><img src="assets/images/node-16/node16-img1.png" alt="Interfaz de chat con Streamlit">`
            },
            {
                title: "The Edge: Packaging to .exe (PyInstaller)",
                content: `<p>En la arquitectura de sistemas de IA, cuando la privacidad de los datos es un requisito legal inquebrantable (por ejemplo, en un entorno médico o financiero), no podemos usar una interfaz web en la nube donde la información viaje a nuestros servidores. La solución es el despliegue en el <strong>Edge</strong> (la infraestructura local del cliente).</p><p>El reto técnico acá es que no podemos enviarle a un cliente final nuestro archivo <strong><code>app.py</code></strong> y pedirle que abra una terminal, instale Python, configure entornos virtuales con <strong><code>uv</code></strong> y descargue las dependencias. Necesitamos entregar un producto de software "llave en mano". Para esto, el estándar en Python es utilizar <strong>PyInstaller</strong>, una herramienta que "congela" (<em>freezes</em>) el intérprete de Python, todas las librerías instaladas en tu entorno virtual y tu código fuente, comprimiéndolos en un único archivo ejecutable (<strong><code>.exe</code></strong> para Windows o un binario para Mac/Linux) que corre con doble clic.</p><p>A nivel de seguridad, la regla de oro arquitectónica al compilar aplicaciones de IA es <strong>jamás empaquetar tu propia API Key dentro del ejecutable</strong>. Si lo hacés, un usuario con conocimientos técnicos podría descompilar el <strong><code>.exe</code></strong>, robar tu clave y generarte miles de dólares en costos. El diseño correcto exige que la aplicación arranque pidiéndole al usuario que ingrese su propia <em>API Key</em> o que la cargue desde un archivo <strong><code>.env</code></strong> local y seguro en su computadora.</p><p>Acá tenés el ejemplo exacto de los comandos que utilizamos en la terminal para realizar este empaquetado y pasar de código a producto final:</p><img src="assets/images/node-16/node16-img2.png" alt="Empaquetado con PyInstaller">`
            }
        ]
    },
    {
        id: "17",
        title: "17. Observability & Tracing",
        desc: "Monitoreo de la \"caja negra\" en tiempo real. Uso de logs y sistemas de trazabilidad para registrar cada paso del razonamiento de la IA, permitiendo detectar dónde se trabó un agente o por qué falló una recuperación de datos en producción.",
        topics: [
            {
                title: "17.1 Evaluation vs. Observability",
                content: `<p>Hasta ahora nos enfocamos en <em>Evaluation</em> (Evals), midiendo el rendimiento de nuestro modelo en un entorno controlado antes del despliegue, utilizando un <em>dataset</em> curado de pruebas para evaluar métricas estructuradas. Esta etapa de auditoría en el laboratorio nos garantiza que el sistema sale de fábrica cumpliendo con un estándar de calidad predefinido. Pero una vez que desplegamos nuestra aplicación, el comportamiento del sistema ya no se define solo por nuestras pruebas estáticas, sino por los usuarios reales y sus interacciones impredecibles.</p><p>Acá es donde el paradigma cambia drásticamente: la pregunta central de la arquitectura pasa de "¿Es bueno el modelo?" a "¿Qué está pasando exactamente adentro del sistema ahora mismo?". Mientras que la evaluación mide el rendimiento teórico, la <strong>Observability</strong> (Observabilidad) se enfoca en cómo se comporta el sistema en tiempo real mientras se ejecuta en producción. A nivel sistémico, esto significa abandonar los tests de laboratorio para capturar de forma continua entradas reales, salidas del modelo, contexto recuperado de nuestras bases de datos, latencias, costos operativos y trazas a nivel de componente (<em>component-level traces</em>).</p><p>Auditar errores en sistemas de IA generativa es extremadamente difícil porque, por defecto, el modelo y sus llamadas a herramientas actúan como una "caja negra". Si un agente autónomo falla en producción, sin observabilidad no tendríamos forma de saber si el error ocurrió porque el usuario envió un <em>prompt</em> inesperado, porque falló la recuperación de datos, o si el LLM simplemente alucinó en el último paso del razonamiento. En resumen: la evaluación nos dio la confianza para hacer el despliegue, pero la observabilidad es la única arquitectura que nos asegura que el sistema siga cumpliendo ese estándar bajo el estrés del tráfico real.</p>`
            },
            {
                title: "Tracing the Black Box",
                content: `<p>En la ingeniería de software tradicional, si tu código se rompe, la consola te devuelve un error con la línea exacta donde falló. Pero en las aplicaciones con LLMs, si un agente te da una respuesta desastrosa, el problema puede estar en cualquier parte dentro de la "caja negra": puede que haya fallado el <em>retriever</em> al buscar datos, que la llamada a la herramienta haya devuelto basura, o que el propio LLM simplemente haya alucinado. Monitorear esta caja negra en tiempo real requiere el uso de sistemas de trazabilidad para registrar cada paso del razonamiento de la IA.</p><p>Acá es donde entra el concepto de <strong>Tracing</strong> (Trazabilidad). A diferencia de los <em>logs</em> puros, que son simplemente eventos aislados y un registro de solo adición (<em>append-only</em>), las trazas (<em>traces</em>) se construyen vinculando eventos relacionados para formar una línea de tiempo completa de principio a fin de una transacción o proceso. Una traza es, básicamente, el registro detallado del camino de ejecución que toma una solicitud a través de los distintos componentes y servicios de tu sistema.</p><p>A nivel arquitectónico, un buen sistema de trazabilidad revela absolutamente todo el proceso: desde el momento en que el usuario envía la consulta hasta que se devuelve la respuesta final, incluyendo las acciones que toma el sistema, los documentos que recupera y el <em>prompt</em> final exacto que se le envió al modelo. Además, esta radiografía te debe mostrar cuánto tiempo tomó cada uno de esos pasos y cuál fue su costo asociado.</p><p><strong>¿Por qué es vital esto en producción?</strong> Tener esta visibilidad te permite aislar el eslabón exacto que tiene problemas y corregirlo de forma independiente, sin correr el riesgo de alterar el comportamiento del modelo en el resto de los pasos. Si tu sistema falla, gracias a la traza vas a poder señalar con precisión milimétrica dónde ocurrió el error: vas a saber si fue porque la consulta inicial se procesó de forma incorrecta, si el contexto que trajo tu base de datos vectorial era irrelevante, o si la información era perfecta pero el modelo igual generó una respuesta incorrecta.</p>`
            },
            {
                title: "Drift Detection",
                content: `<p>En la ingeniería de software tradicional, si el código funciona hoy, funcionará mañana. Pero en la IA generativa, los sistemas son entes vivos. Una vez que tu aplicación está en producción, te enfrentas al <strong>Drift</strong> (desviación o deriva). Esto significa que las condiciones bajo las que evaluaste originalmente tu sistema empiezan a mutar con el tiempo, degradando silenciosamente la calidad de las respuestas sin que la consola tire ningún error visible.</p><p>A nivel arquitectónico, monitoreamos distintos tipos de desviaciones. Primero, los <strong>System Prompt Changes</strong>: un compañero de equipo ajusta una instrucción o se actualiza de forma transparente la versión del modelo fundacional en la nube, y de repente el comportamiento del sistema cambia por completo. Segundo, el <strong>User Behavior Drift</strong>: los usuarios reales se adaptan a la tecnología, descubren nuevas formas de engañar al sistema (<em>prompt injection</em>), o simplemente cambian la forma en que formulan sus consultas. Si solo mirás métricas generales de latencia o errores de servidor, jamás vas a notar esta caída gradual en el rendimiento.</p><p>La solución sistémica es conectar tu observabilidad directamente con tus evaluaciones continuas. En lugar de revisar <em>logs</em> a ciegas, recolectás una muestra del tráfico de producción real, la pasás por tu <em>pipeline</em> de auditoría automática (el <em>LLM-as-a-Judge</em> que vimos en el Nodo 15) y comparás si el rendimiento de esta semana bajó respecto a la anterior. Si detectás un <em>drift</em>, es la señal arquitectónica de que necesitás investigar la causa raíz, actualizar tu <em>dataset</em> de evaluación o reforzar tus barreras de seguridad.</p>`
            },
            {
                title: "Hands-On: Vanilla Tracing Logger",
                content: `<p>Llegamos al final práctico del nodo. Como te prometí, acá no vamos a depender de plataformas externas ni a pagar suscripciones para entender qué pasa dentro de nuestro sistema. Vamos a construir la arquitectura base de nuestro propio sistema de observabilidad.</p><p>En producción, la regla de oro para mitigar riesgos es registrar absolutamente todo lo que sea posible: las configuraciones del modelo, la consulta exacta del usuario, el <em>prompt</em> final construido, las salidas intermedias, los llamados a herramientas y, sobre todo, la latencia de cada paso. Un simple <strong><code>print()</code></strong> en la consola no sirve para esto porque genera eventos desconectados y difíciles de parsear. Para auditar la caja negra correctamente, necesitamos construir una <strong>Traza (Trace)</strong>, vinculando eventos relacionados para formar una línea de tiempo completa y matemática de una transacción.</p><p>A nivel de arquitectura en Python puro, la forma más elegante y escalable de implementar esto sin ensuciar nuestra lógica de negocio es utilizando <strong>Decorators</strong> (<em>Decoradores</em>). Un decorador nos permite "envolver" cualquier función crítica de nuestro agente (como la búsqueda vectorial o la llamada a la API de Gemini) para interceptar sus parámetros de entrada, medir exactamente su tiempo de ejecución, capturar su salida, y guardar todo en un archivo de registros (<em>log</em>) estructurado en formato JSONL (<em>JSON Lines</em>).</p><p>Acá tenés la implementación profesional de tu propio <em>Tracer Vanilla</em>:</p><img src="assets/images/node-17/node17-img1.png" alt="Implementación de un Tracer con decoradores">`
            }
        ]
    },
    {
        id: "18",
        title: "18. AI-Augmented Development",
        desc: "Metodología de trabajo del ingeniero moderno. Integración de Spec-Driven Development (SDD) utilizando agentes de IA y herramientas de autocompletado para acelerar la creación de software robusto y documentado.",
        topics: [
            {
                title: "The Paradigm Shift & The Tools",
                content: `<p>En la era del desarrollo aumentado por IA, el rol del ingeniero cambió radicalmente: ya no te pagan por memorizar sintaxis, sino por diseñar arquitecturas y definir intenciones. Al delegar el trabajo rutinario y repetitivo a agentes de software, los equipos pueden mover su enfoque hacia la estrategia de alto valor, reemplazando la escritura de código rígido por el diseño basado en especificaciones e intenciones (*SpecDriven intent*). Básicamente, pasás de ser un "picador de código" a ser un orquestador que dirige a la máquina.</p><p>Este cambio de paradigma fue impulsado por la evolución de nuestras herramientas en la trinchera. Históricamente dependíamos del autocompletado determinista (como *IntelliSense*), pero dimos un salto enorme con asistentes como GitHub Copilot, que introdujeron el *Ghost Text*. Estos modelos predicen bloques enteros de código o funciones basándose en el contexto del archivo que tenés abierto, inyectando sugerencias en gris que podés aceptar con un simple <strong><code>Tab</code></strong>.</p><p>Hoy, la industria cruzó la frontera definitiva hacia los <strong>AI Code Editors</strong> (entornos nativos de IA como Cursor o Windsurf). A diferencia de tener un simple chatbot al costado de la pantalla, estos editores actúan como agentes autónomos con permisos de lectura y escritura en todo tu proyecto. En lugar de escribir línea por línea, le das una instrucción global y el editor navega por tu repositorio, planifica los cambios y refactoriza múltiples archivos de forma autónoma, presentándote un <em>diff</em> para que vos simplemente lo audites y lo apruebes.</p>`
            },
            {
                title: "Spec-Driven Development (The Methodology)",
                content: `<p>A medida que la inteligencia artificial comoditiza la generación de código, el verdadero cuello de botella de la ingeniería ha dejado de ser la escritura de sintaxis para convertirse en la <strong>definición de intenciones</strong>. Para resolver este desafío, la industria está adoptando el <strong>Spec-Driven Development (SDD)</strong>, una metodología que transforma la programación <em>ad-hoc</em> en un flujo de trabajo estructurado e iterativo donde el documento de especificación técnica (<em>Spec</em>) es la principal fuente de verdad.</p><p>Para entender su valor, debemos compararlo con la práctica más común (y caótica) actual: el <strong>Vibe Coding</strong>. El <em>Vibe Coding</em> consiste en darle instrucciones a la IA mediante <em>prompts</em> exploratorios en lenguaje natural basados puramente en ideas de alto nivel o "vibras". Aunque es un enfoque rápido y creativo para armar prototipos, delegar tanta intuición a la IA tiene un costo altísimo en producción: es propenso a alucinaciones, pérdida de contexto y generación de código sumamente frágil.</p><p>El SDD elimina este "impuesto de ambigüedad" exigiendo rigor por adelantado. Bajo esta metodología, el humano orquesta y define, mientras que la IA ejecuta. Todo el código, las pruebas y la documentación se derivan estrictamente de este contrato vivo.</p><p><strong>El Flujo de Trabajo Estricto de 6 Fases</strong></p><p>El SDD no es solo escribir un documento largo, es un proceso iterativo con <em>checkpoints</em> de validación humana. El ciclo de vida moderno se divide en las siguientes seis fases:</p><ol><li><strong>Constitución (Constitution):</strong> El establecimiento de las reglas base. Antes de pedir código, se define el contexto global, la pila tecnológica, los patrones arquitectónicos y las reglas de integración del proyecto para que la IA se alinee con la infraestructura existente.</li><li><strong>Especificación (Specification):</strong> La captura de los requisitos inequívocos, las historias de usuario y las restricciones. En esta fase, el ingeniero se enfoca exclusivamente en la "intención" del negocio y la perspectiva del usuario, dejando fuera los detalles de implementación técnica.</li><li><strong>Clarificación (Clarification):</strong> La eliminación de la ambigüedad. Se realiza un pase estructurado para sacar a la luz áreas subespecificadas, como el manejo de errores, los estados vacíos y los casos límite (<em>edge cases</em>). Las respuestas a estas dudas se registran en el <em>Spec</em> antes de avanzar, minimizando el retrabajo.</li><li><strong>Planificación (Planning):</strong> La creación del plano técnico o <em>blueprint</em>. La IA propone cómo va a construir el sistema a nivel arquitectónico basándose en la especificación clara.</li><li><strong>Tareas (Tasks):</strong> Desglose del plan. El plano arquitectónico se divide en tareas pequeñas, secuenciales y bien definidas.</li><li><strong>Implementación (Implementation):</strong> La ejecución final. La IA genera el código y las pruebas automatizadas (basadas en los criterios de aceptación) estrictamente alineados con las tareas previas. El ingeniero asume su rol final: auditar y aprobar los cambios propuestos antes de hacer el <em>commit</em>.</li></ol>`
            },
            {
                title: "Hands-On: From Spec to Code",
                content: `<p>En esta práctica final, vamos a aplicar la metodología de Spec-Driven Development (SDD). En lugar de abrir un archivo <strong><code>.py</code></strong> y empezar a codificar a ciegas, vamos a comportarnos como verdaderos arquitectos: primero definimos las reglas y la intención, y luego dejamos que el Agente (nuestro editor nativo de IA) genere la implementación.</p><p>Como vimos en la tarjeta anterior, este flujo estricto elimina el "impuesto de ambigüedad". Para hacerlo ágil, vamos a consolidar las fases de <em>Constitution</em>, <em>Specification</em>, <em>Plan</em> y <em>Tasks</em> en un único documento maestro. Este archivo Markdown es nuestro contrato y la única fuente de verdad a partir de la cual se derivará el código.</p><p>El flujo de trabajo es así de simple: escribís el documento <strong><code>spec.md</code></strong>, abrís tu AI Code Editor (como Cursor o Windsurf), le pasás este archivo al agente en el chat lateral y le das la orden: <em>"Implementá app.py basándote estrictamente en spec.md"</em>.</p><p>Aca tenes el SDD para pasarle a tu ia y comprobar por vos mismo su funcionamiento:</p><img src="assets/images/node-18/node18-img1.png" alt="Ejemplo de Spec-Driven Development"><p>Al leer este documento, tu agente de IA no tiene que adivinar nada ni tomar decisiones creativas peligrosas. Sabe exactamente qué dependencias instalar, qué formato usar y qué tareas completar.</p>`
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