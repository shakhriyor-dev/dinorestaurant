const userName = document.querySelector("#name");
const userNameErorr = document.querySelector("#name-error");

const email = document.querySelector("#email");
const emailErorr = document.querySelector("#email-error");

const btnTimeSel = document.querySelector(".time-select-btn");
const timeValue = document.querySelector(".time-value");
const timeBox = document.querySelector(".box");
const selAm = document.querySelector(".am-sel");
const selPm = document.querySelector(".pm-sel");
const selImg = document.querySelectorAll(".selected-time");

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const valuePeople = document.querySelector(".value-people");
let i = 4;

const dateText = document.querySelector(".date-text");
const dateErorr = document.querySelector(".date-error");
const dateInput = document.querySelectorAll(".date-input");

const timeText = document.querySelector(".time-text");
const timeError = document.querySelector(".time-error");
const timeInput = document.querySelectorAll(".time-input");
const timeSel = document.querySelector(".time-select");

const generalBtn = document.querySelector(".general-btn");

generalBtn.addEventListener("click", () => {
  let result = [];
  let result2 = [];
  if (userName.value === "") {
    showError(userNameErorr, userName);
  } else {
    hideError(userNameErorr, userName);
  }
  if (!email.value.includes("@")) {
    showError(emailErorr, email);
  } else {
    hideError(emailErorr, email);
  }
  timeInput.forEach((element) => {
    if (element.value === "") {
      result2.push(false);
    }
    return true;
  });
  let selhour = Number(timeInput[0].value);
  if (typeof selhour === "number" && selhour < 24 && selhour >= 9) {
    result2.push(true);
  } else {
    result2.push(false);
  }
  let selmin = Number(timeInput[1].value);
  if (typeof selmin === "number" && selmin < 60 && selmin >= 0) {
    result2.push(true);
  } else {
    result2.push(false);
  }

  dateInput.forEach((element) => {
    if (element.value === "") {
      result.push(false);
    }
    return true;
  });
  let month = Number(dateInput[0].value);
  if (typeof month === "number" && month <= 12 && month > 0) {
    result.push(true);
  } else {
    result.push(false);
  }
  let date = Number(dateInput[1].value);
  if (typeof date === "number" && date <= 31 && date > 0) {
    result.push(true);
  } else {
    result.push(false);
  }
  let year = Number(dateInput[2].value);
  if (typeof year === "number" && year > 2024) {
    result.push(true);
  } else {
    result.push(false);
  }
  let hour = Number(dateInput[2].value);
  console.log(result);
  if (result.includes(false)) {
    dateErorr.classList.add("show-error");
    dateText.classList.add("red");
    dateInput.forEach((element) => {
      element.classList.add("show-place-error");
    });
  } else {
    dateErorr.classList.remove("show-error");
    dateText.classList.remove("red");
    dateInput.forEach((element) => {
      element.classList.remove("show-place-error");
    });
    userName.value = "";
    email.value = "";
    dateInput.forEach((element) => {
      element.value = "";
    });
    timeInput.forEach((element) => {
      element.value = "";
    });

  }
  if (result2.includes(false)) {
    timeError.classList.add("show-error");
    timeText.classList.add("red");
    timeInput.forEach((element) => {
      element.classList.add("show-place-error");
    });
    timeSel.classList.add("show-place-error");
    btnTimeSel.classList.add("red");
  } else {
    timeError.classList.remove("show-error");
    timeText.classList.remove("red");
    timeInput.forEach((element) => {
      element.classList.remove("show-place-error");
    });
    timeSel.classList.remove("show-place-error");
    btnTimeSel.classList.remove("red");
  }
});

minusBtn.addEventListener("click", () => {
  if (i - 1 > 0) {
    valuePeople.innerText = `${i - 1} people`;
  }
  i--;
});
plusBtn.addEventListener("click", () => {
  valuePeople.innerText = `${i + 1} people`;
  i++;
});

selImg[0].classList.add("show-box-img");

btnTimeSel.addEventListener("click", () => {
  timeBox.classList.toggle("show-time-box");
});

selAm.addEventListener("click", () => {
  selImg[1].classList.remove("show-box-img");
  selImg[0].classList.add("show-box-img");
  timeValue.innerText = "AM";
});

selPm.addEventListener("click", () => {
  selImg[1].classList.add("show-box-img");
  selImg[0].classList.remove("show-box-img");
  timeValue.innerText = "PM";
});

userName.addEventListener("input", () => {
  if (userName.value === "") {
    showError(userNameErorr, userName);
  } else {
    hideError(userNameErorr, userName);
  }
});

email.addEventListener("input", () => {
  if (!email.value.includes("@")) {
    showError(emailErorr, email);
  } else {
    hideError(emailErorr, email);
  }
});

function showError(erorr, element) {
  erorr.classList.add("show-error");
  element.classList.add("show-place-error");
}
function hideError(erorr, element) {
  erorr.classList.remove("show-error");
  element.classList.remove("show-place-error");
}
