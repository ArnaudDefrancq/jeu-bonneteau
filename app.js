const allCard = document.querySelectorAll(".card");
const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const score = document.getElementById("win-lose");
const resetBtn = document.getElementById("reset");

const arrayCard = ["pique", "pique", "rouge"];

let i = arrayCard.length;

const game = {
  win: "rouge",
};

window.addEventListener("DOMContentLoaded", () => {
  generateRandomArray();
});

const changeBackground = () => {
  allCard.forEach((card) => {
    card.classList.add("rotate-verso");
  });
};

const generateRandomArray = () => {
  while (--i > 0) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arrayCard[j];
    arrayCard[j] = arrayCard[i];
    arrayCard[i] = temp;
  }
};

const generateCard = () => {
  setTimeout(() => {
    card1.src = "./images/" + arrayCard[0] + ".png";
    card2.src = "./images/" + arrayCard[1] + ".png";
    card3.src = "./images/" + arrayCard[2] + ".png";

    card1.alt = arrayCard[0];
    card2.alt = arrayCard[1];
    card3.alt = arrayCard[2];
  }, 200);
};

allCard.forEach((e) => {
  e.addEventListener("click", () => {
    generateCard();
    changeBackground();
    setTimeout(() => {
      const value = e.alt;
      if (game.win === value) {
        score.innerHTML = "Gagner";
        score.classList.add("win");
      } else {
        score.innerHTML = "Perdu";
        score.classList.add("lose");
      }
    }, 200);
  });
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
