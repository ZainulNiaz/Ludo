var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function Rectangle(x, y, width, height, fillcolor) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.fillcolor = fillcolor;

  this.draw = function() {
    c.beginPath();
    c.rect(this.x, this.y, this.width, this.height);
    c.strokeStyle = 'black';
    c.stroke();
    c.fillStyle = this.fillcolor;
    c.fill();

  }

}

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.strokeStyle = '#000000';
    c.stroke();
    //  var a = Math.floor((colorArray.length)*Math.random());
    c.fillStyle = this.color;
    c.fill();
  }



}

function text(x, y, font, text, color) {
  this.x = x;
  this.y = y;
  this.font = font;
  this.text = text;
  this.color = color;

  this.draw = function() {
    c.font = this.font;
    c.textAlign = 'center';
    c.fillStyle = this.color;
    c.fillText(this.text, this.x, this.y);

  }

}

function image(img , sx , sy , sWidth, sHeight, dx, dy, dWidth, dHeight){
  this.img = img;
  this.sx = sx;
  this.sy = sy;
  this.sWidth = sWidth;
  this.sHeight = sHeight;
  this.dx = dx;
  this.dy = dy;
  this.dWidth = dWidth;
  this.dHeight = dHeight;

  this.draw = function() {
      c.drawImage(this.img, this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight);
  }


}



var bigRect = new Rectangle(0.3 * (window.innerWidth), 0.1 * (window.innerHeight), 0.8 * (window.innerHeight), 0.8 * (window.innerHeight), '#FFFFFF');
bigRect.draw();


var lengthofboard = 0.8 * (window.innerHeight);
var x = 0.3 * window.innerWidth;
var y = 0.1 * window.innerHeight;

var colorArray = ['green', 'yellow', 'blue', 'red'];

var bigRectArray = [];
for (var i = 0; i < 4; i++) {
  bigRectArray.push(new Rectangle(x, y, 0.4 * (lengthofboard), 0.4 * (lengthofboard), colorArray[i]));
  bigRectArray[i].draw();
  if (i == 0) {
    x += 0.6 * lengthofboard;
  }
  if (i == 1) {
    y += 0.6 * lengthofboard;
  }
  if (i == 2) {
    x -= 0.6 * lengthofboard;
  }
}

x = 0.3 * window.innerWidth;
y = 0.1 * window.innerHeight;


var x2 = 0.3 * window.innerWidth;
var y2 = 0.1 * window.innerHeight;
var boxdrawx = x2;
var boxdrawy = y2 + 0.4 * (lengthofboard);
var smallsquaresize = 0.2 * (lengthofboard) / 3;

var rectArray = [];
var starArray = [];

for (var i = 1; i <= 48; i++) {

  if (i % 12 == 2) {
    rectArray.push(new Rectangle(boxdrawx, boxdrawy, smallsquaresize, smallsquaresize, colorArray[(i - 2) / 12]));
    var img3 = new Image(); // Create new img element
    img3.src = 'star.png';
    starArray.push(new image( img3 , 0, 0, 1024,1024, boxdrawx, boxdrawy, smallsquaresize, smallsquaresize));
  } else {
      if (i % 12 == 10) {
        var img3 = new Image(); // Create new img element
        img3.src = 'star.png';
        starArray.push(new image( img3 , 0, 0, 1024,1024, boxdrawx, boxdrawy, smallsquaresize, smallsquaresize));
      }
    rectArray.push(new Rectangle(boxdrawx, boxdrawy, smallsquaresize, smallsquaresize, '#FFFFFF'));
  }

  if ((i >= 1 && i < 6) || (i >= 19 && i < 24)) {
    boxdrawx += smallsquaresize;
  } else if ((i >= 7 && i < 12) || (i >= 37 && i < 42)) {
    boxdrawy -= smallsquaresize;
  } else if ((i >= 13 && i < 18) || (i >= 31 && i < 36)) {
    boxdrawy += smallsquaresize;
  } else if ((i >= 25 && i < 30) || (i >= 43 && i < 48)) {
    boxdrawx -= smallsquaresize;
  }

  if ((i / 6) % 2 == 1 && i % 6 == 0) {
    if (i / 6 == 1 || i / 6 == 3) {
      boxdrawx += smallsquaresize;
    } else {
      boxdrawx -= smallsquaresize;
    }

    if (i / 6 == 5 || i / 6 == 3) {
      boxdrawy += smallsquaresize;
    } else {
      boxdrawy -= smallsquaresize;
    }


  } else if (i % 6 == 0 && (i / 6) % 2 == 0) {
    if (i == 12) {
      boxdrawx += smallsquaresize;
    }
    if (i == 24) {
      boxdrawy += smallsquaresize;
    }
    if (i == 36) {
      boxdrawx -= smallsquaresize;
    }
    if (i == 48) {
      boxdrawy -= smallsquaresize;
    }
    rectArray.push(new Rectangle(boxdrawx, boxdrawy, smallsquaresize, smallsquaresize, '#FFFFFF'));
    if (i == 12) {
      boxdrawx += smallsquaresize;
    }
    if (i == 24) {
      boxdrawy += smallsquaresize;
    }
    if (i == 36) {
      boxdrawx -= smallsquaresize;
    }
    if (i == 48) {
      boxdrawy -= smallsquaresize;
    }


  }



}

