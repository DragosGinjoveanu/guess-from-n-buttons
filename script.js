      // this function adds the given number of buttons and picks a random number between 1 and it
      function addButtons() {
          var text = document.getElementById("myText").value;
          var numberButtons = parseInt(text);
          if (numberButtons <= 0) {
            alert("Please write another number");
            return false;
          } else if (numberButtons == 1) {
            alert("It's too hard!");
          } else {
            var random = Math.floor(Math.random() * numberButtons) + 1;
            for (var i = 1; i <= numberButtons; i++) {
                $('#buttons').append(`
                  <button type="button" id = "` + i + `" class="btn btn-secondary btn-lg" onclick = "return guessButton(` + i + `,` + random + `);">Button: ` + i + `</button>
                  `);
            }
            return false;
          }
      }
      // this function verifies if the clicked button is winner or not
      function guessButton(id, random) {
        if (id == random) {
            swal({
            text: "Winner!",
            icon: "success",
            });
        } else {
            swal({
            text: "Loser!",
            icon: "error",
            });
        }
      }
      // this function restarts the whole game
      function restartGame() {
        location.reload();
      }
