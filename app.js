const dashboard = document.querySelector('.dashboard');
const addBtn = document.getElementById('addCardBtn');
const modal = document.getElementById('cardModal');
const form = document.getElementById('cardForm');
addBtn.addEventListener('click', () => modal.classList.remove('hidden'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});
form.addEventListener('submit', e => {
    e.preventDefault();
    const title = form.cardTitle.value;
    const url = form.cardUrl.value;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${title}</h3><a href="${url}" target="_blank">${url}</a>`;
    dashboard.appendChild(card);
    saveCard({ title, url });
    form.reset();
    modal.classList.add('hidden');
  });
  function saveCard(card) {
    const cards = JSON.parse(localStorage.getItem('cards') || '[]');
    cards.push(card);
    localStorage.setItem('cards', JSON.stringify(cards));
  }
  function loadCards() {
    return JSON.parse(localStorage.getItem('cards') || '[]');
  }
  function renderCards() {
    loadCards().forEach(({ title, url }) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${title}</h3><a href="${url}" target="_blank">${url}</a>`;
      dashboard.appendChild(card);
    });
  }
  document.addEventListener('DOMContentLoaded', renderCards);
    