import data from './data.js'
import dom from './dom.js'

const datos = await data.getData();

const hosts = dom.$('#hosts');

datos.forEach(element => {
    /*console.log(element);*/
    const card = dom.newCard(element);
    hosts.appendChild(card);

    let superHost = element.superHost;
    /*console.log(superHost);*/

    if (superHost!==true) {
        /*let padre = dom.$('.super-host').parentNode;
        console.log(element.title+"  "+superHost);
        console.log(padre);
        let a = dom.$('.super-host');
        padre.removeChild(a);*/
        dom.$('.super-host').parentNode.removeChild(dom.$('.super-host'))
    }       
        
});




