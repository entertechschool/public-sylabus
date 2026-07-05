---
layout: default
title: "AI 101 — IA + Automatización"
---

# AI 101 — IA + Automatización No-Code para Profesionales

> Construye soluciones automatizadas que integran inteligencia artificial con herramientas no-code (Make + Gemini + Google Workspace) para resolver problemas reales de tu trabajo — sin escribir una línea de código.

**Duración**: 4 semanas (8 horas en vivo)  
**Modalidad**: Clases en vivo online (2 sesiones por semana, 60 min cada una)  
**Dirigido a**: Profesionales en activo, emprendedores o estudiantes avanzados que quieren automatizar tareas repetitivas de su trabajo con IA, sin perfil técnico.  
**Prerequisitos**: Ninguno. Solo manejo básico de navegación web, correo y Google Drive.

> 🟢 No se requiere experiencia en programación ni en IA.

> En 8 sesiones construirás un sistema que detecta documentos, extrae sus datos con IA, los registra y genera reportes automáticos — todo con herramientas 100% gratuitas y aplicado a un caso real de tu trabajo.

## Inversión de tiempo

| Tipo de actividad         | Horas |
|---------------------------|-------|
| Clases en vivo (8 × 60 min) | 8   |
| **Total**                 | **8** |

> 🟢 Todo el trabajo se hace **en vivo durante la clase**. No hay tareas ni entregables posteriores a cada sesión.

---

## 🎯 Resultados de aprendizaje

Al finalizar este curso, podrás:

1. **Diseñar prompts efectivos para tareas profesionales**
   - Comprender, sin tecnicismos, cómo funciona un modelo de lenguaje y por qué "alucina"
   - Aplicar la estructura Rol + Tarea + Contexto + Formato + Restricciones
   - Obtener respuestas precisas y reutilizables para tu trabajo diario

2. **Construir automatizaciones no-code en Make**
   - Crear un escenario conectando una cuenta Google vía OAuth
   - Configurar un proyecto en Google Cloud (Client ID + Secret)
   - Encadenar módulos, triggers, filtros y routers sin escribir código

3. **Integrar inteligencia artificial dentro de tus flujos**
   - Generar una API key de Gemini gratuita en Google AI Studio
   - Procesar la respuesta de la IA con Parse JSON y un Data Structure
   - Convertir texto libre (correos, documentos) en datos estructurados

4. **Construir y presentar un sistema automatizado de principio a fin**
   - Generar documentos y presentaciones con plantillas y placeholders `{% raw %}{{variable}}{% endraw %}`
   - Diseñar un flujo robusto con manejo de errores, logs y alertas
   - Aplicar todo a un caso real de tu trabajo y sustentarlo en un Demo Day

---

## El caso guía: el sistema de facturas

Todo el curso gira alrededor de un caso real que construimos pieza por pieza: la **automatización de facturas**.

**El dolor de hoy:** las facturas llegan dispersas (correo, Drive, papel), alguien transcribe proveedor, monto y fecha a mano, y el reporte mensual se arma copiando y pegando. Si algo se cae, nadie se entera a tiempo.

**Lo que construyes:** subes una factura a Drive → Make la detecta → Gemini lee el documento y extrae los datos → caen estructurados en un Google Sheet → cada mes se genera un reporte con plantilla y se envía por correo, con filtros, manejo de errores y alertas.

En las **sesiones 1 a 6** aprendes cada pieza sobre el caso facturas (con casos paralelos como clasificar correos o extraer ventas desde Gmail). En las **sesiones 7 y 8** construyes y presentas tu **proyecto integrador propio**, aplicando todo a un caso real de tu trabajo.

---

## Sílabo del Curso

### Módulo 1: Fundamentos del Sistema

Aprendes las primeras piezas del sistema: cómo hablarle bien a la IA, cómo conectar tus cuentas Google a una plataforma de automatización, cómo darle "cerebro" de IA a un flujo y cómo convertir su respuesta en datos limpios. Al cerrar el módulo ya tienes un flujo que lee facturas y registra sus datos solo.

