var CursorController = function (parentController) {
  this.parentController = parentController;
  this.cursor = new Cursor();
  var cursor = this.cursor;
  var that = this;
  var gameView = that.parentController.gv
  var gameMap = gameView.gameMap();

  function onMouseMove(evt) {
    var offsetX = gameView.offsetX;
    var offsetY = gameView.offsetY;
    var mousePosX = evt.pageX - gameView.originX - offsetX;
    var mousePosY = evt.pageY - gameView.originY / 2 - offsetY;

    var yTileMouse = Math.round((2 * mousePosY - mousePosX) / TILE_HEIGHT);
    var xTileMouse = Math.round((2 * mousePosY + mousePosX) / TILE_WIDTH) - 1;
    // console.log("x=", xTileMouse,"y=", yTileMouse);

    if (!(xTileMouse < 0 || xTileMouse > gameMap.width - 1 || yTileMouse < 0 || yTileMouse > gameMap.height - 1)) {
      cursor.setXYTile(xTileMouse, yTileMouse);
      cursor.show();
    }
    else
      cursor.hide();
  }
  
  $(document).mousemove(onMouseMove);
  $('#canvas').click(function (evt) {
    if (cursor.current_selected_object_id && gameMap.map[cursor.yTile][cursor.xTile] == 0) {
      gameView.addObject(new Waiter(cursor.xTile, cursor.yTile));
      cursor.current_selected_object_id = null;
    } else {
      gameView.objects[1].destination = {
        xTile : cursor.xTile,
        yTile : cursor.yTile
      }
    };
  });
  $(document).delegate('.items a', 'click', function () {
    cursor.current_selected_object_id = $(this).attr('data-id');
  });
}