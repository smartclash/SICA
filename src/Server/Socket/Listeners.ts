import { Server } from 'socket.io';
import disconnected from './Listeners/Disconnected';
import handleMessage from './Listeners/Messages';

class Listener {
    io: Server;

    constructor(io: Server) {
        this.io = io;
    }

    bootstrap() {
        this.io.on('connection', socket => {
            console.log('A new client connected');
            disconnected(socket);
            handleMessage(socket, this.io);
        });
    }
}

export default Listener;
