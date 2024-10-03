import React from 'react';
import { useLoaderData, Await } from 'react-router';
import { Suspense } from 'react';
import type { DataBase } from '../../interface/interface';

export const Magazine = (): React.JSX.Element => {
    const { dataBase } = useLoaderData() as { dataBase: DataBase };

    return (
        <section>
            <h1>Журнал заявок</h1>
            <Suspense fallback={<div>Загрузка журнала заявок...</div>}>
                <Await resolve={dataBase}>
                    {(resolveDataBase: DataBase | boolean) => {
                        if (resolveDataBase) {
                            return <div>Журнал заявок получен</div>;
                        }
                    }}
                </Await>
            </Suspense>
        </section>
    );
};