for (var i = 0; i < 52; i++) {
  rectArray[i].draw();
}

boxdrawx = x2 + smallsquaresize;
boxdrawy = y2 + 0.4 * (lengthofboard) + smallsquaresize;

for (var i = 0; i < 5; i++) {
  rectArray.push(new Rectangle(boxdrawx, boxdrawy, smallsquaresize, smallsquaresize, colorArray[0]));
  boxdrawx += smallsquaresize;
  rectArray[i + 52].draw();
}

boxdrawx = x2 + 0.4 * (lengthofboard) + smallsquaresize;
boxdrawy = y2 + smallsquaresize;

for (var i = 0; i < 5; i++) {
  rectArray.push(new Rectangle(boxdrawx, boxdrawy, smallsquaresize, smallsquaresize, colorArray[1]));
  boxdrawy += smallsquaresize;
  rectArray[i + 57].draw();
}

boxdrawx += 2 * smallsquaresize;
boxdrawy += smallsquaresize;
boxdrawx += 4 * smallsquaresize;
for (var i = 0; i < 5; i++) {
  rectArray.push(new Rectangle(boxdrawx, boxdrawy, smallsquaresize, smallsquaresize, colorArray[2]));
  boxdrawx -= smallsquaresize;
  rectArray[i + 62].draw();
}

boxdrawx -= smallsquaresize;
boxdrawy += 6 * smallsquaresize;

for (var i = 0; i < 5; i++) {
  rectArray.push(new Rectangle(boxdrawx, boxdrawy, smallsquaresize, smallsquaresize, colorArray[3]));
  boxdrawy -= smallsquaresize;
  rectArray[i + 67].draw();
}

var circleArray = [];

for (var i = 0; i < 4; i++) {
  var xnew = bigRectArray[i].x + 0.2 * bigRectArray[i].width;
  var ynew = bigRectArray[i].y + 0.2 * bigRectArray[i].height;
  var widthnew = 0.6 * bigRectArray[i].width;
  var heightnew = 0.6 * bigRectArray[i].height;
  bigRectArray.push(new Rectangle(xnew, ynew, widthnew, heightnew, '#FFFFFF'));
  bigRectArray[i + 4].draw();
  for (var j = 0; j < 4; j++) {
    var radius = 0.1 * bigRectArray[i].width;
    if (j == 0) {
      xnew += widthnew / 4;
      ynew += heightnew / 4;
    }
    if (j == 1) {
      xnew += widthnew / 2;
    }
    if (j == 2) {
      ynew += heightnew / 2;
    }
    if (j == 3) {
      xnew -= widthnew / 2;
    }
    circleArray.push(new Circle(xnew, ynew, radius, colorArray[i]));
    circleArray[4 * i + j].draw();
  }

}

var chipsArray = [];
var chipsArrayposition = [];
var chipsArraycopy = [];
for (var i = 0; i < 16; i++) {
  chipsArrayposition.push(0);
}
var chipcolorarray = ['#81b214', '#FFD700', '#191970', '#8B0000'];

for (var i = 0; i < 16; i++) {
  var x12 = circleArray[i].x;
  var y12 = circleArray[i].y;
  var radius1 = smallsquaresize / 3;
  chipsArray.push(new Circle(x12, y12, radius1, chipcolorarray[Math.floor(i / 4)]));
  chipsArraycopy.push(new Circle(x12, y12, radius1, chipcolorarray[Math.floor(i / 4)]));
  chipsArray[i].draw();

}

