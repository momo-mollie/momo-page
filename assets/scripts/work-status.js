// Made by Mollie Norton, with the help of Generative AI

document.addEventListener('DOMContentLoaded', () => {
  const pill = document.getElementById('work-status');

  const sydneyString = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });
  const sydneyNow = new Date(sydneyString);

  const hour = sydneyNow.getHours();
  const day  = sydneyNow.getDay();

  // Monday–Friday is day 1–5, hours 9–16 inclusive → online
  const isWeekday = day >= 1 && day <= 5;
  const inBusinessHours = hour >= 9 && hour < 17;
  const isOpen = isWeekday && inBusinessHours;

  pill.textContent = isOpen ? 'Online' : 'Offline';
  pill.style.backgroundColor = isOpen ? '#46ae5eff' : '#f16371ff';
});
