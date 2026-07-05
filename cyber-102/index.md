---
layout: default
title: "Cyber 102 — SOC Analyst L1"
---

# Bootcamp de Ciberseguridad - SOC Analyst L1

> Forma analistas de Blue Team listos para un SOC real, con preparación directa para la certificación CompTIA Security+ SY0-701.

**Duración**: 16 semanas (144 horas)  
**Modalidad**:  
  - Clases en vivo online (2 veces por semana, 20:00 - 22:30 hora Perú)
  - Laboratorios prácticos + Demo Day final con audiencia externa

**Dirigido a**: Estudiantes en curso o egresados de Sistemas, Redes, Informática o carreras TI. Profesionales junior en TI que buscan migrar a ciberseguridad defensiva.  
**Prerequisitos**: Base técnica en TI (redes, sistemas operativos, línea de comandos básica). NO se requiere experiencia previa en ciberseguridad. Equipo con mínimo 8 GB RAM y virtualización habilitada en BIOS.

> 🟡 Requiere base técnica previa en TI, pero parte desde cero en el dominio de ciberseguridad.

> Al terminar, tendrás un portafolio con 4 artefactos técnicos reales (análisis de phishing, reporte de tráfico, ticket SIEM e Incident Response Report), listo para aplicar a tu primer rol como SOC Analyst Junior.

## Inversión de tiempo

| Tipo de actividad                       | Horas |
|-----------------------------------------|-------|
| Clases en vivo (32 sesiones × 2.5 h)    | 80    |
| Actividades asíncronas (2 h por clase)  | 64    |
| **Total**                               | **144** |


---

## 🎯 Resultados de aprendizaje

Al finalizar este curso, podrás:

1. **Analizar incidentes de seguridad aplicando marcos profesionales del sector**
   - Mapear ataques al modelo Cyber Kill Chain (Lockheed Martin) con evidencia por fase.
   - Documentar técnicas adversariales en MITRE ATT&CK Navigator y exportar layers reusables.
   - Aplicar NIST SP 800-61 (Incident Response) a casos reales simulados.

2. **Operar un SIEM en un flujo SOC extremo a extremo**
   - Configurar Wazuh (SIEM open source) como analista L1: ingesta de logs, búsquedas y dashboards.
   - Crear reglas de correlación para detectar patrones de ataque en Windows Event Logs.
   - Triagear, enriquecer con IOCs y escalar alertas siguiendo playbooks reales.

3. **Analizar amenazas en múltiples capas técnicas**
   - Clasificar malware por familia (ransomware, trojan, worm, RAT, botnet) e identificar indicadores comportamentales.
   - Validar correos sospechosos con SPF, DKIM y DMARC detectando spoofing e ingeniería social.
   - Interpretar capturas de tráfico `.pcap` con Wireshark identificando DDoS, escaneos, brute force y beaconing C2.

4. **Construir un portafolio profesional demostrable**
   - 4 entregables técnicos publicables (GitHub/PDF) alineados con lo que piden los SOCs junior en entrevistas.
   - Presentar un Incident Response Report completo en Demo Day ante audiencia externa (reclutadores IT, analistas SOC senior y alumni).
   - Estar preparado para rendir el examen CompTIA Security+ SY0-701 con dos simulacros cronometrados cubriendo los 5 dominios.

## ⚖️ Filosofía y enfoque

> "Antes de elegir la herramienta, entender el marco. Antes de instalar, analizar."

**Metodología Blue Team práctica:**
- Escenario único durante todo el bootcamp (*Ferretería El Martillo*, una pyme ficticia) para que cada concepto se aplique al mismo caso y los aprendizajes se integren naturalmente.
- Progresión de autonomía del 90% guiado en Módulo 1 al 50% autónomo en Módulo 8, replicando la curva real de un SOC Analyst Junior.
- Uso estricto de herramientas y marcos del sector: Wazuh, Wireshark, MITRE ATT&CK, NIST CSF, ISO 27001, CVSS Calculator — los mismos que verás en tu primer empleo.

---

## Sílabo del Curso

### Módulo 1: Fundamentos de Seguridad

