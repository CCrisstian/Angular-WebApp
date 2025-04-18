<h1 align="center">Frontend con Angular <img src="https://skillicons.dev/icons?i=angular&perline=14"/> + Node.js <img src="https://skillicons.dev/icons?i=nodejs&perline=14"/></h1>
<h2><ins>Introducción al Proyecto</ins></h2>
<p>Este proyecto es una aplicación web completa que combina un <b>Frontend</b> desarrollado con <b>Angular + Node.js</b>  y un <b>Backend</b> desarrollado con <b>Java + Spring Boot</b>. Su objetivo es proporcionar una plataforma eficiente y escalable para la gestión de productos, permitiendo realizar operaciones <b>CRUD (Crear, Leer, Actualizar y Eliminar)</b></p>

<h2><ins>Características Principales</ins></h2>

- **Frontend**: Desarrollado con **Angular**, este **Frontend** ofrece una experiencia de usuario robusta y estructurada, ideal para aplicaciones de mediana y gran escala. Se utiliza **Node.js** como entorno de ejecución para gestionar dependencias, compilar el proyecto y facilitar el desarrollo mediante herramientas modernas como **Angular CLI**. La combinación de **Angular** y **Node.js** permite un flujo de trabajo eficiente, escalabilidad y una integración fluida con el **Backend** a través de **servicios HTTP**.
- **Backend**: Construido con **Java** y **Spring Boot**, expone una **API RESTful** que maneja la lógica de negocio y se comunica con una **Base de Datos SQL**. La arquitectura está diseñada siguiendo buenas prácticas como separación de responsabilidades (controladores, servicios y repositorios) e inyección de dependencias, lo que asegura un código mantenible, escalable y fácil de probar.

<h2><ins>Descripción de cada herramienta utilizada en este proyecto</ins></h2>

<img src="https://skillicons.dev/icons?i=angular&perline=14" /> **Angular**: Framework de desarrollo **Frontend** basado en **TypeScript**, ideal para construir aplicaciones web dinámicas, modernas y escalables mediante componentes reutilizables y una arquitectura bien estructurada.

<img src="https://skillicons.dev/icons?i=angular" title="Angular CLI" width="40"/> **Angular CLI** (v19.0.6): Herramienta de línea de comandos oficial para **Angular** que facilita la creación, configuración y mantenimiento de proyectos. Permite generar componentes, servicios, módulos y realizar compilaciones optimizadas de manera rápida y sencilla.

<img src="https://skillicons.dev/icons?i=nodejs&perline=14" /> **Node.js** (v22.12.0): Entorno de ejecución de **JavaScript** del lado del **servidor** que permite crear aplicaciones escalables y eficientes. Es utilizado aquí para gestionar el entorno del **Frontend** y ejecutar scripts relacionados con **Angular**.

<img src="https://skillicons.dev/icons?i=npm&perline=14" /> **npm** (v10.9.0) [**Node Package Manager**]: Gestor de paquetes para **Node.js** que permite instalar y administrar dependencias necesarias para el desarrollo del proyecto. Se encarga de manejar bibliotecas, herramientas y scripts asociados al entorno de **Angular**.

<h2><ins>Imagenes del Proyecto</ins></h2>

<h1 align="center">Jerarquía de Componentes dentro del Proyecto</h1>
<p>Este proyecto <b>Frontend</b> en <b>React</b> sigue una estructura clara basada en componentes y servicios, separando la lógica de negocio de la interfaz visual.</p>

```javascript
src/
└── app/
    ├── app.component.ts            ← Componente raíz del proyecto
    ├── app.component.html          ← Plantilla del componente raíz
    │    └── Organiza la interfaz principal, integrando los componentes hijos
    │    └── Maneja la lógica para agregar, actualizar y eliminar productos
    │
    ├── components/
    │   ├── form.component.ts       ← Lógica del formulario (crear/editar)
    │   ├── form.component.html     ← Plantilla del formulario
    │   │    └── Usa Angular Forms con validaciones reactivas y dinámicas
    │   │    └── Emite `addProductEvent` al enviar el formulario
    │   │
    │   ├── products.component.ts   ← Lógica del componente de tabla/listado
    │   ├── products.component.html ← Plantilla de la tabla
    │        └── Muestra productos en formato tabular
    │        └── Emite eventos `updateProductEvent` y `removeProductEvent`
    │
    ├── services/
    │   └── product.service.ts      ← Servicio que maneja la lógica HTTP:
    │         • findAll(), create(), update(), remove()
    │         • Usa HttpClient para conectar con la API RESTful en Spring Boot
    │
    ├── models/
    │   └── product.ts              ← Modelo de producto:
    │         • Define id, name, description, price
```
