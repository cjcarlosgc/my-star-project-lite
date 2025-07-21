import { HomeProps } from '@/types/home-props';
import styles from './home.module.sass';

export const Home = (props: HomeProps) => {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.homeTitle}>
        <h1>hola {props.userFullName}</h1>
      </main>
    </div>
  );
};
