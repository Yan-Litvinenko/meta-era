import type { Response, Request } from 'express';
import { MockDataBase } from './db';

export function authorization(req: Request, res: Response) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const newUser = req.body;

    if (!newUser) {
        return res.status(400).send('No user data provided');
    }

    try {
        MockDataBase.users.push(newUser);
        console.log(MockDataBase);
        return res.status(201).send(true);
    } catch (error) {
        console.error('Error adding user to the database:', error);
        return res.status(500).send(false);
    }
}
