import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.loginWindow}>
        <div className={styles.loggedIn}>Zostałeś zalogowany</div>
      </div>
    </div>
  );
}
