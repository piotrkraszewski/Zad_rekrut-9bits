import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useRouter } from 'next/router';
import { loginSchema } from 'utils/validationSchemas';
import TopRouting from 'components/TopRouting';
import styles from 'styles/Home.module.scss';

export default function Home() {
  const router = useRouter();

  const loginForm = useForm({
    validate: yupResolver(loginSchema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (data) => {
    console.log(data);
    router.push(`/loggedIn`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginWindow}>
        <TopRouting />
        <form className={styles.loginForm} noValidate>
          <TextInput label="Email" {...loginForm.getInputProps('email')} />
          <PasswordInput label="Hasło" {...loginForm.getInputProps('password')} />
          <Button type="submit" onClick={loginForm.onSubmit(handleSubmit)}>
            Zaloguj się
          </Button>
        </form>
      </div>
    </div>
  );
}
