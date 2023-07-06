const MenuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.container nav .navbar .header ul');
MenuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide'); 
});

// Auto Slide

let slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let imgList = document.getElementsByClassName("img-slide");
  if (n >= imgList.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = imgList.length - 1;
  }

  for (let i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 2000);

const NameInput = document.querySelector(".select-name");
const EmailInput = document.querySelector(".select-email");
const NumbersInput = document.querySelector(".select-number");
const SelectInput = document.querySelector(".select-select");
const MessageInput = document.querySelector(".select-message");
const SubmitButton = document.querySelector(".btn");

const NamaValid = document.getElementById("NamaKosong");
const EmailValid = document.getElementById("EmailKosong");
const NumberValid = document.getElementById("NumberKosong");
const SelectValid = document.getElementById("SelectKosong");
const MessageValid = document.getElementById("PesanKosong");

SubmitButton.addEventListener("click", function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const FormValid = [NamaValid, EmailValid, NumberValid, SelectValid, MessageValid];
  const FormInput = [NameInput, EmailInput, NumbersInput, SelectInput, MessageInput];
  let isAllFilled = true;

  for (let i = 0; i < FormInput.length; i++) {
    let input = FormInput[i];
    if (input.value === "") {
      isAllFilled = false;
      FormValid[i].style.color = "red";
      input.style.border = "1px solid red";
      FormValid[i].textContent = "Jangan dikosongkan";
    } else {
      input.style.border = "none";
      FormValid[i].textContent = "";
    }
  }

  if (SelectInput.value === "Select") {
    isAllFilled = false;
    SelectValid.style.color = "red";
    SelectInput.style.border = "1px solid red";
    SelectValid.textContent = "Jangan dikosongkan";
  } else {
    SelectValid.style.color = "green";
  }

  if (isAllFilled) {
    popupBox.style.display = 'flex';
    clearForm();
  }
}

function clearForm() {
  NameInput.value = "";
  EmailInput.value = "";
  NumbersInput.value = "";
  SelectInput.value = "Select";
  MessageInput.value = "";
}

const closeBtn = document.getElementById('closeBtn');
const popupBox = document.getElementById('popupBox');

closeBtn.addEventListener('click', function() {
  popupBox.style.display = 'none';
});