#### Sesión 1: Prompts efectivos (60 min, en vivo)
- Qué es un modelo de lenguaje y por qué "alucina" (explicación no técnica)
- Anatomía de un prompt profesional: Rol + Tarea + Contexto + Formato + Restricciones
- Cómo iterar un prompt hasta obtener el resultado exacto que necesitas
- Casos profesionales: clasificar correos, resumir reuniones, redactar respuestas
- **Mini-proyecto (en vivo):** diseñar 3 prompts profesionales y probarlos en Gemini
- **Entregable:** 3 prompts efectivos listos para reutilizar en tu trabajo

#### Sesión 2: Make 101 + Google Cloud (60 min, en vivo)
- Qué es Make: escenarios, módulos, operaciones y conexiones
- Triggers: cuándo usar Watch (en tiempo real) vs Schedule (por lotes)
- OAuth y Google Cloud Project: conectar Google con Client ID + Secret
- Primer flujo sin IA: Drive → Make → nueva fila en Google Sheets
- **Mini-proyecto (en vivo):** registrar facturas automáticamente de Drive a un Sheet
- **Entregable:** tu primer escenario de Make funcionando end-to-end

#### Sesión 3: API key de Gemini (60 min, en vivo)
- Qué es una API y cómo Make habla con la IA (sin jerga técnica)
- Obtener una API key gratuita de Gemini en Google AI Studio
- Agregar el módulo de Gemini a un flujo y enviarle un prompt
- Extraer un primer dato de la factura (el proveedor) hacia el Sheet
- **Mini-proyecto (en vivo):** la factura pasa por Gemini → extrae el proveedor → nueva columna en el Sheet
- **Entregable:** flujo con IA integrada extrayendo datos de documentos reales

#### Sesión 4: JSON + Parse JSON (60 min, en vivo)
- Qué es JSON y por qué la IA responde mejor en ese formato
- El módulo Parse JSON y el Data Structure: de texto a variables que el flujo entiende
- Mapear cada campo extraído a su columna correspondiente
- Caso paralelo: extraer ventas desde correos informales de Gmail
- **Mini-proyecto (en vivo):** extracción de ventas desde Gmail → JSON → cada campo en su columna
- **Entregable:** flujo que convierte texto libre en datos estructurados completos

#### Herramientas del módulo
- Gemini (chat base para diseñar y probar prompts)
- Make (plataforma de automatización visual, plan gratuito)
- Google Cloud Console (proyecto OAuth: Client ID + Secret)
- Google AI Studio (API key gratuita de Gemini)
- Google Drive y Google Sheets

---

### Módulo 2: Integración y Proyecto

Conviertes las piezas en un sistema completo y profesional: generas documentos automáticos con plantillas, blindas el flujo contra errores y, finalmente, construyes y presentas tu propio sistema aplicado a un caso real de tu trabajo.

#### Sesión 5: Plantillas con placeholders (60 min, en vivo)
- Qué es una plantilla: formato fijo, datos variables
- Placeholders `{% raw %}{{variable}}{% endraw %}`: cómo Make rellena cada hueco con un dato real
- Dar formato a los datos antes de inyectarlos (fechas, montos, porcentajes)
- Generar un documento o presentación automáticamente desde el Sheet
- **Mini-proyecto (en vivo):** reporte mensual de facturas: Sheet → Slide con plantilla → Drive/email
- **Entregable:** reporte profesional generado automáticamente desde tus datos

#### Sesión 6: Flujo end-to-end robusto (60 min, en vivo)
- Watch vs Schedule: disparar por evento o a hora fija
- Filtros y routers: que el flujo decida solo qué procesar y por qué ruta
- Manejo de errores: que el flujo no muera en silencio (handlers, reintentos, alertas)
- Logs y monitoreo: saber qué pasó en cada corrida
- **Mini-proyecto (en vivo):** flujo completo de facturas (Drive → IA → Sheets → Docs → email) con filtros, router y manejo de errores
- **Entregable:** sistema de facturas completo y robusto funcionando solo

