/**
 * ROJDEV // MARCOS MARTÍNEZ — PORTFOLIO DATA & BILINGUAL DICTIONARY
 * Real engineering experience, repositories, open-source contributions,
 * architecture specs, and CLI commands.
 */

window.ROJDEV_DATA = {
  profile: {
    name: "Marcos Martínez",
    handle: "rojdev",
    email: "marcos.rojdev@gmail.com",
    location: "Venezuela · UTC-4",
    company: "Corpoeureka",
    github: "https://github.com/rojdev",
    linkedin: "https://www.linkedin.com/in/marcos-martinez-rojdev/",
    website: "https://rojdev.github.io/",
    avatar: "https://avatars.githubusercontent.com/u/143766069?v=4"
  },

  i18n: {
    es: {
      nav: {
        architecture: "Arquitectura",
        experience: "Trayectoria",
        showcase: "Casos de Estudio",
        archive: "Proyectos",
        arsenal: "Arsenal",
        contact: "Contacto",
        cmdHint: "Comandos"
      },
      preloader: {
        boot: "INICIALIZANDO TELEMETRÍA DE SISTEMAS",
        cluster: "PROXMOX_VE // ODOO_V16_V19 // UBUNTU_SERVER",
        ready: "ARQUITECTURA LISTA PARA DESPLIEGUE"
      },
      hero: {
        badge: "DESARROLLADOR DE SOFTWARE · ACTUALMENTE DESARROLLADOR ODOO",
        kicker: "ARQUITECTURA BACKEND · ODOO ERP (v16–v19) · INFRAESTRUCTURA UBUNTU SERVER",
        titleLine1: "MARCOS",
        titleLine2: "MARTÍNEZ",
        titleItalic: "Sistemas que escalan bajo presión.",
        description: "Desarrollador de Software enfocado en construir el núcleo operativo de las empresas: desde hipervisores Bare-Metal en Proxmox y despliegues en Ubuntu Server con Docker, hasta microservicios de alto rendimiento en Laravel/Node.js/Bun y desarrollo corporativo en Odoo ERP (v16 a v19).",
        ctaPrimary: "Explorar Trayectoria",
        ctaSecondary: "Arquitectura & Proyectos",
        ctaTerminal: "Consola Interactiva",
        metrics: [
          { value: "v16–19", label: "Odoo Enterprise", sub: "Addons, OWL & Facturación" },
          { value: "4+", label: "Capas de Dominio", sub: "Bare-Metal → ERP → UI" },
          { value: "20+", label: "Sistemas & Repos", sub: "Producción & Open Source" },
          { value: "99.9%", label: "Uptime Target", sub: "Proxmox VE & Ubuntu Server" }
        ],
        floatingCards: {
          card1Title: "ENTERPRISE ERP // ODOO v16–v19",
          card1Sub: "Módulos a Medida · Migración v16→v19 · Facturación Fiscal API",
          card2Title: "INFRASTRUCTURE // TIER 01-04",
          card2Sub: "Proxmox VE · Ubuntu Server LTS · Docker · PostgreSQL 17",
          card3Title: "HIGH-THROUGHPUT BACKEND",
          card3Sub: "Laravel 12 · Bun + Hono DDD · Node.js SMB2 · React 19"
        },
        terminal: {
          title: "marcos@rojdev-ubuntu: ~/production-cluster",
          hint: "Escribe 'help' o haz clic en un comando rápido:",
          placeholder: "Escribe un comando (help, whoami, experience, projects, odoo, portuguesa, stack, contact)..."
        }
      },
      marquee: [
        "ODOO ERP v16–v19 DEVELOPER",
        "PROXMOX VE VIRTUALIZATION",
        "UBUNTU SERVER INFRASTRUCTURE",
        "CLEAN ARCHITECTURE & DDD",
        "LARAVEL 12 & REACT 19 INERTIA",
        "HIGH-CONCURRENCY POSTGRESQL",
        "JASPERREPORTS & FISCAL APIS",
        "NODE.JS SMB2 & BUN Hono API"
      ],
      arch: {
        tag: "01 // ARQUITECTURA DE SISTEMAS VERTICAL",
        title: "Del silicio al",
        titleItalic: "proceso de negocio.",
        subtitle: "Mi ventaja competitiva radica en comprender cada eslabón de ejecución. No solo escribo el código de aplicación: diseño la topología de red, administro Ubuntu Server, orquesto los contenedores y optimizo las consultas SQL.",
        explodeBtn: "Expandir Capas en 3D",
        collapseBtn: "Compactar Topología",
        tiers: [
          {
            id: "tier-04",
            tier: "TIER 04 // APPLICATION & ERP LAYER",
            name: "Odoo ERP (v16–v19) · Laravel 12 · Bun/Hono · React 19",
            summary: "Lógica de negocio corporativa, módulos Odoo a medida a través de cuatro versiones mayores, arquitecturas limpias DDD e interfaces reactivas.",
            specs: ["Odoo v16 a v19 & OWL", "Laravel 12 + Inertia", "Bun + Hono + Drizzle DDD", "Jaspersoft & QWeb PDF", "REST / SOAP Fiscal APIs"],
            metric: "Latencia P95 < 85ms"
          },
          {
            id: "tier-03",
            tier: "TIER 03 // CONTAINER & DATA RUNTIME",
            name: "Docker Engine · PostgreSQL 17 · MinIO S3 · Redis",
            summary: "Aislamiento reproducible mediante Docker Compose, almacenamiento de objetos compatible con S3 y bases de datos transaccionales de alta concurrencia.",
            specs: ["Docker Compose Multi-Stage", "PostgreSQL 17 Tuning", "MinIO Object Storage", "SMB2 Network Streaming", "Automated TDD Suites"],
            metric: "Zero-Config Reproducibility"
          },
          {
            id: "tier-02",
            tier: "TIER 02 // UBUNTU SERVER & REVERSE PROXY",
            name: "Ubuntu Server LTS · NGINX · Apache · SSL · Systemd",
            summary: "Servidores Ubuntu Server endurecidos (SSH hardening, UFW), balanceo por proxy inverso NGINX, certificados automatizados y demonios supervisados.",
            specs: ["Ubuntu Server LTS", "NGINX Reverse Proxy", "Let's Encrypt TLS 1.3", "Systemd Daemons", "Bash / PowerShell Automation"],
            metric: "Hardened Security Posture"
          },
          {
            id: "tier-01",
            tier: "TIER 01 // BARE-METAL HYPERVISOR",
            name: "Proxmox VE Cluster · LXC · KVM · ZFS Storage",
            summary: "Virtualización tipo 1 sobre hardware dedicado, contenedores LXC de bajo overhead, máquinas virtuales KVM aisladas y snapshots instantáneos.",
            specs: ["Proxmox VE Hypervisor", "KVM & LXC Containers", "VLAN Network Segmentation", "Automated Backups", "Resource Telemetry"],
            metric: "Bare-Metal Efficiency"
          }
        ]
      },
      experience: {
        tag: "02 // TRAYECTORIA PROFESIONAL & ROLES DE INGENIERÍA",
        title: "Experiencia",
        titleItalic: "comprobada en producción.",
        subtitle: "Un recorrido por las organizaciones, plataformas de impacto nacional e infraestructuras críticas donde he construido, migrado y desplegado software.",
        impactLabel: "IMPACTO ARQUITECTÓNICO",
        stackLabel: "TECNOLOGÍAS CLAVE",
        deliverablesLabel: "HITOS & ENTREGABLES",
        blueprintLabel: "ESQUEMA DE ARQUITECTURA EN ESTE ROL",
        jobs: [
          {
            id: "corpoeureka",
            index: "01",
            role: "Desarrollador de Software & Desarrollador Odoo",
            company: "Corpoeureka (Corporación Eureka)",
            location: "Venezuela · Presencial / Híbrido",
            period: "Actualidad · Presente",
            status: "ROL ACTUAL",
            impactScore: "98%",
            impactText: "Desarrollo de módulos core, migraciones Odoo v16 a v19 y facturación fiscal.",
            summary: "Desarrollo de módulos empresariales personalizados en Odoo ERP (versiones 16, 17, 18 y 19) adaptados a flujos complejos de negocio corporativo, migración técnica de addons entre versiones, integraciones de facturación digital en Venezuela y refactorización profunda para optimización de rendimiento.",
            bullets: [
              "Arquitectura y desarrollo de módulos Odoo a medida (Python, XML, OWL Framework) desde la versión 16 hasta la versión 19, alineados con reglas financieras, logísticas y operativas de cada cliente.",
              "Ejecución de migraciones técnicas de addons personalizados a través de Odoo v16, v17, v18 y v19, adaptando cambios en el ORM, vistas heredadas y paquetes de activos OWL.",
              "Integración de sistemas de facturación digital y fiscal en Venezuela mediante el consumo seguro de servicios web y APIs REST/SOAP con validación transaccional.",
              "Refactorización de código heredado y optimización de consultas en PostgreSQL para eliminar cuellos de botella en cierres contables y operaciones masivas.",
              "Diseño y programación de reportes financieros y formatos de facturación en forma libre de alta precisión utilizando Jaspersoft Studio y motores QWeb."
            ],
            tech: ["Odoo v16 – v19", "Python", "PostgreSQL", "OWL Framework", "Jaspersoft Studio", "QWeb Reports", "REST / SOAP APIs", "XML / XPath", "Git", "Ubuntu Server"],
            blueprint: {
              title: "Pipeline de Facturación Fiscal & ERP Core (v16–v19)",
              nodes: ["Odoo v16–v19 ORM", "Fiscal API Connector (REST/SOAP)", "Jaspersoft Free-Form Engine", "PostgreSQL Ledger"]
            }
          },
          {
            id: "portuguesa-unida",
            index: "02",
            role: "Open Source Contributor · Full Stack & Clean Architecture",
            company: "Portuguesa Unida & SOS Venezuela",
            location: "Venezuela · Colaboración Abierta",
            period: "2026",
            status: "IMPACTO HUMANITARIO & OPEN SOURCE",
            impactScore: "96%",
            impactText: "Módulo de emergencias geoespaciales bajo Clean Architecture + DDD y scrapers de datos.",
            summary: "Contribución de ingeniería de software en plataformas abiertas de respuesta humanitaria y logística en tiempo real para Venezuela ('Portuguesa Unida - Centros de Acopio' y 'SOS Venezuela Datos'), aplicando arquitectura limpia (DDD), visualización en mapas interactivos y extracción automatizada de datos.",
            bullets: [
              "Diseñé e implementé en 'Portuguesa Unida' (sos-logistica-vzla) el módulo completo de Emergencias e Incidencias siguiendo Clean Architecture y Domain-Driven Design (DDD) en 11 capas (Entidad de dominio, Errores de dominio, Puertos de repositorio, Casos de uso Create/List/Update y pruebas TDD in-memory).",
              "Desarrollé adaptadores de persistencia con Drizzle ORM sobre PostgreSQL (`onConflictDoUpdate`) y endpoints en Hono (Bun) con máquina de estados sin borrado destructivo (`ACTIVE → CONTAINED → CLOSED`) y control de acceso para roles ADMIN/MANAGER.",
              "Construí la visualización geoespacial de emergencias en React 19 + MapLibre GL (`MapIncidentMarker` con halos pulsantes dinámicos según estado), sincronizada con TanStack React Query v5 y el panel administrativo `/admin/incidents`.",
              "Desarrollé scrapers automatizados en Python para 'SOS Venezuela Data' (`CalitoTech/sos-venezuela-data`) encargados de extraer, normalizar y deduplicar registros hacia PostgreSQL."
            ],
            tech: ["Bun", "Hono", "Clean Architecture & DDD", "Drizzle ORM", "React 19", "MapLibre GL", "TanStack Query v5", "TypeScript", "Python Scrapers", "PostgreSQL"],
            blueprint: {
              title: "Arquitectura DDD & Mapa de Emergencias (Portuguesa Unida)",
              nodes: ["React 19 + MapLibre GL", "Hono REST API (Bun)", "11-Layer DDD Use Cases", "Drizzle ORM + PostgreSQL"]
            }
          },
          {
            id: "tedoin",
            index: "03",
            role: "Desarrollador Full Stack / Backend",
            company: "Tedoin",
            location: "Venezuela",
            period: "Etapa Anterior",
            status: "ARQUITECTURA ENTREGADA",
            impactScore: "95%",
            impactText: "Portales de ventas de alto volumen + streaming multimedia sobre protocolo SMB2.",
            summary: "Responsable del diseño e implementación de microservicios backend de alto rendimiento, portales centrales de control de ventas e integraciones con protocolos de almacenamiento corporativo.",
            bullets: [
              "Desarrollé 'Control Ventas Inter Tedoin', una plataforma integral de gestión y control de ventas de alto volumen utilizando Laravel 12, React 19 (Inertia.js), PostgreSQL 17 y almacenamiento de objetos MinIO (S3-compatible).",
              "Diseñé y construí 'API Publicidad', un microservicio especializado en Node.js y Express capaz de autenticar, consultar y transmitir (streaming) imágenes y videos publicitarios directamente desde recursos compartidos de red Windows mediante el protocolo SMB2.",
              "Estandaricé entornos desacoplados de contenedores Docker (Laravel Sail / Node 22 / PHP 8.4) y pipelines de publicación continua hacia Docker Hub con GitHub Actions.",
              "Implementé flujos de trabajo modernos de interfaz de usuario con TypeScript, Tailwind CSS 4.0 y componentes accesibles con shadcn/ui."
            ],
            tech: ["Laravel 12", "React 19", "Inertia.js", "Node.js", "Express", "SMB2 Protocol", "PostgreSQL 17", "MinIO S3", "TypeScript", "Tailwind CSS 4.0", "Docker Hub CI/CD"],
            blueprint: {
              title: "Ecosistema de Ventas & Microservicio SMB2",
              nodes: ["React 19 + Inertia", "Laravel 12 Core + MinIO S3", "Node.js SMB2 Streamer", "Windows Network Shares"]
            }
          },
          {
            id: "alcaldia-paez",
            index: "04",
            role: "Desarrollador de Software & Administrador de Sistemas",
            company: "Alcaldía del Municipio Páez",
            location: "Portuguesa, Venezuela",
            period: "Etapa Anterior",
            status: "GOBIERNO DIGITAL",
            impactScore: "94%",
            impactText: "Digitalización de atención ciudadana, indicadores municipales y bot de Telegram.",
            summary: "Lideré la creación de plataformas digitales de atención ciudadana, tableros ejecutivos de indicadores de gestión municipal, bots de asistencia automatizada y administración integral de servidores Ubuntu Server y bases de datos.",
            bullets: [
              "Creador del 'Sistema de Recolección de Información y Encuestas Ciudadanas' (SACWAN / Atención al Ciudadano) con frontend reactivo en Vue 3 (Quasar Framework, Pinia, Tailwind CSS) y API REST en Node.js/Express con MySQL y autenticación JWT.",
              "Construí un Bot Asistente Virtual en Telegram utilizando Python asíncrono (python-telegram-bot, aiohttp, asyncio) para que los ciudadanos consulten políticas sociales, estatus de solicitudes e información de comunas en tiempo real.",
              "Desarrollé 'SIA Indicadores' (Proyecto HORUS), un panel administrativo dinámico para monitoreo de indicadores municipales, reportes PDF automatizados (DomPDF), colas de trabajo en segundo plano y gráficos interactivos con PHP Laravel 8 y AdminLTE.",
              "Administré la infraestructura en Ubuntu Server, despliegues en contenedores Docker, seguridad de APIs REST y respaldos de bases de datos relacionales."
            ],
            tech: ["Vue 3", "Quasar Framework", "Pinia", "Node.js / Express", "Python Asyncio", "Telegram Bot API", "PHP Laravel 8", "MySQL", "Docker", "Ubuntu Server"],
            blueprint: {
              title: "Infraestructura de Gobierno Electrónico Municipal",
              nodes: ["Vue 3 Quasar PWA", "Python Telegram Bot", "Express JWT API + Laravel 8", "MySQL Cluster"]
            }
          }
        ]
      },
      showcase: {
        tag: "03 // CASOS DE ESTUDIO DESTACADOS (SCROLL HORIZONTAL)",
        title: "Ingeniería en",
        titleItalic: "primera línea.",
        subtitle: "Desliza para explorar la arquitectura interna de cuatro sistemas clave que combinan Clean Architecture, potencia backend, herramientas para Odoo y despliegue en contenedores.",
        dragHint: "SCROLL PARA RECORRER EL LABORATORIO →",
        inspectBtn: "Inspeccionar Arquitectura",
        sourceBtn: "Repositorio Público",
        privateBadge: "🔒 Repositorio Privado",
        demoBtn: "Abrir Demo"
      },
      archive: {
        tag: "04 // ARCHIVO COMPLETO DE SISTEMAS & CONTRIBUCIONES",
        title: "Catálogo de",
        titleItalic: "Proyectos & Open Source.",
        subtitle: "Acceso a los sistemas empresariales, contribuciones Open Source (Portuguesa Unida, SOS Venezuela), microservicios y herramientas construidas en mi carrera. Haz clic en cualquier tarjeta para abrir su plano técnico.",
        filters: {
          all: "Todos los Sistemas (11)",
          enterprise: "Full Stack & ERP",
          opensource: "Open Source & Impacto",
          backend: "Backend & Bots",
          devops: "DevOps & Tooling",
          web: "Web & FinTech"
        },
        viewBlueprint: "Ver Plano Técnico",
        publicLabel: "Público en GitHub ↗",
        privateLabel: "🔒 Código Privado"
      },
      arsenal: {
        tag: "05 // ARSENAL TÉCNICO & TELEMETRÍA EN VIVO DE GITHUB",
        title: "Dominio de",
        titleItalic: "pila completa.",
        subtitle: "Herramientas seleccionadas para garantizar rendimiento predecible, mantenibilidad a largo plazo y despliegues sin fricción sobre Ubuntu Server y Docker.",
        githubLiveTitle: "TELEMETRÍA DE GITHUB EN TIEMPO REAL",
        githubSyncing: "Sincronizando con api.github.com/users/rojdev...",
        githubSynced: "Conectado en vivo a api.github.com/users/rojdev",
        categories: [
          {
            name: "Odoo ERP (v16 a v19) & Soluciones Corporativas",
            code: "MOD_01 // ERP_CORE",
            desc: "Personalización profunda y migración de Odoo para reglas fiscales, financieras y operativas.",
            items: [
              { name: "Odoo v16, v17, v18 & v19", level: 97, detail: "Custom Addons, ORM, Migraciones" },
              { name: "OWL Framework & QWeb", level: 93, detail: "Componentes dinámicos y reportes PDF" },
              { name: "Jaspersoft Studio", level: 90, detail: "Formatos de factura en forma libre" },
              { name: "Facturación Digital VE", level: 95, detail: "Integración REST/SOAP fiscal" }
            ]
          },
          {
            name: "Desarrollo Backend & Microservicios",
            code: "MOD_02 // BACKEND_ENG",
            desc: "APIs de baja latencia, Clean Architecture (DDD), procesamiento asíncrono y protocolos de red.",
            items: [
              { name: "Python (Odoo / Asyncio / ETL)", level: 95, detail: "ERP, Bots asíncronos, Scrapers" },
              { name: "PHP 8.4 & Laravel 8–12", level: 96, detail: "Inertia.js, Sail, Colas, Eloquent" },
              { name: "Node.js, Bun & Hono", level: 93, detail: "Clean Arch DDD, Drizzle, SMB2" },
              { name: "TypeScript & ESNext", level: 92, detail: "Tipado estricto Full Stack" }
            ]
          },
          {
            name: "Infraestructura, Virtualización & DevOps",
            code: "MOD_03 // SYSADMIN_OPS",
            desc: "Desde el hipervisor Bare-Metal hasta servidores Ubuntu Server y contenedores reproducibles.",
            items: [
              { name: "Proxmox VE", level: 94, detail: "Clústeres KVM/LXC, Gestión de Nodos" },
              { name: "Ubuntu Server LTS", level: 96, detail: "Hardening, NGINX, Apache, Systemd" },
              { name: "Docker & Docker Compose", level: 96, detail: "Doxamp, Multi-stage builds, CI/CD" },
              { name: "MinIO S3 & Redes SMB2", level: 90, detail: "Object storage & archivos remotos" }
            ]
          },
          {
            name: "Bases de Datos & Interfaces Modernas",
            code: "MOD_04 // DATA_AND_UI",
            desc: "Integridad relacional bajo alta concurrencia e interfaces reactivas y geoespaciales.",
            items: [
              { name: "PostgreSQL 17 & MySQL", level: 95, detail: "Drizzle ORM, optimización, pg_restore" },
              { name: "React 19, MapLibre & TanStack", level: 92, detail: "Inertia.js, Tailwind v4, Mapas en vivo" },
              { name: "Vue 3 & Quasar Framework", level: 90, detail: "Pinia, PWAs, Paneles de control" },
              { name: "Vanilla Web & Extensions", level: 94, detail: "Web Components, Manifest V3" }
            ]
          }
        ]
      },
      contact: {
        tag: "06 // INICIAR CONEXIÓN",
        availability: "DISPONIBLE PARA PROYECTOS RETADORES & CONSULTORÍA ODOO / BACKEND",
        titleLine1: "¿Listo para escalar",
        titleLine2: "tu infraestructura?",
        subtitle: "Actualmente desempeñándome como Desarrollador de Software y Desarrollador Odoo (v16–v19), abierto a desafíos técnicos en arquitectura ERP, desarrollo backend de alto volumen y administración de infraestructura con Ubuntu Server y Proxmox.",
        copyEmail: "Copiar Correo",
        emailCopied: "¡Copiado al portapapeles!",
        sendEmail: "Enviar Correo Directo",
        linkedinBtn: "Conectar en LinkedIn",
        githubBtn: "Explorar GitHub (@rojdev)"
      },
      modal: {
        close: "Cerrar [ESC]",
        architecture: "ARQUITECTURA & FLUJO TÉCNICO",
        highlights: "CARACTERÍSTICAS & LOGROS DE DESARROLLO",
        stack: "STACK TECNOLÓGICO",
        repoBtn: "Abrir en GitHub",
        privateNotice: "🔒 Repositorio Privado (Código protegido por acuerdo corporativo)",
        liveBtn: "Ver Despliegue en Vivo"
      }
    },

    en: {
      nav: {
        architecture: "Architecture",
        experience: "Experience",
        showcase: "Case Studies",
        archive: "Projects",
        arsenal: "Arsenal",
        contact: "Contact",
        cmdHint: "Commands"
      },
      preloader: {
        boot: "INITIALIZING SYSTEMS TELEMETRY",
        cluster: "PROXMOX_VE // ODOO_V16_V19 // UBUNTU_SERVER",
        ready: "ARCHITECTURE READY FOR DEPLOYMENT"
      },
      hero: {
        badge: "SOFTWARE DEVELOPER · CURRENTLY ODOO DEVELOPER",
        kicker: "BACKEND ARCHITECTURE · ODOO ERP (v16–v19) · UBUNTU SERVER INFRASTRUCTURE",
        titleLine1: "MARCOS",
        titleLine2: "MARTÍNEZ",
        titleItalic: "Systems engineered to scale under pressure.",
        description: "Software Developer building the operational core of modern enterprises: from bare-metal Proxmox hypervisors and Ubuntu Server Docker clusters to high-throughput Laravel/Node.js/Bun microservices and enterprise Odoo ERP modules (v16 through v19).",
        ctaPrimary: "Explore Track Record",
        ctaSecondary: "Architecture & Works",
        ctaTerminal: "Interactive CLI",
        metrics: [
          { value: "v16–19", label: "Odoo Enterprise", sub: "Addons, OWL & Fiscal APIs" },
          { value: "4+", label: "Domain Tiers", sub: "Bare-Metal → ERP → UI" },
          { value: "20+", label: "Systems & Repos", sub: "Production & Open Source" },
          { value: "99.9%", label: "Uptime Target", sub: "Proxmox VE & Ubuntu Server" }
        ],
        floatingCards: {
          card1Title: "ENTERPRISE ERP // ODOO v16–v19",
          card1Sub: "Custom Addons · v16→v19 Migrations · Fiscal API Billing",
          card2Title: "INFRASTRUCTURE // TIER 01-04",
          card2Sub: "Proxmox VE · Ubuntu Server LTS · Docker · PostgreSQL 17",
          card3Title: "HIGH-THROUGHPUT BACKEND",
          card3Sub: "Laravel 12 · Bun + Hono DDD · Node.js SMB2 · React 19"
        },
        terminal: {
          title: "marcos@rojdev-ubuntu: ~/production-cluster",
          hint: "Type 'help' or click a quick command chip:",
          placeholder: "Type a command (help, whoami, experience, projects, odoo, portuguesa, stack, contact)..."
        }
      },
      marquee: [
        "ODOO ERP v16–v19 DEVELOPER",
        "PROXMOX VE VIRTUALIZATION",
        "UBUNTU SERVER INFRASTRUCTURE",
        "CLEAN ARCHITECTURE & DDD",
        "LARAVEL 12 & REACT 19 INERTIA",
        "HIGH-CONCURRENCY POSTGRESQL",
        "JASPERREPORTS & FISCAL APIS",
        "NODE.JS SMB2 & BUN Hono API"
      ],
      arch: {
        tag: "01 // VERTICAL SYSTEMS ARCHITECTURE",
        title: "From bare silicon to",
        titleItalic: "business logic.",
        subtitle: "My competitive edge lies in owning the entire execution stack. I don't just write application code: I design network topologies, harden Ubuntu Server nodes, orchestrate containers, and tune SQL queries.",
        explodeBtn: "Explode 3D Layers",
        collapseBtn: "Collapse Topology",
        tiers: [
          {
            id: "tier-04",
            tier: "TIER 04 // APPLICATION & ERP LAYER",
            name: "Odoo ERP (v16–v19) · Laravel 12 · Bun/Hono · React 19",
            summary: "Enterprise business logic, custom Odoo addons across four major versions, Clean Architecture DDD services, and reactive SPA interfaces.",
            specs: ["Odoo v16 to v19 & OWL", "Laravel 12 + Inertia", "Bun + Hono + Drizzle DDD", "Jaspersoft & QWeb PDF", "REST / SOAP Fiscal APIs"],
            metric: "P95 Latency < 85ms"
          },
          {
            id: "tier-03",
            tier: "TIER 03 // CONTAINER & DATA RUNTIME",
            name: "Docker Engine · PostgreSQL 17 · MinIO S3 · Redis",
            summary: "Reproducible isolation with Docker Compose, S3-compatible object storage, and high-concurrency relational databases.",
            specs: ["Docker Compose Multi-Stage", "PostgreSQL 17 Tuning", "MinIO Object Storage", "SMB2 Network Streaming", "Automated TDD Suites"],
            metric: "Zero-Config Reproducibility"
          },
          {
            id: "tier-02",
            tier: "TIER 02 // UBUNTU SERVER & REVERSE PROXY",
            name: "Ubuntu Server LTS · NGINX · Apache · SSL · Systemd",
            summary: "Hardened Ubuntu Server hosts (SSH hardening, UFW), NGINX reverse proxy load balancing, automated TLS certificates, and supervised daemons.",
            specs: ["Ubuntu Server LTS", "NGINX Reverse Proxy", "Let's Encrypt TLS 1.3", "Systemd Daemons", "Bash / PowerShell Automation"],
            metric: "Hardened Security Posture"
          },
          {
            id: "tier-01",
            tier: "TIER 01 // BARE-METAL HYPERVISOR",
            name: "Proxmox VE Cluster · LXC · KVM · ZFS Storage",
            summary: "Type-1 bare-metal virtualization, low-overhead LXC containers, isolated KVM virtual machines, and instant ZFS snapshots.",
            specs: ["Proxmox VE Hypervisor", "KVM & LXC Containers", "VLAN Network Segmentation", "Automated Backups", "Resource Telemetry"],
            metric: "Bare-Metal Efficiency"
          }
        ]
      },
      experience: {
        tag: "02 // PROFESSIONAL TRACK RECORD & ROLES",
        title: "Production-proven",
        titleItalic: "development experience.",
        subtitle: "A chronicle of the organizations, national open-source initiatives, and mission-critical infrastructures where I have built, migrated, and deployed software.",
        impactLabel: "ARCHITECTURAL IMPACT",
        stackLabel: "CORE TECHNOLOGIES",
        deliverablesLabel: "KEY MILESTONES",
        blueprintLabel: "SYSTEM ARCHITECTURE IN THIS ROLE",
        jobs: [
          {
            id: "corpoeureka",
            index: "01",
            role: "Software Developer & Odoo Developer",
            company: "Corpoeureka (Corporación Eureka)",
            location: "Venezuela · On-site / Hybrid",
            period: "Present · Current Role",
            status: "CURRENT ROLE",
            impactScore: "98%",
            impactText: "Core ERP module development, Odoo v16–v19 migrations & fiscal API billing.",
            summary: "Developing custom Odoo ERP modules (versions 16, 17, 18, and 19) tailored to complex corporate workflows, migrating custom addons across major versions, integrating digital fiscal invoicing in Venezuela, and refactoring codebases for peak performance.",
            bullets: [
              "Architecting and developing bespoke Odoo modules (Python, XML, OWL Framework) across Odoo v16, v17, v18, and v19 aligned with financial, logistics, and operational business logic.",
              "Executing technical migrations of custom modules and addons from Odoo v16 through v19, resolving ORM API changes, inherited views, and OWL asset bundles.",
              "Integrating Venezuelan digital fiscal invoicing systems via fault-tolerant REST/SOAP web services and transactional hooks.",
              "Refactoring legacy addons and optimizing PostgreSQL queries to eliminate bottlenecks in high-volume accounting operations.",
              "Designing and building pixel-accurate free-form invoice layouts and financial reports using Jaspersoft Studio and QWeb."
            ],
            tech: ["Odoo v16 – v19", "Python", "PostgreSQL", "OWL Framework", "Jaspersoft Studio", "QWeb Reports", "REST / SOAP APIs", "XML / XPath", "Git", "Ubuntu Server"],
            blueprint: {
              title: "Fiscal Invoicing & ERP Core Pipeline (v16–v19)",
              nodes: ["Odoo v16–v19 ORM", "Fiscal API Connector (REST/SOAP)", "Jaspersoft Free-Form Engine", "PostgreSQL Ledger"]
            }
          },
          {
            id: "portuguesa-unida",
            index: "02",
            role: "Open Source Contributor · Full Stack & Clean Architecture",
            company: "Portuguesa Unida & SOS Venezuela",
            location: "Venezuela · Open Source Collaboration",
            period: "2026",
            status: "CIVIC & HUMANITARIAN OPEN SOURCE",
            impactScore: "96%",
            impactText: "11-layer Clean Architecture + DDD emergency mapping module & automated data scrapers.",
            summary: "Software engineering contributor to real-time humanitarian logistics and emergency response platforms in Venezuela ('Portuguesa Unida - Centros de Acopio' and 'SOS Venezuela Data'), implementing Clean Architecture (DDD), interactive geospatial mapping, and automated ETL scrapers.",
            bullets: [
              "Engineered the complete Emergencies & Incidents module for 'Portuguesa Unida' (sos-logistica-vzla) following Clean Architecture and Domain-Driven Design (DDD) across 11 layers (Domain entity, Domain errors, Repository port, Create/List/Update Use Cases, and TDD in-memory tests).",
              "Built persistence adapters with Drizzle ORM on PostgreSQL (`onConflictDoUpdate`) and Hono HTTP routes on Bun featuring non-destructive state transitions (`ACTIVE → CONTAINED → CLOSED`) and ADMIN/MANAGER role gates.",
              "Developed the real-time geospatial incident visualization in React 19 + MapLibre GL (`MapIncidentMarker` with dynamic pulsing severity halos), integrated with TanStack React Query v5 and the `/admin/incidents` console.",
              "Authored Python extraction scrapers for 'SOS Venezuela Data' (`CalitoTech/sos-venezuela-data`) normalizing and deduplicating records into PostgreSQL."
            ],
            tech: ["Bun", "Hono", "Clean Architecture & DDD", "Drizzle ORM", "React 19", "MapLibre GL", "TanStack Query v5", "TypeScript", "Python Scrapers", "PostgreSQL"],
            blueprint: {
              title: "DDD Architecture & Geospatial Emergency Map (Portuguesa Unida)",
              nodes: ["React 19 + MapLibre GL", "Hono REST API (Bun)", "11-Layer DDD Use Cases", "Drizzle ORM + PostgreSQL"]
            }
          },
          {
            id: "tedoin",
            index: "03",
            role: "Full Stack / Backend Developer",
            company: "Tedoin",
            location: "Venezuela",
            period: "Previous Role",
            status: "DELIVERED ARCHITECTURE",
            impactScore: "95%",
            impactText: "High-volume sales platform + SMB2 binary media streaming microservice.",
            summary: "Designed and implemented high-throughput backend microservices, core enterprise sales portals, and cross-protocol network integrations.",
            bullets: [
              "Built 'Control Ventas Inter Tedoin', a high-volume sales management platform powered by Laravel 12, React 19 (Inertia.js), PostgreSQL 17, and MinIO S3-compatible object storage.",
              "Designed and engineered 'API Publicidad', a specialized Node.js/Express microservice that authenticates, queries, and streams advertising media directly from remote Windows file shares over the SMB2 protocol.",
              "Containerized separated development (Laravel Sail / Node 22 / PHP 8.4) and production Docker workflows with automated GitHub Actions CI/CD to Docker Hub.",
              "Delivered modern, type-safe UI/UX workflows using TypeScript, Tailwind CSS 4.0, and shadcn/ui."
            ],
            tech: ["Laravel 12", "React 19", "Inertia.js", "Node.js", "Express", "SMB2 Protocol", "PostgreSQL 17", "MinIO S3", "TypeScript", "Tailwind CSS 4.0", "Docker Hub CI/CD"],
            blueprint: {
              title: "Sales Ecosystem & SMB2 Media Streamer",
              nodes: ["React 19 + Inertia", "Laravel 12 Core + MinIO S3", "Node.js SMB2 Streamer", "Windows Network Shares"]
            }
          },
          {
            id: "alcaldia-paez",
            index: "04",
            role: "Software Developer & Systems Administrator",
            company: "Alcaldía del Municipio Páez",
            location: "Portuguesa, Venezuela",
            period: "Previous Role",
            status: "CIVIC TECH INFRASTRUCTURE",
            impactScore: "94%",
            impactText: "Digital citizen services, municipal KPI dashboards & async Telegram bot.",
            summary: "Spearheaded the development of digital citizen platforms, internal management KPI dashboards, automated notification bots, and Ubuntu Server infrastructure.",
            bullets: [
              "Created the 'Citizen Survey & Information Collection' platform (SACWAN / Atención al Ciudadano) using Vue 3 (Quasar Framework, Pinia, Tailwind CSS) backed by a secure Node.js/Express REST API with MySQL and JWT authentication.",
              "Built an asynchronous Python Telegram Assistant Bot (python-telegram-bot, aiohttp, asyncio) enabling citizens to query social policies, request statuses, and commune data via local REST APIs.",
              "Developed 'SIA Indicadores' (HORUS Project), an executive dashboard for tracking municipal KPIs, generating dynamic PDF reports (DomPDF), background queue jobs, and interactive charts with PHP Laravel 8 and AdminLTE.",
              "Administered Ubuntu Server hosting environments, Docker deployments, REST API security, and relational database backups."
            ],
            tech: ["Vue 3", "Quasar Framework", "Pinia", "Node.js / Express", "Python Asyncio", "Telegram Bot API", "PHP Laravel 8", "MySQL", "Docker", "Ubuntu Server"],
            blueprint: {
              title: "Municipal E-Government Ecosystem",
              nodes: ["Vue 3 Quasar PWA", "Python Telegram Bot", "Express JWT API + Laravel 8", "MySQL Cluster"]
            }
          }
        ]
      },
      showcase: {
        tag: "03 // FEATURED CASE STUDIES (HORIZONTAL PARALLAX)",
        title: "Frontline",
        titleItalic: "engineering works.",
        subtitle: "Scroll through the internal architecture of four flagship systems combining Clean Architecture (DDD), backend throughput, Odoo developer tooling, and containerized deployment.",
        dragHint: "SCROLL TO EXPLORE THE LAB →",
        inspectBtn: "Inspect Architecture",
        sourceBtn: "Public Repository",
        privateBadge: "🔒 Private Repository",
        demoBtn: "Live Demo"
      },
      archive: {
        tag: "04 // COMPLETE SYSTEM & OPEN-SOURCE ARCHIVE",
        title: "Catalog of",
        titleItalic: "Projects & Open Source.",
        subtitle: "Explore the enterprise platforms, Open Source contributions (Portuguesa Unida, SOS Venezuela), microservices, and developer tools built throughout my career. Click any card to inspect its technical blueprint.",
        filters: {
          all: "All Systems (11)",
          enterprise: "Full Stack & ERP",
          opensource: "Open Source & Impact",
          backend: "Backend & Bots",
          devops: "DevOps & Tooling",
          web: "Web & FinTech"
        },
        viewBlueprint: "Open Technical Blueprint",
        publicLabel: "Public on GitHub ↗",
        privateLabel: "🔒 Private Codebase"
      },
      arsenal: {
        tag: "05 // TECHNICAL ARSENAL & LIVE GITHUB TELEMETRY",
        title: "Full-stack",
        titleItalic: "command & control.",
        subtitle: "Curated technologies chosen for predictable performance, long-term maintainability, and frictionless production deployments on Ubuntu Server and Docker.",
        githubLiveTitle: "REAL-TIME GITHUB TELEMETRY",
        githubSyncing: "Synchronizing with api.github.com/users/rojdev...",
        githubSynced: "Live connected to api.github.com/users/rojdev",
        categories: [
          {
            name: "Odoo ERP (v16 to v19) & Enterprise Solutions",
            code: "MOD_01 // ERP_CORE",
            desc: "Deep customization and version migration of Odoo for fiscal, financial, and operational workflows.",
            items: [
              { name: "Odoo v16, v17, v18 & v19", level: 97, detail: "Custom Addons, ORM, Migrations" },
              { name: "OWL Framework & QWeb", level: 93, detail: "Reactive components & PDF reports" },
              { name: "Jaspersoft Studio", level: 90, detail: "Free-form fiscal invoice layouts" },
              { name: "Digital Fiscal Billing", level: 95, detail: "REST/SOAP fiscal API integrations" }
            ]
          },
          {
            name: "Backend Development & Microservices",
            code: "MOD_02 // BACKEND_ENG",
            desc: "Low-latency APIs, Clean Architecture (DDD), asynchronous processing, and enterprise network protocols.",
            items: [
              { name: "Python (Odoo / Asyncio / ETL)", level: 95, detail: "ERP Core, Async Bots, Scrapers" },
              { name: "PHP 8.4 & Laravel 8–12", level: 96, detail: "Inertia.js, Sail, Queues, Eloquent" },
              { name: "Node.js, Bun & Hono", level: 93, detail: "Clean Arch DDD, Drizzle, SMB2" },
              { name: "TypeScript & ESNext", level: 92, detail: "End-to-end strict type safety" }
            ]
          },
          {
            name: "Infrastructure, Virtualization & DevOps",
            code: "MOD_03 // SYSADMIN_OPS",
            desc: "From bare-metal hypervisors to hardened Ubuntu Server hosts and reproducible containers.",
            items: [
              { name: "Proxmox VE", level: 94, detail: "KVM/LXC Clusters, Node Management" },
              { name: "Ubuntu Server LTS", level: 96, detail: "Hardening, NGINX, Apache, Systemd" },
              { name: "Docker & Docker Compose", level: 96, detail: "Doxamp, Multi-stage builds, CI/CD" },
              { name: "MinIO S3 & SMB2 Shares", level: 90, detail: "Object storage & remote file streams" }
            ]
          },
          {
            name: "Databases & Modern Interfaces",
            code: "MOD_04 // DATA_AND_UI",
            desc: "Relational integrity under high concurrency and fast reactive & geospatial frontends.",
            items: [
              { name: "PostgreSQL 17 & MySQL", level: 95, detail: "Drizzle ORM, query tuning, pg_restore" },
              { name: "React 19, MapLibre & TanStack", level: 92, detail: "Inertia.js, Tailwind v4, Live Maps" },
              { name: "Vue 3 & Quasar Framework", level: 90, detail: "Pinia, PWAs, Executive Dashboards" },
              { name: "Vanilla Web & Extensions", level: 94, detail: "Web Components, Manifest V3" }
            ]
          }
        ]
      },
      contact: {
        tag: "06 // INITIALIZE CONNECTION",
        availability: "AVAILABLE FOR AMBITIOUS PROJECTS & ODOO / BACKEND CONSULTING",
        titleLine1: "Ready to scale your",
        titleLine2: "infrastructure?",
        subtitle: "Currently working as a Software Developer and Odoo Developer (v16–v19), open to challenging opportunities in ERP architecture, high-volume backend systems, and Ubuntu Server / Proxmox administration.",
        copyEmail: "Copy Email",
        emailCopied: "Copied to clipboard!",
        sendEmail: "Send Direct Email",
        linkedinBtn: "Connect on LinkedIn",
        githubBtn: "Explore GitHub (@rojdev)"
      },
      modal: {
        close: "Close [ESC]",
        architecture: "TECHNICAL ARCHITECTURE & FLOW",
        highlights: "KEY DEVELOPMENT HIGHLIGHTS",
        stack: "TECHNOLOGY STACK",
        repoBtn: "Open on GitHub",
        privateNotice: "🔒 Private Repository (Codebase protected under corporate agreement)",
        liveBtn: "View Live Deployment"
      }
    }
  },

  projects: [
    {
      id: "portuguesa-unida",
      code: "SYS_01",
      featured: true,
      isPrivate: false,
      category: "opensource",
      year: "2026",
      accent: "#ff3b1d",
      repoUrl: "https://github.com/Josemigg16/sos-logistica-vzla",
      liveUrl: null,
      tech: ["Bun", "Hono", "Clean Architecture (DDD)", "Drizzle ORM", "React 19", "MapLibre GL", "TanStack Query v5", "TypeScript", "PostgreSQL", "Tailwind v4"],
      diagram: ["React 19 + MapLibre GL", "Hono API (Bun)", "11-Layer DDD Module", "Drizzle + PostgreSQL"],
      es: {
        title: "Portuguesa Unida · Centros de Acopio & Mapa de Emergencias",
        type: "Plataforma Logística & Geoespacial (Open Source)",
        tagline: "Seguimiento en tiempo real de centros de acopio e incidencias de emergencia con Clean Architecture + DDD y MapLibre GL.",
        description: "Plataforma pública de coordinación logística y respuesta humanitaria en Venezuela. Contribuí diseñando e implementando el módulo completo de Emergencias ('incidents') de extremo a extremo: desde la arquitectura de dominio en 11 capas en el backend con Bun, Hono y Drizzle ORM hasta los marcadores geoespaciales interactivos en MapLibre GL y el panel administrativo en React 19.",
        highlights: [
          "Backend (@sos/api) estructurado en 11 capas bajo Clean Architecture y DDD: Entidad de dominio, Errores de dominio, Puerto de repositorio, Casos de uso Create/List/Update y tests TDD con repositorio in-memory.",
          "Máquina de estados segura sin borrado destructivo: las emergencias transicionan de ACTIVE → CONTAINED → CLOSED mediante PUT autenticado para roles ADMIN y MANAGER.",
          "Persistencia transaccional con Drizzle ORM sobre PostgreSQL (`onConflictDoUpdate`) y esquemas compartidos de validación en `@sos/shared`.",
          "Frontend (@sos/web) en React 19 con MapLibre GL (`MapIncidentMarker` con halos pulsantes dinámicos según severidad) y consola de gestión en `/admin/incidents`."
        ]
      },
      en: {
        title: "Portuguesa Unida · Relief Hubs & Live Emergency Map",
        type: "Geospatial Logistics Platform (Open Source)",
        tagline: "Real-time relief center tracking and emergency incident mapping built with Clean Architecture + DDD and MapLibre GL.",
        description: "Public humanitarian logistics and emergency coordination platform for Venezuela. I architected and implemented the end-to-end Emergencies ('incidents') module: from an 11-layer Domain-Driven Design backend on Bun, Hono, and Drizzle ORM to interactive MapLibre GL markers and the React 19 admin console.",
        highlights: [
          "11-layer Clean Architecture & DDD backend (@sos/api): Domain entity, Domain errors, Repository port, Create/List/Update use cases, and TDD unit tests with an in-memory repository.",
          "Non-destructive state machine: emergencies transition cleanly across ACTIVE → CONTAINED → CLOSED via RBAC-gated PUT endpoints (ADMIN/MANAGER).",
          "Relational persistence powered by Drizzle ORM on PostgreSQL (`onConflictDoUpdate`) and shared validation schemas in `@sos/shared`.",
          "React 19 geospatial frontend (@sos/web) featuring pulsing MapLibre GL emergency halos (`MapIncidentMarker`) and TanStack React Query v5 synchronization."
        ]
      }
    },
    {
      id: "tedoin-sales",
      code: "SYS_02",
      featured: true,
      isPrivate: true,
      category: "enterprise",
      year: "2026",
      accent: "#10b981",
      repoUrl: null,
      liveUrl: null,
      tech: ["Laravel 12", "React 19", "Inertia.js", "PostgreSQL 17", "MinIO S3", "TypeScript", "Tailwind 4.0", "Docker"],
      diagram: ["React 19 + shadcn/ui", "Laravel 12 Engine", "MinIO S3 Storage", "PostgreSQL 17"],
      es: {
        title: "Control Ventas Inter Tedoin",
        type: "Sistema Empresarial de Alto Volumen (Privado)",
        tagline: "Arquitectura transaccional de ventas con almacenamiento de objetos S3 y entornos Docker desacoplados.",
        description: "Sistema integral de gestión, auditoría y control de ventas de alto volumen. Combina la velocidad de Laravel 12 y React 19 mediante Inertia.js con PostgreSQL 17 para integridad transaccional y MinIO para almacenamiento distribuido de comprobantes y activos.",
        highlights: [
          "Arquitectura de contenedores Docker separada para desarrollo (Laravel Sail, PHP 8.4, Node 22) y despliegue en producción.",
          "Almacenamiento de objetos auto-alojado con MinIO (API S3 en puerto 9000/9001) para gestión masiva de documentos.",
          "Restauración y migración optimizada de esquemas de alto volumen sobre PostgreSQL 17 (`pg_restore`).",
          "Interfaz reactiva tipada con TypeScript, Tailwind CSS 4.0 y componentes de alta densidad visual."
        ]
      },
      en: {
        title: "Control Ventas Inter Tedoin",
        type: "High-Volume Enterprise Sales System (Private)",
        tagline: "Transactional sales architecture with MinIO S3 object storage and decoupled Docker environments.",
        description: "End-to-end management, auditing, and control platform for high-volume sales operations. Pairs Laravel 12 and React 19 via Inertia.js with PostgreSQL 17 for transactional integrity and MinIO for distributed object storage.",
        highlights: [
          "Sanitized, decoupled Docker topologies for local development (PHP 8.4, Node 22) and production environments.",
          "Self-hosted S3-compatible object storage powered by MinIO for high-throughput document and receipt management.",
          "Optimized bulk database restoration and migration workflows on PostgreSQL 17 (`pg_restore`).",
          "Type-safe reactive operator interface built with TypeScript, Tailwind CSS 4.0, and shadcn/ui."
        ]
      }
    },
    {
      id: "odoo-debug-pro",
      code: "SYS_03",
      featured: true,
      isPrivate: false,
      category: "devops",
      year: "2026",
      accent: "#a855f7",
      repoUrl: "https://github.com/rojdev/odoo-debug",
      liveUrl: null,
      tech: ["Manifest V3", "Chrome Extensions API", "Vanilla JS", "Service Workers", "Odoo v16–v19", "CSS Variables"],
      diagram: ["Browser URL Interceptor", "Hash-Aware Parser", "Multi-Domain Store", "Dynamic Badge HUD"],
      es: {
        title: "Odoo Debug Pro · Manifest V3",
        type: "Extensión de Navegador para Desarrolladores Odoo",
        tagline: "Inyección automática de ?debug=1 y ?debug=assets con soporte multi-dominio y redirección inteligente.",
        description: "Extensión de navegador Open Source (Manifest V3) creada para acelerar el flujo diario de desarrollo en Odoo ERP (v16 a v19). Elimina la edición manual de URLs inyectando parámetros de depuración antes del hash (#) en entornos Local, Staging y Producción.",
        highlights: [
          "Redirección inteligente que posiciona `?debug=1` o `?debug=assets` exactamente antes del fragmento `#` de Odoo.",
          "Activación ergonómica: 1 clic para modo Debug estándar, doble clic para modo Assets Bundles.",
          "Iconografía dinámica en tiempo real (Verde: Debug, Azul: Assets, Rojo: Pausado, Gris: Inactivo).",
          "Gestión multi-dominio con función Auto-Add para registrar nuevos servidores Odoo automáticamente mientras navegas."
        ]
      },
      en: {
        title: "Odoo Debug Pro · Manifest V3",
        type: "Odoo Developer Browser Extension",
        tagline: "Automated ?debug=1 and ?debug=assets injection with multi-domain support and hash-aware routing.",
        description: "Open-source Manifest V3 browser extension built to streamline the daily Odoo ERP (v16–v19) development workflow. Eliminates manual URL editing by intelligently injecting debug parameters before the URL hash (#) across Local, Staging, and Production domains.",
        highlights: [
          "Smart hash-aware redirection that places `?debug=1` or `?debug=assets` cleanly before Odoo's `#` state fragment.",
          "Rapid ergonomic activation: single-click for standard debug mode, double-click for assets bundle debugging.",
          "Dynamic status iconography providing instant visual feedback (Green: Debug, Blue: Assets, Red: Paused, Grey: Inactive).",
          "Multi-domain configuration manager with Auto-Add discovery for newly visited Odoo instances."
        ]
      }
    },
    {
      id: "doxamp",
      code: "SYS_04",
      featured: true,
      isPrivate: false,
      category: "devops",
      year: "2026",
      accent: "#06b6d4",
      repoUrl: "https://github.com/rojdev/Doxamp",
      liveUrl: null,
      tech: ["Docker", "Docker Compose", "PHP", "Apache Rewrite", "MySQL", "phpMyAdmin", "Ubuntu Server"],
      diagram: ["docker compose up -d", "Apache + mod_rewrite", "PHP 512MB Runtime", "MySQL + phpMyAdmin"],
      es: {
        title: "Doxamp · Modern Docker LAMP Stack",
        type: "Infraestructura Local & Open Source Tooling",
        tagline: "El reemplazo moderno, ligero y contenerizado para XAMPP, WAMP y Laragon con cero configuración.",
        description: "Stack Docker LAMP diseñado para levantar entornos PHP/MySQL en segundos sin contaminar el sistema operativo anfitrión. Preconfigurado con límites de 512MB para importaciones masivas de bases de datos, hot-reload por volúmenes y soporte completo de `.htaccess`.",
        highlights: [
          "Zero-Configuration: listo para desarrollo local con un solo comando `docker compose up -d`.",
          "Preconfigurado con `upload_max_filesize`, `memory_limit` y `post_max_size` a 512MB para importar dumps SQL pesados sin errores.",
          "Módulo Apache `a2enmod rewrite` y `AllowOverride All` activados de fábrica para enrutamiento limpio.",
          "Código enlazado por volúmenes en `src/` con actualización instantánea y phpMyAdmin integrado en el puerto 8080."
        ]
      },
      en: {
        title: "Doxamp · Modern Docker LAMP Stack",
        type: "Local Infrastructure & Open Source Tooling",
        tagline: "A modern, lightweight containerized drop-in replacement for XAMPP, WAMP, and Laragon.",
        description: "Zero-configuration Docker LAMP stack engineered to spin up local PHP/MySQL development environments in seconds without polluting the host OS. Pre-tuned with 512MB upload limits for massive SQL imports, volume hot-reloading, and full `.htaccess` support.",
        highlights: [
          "Zero-Configuration workflow: ready out of the box with a single `docker compose up -d` command.",
          "Pre-configured 512MB `upload_max_filesize`, `memory_limit`, and `post_max_size` to effortlessly import large databases.",
          "Apache `a2enmod rewrite` and `AllowOverride All` enabled by default for custom framework routing.",
          "Hot-reloading volume mount (`src/`) paired with an isolated MySQL container and phpMyAdmin on port 8080."
        ]
      }
    },
    {
      id: "sos-venezuela-data",
      code: "SYS_05",
      featured: false,
      isPrivate: false,
      category: "opensource",
      year: "2026",
      accent: "#f43f5e",
      repoUrl: "https://github.com/CalitoTech/sos-venezuela-data",
      liveUrl: "https://web-phi-six-84.vercel.app",
      tech: ["Python", "ETL Scrapers", "PostgreSQL 16", "Docker Compose", "TypeScript", "Deduplication SQL"],
      diagram: ["Multi-Source Web Scrapers", "Python Normalization", "PostgreSQL ON CONFLICT", "Public Search API"],
      es: {
        title: "SOS Venezuela · Pipeline & Scrapers de Datos",
        type: "Ingeniería de Datos & Open Source Humanitario",
        tagline: "Extracción automatizada, normalización y deduplicación centralizada de registros en tiempo real.",
        description: "Plataforma centralizada de búsqueda y consolidación de datos de personas desaparecidas tras el sismo en Venezuela. Contribuí implementando módulos de scraping en Python (`scrap_desaparecidosterremotovenezuela.py`, `scrap_encuentralos_tecnosoft.py`) integrados al pipeline de deduplicación en PostgreSQL.",
        highlights: [
          "Desarrollo de scrapers especializados en Python para consolidar fuentes dispersas en un esquema relacional único.",
          "Normalización de registros y soporte a la estrategia de deduplicación por cédula o clave compuesta `(full_name, date_of_birth)`.",
          "Integración directa con flujo `INSERT ... ON CONFLICT DO UPDATE` en PostgreSQL 16 contenerizado con Docker.",
          "Exposición de datos limpios hacia la API pública y el buscador en vivo desplegado en Vercel."
        ]
      },
      en: {
        title: "SOS Venezuela · Humanitarian Data Pipeline & Scrapers",
        type: "Data Engineering & Humanitarian Open Source",
        tagline: "Automated multi-source web scraping, normalization, and PostgreSQL deduplication pipeline.",
        description: "Centralized search and data aggregation platform following the Venezuela earthquake. I contributed specialized Python extraction scrapers (`scrap_desaparecidosterremotovenezuela.py`, `scrap_encuentralos_tecnosoft.py`) feeding the unified PostgreSQL deduplication schema.",
        highlights: [
          "Built automated Python scrapers harvesting and normalizing fragmented external data sources into a single schema.",
          "Supported strict deduplication constraints via national ID (`cedula`) or composite `(full_name, date_of_birth)` keys.",
          "Idempotent `INSERT ... ON CONFLICT DO UPDATE` ingestion on Dockerized PostgreSQL 16.",
          "Powers a real-time public REST API and searchable web interface deployed on Vercel."
        ]
      }
    },
    {
      id: "api-publicidad",
      code: "SYS_06",
      featured: false,
      isPrivate: true,
      category: "backend",
      year: "2026",
      accent: "#f59e0b",
      repoUrl: null,
      liveUrl: null,
      tech: ["Node.js", "Express", "SMB2 Protocol", "Docker", "GitHub Actions", "Docker Hub CI/CD"],
      diagram: ["HTTP Range Request", "Node.js Express API", "SMB2 Auth Tunnel", "Windows Media Share"],
      es: {
        title: "API Publicidad · Streaming SMB2",
        type: "Microservicio Backend de Red (Privado)",
        tagline: "Puente de alto rendimiento entre clientes web y servidores de archivos Windows mediante protocolo SMB2.",
        description: "Microservicio especializado en Node.js y Express que autentica, explora y transmite activos publicitarios (imágenes y video) directamente desde carpetas compartidas en servidores Windows remotos utilizando el protocolo SMB2, con pipeline CI/CD hacia Docker Hub.",
        highlights: [
          "Integración nativa con el protocolo de red SMB2 para lectura binaria de archivos multimedia sin duplicar almacenamiento.",
          "Pipeline de integración y despliegue continuo (GitHub Actions) que compila y publica imágenes en Docker Hub automáticamente.",
          "Manejo eficiente de buffers y streams para evitar saturación de memoria RAM durante la transmisión de video.",
          "Configuración agnóstica por variables de entorno para múltiples dominios de red Windows."
        ]
      },
      en: {
        title: "API Publicidad · SMB2 Media Streamer",
        type: "Network Backend Microservice (Private)",
        tagline: "High-performance bridge between web clients and remote Windows file shares over SMB2.",
        description: "Specialized Node.js/Express microservice that authenticates, queries, and streams advertising images and videos directly from remote Windows shared drives using the SMB2 protocol, complete with automated Docker Hub CI/CD.",
        highlights: [
          "Native SMB2 network protocol integration for direct binary streaming without duplicating media storage.",
          "Automated GitHub Actions CI/CD workflow building and pushing production images to Docker Hub.",
          "Memory-safe stream buffering for concurrent video and high-resolution image delivery.",
          "Environment-driven configuration supporting multiple remote Windows domains and share credentials."
        ]
      }
    },
    {
      id: "venerate-bcv",
      code: "SYS_07",
      featured: false,
      isPrivate: false,
      category: "web",
      year: "2026",
      accent: "#10b981",
      repoUrl: "https://github.com/rojdev/bcv-usdt-diferencial",
      liveUrl: null,
      tech: ["Vanilla JS (ES6+)", "Chart.js", "REST APIs", "CSS Glassmorphism", "DolarApi", "CriptoYa API"],
      diagram: ["DolarApi + CriptoYa P2P", "Spread Math Engine", "Multi-Currency Calc", "Chart.js Telemetry"],
      es: {
        title: "VeneRate · Monitor Diferencial BCV / USDT",
        type: "Aplicación FinTech de Telemetría Cambiaria",
        tagline: "Análisis en tiempo real de brecha cambiaria (spread) entre tasas oficiales BCV y mercado cripto Binance P2P.",
        description: "Aplicación financiera interactiva que consume en vivo las APIs de DolarApi (USD/EUR BCV) y CriptoYa (USDT Binance P2P) para calcular el diferencial cambiario exacto, visualizar comparativas en Chart.js y simular conversiones multidivisa con poder adquisitivo real en USDT.",
        highlights: [
          "Consumo asíncrono concurrente de múltiples APIs financieras con auto-actualización programada cada 60 segundos.",
          "Motor de cálculo de spreads (brecha porcentual y nominal) entre Dólar BCV, Euro BCV y USDT P2P.",
          "Calculadora multidivisa inteligente (USD, EUR, USDT, VES) con soporte para pegar montos en distintos formatos regionales.",
          "Visualización comparativa adaptativa mediante Chart.js con estética oscura de alta precisión."
        ]
      },
      en: {
        title: "VeneRate · BCV / USDT Spread Monitor",
        type: "FinTech Exchange Telemetry Web App",
        tagline: "Real-time exchange rate spread analysis between official central bank rates and Binance P2P USDT.",
        description: "Interactive financial web application consuming live DolarApi (BCV USD/EUR) and CriptoYa (Binance P2P USDT) feeds to compute exact currency spreads, render Chart.js visualizations, and run multi-currency purchasing power simulations.",
        highlights: [
          "Concurrent asynchronous polling of financial APIs with a live 60-second auto-refresh countdown.",
          "Real-time spread calculation engine measuring percentage and nominal gaps across USD, EUR, and USDT.",
          "Smart multi-currency converter (USD, EUR, USDT, VES) supporting localized number paste formats.",
          "High-contrast Chart.js visual analytics built with pure semantic HTML5, modern CSS, and Vanilla ES6+."
        ]
      }
    },
    {
      id: "pz-b42-wiki",
      code: "SYS_08",
      featured: false,
      isPrivate: false,
      category: "web",
      year: "2026",
      accent: "#eab308",
      repoUrl: "https://github.com/rojdev/pz-b42-wiki",
      liveUrl: null,
      tech: ["Web Components", "Custom Elements", "ES Modules", "Vanilla CSS", "Math Simulation", "Zero-Dependencies"],
      diagram: ["skill_data.json", "xp.js Math Engine", "<xp-table> Component", "<xp-calc> Simulator"],
      es: {
        title: "PZ Build 42 · Wiki & Simulador con Web Components",
        type: "Arquitectura Vanilla Web Platform (0 Dependencias)",
        tagline: "Portal técnico y simulador matemático construido con Web Components nativos (<xp-table>, <xp-calc>).",
        description: "Demostración de desarrollo frontend puro sin frameworks ni empaquetadores. Implementa Custom Elements nativos en Light DOM, un motor matemático para curvas de progresión de 32,775 XP, multiplicadores de libros y cálculo de desgaste físico de herramientas.",
        highlights: [
          "Cero dependencias externas: arquitectura limpia basada en ES Modules nativos y Custom Elements (`<xp-table>` y `<xp-calc>`).",
          "Motor matemático (`js/utils/xp.js`) que modela curvas exponenciales de experiencia, multiplicadores (x3 a x16) y bonos de rasgos.",
          "Simulador reactivo de insumos y desgaste de herramientas para comparar rutas de eficiencia máxima vs. autosuficiencia.",
          "Sistema de diseño CSS modular con tipografía tabular monoespaciada y alto contraste."
        ]
      },
      en: {
        title: "PZ Build 42 · Native Web Components Simulator",
        type: "Zero-Dependency Vanilla Web Architecture",
        tagline: "Technical hub and mathematical XP simulator built with native Web Components (<xp-table>, <xp-calc>).",
        description: "A showcase of pure web platform development without frameworks or bundlers. Implements native Light DOM Custom Elements, a mathematical engine modeling 32,775 XP progression curves, skill book multipliers, and tool durability degradation.",
        highlights: [
          "Zero external dependencies: clean modular architecture using native ES Modules and Custom Elements (`<xp-table>`, `<xp-calc>`).",
          "Mathematical progression engine (`js/utils/xp.js`) computing differential XP curves, book multipliers (x3–x16), and trait buffs.",
          "Reactive material and tool-wear calculator comparing powerleveling vs. self-sufficient resource routes.",
          "Modular CSS architecture featuring tabular monospace typography and sticky data tables."
        ]
      }
    },
    {
      id: "encuestas-ciudadanas",
      code: "SYS_09",
      featured: false,
      isPrivate: true,
      category: "enterprise",
      year: "2025",
      accent: "#3b82f6",
      repoUrl: null,
      liveUrl: null,
      tech: ["Vue 3", "Quasar Framework", "Pinia", "Node.js", "Express", "MySQL", "JWT", "Docker"],
      diagram: ["Vue 3 + Quasar UI", "Pinia State Store", "Express JWT API", "MySQL + Docker"],
      es: {
        title: "Sistema de Encuestas & Atención Ciudadana (SACWAN)",
        type: "Ecosistema Full Stack Vue 3 + Express API (Privado)",
        tagline: "Plataforma municipal para recolección de datos en campo, analítica social y gestión de solicitudes.",
        description: "Ecosistema compuesto por una aplicación frontend en Vue 3 con Quasar Framework y Pinia conectada a una API REST contenerizada en Node.js/Express con almacenamiento en MySQL, gráficas estadísticas y seguridad JWT.",
        highlights: [
          "Frontend reactivo multiplataforma construido con Vue 3, Quasar Framework, gestión de estado Pinia y Tailwind CSS.",
          "Backend API RESTful en Node.js y Express con autenticación mediante JSON Web Tokens (JWT) y controladores modulares.",
          "Gestión de inventario de ayudas sociales, políticas públicas y carga de evidencia fotográfica asociada a reportes.",
          "Despliegue contenerizado mediante Docker y Docker Compose sobre Ubuntu Server."
        ]
      },
      en: {
        title: "Citizen Survey & Civic Support Platform (SACWAN)",
        type: "Vue 3 + Express Full Stack Ecosystem (Private)",
        tagline: "Municipal platform for field data collection, social analytics, and citizen request management.",
        description: "Full-stack civic ecosystem pairing a Vue 3, Quasar Framework, and Pinia frontend with a containerized Node.js/Express REST API backed by MySQL, statistical charts, and JWT authentication.",
        highlights: [
          "Responsive cross-device frontend built with Vue 3, Quasar Framework, Pinia state management, and Tailwind CSS.",
          "Modular Node.js/Express REST API secured with JSON Web Token (JWT) middleware and role validation.",
          "Social aid inventory tracking, public policy metrics, and photographic evidence uploads.",
          "Containerized with Docker and Docker Compose on Ubuntu Server."
        ]
      }
    },
    {
      id: "sia-indicadores-bot",
      code: "SYS_10",
      featured: false,
      isPrivate: true,
      category: "backend",
      year: "2025",
      accent: "#ec4899",
      repoUrl: null,
      liveUrl: null,
      tech: ["PHP Laravel 8", "Python Asyncio", "Telegram Bot API", "Aiohttp", "MySQL", "DomPDF", "AdminLTE"],
      diagram: ["Telegram Async Bot", "Local REST APIs", "Laravel 8 Queue Workers", "DomPDF + KPI Charts"],
      es: {
        title: "SIA Indicadores & Bot Asistente de Telegram",
        type: "Dashboard Ejecutivo + Automatización en Python (Privado)",
        tagline: "Seguimiento de indicadores de gestión municipal y asistente ciudadano automatizado en Telegram.",
        description: "Suite de gobierno digital integrada por 'SIA Indicadores' (panel administrativo en Laravel 8 con colas asíncronas, gráficas y reportes DomPDF) y 'Python Páez Bot' (asistente virtual en Telegram con `aiohttp` y `asyncio` para consultas ciudadanas en tiempo real).",
        highlights: [
          "Panel ejecutivo en Laravel 8 con procesamiento de colas en segundo plano (`queue:work`), tablas dinámicas y exportación PDF.",
          "Bot de Telegram en Python asíncrono (`python-telegram-bot` + `aiohttp`) que consulta APIs REST locales sin bloquear el event loop.",
          "Consulta automatizada de estatus de solicitudes, programas de políticas sociales e información de comunas.",
          "Arquitectura híbrida PHP + Python interoperando sobre bases de datos MySQL y servicios HTTP internos."
        ]
      },
      en: {
        title: "SIA Indicadores & Python Telegram Assistant",
        type: "Executive KPI Dashboard + Python Automation (Private)",
        tagline: "Municipal KPI tracking dashboard paired with an asynchronous citizen assistant bot on Telegram.",
        description: "Digital governance suite combining 'SIA Indicadores' (a Laravel 8 executive dashboard with background queue workers, charts, and DomPDF reporting) and 'Python Páez Bot' (an async Telegram assistant using `aiohttp` and `asyncio` for real-time citizen queries).",
        highlights: [
          "Laravel 8 administrative portal featuring background database queue workers (`queue:work`), dynamic charts, and PDF generation.",
          "Non-blocking Python Telegram bot (`python-telegram-bot` + `aiohttp`) querying municipal REST endpoints asynchronously.",
          "Automated self-service lookups for citizen request statuses, social policy programs, and commune directories.",
          "Hybrid PHP + Python architecture interoperating cleanly over shared MySQL schemas and internal REST services."
        ]
      }
    },
    {
      id: "calculadora-cuotas",
      code: "SYS_11",
      featured: false,
      isPrivate: true,
      category: "web",
      year: "2026",
      accent: "#6366f1",
      repoUrl: null,
      liveUrl: "https://calculadora-cuotas-six.vercel.app",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Risk Analysis Engine", "Financial Math"],
      diagram: ["Credit Input Params", "Financing Calculator", "Risk Analyzer Engine", "Amortization Schedule"],
      es: {
        title: "Simulador de Cuotas & Analizador de Riesgo",
        type: "Herramienta FinTech en Next.js & TypeScript (Privado)",
        tagline: "Cálculo de tablas de amortización, evaluación automática de riesgo crediticio y asesoría financiera.",
        description: "Aplicación web financiera construida con Next.js y TypeScript que modela planes de financiamiento, genera cronogramas detallados de cuotas (`InstallmentTable`), evalúa indicadores de riesgo (`riskAnalyzer.ts`) y emite bloques de recomendación financiera.",
        highlights: [
          "Motor modular de cálculo financiero (`financingCalculator.ts`) separado de la capa de presentación.",
          "Algoritmo de evaluación de riesgo (`riskAnalyzer.ts`) con clasificación dinámica mediante insignias de alerta (`RiskBadge`).",
          "Tabla de cuotas interactiva con desglose de capital, intereses y saldos insolutos por período.",
          "Desplegado en producción sobre Vercel con renderizado rápido y diseño adaptable."
        ]
      },
      en: {
        title: "Installment Simulator & Credit Risk Analyzer",
        type: "Next.js & TypeScript FinTech Application (Private)",
        tagline: "Amortization schedule generator, automated credit risk scoring, and financial advisory engine.",
        description: "Financial web application built with Next.js and TypeScript that models financing plans, generates detailed installment schedules (`InstallmentTable`), evaluates borrower risk metrics (`riskAnalyzer.ts`), and outputs actionable financial advice.",
        highlights: [
          "Decoupled financial computation engine (`financingCalculator.ts`) with strict TypeScript interfaces.",
          "Automated credit risk scoring algorithm (`riskAnalyzer.ts`) driving dynamic visual risk badges (`RiskBadge`).",
          "Interactive installment amortization table breaking down principal, interest, and remaining balance per period.",
          "Deployed live on Vercel with responsive modern UI components."
        ]
      }
    }
  ]
};
