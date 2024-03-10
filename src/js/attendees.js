const fab = document.querySelector('#fab') //кнопка открытия модалки
const attendee = document.querySelector('#attendee-name')
const modal = document.querySelector('#modal')
const form = document.querySelector('#attendee-form')
const list = document.querySelector('#list')

// this function is exported
export const toggleModal = () => {
  modal.classList.toggle('show')
  fab.classList.toggle('rotate')
  if (modal.classList.contains('show')) {
    attendee.focus()
  } else {
    attendee.blur()
  }
}

// // this function is exported and called in index.js
export const init = () => {
  addEventListener('keydown', (e) => {
    if (e.key === 'n' || e.key === 'N') {
      toggleModal()
    } else if (e.key === 'Escape') {
      modal.classList.remove('show')
    }
  })

  fab.addEventListener('click', () => {
    toggleModal()
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    toggleModal()
    attendee.blur()
    list.insertAdjacentHTML('afterbegin', `<li tabindex="0" class="deletable">${attendee.value}</li>`)
    attendee.value = ''
  })
}
