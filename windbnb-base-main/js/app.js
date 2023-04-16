import data from './data.js'
import dom from './dom.js'

const datos = await data.getData();

const locationsList = dom.$('#locationsList');

const locations = data.getLocations(datos);

dom.showLocations (locations, '#locationsList')

datos.forEach(element => {
    const card = dom.newCard(element);
    hosts.appendChild(card);  
        
});




