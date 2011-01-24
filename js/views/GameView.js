var GameView = function (canvas) {

  if (!canvas)
    return ; // @TODO: throw error;

  if (!canvas[0].getContext)
  {
    alert('You should use a modern browser (Firefox, Chrome, Safari, Opera, ...) to see this page.');
    // @TODO: throw error;
    return ;
  }

  var canvasWidth = canvas.width()
  var canvasHeight = canvas.height()
  var ctx = canvas[0].getContext('2d');

  var gameMap;
  var objects = [];

  this.offsetY = canvas.offset().top;
  this.offsetX = canvas.offset().left;

  var drawTile = function (x, y, type) {
    ctx.fillStyle = "rgb(0, 0, 0)";

    ctx.beginPath();
    ctx.rect(x, y, TILE_WIDTH, TILE_HEIGHT);
    ctx.closePath();

    if (type == 1)
      ctx.fill();
    else
      ctx.stroke();
  }

  var clear = function () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  }

  var printObject = function (object)
  {
    if (gameMap.map[object.yTile][object.xTile] == 1)
      ctx.fillStyle = "rgb(255, 0, 0)";
    else
      ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.beginPath();
    ctx.rect(object.x, object.y, object.width, object.height);
    ctx.closePath();
    ctx.fill();
  }

  var drawMap = function () {
    for (var i = 0; i < gameMap.height; ++i)
    {
     for (var j = 0; j < gameMap.width; ++j)
     {
      drawTile(j * TILE_WIDTH, i * TILE_HEIGHT, gameMap.map[i][j]);
     }
    }
  }

  this.draw = function () {
    clear();

    drawMap();

    for (key in objects)
    {
      printObject(objects[key]);
    }
  };

  this.setMap = function (map) {
    gameMap = map;
  };

  this.addObject = function (object) {
    objects.push(object);
  };

  this.XToXTile = function (x) {
    var res = Math.floor((x - this.offsetX) / TILE_WIDTH);
    if (res < 0)
      res = 0;
    if (res > gameMap.width - 1)
      res = gameMap.width - 1;
    return res;
  }

  this.YToYTile = function (y) {
    var res = Math.floor((y - this.offsetY) / TILE_HEIGHT);
    if (res < 0)
      res = 0;
    if (res > gameMap.height - 1)
      res = gameMap.height - 1;
    return res;
  }
}
