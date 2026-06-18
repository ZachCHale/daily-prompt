import styles from './App.module.css';
import themedPrompts from './data/themedPrompts.js';
import themes from './data/themes.js';
import modifiers from './data/modifiers.js';
import {
  getRandomModifiers,
  getWeeklyTheme,
  getDailyThemedPrompt,
} from './utils/random.js';
import WeeklyTheme from './components/WeeklyTheme/WeeklyTheme.jsx';
import DailyPrompt from './components/DailyPrompt/DailyPrompt.jsx';
import ModifierList from './components/ModifierList/ModifierList.jsx';

function App() {
  const weeklyTheme = getWeeklyTheme(themes);
  const prompt = getDailyThemedPrompt(themedPrompts, weeklyTheme);
  const dailyModifiers = getRandomModifiers(modifiers);

  return (
    <div className={styles.app}>
      <WeeklyTheme theme={weeklyTheme} />
      <main className={styles.main}>
        <DailyPrompt prompt={prompt} modifiers={dailyModifiers} />
      </main>
    </div>
  );
}

export default App;
