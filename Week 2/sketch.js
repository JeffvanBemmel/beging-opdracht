let x = 100
let car=-150
let wiel1=-130

let cloud =900
let wiel2=-30

let licht; // 0 is rood, 1 is oranje, 2 is groen
function setup() {
  createCanvas(800, 600);
  licht=2
}

function draw() {
  background('lightblue');
  noStroke()
fill ('gray')
rect(0,400,800,200)

fill('white')
rect(0,490,100,20)
rect(120,490,100,20)
rect(240,490,100,20)
rect(360,490,100,20)
rect(480,490,100,20)
rect(600,490,100,20)
rect(720,490,100,20)
fill('darkgray')
triangle(400,400,200,100,0,400)
fill('lightgray');
triangle(600,400,400,70,200,400)

fill('brown')
rect(200,300,20,100)
fill ('green')
ellipse (210,290,70,100)



fill('brown')
rect(250,300,20,100)
fill ('green')
ellipse (260,290,70,100)


fill('brown')
rect(300,300,20,100)
fill ('green')
ellipse (310,290,70,100)



fill('brown')
rect(200,500,20,100)
fill ('green')
ellipse (210,510,70,100)




fill ('yellow')
circle(x,50,100)

x = x + 1.5;



if (x  >= 900){
x = -100

console.log(x);}

fill ('white')
ellipse(cloud,100,200,30)

cloud = cloud - 1.5;

if (cloud  <= -100){
cloud = 900
}

if (licht == 0){
car += 0
wiel1 += 0
wiel2 += 0
}



if (licht == 1){
car += 2
wiel1 += 2
wiel2 += 2
}



if (licht == 2){
car += 3
wiel1 += 3
wiel2 += 3
}


if (car  >= 900){
car = -140}




fill ('blue')
rect (car,430,150,30)


fill ('blue') 
rect(car,410,100,40)


if (wiel1 >= 900){
wiel1 = -140}






fill ('black')
circle(wiel1,460,30 )




if (wiel2  >= 900){
wiel2 = -140}




fill ('black')
circle(wiel2,460,30)


fill(180);
rect(700,300,20,100);
rect(685,230,50,130);

if (licht === 0) {
  fill(220,0,0);
  stroke(255,0,0);
  strokeWeight(3);
} else {
  fill(180,0,0);
  noStroke();
}
circle(710,255,30);
if (licht === 1) {
  fill(220,220,0);
  stroke(255,150,0);
  strokeWeight(3);
} else {
  fill(180,180,0);
  noStroke();
}
circle(710,295,30);
if (licht === 2) {
  fill(0,220,0);
  stroke(0,255,0);
  strokeWeight(3);
} else {
  fill(0,180,0);
  noStroke();
}
circle(710,335,30);

}

function keyPressed() {
  if (key === 'Enter') {
    if (licht === 0) {
      licht = 2;
    } else {
      licht--
    }
  } 

   








}



