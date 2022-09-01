import styles from 'styles/Home.module.scss';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.routes}>
      <div
        className={`${styles.login} ${router.pathname === '/' ? styles.active : ''}`}
        onClick={() => router.push(`/`)}
      >
        Zaloguj się
      </div>
      <div
        className={`${styles.createAccount} ${router.pathname === '/register' ? styles.active : ''}`}
        onClick={() => router.push(`/register`)}
      >
        Załóż konto
      </div>
    </div>
  );
}