Instala el vocabulario y los marcos analíticos que usarás durante todo el bootcamp: triada CIA, clasificación de controles, criptografía aplicada, autenticación multifactor y modelo Cyber Kill Chain. Cierras el módulo produciendo tu primer entregable del portafolio: un análisis completo de phishing mapeado a MITRE ATT&CK.

#### Sesión 1: Triada CIA y Controles de Seguridad (150 min, blend)
- Confidencialidad, Integridad y Disponibilidad aplicadas a incidentes reales
- Clasificación de controles: preventivos / detectivos / correctivos × técnicos / administrativos / físicos
- Construcción de la matriz de controles sobre un escenario pyme
- Exploración guiada de VirusTotal como herramienta de triage
- **Lab:** Análisis y clasificación de 5 controles del escenario Ferretería El Martillo en la matriz técnica.
- **Entregable:** Primera sección del reporte de portafolio con tabla CIA y matriz de controles justificada.

#### Sesión 2: Criptografía Aplicada (150 min, blend)
- Cifrado simétrico (AES) vs asimétrico (RSA/ECC): cuándo usar cada uno
- Hashing criptográfico y efecto avalancha con SHA-256
- Firma digital y PKI como base de TLS
- Experimento práctico con CyberChef
- **Lab:** Clasificación de 6 casos de uso criptográficos reales + demostración del efecto avalancha en hashes de archivos.
- **Entregable:** Sección 2 del reporte con mapa criptográfico del escenario y recomendaciones específicas.

#### Sesión 3: Tipos de Autenticación y MFA (150 min, blend)
- Los 5 factores de autenticación (conocimiento, posesión, inherencia, comportamiento, locación)
- MFA resistente a phishing: FIDO2, passkeys vs OTP por SMS / TOTP / push
- Ataques reales: SIM swapping, MFA fatigue, adversary in the middle (caso Uber 2022)
- Por qué NIST desaconseja SMS desde 2017
- **Lab:** Sala TryHackMe de bypass de MFA + análisis de un caso de phishing de credenciales aplicado al escenario.
- **Entregable:** Sección 3 del reporte con vector de autenticación atacado y mitigación específica propuesta.

#### Sesión 4: Taxonomía de Amenazas + Vectores + Cyber Kill Chain (150 min, blend)
- Distinción precisa entre amenaza, actor de amenaza y vector
- Las 7 fases del Cyber Kill Chain de Lockheed Martin
- Mapeo de TTPs adversariales en MITRE ATT&CK Navigator
- Análisis forense de un correo phishing real (ofuscado)
- **Lab:** Análisis integral de un correo phishing con MXToolbox, VirusTotal y MITRE ATT&CK Navigator.
- **Entregable:** **Entregable 1 del portafolio** — Reporte de Análisis de Phishing + Kill Chain Map con 4 criterios evaluados y JSON de ATT&CK exportado.

#### Herramientas del módulo
- VirusTotal (web, sin instalación ni cuenta de pago)
- TryHackMe (cuenta gratuita)
- CyberChef (web, GCHQ oficial)
- MXToolbox (web, análisis de headers)
- MITRE ATT&CK Navigator (web oficial)

---

### Módulo 2: Amenazas y Redes

Baja al nivel técnico: qué malware corre en un equipo infectado, cómo se ve un ataque a nivel de paquetes, y cómo se valida técnicamente un correo sospechoso. Cierras el módulo leyendo una captura `.pcap` real con Wireshark, identificando 5 patrones maliciosos simultáneos.

#### Sesión 5: Malware — Tipos, Comportamiento e Indicadores (150 min, blend)
- Las 8 familias de malware clasificadas por comportamiento (virus, trojan, worm, ransomware, RAT, spyware, rootkit, botnet)
- IOC estático vs indicador comportamental: por qué los SOCs priorizan el segundo
- Análisis profundo de hashes en VirusTotal (Behavior, Relations, Community)
- Casos reales documentados: WannaCry (2017), LockBit (2024), Emotet
- **Lab:** Análisis técnico de 3 hashes de familias distintas en VirusTotal con inspección de Behavior.
- **Entregable:** Primera sección del dossier técnico con 3 fichas de familias de malware (comportamiento, caso real, controles).

