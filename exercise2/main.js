// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["tekst1", "tekst2", "tekst3"];

let indexText = 0;
let indexLetter = -12;

// Implementacja
const addLetter = () => {
  if (indexLetter >= 0) {
    spnText.textContent += txt[indexText][indexLetter];
  }

  indexLetter++;

  if (indexLetter === txt[indexText].length) {
    indexText++;

    if (indexText === txt.length) return;

    return setTimeout(() => {
      indexLetter = -12;
      spnText.textContent = "";
      addLetter();
    }, 2000);
  }

  setTimeout(addLetter, 100);
};

addLetter(); //pierwsze wywołanie

// Animacja kursora
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
