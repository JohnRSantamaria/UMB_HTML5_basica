# Introducción a Python – Página HTML

## Índice

1. [Propósito de la página](#1-propósito-de-la-página)
2. [Semántica aplicada](#2-semántica-aplicada)
    - [Jerarquía de encabezados](#jerarquía-de-encabezados)
3. [Accesibilidad aplicada](#3-accesibilidad-aplicada)
4. [Estructura del proyecto](#4-estructura-del-proyecto)
5. [Validación del HTML](#5-validación-del-html)
6. [Cómo visualizar la página](#6-cómo-visualizar-la-página)
    - [A. Localmente](#a-localmente)
    - [B. GitHub Pages (opcional)](#b-github-pages-opcional)
7. [Autor](#7-autor)

# 1. Propósito de la página

Este proyecto contiene una página web introductoria sobre el lenguaje de programación Python.
La página explica de forma breve y clara:

-   Qué es Python.
-   Para qué se usa.
-   Ejemplos simples del lenguaje.
-   Un plan de estudio recomendado.

Está dirigida a:

-   Personas sin experiencia previa en programación.
-   Estudiantes que requieren un ejemplo de HTML semántico accesible.
-   Cualquier persona interesada en entender Python de forma rápida.

# 2. Semántica aplicada

La estructura del documento utiliza HTML5 correctamente para mantener claridad, orden y accesibilidad.

Componentes principales:

-   `<header>` para el encabezado general de la página.
-   `<nav>` con `aria-label="Navegación principal"` para describir la función de la barra de navegación.
-   `<main>` para el contenido principal.
-   `<section>` para agrupar temas como “¿Qué es Python?” o “Recursos recomendados”.
-   `<article>` para contenido explicativo independiente.
-   `<aside>` para contenido complementario.
-   `<footer>` para enlaces internos y el cierre de la página.

## Jerarquía de encabezados

-   **h1** – Título principal.
-   **h2** – Secciones principales.
-   **h3** – Subtemas internos.

# 3. Accesibilidad aplicada

-   Enlace “Saltar al contenido principal”.
-   Navegación por teclado en toda la página.
-   Formularios accesibles con etiquetas `<label>`.
-   Uso de `aria-describedby` para textos de ayuda.
-   Imágenes con atributos `alt` adecuados.
-   Contraste elevado entre fondo y texto.

# 4. Estructura del proyecto

```
.
├─ index.html
├─ README.md
└─ assets/
   ├─ css/
   │  └─ styles.css
   ├─ js/
   │  └─ main.js
   └─ img/
      ├─ python-logo.png
      └─ python-logo.svg
```

# 5. Validación del HTML

Usar el validador oficial del W3C:

https://validator.w3.org/

Pasos:

1. Abrir el validador.
2. Seleccionar “Validate by File Upload”.
3. Subir `index.html`.
4. Revisar advertencias y corregir si es necesario.

# 6. Cómo visualizar la página

## A. Localmente

1. Descargar o clonar este repositorio.
2. Abrir `index.html` en un navegador.

## B. GitHub Pages (opcional)

1. Subir el repositorio a GitHub.
2. En **Settings → Pages**, seleccionar rama `main`.
3. Elegir carpeta raíz `/`.
4. Guardar.

La página quedará disponible en:

```
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
```

# 7. Autor

-   **Nombre:** John Fredy Rincon Santamaria
-   **Proyecto:** Página HTML introductoria a Python
-   **Fecha:** 2025 - noviembre - 16