#### Sesión 6: Phishing e Ingeniería Social (150 min, blend)
- SPF, DKIM y DMARC: qué valida cada uno y por qué los 3 son complementarios
- Lectura de headers con MXToolbox y Google Admin Toolbox
- Discrepancias From / Return-Path / Reply-To como indicador de spoofing
- Los 6 principios de Cialdini aplicados al análisis de ingeniería social
- **Lab:** Análisis forense completo de un correo phishing real con veredicto técnico justificado.
- **Entregable:** Sección del dossier técnico con tabla de verificación SPF/DKIM/DMARC + análisis de ingeniería social.

#### Sesión 7: Fundamentos de Redes para Seguridad (150 min, blend)
- Modelo TCP/IP de 4 capas y ubicación de ataques por capa
- Handshake TCP en 3 pasos e identificación de flags
- DDoS (SYN flood), escaneo de puertos y fuerza bruta: firmas distintivas en red
- Adaptación del lab clásico DDoS al enfoque defensivo
- **Lab:** Lanzamiento controlado de un DDoS simulado desde Kali Linux contra VM objetivo en red aislada, con captura simultánea en Wireshark.
- **Entregable:** Sección del dossier con tabla comparativa de 3 ataques + 3 screenshots del ataque observado.

#### Sesión 8: Introducción a Wireshark — Captura y Lectura de Tráfico (150 min, blend)
- Filtros display esenciales (`ip.src`, `tcp.port`, `http.request`, `dns`, Follow Stream)
- Análisis a alto nivel con Protocol Hierarchy e I/O Graph
- Identificación de 5 patrones maliciosos en un `.pcap` real: DDoS + escaneo + brute force + DNS tunneling + beacon C2
- Extracción de IOCs ticket-ready para ingreso al SIEM
- **Lab:** Análisis forense completo de captura `.pcap` con los 5 patrones maliciosos identificados con evidencia específica.
- **Entregable:** **Dossier Técnico M2 completo** (borrador del Entregable 2 del portafolio) con tabla de ≥10 IOCs extraídos y propuesta de controles de arquitectura de red.

#### Herramientas del módulo
- VirusTotal (pestañas Behavior y Relations)
- MXToolbox SuperTool (Email Header Analyzer)
- Wireshark (versión 4.x)
- Kali Linux + VirtualBox (VMs provistas por ETS en red NAT aislada)
- hping3 (preinstalado en Kali, solo para lab controlado)

---

### Módulo 3: Arquitectura de Red Segura

Pasas de observar tráfico a diseñar defensa. Aprendes segmentación, DMZ, VLANs y cómo los firewalls, IDS/IPS y proxies trabajan juntos. Profundizas Wireshark para análisis forense real y cierras con seguridad en la nube. Produces el Entregable 2 del portafolio: un reporte profesional de análisis de tráfico.

#### Sesión 9: Arquitectura de Red Segura (Segmentación, DMZ, VLANs) (150 min, blend)
- Por qué el plano de red importa tanto como los controles de endpoint
- Diseño de DMZ y segmentación por nivel de confianza
- VLANs como control de aislamiento lógico
- Puntos de falla comunes en segmentación de pymes
- **Lab:** Análisis de topología de red con Nmap identificando fallas de segmentación.
- **Entregable:** Diagrama de arquitectura segura propuesta para el escenario con justificación de cada segmento.

#### Sesión 10: Firewalls, IDS/IPS y Proxies (150 min, blend)
- Diferencias técnicas entre firewall stateful, IDS y IPS
- Reglas de egress filtering como barrera contra C2
- Introducción a logs de firewall comerciales
- Análisis de tráfico anómalo en logs reales
- **Lab:** Análisis de logs de firewall con identificación de tráfico anómalo y reglas propuestas.
- **Entregable:** Reporte de 3 incidentes detectados en los logs con acción correctiva recomendada.

#### Sesión 11: Análisis de Tráfico con Wireshark (Avanzado) (150 min, blend)
- Follow Stream profesional y reconstrucción de conversaciones
- Identificación avanzada: escaneos con stealth, detección de C2 por timing analysis
- Exportación de objetos extraídos del tráfico (archivos, certificados)
- Captura en entornos de producción: qué se puede y qué no se puede capturar
- **Lab:** Captura activa desde Kali e interpretación de escaneos y conexiones sospechosas en tiempo real.
- **Entregable:** Documento técnico con 5 patrones identificados y exportación de IOCs en formato STIX/CSV.

