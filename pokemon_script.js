let currentPokemon = null

let input = document.getElementById("pokeInput")
let findBtn = document.getElementById("findBtn")
let addBtn = document.getElementById("addBtn")

let img = document.getElementById("pokeImg")
let audio = document.getElementById("pokeAudio")

let move1 = document.getElementById("move1")
let move2 = document.getElementById("move2")
let move3 = document.getElementById("move3")
let move4 = document.getElementById("move4")

let teamList = document.getElementById("teamList")

findBtn.onclick = function(){

let name = input.value.toLowerCase()

fetch("https://pokeapi.co/api/v2/pokemon/" + name)
.then(function(response){
return response.json()
})
.then(function(data){

currentPokemon = data

img.src = data.sprites.front_default

if(data.cries && data.cries.latest){
audio.src = data.cries.latest
}

move1.innerHTML=""
move2.innerHTML=""
move3.innerHTML=""
move4.innerHTML=""

for(let i=0;i<20 && i<data.moves.length;i++){

let moveName = data.moves[i].move.name

let option1 = new Option(moveName,moveName)
let option2 = new Option(moveName,moveName)
let option3 = new Option(moveName,moveName)
let option4 = new Option(moveName,moveName)

move1.add(option1)
move2.add(option2)
move3.add(option3)
move4.add(option4)

}

})
}

addBtn.onclick = function(){

if(currentPokemon==null){
return
}

let div = document.createElement("div")
div.className="teamCard"

let pokemonName = document.createElement("h4")
pokemonName.innerText=currentPokemon.name

let pokemonImg = document.createElement("img")
pokemonImg.src=currentPokemon.sprites.front_default
pokemonImg.width=80

let list = document.createElement("ul")

let m1 = document.createElement("li")
m1.innerText=move1.value

let m2 = document.createElement("li")
m2.innerText=move2.value

let m3 = document.createElement("li")
m3.innerText=move3.value

let m4 = document.createElement("li")
m4.innerText=move4.value

list.appendChild(m1)
list.appendChild(m2)
list.appendChild(m3)
list.appendChild(m4)

div.appendChild(pokemonImg)
div.appendChild(pokemonName)
div.appendChild(list)

teamList.appendChild(div)

} 