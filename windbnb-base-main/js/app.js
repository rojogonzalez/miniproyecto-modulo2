import data from './data.js'
import dom from './dom.js'

const datos = await data.getData();

datos.forEach(element => {
    const card = dom.newCard(element);
    hosts.appendChild(card);  
        
});




