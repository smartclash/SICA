import { Socket } from 'socket.io';

const disconnected = (socket: Socket) => {
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
};

export default disconnected;
