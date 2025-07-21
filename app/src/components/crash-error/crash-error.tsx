import styles from './crash-error.module.sass';
import { CrashErrorProps } from '@/types/crash-error-props';

export const CrashError = (props: CrashErrorProps) => (
  <div className={styles.errorFullContainer}>
    <div className={styles.errorBox}>
      <h2 className={styles.errorTitle}>¡Error!</h2>
      <p className={styles.errorMessage}>{props.message}</p>
    </div>
  </div>
);