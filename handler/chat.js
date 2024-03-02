const { Database } = require("sqlite3");
const { open } = require("sqlite");

const joinChat = async (io, socket, username) => {
  io.emit("new user", username); 

  const message = {
    username: "SERVER",
    content: `${username} has joined the chat`,
  };

  await getChatLog(socket); 
  await sendMessage(io, message); 
};

const getChatLog = async (socket) => {
  const db = await open({
    filename: "chat.db",
    driver: Database,
  });

  const messages = await db.all(
    "SELECT * FROM chatlog ORDER BY id DESC LIMIT 300"
  ); 
  await db.close();

  socket.emit("receive chatlog", messages); 
};

const sendMessage = async (io, message) => {
  const { username, content } = message; 

  const db = await open({
    filename: "chat.db",
    driver: Database,
  });

  await db.run("INSERT INTO chatlog (username, content) VALUES (?, ?)", [
    username,
    content,
  ]); 
  await db.close();

  io.emit("receive message", {
    username: username,
    content: content,
  }); 
};

const leaveChat = async (io, socket, username) => {
  const message = {
    username: "SERVER",
    content: `${username} has left the chat`,
  };

  await sendMessage(io, message); 

  socket.broadcast.emit("user left", username); 
};

module.exports = {
  joinChat,
  sendMessage,
  leaveChat,
};
