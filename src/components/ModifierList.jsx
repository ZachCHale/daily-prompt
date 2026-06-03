import ModifierPill from './ModifierPill.jsx';

function ModifierList({ modifiers }) {
  return (
    <ul className='modifiers'>
      {modifiers.map(({ category, value }) => (
        <ModifierPill key={category} category={category} value={value} />
      ))}
    </ul>
  );
}

export default ModifierList;
