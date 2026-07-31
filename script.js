// ---------- floating hearts background ----------
const heartsLayer = document.getElementById('hearts-layer');
const heartSymbols = ['♡', '❤', '✿'];

function spawnHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = 14 + Math.random() * 22 + 'px';
  heart.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
  heart.style.animationDuration = 9 + Math.random() * 8 + 's';
  heartsLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 18000);
}

setInterval(spawnHeart, 900);
for (let i = 0; i < 6; i++) setTimeout(spawnHeart, i * 300);

// ---------- music toggle ----------
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play()
      .then(() => {
        musicBtn.classList.add('playing');
        musicIcon.textContent = '❚❚';
        musicBtn.title = 'Поставить на паузу';
      })
      .catch(() => {
        alert('Добавь песню под именем "our-song.mp3" в папку assets/music, чтобы включить воспроизведение.');
      });
  } else {
    music.pause();
    musicBtn.classList.remove('playing');
    musicIcon.textContent = '♪';
    musicBtn.title = 'Включить нашу песню';
  }
});

// ---------- reasons hearts ----------
const revealText = document.getElementById('reveal-text');
document.querySelectorAll('.reason-heart').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('found');
    revealText.textContent = btn.dataset.text;
  });
});
