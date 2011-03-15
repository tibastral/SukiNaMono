var GameController = function (msg) {
  var canvas = $('#canvas');
  var that = this;

  console.log(msg);
  this.gv = new GameView(canvas);

  var gameMap = new GameMap(msg.map);

  this.gv.setMap(gameMap);
  var cursorController = new CursorController(this);
  this.gv.addObject(cursorController.cursor);
  _.each(msg.objects, function (e) {
    that.gv.addObject(eval("new " + e.typeEl + "(" + e.position.xTile + ", " + e.position.yTile + ")"));
    // that.gv.addObject(new Waiter(e.position.xTile, e.position.yTile));
  });

  $(document).keydown(function (ev) {
    cursorController.cursor.hide();
    if (ev.keyCode == "37") {
      that.gv.originX += 15;
    } else if (ev.keyCode == "39") {
      that.gv.originX -= 15;
    } else if (ev.keyCode == "38") {
      that.gv.originY += 15;
    } else if (ev.keyCode == "40") {
      that.gv.originY -= 15;
    }
  });
  this.nextTurn = function () {
    _.each(that.gv.objects, function (el) {
      el.compute();
      // console.log(el);
    });
  }

  // $(document).keydown(function (ev) {alert ($(this))});
  setInterval(function () {that.gv.draw()}, 30);
  setInterval(function () {that.nextTurn()}, 30);
}
