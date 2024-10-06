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

    const newApplication: Application & { guid_user: string } = req.body;
    const { guid_user, ...applicationWithoutGuidUser } = newApplication;
    const user = MockDataBase.users.find((user) => user.guid === guid_user);

    if (user) {
        user.magazine.push(applicationWithoutGuidUser);
    }

    return res.status(201).send({ status: true });
}

export function editApplication(req: Request, res: Response) {
    try {
        const guidUser: string = req.body[1].guid_user;
        const updateApplication = req.body[0] as Application;

        const user: UserSlice & { password: string } = MockDataBase.users.find((user) => user.guid === guidUser)!;
        const application = user.magazine.find(
            (item) => item.request_guid === updateApplication.request_guid,
        ) as Application;

        Object.entries(updateApplication).forEach(([key, value]) => {
            (application[key as keyof Application] as unknown) = value;
        });

        return res.status(201).send(true);
    } catch (error) {
        return res.status(500).send(false);
    }
}

export function deleteApplication(req: Request, res: Response) {
    const { guidUser, guidApplication } = req.params;

    try {
        const indexUser = MockDataBase.users.findIndex((user) => user.guid === guidUser);

        if (indexUser < 0) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }

        const indexApplication: number = MockDataBase.users[indexUser].magazine.findIndex(
            (item) => item.request_guid === guidApplication,
        );

        if (indexApplication < 0) {
            return res.status(404).json({ message: 'Заявка не найдена' });
        }

        MockDataBase.users[indexUser].magazine.splice(indexApplication, 1);
        return res.status(200).send(true);
    } catch (error) {
        console.error('Ошибка при удалении заявки:', error);
        return res.status(500).send(false);
    }
}

export function getMagazine(req: Request, res: Response) {
    try {
        const { guid_user, countElementsPage, currentPage } = req.query;

        const parsedCountElementsPage = parseInt(countElementsPage as string, 10);
        const parsedCurrentPage = parseInt(currentPage as string, 10);
        const magazine = MockDataBase.users.find((user) => user.guid === guid_user)?.magazine;

        if (!magazine) {
            return res.status(404).send({ error: 'Magazine not found' });
        }

        const startIndex = (parsedCurrentPage - 1) * parsedCountElementsPage;
        const result = magazine.slice(startIndex, startIndex + parsedCountElementsPage);

        return res
            .status(200)
            .send({ magazine: result, maxPage: Math.ceil(magazine.length / Number(countElementsPage)) });
    } catch (error) {
        console.error(error);
        return res.status(500).send(false);
    }
}
