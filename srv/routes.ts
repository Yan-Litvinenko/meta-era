import { MockDataBase } from './db';
import type { UserSlice } from '../src/interface/slice.interface';
import type { Response, Request } from 'express';
import type { Application } from '../src/interface/application.interface';

export function authorization(req: Request, res: Response) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const newUser: UserSlice & { password: string } = req.body;

    if (!newUser) {
        return res.status(400).send('No user data provided');
    }

    const hasUser: number = MockDataBase.users.findIndex((user) => {
        return user.name === newUser.name && user.password === newUser.password;
    });

    try {
        if (hasUser >= 0) {
            return res.status(201).send({ guid: MockDataBase.users[hasUser].guid, status: true });
        }

        MockDataBase.users.push(newUser);
        return res.status(201).send({ status: true });
    } catch (error) {
        console.error('Error adding user to the database:', error);
        return res.status(500).send(false);
    }
}

export function newApplication(req: Request, res: Response) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    console.log(JSON.stringify(req.body));

    const newApplication: Application & { guid_user: string } = req.body;
    const { guid_user, ...applicationWithoutGuidUser } = newApplication;
    const user = MockDataBase.users.find((user) => user.guid === guid_user);

    if (user) {
        user.magazine.push(applicationWithoutGuidUser);
    }

    return res.status(201).send({ status: true });
}

export function getMagazine(req: Request, res: Response) {
    try {
        const guid = req.headers['authorization']?.split(' ')[1];
        const magazine = MockDataBase.users.find((user) => user.guid === guid)?.magazine;
        return res.status(200).send({ magazine });
    } catch (error) {
        return res.status(500).send(false);
    }
}
