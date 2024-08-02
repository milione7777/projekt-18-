// завадння 1
const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".backdrop"),
};

function openModal() {
  document.body.classList.add("show-modal");
}

refs.openModalBtn.addEventListener("click", openModal);

function closeModal() {
  document.body.classList.remove("show-modal");
}

function closeBackdrop(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

refs.closeModalBtn.addEventListener("click", closeModal);
refs.backdrop.addEventListener("click", closeBackdrop);

// завдання 2
const radioButtons = document.querySelectorAll('input[name="color"]');
function changeBackgroundColor(event) {
  document.body.style.backgroundColor = event.target.value;
}

radioButtons.forEach((button) => {
  button.addEventListener("change", changeBackgroundColor);
});

// завдання 3
document.getElementById("name-input").addEventListener("input", function () {
  const nameInput = document.getElementById("name-input").value;
  const nameOutput = document.getElementById("name-output");

  nameOutput.textContent = nameInput ? nameInput : "незнайомець";
});

// завдання 3
document
  .getElementById("validation-input")
  .addEventListener("blur", function () {
    const input = this;
    const requiredLength = parseInt(input.getAttribute("data-length"), 10);
    if (input.value.length >= requiredLength) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  });

// завадння 4
const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");
fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeControl.value;
  text.style.fontSize = fontSize + "px";
});
text.style.fontSize = fontSizeControl.value + "px";
