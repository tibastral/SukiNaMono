var Cursor = function (xTile, yTile)
{
  // if (xTile < 0 || yTile < 0) // @TODO: Do the error handling properly.
  //     return ; // @TODO: Throw error;

  this.xTile = xTile;
  this.yTile = yTile;
  this.width = TILE_WIDTH;
  this.height = TILE_HEIGHT;
  this.x = (this.xTile * TILE_WIDTH);
  this.y = (this.yTile * TILE_HEIGHT);
}
