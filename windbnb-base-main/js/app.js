import data from './data.js'
import dom from './dom.js'

const datos = await data.getData();

const hosts = dom.$('#hosts');

datos.forEach(element => {
    const card = dom.newCard(element);
    hosts.appendChild(card);

    let superHost = element.superHost;
    /*console.log(superHost);*/

    if (superHost !== true) {
        let padre = dom.$('.super-host').parentNode; //Guardo en la variable 'padre' el nodo padre del span class=super-host
        console.log(element.title+"  "+superHost); //Reviso que se esté cumpliendo la condición y solo hayan superHost false
        console.log(padre); //Verifico que el nodo almacenado en 'padre' sea el correcto
        let a = dom.$('.super-host');
        console.log(a);
        padre.removeChild(a);
        /*dom.$('.super-host').parentNode.removeChild(dom.$('.super-host'))*/
    }       
        
});




