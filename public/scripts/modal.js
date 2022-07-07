export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  // Evento para fechar a modal ao clicar no botão cancelar
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    // Funcionalidade de atribuir a classe active para a modal
    modalWrapper.classList.add('active')
  }
  function close() {
    // Funcionalidade de remover a classe active para a modal
    modalWrapper.classList.remove('active')
  }
  return {
    open,
    close
  }
}
