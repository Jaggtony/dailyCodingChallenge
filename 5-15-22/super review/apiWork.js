//Get a dog photo from the dog.ceo api and place the photo in the DOM
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[0].strDrinkThumb)
      document.querySelector('img').src= data.drinks[0].strDrinkThumb
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

/*fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('img').src=data.message
      console.log(data.message)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });*/