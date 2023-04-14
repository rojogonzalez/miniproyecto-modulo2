/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);

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

export default{
    newCard,
    $
}