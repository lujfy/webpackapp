//menu.js
const createMenuPage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const headline = document.createElement('h1') ;
    headline.textContent = "Check out our dishes!"
    pageContent.appendChild(headline) 

    const menuList = document.createElement('div') ;
    menuList.classList.add('menu-list')


    const menuItem1 = document.createElement('div')
    let img1 = document.createElement('img')
    img1.src = 'https://i.pinimg.com/564x/11/2f/77/112f77292e42aff4db60c60152a982ea.jpg'
    let p1 = document.createElement('p')
    p1.textContent = "Fluffy Japanese Soufflé Pancakes"
    menuItem1.appendChild(img1)
    menuItem1.appendChild(p1)

    const menuItem2 = document.createElement('div')
    let img2 = document.createElement('img')
    img2.src = 'https://i.pinimg.com/564x/4d/97/d9/4d97d931a5955b4fd51314ab76b4d4e0.jpg'
    let p2 = document.createElement('p')
    p2.textContent = "cheesy marinara sauce"
    menuItem2.appendChild(img2)
    menuItem2.appendChild(p2)

    const menuItem3 = document.createElement('div')
    let img3 = document.createElement('img')
    img3.src = 'https://i.pinimg.com/564x/e9/a5/5a/e9a55a84854bc28bd50ab81960f371e8.jpg'
    let p3 = document.createElement('p')
    p3.textContent = "Pudding"
    menuItem3.appendChild(img3)
    menuItem3.appendChild(p3)

    const menuItem4 = document.createElement('div')
    let img4 = document.createElement('img')
    img4.src = 'https://i.pinimg.com/564x/c3/2c/5b/c32c5b737eba4acee6604c96d85bf286.jpg'
    let p4 = document.createElement('p')
    p4.textContent = "Blueberry compote cheesecake"
    menuItem4.appendChild(img4)
    menuItem4.appendChild(p4)

    const menuItem5 = document.createElement('div')
    let img5 = document.createElement('img')
    img5.src = 'https://i.pinimg.com/564x/a3/95/c7/a395c70fc26a109ee9c7f92c69a219b4.jpg'
    let p5 = document.createElement('p')
    p5.textContent = "Dango"
    menuItem5.appendChild(img5)
    menuItem5.appendChild(p5)

    const menuItem6 = document.createElement('div')
    let img6 = document.createElement('img')
    img6.src = 'https://i.pinimg.com/564x/7d/ea/c0/7deac0816c96d361c20c8bda3f94f8b1.jpg'
    let p6 = document.createElement('p')
    p6.textContent = "Onigiri : Japanese Riceball"
    menuItem6.appendChild(img6)
    menuItem6.appendChild(p6)

    
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuList.appendChild(menuItem5);
    menuList.appendChild(menuItem6);

    pageContent.appendChild(menuList)
    content.appendChild(pageContent)
}

export default createMenuPage ;