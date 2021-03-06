document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

  const rockButton = document.querySelector('#rock');

      rockButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        let gameItem = 'rock';
        playerParag.textContent = `Player plays: ${gameItem}`;
        const computerParag = document.querySelector('#computers-choice');
        computerParag.textContent = `Computer plays: ${random(arrayOfButtons)}`;
        let resultParag = document.querySelector('#result');
        if (computerParag.textContent === 'Computer plays: paper'){
          resultParag.textContent = `Computer wins!`;
        }else if(computerParag.textContent === 'Computer plays: rock'){
          resultParag.textContent = `Draw - Play again!`;
        }else{
          resultParag.textContent = 'Yaaaay, You win! :)';
        }
      });

  const paperButton = document.querySelector('#paper');

      paperButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        let gameItem = 'paper';
        playerParag.textContent = `Player plays: paper`
        const computerParag = document.querySelector('#computers-choice');
        computerParag.textContent = `Computer plays: ${random(arrayOfButtons)}`;
        let resultParag = document.querySelector('#result');
        if (computerParag.textContent === 'Computer plays: scissors'){
          resultParag.textContent = `Computer wins!`;
        }else if(computerParag.textContent === 'Computer plays: paper'){
          resultParag.textContent = `Draw - Play again!`;
        }else{
          resultParag.textContent = 'Yaaay, You win!';
        }
      });

  const scisoorsButton = document.querySelector('#scissors');

      scisoorsButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        let gameItem = 'scissors';
        playerParag.textContent = `Player plays: scissors`
        const computerParag = document.querySelector('#computers-choice');
        computerParag.textContent = `Computer plays: ${random(arrayOfButtons)}`;
        let resultParag = document.querySelector('#result');
        if (computerParag.textContent === 'Computer plays: rock'){
          resultParag.textContent = `Computer wins!`;
        }else if(computerParag.textContent === 'Computer plays: scissors'){
          resultParag.textContent = `Draw - Play again!`;
        }else{
          resultParag.textContent = 'Yaaay, You win!';
        }
      });

  const arrayOfButtons = ['rock', 'paper', 'scissors'];
  const random = (arrayOfButtons) => {
    return arrayOfButtons[Math.floor((Math.random() * Math.floor(arrayOfButtons.length)))];
  };
});
