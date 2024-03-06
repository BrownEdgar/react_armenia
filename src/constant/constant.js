import { object, string } from 'yup';

export const initialValues = {
    email: '',
    password: ''
}

export const validationSchema = object({
    email: string().email().required(),
    password: string().matches(/^(?=.*[a-zA-Z])(?=.*\d).*$/).required()


})
