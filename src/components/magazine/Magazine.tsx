import React from 'react';
import { useLoaderData, Await } from 'react-router';
import { Suspense } from 'react';
import type { DataBase } from '../../interface/interface';

export const Magazine = (): React.JSX.Element => {
    const { magazine } = useLoaderData() as { magazine: DataBase };

    return (
        <section>
            <h1>Журнал заявок</h1>
            <Suspense fallback={<div>Загрузка журнала заявок...</div>}>
                <Await resolve={magazine}>
                    {(resolveMagazine: DataBase | boolean) => {
                        if (resolveMagazine) {
                            console.log(resolveMagazine);
                            return <div>Журнал заявок получен</div>;
                        }
                    }}
                </Await>
            </Suspense>
        </section>
    );
};
