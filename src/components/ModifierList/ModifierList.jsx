import styles from './ModifierList.module.css';
import ModifierPill from '../ModifierPill/ModifierPill.jsx';

function ModifierList({ modifiers }) {
  return (
    <ul className={styles.list}>
      {modifiers.map(({ category, value }) => (
        <ModifierPill key={category} category={category} value={value} />
      ))}
    </ul>
  );
}

export default ModifierList;
