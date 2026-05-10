import { gamesData } from "../db/info.js";

const resultArea = document.getElementById('game-result-display');
const cards = document.querySelectorAll('.series-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const seriesId = card.getAttribute('data-series');
        const data = gamesData[seriesId];

        if (data) {
            resultArea.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.desc}</p>
                <strong>Основні ігри франшизи:</strong>
                <ul>
                    ${data.list.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;

            resultArea.classList.remove('result-hidden');

            resultArea.scrollIntoView({ behavior: 'smooth' });
        }
    });
});