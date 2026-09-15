---
layout: default
title: "Data 101 — Análisis de Datos"
---

# Análisis de Datos con SQL, Python y Power BI.  

**Duración**: 6 semanas (54 horas)   
**Modalidad**: Clases en vivo online (2 veces por semana, 8:00 PM - 10:30 PM)  
**Dirigido a**: Para profesionales — operaciones, finanzas, logística o áreas cuantitativas — que quieren dejar de hacer reportes manuales y empezar a extraer, analizar y presentar datos con herramientas modernas.

Aprenderás desde los conceptos fundamentales hasta la aplicación práctica en contextos empresariales reales, utilizando herramientas modernas y accesibles como Google Sheets (hoja de cálculo), SQLite Online (SQL), Google Colab (Python/Pandas) y Microsoft Power BI Desktop.

## Inversión de tiempo

| Tipo de actividad         | Horas |
|---------------------------|-------|
| Clases en vivo (12)       | 36    |
| Actividades asíncronas    | 18    |
| **Total**                 | **54**|

* Se programan sesiones de refuerzo a demanda del salón.

## Objetivos

1. **Desarrollar mentalidad analítica y comprensión del ecosistema de datos**  
   - Entender el valor estratégico de los datos en las organizaciones modernas  
   - Distinguir entre dato, información y conocimiento en contextos empresariales  
   - Reconocer la escalera del valor analítico y su nivel descriptivo (los niveles predictivo y prescriptivo se profundizan en cursos avanzados)  
   - Definir KPIs relevantes para un problema de negocio

2. **Extraer insights de bases de datos relacionales usando SQL**  
   - Comprender modelos entidad-relación y su rol en el análisis  
   - Escribir consultas básicas con SELECT, WHERE, ORDER BY y LIMIT  
   - Aplicar funciones de agregación (SUM, COUNT, AVG) con GROUP BY  
   - Generar métricas de negocio verificables a partir de datos reales

3. **Analizar, transformar y visualizar datos con Python y Pandas**  
   - Cargar, explorar y perfilar datasets con Pandas  
   - Realizar análisis exploratorio (EDA) para detectar patrones y anomalías  
   - Crear visualizaciones efectivas con Matplotlib  
   - Replicar análisis realizados en SQL usando Python

4. **Comunicar hallazgos mediante dashboards y storytelling de datos**  
   - Construir dashboards interactivos con Microsoft Power BI Desktop  
   - Aplicar principios de visualización efectiva para audiencias de negocio  
   - Estructurar narrativas de datos con impacto ejecutivo  
   - Presentar resultados de forma clara y accionable

## Módulos y Clases

### Módulo 1: Fundamentos de Datos con Excel y SQL

1. **Introducción al Análisis de Datos** (180 min, blend)  
   - Diferencia entre dato, información y conocimiento  
   - Escalera del valor de la analítica: nivel descriptivo (predictivo y prescriptivo se ven en cursos avanzados)  
   - Toma de decisiones basada en datos vs. intuición  
   - Definición de KPIs para un problema de negocio  
   - Pensar como analista en Google Sheets: filtros (simples y múltiples), ordenamiento y agregaciones básicas, como puente hacia SQL  
   - Laboratorio: caso "Un dato, una decisión" + KPI de Potencial de Mercado + análisis de SupermercadoSQL en Google Sheets

2. **Del origen al análisis: Modelo Entidad-Relación** (180 min, blend)  
   - Origen de datos en procesos y sistemas operacionales  
   - Bases de datos relacionales  
   - Modelo entidad-relación: entidades, atributos, cardinalidades  
   - Tipos de datos: texto, número y fecha (introducción)  
   - Laboratorio: diagrama ER del dataset SupermercadoSQL en Draw.io

3. **Introducción a SQL - Primeras Consultas** (180 min, blend)  
   - Introducción a SQL y uso de SQLite Online  
   - Sentencias básicas: SELECT, FROM, WHERE, ORDER BY, LIMIT  
   - Filtros combinados con AND, OR y búsqueda con LIKE  
   - Buenas prácticas para consultas legibles  
   - Exportación de resultados a CSV  
   - Laboratorio: 10+ consultas SQL sobre el dataset SupermercadoSQL

4. **SQL Agregaciones + Proyecto Integrador** (180 min, blend)  
   - De la tabla dinámica (Excel) al GROUP BY (SQL): mismo concepto, dos herramientas  
   - Funciones de agregación: SUM, COUNT, AVG, MAX, MIN  
   - Agrupación con GROUP BY y filtrado de grupos con HAVING  
   - Generación de métricas clave de negocio  
   - Laboratorio: proyecto integrador — Scorecard de Auditoría con 14 KPIs de supermercado

