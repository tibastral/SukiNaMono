var Cursor = function ()
{
  var that = this;

  this.hide = function () {
    that.hidden = true;
  }

  this.show = function () {
    that.hidden = false;
  }

  this.compute = function () {}

  var init = function () {
    that.hidden = true;
    that.current_selected_object_id = null;
    that.width = TILE_WIDTH;
    that.height = TILE_HEIGHT;
  }
  init();
}

augment(Cursor, IsoConvertible);
