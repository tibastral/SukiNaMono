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
    var posX = evt.pageX - offsetX;
    var posY = evt.pageY - offsetY;

    var ymouse = (2 * posY - posX) / 2;
    var xmouse = (posX + ymouse);
    ymouse = Math.round(ymouse * 2 / TILE_HEIGHT);
    xmouse = Math.round(xmouse * 2 / TILE_WIDTH) - 1;
    console.log("x=", xmouse,"y=", ymouse);

    cursor.setXYTile(xmouse, ymouse);
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