#### Herramientas por aprender:
- SQLite Online (sin instalación)
- Draw.io
- Google Sheets

### Módulo 2: Python para Análisis de Datos

5. **De SQL a Pandas** (180 min, blend)  
   - Google Colab como entorno de trabajo (sin instalación)  
   - Introducción a Pandas: DataFrames y Series  
   - Replicación en Pandas de consultas SQL aprendidas en el M1  
   - Carga de CSVs y primera exploración  
   - Laboratorio: replicar 5 consultas SQL del M1 en Pandas + 2 análisis nuevos

6. **EDA: Detective de Datos** (180 min, blend)  
   - Análisis Exploratorio de Datos: ¿qué hay en mi dataset?  
   - Perfilado: tipos de variables, nulos, duplicados, outliers  
   - Estadística descriptiva: media, mediana, moda, desviación estándar  
   - Detección de problemas de calidad de datos  
   - Laboratorio: perfil completo del dataset Titanic + 3 hallazgos documentados

7. **Visualización — Una Imagen Vale Más que 1,000 Filas** (180 min, blend)  
   - Gráficos que responden preguntas de negocio  
   - Tipos de gráficos: barras (verticales y horizontales), histogramas y gráficos de torta  
   - Elección del gráfico correcto según el tipo de dato  
   - Personalización: títulos, ejes, colores y etiquetas  
   - Laboratorio: 4 gráficos de negocio sobre el dataset Titanic (+ 1 gráfico libre como reto post-clase)

8. **Proyecto Integrador del Módulo 2** (180 min, blend)  
   - Integración de SQL + Pandas + Matplotlib  
   - Construcción de un reporte analítico completo  
   - Comunicación de hallazgos a audiencias no técnicas  
   - Buenas prácticas de documentación de notebooks  
   - Laboratorio: reporte ejecutivo para el directorio de la White Star Line (dataset Titanic)

#### Herramientas por aprender:
- Google Colab (sin instalación)
- Python (Pandas)
- Matplotlib

### Módulo 3: Visualización y Storytelling

9. **Microsoft Power BI — Tu Primer Dashboard Profesional** (180 min, blend)  
   - Business Intelligence (BI): qué es y por qué importa  
   - Power BI Desktop: instalación y primeros pasos  
   - Carga de datasets CSV y configuración de tipos de columna  
   - Construcción de visuales básicos (barras, torta, tabla, barras verticales)  
   - Laboratorio: primer reporte con 4 visuales sobre el dataset Olympics 2000-2016

10. **Data Storytelling: Del Dato a la Historia** (180 min, blend)  
    - Principios de visualización efectiva para negocio  
    - Elección del visual correcto según la pregunta  
    - Estructura de una narrativa de datos: contexto, conflicto, resolución  
    - Jerarquía visual, uso de color y foco  
    - Laboratorio: narrativa de 3 hallazgos con recomendaciones accionables

11. **Dashboards con Historia** (180 min, blend)  
    - Diseño de dashboards de 2+ páginas con navegación  
    - Interactividad: filtros y segmentadores (slicers)  
    - Integración de storytelling en el diseño del dashboard  
    - Buenas prácticas: foco, consistencia y claridad  
    - Laboratorio: dashboard interactivo multi-página sobre Olympics

12. **Proyecto Final — Informe al Directorio del COI** (180 min, blend)  
    - Presentación del proyecto final: "Informe al Directorio del COI"  
    - Evaluación de storytelling, técnica y visualización  
    - Feedback cruzado entre pares  
    - Retroalimentación docente y lecciones aprendidas  
    - Laboratorio: exposición oral del proyecto integrador final

#### Herramientas por aprender:
- Microsoft Power BI Desktop
- Google Slides
- Técnicas de storytelling con datos

---

## Proyecto Final del Curso

### **Informe al Directorio del COI**

Proyecto final que cierra el Módulo 3 con una presentación ejecutiva sobre el dataset Olympics 2000-2016:

**Componentes del proyecto:**
- **Elección de pregunta**: 1 de 4 preguntas de negocio sobre el dataset Olympics 2000-2016
- **Storytelling**: Narrativa estructurada con los frameworks CHIR y Pirámide de Minto
- **Dashboard ejecutivo**: Dashboard interactivo en Power BI con filtros y KPIs
- **Presentación**: Exposición oral de 5 minutos con recomendaciones accionables y Q&A

**Entregables:**
- Deck de 5-8 slides en Google Slides con hallazgos (CHIR) y recomendaciones (Minto)
- Dashboard interactivo en Power BI (mínimo 1 página) con filtros y KPIs
- Presentación ejecutiva oral con storytelling de datos
