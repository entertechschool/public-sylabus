---
layout: default
title: "Data 201 — Análisis Autónomo"
---

# Data 201 - Analisis de Datos Autónomo

**Duración**: 8 semanas (72 horas) \
**Modalidad**: Clases en vivo online (2 veces por semana, 8:00 PM - 10:30 PM) \
**Dirigido a**: Egresados de Data 101 que buscan convertirse en analistas autónomos capaces de resolver problemas reales con AI como copiloto profesional.

Este curso te transforma de analista guiado a analista más autónomo. Aprenderás SQL con window functions y CTEs, Python con scripts básicos y extracción de datos de internet, machine learning con modelos interpretables, y dashboards interactivos con Streamlit. Integrarás AI tools (GitHub Copilot, ChatGPT) como copiloto para acelerar tu trabajo. El programa culmina con un proyecto portfolio desplegado en Streamlit Cloud.

> 🟢 **Prerrequisito obligatorio**: Haber completado Data 101 ó tener conocimientos de SQL básico, Jupyter con Python, Pandas y ML supervisado básico.

> ⚖️ **Equilibrio 70% fundamentos aplicados / 30% aceleración con AI**

## Inversión de tiempo

| Tipo de actividad         | Horas |
|---------------------------|-------|
| Clases en vivo (16)       | 48    |
| Actividades asíncronas    | 24    |
| **Total**                 | **72**|

## Objetivos

1. **Usar SQL con window functions y CTEs**
   - Aplicar window functions esenciales para rankings y comparaciones
   - Escribir queries con CTEs para organizar análisis
   - Crear scripts Python básicos que extraen datos y exportan CSV
   - Identificar queries lentos

2. **Desarrollar autonomía con Python y modelos básicos**
   - Convertir notebooks a scripts .py reutilizables
   - Extraer datos de internet con APIs públicas
   - Implementar modelos de regresión y clasificación
   - Interpretar qué variables son importantes en modelos

3. **Visualizar tendencias y comunicar resultados**
   - Identificar tendencias en datos temporales
   - Interpretar resultados de A/B tests
   - Crear dashboards interactivos con Streamlit
   - Calcular métricas básicas (retention, conversión)

4. **Crear portfolio público con GitHub**
   - Usar Git para versionar código
   - Resolver errores con Stack Overflow + ChatGPT
   - Subir dashboard a Streamlit Cloud (público)
   - Presentar proyecto en formato técnico

## Filosofía e Integración con AI
> "Fundamentos aplicados para ENTENDER. AI para ser 2-3x más PRODUCTIVOS."

**AI Tools que usarás:**
- **GitHub Copilot:** Autocompletado inteligente, sugerencias de código
- **ChatGPT/Claude:** Pair programming, debugging asistido, explicaciones técnicas
- **Cursor AI (opcional):** Editor con AI integrado para desarrollo

**Skills AI que desarrollarás:**
- Prompts efectivos para análisis de datos
- Validación crítica de código generado (no copiar ciegamente)
- Debugging con AI sin perder autonomía
- Workflow AI-augmented para productividad 2-3x vs sin AI

## Módulos y Clases

### Módulo 1: SQL con Window Functions y Python Básico
1. **Window Functions Esenciales** (180 min, blend)
   - ROW_NUMBER, RANK para rankings simples
   - LAG, LEAD para comparaciones período anterior (MoM básico)
   - PARTITION BY para agrupar y comparar
   - Casos de uso: rankings de ventas, comparaciones mensuales
   - Laboratorio: análisis de ventas con ranking mensual

2. **CTEs y Outer Joins** (180 min, blend)
   - Common Table Expressions (WITH) para queries más legibles
   - CTEs simples (1-2 niveles, sin encadenar muchos)
   - Left/Right Joins para combinar tablas
   - Identificar cuando un query es lento (observación básica)
   - ⚡ **AI Setup:** GitHub Copilot activado - Configuración en VS Code, primeros prompts para SQL
   - Laboratorio: refactorizar query con subconsultas a CTEs simples

3. **Scripts Python con SQL** (180 min, blend)
   - Conectar Python con BigQuery/PostgreSQL (pandas básico)
   - Leer datos con SQL desde Python
   - Exportar resultados a CSV
   - Guardar script como .py para reutilizar
   - Laboratorio: script que extrae datos y exporta CSV

4. **Ejercicio SQL Guiado** (180 min, blend)
   - Caso de negocio con template estructurado
   - Aplicar window functions + CTEs en análisis
   - Responder preguntas de negocio específicas
   - Documentar hallazgos básicos
   - Laboratorio: análisis e-commerce con guía paso a paso

#### Herramientas por aprender:
- BigQuery / PostgreSQL (window functions básicas, CTEs, outer joins)
- Python + pandas para conectar a bases de datos
- Scripts .py básicos
- GitHub Copilot para SQL

### Módulo 2: Python con Scripts y Modelos Básicos
5. **De Notebooks a Scripts** (180 min, blend)
   - Convertir notebook a archivo .py
   - Crear funciones básicas para reutilizar código
   - Buenas prácticas: nombres claros, comentarios simples
   - Ejecutar script desde terminal
   - ⚡ **AI Copilot:** ChatGPT/Claude para explicar errores y ayudar con sintaxis
   - Laboratorio: convertir notebook de análisis a script .py

6. **Extraer Datos de Internet** (180 min, blend)
   - Consumir APIs públicas con requests (GET básico)
   - Leer respuesta JSON y convertir a DataFrame
   - Guardar datos en CSV para análisis
   - Ejemplo: API de tipo de cambio, clima, datos públicos
   - Laboratorio: extraer datos de API gratuita y guardar CSV

