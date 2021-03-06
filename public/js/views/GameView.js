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
  this.objects = objects;
  var that = this;

  this.originX = 0;
  this.originY = 0;
  this.offsetY = canvas.offset().top;
  this.offsetX = canvas.offset().left;

  var drawTile = function (x, y, type) {
    x = x + that.originX;
    y = y + that.originY;

    if (type == 0) {
      ctx.fillStyle = "rgb(0, 0, 0)";

      ctx.beginPath();

      ctx.moveTo(x + TILE_WIDTH / 2, y / 2);

      ctx.lineTo(x + TILE_WIDTH, (y + TILE_HEIGHT / 2) / 2);
      ctx.lineTo(x + TILE_WIDTH / 2, (y + TILE_HEIGHT) / 2);
      ctx.lineTo(x, (y + TILE_HEIGHT / 2) / 2);
      ctx.lineTo(x + TILE_WIDTH / 2, y / 2);

      // ctx.rect(x, y, TILE_WIDTH, TILE_HEIGHT);
      ctx.closePath();

      ctx.stroke();
    } else {
      var image = new Image();
      image.src = "images/land.png";
      ctx.drawImage(image, x, y / 2);
    }
  }

  var clear = function () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  }

  var printObject = function (object)
  {
    xPrint = object.x + that.originX;
    yPrint = object.y + that.originY;
    if (object.hidden)
      return;
    if (object.image) {
      // console.log(xPrint, yPrint, object.image);
      // console.log(object.image.width, object.image.height);
      BEGIN_X = 13
      BEGIN_Y = 43
      ctx.drawImage(object.image, xPrint - BEGIN_X, yPrint / 2 - object.image.height + BEGIN_Y);
      return;
    }
    if (gameMap.map[object.yTile][object.xTile] == 1)
      ctx.fillStyle = "rgb(255, 0, 0)";
    else
      ctx.fillStyle = "rgb(0, 255, 0)";
    if (object.current_selected_object_id)
      ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.beginPath();

    ctx.lineTo(xPrint + object.width, (yPrint + object.height / 2) / 2);
    ctx.lineTo(xPrint + object.width / 2, (yPrint + object.height) / 2);
    ctx.lineTo(xPrint, (yPrint + object.height / 2) / 2);
    ctx.lineTo(xPrint + object.width / 2, yPrint / 2);
        // ctx.rect(xPrint, yPrint, object.width, object.height);
    ctx.closePath();
    ctx.fill();
  }

  var drawMap = function () {
    for (var i = 0; i < gameMap.height; ++i)
    {
      for (var j = 0; j < gameMap.width; ++j)
      {
        drawTile((j - i) * TILE_WIDTH / 2, (j + i) * TILE_HEIGHT / 2, gameMap.map[i][j]);
        // drawTile(j * TILE_WIDTH, i * TILE_HEIGHT, gameMap.map[i][j]);
      }
    }
  }

  this.draw = function () {
    clear();
    drawMap();
    _.each(_.sortBy(_.sortBy(objects, function(e){return e.yTile;}), function (e){return e.xTile;}), function(el) {
      printObject(el);
    }) 
  };

  this.setMap = function (map) {
    gameMap = map;
  };

  this.addObject = function (object) {
    objects.push(object);
  };

  this.XToXTile = function (x) {
    var res = Math.floor((x - that.offsetX) / TILE_WIDTH);
    if (res < 0)
      res = 0;
    if (res > gameMap.width - 1)
      res = gameMap.width - 1;
    return res;
  }

  this.YToYTile = function (y) {
    var res = Math.floor((y - that.offsetY) / TILE_HEIGHT);
    if (res < 0)
      res = 0;
    if (res > gameMap.height - 1)
      res = gameMap.height - 1;
    return res;
  }
  this.gameMap = function () {
    return gameMap;
  }
}
