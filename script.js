const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const pic = document.getElementById("pic");
const text = document.querySelector(".text");
const btnBox = document.querySelector(".btn_box");
const noBtnText = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again.",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Please reconsider!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change your mindset!",
  "Would't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart :(",
];

let index = 0;
let fs = 16;
yesBtn.addEventListener("click", () => {
  btnBox.style.display = "none";
  pic.src = "./assets/ok.gif";
  text.textContent = "Ok yay!!!";
});

noBtn.addEventListener("click", () => {
  index++;
  if (index > 15) {
    index = 0;
  }

  noBtn.textContent = noBtnText[index];
  if (fs < 30) {
    fs = fs + 6;
  } else {
    fs = fs + 4;
  }
  if (index === 0) {
    fs = 16;
  }
  yesBtn.style.fontSize = `${fs}px`;
});