#### Sesión 12: Seguridad en la Nube (AWS/Azure — Shared Responsibility, IAM) (150 min, blend)
- Modelo de responsabilidad compartida: qué cubre el proveedor y qué el cliente
- IAM básico en Azure Free Tier y AWS: usuarios, roles, políticas
- Lectura de archivo `.pcap` con escaneo de puertos + conexión sospechosa
- Integración de los aprendizajes del módulo en un reporte formal
- **Lab:** Análisis de archivo `.pcap` con escaneo de puertos + conexión sospechosa identificada, usando los controles de arquitectura aprendidos.
- **Entregable:** **Entregable 2 del portafolio** — Reporte de Análisis de Tráfico con metodología profesional, IOCs extraídos y plan de mitigación.

#### Herramientas del módulo
- Nmap (escaneo y enumeración)
- Wireshark (modo avanzado con filtros personalizados)
- AWS Free Tier / Azure Free Tier (cuenta gratuita)
- Kali Linux (VM provista)

---

### Módulo 4: Identidad, Vulnerabilidades y Web

Trabajas con identidad empresarial (Active Directory en la nube), gestión de vulnerabilidades con CVSS, hardening de sistemas operativos y el OWASP Top 10 desde perspectiva defensiva. Incluye adaptación del lab clásico OWASP / Juice Shop de Cyber 201.

#### Sesión 13: Gestión de Identidades y Accesos / Active Directory Básico (150 min, blend)
- Principio de mínimo privilegio y RBAC (Role-Based Access Control)
- Configuración IAM en Azure Free Tier: usuarios, grupos, roles
- Auditoría de accesos y revisión periódica
- Casos de abuso de privilegios en incidentes reales
- **Lab:** Configuración de IAM en Azure aplicando mínimo privilegio y RBAC para 3 roles de empresa.
- **Entregable:** Reporte de configuración IAM con matriz de roles y permisos justificados.

#### Sesión 14: Gestión de Vulnerabilidades (Nmap, CVSS) (150 min, blend)
- Escaneo de vulnerabilidades con Nmap avanzado y scripts NSE
- CVSS 3.1: interpretación de Base Score, Temporal y Environmental
- Priorización por contexto de negocio (no solo por CVSS)
- Ciclo de gestión de vulnerabilidades: descubrimiento, clasificación, remediación
- **Lab:** Escaneo de VM vulnerable en laboratorio aislado + clasificación por CVSS de 5 hallazgos.
- **Entregable:** Reporte de vulnerabilidades priorizado con justificación técnica por cada CVSS asignado.

#### Sesión 15: Hardening de Sistemas (150 min, blend)
- Principios de hardening aplicados a Windows y Linux
- CIS Benchmarks Level 1 como guía práctica
- Servicios innecesarios, cuentas por defecto y políticas de contraseñas
- Hardening como control preventivo fundamental
- **Lab:** Aplicación de baseline de hardening en VM Windows y VM Ubuntu con checklist de controles CIS.
- **Entregable:** Reporte de hardening con checklist completado y evidencia de configuraciones aplicadas.

#### Sesión 16: OWASP Top 10 — Introducción (perspectiva defensiva) (150 min, blend)
- Las 10 vulnerabilidades web más críticas de 2021 (última versión OWASP)
- Cómo se detectan desde un SOC (patrones en logs, alertas de WAF)
- Escaneo dirigido con OWASP ZAP sobre aplicación vulnerable (Juice Shop)
- Traducción de CVE a CVSS a recomendación accionable
- **Lab:** Escaneo con OWASP ZAP sobre OWASP Juice Shop identificando mínimo 8 vulnerabilidades con CVE, CVSS, impacto y recomendación.
- **Entregable:** **Reporte OWASP** con 8+ vulnerabilidades documentadas en formato profesional, adaptado del lab clásico de Cyber 201.

#### Herramientas del módulo
- Azure Free Tier (IAM y Active Directory Básico)
- Nmap con scripts NSE
- CIS Benchmarks (versión gratuita)
- OWASP ZAP (gratuito, GUI y CLI)
- OWASP Juice Shop (Docker)
- VirtualBox

