'use strict'

function onInit() {
    getPokemons(renderPokemons)
}

function renderPokemons(pokemons) {
    console.log('pokemons:', pokemons)
    const strHTMLs = pokemons.map(
        (pokemon) => `
                <article class="card" data-id="${pokemon.id}">
                    <h1>${pokemon.name}</h1>
                    <div class="info-${pokemon.name}">
                        <p>Weight: ${pokemon.weight}</p>
                        <img class="pokemon-img-${pokemon.name}" src="${pokemon.sprites.front_default}" />
                    </div >
                </article >
            `
    )

    const elPokemons = document.querySelector('.pokemons-container')
    elPokemons.innerHTML = strHTMLs.join('')
    startPokemonsImgIntervals()
}

function startPokemonsImgIntervals() {
    const pokemons = getGPokemons()
    console.log(pokemons)
    pokemons.forEach((pokemon) => {
        const { sprites, id } = pokemon
        const pokemonImages = Object.values(sprites).filter(
            (sprite) => typeof sprite === 'string'
        )
        const elPokemonImg = document.querySelector(`[data-id="${id}"] img`)
        const randNum = Math.random() + 1
        let currImgIdx = 0
        setInterval(() => {
            const currImg = pokemonImages[currImgIdx]
            elPokemonImg.src = currImg
            currImgIdx++
            if (currImgIdx === pokemonImages.length) currImgIdx = 0
        }, 1000 * randNum)
    })
}

// Bonus - CSV
function onDownloadCSV(elLink) {
    const pokemons = getGPokemons()
    const csvContent = convertToCSV(pokemons)
    // console.log(csvContent)
    elLink.href = 'data:text/csv;charset=utf-8,' + csvContent
}

function convertToCSV(pokemons) {
    let str = 'Name,Weight,Image\n'
    pokemons.forEach((pokemon) => {
        str += `${pokemon.name},${pokemon.weight},${pokemon.sprites.front_default}\n`
    })
    return str
}
