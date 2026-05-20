import './App.css';
import drawingPrompts from './data/prompts/drawing';
import { getDailyPrompt } from './utils/random';

function App() {
  const prompt = getDailyPrompt(drawingPrompts);
  return <h1 className='daily-prompt'>{prompt}</h1>;
}

export default App;
