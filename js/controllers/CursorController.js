var CursorController = function (parentController) {
  this.parentController = parentController;
  this.cursor = new Cursor(1, 3); // @TODO: faire attention à la limite de la map
  var cursor = this.cursor;
  var that = this;
  var gameView = that.parentController.gv
  var gameMap = gameView.gameMap();

  function onMouseMove(evt) {
    var offsetX = gameView.offsetX;
    var offsetY = gameView.offsetY;
    var mousePosX = evt.pageX - offsetX;
    var mousePosY = evt.pageY - offsetY;

    var yTileMouse = Math.round((2 * mousePosY - mousePosX) / TILE_HEIGHT);
    var xTileMouse = Math.round((2 * mousePosY + mousePosX) / TILE_WIDTH) - 1;
    // console.log("x=", xTileMouse,"y=", yTileMouse);

    cursor.setXYTile(xTileMouse, yTileMouse);
  }
  
  $(document).mousemove(onMouseMove);
  $('#canvas').click(function (evt) {
    if (cursor.current_selected_object_id && gameMap.map[cursor.yTile][cursor.xTile] == 0) {
      gameMap.map[cursor.yTile][cursor.xTile] = 1;
      cursor.current_selected_object_id = null;
    } else {
      
    };
  });
  $(document).delegate('.items a', 'click', function () {
    cursor.current_selected_object_id = $(this).attr('data-id');
  });
}