//leaderboard//
var textx = bigRect.x + bigRect.width + 0.2 * canvas.height;
var texty = bigRect.y;
var leaderboardrect = new Rectangle(textx, texty, 0.3 * canvas.height, 0.7 * canvas.height, '#f6dcbf');
leaderboardrect.draw();
var leaderboardtext = [];
for (var i = 0; i < 5; i++) {
  texty += 0.1 * canvas.height;
  leaderboardtext.push(new text(textx + 0.15 * canvas.height, texty, '30px serif', 'Leaderboard', 'black'));
  leaderboardtext[i].draw();
}
//leaderboard finish//





var mouse = {
  x: undefined,
  y: undefined
}

var sx = 0;
var sy = 0;
// var sWidth= 64;
// var sHeight = 64;
var dicex = x + lengthofboard / 2 - smallsquaresize / 2;
var dicey = y - 64;
var noofdiceclick = 0;
var moveafterclick = true;
var moveonechip = true;
window.addEventListener('click',
  function(event) {
    if (event.x > dicex && event.x - dicex < 64 && event.y > dicey && event.y - dicey < 64 && moveafterclick) {
      if (Math.floor(sx / 64) == 5) {
        noofdiceclick--;
      }
      sx = 64 * Math.floor(6 * Math.random());
      noofdiceclick++;
      moveafterclick = false;
      moveonechip = false;
    }
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
    for (var i = 0; i < 16; i++) {
      console.log(noofmovesofchip[i]);
    }


  }
);

var noofchipscompleted = [];
var rankarray = [];
var rankboolarray = [];
var rank = 0;
for (var i = 0; i < 4; i++) {
  rankarray.push(0);
  rankboolarray.push(false);
}
var noofmovesofchip = [];
for (var i = 0; i < 16; i++) {
  noofmovesofchip.push(0);
  if (i < 4) {
    noofchipscompleted.push(0);
  }
}

function movechips() {

  this.move = function() {
    var arraycuta = [];
    for(var i=0;i<16;i++){
      arraycuta.push(chipsArrayposition[i]);
    }

    var j = noofdiceclick % 4;
    for (var i = 0; i < chipsArray.length; i++) {
      var k = chipsArrayposition[i];
      k += Math.floor(sx / 64);
      k += 1;
      if (Math.abs(chipsArray[i].x - mouse.x) < chipsArray[i].radius && Math.abs(chipsArray[i].y - mouse.y) < chipsArray[i].radius && j * 4 < i + 1 && j * 4 > i - 4 && !moveafterclick && !moveonechip) {
        moveafterclick = true;
        moveonechip = true;
        if (chipsArrayposition[i] == 0 && Math.floor(sx / 64) == 5) {
          chipsArray[i].x = rectArray[13 * j + 1].x + smallsquaresize / 2;
          chipsArray[i].y = rectArray[13 * j + 1].y + smallsquaresize / 2;
          // chipsArrayposition[i] += sx / 64;
          chipsArrayposition[i] += 13 * j;
          chipsArrayposition[i]++;
          noofmovesofchip[i]++;
        } else if (chipsArrayposition[i] == 0) {} else if (noofmovesofchip[i] + Math.floor(sx / 64) > 56) {} else if (noofmovesofchip[i] + Math.floor(sx / 64) == 56) {
          noofmovesofchip[i] = 58;
          noofchipscompleted[Math.floor(i / 4)]++;
          chipsArray[i].x = bigRect.x + bigRect.width/2;
          chipsArray[i].y = bigRect.y + bigRect.height/2;
        } else if (noofmovesofchip[i] + Math.floor(sx / 64) > 50) {
          chipsArrayposition[i] += Math.floor(sx / 64);
          chipsArrayposition[i]++;
          noofmovesofchip[i] += Math.floor(sx / 64);
          noofmovesofchip[i]++;
          console.log(noofmovesofchip[i]);
          chipsArray[i].x = rectArray[noofmovesofchip[i] + 5 * j].x + smallsquaresize / 2;
          chipsArray[i].y = rectArray[noofmovesofchip[i] + 5 * j].y + smallsquaresize / 2;

        } else {
          chipsArrayposition[i] += Math.floor(sx / 64);
          chipsArrayposition[i]++;
          chipsArray[i].x = rectArray[k % 52].x + smallsquaresize / 2;
          chipsArray[i].y = rectArray[k % 52].y + smallsquaresize / 2;
          noofmovesofchip[i] += Math.floor(sx / 64);
          noofmovesofchip[i]++;

        }
        break;
        // if(Math.floor(sx/64)==5){noofdiceclick--;}


      }

    }


    var arraycutb = [];
    for(var i=0;i<16;i++){
      arraycutb.push(chipsArrayposition[i]);
    }
    var changedindex = -1;
    for(var i=0;i<16;i++){
      if(arraycuta[i]!=arraycutb[i]){
        changedindex = i;
        break;
      }
    }

    for(var i=0;i<16;i++){
      if(chipsArrayposition[i]==arraycutb[changedindex] && !(j * 4 < i + 1 && j * 4 > i - 4) && arraycutb[changedindex]%13!=1 && arraycutb[changedindex]%13!=9  ){
        chipsArrayposition[i]=0;
        noofmovesofchip[i]=0;
        chipsArray[i].x = chipsArraycopy[i].x;
        chipsArray[i].y = chipsArraycopy[i].y;


      }

    }



    this.updaterank();
    this.updateleaderboard();

  }

  this.updateleaderboard = function() {
    for (var i = 1; i < 5; i++) {
      var stringrandom = "green ";
      if (i == 2) {
        stringrandom = "yellow ";
      }
      if (i == 3) {
        stringrandom = "blue ";
      }
      if (i == 4) {
        stringrandom = "red ";
      }
      leaderboardtext[i].text = stringrandom + rankarray[i - 1];
    }
  }

  this.updaterank = function() {
    for (var i = 0; i < 4; i++) {
      if (noofchipscompleted[i] == 4 && !rankboolarray[i]) {
        rank++;
        rankarray[i] == rank;
        rankboolarray[i] = true;
      }
    }

  }

}


