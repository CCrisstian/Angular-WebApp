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
<p>La arquitectura del proyecto está orientada a <b>'componentes'</b> y sigue las buenas prácticas de <b>Angular</b>, separando la lógica de presentación, negocio y pruebas para facilitar el mantenimiento, la escalabilidad y el trabajo colaborativo.</p>
<p>En <b>Angular</b>, cada <b>'componente'</b> se compone de varios archivos que cumplen responsabilidades específicas. Esta separación promueve el principio de <b>'Single Responsibility'</b> (<b>una responsabilidad por archivo</b>):</p>

- `.ts`: Contiene la ***lógica del componente*** (clase `TypeScript`). Define propiedades, métodos y gestiona la interacción con la vista y otros componentes.
- `html`: Define la ***estructura visual del componente*** mediante una plantilla **HTML**. Es la interfaz que ve el usuario y que se enlaza con el `.ts` a través del **data binding**.
- `.css`: Contiene los ***estilos CSS específicos para el componente***. **Angular** aplica estos estilos de forma aislada (***encapsulación***), evitando conflictos con otros estilos globales.
- `.spec.ts`: Archivo de ***pruebas unitarias***. Permite testear el comportamiento del componente de forma automática usando herramientas como **Jasmine** y **Karma**, asegurando que siga funcionando correctamente al hacer cambios futuros.

```javascript
src/
└── app/
    ├── app.component.ts / app.component.html         ← Componente raíz ("Padre")
    │    └── Orquesta la aplicación: 
    │        mantiene el estado global de productos y coordina acciones.
    │        Contiene y comunica con los componentes hijos.
    │
    ├── components/
    │   ├── form.component.ts / form.component.html   ← Componente "Hijo" (Formulario)
    │   │    └── Permite crear o actualizar productos.
    │   │        Recibe un producto como @Input() y emite uno nuevo con @Output().
    │   │
    │   ├── products.component.ts / products.component.html ← Componente "Hijo" (Tabla)
    │        └── Muestra los productos en una tabla.
    │            Emite eventos para editar o eliminar un producto.
    │
    ├── services/
    │   └── product.service.ts                        ← Servicio
    │        └── Encapsula la lógica de comunicación con el backend:
    │            operaciones HTTP (GET, POST, PUT, DELETE).
    │
    ├── models/
    │   └── product.ts                                 ← Modelo de datos
    │        └── Define la estructura de un producto: id, name, description, price.
```

<h2>🧩 <ins>Descripción funcional de cada componente</ins></h2>

| Componente             | Descripción breve                                                                 |
|------------------------|-----------------------------------------------------------------------------------|
| **AppComponent**       | Componente principal del proyecto. Coordina el flujo de datos y renderiza hijos.  |
| **FormComponent**      | Componente 'hijo' encargado del formulario para crear o editar productos.         |
| **ProductsComponent**  | Componente 'hijo' que muestra los productos en una tabla con opciones de acción.  |
| **ProductService**     | Servicio que centraliza la lógica HTTP para interactuar con la API backend.       |
| **Product (Model)**    | Define la entidad de producto utilizada en el formulario y la tabla.              |


<h1 align="center"><img src="https://sweetalert2.github.io/images/SweetAlert2.png" alt="SweetAlert2 Logo" width="240"/></h1>
<p><b>SweetAlert2</b> es una librería moderna de <b>JavaScript</b> que permite mostrar alertas personalizadas y visualmente atractivas en el navegador. Reemplaza las alertas estándar de <b>JavaScript</b> (alert, confirm, prompt) con cuadros de diálogo animados, configurables y con un diseño más profesional.</p>

<h2><ins>¿Para qué sirve?</ins></h2>

- Mostrar **mensajes de éxito, error o advertencia**
- **Confirmar acciones** del usuario (como eliminar un registro)
- **Recoger datos de entrada** a través de **formularios** embebidos
- Mejorar la experiencia del usuario con alertas elegantes y responsivas

<h2><ins>¿Para qué sirve Swal.fire?</ins></h2>

El método **Swal.fire** es la forma principal de mostrar una alerta o modal utilizando **SweetAlert2**. Se utiliza dentro de los componentes **TypeScript** (`.ts`) de tu aplicación para mostrar mensajes:

- **Éxito**: Por ejemplo, al guardar datos o completar una acción correctamente.
- **Error**: Para mostrar alertas de error cuando algo sale mal.
- **Advertencia**: Para confirmar una acción crítica, como eliminar un elemento.
- **Confirmaciones**: Para permitir que el usuario confirme o cancele una acción.
