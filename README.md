# Test con Jest y Supertest para la API de Cafetería Nanacao

Este repositorio contiene pruebas automatizadas utilizando Jest y Supertest para verificar el comportamiento de la API de Cafés.

## Ejecución de las pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm run test
```

Esto ejecutará los casos de prueba definidos en el archivo `server.spec.js` utilizando Jest.

## Descripción de las pruebas

### Endpoint de Cafés

- `Status 200`: Verifica que se obtenga un código de estado 200 al realizar una solicitud GET a la ruta `/cafes`. También comprueba que el tipo de dato de la respuesta sea un objeto.

- `Status 404 al eliminar café que no existe`: Comprueba que se obtenga un código de estado 404 al intentar eliminar un café con un ID que no existe. La solicitud DELETE se realiza a la ruta `/cafes/:id`, donde `:id` es un ID de café inexistente. Se establece un token de autorización ficticio.

- `Agrega un nuevo café`: Verifica que se obtenga un código de estado 201 al agregar un nuevo café. La solicitud POST se realiza a la ruta `/cafes` y se envía un objeto JSON con la información del café, incluyendo un ID único y el nombre del café.

- `Actualiza un café con id diferente`: Comprueba que se obtenga un código de estado 400 al intentar actualizar un café con un ID diferente alos existentes. La solicitud PUT se realiza a la ruta `/cafes/:id`, donde `:id` es el ID del café que se desea actualizar. Se envía un objeto JSON con la información del café, incluyendo un ID diferente al del café que se desea actualizar.

