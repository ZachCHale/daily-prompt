import './App.css';
import drawingPrompts from './data/prompts/prompts.js';
import modifiers from './data/modifiers/modifiers.js';

import { getDailyPrompt, getRandomModifiers } from './utils/random';

function App() {
  const prompt = getDailyPrompt(drawingPrompts);
  const mods = getRandomModifiers(modifiers);

  return (
    <div>
      <h1 className='daily-prompt'>{prompt}</h1>
      <ul className='modifiers'>
        {mods.map((modifier) => (
          <li key={modifier} className='modifier'>
            {modifier}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
