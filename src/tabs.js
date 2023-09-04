import aboutUs from "./about";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


console.log("hi")
const createtabs = () => {
    const content = document.querySelector("#content")
    const navbar = document.createElement('div')
    navbar.setAttribute('id' , 'navbar')

    const div1 = document.createElement('div') ;
    const div2 = document.createElement('div') ;
    const div3 = document.createElement('div') ;

    div1.setAttribute('id' , 'home-btn')
    div2.setAttribute('id' , 'menu-btn')
    div3.setAttribute('id' , 'about-btn')

    div1.classList.add('tabs')
    div2.classList.add('tabs')
    div3.classList.add('tabs')

    div1.textContent = 'Home'
    div2.textContent = 'Menu'
    div3.textContent = 'About'

    navbar.appendChild(div1)
    navbar.appendChild(div2)
    navbar.appendChild(div3)

    content.appendChild(navbar)


    div1.addEventListener("click" , () => {
        clearContent()
        createRestaurantHomePage();
    })
    
    div2.addEventListener("click" , () => {
        clearContent()
        createMenuPage();
    })

    div3.addEventListener("click" , () => {
        clearContent()
        aboutUs()
    })


}

function clearContent() {
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page-content')

    if(pageContent) {
        content.removeChild(pageContent)
    }
}

export default createtabs