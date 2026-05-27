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

export function getRandomModifiers(modifiers, count = 3) {
  const shuffled = [...modifiers].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
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
