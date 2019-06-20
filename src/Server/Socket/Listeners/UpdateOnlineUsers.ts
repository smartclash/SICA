import { Socket, Server } from 'socket.io';

const updateOnlineUsers = (socket: Socket, users: Array<any>, io: Server) => {
    io.emit('update', users);
};

export default updateOnlineUsers;
