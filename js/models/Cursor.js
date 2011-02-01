var Cursor = function (xTile, yTile)
{
  // if (xTile < 0 || yTile < 0) // @TODO: Do the error handling properly.
  //     return ; // @TODO: Throw error;
  var that = this;
  this.current_selected_object_id = null;


  var computeXY = function () {
    that.x = (that.xTile - that.yTile) * that.width / 2
    that.y = (that.yTile + that.xTile) * that.height / 2
  }

  this.hide = function () {
    that.hidden = true;
  }

  this.show = function () {
    that.hidden = false;
  }

  this.hidden = false;
  this.x = 0;
  this.y = 0;
  this.xTile = xTile;
  this.yTile = yTile;
  this.width = TILE_WIDTH;
  this.height = TILE_HEIGHT;
  computeXY();

  this.setXYTile = function (_xTile, _yTile) {
    that.xTile = _xTile;
    that.yTile = _yTile;
    computeXY();
  }
}
