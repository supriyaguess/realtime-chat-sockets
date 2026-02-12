const socket = io();

let username = "";
while (!username) {
  username = prompt("Enter username");
}

let room = "";
while (!room) {
  room = prompt("Enter room (general / coding / random)");
}

socket.emit("join-room", { username, room });

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");
const typingDiv = document.getElementById("typing");
const onlineDiv = document.getElementById("online");
const themeToggle = document.getElementById("themeToggle");

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
  socket.emit("typing");
});

socket.on("message", ({ user, text, time }) => {
  const div = document.createElement("div");
  div.className = `message ${user === username ? "me" : "other"}`;
  div.innerHTML = `<strong>${user}</strong><br>${text}<span class="time">${time}</span>`;
  messages.appendChild(div);
  scrollBottom();
});

socket.on("system-message", (msg) => {
  const div = document.createElement("div");
  div.className = "system";
  div.innerText = msg;
  messages.appendChild(div);
  scrollBottom();
});

socket.on("typing", (user) => {
  typingDiv.innerText = `${user} is typing...`;
  setTimeout(() => typingDiv.innerText = "", 1000);
});

socket.on("online-users", (count) => {
  onlineDiv.innerText = `🟢 Online Users: ${count}`;
});

function sendMessage() {
  const msg = messageInput.value.trim();
  if (!msg) return;
  socket.emit("user-message", msg);
  messageInput.value = "";
}

function scrollBottom() {
  messages.scrollTop = messages.scrollHeight;
}

/* 🌙 Dark Mode Toggle */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});