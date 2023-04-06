const ModalOpen = document.querySelector(".open-Modal");
const Modal = document.getElementById("Modal");
const ModalBackground = document.getElementById("ModalBackground");
const ModalColse = document.querySelectorAll(".colseModal");
const bodyElement = document.querySelector("body");

console.log(bodyElement);

// Open Modal Function
const OpenModal = function () {
  Modal.classList.remove("hidden");
  bodyElement.style.overflow = "hidden";
};
// Close Modal Function
const ColseModal = function () {
  Modal.classList.add("hidden");
  bodyElement.style.overflow = "";
};

// Open Modal
ModalOpen.addEventListener("click", OpenModal);

// Close Modal
for (let index = 0; index < ModalColse.length; index++)
  ModalColse[index].addEventListener("click", ColseModal);

// Close Modal By Escape
document.addEventListener("keydown", function (Escape) {
  if (Escape.key === "Escape" && !Modal.classList.contains("hidden")) {
    ColseModal();
  }
});

// Carulsol Start

let active = 0;
let time = 6500;
function Contoler(x) {
  active += x;
  activeCarulsol(active);
}

function AutoSlide() {
  active++;
  activeCarulsol(active);
}

setInterval(AutoSlide, time);

activeCarulsol(active);

function activeCarulsol(activeNUM) {
  let carulsolSlideS = document.getElementsByClassName("caurlsol");

  if (activeNUM === carulsolSlideS.length) {
    active = 0;
    activeNUM = 0;
  }
  if (activeNUM < 0) {
    active = carulsolSlideS.length - 1;
    activeNUM = carulsolSlideS.length - 1;
  }

  for (let i of carulsolSlideS) {
    i.classList.add("hidden");
    i.classList.remove("block");
  }
  carulsolSlideS[activeNUM].classList.add("block");
  carulsolSlideS[activeNUM].classList.remove("hidden");

  //   console.log(AutoSlide);
}
