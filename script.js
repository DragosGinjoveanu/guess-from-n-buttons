var winningButton;

//adds the given number of buttons and picks a random number between 1 and it
function addButtons() {
  const numberButtons = parseInt(document.getElementById("numberOfButtons").value);
  if (numberButtons <= 0) {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Status: Please restart and write another number!";
  } else if (numberButtons == 1) {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Status: It's too hard! Please restart!";
  } else {
    winningButton = Math.floor(Math.random() * numberButtons) + 1;
    for (let i = 1; i <= numberButtons; i++) {
      $('#buttons').append(`
        <button type="button" id = "` + i + `" class="btn btn-secondary btn-lg" onclick = "return guessButton(` + i + `);">Button: ` + i + `</button>
      `);
    }
      return false;
  }
}

//verifies if the clicked button is winner or not
function guessButton(id) {
  if (id == winningButton) {
    document.getElementById("status").style.color = "green";
    document.getElementById("status").innerHTML = "Status: Winner!!!";
  } else {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Status: Loser!!!";
  }
}

//restarts the whole game
function restartGame() {
  location.reload();
}
