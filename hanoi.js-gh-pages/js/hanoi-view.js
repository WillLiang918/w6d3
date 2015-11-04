(function (){
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function (game, $el) {
    this.$el = $el;
    this.game = game;
  }

  View.TOWERS = {
    "col0" : 0,
    "col1" : 1,
    "col2" : 2
  }

  View.prototype.bindEvents = function () {
    this.winCheck();
    console.log("It worked");

    var indexArr = indexArr || [];
    this.$el.find("ul").on("click", "li", function(e){
      var towerIdx = View.TOWERS[$(e.currentTarget).attr("class")];
      indexArr.push(towerIdx);
      if (indexArr.length === 2 ){
        debugger
        this.move(indexArr);
        indexArr = [];
        this.$el.find("li").attr("id", "");
      }
      else if (indexArr.length === 1){
        this.colorSelector(indexArr[0]);
      }

    }.bind(this));
  };

  View.prototype.colorSelector = function(index) {
    var selectedCol = ".col" + index;
    this.$el.find(selectedCol).attr("id","selected");
  };

  View.prototype.winCheck = function(){
    if(this.game.isWon()){
      alert("You Win!!!!!!!!!!!!!!!!!!!!")
    }
  };

  View.prototype.move = function(indexArr){
    // debugger
    if(!this.game.isValidMove(indexArr[0],indexArr[1])){
      alert("Illegal Move")
    }else{
    this.game.move.apply(this.game, indexArr);
    this.renderBoard();
    this.winCheck();
    }
  };

  View.prototype.renderBoard = function () {
    this.$el.find("span").removeClass();
    for (var i = 0; i < 3 ; i++){
      currentCol = ".col" + i;
      for(var j = 0; j < 3; j++){
        currentSpace = "#space" + j;
        currentTower = "tower" + (this.game.towers[i][j] - 1);
        this.$el.find(currentCol).find(currentSpace).addClass(currentTower)
      };
    };
  };

})();
