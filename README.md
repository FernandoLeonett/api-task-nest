API de Tareas
Esta es una API para administrar tareas con diferentes categorías y fechas de vencimiento.

Cómo usar
Instalación
Clona este repositorio.
Instala las dependencias con npm install.
Ejecución
Inicia el servidor con npm run start.
Abre tu navegador o una herramienta como Postman y accede a http://localhost:3000.
Cree el fichero .env guiese por el .ev.example
Pruebas
Puedes probar la API con los siguientes casos de uso:

Crear una tarea (POST /tasks)
json
Copy code
{
  "title": "Comprar leche",
  "category": "Personal",
  "expiration": "2023-12-31T23:59:59.999Z",
  "description": "Comprar 2 cartones de leche en el supermercado"
}
Obtener todas las tareas (GET /tasks)
Obtener una tarea por ID (GET /tasks/:id)
Reemplaza :id con el ID de la tarea que quieras obtener.

Actualizar una tarea por ID (PUT /tasks/:id)
Reemplaza :id con el ID de la tarea que quieras actualizar.

json
Copy code
{
  "title": "Comprar pan",
  "category": "Shopping",
  "expiration": "2023-12-31T23:59:59.999Z",
  "description": "Comprar una barra de pan en la panadería del barrio"
}
Eliminar una tarea por ID (DELETE /tasks/:id)
Reemplaza :id con el ID de la tarea que quieras eliminar.

Casos de error
Si la solicitud no cumple con los requisitos, la API devolverá un código de error 400 con un mensaje de error.

Ejemplo: una tarea con una fecha de vencimiento en el pasado
json
Copy code
{
  "title": "Comprar leche",
  "category": "Personal",
  "expiration": "2022-01-01T00:00:00.000Z",
  "description": "Comprar 2 cartones de leche en el supermercado"
}
La API devolverá:

json
Copy code
{
  "statusCode": 400,
  "message": "Expiration date must be in the future",
  "error": "Bad Request"
}
Ejemplo: una tarea con una categoría inválida
json
Copy code
{
  "title": "Ir al gimnasio",
  "category": "Deporte",
  "expiration": "2023-12-31T23:59:59.999Z",
  "description": "Hacer ejercicio en el gimnasio del barrio"
}
La API devolverá:

json
Copy code
{
  "statusCode": 400,
  "message": "Category must be one of the following values: Personal, Work, Shopping, Entertainment, Fitness, Phone Call, Other",
  "error": "Bad Request"
}
Ejemplo: una solicitud a una URL inexistente
Si intentas acceder a una URL que no existe, la API devolverá un código de error 404.

text
Copy code
GET /tareas
La API devolverá:

json
Copy code
{
  "statusCode": 404,
  "message": "Cannot GET /tareas",
  "error": "Not