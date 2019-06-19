import { Socket, Server } from 'socket.io';
import checkSentiment from '../../../Services/Aylien/TextAPI';

const handleMessage = (socket: Socket, io: Server) => {
    socket.on('message', async msg => {
        //@ts-ignore
        const { polarity } = await checkSentiment(msg.message)
        io.emit('message', {
            name: msg.name,
            message: msg.message,
            type: (polarity == 'positive') ? '👍' : '👎'
        });
    });
};

export default handleMessage;
