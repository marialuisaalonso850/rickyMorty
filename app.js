const main = document.querySelector('main');
const url = "https://rickandmortyapi.com/api/character";

async function example(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const createCard = (character) => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    
    const image = document.createElement('img')
    image.src=character.image;
    image.crs= character.image;
    card.appendChild(image)

    const name = document.createElement('h1');
    name.textContent = `Name: ${character.name}`;
    card.appendChild(name);

    const status = document.createElement('h1');
    status.textContent = `Status: ${character.status}`;
    card.appendChild(status);

    const episode = document.createElement('h1');
    episode.textContent = `Episode: ${character.episode[0]}`;
    card.appendChild(episode);

    return card;
};

window.addEventListener('DOMContentLoaded', async () => {
    const characterData = await example(url);

    const characterContainer = document.getElementById('characterContainer');
    characterData.results.forEach((character) => {
        const card = createCard(character);
        characterContainer.appendChild(card);
    });
});


