import fs from 'fs/promises';
import http from 'http';
import url from 'url';
import { calculator } from './calculator';

const PORT = process.env.PORT || 3476;

export const server = http.createServer((req, resp) => {
    const path = url.parse(req.url as string).path;
    resp.end(path);
    console.log(path?.split('?'));
});

server.listen(PORT);
console.log(`Server listening in port ${PORT}`);
