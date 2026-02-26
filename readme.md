# Ejercicio N°3 Servidor Web Node con APi

 # Descripción
 Este proyecto consiste en el desarrollo de un servidor web en **Node.js con Express** que expone una API REST para la gestión de productos, permitiendo obtener y agregar registros    mediante los métodos GET y POST, con respuestas en formato JSON y lectura no bloqueante desde un archivo local. Además, incluye un cliente web que consume la API, muestra los productos en el navegador.


 # Tecnologias
 - Node.js.
 - Express.
 - JavaScript (Frontend)
 - HTML5.
 - CSS3.
 - File System.
 
 # Estructura del Proyecto
 ![Estructura del proyecto](https://github.com/AlvarezF7/M6-3-servidor-web-node-api/blob/main/docs/img/estructura-proyecto.png).


 # Funcionalidades
 - Diseño Responsive adaptable a pantallas pequeñas. 
 - Endpoints REST para:
     - GET/productos → Obtener productos desde archivo local.
     - POST/productos → Recibe un producto y lo guarda en el archivo  productos.txt. 
 - Imagenes dinámicas,normalización del nombre del producto.
 - Actualización automatica de la lista de productos al crear uno nuevo.
 - Ordena productos por nombre o precio.
        

 # Capturas del Proyecto
 - Vista de un Iphone
 - ![iphone](https://github.com/AlvarezF7/M6-3-servidor-web-node-api/blob/main/docs/img/vista-iphone.png).
 - Vista de un Ipad Air
 - ![ipad](https://github.com/AlvarezF7/M6-3-servidor-web-node-api/blob/main/docs/img/ipad-air.png).

 # Instruciones para ejecutar el proyecto
 
  1. Clona el proyecto **"git clone URL_DEL_REPOSITORIO"**
  2. Instala dependencias **"npm install"**
  3. Ejecutar Servidor **"node index.js"**
  4. Abrir el navegador **"http://localhost:3000"**

# Ver Proyecto

 # Notas
- Se utilizan códigos HTTP adecuados: 200, 201, 400, 405 y 500.
- La lectura del archivo se realiza de manera no bloqueante.
- Se implementa separación entre frontend y backend.
- Se aplican validaciones tanto en cliente como en servidor.
- Proyecto desarrollado con fines académicos.



 # Autor
 - Fernanda Álvarez F. para programa FullStack JavaScript Sence.
