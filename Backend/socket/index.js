import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const Frontend_URL = process.env.Frontend_URL;

// Socket connection
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: Frontend_URL,  
        credentials: true,     
    }
});

io.on('connection', (socket) => {
    console.log("Connected user", socket.id);

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log("User disconnected", socket.id);
    });
});

export { app, server };
