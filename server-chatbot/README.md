# Backend Chatbot Project

## Descripción

Este proyecto es un backend para un chatbot de restaurante de sushi. Permite gestionar pedidos, mostrar el menú y responder a preguntas frecuentes. El chatbot está entrenado para entender una variedad de mensajes relacionados con el servicio del restaurante.

## Instalación

### Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- MongoDB (local o en la nube)

### Pasos para Instalar

1. Clona este repositorio:

   ```bash
   git clone https://github.com/FranciscoLGM/backend-chatbot.git
   cd backend-chatbot

   ```

2. Instala las dependencias:

   ```bash
   npm install

   ```

3. Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

- MONGO_URI=mongodb://localhost:27017/tu-base-de-datos
- NODE_ENV=development
- PORT=5000

## Cómo Correr el Proyecto

### En Desarrollo

1. Ejecuta el script para almacenar el menú en la base de datos:

   ```bash
   node data/storeMenu.js

   ```

2. Ejecuta el servidor:

   ```bash
   npm run dev

   ```

### En Producción

1. Compila el proyecto:

   ```bash
   npm run build

   ```

2. Ejecuta el servidor:

   ```bash
   npm start

   ```

## Ejemplos de Mensajes que Entiende el Bot

- "Hola"

- "Quiero hacer un pedido"

- "Mostrar menú"

- "¿Cuáles son sus horarios?"

- "¿Dónde están ubicados?"

- "Gracias"

- "Adiós"

- "¿Tienen promociones?"

- "¿Puedo reservar una mesa?"

- "¿Ofrecen delivery?"

- "¿Tienen opciones para alérgicos?"

- "¿Cuál es la historia del restaurante?"

- "¿Quién es el chef?"

- "¿Qué métodos de pago aceptan?"

- "¿Qué recomiendan?"

- "¿Organizan eventos?"

- "¿Ofrecen catering?"

## Endpoints Disponibles

### Pedidos

- POST /api/order
  Descripción: Almacena un pedido.
  Ejemplo de solicitud:

  ```json
  {
    "items": [{ "name": "Sushi", "quantity": 2, "price": 10 }],
    "total": 20,
    "customerName": "John Doe",
    "customerContact": "1234567890",
    "customerAddress": "123 Sushi St"
  }
  ```

  Ejemplo de respuesta:

  ```json
  {
    "answer": "Pedido almacenado satisfactoriamente!"
  }
  ```

  ### Chatbot

  - POST /api/chat
    Descripción: Procesa un mensaje del usuario y devuelve una respuesta basada en la intención detectada.
    Ejemplo de solicitud:

  ```json
  {
    "message": "Hola"
  }
  ```

  Ejemplo de respuesta:

  ```json
  {
    "answer": "¡Hola! 😊 ¿Cómo andás? Estoy acá para ayudarte con lo que necesites. ¿Listo para una experiencia fabulosa?"
  }
  ```

  ### Menú

  - GET /api/menu
    Descripción: Devuelve el menú completo.
    Ejemplo de solicitud:

  ```json
  {
    "message": "Mostrar menú"
  }
  ```

  Ejemplo de respuesta:

  ```json
  {
    "menu": [
       "name": "Sushi Roll de Salmón",
    "description":
      "Delicioso sushi roll con salmón fresco, aguacate y pepino, envuelto en alga nori. Una combinación clásica que nunca falla.",
    "price": 300
    ]
  }

  ```

  ## Cómo Ejecutar los Tests

1. Ejecuta los tests:

   ```bash
   npm test

   ```

   ## Manejo de Errores

   El backend del chatbot maneja diversos tipos de errores para garantizar respuestas adecuadas y ayudar en la depuración durante el desarrollo. A continuación se detallan los tipos de errores manejados y su estructura de respuesta:

   ### Tipos de Errores Manejados

1. Errores de Validación

- Middleware de Validación de Mensajes (validateMessage)

  - Si el mensaje no está presente o no es un texto, se responde con un error 400 (Bad Request) con el mensaje "El mensaje es requerido y debe ser un texto.".

- Controlador de Procesamiento de Mensajes (proccessMessage)

  - Valida que el mensaje esté presente y sea un texto, de lo contrario, responde con un error 400 (Bad Request) con el mensaje "El mensaje es requerido y debe ser un texto.".

- Controlador de Almacenamiento de Pedidos (storeOrderController)

  - Valida los detalles del pedido. Si faltan detalles o son inválidos, responde con un error 400 (Bad Request) con mensajes específicos como "Faltan detalles del pedido." o "Detalles del artículo del pedido no válidos.".

2. Errores de Servicios Externos y Procesamiento

- Controlador de Procesamiento de Mensajes (proccessMessage)

  - Captura errores durante el procesamiento del mensaje y la obtención de la respuesta del chatbot. Si ocurre un error, este se pasa al middleware de manejo de errores.

- Controlador de Obtención del Menú (getMenu)

  - Captura errores al obtener el menú del restaurante. Si ocurre un error, este se pasa al middleware de manejo de errores.

- Controlador de Almacenamiento de Pedidos (storeOrderController)

  - Captura errores al almacenar el pedido. Si el error no está relacionado con la validación del pedido, se pasa al middleware de manejo de errores.

3. Errores Genéricos del Servidor

- Middleware de Manejo de Errores (errorMiddleware)

  - Si no hay un status definido en el error, se utiliza un estado 500 por defecto, indicando un "Error interno del servidor".

  - Envía un mensaje basado en err.message. Si no hay un mensaje específico en el error, se usa un mensaje genérico "Error interno del servidor".

  - Si el entorno de ejecución (NODE_ENV) es development, se incluyen detalles adicionales del error en la respuesta para ayudar en la depuración. En producción, estos detalles se omiten para no exponer información sensible.

### Ejemplo de Respuesta de Error

Cuando ocurre un error, la respuesta JSON tendrá la siguiente estructura:

```json
{
  "message": "Descripción del error",
  "error": {
    // Detalles adicionales del error (solo en desarrollo)
  }
}
```

### Ejemplos de Errores Específicos

- Errores de Validación (400 Bad Request)

  - Middleware de Validación de Mensajes

```javascript
if (!message || typeof message !== "string") {
  return res
    .status(400)
    .json({ error: "El mensaje es requerido y debe ser un texto." });
}
```

- Controlador de Procesamiento de Mensajes

```javascript
if (!message || typeof message !== "string") {
  return res
    .status(400)
    .json({ error: "El mensaje es requerido y debe ser un texto." });
}
```

- Controlador de Almacenamiento de Pedidos

```javascript
if (
  error.message === "Faltan detalles del pedido." ||
  error.message === "Detalles del artículo del pedido no válidos."
) {
  res.status(400).json({ answer: error.message });
}
```

- Controlador de Obtención del Menú

```javascript
try {
  const menuItems = await fetchMenu();
  res.json({ menuItems });
} catch (error) {
  console.error("Error al obtener el menú:", error);
  next(error);
}
```
