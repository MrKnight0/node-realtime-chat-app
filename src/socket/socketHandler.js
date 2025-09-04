import Message from "../models/Message.js";

export const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("Usuario conectado:", socket.id);

    // Enviar historial de mensajes al nuevo usuario
    Message.find()
      .sort({ createdAt: 1 })
      .then((messages) => {
        socket.emit("messageHistory", messages);
      });

    // Escuchar nuevos mensajes
    socket.on("sendMessage", async (data) => {
      const newMessage = new Message({
        username: data.username,
        text: data.text,
      });

      await newMessage.save();

      // Enviar a todos los usuarios conectados
      io.emit("receiveMessage", newMessage);
    });

    // Desconexión
    socket.on("disconnect", () => {
      console.log("Usuario desconectado:", socket.id);
    });
  });
};