---

### Módulo 5: Operaciones SOC I

Entras al corazón del rol: arquitectura de un SOC real, operación de un SIEM (Wazuh), análisis de logs de Windows y desarrollo de reglas de correlación. Aquí ves cómo se detectan los ataques que aprendiste a analizar en los módulos anteriores.

#### Sesión 17: Arquitectura y Operación del SOC (Roles L1/L2/L3, Flujos, KPIs) (150 min, blend)
- Estructura de un SOC mediano (~50 analistas): roles L1, L2, L3 e ingeniería
- Flujos de escalamiento y handoff entre niveles
- KPIs del SOC: MTTD (Mean Time To Detect), MTTR (Mean Time To Respond), falsos positivos
- Por qué un L1 bien entrenado es la columna del SOC
- **Lab:** Ejercicio guiado 60 min — mapeo de flujo de escalamiento L1→L2→L3 en SOC simulado con organigrama.
- **Entregable:** Flujograma del SOC simulado + tabla de roles y responsabilidades con KPIs asignados.

#### Sesión 18: SIEM — Fundamentos y Operación con Wazuh (150 min, blend)
- Qué hace un SIEM y cómo se integra con EDR, firewalls y logs
- Wazuh como SIEM open source: arquitectura manager + agente
- Ingesta de logs, búsquedas con filtros y dashboards básicos
- Comparación rápida con SIEMs comerciales (Splunk, QRadar, Sentinel)
- **Lab:** Configuración inicial de Wazuh con ingesta desde VM Windows y búsqueda de eventos específicos.
- **Entregable:** Captura del dashboard Wazuh con 3 búsquedas guardadas + explicación de los filtros usados.

#### Sesión 19: Análisis de Logs — Windows Event Logs (IDs Críticos) (150 min, blend)
- Los Event IDs que todo SOC L1 debe reconocer al instante: 4624, 4625, 4688, 4720
- Interpretación de logs de autenticación, creación de procesos y administración de cuentas
- Correlación manual entre eventos relacionados
- Uso de TryHackMe (Windows Event Logs) como entorno guiado + demo en vivo con Event Viewer
- **Lab:** Investigación guiada en TryHackMe correlacionando Event IDs críticos + demo del instructor con Event Viewer.
- **Entregable:** Reporte de investigación con 3 eventos sospechosos identificados y su cadena de correlación.

#### Sesión 20: Desarrollo de Reglas de Correlación en SIEM (150 min, blend)
- Anatomía de una regla de correlación en Wazuh
- Mapeo de técnicas MITRE ATT&CK a reglas concretas
- Ciclo de vida: diseño, prueba, despliegue, tuning
- Cómo evitar generar ruido (falsos positivos) sin perder señal
- **Lab:** Análisis de un incidente simulado + creación de una regla de correlación en Wazuh + generación del ticket de seguridad.
- **Entregable:** Regla de correlación funcional en Wazuh con ticket de seguridad documentado y mapeo a técnica MITRE específica.

#### Herramientas del módulo
- Wazuh Manager + Agentes (SIEM open source, provisto en lab)
- TryHackMe (sala Windows Event Logs)
- MITRE ATT&CK Navigator
- Windows Event Viewer

---

### Módulo 6: Operaciones SOC II

Profundiza el trabajo de triage: gestión de alertas en volumen, enriquecimiento de IOCs con fuentes de Threat Intelligence, uso profesional del framework MITRE ATT&CK y fundamentos de Threat Hunting.

#### Sesión 21: Triage de Alertas, Comunicación y Escalamiento (150 min, blend)
- Triage en volumen: cómo clasificar 50 alertas por hora sin perder foco
- Comunicación efectiva con L2/L3: qué incluir en un escalamiento
- Documentación en Jira: ticket bien escrito vs mal escrito
- Gestión de prioridad según impacto y confianza
- **Lab:** Clasificación de 15 alertas reales con escalamiento documentado en Jira para las que lo ameriten.
- **Entregable:** 3 tickets de Jira con narrativa profesional, priorización justificada y evidencia adjunta.

