function loadData(){
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        displayCards(cardsData);
    }, 1000);
}

function sortOption(option){
    document.getElementById("sortedOption").innerText = option;
    sortCards(option);
    toggleDropdown();
}

function sortCards(option){
    let sortedCards = [...cardsData];

    if (option === 'Сначала дорогие') {
        sortedCards.sort((a,b) => new Date(b.price) - new Date(a.price));
    } else if (option === 'Сначала доступные') {
        sortedCards.sort((a,b) => new Date(a.price) - new Date(b.price));
    }

    displayCards(sortedCards);
}

const cardsData = [
    { img: './images/image1.png',  price: 30000, name: 'Каменный остров', supportText: 'Жилет с нашивкой компасом'},
    { img: './images/image2.png',  price: 18800, name: 'АМИ Париж', supportText: 'Полосатая рубашка с коротким рукавом'},
    { img: './images/image3.png',  price: 47300, name: 'Вквадрате2', supportText: 'Укороченные брюки с вышитым логотипом'},
    { img: './images/image4.png',  price: 19000, name: 'Акне Студия', supportText: 'Полосатый двубортный блейзер'}
]

function displayCards(cards){
    const container = document.getElementById("cardsContainer");
    container.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card-item");

        const imageElement = document.createElement("img");
        imageElement.src = card.img;

        const priceElement = document.createElement("div");
        priceElement.classList.add("heading");
        priceElement.innerText = `${card.price} руб`;

        const footerElement = document.createElement("div");
        footerElement.classList.add("footer-section");

        const brandElement = document.createElement("div");
        brandElement.classList.add("brand-name");

        const textElement = document.createElement("div");
        textElement.classList.add("text");
        textElement.innerText = 'Бренд';

        const nameElement = document.createElement("div");
        nameElement.classList.add("name");
        nameElement.innerText = `${card.name}`;

        const supportingTextElement = document.createElement("div");
        supportingTextElement.classList.add("supporting-text");
        supportingTextElement.innerText = `${card.supportText}`;

        brandElement.appendChild(textElement);
        brandElement.appendChild(nameElement);

        footerElement.appendChild(brandElement);
        footerElement.appendChild(supportingTextElement);

        cardElement.appendChild(imageElement);
        cardElement.appendChild(priceElement);
        cardElement.appendChild(footerElement);

        container.appendChild(cardElement);
    });
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const isVisible = dropdown.style.display === 'block';
    
    document.getElementById('filter-dropdown').style.display = 'none';
    document.getElementById('sort-dropdown').style.display = 'none';
    
    dropdown.style.display = isVisible ? 'none' : 'block';
}

window.onclick = function(event) {
    if (!event.target.closest('.filter-button') && !event.target.closest('.sort-button') && !event.target.closest('.dropdown')) {
        document.getElementById('filter-dropdown').style.display = 'none';
        document.getElementById('sort-dropdown').style.display = 'none';
    }
}
