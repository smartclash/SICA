import { Server } from 'socket.io';
import disconnected from './Listeners/Disconnected';
import handleMessage from './Listeners/Messages';

class WebSocket {
    private io: Server;
    private users: Array<String>;

    constructor(io: Server) {
        this.io = io;
    }

    bootstrap() {
        this.io.on('connection', socket => {
            console.log('A new client connected', socket.id);
            disconnected(socket);
            handleMessage(socket, this.io);
        });
    }
}

export default WebSocket;