// display whose turn it is //

textx = bigRect.x - 0.4 * canvas.height;
texty = bigRect.y;
var turnrect = new Rectangle(textx, texty, 0.3 * canvas.height, 0.7 * canvas.height, '#e1701a');
turnrect.draw();
var turntext = 'green';
if (noofdiceclick % 4 == 0) {
  turntext = 'green';
}
if (noofdiceclick % 4 == 1) {
  turntext = 'yellow';
}
if (noofdiceclick % 4 == 2) {
  turntext = 'blue';
}
if (noofdiceclick % 4 == 3) {
  turntext = 'red';
}

texty += 0.1 * canvas.height;
var turnrecttext = new text(textx + 0.15 * canvas.height, texty, '30px serif', turntext, 'black');
turnrecttext.draw();

////////////////----------/////////


var moving = new movechips();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  var img2 = new Image(); // Create new img element
  img2.src = 'ludobackground.png';
  c.drawImage(img2, 0, 0, canvas.width, canvas.height);

  bigRect.draw();
  for (var i = 0; i < 8; i++) {
    bigRectArray[i].draw();
  }
  for (var i = 0; i < 72; i++) {
    rectArray[i].draw();
  }
  for (var i = 0; i < 16; i++) {
    circleArray[i].draw();
  }
  for (var i = 0; i < 16; i++) {
    chipsArray[i].draw();
  }
  leaderboardrect.draw();
  for (var i = 0; i < 5; i++) {
    leaderboardtext[i].draw();
  }

  var img = new Image(); // Create new img element
  img.src = 'dice.png'; // Set source path
  if (noofdiceclick % 4 == 0) {
    turnrecttext.text = 'green';
    sy = 64 * 4;
  }
  if (noofdiceclick % 4 == 1) {
    turnrecttext.text = 'yellow';
    sy = 64 * 3;
  }
  if (noofdiceclick % 4 == 2) {
    turnrecttext.text = 'blue';
    sy = 64 * 5;
  }
  if (noofdiceclick % 4 == 3) {
    turnrecttext.text = 'red';
    sy = 64 * 1;
  }
  for(var i=0;i<8;i++){
    starArray[i].draw();
  }
  c.drawImage(img, sx, sy, 64, 64, dicex, dicey, 64, 64);
  moving.move();
  turnrect.draw();


  turnrecttext.draw();

}

animate();





//board drawn//