#### Sesión 22: Indicadores de Compromiso — IOCs (150 min, blend)
- Enriquecimiento con fuentes públicas: VirusTotal, CriminalIP, AbuseIPDB, Cisco Talos, AlienVault OTX
- Cómo combinar múltiples fuentes para aumentar confianza
- Diferencia entre IOCs frescos y obsoletos
- Uso de IOCs en reglas de bloqueo preventivo
- **Lab:** Enriquecimiento de 5 IOCs (IPs, hashes, dominios) con 3+ fuentes cada uno y veredicto consolidado.
- **Entregable:** Ficha de inteligencia con 5 IOCs enriquecidos y recomendación de acción por cada uno.

#### Sesión 23: MITRE ATT&CK Framework (150 min, blend)
- Estructura completa: 14 tácticas, ~200 técnicas, sub-técnicas
- Uso profesional del Navigator: layers, scoring, comparación
- ATT&CK como lenguaje común del SOC
- Mapeo de incidentes reales a TTPs
- **Lab:** Mapeo completo de un incidente simulado al framework MITRE ATT&CK con layer exportable en JSON.
- **Entregable:** Layer MITRE ATT&CK con ≥10 técnicas mapeadas al incidente, exportado como JSON reusable.

#### Sesión 24: Threat Intelligence + Introducción al Threat Hunting (150 min, blend)
- Threat Intelligence como insumo del Hunting (no son lo mismo)
- Hipótesis de hunting basada en TTPs conocidos de un actor
- Uso de Wazuh para queries de hunting sobre dataset histórico
- Detección proactiva vs reactiva
- **Lab:** Detección y triage de incidente completo en Wazuh simulando workflow SOC end-to-end.
- **Entregable:** **Entregable 3 del portafolio** — Ticket de Incidente SIEM con investigación, IOCs, TTPs mapeadas y recomendación formal.

#### Herramientas del módulo
- Wazuh (profundización)
- Jira (tier gratuito)
- VirusTotal, CriminalIP, AbuseIPDB, Cisco Talos, AlienVault OTX (todas con acceso gratuito)
- MITRE ATT&CK Navigator (modo avanzado)

---

### Módulo 7: Respuesta a Incidentes y Marcos de Referencia

Aprendes el ciclo oficial de respuesta a incidentes según NIST SP 800-61, a documentar profesionalmente incidentes para un CISO, y los dos marcos más importantes de governance: NIST CSF e ISO 27001. Cierras con políticas de seguridad y continuidad operativa (BCP/DRP).

#### Sesión 25: Ciclo Completo de Respuesta a Incidentes (6 Fases) (150 min, blend)
- Las 6 fases de NIST SP 800-61: Preparación, Identificación, Contención, Erradicación, Recuperación, Lecciones Aprendidas
- Plantillas IR profesionales
- Errores comunes en cada fase y cómo evitarlos
- Aplicación del ciclo a incidente entry-level realista
- **Lab:** Aplicación de las 6 fases de IR a incidente simulado con documentación por fase.
- **Entregable:** Reporte de IR aplicando NIST SP 800-61 con evidencia por cada fase completada.

#### Sesión 26: Documentación Profesional de Incidentes (150 min, blend)
- Estructura de un Incident Response Report para un CISO
- Plantilla de Reporte CISO (material propio ETS) + ejemplos públicos de CISA
- Lenguaje técnico vs ejecutivo: cuándo usar cada uno
- Trazabilidad, confidencialidad y preservación de evidencia
- **Lab:** Redacción de reporte técnico presentable ante un CISO sobre incidente de la sesión anterior.
- **Entregable:** IR Report profesional de 4–6 páginas con resumen ejecutivo + cronología técnica + recomendaciones.

#### Sesión 27: Marcos de Referencia: NIST CSF e ISO 27001 (150 min, blend)
- Las 5 funciones del NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover
- Visión general de ISO 27001 y sus 93 controles
- Cómo se usan estos marcos en auditorías y certificaciones
- Mapeo de incidentes a las funciones del NIST CSF
- **Lab:** Mapeo del incidente analizado a las 5 funciones del NIST CSF.
- **Entregable:** Documento de mapeo NIST CSF con controles identificados en cada función + gaps detectados.

