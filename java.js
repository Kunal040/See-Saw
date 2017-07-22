var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');

setInterval(draw,30);
var x=canvas.width/2-100;
var z=canvas.width/2+100;
var y=canvas.height/2;
var k=canvas.height/2;
var dx=1;
var dy=-1;
var dk=-1;
var ballRadius=10;
var i=canvas.width/2-90;
var j=canvas.height/2-ballRadius-2;
var p=canvas.width/2+90;
var q=canvas.width/2-ballRadius-2;


function seesaw()
{
ctx.beginPath();
ctx.strokeStyle="black";
ctx.moveTo(canvas.width/2,canvas.height/2);
ctx.lineTo(canvas.width/2+20,canvas.height/2+20);
ctx.lineTo(canvas.width/2-20,canvas.height/2+20);
ctx.lineTo(canvas.width/2,canvas.height/2);
ctx.fillStyle="white";
ctx.fill();

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle="white";
ctx.moveTo(x,y);
ctx.lineTo(z,k);
ctx.lineWidth=5;
ctx.fillStyle="black";
ctx.fill();
ctx.stroke();

ctx.closePath();
}
function drawBall()
{
	ctx.beginPath();
	ctx.arc(i,j,ballRadius,0,Math.PI*2);
	ctx.fillStyle="white";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(p,q,ballRadius,0,Math.PI*2);
	ctx.fillStyle="white";
	ctx.fill();
	ctx.closePath();

}

function draw()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	seesaw();
	drawBall();
	

if(y+dy==canvas.height/2-50)
{
dy=-dy;
dk=-dk;

}
else if(k-dk==canvas.height/2-50)
{
dy=-dy;
dk=-dk;
}




y+=dy;
k-=dk;
j+=dy;
q-=dk;

}var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');

setInterval(draw,30);
var x=canvas.width/2-100;
var z=canvas.width/2+100;
var y=canvas.height/2;
var k=canvas.height/2;
var dx=1;
var dy=-1;
var dk=-1;
var ballRadius=10;
var i=canvas.width/2-90;
var j=canvas.height/2-ballRadius-2;
var p=canvas.width/2+90;
var q=canvas.width/2-ballRadius-2;


function seesaw()
{
ctx.beginPath();
ctx.strokeStyle="black";
ctx.moveTo(canvas.width/2,canvas.height/2);
ctx.lineTo(canvas.width/2+20,canvas.height/2+20);
ctx.lineTo(canvas.width/2-20,canvas.height/2+20);
ctx.lineTo(canvas.width/2,canvas.height/2);
ctx.fillStyle="white";
ctx.fill();

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle="white";
ctx.moveTo(x,y);
ctx.lineTo(z,k);
ctx.lineWidth=5;
ctx.fillStyle="black";
ctx.fill();
ctx.stroke();

ctx.closePath();
}
function drawBall()
{
	ctx.beginPath();
	ctx.arc(i,j,ballRadius,0,Math.PI*2);
	ctx.fillStyle="white";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(p,q,ballRadius,0,Math.PI*2);
	ctx.fillStyle="white";
	ctx.fill();
	ctx.closePath();

}

function draw()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	seesaw();
	drawBall();
	

if(y+dy==canvas.height/2-50)
{
dy=-dy;
dk=-dk;

}
else if(k-dk==canvas.height/2-50)
{
dy=-dy;
dk=-dk;
}




y+=dy;
k-=dk;
j+=dy;
q-=dk;

}