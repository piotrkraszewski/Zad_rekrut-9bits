import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Niepoprawny adres email').required("Hasło nie może być puste"),
  password: Yup.string().required("Hasło nie może być puste"),
});