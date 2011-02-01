var Cursor = function ()
{
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

  this.hidden = true;
  this.x = 0;
  this.y = 0;
  this.xTile = 0;
  this.yTile = 0;
  this.width = TILE_WIDTH;
  this.height = TILE_HEIGHT;
  computeXY();

  this.setXYTile = function (_xTile, _yTile) {
    that.xTile = _xTile;
    that.yTile = _yTile;
    computeXY();
  }
}
