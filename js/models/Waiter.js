var Waiter = function (xTile, yTile)
{
  var that = this;

  var init = function () {
    that.image = new Image();
    that.image.src = "images/ca-sent-le-sapin.png";
    that.xTile = xTile;
    that.yTile = yTile;
    that.width = TILE_WIDTH;
    that.height = TILE_HEIGHT;
    that.computeXY();
  }
  init();
}

augment(Waiter, IsoConvertible);
