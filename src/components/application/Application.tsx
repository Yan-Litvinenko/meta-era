// import React from 'react';
// import styles from './Application.module.scss';
// import { useLocation } from 'react-router';
// import { useForm } from 'react-hook-form';
// import { useFileData } from '../../hooks/useFileData';
// import { FileList } from '../fileList/FileList';
// import { FormField } from '../formField/FormField';
// import type { Application, FormSendApplication } from '../../interface/application.interface';

// export const ApplicationPage = (): React.JSX.Element => {
//     const location = useLocation();
//     const {
//         register,
//         reset,
//         setError,
//         clearErrors,
//         formState: { errors },
//         handleSubmit,
//     } = useForm<FormSendApplication & { request_file: string }>();

//     const application = location.state?.application as Application;

//     const [fileData, errorFile, setFileData, handleChangeFile] = useFileData();
//     const [name, setName] = React.useState(application.request_name_organization);
//     const [comment, setComment] = React.useState(application.request_comment);

//     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const files = event.target.files;

//         if (files && files.length > 9) {
//             setError('request_file', { message: 'Вы можете загрузить не более 10 файлов.' });
//         } else {
//             clearErrors('request_file');
//         }

//         handleChangeFile(event);
//     };

//     return (
//         <section className="page">
//             <h1 className="title">Заявка</h1>

//             <form className={styles.application__form} action="">
//                 <FormField
//                     id="name"
//                     textLabel="Имя организации"
//                     value={name}
//                     type="text"
//                     register={register('request_name_organization', {
//                         required: true,
//                         minLength: {
//                             value: 2,
//                             message: 'Название не может быть короче двух символов',
//                         },
//                         maxLength: {
//                             value: 20,
//                             message: 'Название не может быть длиннее 20 символов',
//                         },
//                         onChange(event) {
//                             setName(event.target.value);
//                         },
//                     })}
//                     error={errors.request_name_organization}
//                 />
//                 <FormField
//                     id="date"
//                     type="date"
//                     value={application.request_date}
//                     register={register('request_date', {
//                         required: true,
//                     })}
//                 />
//                 <FormField
//                     id="comment"
//                     textLabel="Комментарий"
//                     type="textarea"
//                     register={register('request_comment', {
//                         required: true,
//                         minLength: {
//                             value: 10,
//                             message: 'Комментарий не может быть меньше 10 символов',
//                         },
//                         maxLength: {
//                             value: 1000,
//                             message: 'Комментарий не может быть длиннее 1000 символов',
//                         },
//                         onChange(event) {
//                             setComment(event.target.value);
//                         },
//                     })}
//                     error={errors.request_comment}
//                 />
//                 <FormField
//                     id="file"
//                     type="file"
//                     textLabel="Загрузить файлы (до 10):"
//                     multiple={true}
//                     accept=".jpg,.jpeg,.png,.bmp,.tiff,.pdf,.doc,.docx,.rtf,.xls,.xlsx"
//                     max={10}
//                     onChange={
//                         handleFileChange as (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
//                     }
//                     error={errors.request_file}
//                 />
//                 <FileList files={fileData} setFiles={setFileData} />
//                 <input className={styles.application__btn} type="submit" value={'Сохранить изменения'} />
//             </form>
//         </section>
//     );
// };
