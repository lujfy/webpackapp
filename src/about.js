const aboutUs = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const introduction = document.createElement('div')
    introduction.setAttribute('class' , 'part1')


    const headline = document.createElement('h1') ;
    headline.textContent = "Project made by lujfy"
    introduction.appendChild(headline)

    const image = document.createElement('img') ;
    image.src = 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cat-default-avatar-image_2246581.jpg'
    image.height = '100'
    introduction.appendChild(image)

    pageContent.appendChild(introduction)


    const formdiv = document.createElement('div')
    formdiv.setAttribute('class' ,'part2' )
    let HTMLform = `
    <form action="#">

    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value=""><br>

    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value=""><br><br>

    <button type="submit" value="Submit">Submit</button>
    </form> 
            `

    formdiv.innerHTML = HTMLform
    
    pageContent.appendChild(formdiv)

    content.appendChild(pageContent)
}

export default aboutUs ;