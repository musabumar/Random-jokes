let jokeContainer = document.querySelector("#joke")

let button = document.querySelector("button")

let url = " https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = ()=>{
     jokeContainer.classList.remove("fade")
    fetch(url)
    .then(data => data.json() )
    .then(item =>{
        jokeContainer.innerHTML = `${item.joke}`
        jokeContainer.classList.add("fade")

    })
}
button.addEventListener("click", getJoke)
getJoke();
