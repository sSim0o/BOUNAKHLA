function generateRandomScore() {
  r = Math.floor(Math.random() * 5);
  w = Math.floor(Math.random() * 3);

  document.getElementById('score-raja').textContent = r;
  document.getElementById('score-adv').textContent = w;

  msg = document.getElementById('result-message');
  if (r > w) msg.textContent = "💚 Victoire du Raja !";
  else if (r < w) msg.textContent = "😔 Défaite...";
  else msg.textContent = "🤝 Match nul";
}
