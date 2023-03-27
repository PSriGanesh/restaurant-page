import home from './home.js';
import menu from './menu.js';
import contact from './contact.js'
import style from './style.css'
let tabs = document.querySelector('#tabs')
let content = document.querySelector('#content')
home()
tabs.children[0].addEventListener('click',()=>{
    content.innerHTML=''
    home();
})
tabs.children[1].addEventListener('click',()=>{
    content.innerHTML=''
    menu();
})
tabs.children[2].addEventListener('click',()=>{
    content.innerHTML=''
    contact();
})