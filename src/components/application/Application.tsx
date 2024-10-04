// import React from 'react';
// import styles from './Application.module.scss';
// import { useLocation } from 'react-router';
// import { useForm } from 'react-hook-form';
// import { useFileData } from '../../hooks/useFileData';
// import { FileList } from '../fileList/FileList';
// import type { Application, FormSendApplication } from '../../interface/application.interface';

// export const ApplicationPage = (): React.JSX.Element => {
//     const location = useLocation();
//     const {
//         register,
//         reset,
//         formState: { errors },
//         handleSubmit,
//     } = useForm<FormSendApplication>();

//     const application = location.state?.application as Application;

//     const [fileData, errorFile, setFileData, handleChangeFile] = useFileData();
//     const [name, setName] = React.useState(application.request_name_organization);
//     const [comment, setComment] = React.useState(application.request_comment);

//     return (
//         <section className="page">
//             <h1 className="title">Заявка</h1>

//             <form className={styles.application__form} action="">
//                 <label className={styles.application__label} htmlFor="name">
//                     <span>Имя организации</span>
//                     <input
//                         className={styles.application__input}
//                         id="name"
//                         value={name}
//                         type="text"
//                         {...register('request_name_organization', {
//                             required: true,
//                             minLength: {
//                                 value: 2,
//                                 message: 'Название не может быть короче двух символов',
//                             },
//                             maxLength: {
//                                 value: 20,
//                                 message: 'Название не может быть длиннее 20 символов',
//                             },
//                             onChange(event) {
//                                 setName(event.target.value);
//                             },
//                         })}
//                     />
//                     {errors.request_name_organization?.message ? (
//                         <span>{errors.request_name_organization.message}</span>
//                     ) : null}
//                 </label>
//                 <label className={styles.application__label} htmlFor="date">
//                     <span>Дата заявки</span>
//                     <input
//                         className={styles.application__input}
//                         id="date"
//                         type="date"
//                         value={application.request_date}
//                         {...register('request_date', {
//                             required: true,
//                         })}
//                     />
//                 </label>
//                 <label className={styles.application__label} htmlFor="comment">
//                     <span>Комментарий</span>
//                     <textarea
//                         className={styles.application__input}
//                         id="comment"
//                         placeholder="Напишите комментарий"
//                         value={comment}
//                         {...register('request_comment', {
//                             required: true,
//                             minLength: {
//                                 value: 10,
//                                 message: 'Комментарий не может быть меньше 10 символов',
//                             },
//                             maxLength: {
//                                 value: 1000,
//                                 message: 'Комментарий не может быть длиннее 1000 символов',
//                             },
//                             onChange(event) {
//                                 setComment(event.target.value);
//                             },
//                         })}
//                     />
//                     {errors.request_comment?.message ? <span>{errors.request_comment.message}</span> : null}
//                 </label>
//                 <label className={styles.application__label}>
//                     <span>Загрузить файлы (до 10):</span>
//                     <input
//                         className={styles.application__input}
//                         type="file"
//                         multiple
//                         accept=".jpg,.jpeg,.png,.bmp,.tiff,.pdf,.doc,.docx,.rtf,.xls,.xlsx"
//                         required={true}
//                         max="10"
//                         onChange={handleChangeFile}
//                     />
//                     {fileData.length === 9 ? <span>Достигнуто максимальное количество файлов</span> : null}
//                 </label>
//                 <FileList files={fileData} setFiles={setFileData} />
//                 <input className={styles.application__btn} type="submit" value={'Сохранить изменения'} />
//             </form>
//         </section>
//     );
// };
