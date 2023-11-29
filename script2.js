"use strict";
window.onload = function () {
  const answ = document.getElementById("answ");
  const usedLetters = document.getElementById("used");
  const countInput = document.getElementById("count");
  const remainEl = document.getElementById("remain");
  const guessButton = document.getElementById("guess");

  let word = "прокрастинація";
  let answer = [];
  let remain = word.length - 2;

  answer[0] = word[0];
  answer[word.length - 1] = word[word.length - 1];
  for (let i = 1; i < word.length - 1; i++) {
    answer[i] = "_";
  }

  answ.innerHTML = answer.join(" ");
  remainEl.innerHTML = remain;

  let attempts = 0;
  let guessedWord = false;

  guessButton.addEventListener("click", function () {
    if (!guessedWord && attempts < 10) {
      let guess = prompt("Guess a letter").toUpperCase();

      if (guess && guess.length === 1) {
        let alreadyGuessed = usedLetters.innerHTML.includes(guess);
        if (!alreadyGuessed) {
          usedLetters.innerHTML += guess + " ";

          let found = false;
          for (let i = 0; i < word.length; i++) {
            if (guess === word[i].toUpperCase()) {
              answer[i] = word[i];
              remain--;
              found = true;
            }
          }

          if (!found) {
            attempts++;
            countInput.innerHTML = attempts;
          }

          answ.innerHTML = answer.join(" ");
          remainEl.innerHTML = remain;

          if (remain === 0) {
            guessedWord = true;
            alert("Вы выиграли!");
          } else if (attempts >= 10) {
            guessedWord = true;
            alert("Вы проиграли!");
          }
        } else {
          alert("Эта буква уже была угадана. Попробуйте другую.");
        }
      } else {
        alert("Пожалуйста, введите одну букву.");
      }
    }
  });
};
