// Rock, Paper, Scissor Game

// Game Rules
// 1) Rock and Paper = Paper Wins
// 2) Rock and Scissor = Rock Wins
// 3) Paper and Scissor = Scissor Wins

// Steps
// * 1) Ask users to play the game or quit, if they press start, then step 2 or quit
// * 2) Take User and Computer Input
// * 3) Show them what they choose and who wins as per the Game Rules
// * 4) Again ask them do they like to play again

const items = ['Rock', 'Paper', 'Scissor'];
let userInput = 0;
let computerInput = 0;
let winner = '';
let gamePlay = true;

while (gamePlay) {
  //Check if user likes to play
  const play = confirm('Do you like to play?');
  // console.log({ play });
  if (!play) {
    gamePlay = false;
    //If user cancel, exit the user from loop
    break;
  }

  //Get input from user
  userInput = prompt('Enter a numer to select: (1)Rock (2)Paper (3) Scissor');
  userInput = Number(userInput);
  // console.log('Userinput: ' + userInput);

  //If user enters wrong number or char show error
  while (userInput < 1 || userInput > 3 || isNaN(userInput)) {
    alert(`
    ERROR:
    Please enter valid number between 1 to 3
    `);
    //Get user input
    userInput = prompt('Enter a numer to select: (1)Rock (2)Paper (3) Scissor');
  }

  //Get input from computerInput
  computerInput = Math.floor(Math.random() * 3 + 1);
  // console.log({ computerInput });

  //Game Logic
  winner = function () {
    if (items[userInput - 1] === items[computerInput - 1]) {
      return "It's a tie";
    }
    if (items[userInput - 1] !== items[computerInput - 1]) {
      if (
        items[userInput - 1] === 'Rock' &&
        items[computerInput - 1] === 'Paper'
      ) {
        return 'Computer Wins';
      } else if (
        items[userInput - 1] === 'Paper' &&
        items[computerInput - 1] === 'Rock'
      ) {
        return 'Congratulations!! You Wins';
      }
      if (
        items[userInput - 1] === 'Rock' &&
        items[computerInput - 1] === 'Scissor'
      ) {
        return 'Congratulations!! You Wins';
      } else if (
        items[userInput - 1] === 'Scissor' &&
        items[computerInput - 1] === 'Rock'
      ) {
        return 'Computer Wins';
      }
      if (
        items[userInput - 1] === 'Paper' &&
        items[computerInput - 1] === 'Scissor'
      ) {
        return 'Computer Wins';
      } else if (
        items[userInput - 1] === 'Scissor' &&
        items[computerInput - 1] === 'Paper'
      ) {
        return 'Congratulations!! You Wins';
      }
    }
  };

  //Final Result
  alert(
    `RESULT:
    User selected ${items[userInput - 1]}  and Computer selected ${
      items[computerInput - 1]
    }. So ${winner()}!!`
  );
}
