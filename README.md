💬 Realtime Chat Application

A real-time multi-room chat application built using Node.js, Express, and Socket.IO.

This project demonstrates WebSocket-based real-time communication, room-based messaging, and live user tracking — deployed in production on Render.

🔗 Live Demo:
👉 https://realtime-chat-sockets.onrender.com

🚀 Project Overview

This application enables users to:

Join chat rooms

Send and receive messages instantly

See live typing indicators

Track online users in real-time

Switch between light and dark mode

The project focuses on real-time system design and event-driven architecture.

✨ Key Features
🔄 Real-Time Messaging

Instant message broadcasting

Room-based communication

Time-stamped messages

👥 Live User Tracking

Real-time online users counter

Join/leave system notifications

⌨ Typing Indicator

Displays when a user is typing

Auto-clears after inactivity

🎨 UI Features

Clean responsive design

Auto-scroll to latest message

Dark mode toggle

🛠 Tech Stack
Backend

Node.js

Express.js

Socket.IO

Frontend

HTML

CSS

Vanilla JavaScript

Deployment

Render (Web Service Hosting)

📂 Project Structure
realtime-chat-sockets/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
└── README.md

⚙️ Local Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/supriyaguess/realtime-chat-sockets.git
cd realtime-chat-sockets

2️⃣ Install Dependencies
npm install

3️⃣ Start Server
npm start


Server runs at:

http://localhost:9000

🌍 Deployment Details

Hosted on Render

Uses dynamic port configuration:

const PORT = process.env.PORT || 9000;


WebSocket support enabled via Socket.IO

CORS configured for production deployment

🧠 Technical Concepts Demonstrated

WebSocket-based real-time communication

Event-driven programming

Room-based socket architecture

Server-client synchronization

State management (online users count)

Production deployment of Node.js WebSocket app

📈 Future Improvements

Store messages in MongoDB

Add authentication system (login instead of prompt)

Add private messaging

Add persistent user sessions

Add Redis adapter for scaling

Convert frontend to React (MERN upgrade)

👩‍💻 Author

Supriya Kumari
GitHub: https://github.com/supriyaguess
