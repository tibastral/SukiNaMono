var CursorController = function (parentController) {
  this.parentController = parentController;
  this.cursor = new Cursor(1, 3); // @TODO: faire attention à la limite de la map
  var that = this;

  function onMouseMove(evt) {
    that.cursor.setXTile(that.parentController.gv.XToXTile(evt.pageX));
    that.cursor.setYTile(that.parentController.gv.YToYTile(evt.pageY));
  }
  
  $(document).mousemove(onMouseMove);
  $(document).delegate('.items a', 'click', function () {
    that.cursor.current_selected_object_id = $(this).attr('data-id');
  });

}