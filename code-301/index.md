---
layout: default
title: "Code 301 — Professional"
---

# Code 301 - Professional Software Development

**Duración**: 13 semanas (117 horas)  
**Modalidad**: 
   - Clases en vivo online (2 veces por semana, 8:00 PM - 10:30 PM)
   - 26 sesiones: 5 módulos técnicos de 4 clases + Proyecto Final de 6 clases

**Dirigido a**: Personas adultas que ya dominan los fundamentos de desarrollo web y buscan convertirse en desarrolladores Full Stack modernos con integración de IA.

Este curso te convertirá en un **Desarrollador Full Stack + IA** con dominio del ecosistema JavaScript moderno. Aprenderás a construir aplicaciones completas con React, TypeScript, Next.js 15 y PostgreSQL, con autenticación profesional y despliegue en la nube, integrando la IA como herramienta de soporte para escribir, validar y optimizar código en cada fase del desarrollo.

Al terminar el curso, habrás logrado agregar varios proyectos profesionales a tu portafolio, los cuáles estarán publicados en la nube de forma profesional. Adicionalmente, estarás listo para superar pruebas técnicas de código; tendrás un perfil profesional resaltante y contarás con una red de contactos que te abrirán las puertas a tu primer empleo en la industria del Software.

> 🟡 Requiere dominio práctico de HTML, CSS, JavaScript y Git, además de fundamentos sólidos de programación y experiencia previa desarrollando apps web.

## Inversión de tiempo

| Tipo de actividad          | Horas |
|----------------------------|--------|
| Clases en vivo (26)        | 65     |
| Actividades asíncronas     | 52     |
| **Total**                  | **117**|

**Total: 117 horas** ~ 13 semanas

> 🟡 Requiere de una inversión de 9 horas por semana en total.

## 🧰 Stack del curso

| Capa | Tecnología |
|------|------------|
| Gestor de paquetes | **pnpm** |
| UI | React + React Router (Vite en M1–M3) |
| Lenguaje | JavaScript → **TypeScript** (desde M4) |
| Framework full-stack | **Next.js 15** (App Router, Route Handlers, Server Actions) |
| Base de datos | **PostgreSQL** administrado por Supabase |
| Cliente de datos | `supabase-js` (M3) → **Prisma** (M4–M6) |
| Autenticación | **NextAuth.js v5** + Prisma Adapter (OAuth2) |
| Estilos | Tailwind CSS |
| Despliegue | Vercel |
| IA | GitHub Copilot / Claude (transversal en M1–M5) |

> ⚙️ **Stack monolítico moderno**: todo el backend vive dentro de Next.js. No se usa Express.

## 🎯 Objetivos de Aprendizaje

Al finalizar este curso, podrás:

- Desarrollar aplicaciones en React con arquitectura basada en componentes, estado y enrutamiento.
- Consumir APIs con una capa de servicios, manejar asincronía y construir un CRUD completo con formularios validados.
- Diseñar schemas relacionales en PostgreSQL, escribir SQL y aplicar Row Level Security (RLS).
- Construir el backend dentro de Next.js con Route Handlers, Server Components y Server Actions sobre Prisma.
- Aplicar TypeScript para tipar tu aplicación de punta a punta.
- Implementar autenticación OAuth2 con NextAuth.js v5, roles y protección de rutas con middleware (defense in depth).
- Desplegar en Vercel con variables de entorno y CI/CD automático.
- Usar la IA de forma responsable para generar, depurar, auditar y optimizar código, validando siempre su output.
- Validar tu producto con usuarios reales, iterar en sprints y defenderlo en un Demo Day.

## Sílabo del Curso

### ▶︎ Módulo 1: React Fundamentals
Te sumergirás en el desarrollo moderno con React. Configuras tu entorno con Node, pnpm y Vite, construyes interfaces con JSX, componentes y props, manejas estado con `useState` (inmutabilidad y lifting state) y navegas entre vistas con React Router.

1. Setup: Node, pnpm, Vite y React
2. JSX, Componentes y Props
3. State con `useState`
4. Routing con React Router — **lab calificado**

- _Proyecto-integrador_: **Contact Manager v1.0** (Agenda de Contactos).

### ▶︎ Módulo 2: Data Fetching y Formularios
Tu app empieza a trabajar con datos externos. Dominas asincronía con Promesas y `async/await`, organizas las llamadas en una capa de servicios que se dispara con `useEffect`, construyes formularios controlados con POST y PUT, y cierras el CRUD con validación, DELETE y persistencia en localStorage.

5. Asincronismo, Promesas y `async/await`
6. Service Layer, `useEffect` y carga automática
7. Formularios controlados: POST y PUT
8. Validación, DELETE y localStorage — **lab calificado**

- _Proyecto-integrador_: **Contact Manager con CRUD completo**.

