import image from './homeimage.jpg';
export default function homeLoad() {
    let content = document.querySelector('#content')
    let container,child;
    container = document.createElement('div')
    container.style.cssText = 'position: relative;width: 500px;height: 450px;margin: 30px auto;display: flex;align-items: center; flex-direction: column; background-color: rgba(0,0,0,0.5);'  
    child = document.createElement('h3')
    child.textContent = '“Pizza so good, it\'s like it came straight from the fire”'
    child.style.cssText = 'color: white;margin-top: 30px;font-family: Roboto;font-style: italic;flex: 1 1 0;text-align: center;font-size: 2em;'
    container.appendChild(child)
    child = document.createElement('p')
    child.textContent = "- ChatGPT"
    child.style.cssText = 'text-align: right;width: 80%;font-family: Roboto;color: white;margin: -16px auto;font-size: 1.3em;'
    container.appendChild(child)
    child = new Image()
    child.src = image;
    child.style.cssText = 'width: 300px;height: auto;flex: 5 1 0;margin-bottom: 30px;border-radius: 50%;'
    container.appendChild(child)
    content.appendChild(container)
    let tabs = document.querySelector('#tabs')
    tabs.children[0].classList.add('active')
    tabs.children[1].classList.remove('active')
    tabs.children[2].classList.remove('active')
}