import './App.css';
import themedPrompts from './data/themedPrompts.js';
import themes from './data/themes.js';
import modifiers from './data/modifiers/modifiers.js';
import categoryMeta from './data/modifiers/categoryMeta.js';

import {
  getDailyPrompt,
  getRandomModifiers,
  getWeeklyTheme,
  getDailyThemedPrompt,
} from './utils/random.js';

function App() {
  const weeklyTheme = getWeeklyTheme(themes);
  const prompt = getDailyThemedPrompt(themedPrompts, weeklyTheme);
  const mods = getRandomModifiers(modifiers);

  return (
    <div>
      <h2 className='weekly-theme'>Weekly Theme: {weeklyTheme}</h2>
      <h1 className='daily-prompt'>{prompt}</h1>
      <ul className='modifiers'>
        {mods.map(({ category, value }) => {
          const { emoji, color } = categoryMeta[category];
          return (
            <li
              key={category}
              className='modifier'
              style={{ backgroundColor: color, color: '#ffffff' }}
            >
              {emoji} {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
