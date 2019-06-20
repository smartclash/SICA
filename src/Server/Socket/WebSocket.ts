import { Server } from 'socket.io';
import handleMessage from './Listeners/Messages';
import updateOnlineUsers from './Listeners/UpdateOnlineUsers';

class WebSocket {
    private io: Server;
    private users: Array<any> = [];

    constructor(io: Server) {
        this.io = io;
    }

    bootstrap() {
        this.io.on('connection', socket => {
            socket.on('information', ({ name }) => {
                this.users.push({
                    id: socket.id,
                    name,
                });
                updateOnlineUsers(socket, this.users, this.io);
            });

            handleMessage(socket, this.io);

            socket.on('disconnect', () => {
                this.users = this.users.filter(user => user.id != socket.id);
                updateOnlineUsers(socket, this.users, this.io);
            });
        });
    }
}

export default WebSocket;
