
import { object, string, array } from 'yup';

export const initialValues = {
  username: '',
  email: '',
  password: '',
  language: []
}

export const languages = ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python'];

export const validationSchema = object({
  username: string().min(3, "petq e lini 3 taric voch pakas").matches(/^([^0-9]*)$/, "tiv ka").required('partadir e!'),
  email: string().email().required(),
  password: string().min(8).max(20).matches(/^[A-Z]/, 'Password must by atart with Uppercase').required(),
  language: array().of(string())
})