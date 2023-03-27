import devil from './devil.png';
import bascaiola from './bascaiola.png';
import chickbacon from './chickbacon.png';
import chickfeast from './chickfeast.png';
import extravaganza from './extravaganza.png';
import mexicana from './mexicana.png';
import pepperoni from './pepperoni.png';
import rustic from './rustic.png';
import tuscany from './tuscany.png';
import veg from './veg.png';
import cheesy from './cheesy.png';
import classic from './classic.png';
export default function menuLoad() {
    let content = document.querySelector('#content')
    let child,img,dishName,dishDesc;
    let container = document.createElement('div')
    container.style.cssText = 'display: grid;max-width: 750px;min-width: 300px;flex: 1 1 0; padding: 10px;margin: 30px auto;box-sizing: border-box; grid-template-columns: repeat(auto-fit,minmax(180px,1fr)); gap: 30px; background-color: rgba(0,0,0,0.5);'
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = bascaiola;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Bascaiola';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, sausages, onions and corn.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = chickbacon;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Chicken Bacon';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, chicken, bacon, bell peppers, onions and tomatoes.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = chickfeast;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Chicken Feast';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, chicken breast, mushrooms and corn.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = devil;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Devil';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, pepperoni, black olives, tomatoes and chorizo.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = extravaganza;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Extravaganza';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and 100% natural mozzarella, ham, pepperoni, onions, bell peppers, mushrooms, black olives, corn, and sausages.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = mexicana;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Mexicana';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, chorizo, bacon, ham and jalapeno.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = pepperoni;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Pepperoni';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, pepperoni, extra pepperoni and extra mozzarella.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = rustic;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Rustic';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Creamy sauce, 100% natural mozzarella, cheese, tomatoes, onions and bacon.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = tuscany;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Tuscany';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, bacon, tomatoes and cheese.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = veg;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Vegetarian';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, bell peppers, tomatoes, onions, mushrooms, black olives and corn.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = cheesy;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Cheesy';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, cheddar and telemea.';
    child.appendChild(dishDesc);
    container.append(child)
    child = document.createElement('div')
    child.classList.add('card');
    img = new Image();
    img.src = classic;
    child.appendChild(img)
    dishName = document.createElement('h4');
    dishName.textContent = 'Classic';
    child.appendChild(dishName);
    dishDesc = document.createElement('h6')
    dishDesc.textContent = 'Pizza sauce and mozzarella 100% natural, ham, black olives and mushrooms.';
    child.appendChild(dishDesc);
    container.append(child)
    content.appendChild(container)
    let tabs = document.querySelector('#tabs')
    tabs.children[0].classList.remove('active')
    tabs.children[1].classList.add('active')
    tabs.children[2].classList.remove('active')
}