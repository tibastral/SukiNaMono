var GameMap = function (map) {

  if (!map)
    return ; // @TODO: Throw error;

  this.map = map;
  this.width = map[0].length;
  this.height = map.length;
}
