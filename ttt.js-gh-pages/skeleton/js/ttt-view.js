(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.$el = $el
    this.game = game
    this.setupBoard();
  };

  View.prototype.bindEvents = function ($square) {
    var pos = View.POSITIONS[$square.attr("id")]
    // debugger
    if (this.game.board.isEmptyPos(pos)){
      this.makeMove($square);
      this.game.playMove(pos);
      if (this.game.board.isOver()){
        winnerString = "<h1>" + this.game.board.winner() + " Wins!!!!</h1>"
        this.$el.append(winnerString)
        console.log("injected")
      }
    }
    else {
      alert("Invalid Move");
    }
  };

  View.POSITIONS = {
    'square0': [0,0],
    'square1': [0,1],
    'square2': [0,2],
    'square3': [1,0],
    'square4': [1,1],
    'square5': [1,2],
    'square6': [2,0],
    'square7': [2,1],
    'square8': [2,2]
  }




  View.prototype.makeMove = function ($square) {
    $square.append(this.game.currentPlayer);


  };

  View.prototype.setupBoard = function () {

    for(var i = 0; i < 9; i++){
      this.$el.append("<li></li>");
    };

    for (var i = 0; i < 9; i++){
      $($("li")[i]).attr("id", function() {
        return "square" + i;
      });
    };



  };
})();
