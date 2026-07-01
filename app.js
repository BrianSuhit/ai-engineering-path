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
                content: "<p>Dejemos la ciencia ficción de lado. Hoy en día, la Inteligencia Artificial Generativa no es magia ni son robots con consciencia propia intentando dominar el mundo. En su forma más fundamental, es software avanzado impulsado por Redes Neuronales (específicamente modelos Transformer) que ha sido entrenado con cantidades masivas de texto para predecir, generar y razonar sobre el lenguaje humano con una precisión asombrosa.</p>"
            },
            {
                title: "¿Qué es el AI Engineering?",
                content: "<p>Si la Inteligencia Artificial es el \"cerebro\", el <em>AI Engineering</em> es el arte de construirle un \"cuerpo\" a ese cerebro para que pueda interactuar con el mundo real. Es la disciplina que se encarga de tomar estos modelos lingüísticos masivos (LLMs) y transformarlos en productos de software robustos, predecibles y seguros. Se trata de diseño de sistemas, no de investigación teórica.</p>"
            },
            {
                title: "¿Qué es un AI Engineer y qué hace?",
                content: "<p>Acá es donde la mayoría se confunde. Un <em>AI Engineer</em> (Ingeniero de IA) <strong>no</strong> se dedica a crear ni a entrenar modelos desde cero. Esa es la tarea de los <em>AI Researchers</em> o los <em>ML Engineers</em>, quienes se enfocan en la matemática y la teoría profunda.</p><p>El <strong>AI Engineer</strong> es, ante todo, un constructor y un orquestador. Según el estándar de la industria, el ingeniero utiliza modelos pre-entrenados (como Gemini, Claude o Llama) y los integra mediante APIs y herramientas existentes para resolver problemas reales y mejorar la experiencia de los usuarios. Nuestro trabajo diario implica escribir código para conectar bases de datos, gestionar el contexto que se le envía a la IA, asegurarnos de que no alucine y darle herramientas para que actúe de forma autónoma.</p>"
            },
            {
                title: "¿Por qué es necesario este rol?",
                content: "<p>Podrías preguntarte: <em>\"Si la IA ya hace todo, ¿para qué hace falta un ingeniero?\"</em>. La respuesta es simple: los modelos base vienen \"desnudos\". Un LLM recién salido de fábrica no sabe quiénes son los clientes de tu empresa, no tiene acceso a tu base de datos de ventas, no puede apretar un botón en una página web y pierde la memoria en cada nueva conversación. El <strong>AI Engineer</strong> es el puente necesario para conectar la inteligencia cruda del modelo con la infraestructura de datos privada de una empresa.</p>"
            },
            {
                title: "Casos de uso (Dónde se aplica)",
                content: "<p>Para bajar todo esto a la realidad, acá tenés ejemplos prácticos de lo que un <strong>AI Engineer</strong> construye en su día a día:</p><ul><li><strong>Sistemas RAG (Chatbots sobre datos privados):</strong> Un bot de recursos humanos que conoce todas las políticas internas de la empresa porque sabe buscar en los PDFs de la compañía antes de responder.</li><li><strong>Agentes Autónomos:</strong> Un asistente de investigación que entra a internet, busca <em>papers</em> médicos, los resume, extrae los datos clave y arma un reporte en Excel automáticamente.</li><li><strong>Herramientas de Análisis Multimodal:</strong> Un sistema que permite subir la foto de una factura arrugada y extrae el monto, el proveedor y la fecha para cargarlo en el sistema contable.</li></ul>"
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
                content: "<p>Dejemos la ciencia ficción de lado, ya que un LLM no es magia ni un ente con consciencia propia intentando dominar el mundo. En su forma más fundamental, es software avanzado y un motor estadístico masivo impulsado por redes neuronales (específicamente modelos <em>Transformer</em>),. Toda su arquitectura está diseñada para una única tarea principal: predecir cuál es el siguiente fragmento de texto (<em>token</em>) más lógico en una secuencia,.</p><p>Cuando le envías un <em>prompt</em>, el modelo no \"piensa\" la respuesta completa de antemano. En su lugar, funciona calculando la probabilidad condicional de cada posible siguiente palabra basándose estrictamente en el contexto que vino antes. A través de este proceso probabilístico, va eligiendo y generando el texto paso a paso de forma secuencial (<em>Autoregressive Models</em>),.</p><p>Aunque predecir el siguiente <em>token</em> parece una tarea simple, el lenguaje humano naturalmente codifica conocimiento fáctico, pasos lógicos y patrones de comunicación. Al exponer el modelo a cantidades masivas de texto (código, libros, artículos), la máquina internaliza estos patrones, lo que le otorga la capacidad emergente de razonar, resumir o escribir código de manera asombrosa,.</p><p><em>Source: AI Engineering Path & AI Engineering Guidebook</em></p>"
            },
            {
                title: "Tokenización",
                content: "<p>Para que un LLM procese lenguaje humano, primero necesitamos resolver un problema de arquitectura fundamental: las redes neuronales solo entienden números, no texto crudo. El flujo de datos arranca pasando nuestro <em>prompt</em> por un <strong><code>tokenizer</code></strong>, una herramienta que actúa como el traductor inicial del sistema. Su trabajo es despedazar el texto de entrada en unidades más pequeñas llamadas <em>tokens</em>, que pueden ser palabras completas, fragmentos de palabras o incluso signos de puntuación.</p><p>El motivo por el que el sistema no corta simplemente el texto por espacios es puramente por escalabilidad. Utilizar <em>subword tokens</em> permite que el modelo maneje palabras nuevas, raras o en otros idiomas dividiéndolas en fragmentos más pequeños que ya existen en su memoria. Este enfoque arquitectónico mantiene el tamaño del vocabulario manejable y le permite a la IA procesar prácticamente cualquier entrada de manera eficiente.</p><p>Una vez que el texto está fragmentado, el <strong><code>tokenizer</code></strong> busca cada pieza en su diccionario interno y la reemplaza por un identificador numérico entero y único. La salida de este proceso es una secuencia matemática de <strong><code>input_ids</code></strong>. Esta lista cruda de números es el verdadero combustible que ingresará al chasis del modelo para la siguiente etapa de procesamiento.</p><p><em>Source: Hands-On Large Language Models & AI Engineering Guidebook</em></p>"
            },
            {
                title: "Embeddings de Tokens",
                content: "<p>Ya tenemos nuestros <strong><code>input_ids</code></strong> gracias al <strong><code>tokenizer</code></strong>, pero para la red neuronal esos números son solo etiquetas arbitrarias sin valor semántico, como si fueran números de DNI. Para que el modelo realmente pueda procesar la información, necesita traducir esos identificadores a un formato donde la relación y el significado entre los conceptos puedan calcularse matemáticamente.</p><p>Acá es donde entran en juego los <em>Token Embeddings</em>, mapeando cada <strong><code>input_id</code></strong> a un vector denso (una lista de números de punto flotante) que funciona como sus coordenadas exactas dentro de un espacio multidimensional masivo. Gracias a esta arquitectura, los <em>tokens</em> que representan conceptos con significados similares terminan ubicados físicamente muy cerca unos de otros en ese espacio matemático.</p><p>El resultado de esta etapa es que la secuencia cruda de números se transforma en una matriz de embeddings rica en el significado base de cada palabra. Con estas coordenadas listas, los datos ya tienen la estructura correcta para ingresar al chasis principal del modelo: los bloques del <em>Transformer</em>, donde las palabras empezarán a interactuar entre sí para entender el contexto global de tu <em>prompt</em>.</p><p><em>Source: Hands-On Large Language Models & AI Engineering Path</em></p>"
            },
            {
                title: "El Bloque Transformer",
                content: "<p>Ya con la matriz de <em>Token Embeddings</em> lista, la información ingresa al verdadero motor del sistema: la pila de <em>Transformer Blocks</em>. A diferencia de las arquitecturas neuronales antiguas que leían el texto palabra por palabra de forma secuencial, este chasis permite que todos los <em>tokens</em> fluyan y se procesen en paralelo. Cada bloque actúa como una estación de refinamiento por donde pasa tu <em>prompt</em> para que el modelo construya una comprensión cada vez más profunda y compleja del texto.</p><p>Dentro de cada bloque, el flujo de datos atraviesa dos componentes críticos. Primero, pasan por una capa de <em>Self-Attention</em> (el motor de contexto que analizaremos en el próximo nodo) y luego ingresan a una <em>Feedforward Neural Network</em>. Para evitar que esta tubería matemática colapse o se descontrole tras pasar por decenas de bloques apilados, los datos se estabilizan continuamente utilizando técnicas como <em>Layer Normalization</em> y conexiones residuales.</p><p>Lo más interesante desde nuestro enfoque de arquitectos es la división de responsabilidades. Mientras que la capa de atención se encarga de analizar cómo se relacionan las palabras actuales de tu <em>prompt</em> entre sí, las capas <em>Feedforward</em> actúan como el verdadero depósito de conocimiento a largo plazo del modelo. Es en los pesos de estas redes densas donde reside la \"memoria\" fáctica y los conceptos que la IA internalizó tras leer medio internet durante su entrenamiento.</p><p><em>Source: Hands-On Large Language Models & AI Engineering Guidebook</em></p>"
            },
            {
                title: "El Mecanismo de Atención",
                content: "<p>Cuando procesamos lenguaje, el significado de una palabra cambia drásticamente según su entorno. Para resolver esto sistémicamente, el motor del <em>Transformer</em> utiliza el <em>Self-Attention Mechanism</em>. En lugar de procesar cada <em>token</em> de forma aislada, este mecanismo le permite al modelo \"mirar hacia atrás\" y calcular qué tanta relevancia debe prestarle a cada una de las palabras anteriores de tu <em>prompt</em> mientras procesa la palabra actual.</p><p>El flujo de datos funciona creando tres representaciones matemáticas para cada <em>token</em>: <strong><code>Queries</code></strong> (la información que el <em>token</em> actual está buscando), <strong><code>Keys</code></strong> (las etiquetas de lo que los <em>tokens</em> anteriores tienen para ofrecer) y <strong><code>Values</code></strong> (el contenido real o significado de esos <em>tokens</em>). El sistema multiplica el vector <strong><code>Query</code></strong> del <em>token</em> actual por la matriz de <strong><code>Keys</code></strong> de los <em>tokens</em> previos para calcular un <em>relevance score</em> exacto entre las palabras.</p><p>Una vez que esos puntajes matemáticos se normalizan usando una función <strong><code>softmax</code></strong> (para convertirlos en probabilidades que sumen 1), el sistema los multiplica por la matriz de <strong><code>Values</code></strong>. El resultado final es que la representación matemática cruda de tu palabra se transforma en un vector enriquecido que absorbió el contexto de toda la oración. Esto es lo que le da al LLM su \"magia\", permitiéndole seguir el hilo de una conversación larga, entender referencias cruzadas o captar dependencias a gran distancia dentro del texto.</p><p><em>Source: Hands-On Large Language Models & AI Engineering Guidebook</em></p>"
            },
            {
                title: "Decodificación y Muestreo",
                content: "<p>Una vez que los bloques del <em>Transformer</em> y el motor de <em>Attention</em> terminan de procesar todo el contexto, la máquina debe tomar una decisión final. La última capa de la red escupe una lista masiva de puntajes crudos llamados <strong><code>logits</code></strong>, donde cada número corresponde a un posible siguiente <em>token</em> dentro de su vocabulario. Para que estos números tengan utilidad real, atraviesan una función matemática llamada <strong><code>softmax</code></strong>, que los normaliza y los convierte en una distribución de probabilidad limpia que suma exactamente 1 (o 100%). Esto le dice al sistema qué tan probable es cada fragmento para continuar tu <em>prompt</em>.</p><p>Con las probabilidades sobre la mesa, llega el momento de elegir. El enfoque más básico es el <em>greedy decoding</em>, que consiste en seleccionar siempre el <em>token</em> con la probabilidad más alta. Aunque suena lógico, en la práctica esto suele generar textos robóticos, atrapados en bucles y muy repetitivos. Para que la IA suene natural y humana, los motores modernos utilizan <em>sampling</em> (muestreo): en lugar de quedarse ciegamente con el ganador absoluto, eligen el siguiente <em>token</em> al azar pero respetando su peso estadístico. Si una palabra tiene un 30% de probabilidad, el sistema la elegirá el 30% de las veces.</p><p>Como arquitectos, acá es donde tomamos el control del comportamiento del modelo. Modificando el parámetro de <strong><code>temperature</code></strong>, alteramos esa distribución de probabilidades justo antes del <em>sampling</em>: una temperatura baja (cercana a 0) concentra las probabilidades y hace que el modelo sea determinista y analítico, mientras que una alta aplana la curva, volviéndolo mucho más creativo y caótico. Además, para evitar que la creatividad termine en alucinaciones puras, aplicamos filtros dinámicos como <strong><code>top_k</code></strong> (que restringe la ruleta solo a los \"K\" tokens más probables) o <strong><code>top_p</code></strong> (que limita las opciones hasta que la suma de sus probabilidades alcance un porcentaje \"P\").</p><p><em>Source: Hands-On Large Language Models & AI Engineering Guidebook</em></p>"
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
                content: "<p>En el nodo anterior vimos cómo fluyen los datos por la matemática interna del <em>Transformer</em>. Pero en la práctica, como <strong>AI Engineers</strong>, no nos ponemos a ensamblar ese motor desde cero, ya que el enfoque sistémico actual se basa en consumir <em>Foundation Models</em> pre-entrenados. Durante su fase inicial de <em>pre-training</em>, estos modelos utilizan un enfoque <em>self-supervised</em> procesando cantidades masivas de texto crudo para aprender a predecir el siguiente <em>token</em>. Esta arquitectura les permite absorber la gramática y hechos del mundo a gran escala sin depender del costoso y lento proceso de etiquetado manual humano.</p><p>Como resultado de este entrenamiento masivo, obtenemos un modelo base generalista que actúa como un \"cerebro\" crudo, capaz de entender el lenguaje y resolver múltiples tareas <em>out-of-the-box</em>. Sin embargo, estos modelos recién salidos de fábrica vienen \"desnudos\", no tienen memoria sobre interacciones pasadas, ni acceso a bases de datos corporativas, ni capacidad para ejecutar acciones por sí solos.</p><p>Acá es donde conectamos el motor con el resto del ecosistema. Nuestro rol principal como orquestadores es tomar estos modelos pre-entrenados, ya sean de la familia <em>Llama, Claude</em> o <em>Gemini</em>, e integrarlos mediante APIs y código a un producto de software real. En lugar de investigar y entrenar redes neuronales, le diseñamos el \"cuerpo\" a ese cerebro para que pueda interactuar de forma segura y predecible con el entorno del usuario.</p><p><em>Source: AI Engineering Path, AI Engineering Guidebook & AI Engineering</em></p>"
            },
            {
                title: "La División del Ecosistema: Open vs. Closed Source",
                content: "<p>En la práctica, una vez que decidimos usar un <em>Foundation Model</em>, nos encontramos con la gran bifurcación del ecosistema actual: ¿consumimos un modelo cerrado o uno abierto? Esta elección define fundamentalmente la arquitectura de nuestro sistema y cómo van a fluir los datos, dividiendo el mercado entre modelos <em>Closed Source</em> y <em>Open Source</em> (o más precisamente, <em>Open Weights</em>).</p><p>El camino de los modelos propietarios (<em>Closed Source</em>) implica que el \"cerebro\" corre en la infraestructura de un gigante tecnológico. Como arquitectos, nos comunicamos con él enviando nuestro contexto a través de una API en la nube. Es la ruta de menor fricción para salir a producción, pero sistémicamente significa delegar el procesamiento a una \"caja negra\" donde no tenemos acceso a los pesos internos y los datos abandonan definitivamente nuestro entorno.</p><p>La alternativa descentralizada es el paradigma <em>Open Source</em>. Acá descargamos el modelo directamente desde repositorios como el <em>Hugging Face Hub</em> y lo levantamos en nuestra propia infraestructura usando motores de inferencia locales. Al aislar la ejecución (<em>Self-Hosting</em>), garantizamos que la información nunca salga de nuestras máquinas, obteniendo privacidad total sobre los datos del usuario, aunque a cambio asumimos la responsabilidad técnica de mantener el hardware y el entorno de ejecución.</p><p><em>Source: AI Engineer Roadmap, AI Engineering Path & AI Engineering Guidebook</em></p>"
            },
            {
                title: "Modelos Propietarios (Closed Source)",
                content: "<p>Cuando elegimos integrar un modelo propietario (como GPT-4 o Gemini), estamos optando por una arquitectura donde los pesos (<em>weights</em>) y el código interno del modelo se mantienen en secreto. Desde el punto de vista del flujo de datos, interactuamos con una caja negra gestionada íntegramente por el proveedor, accediendo a ella de forma exclusiva a través de una <em>API</em>,. En este escenario, todo el cómputo de <em>inference</em> ocurre en la infraestructura del tercero, donde enviamos nuestro contexto y simplemente esperamos recibir los <em>tokens</em> generados de vuelta.</p><p>La gran ventaja de esta decisión de diseño es que nos quita de encima el dolor de cabeza del hardware. Como <strong>AI Engineers</strong>, no necesitamos aprovisionar ni mantener costosos clústeres de GPUs para levantar estos monstruos matemáticos; el proveedor se encarga de la escalabilidad. Esto permite iterar y lanzar productos a producción rapidísimo, apoyándonos en modelos que actualmente suelen ser los más potentes del mercado \"out-of-the-box\".</p><p>Sin embargo, el precio a pagar por esta comodidad es la pérdida drástica de control sobre el sistema base. Cada vez que hacemos una llamada a la <em>API</em>, la información abandona nuestro entorno seguro, lo que introduce serios riesgos de privacidad y fugas de datos de nuestros clientes,. Además, quedamos atados a los costos por <em>token</em> del ecosistema cerrado y a sus decisiones comerciales: si la empresa actualiza, sobre-censura o retira el modelo, nuestro producto puede romperse de un día para el otro porque es imposible \"congelar\" y guardar localmente una versión específica de un modelo comercial,,.</p><p><em>Source: AI Engineering Path, AI Engineering & ai-engineer-roadmap/roadmap.json</em></p>"
            },
            {
                title: "Open Source y Open Weights",
                content: "<p>La otra cara de la moneda son los modelos <strong>Open Source</strong> o, para ser más precisos en esta industria, <strong>Open Weights</strong> (pesos abiertos). A diferencia del software tradicional donde tenés todo el código fuente, acá lo que liberan empresas como Meta (<strong><code>Llama</code></strong>) o <strong><code>Mistral AI</code></strong> son los miles de millones de parámetros matemáticos ya entrenados. Esto te da el poder de descargar el cerebro crudo desde repositorios como <strong><code>Hugging Face</code></strong>, que actúa como el verdadero hub central de este ecosistema.</p><p>Desde la perspectiva arquitectónica, esta ruta te da <strong>control absoluto y privacidad total</strong>. Como el modelo corre directamente en tu propia infraestructura local, los datos de tus usuarios nunca viajan a servidores de terceros, lo cual es crítico para empresas con reglas estrictas de seguridad. Además, tener los pesos en la mano es el único camino posible si necesitas hacer un <strong>fine-tuning</strong> profundo para adaptar el modelo a tareas de nicho súper específicas.</p><p>Pero no todo es color de rosa. El costo oculto de los <strong><code>Open Weights</code></strong> es la carga operativa. Ahora la responsabilidad técnica de levantar los servidores de inferencia, optimizar la latencia y lidiar con la gestión de clústeres de <strong>GPUs</strong> recae enteramente sobre tus hombros como <strong>AI Engineer</strong>. Pasás de ser un simple consumidor de una <strong><code>API</code></strong> a ser el administrador de una infraestructura pesada.</p><p><em>Source: AI Engineer Roadmap & AI Engineering Path</em></p>"
            },
            {
                title: "APIs de Modelos vs. Self-Hosting",
                content: "<p>Al decidir entre consumir <strong>Model APIs</strong> o ir por el camino del <strong>Self-Hosting</strong>, la balanza ha cambiado drásticamente en los últimos años. Usar una <strong><code>API</code></strong> comercial sigue siendo la ruta de menor fricción para prototipar: simplemente envías tu <em>prompt</em>, delegás la infraestructura al proveedor y pagás por el uso exacto de tus <em>tokens</em>. Sin embargo, montar tu propio servidor de inferencia pasó de ser una pesadilla técnica reservada para gigantes <em>Cloud</em> a una realidad completamente accesible para el desarrollador promedio gracias a la evolución de la industria,.</p><p>Este cambio fue posible porque la arquitectura interna de los modelos mutó hacia sistemas <strong>MoE (Mixture of Experts)</strong>. En lugar de encender toda la red neuronal para cada palabra, estos modelos activan solo una pequeña fracción de \"expertos\" por cada <em>token</em>, permitiendo escalar la inteligencia del sistema sin multiplicar su costo computacional,. Si a esta eficiencia sistémica le sumamos técnicas agresivas de <strong>quantization</strong> (que comprimen matemáticamente los pesos del modelo a formatos ultra livianos como <strong><code>GGUF</code></strong>), el resultado es brutal: hoy podés correr IA de nivel empresarial de forma local. Con la masificación de <strong>TPUs</strong> en notebooks y chips como el <em>Apple Neural Engine</em> que traen hardware nativo para inteligencia artificial, ejecutar un modelo pesado en tu propia máquina pasó a ser rápido y altamente eficiente.</p><p>Finalmente, esta democratización del hardware se cruza con un factor crítico que todo <strong>AI Engineer</strong> debe dominar: la geopolítica y la privacidad. Consumir una <strong><code>API</code></strong> implica inevitablemente que los datos sensibles abandonen tu entorno seguro hacia servidores ajenos. Por cuestiones de soberanía de datos y seguridad nacional, cada vez más países e instituciones prohíben por ley que su información cruce fronteras o sea procesada por terceros,. Ante este panorama, el viraje estratégico hacia el <strong>Open Source</strong> mediante <strong>Self-Hosting</strong> ya no es solo una preferencia técnica, sino un requisito arquitectónico obligatorio para garantizar privacidad absoluta y evitar el bloqueo de proveedores (<em>vendor lock-in</em>) en proyectos de alta confidencialidad,.</p><p><em>Source: AI Engineering, AI Engineering Guidebook & Hands-On Large Language Models</em></p>"
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
                content: `<p>En la industria de la IA, Python no es solo un lenguaje más: es el estándar absoluto. Todo el ecosistema moderno (desde la gestión de datos con <strong><code>pandas</code></strong> hasta el consumo de APIs con <strong><code>requests</code></strong> o los SDKs de orquestación) está construido nativamente por y para Python. Funciona como el pegamento perfecto que nos permite conectar modelos matemáticos masivos con productos de software reales de forma ágil y directa.</p><p>Sin embargo, acá es donde muchos se equivocan: como <strong>AI Engineers</strong>, no nos dedicamos a tirar <strong><code>scripts</code></strong> sueltos en un archivo <strong><code>.py</code></strong> y rezar para que funcionen. Nosotros construimos sistemas. Esto significa que, antes de siquiera pensar en llamar a un LLM, necesitamos configurar un <strong>Workbench</strong> (entorno de trabajo) verdaderamente profesional utilizando herramientas como <strong><code>Visual Studio Code</code></strong>.</p><p>Tener esta mentalidad de arquitecto desde el día uno es innegociable. Establecer un entorno sistémico real nos garantiza que nuestro código sea modular, que las dependencias no choquen entre sí y que el proyecto pueda escalar directo a producción. Básicamente, es lo que separa a un estudiante que juega con una API de un profesional que construye soluciones empresariales.</p>`
            },
            {
                title: "Arquitectura de Proyecto y Modularidad",
                content: `<p>Cuando pasamos de <em>scripts</em> de prueba a sistemas en producción, la arquitectura del chasis lo es todo. El principio sistémico acá es la <strong>separación de responsabilidades</strong>. Si mezclamos el código fuente con los datos crudos o los archivos de registro, encontrar un error o hacer <em>debugging</em> se vuelve una pesadilla técnica.</p><p>A nivel de directorio, aplicamos una división estricta creando carpetas dedicadas, como <strong><code>data</code></strong> para aislar los <em>inputs</em> o archivos crudos (como un archivo <strong><code>.csv</code></strong>), y <strong><code>output</code></strong> para depositar los resultados generados por nuestro sistema. Además, estandarizamos el nombrado de nuestros proyectos y carpetas usando <strong>kebab-case</strong> (todo en minúsculas y separado por guiones, como <strong><code>sales-analysis</code></strong>), ya que este formato mapea perfectamente con las convenciones que exige <strong><code>GitHub</code></strong> para nombrar repositorios de forma limpia.</p><p>A nivel de código, evitamos construir un monolito gigante. Dividimos el sistema en módulos independientes y específicos, separando la lógica en distintos archivos, como por ejemplo un <strong><code>analyzer.py</code></strong> para el procesamiento principal y un <strong><code>helpers.py</code></strong> para funciones auxiliares. Esta modularidad permite que las piezas interactúen mediante <em>imports</em> limpios, haciendo que la aplicación sea predecible y fácil de mantener.</p><p>Acá tenés una muestra exacta de cómo queda esta organización de carpetas en la práctica:</p><img src="assets/images/node-4/node4-img1.png" alt="Organización de carpetas del proyecto">`
            },
            {
                title: "Entornos Virtuales y Dependencias",
                content: `<p>En el mundo real, como arquitectos de IA, nunca instalamos librerías globalmente en nuestro sistema operativo. El motivo es simple: si tu Proyecto A usa la versión 1.0 de un paquete y tu Proyecto B necesita la versión 2.0, actualizarlo a nivel global romperá tu primer código. Para evitar este choque, creamos <strong>Virtual Environments</strong> (entornos virtuales), que funcionan como contenedores aislados con una copia privada de Python y sus librerías exclusivas para cada proyecto.</p><p>Históricamente, la industria gestionaba esto usando el instalador <strong><code>pip</code></strong> y guardando una lista de paquetes en un archivo <strong><code>requirements.txt</code></strong>. Aunque es el método clásico, es manual y propenso a generar conflictos. Hoy en día, el estándar moderno y ultrarrápido es <strong>uv</strong>. Esta herramienta reemplaza por completo a <strong><code>pip</code></strong> y automatiza todo el proceso: gestiona el entorno, descarga las dependencias y organiza los registros sin que tengas que microgestionar nada.</p><p>Al usar <strong><code>uv</code></strong>, la arquitectura genera tres componentes que ya vimos en nuestro chasis: la carpeta <strong><code>.venv/</code></strong> donde viven los paquetes aislados físicamente, el <strong><code>pyproject.toml</code></strong> que actúa como manifiesto declarando qué necesita tu código, y el <strong><code>uv.lock</code></strong> que toma una fotografía matemática y exacta de las versiones instaladas. Esta disciplina garantiza que cualquier otro ingeniero pueda clonar tu código y replicar el entorno a la perfección.</p><p>Acá tenés el paso a paso exacto de cómo usar <strong><code>uv</code></strong> en la consola de VS Code para inicializar este entorno:</p><img src="assets/images/node-4/node4-img2.png" alt="Inicialización de entorno con uv">`
            },
            {
                title: "Gestión de Secretos",
                content: `<p>En la ingeniería de IA, la ciberseguridad básica arranca con una regla de oro inquebrantable: <strong>jamás <em>hardcodear</em> una API Key en tu código fuente</strong>. En este ecosistema, tus llaves de API (como las de OpenAI, Google o Anthropic) equivalen a dinero en efectivo y acceso directo a tu infraestructura. Si subís un <em>script</em> con una clave expuesta a un repositorio público en <strong><code>GitHub</code></strong>, bots maliciosos pueden robarla en segundos y generarte facturas de miles de dólares.</p><p>Para resolver este problema arquitectónico, utilizamos un enfoque de variables de entorno. Creamos un archivo físico llamado <strong><code>.env</code></strong> en la raíz de nuestro proyecto donde guardamos todas nuestras credenciales. Como vimos en la estructura del chasis, este archivo debe estar estrictamente registrado en nuestro <strong><code>.gitignore</code></strong> para garantizar que nunca abandone nuestro entorno local ni se sincronice con internet.</p><p>Para conectar estas credenciales aisladas con nuestro flujo de datos, instalamos la librería <strong><code>python-dotenv</code></strong>. Esta herramienta actúa como un puente seguro: lee el archivo <strong><code>.env</code></strong> en tiempo de ejecución y carga las variables temporalmente en el entorno del sistema operativo. Esto nos permite que el código las consuma de forma dinámica utilizando el módulo nativo <strong><code>os</code></strong>, manteniendo los secretos invisibles en el código fuente.</p><img src="assets/images/node-4/node4-img3.png" alt="Uso de python-dotenv para cargar variables de entorno">`
            },
            {
                title: "Formateo de Código y Linting",
                content: `<p>Cuando construimos sistemas de IA en equipo, el código no solo tiene que funcionar para la máquina, sino que debe ser legible para los humanos y seguir el estándar de la industria (como PEP 8 en Python). Si cada ingeniero escribe con su propio estilo, el mantenimiento a largo plazo del repositorio colapsa. Para resolver esto de forma sistémica, no dependemos de la disciplina manual, sino que automatizamos el estilo usando herramientas como <em>linters</em> y <em>formatters</em>.</p><p>Hoy en día, la herramienta definitiva es <strong><code>ruff</code></strong>, que reemplaza a docenas de paquetes antiguos combinando <em>linting</em>, <em>formatting</em> y <em>import sorting</em> a una velocidad absurda. Podés ejecutarlo directamente desde la consola para afectar a todo el proyecto de una, pero como estamos armando un entorno profesional en <strong><code>Visual Studio Code</code></strong>, la mejor práctica es instalar su extensión oficial. Esto te permite formatear tu código automáticamente cada vez que guardás el archivo o limpiar errores con un par de clics, agilizando muchísimo tu flujo de trabajo.</p><img src="assets/images/node-4/node4-img4.png" alt="Extensión de Ruff en VS Code">`
            },
            {
                title: "Control de Versiones (Git & GitHub)",
                content: `<p>Como arquitectos de software, construir un sistema de IA sin un historial de versiones es como armar un rascacielos sin planos de respaldo. En nuestro flujo de trabajo utilizamos <strong>Git</strong> y <strong>GitHub</strong> no solo para colaborar, sino para crear <em>snapshots</em> (llamados <em>commits</em>) de cada iteración del código. Si una nueva librería o un cambio en la lógica del modelo rompe nuestra aplicación, tener este control de versiones nos permite retroceder a un estado estable en cuestión de segundos.</p><p>Sin embargo, antes de guardar nuestra arquitectura en la nube, hay una regla de seguridad y eficiencia que es inquebrantable: no todo el chasis se sube a internet. Para gestionar esto creamos un archivo <strong>.gitignore</strong> en la raíz del proyecto. Su función es decirle a <strong>Git</strong> qué carpetas deben permanecer estrictamente locales. Acá es donde bloqueamos nuestra carpeta <strong>.venv/</strong> (para no subir cientos de megabytes de dependencias pesadas) y nuestro archivo <strong>.env</strong> (garantizando que nuestras API Keys jamás queden expuestas).</p><p>Aunque <strong><code>Visual Studio Code</code></strong> tiene una interfaz visual excelente para hacer esto con un par de clics, entender el flujo de datos subyacente en la terminal es fundamental para cualquier <strong>AI Engineer</strong>.</p><p>Acá tenés los comandos exactos para crear tu .gitignore:</p><img src="assets/images/node-4/node4-img5.png" alt="Comandos para crear .gitignore">`
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
                content: `<p>Como <strong>AI Engineers</strong>, el error más común es pensar que necesitamos el modelo más grande e inteligente para todo. Antes de escribir una sola línea de código, la arquitectura de nuestro sistema debe responder a una pregunta clave: <strong>¿Qué tipo de proyecto estamos construyendo y cuál es su caso de uso?</strong>.</p><p>El contexto del negocio y tus <em>KPIs</em> (precisión, velocidad, costo) dictan la tecnología. Si estás armando un <strong>MVP</strong> o un proyecto personal, la velocidad de desarrollo y el costo son prioridad; ahí usás una API comercial rápida o un modelo local pequeño. Si estás construyendo una aplicación empresarial o de salud donde la privacidad de los datos es crítica, enviar información a la nube es inaceptable, lo que te obliga a ir por una arquitectura local (<em>Self-Hosted</em>) para garantizar que tu data sensible nunca abandone tu entorno seguro. Por el contrario, si el proyecto es un agente que toma decisiones de alto impacto, priorizamos la máxima capacidad de razonamiento aunque sea más lento o costoso.</p><p>Para hacer este <em>match</em> perfecto, primero debemos entender los <strong>tipos de modelos</strong> que existen en nuestro arsenal, ya que no todos hacen lo mismo:</p><ul><li><strong>Fast Models:</strong> Modelos optimizados para baja latencia y bajo costo. Se usan para tareas rutinarias, clasificar textos o hacer <em>chatbots</em> de respuesta inmediata. Si la velocidad es tu prioridad, esta es tu elección.</li><li><strong>Thinking / Reasoning Models:</strong> Modelos diseñados para tomarse su tiempo, razonar y pensar antes de escupir una respuesta. Son notablemente más lentos, pero indispensables para resolver lógica compleja, matemáticas o planificar misiones para agentes (ej: la serie <em>o-series</em> de OpenAI o los agentes de <em>Deep Research</em>).</li><li><strong>Embedding Models:</strong> No generan texto, sino que transforman palabras o imágenes en vectores matemáticos (números). Son el motor invisible detrás de cualquier sistema de búsqueda semántica, <em>Vector Databases</em> y <em>RAG</em> (ej: el modelo <strong><code>nomic-embed-text</code></strong> que podés correr en Ollama o los modelos de <em>Vertex AI</em>).</li><li><strong>Multimodal / Vision Models:</strong> Sistemas capaces de procesar múltiples tipos de datos de forma nativa, permitiendo que la IA pueda "ver" o "escuchar". Pueden analizar una imagen o un video para extraer su contexto, como el modelo abierto <strong><code>llava</code></strong> en local o la familia <em>Gemini</em> en la nube.</li></ul>`
            },
            {
                title: "La Matriz de Decisión (Estrategia y APIs en la Nube)",
                content: `<p>Si el objetivo de nuestro proyecto nos permite delegar el hardware y usar un modelo cerrado en la nube (<strong>Model-as-a-Service</strong>), la decisión técnica pasa a ser una decisión estratégica y de negocio. En este escenario, no nos importa qué GPU usa el proveedor para correr el modelo, sino cómo su <strong>API</strong> impacta directamente en la experiencia de nuestro usuario y en el presupuesto del proyecto. Para tomar esta decisión de forma sistémica, evaluamos cuatro métricas críticas:</p><ul><li><strong>Pricing (Costo por Token):</strong> Pagamos estrictamente por el uso. La regla de oro en la industria es que los <em>tokens</em> de entrada (<em>input</em> / leer el <em>prompt</em>) son mucho más baratos que los de salida (<em>output</em> / generar la respuesta). Diseñar bien la arquitectura implica optimizar cuánta información enviamos para no quemar el presupuesto de forma innecesaria.</li><li><strong>Latency (Velocidad):</strong> Se divide en dos fases clave. El <strong>TTFT</strong> (<em>Time to First Token</em>) mide cuánto tarda el servidor en procesar el <em>prompt</em> y escupir la primera palabra; es vital para que la aplicación se sienta reactiva ante el usuario. Luego está el <strong>TPOT</strong> (<em>Time per Output Token</em>), que indica a qué velocidad se genera el resto del texto.</li><li><strong>Context Window (Ventana de Contexto):</strong> Es la capacidad de memoria a corto plazo del modelo. Define cuánta información de "machete" le podemos inyectar de una sola vez. Hoy vemos extremos brutales: mientras algunos modelos manejan ventanas chicas, la familia <em>Gemini</em> soporta hasta 2 millones de <em>tokens</em>, permitiéndote procesar bases de código enteras o libros en un solo <em>prompt</em>.</li><li><strong>Task Capabilities (Capacidades de Tarea):</strong> Evaluamos qué nivel de inteligencia requiere el producto. ¿Necesitamos un razonamiento profundo y lento, o nos alcanza con un modelo ultrarrápido, económico y optimizado para respuestas inmediatas (como la versión <em>Flash</em> de <em>Gemini</em>)?.</li></ul><p>En este ecosistema cerrado, <strong>"Los Tres Grandes"</strong> que dominan el mercado de las APIs son <strong>Google (Gemini)</strong>, destacando por su multimodalidad nativa y contexto masivo; <strong>OpenAI (GPT)</strong>, el estándar de la industria con sus modelos avanzados de razonamiento; y <strong>Anthropic (Claude)</strong>, reconocidos por su estricta seguridad (alineación HHH) y alta precisión al leer contextos largos.</p>`
            },
            {
                title: "La Matriz de Decisión (Hardware Local y Pesos Abiertos)",
                content: `<p>Cuando las reglas del juego exigen privacidad absoluta de los datos, evitar la dependencia del proveedor (<em>vendor lock-in</em>) o eliminar los costos recurrentes de una API, la estrategia dicta descargar el modelo y correrlo "en casa". En este ecosistema, el hardware lo es todo. Para armar esta infraestructura utilizamos <strong>Hugging Face</strong> (el repositorio central o el "GitHub" del ML donde viven los modelos) y motores de inferencia ultrarrápidos como <strong>Ollama</strong>.</p><p>Para tomar una decisión arquitectónica acá, tenemos que saber leer las "métricas del fierro" de un modelo. Estas características aplican tanto a modelos abiertos como cerrados, pero en local dictan directamente si tu PC va a explotar o no:</p><ul><li><strong>Parameters (Tamaño del Modelo):</strong> Medido en Billones (B), como <em>1B, 8B, 70B o 405B</em>. Dicta la inteligencia cruda del modelo y cuánta memoria RAM/VRAM consumirá. Como regla general, un modelo más grande razona mejor, pero exige un servidor mucho más pesado.</li><li><strong>Quantization (Compresión):</strong> Para que un modelo masivo entre en el hardware de consumo, se reduce la precisión matemática de sus pesos. Pasamos de formatos originales y pesados (como <strong><code>FP16</code></strong>) a versiones comprimidas de 4 bits (ej: <strong><code>Q4_K_M</code></strong>) usando archivos con formato <strong><code>GGUF</code></strong>. Esto sacrifica una fracción mínima de precisión a cambio de que el modelo corra a toda velocidad en tu máquina local.</li><li><strong>Architecture (Dense vs. MoE):</strong> Define el diseño del cerebro. Puede ser una arquitectura densa (<em>Dense</em>), donde todo el modelo se activa para cada palabra (como la familia <em>Llama 3</em>), o una Mezcla de Expertos (<em>Mixture of Experts - MoE</em>), donde solo un pequeño "equipo de especialistas" se enciende según el tema de la consulta (como <em>Mixtral 8x7B</em>), optimizando drásticamente el uso de tu CPU/GPU.</li><li><strong>Specialization (Base vs. Instruct):</strong> Define cómo fue "esterilizado" o refinado el modelo. Un modelo <em>Base</em> es autocompletado puro (crudo y predecible). Un modelo <em>Instruct</em> o <em>Chat</em> fue alineado (generalmente mediante <em>RLHF</em> o <em>DPO</em>) para seguir tus instrucciones como un asistente, no generar contenido tóxico y ser seguro para el usuario final.</li></ul>`
            },
            {
                title: "APIs en la Nube (El Carril Rápido)",
                content: `<p>Cuando construimos sobre la nube usando el enfoque <strong>Model-as-a-Service (MaaS)</strong>, delegamos absolutamente toda la complejidad del hardware al proveedor. La arquitectura se reduce a un flujo de datos en la red: nuestro sistema empaqueta el <em>prompt</em> utilizando un <em>SDK</em> oficial, lo envía a través de una petición HTTP a los servidores remotos de Google, y sus clústeres de GPUs masivas se encargan de la inferencia pesada. Segundos después, recibimos la <em>completion</em> (respuesta) en nuestra máquina local sin haber gastado un solo byte de nuestra propia memoria RAM.</p><p><em>(Nota del Path: Durante todo este trayecto utilizaremos los modelos comerciales <strong>Gemini</strong> para la nube y el modelo abierto <strong>Gemma 4</strong> para la inferencia local. Unificar nuestro entorno bajo este mismo ecosistema garantiza una curva de aprendizaje fluida y librerías cien por ciento compatibles).</em></p><p>Para conectarnos a este ecosistema, primero necesitamos conseguir nuestras credenciales y conectarlas a la arquitectura segura que armamos en el Nodo 4. Acá tenés el flujo de trabajo completo:</p><img src="assets/images/node-5/node5-img1.png" alt="Flujo de trabajo para APIs en la nube">`
            },
            {
                title: "Inferencia Local con Ollama (El Carril Privado)",
                content: `<p>Cuando la arquitectura de nuestro sistema exige privacidad absoluta de los datos, funcionamiento <em>offline</em> o la eliminación de costos recurrentes de API, cambiamos de carril y ejecutamos la inferencia "en casa" (<em>Local Inference</em>). En este escenario, abandonamos la nube y utilizamos motores ultrarrápidos como <strong>Ollama</strong> para abstraer toda la complejidad técnica del hardware subyacente. El flujo de datos cambia radicalmente: Ollama carga físicamente los pesos matemáticos de nuestro modelo abierto (en este caso <strong><code>gemma4eb</code></strong>) desde el disco duro directamente hacia nuestra memoria RAM o VRAM. Nuestro <em>script</em> de Python simplemente se comunica con este motor a través de una API que corre en <strong><code>localhost</code></strong>, logrando que las fases de <em>prefill</em> y <em>decode</em> ocurran estrictamente dentro de nuestra propia máquina.</p><p>Acá tenés el flujo de trabajo esta vez con Ollama:</p><img src="assets/images/node-5/node5-img2.png" alt="Flujo de trabajo para inferencia local con Ollama">`
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
    // El contenido ahora se espera que sea HTML válido para poder incluir imágenes.
    document.getElementById('topic-detail-body').innerHTML = topic.content;

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