7. **Regresión Lineal Simple** (180 min, blend)
   - Linear Regression para predicción
   - Entender R² como métrica de ajuste
   - Train/test split básico
   - Interpretar coeficientes (¿qué variables importan más?)
   - Laboratorio: predicción de precios con interpretación simple

8. **Clasificación con Random Forest** (180 min, blend)
   - Random Forest para clasificar (ej: cliente compra sí/no)
   - Métricas básicas: accuracy, confusion matrix
   - Feature importance (¿qué variables son importantes?)
   - Traducir resultados a lenguaje de negocio
   - ⚡ **AI Workflow:** ChatGPT para generar ideas de features
   - Laboratorio: clasificación de clientes con interpretación básica

#### Herramientas por aprender:
- Python scripts .py básicos
- APIs REST públicas (requests simple)
- Scikit-learn (regresión lineal, Random Forest)
- Feature importance básica
- ChatGPT/Claude como ayuda

### Módulo 3: Visualización y Comunicación
9. **Visualizar Tendencias Temporales** (180 min, blend)
   - Gráficos de línea para datos temporales
   - Identificar tendencias visualmente (¿sube, baja, estable?)
   - Detectar patrones estacionales en gráficos
   - Comparar períodos (este mes vs mes pasado)
   - Laboratorio: visualizar tendencias de ventas mensuales

10. **Interpretar A/B Tests** (180 min, blend)
    - Qué es un A/B test: control vs tratamiento
    - Leer e interpretar p-value básico (¿es significativo?)
    - Entender si un cambio realmente funcionó
    - Cuándo confiar en los resultados
    - ⚡ **AI Assistant:** ChatGPT para validar interpretaciones básicas
    - Laboratorio: analizar A/B test ya realizado (¿el cambio funcionó?)

11. **Dashboards con Streamlit** (180 min, blend)
    - Crear dashboard básico con Streamlit
    - Agregar 2-3 visualizaciones (gráficos de línea, barras)
    - Agregar 1 filtro simple (selectbox o slider)
    - Estructura simple: título, gráficos, conclusiones
    - Deploy gratuito en Streamlit Cloud
    - Laboratorio: dashboard de ventas con filtro por producto

12. **Métricas Básicas de Negocio** (180 min, blend)
    - Calcular retention (¿cuántos clientes vuelven?)
    - Calcular conversión (¿cuántos completan acción?)
    - Visualizar métricas en dashboard simple
    - Interpretar resultados en lenguaje de negocio
    - ⚡ **AI Workflow:** ChatGPT para ayudar con SQL de métricas
    - Laboratorio: dashboard con retention y conversión

#### Herramientas por aprender:
- Visualización de tendencias temporales
- Interpretación básica de p-values
- Streamlit (dashboards simples)
- Métricas de negocio básicas (retention, conversión)
- ChatGPT para validar cálculos

### Módulo 4: Git, Deployment y Portfolio
13. **Git Esencial** (180 min, blend)
    - Qué es Git y por qué usarlo
    - Crear repo: init, add, commit, push
    - Subir código a GitHub (crear repo público)
    - README básico: qué hace el proyecto
    - ⚡ **AI Assistant:** ChatGPT para ayudar con comandos Git básicos
    - Laboratorio: crear portfolio en GitHub y subir primer proyecto

14. **Debugging con Stack Overflow + AI** (180 min, blend)
    - Leer errores comunes (NameError, KeyError, etc.)
    - Copiar error y buscar en Stack Overflow
    - Usar ChatGPT para entender el error
    - Ejercicio: encontrar bugs en código generado por AI
    - Laboratorio: debugging de script con errores (buscar soluciones)

15. **Subir Dashboard a Streamlit Cloud** (180 min, blend)
    - Preparar dashboard para deployment (requirements.txt)
    - Subir código a GitHub
    - Conectar GitHub con Streamlit Cloud
    - Deploy con un clic (app pública)
    - Compartir link público en portfolio
    - Laboratorio: desplegar dashboard público (template pre-hecho)

16. **Proyecto Portfolio Guiado** (180 min, blend)
    - **Proyecto con dataset provisto:**
      - Dataset sugerido (e-commerce, finanzas, o salud)
      - Pipeline guiado: análisis → modelo simple → dashboard
      - GitHub repo con README básico
      - Dashboard desplegado en Streamlit Cloud
      - Presentación técnica (10-15 min)

    - **Estructura simplificada:**
      - EDA con 3-4 visualizaciones clave
      - Modelo ML simple (regresión O clasificación)
      - Dashboard con 2-3 gráficos + 1 filtro
      - README con pasos básicos

    - ⚡ **AI Workflow:** ChatGPT para generar README y mejorar visualizaciones
    - Checkpoint final: Presentación 10-15 min + Demo dashboard + Q&A breve

#### Herramientas por aprender:
- Git básico (init, add, commit, push)
- Debugging con búsquedas (Stack Overflow, ChatGPT)
- Streamlit Cloud (deployment simple)
- Portfolio GitHub básico
- Presentación técnica corta

---

## Proyecto Final del Curso

### **Proyecto Analítico End-to-End con Empresa Real**
Proyecto de 2 semanas (sprints) trabajando con datos reales de empresas partner: Churn Prediction, Credit Scoring, Demand Forecasting o Customer Segmentation.

**Componentes del proyecto:**
- EDA básico con 3-4 visualizaciones (dataset provisto)
- Modelo ML simple (regresión O clasificación, guía incluida)
- Dashboard Streamlit básico (template disponible)
- Deploy en Streamlit Cloud + presentación corta

**Entregables:**
- GitHub repo con README básico (qué hace el proyecto)
- Dashboard desplegado en Streamlit Cloud (público)
- Presentación técnica de 10-15 minutos con demo
- Código con comentarios básicos


# Admisión
- [Revisa las formas de ingresar aquí](entrance/)

---
