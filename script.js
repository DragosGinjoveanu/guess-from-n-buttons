var random;
// this function adds the given number of buttons and picks a random number between 1 and it
function addButtons() {
  var text = document.getElementById("myText").value;
  var numberButtons = parseInt(text);
  if (numberButtons <= 0) {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Please write another number";
    restartGame();
  } else if (numberButtons == 1) {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "It's too hard!";
    restartGame();
  } else {
    random = Math.floor(Math.random() * numberButtons) + 1;
    for (var i = 1; i <= numberButtons; i++) {
      $('#buttons').append(`
        <button type="button" id = "` + i + `" class="btn btn-secondary btn-lg" onclick = "return guessButton(` + i + `);">Button: ` + i + `</button>
      `);
    }
      return false;
  }
}
// this function verifies if the clicked button is winner or not
function guessButton(id) {
  if (id == random) {
    document.getElementById("status").style.color = "green";
    document.getElementById("status").innerHTML = "Status: Winner!!!";
  } else {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Status: Loser!!!";
  }
}
// this function restarts the whole game
function restartGame() {
  location.reload();
}
