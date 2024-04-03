'use strict'

const gPokemons = []

function getPokemons(renderPokemons) {
    $.get('https://pokeapi.co/api/v2/pokemon?limit=15', (res) => {
        const { results } = res
        const pokemons = results.sort((p1, p2) =>
            p1.name.localeCompare(p2.name)
        )
        pokemons.forEach((pokemon, idx) => {
            $.get(pokemon.url, (res) => {
                const { name, weight, sprites } = res
                const pokemon = { name, weight, sprites, id: getRandomId() }
                // gPokemons.push(pokemon)
                gPokemons[idx] = pokemon
                if (pokemons.length === gPokemons.length) {
                    renderPokemons(gPokemons)
                }
            })
        })
        // renderPokemons(gPokemons)
    })
}

function getPokemonById(id) {
    const pokemon = gPokemons.find((pokemon) => pokemon.id === id)
    return pokemon
}

function getGPokemons() {
    return gPokemons
}

function getRandomId(length = 6) {
    const chars =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
    let str = ''
    for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)]
    }
    return str
}
