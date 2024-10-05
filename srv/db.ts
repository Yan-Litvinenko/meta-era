import type { DataBase } from '../src/interface/interface';

const MockDataBase: DataBase = {
    users: [
        {
            name: 'Игнат',
            password: '12345',
            guid: '9f17b1e3-3a21-497d-9f59-58c6b38f86f1',
            magazine: [
                {
                    request_comment: 'Требуется пересмотреть условия договора.',
                    request_date: '15.01.2023',
                    request_documents: [
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Договор аренды.pdf',
                        },
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Техническое задание.docx',
                        },
                    ],
                    request_name_organization: 'ООО "ТехноСфера"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'a7d1fbb3-6c33-4991-b1e6-80fcf70b826e',
                },
                {
                    request_comment: 'Запрос на закупку оборудования.',
                    request_date: '10.02.2023',
                    request_documents: [
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Запрос на оборудование.pdf',
                        },
                    ],
                    request_name_organization: 'ООО "ЭнергоПром"',
                    request_processed: 'FINISHED',
                    request_guid: 'b6e5e712-417a-4f56-88e1-b3d9d06b80ea',
                },
                {
                    request_comment: 'Пересмотр сметы на проект.',
                    request_date: '05.03.2023',
                    request_documents: [
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Смета проекта.xlsx',
                        },
                    ],
                    request_name_organization: 'ЗАО "СтройГрупп"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'd2f1981e-8d2d-4f83-9b42-3d327e7f706d',
                },
            ],
        },
    ],
};

export { MockDataBase };
