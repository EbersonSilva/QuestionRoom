// Importação do modal.js
import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botoes que existem com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')
// Pegar quando o 'Marcar como lido' for clicado

checkButtons.forEach(button => {
  //adciona a escuta
  button.addEventListener('click', handleClick)
})

// Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

// Alterar o texto da modal.
function handleClick(event, check = true) {
  event.preventDefault() /*Não altera a url ao clicar nos botoes*/
  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'

  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  // Concatenação de palavras.
  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()}  esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  // Retira a classe red, tornando a cor do botão azul
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  //abrir modal
  modal.open()
}
