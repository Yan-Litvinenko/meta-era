import http from 'http';
import express, { Request, Response } from 'express';
import path from 'path';
import { authorization } from './srv/routes';

const app = express();
const PORT: number = 3000;

(async () => {
    try {
        app.use(express.json());
        app.use(express.static(path.join(__dirname, 'dist')));

        app.post('/api/authorization', authorization);

        app.get('*', (_: Request, res: Response) => {
            res.sendFile(path.join(__dirname, 'dist', 'index.html'));
        });

        const httpServer = http.createServer(app);

        httpServer.listen(PORT, () => {
            console.log(`HTTP Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
})();