### ▶︎ Módulo 3: Bases de Datos SQL con Supabase
Aprendes SQL sobre una base PostgreSQL real. Modelas relaciones con tipos, constraints y foreign keys, consultas la base directamente desde React con el cliente `supabase-js` y proteges tus datos con Row Level Security.

9. Setup de Supabase y fundamentos de SQL
10. Modelado relacional: tipos, constraints y foreign keys
11. Cliente `supabase-js` desde React (CRUD desde el navegador)
12. Queries avanzadas, joins y Row Level Security (RLS) — **lab calificado**

- _Proyecto-integrador_: **Movie Match** — schema relacional + RLS + cliente React.

### ▶︎ Módulo 4: Backend Full-Stack con Next.js
Migras a TypeScript y a Next.js 15. Cambias el cliente de datos de `supabase-js` a Prisma sobre la misma base, trabajas con App Router, layouts, Server Components y Client Components, expones una API con Route Handlers, mutas datos con Server Actions y despliegas en Vercel.

13. TypeScript, setup de Next.js y migración a Prisma
14. App Router, layouts, Server Components y Client Components
15. Route Handlers (API REST en Next.js) y Prisma Client
16. Server Actions, Context API y deploy en Vercel — **lab calificado**

- _Proyecto-integrador_: **Movie Match Full-Stack** (Next.js + Prisma + Vercel).

### ▶︎ Módulo 5: Autenticación, Roles y Middleware
Construyes seguridad de nivel profesional. Implementas OAuth2 con NextAuth.js v5, persistes sesiones en base de datos con el Prisma Adapter, modelas roles y verificas autorización en Server Components, y proteges rutas con middleware manteniendo defense in depth.

17. NextAuth.js v5 y OAuth2 (Google / GitHub)
18. Persistencia de sesiones con Prisma Adapter
19. Modelado de roles y autorización en Server Components
20. Middleware de protección y security review — **lab calificado**

- _Proyecto-integrador_: **MinCommerce** — e-commerce con autenticación OAuth y panel de admin.

### ▶︎ Módulo 6: Proyecto Final
Durante 6 clases diseñas, construyes, validas e iteras un producto real con el stack completo. No es un ejercicio académico: debe poder mostrarse en LinkedIn, en una entrevista o ante un cliente. Cierras con un Demo Day ante audiencia.

21. Ideation y Research → propuesta validada
22. Sprint 1: Alpha → MVP funcional desplegado
23. User Validation → insights de usuarios reales aplicados
24. Sprint 2: Beta → security review y features secundarias
25. Polish y Testing → bug bash, Lighthouse y test E2E
26. **Demo Day** → presentación pública y release `v1.0.0`

- _Proyecto-final_: **Aplicación fullstack de tema libre**, con 3+ features end-to-end, autenticación con roles, datos en PostgreSQL y despliegue en Vercel.

## 📝 Cómo se evalúa

### Labs calificados y Proyecto Final

La **última clase de cada módulo técnico** cierra con un lab calificado, y el Proyecto Final se evalúa en el Demo Day. Todos usan la misma escala: **5 criterios × 20 puntos = 100 puntos** (4 técnicos + 1 de "Logros Adicionales").

| Módulo | Clase | Entregable evaluado |
|--------|-------|---------------------|
| M1 | 4 | Contact Manager v1.0 |
| M2 | 8 | Contact Manager con CRUD completo |
| M3 | 12 | Movie Match en Supabase (schema + RLS + cliente React) |
| M4 | 16 | Movie Match Full-Stack (Next.js + Prisma) |
| M5 | 20 | MinCommerce con autenticación y roles |
| M6 | 26 | Proyecto Final + Demo Day |

### Rúbrica del Proyecto Final (100 puntos)

| Criterio | Qué se evalúa | Puntaje |
|----------|---------------|---------|
| **1. Producto y validación** | 3+ features end-to-end, auth con roles funcionando y cambios trazables al feedback de usuarios reales. | **20 pts** |
| **2. Calidad técnica** | Stack del curso respetado, uso correcto de Server Components y Server Actions, schema con relaciones sólidas y migraciones de Prisma. | **20 pts** |
| **3. Seguridad y deploy** | Variables de entorno fuera del repo, autorización en el servidor, middleware activo, cookies seguras y deploy estable. | **20 pts** |
| **4. Calidad percibida** | Métricas de Lighthouse, al menos 1 test E2E, estados de carga/error/vacío y diseño coherente sin bugs visibles. | **20 pts** |
| **5. Logros adicionales** | Extras con valor real y bien documentados: dominio propio, analytics, CI con tests, segundo provider OAuth, búsqueda full-text, etc. | **20 pts** |

### Escala de calificación

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente — dominio completo |
| 80-89 | B | Bueno — comprensión sólida |
| 70-79 | C | Satisfactorio — cumple los requisitos |
| < 70 | F | Necesita mejora |
