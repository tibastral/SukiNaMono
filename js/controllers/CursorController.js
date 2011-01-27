var CursorController = function (parentController) {
  this.parentController = parentController;
  this.cursor = new Cursor(1, 3); // @TODO: faire attention à la limite de la map
  var cursor = this.cursor;
  var that = this;

  function onMouseMove(evt) {
    that.cursor.setXTile(that.parentController.gv.XToXTile(evt.pageX));
    that.cursor.setYTile(that.parentController.gv.YToYTile(evt.pageY));
  }
  
  $(document).mousemove(onMouseMove);
  $('#canvas').click(function (evt) {
    var gameMap = that.parentController.gv.gameMap();
    console.log(that.cursor.xTile, that.cursor.yTile);
    if (that.cursor.current_selected_object_id && gameMap.map[that.cursor.yTile][that.cursor.xTile] == 0) {
      gameMap.map[that.cursor.yTile][that.cursor.xTile] = 1;
      that.cursor.current_selected_object_id = null;
    } else {
      
    };
  });
  $(document).delegate('.items a', 'click', function () {
    that.cursor.current_selected_object_id = $(this).attr('data-id');
  });
}