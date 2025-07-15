import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header></header>
      <main className={styles.main}>
        <h1>hola mundo</h1>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
