// restaurant.js

const createRestaurantHomePage = () => {

    const content = document.querySelector("#content")
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    // create and append headline
    const headline = document.createElement('h1') ;
    headline.textContent = "Welcome to my restaurant!"
    pageContent.appendChild(headline)

    // create and append image element
    const image = document.createElement('img') ;
    image.src = 'https://i.pinimg.com/564x/6e/1e/30/6e1e30a217a6440f579696316590f6d8.jpg'
    image.height = '500'
    image.width = '286.5'
    pageContent.appendChild(image)

    const image2 = document.createElement('img') ;
    image2.src = 'https://i.pinimg.com/564x/db/4f/5e/db4f5e305a17aef9fac2526e5d0a3984.jpg'
    image2.height = '500'
    pageContent.appendChild(image2)

    const image3 = document.createElement('img') ;
    image3.src = 'https://i.pinimg.com/564x/8d/20/03/8d2003580caf0bd81680678baf3ab743.jpg'
    image3.height = '500'
    image3.width = "125"
    pageContent.appendChild(image3)

    const image4 = document.createElement('img') ;
    image4.src = 'https://i.pinimg.com/564x/79/1d/61/791d61972ba8fc0f4cc85ce8fb8ed769.jpg'
    image4.height = '500'
    pageContent.appendChild(image4)

    const image5 = document.createElement('img') ;
    image5.src = 'https://i.pinimg.com/564x/df/ca/6f/dfca6f9e34d688a453e24b5cbc4cd4b8.jpg'
    image5.height = '500'
    pageContent.appendChild(image5)

      

    // create and append copy element
    const copy = document.createElement('p') ;
    copy.textContent = "We serve the best food in town"
    pageContent.appendChild(copy)

    

    content.appendChild(pageContent)

}

export default createRestaurantHomePage ;