import styles from './WeeklyTheme.module.css';
import { getWeekDateRange } from '../utils/random.js';

function WeeklyTheme({ theme }) {
  const capitalizedTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
  const dateRange = getWeekDateRange();

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.label}>Weekly Theme</p>
        <p className={styles.theme}>{capitalizedTheme}</p>
        <p className={styles.dateRange}>{dateRange}</p>
      </div>
    </div>
  );
}

export default WeeklyTheme;