#### Sesión 7: Proyecto integrador (60 min, en vivo)
- Transferir el patrón aprendido a un caso real propio
- Diagramar la arquitectura antes de construir: problema → solución → módulos
- Adaptar Sheet, prompts y plantillas a tu industria
- Construir, probar y refinar una primera versión funcionando
- **Mini-proyecto (en vivo):** tu propio flujo v1 funcionando con datos reales de tu trabajo
- **Entregable:** sistema automatizado propio resolviendo un caso real

#### Sesión 8: Exposición / Demo Day (60 min, en vivo)
- Estructura de una demo efectiva en 5 minutos: caso → demo → resultados → aprendizajes
- Preparar la demo en vivo (con plan de respaldo si algo falla)
- Comunicar resultados: lo cuantitativo (tiempo, costo, items) + lo cualitativo
- Tu roadmap personal: la próxima automatización a construir
- **Mini-proyecto (en vivo):** demo en vivo de tu sistema ante la clase + Q&A
- **Entregable:** proyecto integrador sustentado en Demo Day

#### Herramientas del módulo
- Make (Parse JSON, routers, filtros, error handlers)
- Google Docs / Slides (plantillas con placeholders)
- Gemini API (extracción de datos y generación de contenido)
- Gmail (entrada de datos y entrega de reportes)

---

## Proyecto Final del Curso

### **Tu sistema de automatización con IA**

En las sesiones 7 y 8 eliges un caso real de tu trabajo (contabilidad, atención al cliente, marketing, ventas, RR.HH., etc.), lo diagramas y construyes una primera versión funcionando con datos reales, para luego presentarlo en Demo Day.

**Componentes del proyecto:**
- Un trigger que detecta la entrada de datos (archivo o correo nuevo)
- Extracción de datos con IA (Gemini) y estructuración con Parse JSON
- Registro automático en Google Sheets
- Generación de un documento/reporte con plantilla y placeholders
- Demo en vivo de 5 minutos ante la clase

**Entregables:**
- Un flujo automatizado propio funcionando con datos reales de tu trabajo
- Resultado tangible del sistema (reporte, documento o registro generado solo)
- Demo en vivo presentado ante pares con feedback
- Roadmap personal: tu próxima automatización

---

## Resultado Final

Al finalizar el curso tendrás:

- Un sistema automatizado funcionando con datos reales de tu trabajo
- Reportes o documentos generados y entregados automáticamente por correo
- Una biblioteca de prompts efectivos lista para reutilizar
- Dominio práctico de Make + Gemini + Google Workspace, sin código
- Un roadmap con la próxima automatización a construir

---

## Diferenciación

| Aspecto      | Otros programas                       | Enter Tech School                                  |
|--------------|---------------------------------------|----------------------------------------------------|
| Formato      | Videos grabados o un solo taller      | 8 sesiones en vivo con práctica guiada             |
| Resultado    | "Aprendiste conceptos"                | Sistema automatizado funcionando con tu caso real  |
| Instructor   | Teórico o influencer                  | Profesional que usa IA y automatización a diario   |
| Práctica     | Ejercicios teóricos                   | Mini-proyecto en vivo cada sesión, end-to-end      |
| Herramientas | De pago o limitadas                   | 100% gratuitas (sin tarjeta de crédito)            |
| Continuidad  | Sin ruta siguiente                    | Ruta AI: 101 → 201 → 301                            |

---

## Herramientas del programa

| Categoría              | Herramientas                                  |
|------------------------|-----------------------------------------------|
| IA generativa          | Gemini (chat) · Gemini API (Google AI Studio) |
| Automatización no-code | Make                                          |
| Google Workspace       | Drive · Sheets · Docs · Slides · Gmail        |
| Infraestructura        | Google Cloud (OAuth: Client ID + Secret)      |

Todas las herramientas funcionan con plan gratuito. **No se requiere tarjeta de crédito.**
