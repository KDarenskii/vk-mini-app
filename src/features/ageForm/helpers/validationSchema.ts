import * as yup from 'yup';

export const ageFormSchema = yup.object({
  name: yup
    .string()
    .required('Обязательное поле')
    .matches(/^[A-Za-z]+$/, 'Имя должно содержать только латинские буквы'),
});
