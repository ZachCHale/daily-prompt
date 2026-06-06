//const SPOOF_DATE = '2026/05/23';
const SPOOF_DATE = null;

function getDate() {
  return SPOOF_DATE ? new Date(SPOOF_DATE) : new Date();
}

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export function getDailyPrompt(prompts) {
  const today = getDate();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  const index = Math.floor(seededRandom(seed) * prompts.length);
  return prompts[index];
}

export function getWeeklyTheme(themes) {
  const now = getDate();
  // Find the most recent Sunday
  const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
  const mostRecentSunday = new Date(now);
  mostRecentSunday.setDate(now.getDate() - dayOfWeek);

  // Use that Sunday as the seed
  const seed =
    mostRecentSunday.getFullYear() * 10000 +
    (mostRecentSunday.getMonth() + 1) * 100 +
    mostRecentSunday.getDate();

  const index = Math.floor(seededRandom(seed) * themes.length);
  return themes[index];
}

export function getDailyThemedPrompt(prompts, theme) {
  const filtered = prompts.filter((p) => p.themes.includes(theme));
  const today = getDate();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  const index = Math.floor(seededRandom(seed) * filtered.length);
  return filtered[index].prompt;
}

export function getRandomModifiers(modifiers, count = 3) {
  const categories = Object.keys(modifiers);
  const shuffledCategories = [...categories].sort(() => Math.random() - 0.5);
  const selectedCategories = shuffledCategories.slice(0, count);
  return selectedCategories.map((category) => {
    const options = modifiers[category];
    const value = options[Math.floor(Math.random() * options.length)];
    return { category, value };
  });
}

export function getWeekDateRange() {
  const now = getDate();
  const dayOfWeek = now.getDay();

  const sunday = new Date(now);
  sunday.setDate(now.getDate() - dayOfWeek);

  const saturday = new Date(sunday);
  saturday.setDate(sunday.getDate() + 6);

  const format = (date) =>
    date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return `${format(sunday)} - ${format(saturday)}`;
}
