const socket = io();

const send = document.querySelector("#send-message");
const allMessage = document.querySelector("#all-messages");

// obtener el mensaje del usuario
send.addEventListener("click", () => {
  const message = document.querySelector("#message");

  socket.emit("message", message.value);
  message.value = "";
});

socket.on("message", ({ user, message }) => {

  const msg = document.createRange().createContextualFragment(`
  <div class="message">
    <div class="image-container">
      <img src="/images/michi.jpeg" width="192" >
    </div>

    <div class="message-body">
      <div class="user-info">
        <span class="username">${user}</span>
        <span class="time">Hace 1 segundo</span>
      </div>
    </div>

    <p>
      ${message}
    </p>
  </div>
  `);


  allMessage.append(msg);
});