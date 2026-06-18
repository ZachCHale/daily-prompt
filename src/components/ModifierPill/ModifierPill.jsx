import styles from './ModifierPill.module.css';
import categoryMeta from '../../data/categoryMeta.js';

function ModifierPill({ category, value }) {
  const { emoji, color } = categoryMeta[category];
  return (
    <li className={styles.pill} style={{ backgroundColor: color }}>
      {emoji} {value}
    </li>
  );
}

export default ModifierPill;
