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

<img src="https://github.com/user-attachments/assets/c6757b96-03bb-4c88-8ae9-750992e72fa7" style="width:80%;">

<h3>Activando el Backend</h3>

Proyecto: [Backend API RESTful con Java + Spring Boot](https://github.com/CCrisstian/Java_SpringBoot_API-RESTful)
![image](https://github.com/user-attachments/assets/2927209a-3719-43d1-8a08-30cee1f7f175)

<h3>Frontend con conexión al Backend</h3>

<img src="https://github.com/user-attachments/assets/bd9e193f-d07f-443d-aa07-23c87e1153f6" style="width:80%;">
<img src="https://github.com/user-attachments/assets/156e8c18-6fb5-404c-86cc-3e23d8b69c73" style="width:80%;">
<img src="https://github.com/user-attachments/assets/e77ba9a9-539b-4b5a-a3e8-775a11a18706" style="width:80%;">
<img src="https://github.com/user-attachments/assets/7ad7801e-382b-443f-a4a8-d3fcfd3fe57e" style="width:80%;">
<img src="https://github.com/user-attachments/assets/31595601-28b6-423a-bbd8-322859a598d6" style="width:80%;">
<img src="https://github.com/user-attachments/assets/1004480f-80ef-412b-9458-e9108ea17af2" style="width:80%;">
<img src="https://github.com/user-attachments/assets/eb1be815-916f-4949-8b15-91d4f916233f" style="width:80%;">
<img src="https://github.com/user-attachments/assets/3b6569be-a7e0-489f-a961-9c9ab8b821bf" style="width:80%;">
<img src="https://github.com/user-attachments/assets/97b7b415-981f-447f-9ac5-254a8f385b63" style="width:80%;">

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
    │    └── Orquesta la aplicación: mantiene el estado global de productos y coordina acciones.
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
        └── product.ts                                 ← Modelo de datos
             └── Define la estructura de un producto: id, name, description, price.
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

<h2>app.component.ts / app.component.html (Componente "raíz" / "padre")</h2>

- `app.component.ts` - **Componente "raíz" / "padre"**
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

- `app.component.html` - **Plantilla del componente "raíz" / "padre"**
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

- `form.component.ts` - **Componente de formulario**
  - **Función**: Gestiona el formulario para **crear** o **editar** un **producto**, enviando los datos al **componente 'padre'** (`AppComponent`) cuando el usuario envía el formulario.
  - **Responsabilidades principales**:
    - **Recibir un producto para editar** (`@Input()`):
      - `product: Product` **almacena** el **producto actual**, ya sea uno **nuevo** o uno que se desea **editar**.
    - **Emitir un producto al 'padre'** (`@Output()`):
      - `addProductEvent`: evento que **envía** el **producto** completado o **editado** al `AppComponent`.
    - **Enviar el formulario** (`onSubmit`):
      - **Si el formulario es válido**:
        - **Emite** el **producto** mediante `addProductEvent.emit(this.product)`.
        - **Limpia** el objeto `product`.
        - **Resetea** el **formulario** (`NgForm`) para dejarlo listo para una nueva entrada.
    - **Limpiar el formulario** (`clean`):
      - **Resetea** el objeto `product` creando una nueva instancia vacía (`new Product()`).

- `form.component.html` - **Plantilla del formulario de productos**
  - **Función**: Define el **formulario** para **Crear** o **Actualizar** **productos**, controlando la **validación de los datos** y **emitiendo el producto** al enviarlo.
  - **Responsabilidades principales**:
    - **Título dinámico**:
      - Muestra `"Actualizar"` o `"Crear"` dependiendo de si el producto tiene un id mayor a 0 (`product.id > 0`).
    - **Formulario** (`<form>`):
      - Se vincula al método `onSubmit(productForm)` para **enviar los datos**.
      - Utiliza **template-driven forms** (`#productForm="ngForm"`) para **manejar el estado** y **validación del formulario**.
    - **Campos del formulario**:
      - **Nombre** (`name`):
        - Campo de **texto obligatorio** (`required`) y con **mínimo de 4 caracteres** (`minlength="4"`).
        - Muestra **mensajes de error** si no cumple las validaciones.
      - **Descripción** (`description`):
        - Campo de **texto obligatorio** (`required`).
        - Muestra mensaje si falta completar la descripción.
      - **Precio** (`price`):
        - Campo **numérico obligatorio** (`required`) y debe ser **mayor a 10** (`min="10"`).
        - Muestra errores si no se cumple alguna de estas reglas.
    - **Botón de envío** (`button`):
      - El botón cambia su texto a `"Actualizar"` o `"Crear"`, igual que el título.
      - El botón se desactiva (`[disabled]`) si el formulario no es válido (`productForm.form.invalid`).
    - **Validaciones en pantalla**:
      - Usando directivas de **Angular** (`@if`) muestra **mensajes de error** en tiempo real cuando el usuario interactúa con cada campo.

<h2>products.component.ts / products.component.html</h2>

- `products.component.ts` - **Tabla de productos**
  - **Función**: Controla el **listado de productos**, permitiendo seleccionar uno para **actualizarlo** o **eliminar** uno.
  - **Responsabilidades principales**:
    - **Título interno**:
      - Define un `title` estático: `'Listado de Productos'`.
    - **Entrada de datos** (`@Input`):
      - Recibe el listado de productos (`products: Product[]`) desde el **componente 'padre'** (`AppComponent`).
    - **Salida de eventos** (`@Output`):
      - `updateProductEvent`: **Emite** un **producto** cuando el usuario desea **Editarlo**.
      - `removeProductEvent`: **Emite** el **ID** de un **producto** cuando el usuario desea **Eliminarlo**.
    - **Métodos**:
      - `onUpdateProduct(product: Product)`: **Llama** al **emit** para mandar el **producto seleccionado** para **Actualizarlo**.
      - `onRemoveProduct(id: number)`: **Llama** al **emit** para mandar el **ID** del **producto** a **Eliminar**.

- `products.component.html` - **Visualización lógica del listado**
  - **Función**: presenta el listado de productos recibido por `@Input()`, y permite al usuario **Editar** o **Eliminar** cada producto.
  - **Título del componente**
    - Muestra el título `"Listado de Productos"` definido en el **TS**.
  - **Condicional** `@if(products.length > 0)`
    - **Si hay productos**:
      - Muestra una tabla.
      - Recorre el array `products` con `@for`.
      - Cada fila representa un producto con:
        - **ID**
        - **Nombre**
        - **Descripción**
        - **Precio**
        - **Botones** para:
          - **Actualizar** → **emite** el **producto** completo (`onUpdateProduct(product)`).
          - **Eliminar** → **emite** solo el **ID** (`onRemoveProduct(product.id)`).
  - Condicional `@else`
    - Si no hay productos, muestra un mensaje de advertencia.
  - 🧠 **Lógica clave**:
    - La **tabla** solo se muestra si hay productos.
    - Cada acción (**Actualizar** / **Eliminar**) dispara un evento al **componente 'padre'**, que maneja la lógica con `ProductService`.

<h2>product.service.ts</h2>

- **Función**: Este servicio actúa como **intermediario** entre los **componentes de Angular** y el **Backend**. Gestiona todas las operaciones de red relacionadas con los **productos** (**C.R.U.D.**).
- **Responsabilidades principales**:
  - **Recuperar** todos los **productos** del **Backend**.
  - **Crear** un nuevo **producto**.
  - **Actualizar** un **producto** existente.
  - **Eliminar** un **producto** por su **ID**.
  - Utilizar `HttpClient` para **enviar** y **recibir** datos del **servidor**.
  - Trabajar con `Observable` para manejar **respuestas asincrónicas**.
- **Métodos**:
  - `findAll(): Observable<Product[]>`
    - **Responsabilidad**: Obtener la lista completa de productos desde el **Backend**.
    - **Tipo de petición HTTP**: `GET`
    - **Ruta**: `http://localhost:8080`
    - **Devuelve**: Un **observable** con un array de objetos `Product`.
  - `create(product: Product): Observable<Product>`
    - **Responsabilidad**: **Crear** un nuevo **producto** en el **servidor**.
    - **Tipo de petición HTTP**: `POST`
    - **Ruta**: `http://localhost:8080`
    - **Parámetro**: Un objeto `Product`.
    - **Devuelve**: Un **observable** con el **producto creado**.
  - `update(product: Product): Observable<Product>`
    - **Responsabilidad**: **Actualizar** un **producto** existente en el **servidor**.
    - **Tipo de petición HTTP**: `PUT`
    - **Ruta**: `http://localhost:8080/{id}`
    - **Parámetro**: Un objeto `Product` con su **ID** correspondiente.
    - **Devuelve**: Un **observable** con el **producto actualizado**.
  - `remove(id: number): Observable<Product>`
    - **Responsabilidad**: **Eliminar** un **producto** según su **ID**.
    - **Tipo de petición HTTP**: `DELETE`
    - **Ruta**: `http://localhost:8080/{id}`
    - **Parámetro**: El **ID** del **producto**.
    - **Devuelve**: Un **observable** con el **producto eliminado**.
  
<h2>product.ts</h2>

- **Función**: Definir la estructura del **modelo** `Product` que representa un **producto** dentro de la aplicación. Este modelo es usado para tipar objetos en **formularios**, **servicios** y **vistas**.
- **Responsabilidades principales**:
  - Representar los datos de un producto.
  - Asegurar consistencia tipada en todo el sistema (**componentes**, **servicios**, **formularios**).
  - Facilitar el **enlace de datos** (**data binding**) entre la **vista** y el **modelo**.
- **Propiedades**:
  - `id!: number;`
    - **Descripción**: Identificador único del producto.
    - **Nota**: Se usa `!` (**non-null assertion operator**) para indicar que la propiedad será inicializada luego. **TypeScript**, al ser fuertemente tipado, espera que todas las **propiedades obligatorias** de una **clase** sean **inicializadas en el constructor** o en el **momento de su declaración**. Si no lo están, mostrará un Error. Para evitar este error sin tener que inicializar inmediatamente cada propiedad (por ejemplo, cuando los valores vendrán de un **formulario** o de una **API**), se utiliza el operador `!`.
  - `name!: string;`
    - **Descripción**: **Nombre** del **producto**.
  - `description!: string;`
    - **Descripción**: Breve **descripción** del **producto**.
  - `price!: number;`
    - **Descripción**: **Precio** del **producto**.

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
