const cardNum = document.getElementById("card-number");
const firstCardInput = document.getElementById("num1");
const cardName = document.getElementById("card-name");
const cardHolder = document.getElementById("card-holder");
const monthOfExp = document.getElementById("expiration-month");
const yearOfExp = document.getElementById("expiration-year");
const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");
const submitForm = document.getElementById("validateForm");
const monthYear = document.querySelector(".month-year");
const cvv = document.getElementById("cvv");
const cardLogo = document.getElementById("card-logo");
const check = document.getElementsByClassName(".chc");
const input = document.querySelectorAll("input[type='text']");

cardNumberValidate = (e) => {
  const target = e.target;
  const numLength = target.value.length;
  const maxLength = target.maxLength;
  var next = target;
  var number = /^\d+$/;
  var firstDigit = firstCardInput.value.toString()[0];
  if (numLength >= maxLength) {
    while ((next = next.nextElementSibling)) {
      if (next == null) break;
      if (next.tagName.toLowerCase() == "input") {
        next.focus();
        break;
      }
    }
  } else if (numLength === 0) {
    var previous = target;
    while ((previous = previous.previousElementSibling)) {
      if (previous == null) break;
      if (previous.tagName.toLowerCase() == "input") {
        previous.focus();
        break;
      }
    }
  }

  if (target.value.match(number)) {
    target.style.border = "1px solid green";
  } else if (target.value == "") {
    target.style.border = "1px solid black";
  } else {
    target.style.border = "1px solid red";
    alert("Enter valid card number");
    target.value = "";
    target.focus();
  }
  if (firstDigit == 4) {
    cardLogo.setAttribute("src", "./images/Visa.svg");
  } else if (firstDigit == 2 || firstDigit == 5) {
    cardLogo.setAttribute("src", "./images/Mastercard.svg");
  } else if (firstDigit == 3) {
    cardLogo.setAttribute("src", "./images/American_Express.svg");
  } else {
    cardLogo.setAttribute("src", "");
  }
    // if (target.value.length < maxLength) {
    //   previous.focus();
    //   target.style.border = "1px solid red"
    //   alert("Please enter 4 digits");
    // }
};

cardNum.addEventListener("keyup", cardNumberValidate);

cardHolderValidate = () => {
  var letter = /^[a-zA-Z\s]+$/;
  var wordCount = cardName.value.match(/(\w+)/g).length;
  if (wordCount >= 2) {
    cardName.style.border = "1px solid green";
  } else if (cardName.value == "") {
    cardName.style.border = "1px solid black";
    cardHolder.innerHTML = "";
  } else {
    cardName.style.border = "1px solid red";
  }
  if (cardName.value.match(letter)) {
    cardHolder.innerHTML = cardName.value;
  } else {
    alert("Please enter valid name");
  }
  cardName.style.textTransform = "uppercase";
};

cardName.addEventListener("input", cardHolderValidate);
cardName.addEventListener("blur", () => {
    if (cardName.style.border === "1px solid red") {
        alert("Please enter at least two valid names");
        cardName.value = "";
        cardHolder.innerHTML = "";
    }
})

expDateValidate = (e) => {
  const target = e.target;
  var currentMonth = "0" + new Date().getMonth().toString();
  var currentYear = new Date().getFullYear().toString();
  var months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  var cardMonth = months.indexOf(expMonth.value) + 1;
  var cardYear = expYear.value;
  if (cardMonth < 10) {
    cardMonth = "0" + cardMonth;
  }
  if (target.name === "year") {
    if (cardYear + cardMonth <= currentYear + currentMonth) {
      alert("Expiry date is Invalid. PLease select a later date");
      expMonth.value = "";
      expYear.value = "";
      monthOfExp.innerText = "";
      yearOfExp.innerText = "";
    } else {
      monthOfExp.innerText = expMonth.value;
      yearOfExp.innerText = cardYear;
    }
  }
};

monthYear.addEventListener("change", expDateValidate);

cvv.addEventListener("keyup", () => {
  var number = /^\d+$/;
  if (cvv.value.match(number)) {
    cvv.style.border = "1px solid green";
  } else if (cvv.value == "") {
    cvv.style.border = "1px solid black";
  } else {
    cvv.style.border = "1px solid red";
    alert("Please enter valid cvv number");
  }
  if (cvv.value.length < 3) {
    cvv.style.border = "1px solid red";
  } else if (cvv.value.length > 4) {
    cvv.style.border = "1px solid red";
    alert("cvv number should be between 3 and 4 digits");
  }
});
cvv.addEventListener("blur", () => {
    if (cvv.style.border === "1px solid red") {
        alert("Please enter at least three digits");
        cvv.value = "";
    }
})

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
//   if (
//     input.forEach((inp) => {
//       inp.style.border === "1px solid red";
//     })
//   ) {
//     alert("hmm");
//   } else {
//     alert("done");
//   }
alert("The Payment was Successful")
});
