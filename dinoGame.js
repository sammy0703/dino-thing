var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };
var canvas = document.createElement('canvas');
var width = 800;
var height = 200;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');
window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};
var step = function() {
  update();
  render();
  animate(step);
};
var update = function() {
};
var render = function() {
  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, width, height);
};
function Dino(y, width, height){
    this.y=y;
    this.width=width;
    this.height=height;
    this.animCt=0;
}
Dino.prototype.render=function(){
    var img1= new Image();
    img1.src="bigChungus.png";
    context.drawRectangle(80, this.y, this.width, this.height);
    //context.drawImage(img1, 80, this.y, this.width, this.height);
}
function Player(){
    this.Dino= new Dino(375, 70, 100);
}
Player.prototype.render=function(){
    this.Dino.render();
}
function Cacti(x, y, h, w, xS, yS){
    this.x=x;
    this.y=y;
    this.height=h;
    this.width=w;
    this.xSpeed=xS;
    this.ySpeed=yS;
}
