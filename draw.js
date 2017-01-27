var c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
var cn = c.getContext('2d');

cn.fillRect(0,0,c.width,c.height);
var cp = {x:0,y:c.height/2};
function px(xd, yd, g) {
  cn.beginPath();
  cn.moveTo(g.x,g.y);
  cn.lineTo(g.x+xd,g.y+yd);
  cn.stroke();
  g.x += xd;
  g.y += yd;
}
var graphs = [];
function draw() {
  var r, g;
  for(var i = 0, l = graphs.length; i < l; i += 1) {
    g = graphs[i];
    cn.strokeStyle = g.rgba;
    r = Math.random();
    if(r > 0.66) {
      px(1, 1, g);
    } else if( r < 0.33) {
      px(1, 0, g);
    } else {
      px(1, -1, g);
    }
  }
}

function Graph(x, y) {
  this.x = x;
  this.y = y;
  var r = (Math.random() * 256).toFixed(0);
  var g = (Math.random() * 256).toFixed(0);
  var b = (Math.random() * 256).toFixed(0);
  this.rgba = "rgba(" + r + ',' + g + ',' + b + ",0.5)";
  graphs.push(this);
}

for(var base = 0; base < 400; base += 1) {
  graphs.push(new Graph(0, Math.round(Math.random() * c.height)));
}
for(var drawn = 0; drawn < c.width; drawn += 1) {
  draw();
}
// var addI = setInterval(function() {
//   if(Math.random() > 0.8){
//     if(graphs.length < 100) new Graph(0, Math.round(Math.random() * c.height));
//     draw();
//   }
// },10);
