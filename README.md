# Realtime Chat Backend

Backend del proyecto **Chat en Tiempo Real** desarrollado con **Node.js, Express, Socket.IO y MongoDB**.  
Este servidor gestiona la comunicación en tiempo real y almacena los mensajes en la base de datos.

---

## Tecnologías

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [CORS](https://github.com/expressjs/cors)

---

## Estructura del proyecto

realtime-app/
│── src/
│ ├── models/ # Modelos de MongoDB
│ │ └── Message.js
│ ├── socket/ # Lógica de WebSockets
│ │ └── socketHandler.js
│ ├── server.js # Punto de entrada
│── .env.example # Variables de entorno de ejemplo
│── package.json


---

## ⚙Instalación

1. Clonar este repositorio:
   ```
   git clone https://github.com/TU_USUARIO/realtime-chat-backend.git
   cd realtime-chat-backend
   npm install
  
2. Crear archivo .env en raiz de proyecto basado en archivo .env.example:
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/realtime-app
3. Ejecutar el modo desarrollador
   ```
   npm run dev
   
