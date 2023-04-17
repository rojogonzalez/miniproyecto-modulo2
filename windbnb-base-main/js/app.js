import data from './data.js'
import dom from './dom.js'

const datos = await data.getData();

const locations = data.getLocations(datos);
dom.showLocations(locations, '#locationsList')

const locationsList = [...dom.$('#locationsList').children];


let activeLocation = 0;

locationsList.forEach((loc, index) => {

    loc.addEventListener('click', () => {
        if (loc.classList.contains('activeLocation')) return;
        loc.classList.add('activeLocation');
        locationsList[activeLocation].classList.remove('activeLocation');
        activeLocation = index
        let filtro = loc.children[1].textContent;

        //Filtrando usando loc
        const filtered = filtro === 'Everywhere' ? datos : data.filtrar(datos, filtro);
        console.log(filtered);

        let textBox = dom.$('#addLocation');
        let textBox2 = dom.$('#addLocation2');
        let textBox3 = dom.$('#staysIn')
        textBox.textContent = `${filtro === "Everywhere" ? "Add location" : filtro}`;
        textBox2.textContent = `${filtro === "Everywhere" ? "Add location" : filtro}`;
        textBox3.textContent = `Stays in ${filtro === "Everywhere" ? "Everywhere" : filtro}`;
        console.log(textBox3);

        const searchLocation = dom.$('#searchLocation');
        searchLocation.addEventListener('click', () => {
            dom.showCards(filtered);
        })

        //dom.showCards(filtered);
    })


})


const cards = dom.showCards(datos);




