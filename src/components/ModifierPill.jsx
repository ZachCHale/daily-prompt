import categoryMeta from '../data/categoryMeta.js';

function ModifierPill({ category, value }) {
  const { emoji, color } = categoryMeta[category];
  return (
    <li
      className='modifier'
      style={{ backgroundColor: color, color: '#ffffff' }}
    >
      {emoji} {value}
    </li>
  );
}

export default ModifierPill;
