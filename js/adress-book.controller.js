'use strict'

function onInit() {
    getContacts(renderContacts, 20)
}

function renderContacts(contacts) {
    const strHTMLs = contacts.map(
        (contact) => `
          <article class="card">
            <div class="title">${contact.lname}, ${contact.fname}</div>
            <div class="contents">
              <div class="image">
                <img src="https://robohash.org/${contact.fname}?set=set1">
              </div>
              <div class="description">
                <p class="field tel">
                  <span class="label">Phone</span>
                  <span class="value">${contact.tel}</span>
                </p>
                <p class="field address">
                  <span class="label">Address</span>
                  <span class="value">${contact.address}</span>
                </p>
                <p class="field city">
                  <span class="label">City</span>
                  <span class="value">${contact.city}</span>
                </p>
              </div>
            </div>
          </article>`
    )

    const elAddressBook = document.querySelector('.contacts-container')
    elAddressBook.innerHTML = strHTMLs.join('')
}
