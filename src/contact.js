import map from './map.png';
export default function contactLoad() {
    let content = document.querySelector('#content')
    let child;
    let container = document.createElement('div')
    container.style.cssText = 'width: 500px;font-family: Roboto;padding: 40px;height: 450px;display: flex;gap: 35px;flex-direction: column;overflow-x: hidden;background-color: rgba(0,0,0,0.5);'
    child = document.createElement('h1');
    child.textContent = 'Home Delivery';
    child.style.cssText = 'flex: 0 1 0;color: white;margin: 0px auto; '
    container.appendChild(child)
    child = document.createElement('p');
    child.textContent = 'Get free delivery on orders of $50 and above';
    child.style.cssText = 'flex: 0 1 0;color: white;margin: 0px auto;font-size: 1.3em;'
    container.appendChild(child)
    child = document.createElement('p');
    child.textContent = '📞:891 945 325';
    child.style.cssText = 'flex: 0 1 0;color: white;margin: 0px auto;font-size: 3em;'
    container.appendChild(child)
    child = new Image();
    child.src = map;
    child.style.cssText = 'flex: 2 1 0;width: auto;'
    container.appendChild(child)
    content.appendChild(container)
    let tabs = document.querySelector('#tabs')
    tabs.children[0].classList.remove('active')
    tabs.children[1].classList.remove('active')
    tabs.children[2].classList.add('active')
}