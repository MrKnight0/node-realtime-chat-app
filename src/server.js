import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { socketHandler } from "./socket/socketHandler.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" } // permite conexiones desde cualquier frontend local
});

app.use(cors());
app.use(express.json());

// Conexión a MongoDB local
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error de conexión:", err));

// Inicializar Socket.IO
socketHandler(io);

// Endpoint simple
app.get("/", (req, res) => res.send("Servidor Socket.IO funcionando"));

// Puerto
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
