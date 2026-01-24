function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function generateRandomScore() {
  const r = Math.floor(Math.random() * 5);
  const w = Math.floor(Math.random() * 3);

  document.getElementById('score-raja').textContent = r;
  document.getElementById('score-adv').textContent = w;

  const msg = document.getElementById('result-message');
  if (r > w) msg.textContent = "💚 Victoire du Raja !";
  else if (r < w) msg.textContent = "😔 Défaite...";
  else msg.textContent = "🤝 Match nul";
}
function scrollToSection(id) { 
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
 } 
 const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', () => { sections.forEach(section => { const rect = section.getBoundingClientRect();
     if(rect.top < window.innerHeight - 100){ 
      section.classList.add('visible');
     } 
    });
  });
