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
<h3></h3>
<p>En la carpeta del proyecto, desde la terminal ejecutar</p>

```bash
npm start
```

<h3>⚠️ Aviso</h3>
<p>Al descargar el proyecto, puede que no se ejecute correctamente debido a:</p>

- Dependencias no instaladas.
- Falta de instalación de **Angular CLI**

**Solución**: en la carpeta del proyecto, ejecutar:
- Instalar dependencias:
  ```bash
  npm install
  ```
- Instalar **Angular CLI** (si no está instalado globalmente):
  ```bash
  npm install -g @angular/cli
  ```

<h3>Frontend sin conexión al Backend</h3>

![image](https://github.com/user-attachments/assets/c6757b96-03bb-4c88-8ae9-750992e72fa7)

<h3>Activando el Backend</h3>

Proyecto: [Backend API RESTful con Java + Spring Boot](https://github.com/CCrisstian/Java_SpringBoot_API-RESTful)
![image](https://github.com/user-attachments/assets/2927209a-3719-43d1-8a08-30cee1f7f175)

<h3>Frontend con conexión al Backend</h3>

![Captura de pantalla 2025-04-28 162809](https://github.com/user-attachments/assets/bd9e193f-d07f-443d-aa07-23c87e1153f6)
![Captura de pantalla 2025-04-28 162916](https://github.com/user-attachments/assets/156e8c18-6fb5-404c-86cc-3e23d8b69c73)
![Captura de pantalla 2025-04-28 162927](https://github.com/user-attachments/assets/e77ba9a9-539b-4b5a-a3e8-775a11a18706)
![Captura de pantalla 2025-04-28 162941](https://github.com/user-attachments/assets/7ad7801e-382b-443f-a4a8-d3fcfd3fe57e)
![Captura de pantalla 2025-04-28 163009](https://github.com/user-attachments/assets/31595601-28b6-423a-bbd8-322859a598d6)
![Captura de pantalla 2025-04-28 163018](https://github.com/user-attachments/assets/1004480f-80ef-412b-9458-e9108ea17af2)
![Captura de pantalla 2025-04-28 163032](https://github.com/user-attachments/assets/eb1be815-916f-4949-8b15-91d4f916233f)
![Captura de pantalla 2025-04-28 163043](https://github.com/user-attachments/assets/3b6569be-a7e0-489f-a961-9c9ab8b821bf)
![Captura de pantalla 2025-04-28 163052](https://github.com/user-attachments/assets/97b7b415-981f-447f-9ac5-254a8f385b63)
![Captura de pantalla 2025-04-28 163143](https://github.com/user-attachments/assets/0bcdbc82-65d8-4135-96ce-cb04e2e6e545)

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

<h1 align="center">Descripción de cada Componente dentro del Proyecto</h1>

<h2>app.component.ts / app.component.html (Componente raíz/padre)</h2>

- `app.component.ts`
  - **Función**: Coordina el flujo de datos de la aplicación, manteniendo y actualizando el estado global de los productos. Gestiona la **creación**, **actualización**, **selección** y **eliminación** de productos, comunicándose con el `ProductService` para realizar **operaciones HTTP**.
  - **Responsabilidades principales**:
    - **Mantener el estado de los productos**:
      - `products: Product[]` **guarda** todos los productos cargados desde el **Backend**.
      - `productSelected: Product` **almacena** temporalmente un producto que se está **editando**.
    - **Cargar productos al iniciar** (`ngOnInit`):
      - Al inicializarse, llama al servicio (`findAll()`) para obtener y almacenar los productos.
    - **Actualizar producto seleccionado** (`onUpdateProductEvent`):
      - Recibe un producto de un componente hijo (por ejemplo, la **tabla**) y lo guarda en `productSelected` para **edición**.
    - **Agregar o actualizar un producto** (`addProduct`):
      - Si el producto tiene `id > 0`, **actualiza** un producto existente mediante el servicio (`update()`).
      - Si el producto **no tiene ID** (**nuevo producto**), lo **crea** mediante el servicio (`create()`).
      - En ambos casos, actualiza el array products local para reflejar el cambio.
    - **Eliminar un producto** (`onRemoveProductEvent`):
      - Recibe un **ID**, llama al servicio (`remove()`) para **eliminar** el producto, y actualiza el array local eliminándolo.

- `app.component.html`
  - **Función**: Define la estructura principal de la vista, organizando y conectando los **componentes 'hijos'** (`product-form` y `table-product`). Gestiona la comunicación entre ellos y el `app.component.ts` a través de **inputs** y **outputs**.
  - Responsabilidades principales:
  - Mostrar el título:
    - Imprime la variable `title` que contiene el nombre del proyecto.
  - Incluir el **componente de formulario** (`product-form`):
    - **Input** (`[product]`): **recibe** el **producto** seleccionado para editar.
    - **Output** (`(addProductEvent)`): **escucha** el **evento de creación o actualización** de **producto** y **ejecuta** `addProduct($event)`.
  - Incluir el **componente de tabla** (`table-product`):
    - **Input** (`[products]`): **recibe** la **lista de productos** para mostrarlos en una **tabla**.
    - **Outputs**:
      - `(updateProductEvent)`: **escucha** cuando se desea **editar un producto** y **ejecuta** `onUpdateProductEvent($event)`.
      - `(removeProductEvent)`: **escucha** cuando se desea **eliminar un producto** y **ejecuta** `onRemoveProductEvent($event)`.

<h2>form.component.ts / form.component.html</h2>
<h2>products.component.ts / products.component.html</h2>
<h2>product.service.ts</h2>
<h2>product.ts</h2>

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
