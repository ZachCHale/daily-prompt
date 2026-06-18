import styles from './DailyPrompt.module.css';
import ModifierList from '../ModifierList/ModifierList.jsx';

function DailyPrompt({ prompt, modifiers }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles.card}>
      <p className={styles.date}>{formattedDate}</p>
      <h1 className={styles.prompt}>{prompt}</h1>
      <ModifierList modifiers={modifiers} />
    </div>
  );
}

export default DailyPrompt;
