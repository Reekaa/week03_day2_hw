document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

  const rockButton = document.querySelector('#rock');

      rockButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        playerParag.textContent = `Player plays: rock.`
        const computerParag = document.querySelector('#computers-choice');
        computerParag.textContent = `Computer plays: ${random(arrayOfButtons)}`;
      });

  const paperButton = document.querySelector('#paper');

      paperButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        playerParag.textContent = `Player plays: paper.`
        const computerParag = document.querySelector('#computers-choice');
        computerParag.textContent = `Computer plays: ${random(arrayOfButtons)}`;
      });

  const scisoorsButton = document.querySelector('#scissors');

      scisoorsButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        playerParag.textContent = `Player plays: scissors.`
        const computerParag = document.querySelector('#computers-choice');
        computerParag.textContent = `Computer plays: ${random(arrayOfButtons)}`;
      });

  const arrayOfButtons = ['rock', 'paper', 'scissors'];
  const random = (arrayOfButtons) => {
    return arrayOfButtons[Math.floor((Math.random() * Math.floor(arrayOfButtons.length)))];
  };
});
