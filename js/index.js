(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();



const ModalSend = document.getElementById("modal-send-form");
const SubInput = document.getElementsByClassName("modal-input");
SubValue = SubInput.value;

function CheckModalInput() {
  if(SubValue === "") {
    ModalSend.setAttribute('disabled', '');
  }
  else {
    ModalSend.setAttribute('enabled', '');
  }
}



ModalSend.addEventListener("click", () => {
CheckModalInput()
})