#### Sesión 28: Políticas de Seguridad y Continuidad Operativa (BCP/DRP) (150 min, blend)
- BCP (Business Continuity Plan) vs DRP (Disaster Recovery Plan)
- RTO (Recovery Time Objective) y RPO (Recovery Point Objective)
- Rol del SOC Analyst cuando se activa un BCP/DRP
- Caso de estudio: Colonial Pipeline (ransomware, 2021)
- **Lab:** Simulación IR completa de incidente de ransomware con aplicación de las 6 fases + mapeo NIST CSF + IR Report preliminar.
- **Entregable:** IR Report preliminar del ransomware simulado con activación de procedimientos BCP/DRP.

#### Herramientas del módulo
- NIST SP 800-61 (documento oficial, gratuito)
- NIST CSF (documento oficial, gratuito)
- ISO 27001 (resumen ejecutivo)
- Plantillas IR propias de ETS + ejemplos públicos CISA
- Plantillas BCP/DRP

---

### Módulo 8: Riesgo, Certificación y Demo Day

Cerramos el bootcamp con gestión de riesgos aplicada (CVSS en contexto de negocio), dos simulacros completos del examen CompTIA Security+ SY0-701, preparación para empleo y Demo Day con audiencia externa.

#### Sesión 29: Gestión de Riesgos Aplicada (CVSS en Contexto de Negocio) (150 min, blend)
- CVSS Calculator (FIRST.org) a profundidad: cómo justificar cada métrica
- Contextualización del riesgo: el CVSS 9.0 de un servidor aislado no es el mismo que en el servidor de facturación
- Base de datos NVD y catálogo de CISA Known Exploited Vulnerabilities
- Comunicación de riesgo técnico a stakeholders no técnicos
- **Lab:** Análisis de 3 vulnerabilidades CVSS altas con contextualización por impacto de negocio y comunicación adaptada a gerencia.
- **Entregable:** Resumen ejecutivo de riesgo técnico para audiencia no técnica con priorización justificada.

#### Sesión 30: Simulacro Examen SY0-701 #1 (150 min, blend)
- Simulacro completo cronometrado: 90 preguntas, 90 minutos, todos los 5 dominios
- Revisión inmediata de errores por dominio
- Estrategias de gestión de tiempo en el examen real
- Identificación de áreas débiles para estudio focalizado
- **Lab:** Simulacro completo SY0-701 usando ExamCompass + plataforma de Jason Dion (Udemy).
- **Entregable:** Reporte de resultados con análisis por dominio y plan de estudio personalizado para los últimos 7 días.

#### Sesión 31: Simulacro SY0-701 #2 + Estrategia para el Día del Examen (150 min, blend)
- Segundo simulacro enfocado en dominios débiles del primero
- Técnicas específicas para PBQs (Performance-Based Questions)
- Gestión del tiempo y estrés en el día del examen
- Logística del examen: Pearson VUE online vs presencial
- **Lab:** Simulacro enfocado en áreas débiles + práctica con PBQs usando ExamCompass y Professor Messer.
- **Entregable:** Plan de acción final para el examen con checklist del día del examen.

#### Sesión 32: Demo Day — Portafolio y Preparación para Empleo (150 min, blend)
- Presentación del Incident Response Report completo ante audiencia externa (3–5 reclutadores IT, analistas SOC, alumni de ETS)
- Estructura de presentación de 10 minutos: problema, análisis, resultados, recomendaciones
- Networking profesional con los asistentes
- Optimización del perfil de LinkedIn y plan de búsqueda de empleo
- **Lab:** Presentación en vivo del IR Report ante panel externo + sesión de Q&A.
- **Entregable:** **Entregable 4 del portafolio (Demo Day)** — Incident Response Report completo presentado en vivo con pitch grabado para LinkedIn.

#### Herramientas del módulo
- CVSS Calculator (FIRST.org) oficial
- National Vulnerability Database (NVD)
- CISA Known Exploited Vulnerabilities Catalog
- ExamCompass, Jason Dion (Udemy), Professor Messer (recursos SY0-701)
- LinkedIn (optimización de perfil profesional)

---

## Proyecto Final del Curso

### **Incident Response Report — Portafolio profesional de SOC Analyst**

