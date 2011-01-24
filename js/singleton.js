
// function configuration()
// {
//   this.instance = null;
// 
//   this.ctx           = null;
//   this.canvas_height = 600;
//   this.canvas_width  = 600;
// 
//   if (configuration.caller != configuration.getInstance)
//   {
//     throw new Error('This object can\'t be instanciated.');
//   }
// }
// 
// configuration.getInstance = function ()
// {
//   if (this.instance == null)
//   {
//       this.instance = new configuration();
//   }
// 
//   return this.instance;
// }