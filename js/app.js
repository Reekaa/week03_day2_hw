document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

  const rockButton = document.querySelector('#rock');

      rockButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        playerParag.textContent = `Player plays: rock.`
      });

  const paperButton = document.querySelector('#paper');

      paperButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        playerParag.textContent = `Player plays: paper.`
      });

  const scisoorsButton = document.querySelector('#scissors');

      scisoorsButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        playerParag.textContent = `Player plays: scissors.`
      });

  const arrayOfButtons = ['rock', 'paper', 'scissors'];
  const random = (arrayOfButtons) => {
  return arrayOfButtons[Math.floor((Math.random() * Math.floor(arrayOfButtons.length)))];
};
console.log(random(arrayOfButtons));

});
