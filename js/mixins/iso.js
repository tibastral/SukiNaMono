var IsoConvertible = function() {};
IsoConvertible.prototype = {
  computeXY : function () {
    this.x = (this.xTile - this.yTile) * this.width / 2;
    this.y = (this.yTile + this.xTile) * this.height / 2;
  },
  setXYTile : function(_xTile, _yTile) {
    this.xTile = _xTile;
    this.yTile = _yTile;
    this.computeXY();
  }
};
