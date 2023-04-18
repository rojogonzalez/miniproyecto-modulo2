/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);

//Función para crear una card
const newCard = (obj) => {
    const div = document.createElement('div');
    
    div.className += "col mb-4 border-0"

    div.innerHTML = `
    <div class="img mb-2 card-img-modified">
    <img class="w-100 h-100 rounded-4 image-modified" src="${obj.photo}" alt="${obj.title}">
    </div>

    <section class="d-flex justify-content-between mb-0">
    <div>
        <span class=" ${!obj.superHost ? "hide" : ""} border border-black rounded-pill px-2 py-1 text-light-emphasis super-host">SUPER HOST</span>
        <span class="text-body-tertiary py-1 description">${obj.type}</span>
    </div>
    <div>
        <span class="material-symbols-outlined text-danger star">star</span>
        <span class="text-light-emphasis py-2 rate">${obj.rating}</span>
    </div>
    </section>
    <p class="fw-semibold text-body-emphasis text-start py-1 card-title">
    ${obj.title}
    </p>
    `;

    return div;
}

//Función para mostrar las cards
const showCards = (arr) => {
    hosts.innerHTML = '';

    arr.forEach(element => {
        const card = newCard(element);
        hosts.appendChild(card);     
    });
}

//Función para mostrar las locaciones Ciudad, País disponibles
const showLocations = (locations, where) => {

    const locationsList = $(where);

    locations.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="material-symbols-outlined me-3"> 
        location_on
        </span><span class="my-1">${element}<span>`;
        li.className += `ms-4 my-2 ps-2 text-start locations rounded-pill `;
        locationsList.appendChild(li);
        return li;
    });
}



export default{
    newCard,
    showCards,
    $,
    showLocations,
}