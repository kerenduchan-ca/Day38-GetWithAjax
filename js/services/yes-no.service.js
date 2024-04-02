'use strict'

const YES_NO_URL = 'https://yesno.wtf/api'
const JOKE_URL = 'https://api.chucknorris.io/jokes/random'
const DOG_URL = 'https://dog.ceo/api/breeds/image/random'

function getAnswer(onSuccess) {
    ajaxGet(YES_NO_URL, onSuccess)
}

function getJoke(onSuccess) {
    ajaxGet(JOKE_URL, onSuccess)
}

function getDog(onSuccess) {
    ajaxGet(DOG_URL, onSuccess)
}
