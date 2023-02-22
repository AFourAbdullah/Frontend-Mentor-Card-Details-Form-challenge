const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const cvcInput = document.getElementById("cvcInput");
const nameLabel = document.getElementById("name");
const number = document.getElementById("cardNumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvcValue");
const tscreen = document.getElementById("thanksScreen");

const form = document.querySelector("form");
const confirmBtn = document.getElementById("confirmBtn");
const continueBtn = document.getElementById("confirmBtn2");

function setCardNumber(e) {
  number.innerText = format(numberInput.value);
}
function setCardName() {
  nameLabel.innerText = nameInput.value;
}
function setCardMonth() {
  month.innerText = monthInput.value;
}
function setCardYear() {
  year.innerText = yearInput.value;
}
function setCvc() {
  cvc.innerText = cvcInput.value;
}

function changeScreen() {}
function formScreen() {
  form.style.display = "flex";
  tscreen.style.display = "none";
  nameInput.value = "";
  numberInput.value = "";
  yearInput.value = "";
  monthInput.value = "";
  cvcInput.value = "";
  nameLabel.innerText = "Jane Appleseed";
  number.innerText = "0000 0000 0000 0000 ";
  year.innerText = "00";
  month.innerText = "00";
  cvc.innerText = "";
}

// numberInput.addEventListener("keydown", );
// nameInput.addEventListener("keydown", setCardName());
// monthInput.addEventListener("keydown", setCardMonth());
// yearInput.addEventListener("keydown", setCardYear());
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameInput.value) {
    nameInput.classList.add("error");
    nameInput.parentElement.classList.add("error_message");
  } else {
    nameInput.classList.remove("error");
    nameInput.parentElement.classList.remove("error_message");
  }
  if (!numberInput.value) {
    numberInput.classList.add("error");
    numberInput.parentElement.classList.add("error_message");
  } else if (numberInput.value.length < 16) {
    numberInput.classList.add("error");
  } else {
    numberInput.classList.remove("error");
    numberInput.parentElement.classList.remove("error_message");
  }
  if (!monthInput.value) {
    monthInput.classList.add("error");
    monthInput.parentElement.classList.add("error_message2");
  } else {
    monthInput.classList.remove("error");
    monthInput.parentElement.classList.remove("error_message2");
  }
  if (!yearInput.value) {
    yearInput.classList.add("error");
    yearInput.parentElement.classList.add("error_message2");
  } else {
    yearInput.classList.remove("error");
    yearInput.parentElement.classList.remove("error_message2");
  }
  if (!cvcInput.value) {
    cvcInput.classList.add("error");
    cvcInput.parentElement.classList.add("error_message");
  } else {
    cvcInput.classList.remove("error");
    cvcInput.parentElement.classList.remove("error_message");
  }
  if (
    nameInput.value &&
    numberInput.value &&
    monthInput.value &&
    yearInput.value &&
    cvcInput.value &&
    numberInput.value.length == 16
  ) {
    form.style.display = "none";
    tscreen.style.display = "flex";
  }
});

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}
ut;