El proyecto final es un **Incident Response Report completo** que integra las 6 fases de NIST SP 800-61, mapeo a MITRE ATT&CK, análisis de IOCs y recomendaciones ejecutivas. Se construye durante el Módulo 7 sobre un incidente simulado realista (basado en el caso Colonial Pipeline) y se presenta en Demo Day ante audiencia externa en la Sesión 32.

**Componentes del proyecto:**
- Análisis técnico completo del incidente con IOCs extraídos de logs y tráfico de red
- Aplicación de las 6 fases del ciclo NIST SP 800-61 con evidencia por fase
- Mapeo a técnicas MITRE ATT&CK con layer exportado
- Contextualización de riesgo con CVSS en contexto de negocio
- Presentación ejecutiva de 10 minutos ante reclutadores IT, analistas SOC senior y alumni

**Entregables:**
- Incident Response Report formal de 6–8 páginas (PDF listo para portafolio)
- Layer de MITRE ATT&CK Navigator exportado en JSON
- Pitch de 10 minutos grabado durante Demo Day (publicable en LinkedIn)
- Los otros 3 artefactos del portafolio (análisis de phishing, reporte de tráfico, ticket SIEM) generados durante los módulos previos

---

## Resultado Final

Al finalizar el curso tendrás:

- **Portafolio técnico con 4 entregables publicables** (análisis de phishing + Kill Chain, reporte de análisis de tráfico `.pcap`, ticket de incidente SIEM con Wazuh, Incident Response Report completo)
- **Preparación directa para CompTIA Security+ SY0-701** con dos simulacros cronometrados y plan de estudio personalizado por dominio
- **Experiencia práctica con el stack real del SOC junior**: Wazuh, Wireshark, Kali Linux, MITRE ATT&CK, OWASP ZAP, fuentes de Threat Intelligence
- **Red profesional activa** a partir del networking del Demo Day y contacto con alumni del programa
- **Plan de acción post-curso** para rendir el examen de certificación en las 4 semanas siguientes al bootcamp

---

## Diferenciación

| Aspecto      | Otros programas de ciberseguridad | SOC Analyst Bootcamp - Ciberseguridad L1 |
|--------------|-------------------------------------|-------------------------------------------|
| Formato      | Teoría dispersa en 6–9 meses, sin proyecto integrador | 16 semanas intensivas con escenario único (*Ferretería El Martillo*) que conecta todos los módulos |
| Resultado    | Diploma sin portafolio demostrable | 4 artefactos técnicos reales publicables en GitHub, listos para aplicar a empleo |
| Instructor   | Enfoque genérico de "ciberseguridad" | Instructor especialista Blue Team con operación real en SOCs |
| Práctica     | Clases teóricas con quizzes | Cada sesión tiene lab con herramientas del sector (Wazuh, Wireshark, MITRE ATT&CK) |
| Continuidad  | Fin del curso = fin del acompañamiento | Demo Day con reclutadores + plan de preparación para Security+ SY0-701 |

---

## Herramientas del programa

| Categoría                   | Herramientas |
|-----------------------------|--------------|
| SIEM y monitoreo            | Wazuh (open source, provisto) |
| Análisis de tráfico         | Wireshark, hping3, Nmap |
| Análisis de malware / IOCs  | VirusTotal, CyberChef, MXToolbox, Any.run, AlienVault OTX, AbuseIPDB, Cisco Talos, CriminalIP |
| Entornos de laboratorio     | Kali Linux, VirtualBox, Docker (OWASP Juice Shop) |
| Cloud e identidad           | Azure Free Tier, AWS Free Tier |
| Vulnerabilidades y web      | OWASP ZAP, CIS Benchmarks, NVD, CISA KEV, CVSS Calculator (FIRST.org) |
| Marcos de referencia        | MITRE ATT&CK Navigator, NIST SP 800-61, NIST CSF, ISO 27001 |
| Ticketing y preparación SY0-701 | Jira (free), TryHackMe, ExamCompass, Jason Dion, Professor Messer |

Todas las herramientas cuentan con versión gratuita o trial suficiente para completar el bootcamp. Las VMs y licencias de laboratorio son provistas por ETS en entornos aislados. El voucher del examen CompTIA Security+ SY0-701 se gestiona de forma independiente por el estudiante (costo aproximado: USD $340–$425).

