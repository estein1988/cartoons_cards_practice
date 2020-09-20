const base_url = 'http://127.0.0.1:3000/cartoons'
const form = document.getElementById('cartoon-form')

fetch(base_url)
    .then(response => response.json())
    .then(showCartoons) //don't have invoke and pass in Cartoons because .then passess in the result of the .then before

form.addEventListener('submit', submitForm)

function submitForm(event){
    event.preventDefault()

    const formData = new FormData(event.target) //could also just pass in form; target is the entire form. ONLY can submit forms in HTML
    const name = formData.get('name')
    const image_url = formData.get('image_url')
    const cartoon = { name, image_url }

    createCards(cartoon)

    fetch(base_url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {cartoon} ) //throw curleys around variable for top-level strong param, usually requires a key; comes into play more with Auth
    })
}

function showCartoons(cartoons) {
    cartoons.forEach(createCards)
}

function createCards(cartoon) {
    const cartoonTitle = document.createElement('h2')
    const cartoonImage = document.createElement('img')

    cartoonTitle.textContent = cartoon.name 
    cartoonImage.src = cartoon.image_url

    cartoonImage.addEventListener('click', () => {
        cartoonTitle.remove() 
        cartoonImage.remove()
    })

    document.body.append(cartoonTitle, cartoonImage)
}