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
const form = document.getElementById('contactForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const res = await fetch("https://formspree.io/f/mzdarvwq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert("Message envoyé ✅");
        form.reset();
      } else {
        alert("Erreur ❌ : vérifie ton formulaire et ton Formspree ID");
      }
    } catch (err) {
      alert("Erreur réseau ❌");
    }
  });
