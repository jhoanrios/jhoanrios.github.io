function playGame() {

  var bet = Number(document.getElementById("bet").value);

  if (bet == "" || isNaN(bet) || bet < 0) {
    alert("Please enter a whole number greater than 0.");
    //reset
    document.getElementById("bet").value = null;
    document.getElementById("bet").focus();

    return;
  } else {
    // set block visibility
    document.getElementById("resetButton").style.display =
      "inline-block";
    document.getElementById("submitButton").style.display =
      "none";
    document.getElementById("results").style.display =
      "block";
    //end of visibility

    //variables for game
    var gameMoney = bet;
    var die1 = 0;
    var die2 = 0;
    var howManyRolls = 0;
    var highestAmountWon = 0;
    var highestRolls = 0;

    //gameplay
    while (gameMoney > 0) {
      die1 = Math.floor((Math.random() * 6) + 1);
      die2 = Math.floor((Math.random() * 6) + 1);
      howManyRolls++;

      if ((die1 + die2) == 7) {
        gameMoney += 4;
      } else gameMoney--;

      if (gameMoney > highestAmountWon)
      {
        highestAmountWon = gameMoney;
        highestRolls = howManyRolls;
      }

    } //end while loop

    document.getElementById("betAmount").innerText = bet;
    document.getElementById("totalRolls").innerText = howManyRolls;
    document.getElementById("highestAmountWon").innerText = highestAmountWon;
    document.getElementById("rollCountAtHighest").innerText = highestRolls;

    document.getElementById("startingBet").style.display= "none";
  } //end of else



} //end of play game

function resetGame() {
  //visibility
  document.getElementById("startingBet").style.display= "block";

  document.getElementById("submitButton").style.display =
    "inline-block";
  document.getElementById("resetButton").style.display =
    "none";
  document.getElementById("results").style.display =
    "none";
  //reset bet element and focus on it
  document.getElementById("bet").value = null;
  document.getElementById("bet").focus();

}
