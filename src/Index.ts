import { http } from './Server/App';

const PORT = process.env.PORT || 8080;

http.listen(PORT, () => console.log(`Listening on *:${PORT}`));
