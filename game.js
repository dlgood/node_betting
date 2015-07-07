var prompt = require('readline-sync');
var color = require('colors');

  var bankroll = 100;
  var pick;
  var bet; 
  var winningNumber;
  var outcome;

  function chooseNumber(){
    console.log("Choosing number!");
    winningNumber = Math.floor((Math.random() * 10) + 1);
    console.log("Winning number is " + winningNumber);
    return winningNumber;
  }

  function determineWinner(pick, winningNumber, bet) {
    if (pick == winningNumber) {
      outcome = 'win';
    } else if (pick == (winningNumber - 1) || pick == (winningNumber + 1)) {
      outcome = 'push';
    } else {
      outcome = 'lose';
    } 
    return outcome;
  }

  function updateBankroll(outcome, bet) {
    if (outcome == 'win') {
      bankroll += bet;
      console.log(("You won! Your bankroll stands at $" + bankroll).green);
    }
    else if (outcome == 'lose') {
      bankroll -= bet;
      console.log(("You lost! Your bankroll stands at $" + bankroll).red);
    }
    else if (outcome == 'push') {
      console.log(("You pushed! Your bankroll stands at $" + bankroll).yellow);
    }
  };

  function promptForNewRound() {
    var playAgain = prompt.question("Would you like to play again (y/n)?", "");
      if (playAgain == "y") {
        playRound();    
      }
      else {
        console.log("Have a nice day.");
      }
    }

function playRound() {
  var bet = prompt.question('What would you like to bet (5 or 10)? ');
  bet = parseInt(bet);
  console.log('Your bet is $' + bet);
  var pick = prompt.question('What number do you want? (1 through 10) ');
  console.log('Your pick is ' + pick);
  var winningNumber = chooseNumber();
  determineWinner(pick, winningNumber, bet);
  updateBankroll(outcome, bet);
  console.log(bankroll);
  promptForNewRound();
};

console.log('Starting bankroll: $' + bankroll);
playRound();
