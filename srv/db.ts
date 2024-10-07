import type { DataBase } from '../src/interface/interface';

const MockDataBase: DataBase = {
    users: [
        {
            name: 'Инокентий',
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
                            file_name: 'Договор аренды.pdf',
                        },
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Техническое задание.docx',
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
                            file_name: 'Договор аренды.pdf',
                        },
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Техническое задание.docx',
                        },
                    ],
                    request_name_organization: 'ЗАО "СтройГрупп"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'd2f1981e-8d2d-4f83-9b42-3d327e7f706d',
                },
                {
                    request_comment: 'Проработка нового контракта.',
                    request_date: '12.04.2023',
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
                    request_name_organization: 'ООО "АгроКомплекс"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'a9d7dbd4-883f-4b0e-b2ad-7ef4d3e0cd1c',
                },
                {
                    request_comment: 'Запрос на заключение договора аренды.',
                    request_date: '19.03.2023',
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
                    request_name_organization: 'ООО "ИнфоСистем"',
                    request_processed: 'FINISHED',
                    request_guid: 'bbf6d20d-b9bb-4d02-a858-b325f8e7ae13',
                },
                {
                    request_comment: 'Анализ договора с клиентом.',
                    request_date: '07.05.2023',
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
                    request_name_organization: 'ООО "ТранспортСеть"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'b0979d4c-ffaf-4a72-a4b9-d1b6dc615620',
                },
                {
                    request_comment: 'Обсуждение закупки оборудования.',
                    request_date: '14.06.2023',
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
                    request_name_organization: 'ЗАО "ПродуктПром"',
                    request_processed: 'FINISHED',
                    request_guid: 'fcd3b017-9944-4418-8184-0b964ec942a5',
                },
                {
                    request_comment: 'Подготовка к заключению контракта.',
                    request_date: '01.07.2023',
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
                    request_name_organization: 'ООО "ТехноГрупп"',
                    request_processed: 'IN_PROCESS',
                    request_guid: '7b6ff2ab-2f11-4b43-b191-62e65a1c5363',
                },
                {
                    request_comment: 'Запрос на заключение договора аренды.',
                    request_date: '08.08.2023',
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
                    request_processed: 'FINISHED',
                    request_guid: 'ae59f75b-fb1d-4cc6-b5fa-b39f08b5f6b4',
                },
                {
                    request_comment: 'Пересмотр условий контракта с партнёром.',
                    request_date: '27.09.2023',
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
                    request_name_organization: 'ЗАО "ТехноСнаб"',
                    request_processed: 'IN_PROCESS',
                    request_guid: '68b07d6d-7050-4570-9d8e-7c4cb3af3568',
                },
                {
                    request_comment: 'Анализ поставок для нового проекта.',
                    request_date: '10.10.2023',
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
                    request_name_organization: 'ООО "МегаПром"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'bb027546-b65d-4c0a-9a1a-45678a3b7c68',
                },
                {
                    request_comment: 'Обсуждение договора на поставку сырья.',
                    request_date: '12.10.2023',
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
                    request_name_organization: 'ЗАО "СибПромСнаб"',
                    request_processed: 'FINISHED',
                    request_guid: 'd34590b6-8717-4cf7-8d64-2c2f8a1d8885',
                },
                {
                    request_comment: 'Запрос на пересмотр условий аренды.',
                    request_date: '20.10.2023',
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
                    request_name_organization: 'ООО "ТоргИнвест"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'fac2b481-4f94-42e7-b787-9e7b26d63543',
                },
                {
                    request_comment: 'Заключение нового контракта на услуги.',
                    request_date: '15.11.2023',
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
                    request_name_organization: 'ЗАО "ПромСтрой"',
                    request_processed: 'FINISHED',
                    request_guid: '9e7643a9-e4cb-43f3-b4fe-dcd36717b29d',
                },
                {
                    request_comment: 'Проработка деталей по новому договору.',
                    request_date: '18.11.2023',
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
                    request_name_organization: 'ООО "ЭнергоПартнер"',
                    request_processed: 'IN_PROCESS',
                    request_guid: '9dfb8b36-5f42-477d-a682-7b52daba7db5',
                },
                {
                    request_comment: 'Запрос на аренду офисных помещений.',
                    request_date: '25.11.2023',
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
                    request_name_organization: 'ООО "БизнесГрупп"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'ffb943d4-f9d7-4bbd-8f6e-b8b0c7c54c12',
                },
                {
                    request_comment: 'Оформление нового договора на поставки.',
                    request_date: '01.12.2023',
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
                    request_name_organization: 'ООО "СтройПром"',
                    request_processed: 'FINISHED',
                    request_guid: '00327b4e-6370-499a-90b5-231a6fcf7069',
                },
                {
                    request_comment: 'Запрос на аренду склада.',
                    request_date: '05.12.2023',
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
                    request_name_organization: 'ЗАО "ГрузСнаб"',
                    request_processed: 'IN_PROCESS',
                    request_guid: '8ac1c7a3-75de-47c8-bd49-ff0560ef7994',
                },
                {
                    request_comment: 'Переговоры по условиям сотрудничества.',
                    request_date: '10.12.2023',
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
                    request_name_organization: 'ООО "ЛогистСнаб"',
                    request_processed: 'FINISHED',
                    request_guid: 'fd541979-2406-4c7c-b94a-c0fd3277ab24',
                },
                {
                    request_comment: 'Оформление контракта на обслуживание.',
                    request_date: '18.12.2023',
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
                    request_name_organization: 'ООО "СервисТех"',
                    request_processed: 'IN_PROCESS',
                    request_guid: '640c3488-88a2-4b3a-83de-665305eeff19',
                },
                {
                    request_comment: 'Запрос на поставку оборудования.',
                    request_date: '22.12.2023',
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
                    request_name_organization: 'ООО "ЭнергоСервис"',
                    request_processed: 'FINISHED',
                    request_guid: 'cabdfb18-0c4e-49c7-a6d1-2de751b91730',
                },
                {
                    request_comment: 'Анализ условий аренды склада.',
                    request_date: '25.12.2023',
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
                    request_name_organization: 'ООО "СтройСервис"',
                    request_processed: 'IN_PROCESS',
                    request_guid: '66e320d6-f953-43b6-b970-2e0055b6d028',
                },
                {
                    request_comment: 'Переговоры по условиям аренды офиса.',
                    request_date: '30.12.2023',
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
                    request_name_organization: 'ЗАО "ЛогистикаСнаб"',
                    request_processed: 'FINISHED',
                    request_guid: '2d1d0d3e-e8ba-4651-8ff2-bd731e6f7a69',
                },
                {
                    request_comment: 'Обсуждение контракта на транспортные услуги.',
                    request_date: '02.01.2024',
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
                    request_name_organization: 'ООО "ТрансЛогистик"',
                    request_processed: 'FINISHED',
                    request_guid: 'b89e8bfb-ef43-45e7-896f-ff135973c495',
                },
                {
                    request_comment: 'Оформление контракта на аренду транспорта.',
                    request_date: '10.01.2024',
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
                    request_name_organization: 'ЗАО "ТехТрансСервис"',
                    request_processed: 'FINISHED',
                    request_guid: 'dc9e5fa6-afe9-4af5-b867-c0b569764233',
                },
                {
                    request_comment: 'Проработка деталей контракта.',
                    request_date: '15.01.2024',
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
                    request_name_organization: 'ООО "СтройКомплект"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'b9e08dc7-f654-4c66-8ad5-133f4913c4f4',
                },
                {
                    request_comment: 'Оформление договора на поставку оборудования.',
                    request_date: '20.01.2024',
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
                    request_name_organization: 'ООО "ЭнергоСнаб"',
                    request_processed: 'IN_PROCESS',
                    request_guid: 'cd0c2f4e-c5c5-44ef-96fa-c751fdffdf5e',
                },
                {
                    request_comment: 'Заключение договора на аренду офиса.',
                    request_date: '25.01.2024',
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
                    request_name_organization: 'ООО "БизнесЛогист"',
                    request_processed: 'FINISHED',
                    request_guid: '50b95b49-f0ad-4ed7-a8d7-2361cb0e7f23',
                },
            ],
            archive: [
                {
                    record_date: '03.11.2023',
                    document_date: '20.07.2024',
                    document_number: 'DOC-5139',
                    organization_name: 'Org_240',
                    organization_guid: 'fa815fa0-a54e-4066-ad3f-fe34f9152c0c',
                    document_presentation: 'Presentation_7',
                    document_presentation_guid: 'e9335023-0115-49fb-ac19-1370c3627016',
                    document_type: 'OUT',
                    record_status: 'FINISHED',
                    record_status_comment: 'Comment_5',
                    tax_period: 'PERIOD_MONTH',
                    tax_period_end_date: '26.11.2023',
                    record_comment: 'Record comment 5',
                    request_guid: '8a756a85-2700-4fc5-a3ab-1c14101a0526',
                    fileList: [
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Техническое задание.pdf',
                        },
                    ],
                },
                {
                    record_date: '22.12.2023',
                    document_date: '25.06.2024',
                    document_number: 'DOC-5671',
                    organization_name: 'Org_310',
                    organization_guid: 'edffc6f4-75b9-4081-9c5e-3ef5fd736081',
                    document_presentation: 'Presentation_5',
                    document_presentation_guid: 'eee3952f-98e0-43c4-99e5-3b00a09d0617',
                    document_type: 'IN',
                    record_status: 'FINISHED',
                    record_status_comment: 'Comment_1',
                    tax_period: 'PERIOD_Q1',
                    tax_period_end_date: '09.06.2024',
                    record_comment: 'Record comment 73',
                    request_guid: '9d7bd9d1-3b58-49ba-b298-daf3b641b009',
                    fileList: [
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Техническое задание.pdf',
                        },
                    ],
                },
                {
                    record_date: '18.02.2024',
                    document_date: '23.03.2024',
                    document_number: 'DOC-6939',
                    organization_name: 'Org_158',
                    organization_guid: 'bf6e8b5e-3a70-4426-8f90-e9d2d6a320f2',
                    document_presentation: 'Presentation_9',
                    document_presentation_guid: '0d6b6ca4-c7ac-4cbc-ac59-7f29403c7c51',
                    document_type: 'OUT',
                    record_status: 'FINISHED',
                    record_status_comment: 'Comment_10',
                    tax_period: 'PERIOD_Q3',
                    tax_period_end_date: '29.10.2023',
                    record_comment: 'Record comment 60',
                    request_guid: 'ea6838e8-7b5a-4d5c-a1d3-ab1ffb66ccbc',
                    fileList: [
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Техническое задание.pdf',
                        },
                    ],
                },
                {
                    record_date: '30.08.2024',
                    document_date: '29.01.2024',
                    document_number: 'DOC-6317',
                    organization_name: 'Org_689',
                    organization_guid: '9eaaa90c-65a9-41a4-b53b-74e8ae3cc4d5',
                    document_presentation: 'Presentation_2',
                    document_presentation_guid: '29b3b36d-b571-4468-a046-5d2cfd08cb67',
                    document_type: 'IN',
                    record_status: 'FINISHED',
                    record_status_comment: 'Comment_1',
                    tax_period: 'PERIOD_Q3',
                    tax_period_end_date: '17.09.2024',
                    record_comment: 'Record comment 90',
                    request_guid: '0544717e-e283-45ae-969f-57dbc4ca4bd9',
                    fileList: [
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Договор аренды.pdf',
                        },
                    ],
                },
                {
                    record_date: '06.06.2024',
                    document_date: '24.08.2024',
                    document_number: 'DOC-8706',
                    organization_name: 'Org_339',
                    organization_guid: '715f2447-ac62-46d7-8355-ae0a5c2531ee',
                    document_presentation: 'Presentation_10',
                    document_presentation_guid: 'bcf9618d-e287-4e63-aadc-96f674cf3289',
                    document_type: 'OUT',
                    record_status: 'FINISHED',
                    record_status_comment: 'Comment_9',
                    tax_period: 'PERIOD_Q4',
                    tax_period_end_date: '22.09.2024',
                    record_comment: 'Record comment 78',
                    request_guid: '293c1f1e-ec93-4ea4-b3c8-61d406c466c6',
                    fileList: [
                        {
                            file_data: 'text/plain;base64,MQ==',
                            file_name: 'Акт выполненных работ.pdf',
                        },
                    ],
                },
            ],
        },
    ],
};

export { MockDataBase };
