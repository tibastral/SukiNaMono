var Cursor = function (xTile, yTile)
{
  // if (xTile < 0 || yTile < 0) // @TODO: Do the error handling properly.
  //     return ; // @TODO: Throw error;
  var that = this;
  this.current_selected_object_id = null;


  var computeX = function () {
    that.x = that.xTile * TILE_WIDTH;
  }
  var computeY = function () {
    that.y = that.yTile * TILE_HEIGHT;
  }

  this.x = 0;
  this.y = 0;
  this.xTile = xTile;
  this.yTile = yTile;
  this.width = TILE_WIDTH;
  this.height = TILE_HEIGHT;
  computeX();
  computeY();

  this.setXTile = function (_xTile) {
    that.xTile = _xTile;
    computeX();
  }
  this.setYTile = function (_yTile) {
    that.yTile = _yTile;
    computeY();
  }
}
