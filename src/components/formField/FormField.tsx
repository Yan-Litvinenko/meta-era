import React from 'react';
import styles from './FormField.module.scss';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface FormFieldProps {
    id: string;
    type: 'text' | 'date' | 'textarea' | 'file' | 'password' | 'checkbox';
    labelClass?: string;
    textLabel?: string;
    register?: UseFormRegisterReturn;
    error?: FieldError;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    multiple?: boolean;
    accept?: string;
    checked?: boolean;
    max?: number;
}

export const FormField = (props: FormFieldProps): React.JSX.Element => {
    const { textLabel, id, type, register, multiple, accept, max } = props;
    const { error, value, placeholder, onChange, checked, labelClass } = props;

    return (
        <label className={labelClass ? labelClass : styles.label} htmlFor={id}>
            <span className={styles.title}>{textLabel}</span>
            {type === 'textarea' ? (
                <textarea
                    className={styles.input}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    {...register}
                    onChange={register ? register.onChange : onChange}
                    required={true}
                />
            ) : (
                <input
                    className={styles.input}
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    {...register}
                    onChange={register ? register.onChange : onChange}
                    multiple={multiple}
                    accept={accept}
                    max={max}
                    checked={checked}
                    required={true}
                />
            )}
            {error && <span className={styles.error}>{error.message}</span>}
        </label>
    );
};
