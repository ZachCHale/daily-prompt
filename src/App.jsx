import themedPrompts from './data/themedPrompts.js';
import themes from './data/themes.js';
import modifiers from './data/modifiers.js';
import {
  getRandomModifiers,
  getWeeklyTheme,
  getDailyThemedPrompt,
} from './utils/random.js';
import WeeklyTheme from './components/WeeklyTheme.jsx';
import DailyPrompt from './components/DailyPrompt.jsx';
import ModifierList from './components/ModifierList.jsx';

function App() {
  const weeklyTheme = getWeeklyTheme(themes);
  const prompt = getDailyThemedPrompt(themedPrompts, weeklyTheme);
  const dailyModifiers = getRandomModifiers(modifiers);

  return (
    <div>
      <WeeklyTheme theme={weeklyTheme} />
      <DailyPrompt prompt={prompt} />
      <ModifierList modifiers={dailyModifiers} />
    </div>
  );
}

export default App;
