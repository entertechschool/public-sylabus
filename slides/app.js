document.addEventListener("DOMContentLoaded", function () {
	// Referencias a elementos del DOM
	const slidesContainer = document.getElementById("slides-container");
	const loadingScreen = document.getElementById("loading");
	const errorMessage = document.getElementById("error");
	const slideTemplate = document.getElementById("slide-template");
	const presentationContainer = document.getElementById("presentation-container");
	const whiteboardPanel = document.getElementById("whiteboard-panel");
	const closeWhiteboardBtn = document.getElementById("close-whiteboard");
	const whiteboardToggleBtn = document.getElementById("whiteboard-toggle-btn");
	const imageModal = document.getElementById("image-modal");
	const imageModalImg = document.getElementById("image-modal-img");
	const imageModalClose = document.getElementById("image-modal-close");

	// Obtener parámetros de la URL
	const urlParams = new URLSearchParams(window.location.search);

	// Determinar la URL del contenido
	getContentUrl(urlParams)
		.then((contentUrl) => {
			if (!contentUrl) {
				showError('No se especificó un contenido válido. Usa el parámetro "content" o "class" en la URL.');
				return;
			}

			// Cargar el contenido
			loadPresentation(contentUrl);
		})
		.catch((error) => {
			showError(`Error: ${error.message}`);
		});

	// Configurar eventos de teclado y UI
	setupWhiteboardEvents();
	setupImageModalEvents();

	/**
	 * Determina la URL del contenido basado en los parámetros
	 * @param {URLSearchParams} params - Los parámetros de la URL
	 * @returns {Promise<string|null>} Promesa que resuelve a la URL del contenido o null
	 */
	function getContentUrl(params) {
		return new Promise((resolve, reject) => {
			// Verificar si hay un parámetro "file" para archivos locales
			if (params.has("file")) {
				const fileName = params.get("file");
				// Construir la ruta al archivo local
				const localFilePath = getLocalFilePath(fileName);
				resolve(localFilePath);
				return;
			}

			// Verificar si hay un parámetro "class"
			if (params.has("class")) {
				const classCode = params.get("class");
				transformClassCodeToUrl(classCode)
					.then((url) => resolve(url))
					.catch((error) => reject(error));
				return;
			}

			resolve(null);
		});
	}

	/**
	 * Construye la ruta a un archivo local en el proyecto
	 * @param {string} fileName - El nombre del archivo (ej: "201_04" o "201_04.md")
	 * @returns {string} La ruta al archivo local
	 */
	function getLocalFilePath(fileName) {
		// Verificar si el nombre de archivo ya tiene extensión .md
		if (!fileName.toLowerCase().endsWith(".md")) {
			fileName = `${fileName}.md`;
		}

		// Construir la ruta relativa al archivo local
		return `markdown/${fileName}`;
	}

	/**
	 * Transforma un código de clase en una URL completa
	 * @param {string} classCode - El código de clase (ej: "301_02")
	 * @returns {Promise<string|null>} Promesa que resuelve a la URL del contenido
	 */
	function transformClassCodeToUrl(classCode) {
		return new Promise((resolve, reject) => {
			// Validar formato: Patrón esperado: code-101_04, 301_02, cyber-201_13, etc.
			// Para ver los patrones validos, consultar "./data.json"
			const parts = classCode.split("_");

			if (parts.length !== 2) {
				reject(new Error(`Formato de código de clase inválido: ${classCode}. El formato correcto es "code-301_02".`));
				return;
			}

			const courseNumber = parts[0];
			let classNumber = parts[1];

			// Asegurar que el número de clase siempre tenga 2 dígitos
			if (classNumber.length === 1) {
				classNumber = `0${classNumber}`;
			}

			// Cargar los datos de rutas desde data.json
			fetch("data.json", { cache: "no-store" })
				.then((response) => {
					if (!response.ok) {
						throw new Error("No se pudo cargar el archivo de configuración de rutas.");
					}
					return response.json();
				})
				.then((routesData) => {
					if (!Array.isArray(routesData)) {
						throw new Error("El archivo de configuración no tiene el formato esperado.");
					}

					// Buscar la ruta base para el número de curso
					let baseUrl = null;

					for (const item of routesData) {
						if (item && item[courseNumber]) {
							baseUrl = item[courseNumber];
							break;
						}
					}

					if (!baseUrl) {
						throw new Error(`No se encontró configuración para el curso ${courseNumber}.`);
					}

					// Construir la URL completa apuntando específicamente al README.md
					resolve(`${baseUrl}curriculum/class-${classNumber}/slides/README.md`);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	/**
	 * Override del centrado vertical de Reveal.js
	 * Cambia de 1/2 a 1/3 del height disponible
	 */
	function overrideCenteringLogic() {
		// Interceptar el método de layout de Reveal.js
		const originalLayout = Reveal.layout;

		Reveal.layout = function () {
			// Llamar al layout original primero
			originalLayout.call(this);

			// Luego aplicar nuestro centrado personalizado
			customCenterSlides();
		};

		// También aplicar en eventos de cambio de slide
		Reveal.addEventListener('slidechanged', customCenterSlides);
		Reveal.addEventListener('resize', customCenterSlides);
	}

	/**
	 * Aplicar centrado personalizado (1/3 en lugar de 1/2)
	 */
	function customCenterSlides() {
		const config = Reveal.getConfig();
		const size = Reveal.getComputedSlideSize();

		// Obtener todas las slides visibles
		const slides = document.querySelectorAll('.reveal .slides section');

		slides.forEach(slide => {
			// Solo aplicar si center está habilitado y no es un stack
			if ((config.center || slide.classList.contains('center')) &&
				!slide.classList.contains('stack')) {

				// Calcular 1/3 en lugar de 1/2
				const topOffset = Math.max((size.height - slide.scrollHeight) / 3, 0);
				const topOffsetFixed = (topOffset === 0) ? '4vh' : topOffset + 'px';
				slide.style.top = topOffsetFixed;

				// Debug info (opcional - puedes comentar esta línea)
				console.log(`Slide centered at 1/3: ${topOffset}px (height: ${size.height}, content: ${slide.scrollHeight})`);
			}
		});
	}

	/**
	 * Carga la presentación desde la URL especificada
	 * @param {string} url - La URL del contenido Markdown
	 */
	function loadPresentation(url) {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Error al cargar el contenido: ${response.status} ${response.statusText}`);
				}
				return response.text();
			})
			.then((markdownContent) => {
				if (!markdownContent || markdownContent.trim() === "") {
					throw new Error("El contenido de la presentación está vacío.");
				}

				// Obtener la URL base para las imágenes
				const baseUrl = url.substring(0, url.lastIndexOf('/') + 1);

				// Reemplazar rutas relativas de imágenes
				const processedContent = markdownContent.replace(
					/!\[(.*?)\]\(\.\/([^)]+)\)/g,
					`![$1](${baseUrl}$2)`
				);

				// Limpiar el contenedor de diapositivas antes de agregar contenido nuevo
				slidesContainer.innerHTML = "";

				// Procesamos el markdown para obtener las secciones individuales
				const sections = processMarkdownToSections(processedContent);

				// Crear diapositivas con el template personalizado
				sections.forEach((sectionContent, index) => {
					const slideHtml = createSlideFromTemplate(sectionContent, index + 1, sections.length);
					slidesContainer.innerHTML += slideHtml;
				});

				// Inicializar RevealJS
				Reveal.initialize({
					hash: true,
					controls: true,
					progress: true,
					center: true,
					transition: "slide",
					backgroundTransition: "fade",
					plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealZoom, RevealMath.KaTeX],
					markdown: {
						smartypants: true,
					},
					// Configuraciones adicionales para solucionar el problema de scroll
					embedded: false,
					touch: true,
					disableLayout: false,
					// Escala:
					minScale: 0.95, // Aumentar escala mínima
					maxScale: 1.1, // Limitar escala máxima
				});

				// Procesar el contenido Markdown después de la inicialización
				Reveal.addEventListener("ready", function () {
					// Aplicar override del centrado personalizado
					overrideCenteringLogic();
					// Forzar el procesamiento de Markdown en cada sección
					document.querySelectorAll(".slide-inner-content").forEach((element) => {
						if (element.getAttribute("data-processed") !== "true") {
							const content = element.innerHTML;
							if (content.includes("#") || content.includes("-") || content.includes("*")) {
								// Si parece markdown, intentamos procesarlo
								const html = markdownToHTML(content);
								element.innerHTML = html;
							}
							element.setAttribute("data-processed", "true");
						}
					});

					// Inicializar Mermaid en todos los diagramas
					if (typeof mermaid !== 'undefined') {
						mermaid.initialize({
							startOnLoad: false,
							theme: 'dark',
							themeVariables: {
								primaryColor: '#88d2f2',
								primaryTextColor: '#fff',
								primaryBorderColor: '#1e2cff',
								lineColor: '#7b1eff',
							},
							securityLevel: 'loose',
							flowchart: {
								useMaxWidth: true,
								htmlLabels: true,
								curve: 'basis',
								padding: 20,
								nodeSpacing: 100,
								rankSpacing: 80,
							},
							fontSize: 16,
						});

						// Renderizar todos los diagramas Mermaid
						document.querySelectorAll('.mermaid').forEach((element, index) => {
							try {
								const id = element.id || `mermaid-${Date.now()}-${index}`;
								const content = element.textContent;

								mermaid.render(id, content).then(({ svg }) => {
									element.innerHTML = svg;

									// Ajustar el SVG para que sea responsive
									const svgElement = element.querySelector('svg');
									if (svgElement) {
										svgElement.removeAttribute('height');
										svgElement.style.width = '100%';
										svgElement.style.height = 'auto';
										svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
									}
								});
							} catch (error) {
								console.error('Error rendering Mermaid diagram:', error);
								element.innerHTML = `<p style="color: red;">Error rendering diagram</p>`;
							}
						});
					}

				});

				// Ocultar pantalla de carga con una animación suave
				setTimeout(() => {
					loadingScreen.style.opacity = 0;
					setTimeout(() => {
						loadingScreen.style.display = "none";
					}, 500);
				}, 500);
			})
			.catch((error) => {
				showError(`Error: ${error.message}`);
			});
	}

	// Añadir esto después de la inicialización
	Reveal.addEventListener("ready", function () {
		addMobileScrollSupport();
	});

	Reveal.addEventListener("slidechanged", function () {
		addMobileScrollSupport();
	});

	/**
	 * Añade soporte para scroll en dispositivos móviles
	 */
	function addMobileScrollSupport() {
		const isMobile = window.matchMedia("(max-width: 768px)").matches;

		if (isMobile) {
			// Obtener todas las secciones actuales
			document.querySelectorAll(".present").forEach(function (slide) {
				// Habilitar interacciones táctiles para scroll vertical
				slide.style.touchAction = "pan-y";
				slide.style.overflowY = "auto";

				// Detectar si el contenido necesita scroll
				setTimeout(() => {
					const contentHeight = slide.scrollHeight;
					const viewportHeight = slide.clientHeight;

					if (contentHeight > viewportHeight + 100) {
						// +100px de margen para estar seguros
						console.log("Slide necesita scroll:", contentHeight, viewportHeight);
						slide.classList.add("needs-scroll");
					} else {
						slide.classList.remove("needs-scroll");
					}
				}, 500); // Pequeño retraso para asegurar que el contenido esté renderizado
			});
		}
	}

	/**
	 * Divide el contenido Markdown en secciones separadas por el delimitador de diapositivas
	 * @param {string} markdownContent - El contenido Markdown completo
	 * @returns {string[]} Array con el contenido de cada sección
	 */
	function processMarkdownToSections(markdownContent) {
		if (!markdownContent) return [];

		// Separar el contenido por el delimitador de diapositivas horizontales
		const sections = markdownContent.split(/^---$/m).filter((section) => section.trim() !== "");

		// Si no hay secciones, consideramos todo el contenido como una sola sección
		if (sections.length === 0) {
			return [markdownContent];
		}

		return sections;
	}

	/**
	 * Crea una diapositiva a partir de la plantilla
	 * @param {string} content - El contenido de la diapositiva
	 * @param {number} slideNumber - El número de diapositiva
	 * @param {number} totalSlides - El número total de diapositivas
	 * @returns {string} El HTML para la diapositiva
	 */
	function createSlideFromTemplate(content, slideNumber, totalSlides) {
		try {
			if (!slideTemplate || !slideTemplate.content) {
				console.warn("La plantilla de diapositiva no está disponible");
				return `<section data-markdown><textarea data-template>${content}</textarea></section>`;
			}

			// Clonar la plantilla
			const clone = slideTemplate.content.cloneNode(true);
			const slide = clone.querySelector("section");

			if (!slide) {
				console.warn("No se encontró el elemento section en la plantilla");
				return `<section data-markdown><textarea data-template>${content}</textarea></section>`;
			}

			// Aquí establecemos el contenido para el inner-content
			const innerContent = slide.querySelector(".slide-inner-content");
			if (innerContent) {
				innerContent.innerHTML = content;
			}

			// Reemplazar marcadores de posición
			const html = slide.outerHTML.replace("{{slideNumber}}", slideNumber).replace("{{totalSlides}}", totalSlides).replace("{{content}}", content);

			return html;
		} catch (error) {
			console.error("Error al crear diapositiva:", error);
			return `<section data-markdown><textarea data-template>${content}</textarea></section>`;
		}
	}

	/**
	 * Convierte texto Markdown a HTML usando una implementación básica
	 * @param {string} markdown - El texto en formato Markdown
	 * @returns {string} El HTML resultante
	 */
	function markdownToHTML(markdown) {
		// Primero procesamos los bloques de código Mermaid
		let html = markdown.replace(/```mermaid\n([\s\S]*?)```/g, function (match, mermaidCode) {
			const id = 'mermaid-diagram-' + Math.random().toString(36).substring(2, 10);
			return `<div class="mermaid-container"><div class="mermaid" id="${id}">${mermaidCode}</div></div>`;
		});

		// Esta es una implementación muy básica para cuando RevealJS no procesa el markdown
		// En un entorno real, se usaría una biblioteca completa de Markdown
		html = html
			// Encabezados
			.replace(/^# (.*$)/gm, "<h1>$1</h1>")
			.replace(/^## (.*$)/gm, "<h2>$1</h2>")
			.replace(/^### (.*$)/gm, "<h3>$1</h3>")
			// Listas
			.replace(/^\* (.*$)/gm, "<ul><li>$1</li></ul>")
			.replace(/^- (.*$)/gm, "<ul><li>$1</li></ul>")
			// Párrafos
			.replace(/^\n(.+)$/gm, "<p>$1</p>");

		return html;
	}

	/**
	 * Muestra un mensaje de error
	 * @param {string} message - El mensaje de error
	 */
	function showError(message) {
		if (loadingScreen) {
			loadingScreen.style.display = "none";
		}

		if (errorMessage) {
			errorMessage.textContent = message || "Ha ocurrido un error desconocido.";
			errorMessage.style.display = "block";
		}

		console.error(message);
	}

	/**
	 * Configura los eventos del whiteboard y teclado
	 */
	function setupWhiteboardEvents() {
		// Evento para tecla W - toggle whiteboard
		document.addEventListener('keydown', function (event) {
			// Solo activar si no estamos escribiendo en un input o textarea
			if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
				if (event.key.toLowerCase() === 'w') {
					toggleWhiteboard();
					event.preventDefault();
				}
			}
		});

		// Evento para cerrar whiteboard con botón
		if (closeWhiteboardBtn) {
			closeWhiteboardBtn.addEventListener('click', function () {
				toggleWhiteboard();
			});
		}

		// Evento para botón W toggle
		if (whiteboardToggleBtn) {
			whiteboardToggleBtn.addEventListener('click', function () {
				toggleWhiteboard();
			});
		}

		// Cerrar whiteboard con Escape
		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape' && presentationContainer.classList.contains('dual-mode')) {
				toggleWhiteboard();
				event.preventDefault();
			}
		});
	}

	/**
	 * Alterna la visibilidad del whiteboard
	 */
	function toggleWhiteboard() {
		const isDualMode = presentationContainer.classList.contains('dual-mode');

		if (isDualMode) {
			// Cerrar whiteboard
			presentationContainer.classList.remove('dual-mode');
		} else {
			// Abrir whiteboard
			presentationContainer.classList.add('dual-mode');
		}
	}

	/**
	 * Configura los eventos del modal de imagen
	 */
	function setupImageModalEvents() {
		// Delegar evento click en imágenes de los slides
		if (slidesContainer) {
			slidesContainer.addEventListener('click', function(event) {
				if (event.target.tagName === 'IMG' && !event.target.classList.contains('brand-logo')) {
					openImageModal(event.target);
				}
			});
		}

		// Delegar evento click en diagramas Mermaid
		if (slidesContainer) {
			slidesContainer.addEventListener('click', function(event) {
				// Verificar si el click es en un elemento mermaid o dentro de uno
				const mermaidElement = event.target.closest('.mermaid');
				if (mermaidElement) {
					openMermaidModal(mermaidElement);
				}
			});
		}

		// Delegar evento click en tablas
		if (slidesContainer) {
			slidesContainer.addEventListener('click', function(event) {
				// Verificar si el click es en una tabla o dentro de una
				const tableElement = event.target.closest('table');
				if (tableElement) {
					openTableModal(tableElement);
				}
			});
		}

		// Cerrar modal con botón X
		if (imageModalClose) {
			imageModalClose.addEventListener('click', closeImageModal);
		}

		// Cerrar modal con click en el overlay
		if (imageModal) {
			imageModal.addEventListener('click', function(event) {
				if (event.target === imageModal) {
					closeImageModal();
				}
			});
		}

		// Cerrar modal con tecla Escape
		document.addEventListener('keydown', function(event) {
			if (event.key === 'Escape' && imageModal.classList.contains('active')) {
				closeImageModal();
				event.preventDefault();
			}
		});
	}

	/**
	 * Abre el modal con la imagen seleccionada
	 * @param {HTMLImageElement} img - El elemento de imagen clickeado
	 */
	function openImageModal(img) {
		if (imageModal && imageModalImg) {
			// Limpiar cualquier contenido Mermaid previo
			const existingMermaid = imageModal.querySelector('.mermaid-modal-content');
			if (existingMermaid) {
				existingMermaid.remove();
			}

			imageModalImg.src = img.src;
			imageModalImg.alt = img.alt || '';
			imageModalImg.style.display = 'block';
			imageModal.classList.add('active');
			// Prevenir scroll del body mientras el modal está abierto
			document.body.style.overflow = 'hidden';
		}
	}

	/**
	 * Abre el modal con un diagrama Mermaid
	 * @param {HTMLElement} mermaidElement - El elemento mermaid clickeado
	 */
	function openMermaidModal(mermaidElement) {
		if (imageModal) {
			// Ocultar la imagen
			if (imageModalImg) {
				imageModalImg.style.display = 'none';
			}

			// Limpiar cualquier contenido previo
			const existingMermaid = imageModal.querySelector('.mermaid-modal-content');
			if (existingMermaid) {
				existingMermaid.remove();
			}
			const existingTable = imageModal.querySelector('.table-modal-content');
			if (existingTable) {
				existingTable.remove();
			}

			const mermaidContainer = document.createElement('div');
			mermaidContainer.className = 'mermaid-modal-content';
			mermaidContainer.innerHTML = mermaidElement.innerHTML;

			const modalContent = imageModal.querySelector('.image-modal-content');
			if (modalContent) {
				modalContent.appendChild(mermaidContainer);
			}

			imageModal.classList.add('active');
			// Prevenir scroll del body mientras el modal está abierto
			document.body.style.overflow = 'hidden';
		}
	}

	/**
	 * Abre el modal con una tabla
	 * @param {HTMLElement} tableElement - El elemento tabla clickeado
	 */
	function openTableModal(tableElement) {
		if (imageModal) {
			// Ocultar la imagen
			if (imageModalImg) {
				imageModalImg.style.display = 'none';
			}

			// Limpiar cualquier contenido previo
			const existingMermaid = imageModal.querySelector('.mermaid-modal-content');
			if (existingMermaid) {
				existingMermaid.remove();
			}
			const existingTable = imageModal.querySelector('.table-modal-content');
			if (existingTable) {
				existingTable.remove();
			}

			const tableContainer = document.createElement('div');
			tableContainer.className = 'table-modal-content';
			tableContainer.innerHTML = tableElement.outerHTML;

			const modalContent = imageModal.querySelector('.image-modal-content');
			if (modalContent) {
				modalContent.appendChild(tableContainer);
			}

			imageModal.classList.add('active');
			// Prevenir scroll del body mientras el modal está abierto
			document.body.style.overflow = 'hidden';
		}
	}

	/**
	 * Cierra el modal de imagen
	 */
	function closeImageModal() {
		if (imageModal) {
			imageModal.classList.remove('active');
			// Restaurar scroll del body
			document.body.style.overflow = '';
			// Limpiar src para evitar parpadeos
			setTimeout(() => {
				if (imageModalImg) {
					imageModalImg.src = '';
					imageModalImg.style.display = 'block';
				}
				// Limpiar cualquier contenido Mermaid
				const existingMermaid = imageModal.querySelector('.mermaid-modal-content');
				if (existingMermaid) {
					existingMermaid.remove();
				}
				// Limpiar cualquier contenido de tabla
				const existingTable = imageModal.querySelector('.table-modal-content');
				if (existingTable) {
					existingTable.remove();
				}
			}, 300);
		}
	}
});
