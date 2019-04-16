document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

  const rockButton = document.querySelector('#rock');

      rockButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        // put in a new variable for rock and playerparag can have a sentce .
        playerParag.textContent = `rock`
        const computerParag = document.querySelector('#computers-choice');
        computerParag.textContent = `${random(arrayOfButtons)}`;
        let resultParag = document.querySelector('#result');
        if (computerParag.textContent === 'paper'){
          resultParag.textContent = `You loose!`;
        }else if(computerParag.textContent === 'rock'){
          resultParag.textContent = `Play again!`;
        }else{
          resultParag.textContent = 'You win!';
        }
      });

  const paperButton = document.querySelector('#paper');

      paperButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        playerParag.textContent = `paper`
        const computerParag = document.querySelector('#computers-choice');
        computerParag.textContent = `${random(arrayOfButtons)}`;
        let resultParag = document.querySelector('#result');
        if (computerParag.textContent === 'scissors'){
          resultParag.textContent = `You loose!`;
        }else if(computerParag.textContent === 'paper'){
          resultParag.textContent = `Play again!`;
        }else{
          resultParag.textContent = 'You win!';
        }
      });

  const scisoorsButton = document.querySelector('#scissors');

      scisoorsButton.addEventListener('click', (event) => {
        const playerParag = document.querySelector('#players-choice');
        playerParag.textContent = `scissors`
        const computerParag = document.querySelector('#computers-choice');
        computerParag.textContent = `${random(arrayOfButtons)}`;
        let resultParag = document.querySelector('#result');
        if (computerParag.textContent === 'rock'){
          resultParag.textContent = `You loose!`;
        }else if(computerParag.textContent === 'scissors'){
          resultParag.textContent = `Play again!`;
        }else{
          resultParag.textContent = 'You win!';
        }
      });

  const arrayOfButtons = ['rock', 'paper', 'scissors'];
  const random = (arrayOfButtons) => {
    return arrayOfButtons[Math.floor((Math.random() * Math.floor(arrayOfButtons.length)))];
  };
});
