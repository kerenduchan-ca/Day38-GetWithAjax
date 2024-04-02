'use strict'

$(onInit)

function onInit() {
    $('.form').on('submit', onFormSubmit)
}

function onFormSubmit(ev) {
    ev.preventDefault()
    const query = $('.user-query').val()

    if (query.length > 3 && query.endsWith('?')) {
        getAnswer(renderAnswer)
    }
}

function renderAnswer({ answer, image }) {
    console.log('render answer', answer)
    const strHTML = `
      <h1>${answer}</h1>
      <img src="${image}">`

    $('.answer-container').html(strHTML)

    answer === 'yes' ? getJoke(renderJoke) : getDog(renderDog)
}

function renderJoke({ value }) {
    $('.joke-or-dog').html(`<h1>${value}</h1>`)
}

function renderDog({ message }) {
    $('.joke-or-dog').html(`<img src="${message}">`)
}
