import data from './data.js'
import dom from './dom.js'

const datos = await data.getData();

const locations = data.getLocations(datos);
dom.showLocations(locations, '#locationsList')

const locationsList = [...dom.$('#locationsList').children];
const cards = dom.showCards(datos);

let activeLocation = 0;

let contadorAdultos = 0;
let sumaAdultos = dom.$('#sumaAdultos');

let contadorNinos = 0;
let sumaNinos = dom.$('#sumaNinos');

let totalGuests = 0;
let addGuests = dom.$('#addGuests');

//Filtro por cantidad de Guests

let addAdult = dom.$('#addAdult');
addAdult.addEventListener('click', () => {
    contadorAdultos++;
    totalGuests++;
    sumaAdultos.innerText = `${contadorAdultos}`;
    addGuests.innerText = `${totalGuests == '0' ? 'Add guests' : totalGuests}`;
});

let subtractAdult = dom.$('#subtractAdult');
subtractAdult.addEventListener('click', () => {
    contadorAdultos--;
    if (contadorAdultos < 0) contadorAdultos = 0;
    totalGuests--;
    if (totalGuests < 0) totalGuests = 0;
    sumaAdultos.innerText = `${contadorAdultos}`;
    addGuests.innerText = `${totalGuests == '0' ? 'Add guests' : totalGuests}`;
})

let addChild = dom.$('#addChild');
addChild.addEventListener('click', () => {
    contadorNinos++;
    totalGuests++;
    sumaNinos.innerText = `${contadorNinos}`;
    addGuests.innerText = `${totalGuests == '0' ? 'Add guests' : totalGuests}`;
});

let subtractChild = dom.$('#subtractChild');
subtractChild.addEventListener('click', () => {
    contadorNinos--;
    if (contadorNinos < 0) contadorNinos = 0;
    totalGuests--;
    if (totalGuests < 0) totalGuests = 0;
    sumaNinos.innerText = `${contadorNinos}`;
    addGuests.innerText = `${totalGuests == '0' ? 'Add guests' : totalGuests}`;
})

/*locationsList.forEach((loc, index) => {

    loc.addEventListener('click', () => {
        //if (loc.classList.contains('activeLocation')) return;
        loc.classList.add('activeLocation');
        locationsList[activeLocation].classList.remove('activeLocation');
        activeLocation = index
        let filtro = loc.children[1].textContent;

        //Filtrando usando loc
        const filteredByLoc = filtro === 'Everywhere' ? datos : data.filtrar(datos, filtro);

        let filteredByGuests = [];
        filteredByLoc.forEach((loc2) => {

            if (loc2.maxGuests >= addGuests.innerText) filteredByGuests.push(loc2);
            console.log(filteredByGuests);
            //return filteredByGuests;

            console.log(filteredByGuests);

            let textBox = dom.$('#addLocation');
            let textBox2 = dom.$('#addLocation2');
            let textBox3 = dom.$('#staysIn');
            let textBox4 = dom.$('#stays');
            let textBox5 = dom.$('#textBox5');
            textBox.textContent = `${filtro === "Everywhere" ? "Add location" : filtro}`;
            textBox2.textContent = `${filtro === "Everywhere" ? "Add location" : filtro}`;
            textBox3.textContent = `Stays in ${filtro === "Everywhere" ? "Everywhere" : filtro}`;
            textBox4.textContent = filteredByGuests.length;
            textBox5.textContent = `${totalGuests == '0' ? 'Add guests' : totalGuests}`

            const searchLocation = dom.$('#searchLocation');
            searchLocation.addEventListener('click', () => {
                if (addGuests.innerText === 'Add guests') {
                    dom.showCards(filteredByLoc);
                } else {
                    dom.showCards(filteredByGuests);
                };
            })

        });

    })
})*/

let filteredByGuests = [];

/*datos.forEach(loc => {
    if (loc.maxGuests >= addGuests.innerText) filteredByGuests.push(loc);
    console.log(addGuests.innerText);
});*/



let filteredByLoc = [];
let filtro ='Everywhere';
let textBox3 = dom.$('#staysIn');
textBox3.textContent = `Stays in Everywhere`;

locationsList.forEach((loc, index) => {

    loc.addEventListener('click', () => {
        if (loc.classList.contains('activeLocation')) return;
        loc.classList.add('activeLocation');
        locationsList[activeLocation].classList.remove('activeLocation');
        activeLocation = index
        filtro = loc.children[1].textContent;

        //Filtrando usando loc
        filteredByLoc = filtro === 'Everywhere' ? datos : data.filtrar(datos, filtro);

        /*let filteredByGuests = [];
        filteredByLoc.forEach((loc2) => {

            //if (loc2.maxGuests >= addGuests.innerText) filteredByGuests.push(loc2);
            //console.log(filteredByGuests);
            //return filteredByGuests;

            //console.log(filteredByGuests);
        });*/
        let textBox = dom.$('#addLocation');
        let textBox2 = dom.$('#addLocation2');
        
        
        textBox.textContent = `${filtro === "Everywhere" ? "Add location" : filtro}`;
        textBox2.textContent = `${filtro === "Everywhere" ? "Add location" : filtro}`;
        textBox3.textContent = `Stays in ${filtro === "Everywhere" ? "Everywhere" : filtro}`;
        

    })
})

if(filtro=='Everywhere') filteredByLoc=datos;

//dom.showCards(filteredByLoc);
const searchLocation = dom.$('#searchLocation');
searchLocation.addEventListener('click', () => {
    filteredByGuests =[];
    filteredByLoc.forEach(loc => {
        if (loc.maxGuests >= addGuests.innerText) {
            //console.log(filteredByGuests);
            filteredByGuests.push(loc);
            
        }
    });
    let textBox4 = dom.$('#stays');
        let textBox5 = dom.$('#textBox5');
        textBox4.textContent = filteredByGuests.length;
        textBox5.textContent = `${totalGuests == '0' ? 'Add guests' : totalGuests}`;


    console.log(filteredByLoc);
    console.log(totalGuests==0);
    if(totalGuests==0) {
        
        dom.showCards(filteredByLoc);
    }else{
        dom.showCards(filteredByGuests);
    }
})




