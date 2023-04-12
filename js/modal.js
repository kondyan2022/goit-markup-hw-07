(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    // My first JS code
    if (refs.modal.classList.contains('is-hidden')) {
      bodyScrollLock.enableBodyScroll(document.body);
    } else {
      bodyScrollLock.disableBodyScroll(document.body);
    }
  }
})();
