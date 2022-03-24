var galery = document.querySelector('#mostrargaleria')
const random = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const randomUnique = (range, count) => {
    let nums = new Set();
    while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
    }
   // console.log(...nums)
    return [...nums];
}


function Sgalery() {
    galery.innerHTML = ""
    let random = randomUnique(898, 20)

    for (var r = 0; r <= random.length; r++) {
        var poke = random[r]
        var link = 'https://pokeapi.co/api/v2/pokemon/' + poke;
        fetch(link)
            .then(response => response.json())
            .then(function (data) {
                galery.innerHTML += `<div class="col-4>"
                <div class="card"">
        <img src="${data.sprites.other["official-artwork"].front_default}" class="card-img-top card-img1" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.id} ${data.species.name}</h5>
        </div>
        </div>
        </div>`;
                //console.log(data);
            });
    }
}


function wars() {
    galery.innerHTML = ""
    let random = randomUnique(898, 2)
    for (var r = 0; r <= random.length; r++) {
        var poke = random[r]
        var link = 'https://pokeapi.co/api/v2/pokemon/' + poke;
        fetch(link)
            .then(response => response.json())
            .then(function (data) {
                galery.innerHTML += `
            <div class="col-4">
            <div class="center">
            <div class="property-card">
                <a href="#">
                    <div class="property-image">
                    <img src="${data.sprites.other["official-artwork"].front_default}" class="card-img-top card-img1" alt="...">
                    <div class="property-image-title">
                            <h5>${data.id} ${data.species.name}</h5>
                        </div>
                    </div></a>
                <div class="property-description">
                    <h5> ${data.id} ${data.species.name}</h5>
                    <h5>Habilities</h5>
                    <ul>${habilidad(link, data)}</ul>
                    <h5>Moves</h5>
                    <ul>${moves(link, data)}</ul>
                    <h5>weight</h5>
                    <ul>${data.weight}</ul>
                </div>
            </div>
        </div>
        </div>
        <div class="col-4">
        ${image()}
        </div>
        `;
            });
    }
}


function habilidad(link, data) {
    // console.log(data.abilities.length)
    if (data.abilities.length != 0) {
        let lengt = data.abilities.length
        habilities = data.abilities[random(0, lengt)].ability.name
        return `<li>${habilities}</li>`
    } else {
        return `<li>this Pokemon dont have habilities</li>`

    }
}

function moves(link, data) {
    //console.log(data.moves.length)
    if (data.moves.length != 0) {
        let lengt = data.moves.length
        move = data.moves[random(0, lengt)].move.name
        return `<li>${move}</li>`
    } else {
        return `<li>this Pokemon dont have moves</li>`
    }
}

var ver = 0
function image() {
    if (ver == 0) {
        ver++
        return `
        <div class="">
        <img src="./src/VSlogo.png" alt="genera una nueva batalla" class="vs" onclick="wars()" data-toggle="tooltip" data-placement="top" title="Genera una nueva batalla">
        <p>Genera una nueva batalla</p>
        </div >`
    }
    else {
        ver = 0
        return "";
    }
}
