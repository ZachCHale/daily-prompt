function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export function getDailyPrompt(prompts) {
  const today = new Date();
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
