var Waiter = function (xTile, yTile)
{
  var that = this;

  this.destination = {
    xTile : xTile + 15,
    yTile : yTile + 10
  }

  this.speed = .05;

  this.compute = function () {
    var coef_dir_x = this.destination.xTile > this.xTile ? 1 : -1
    var coef_dir_y = this.destination.yTile > this.yTile ? 1 : -1
    if (Math.abs(this.destination.xTile - this.xTile) < this.speed) {
      this.xTile = this.destination.xTile;
      coef_dir_x = 0;
    };
    if (Math.abs(this.destination.yTile - this.yTile) < this.speed) {
      this.yTile = this.destination.yTile;
      coef_dir_y = 0;
    };
    this.xTile += coef_dir_x * this.speed;
    this.yTile += coef_dir_y * this.speed;
    this.computeXY();
  }

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
