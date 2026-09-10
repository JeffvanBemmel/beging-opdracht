function setup() {
  createCanvas(2000,4000);
  noFill();
}

  function draw() {      
  background(150);
text ('1 Jeff',10,40); 
    text ('2',20,80);
    fill(0,0,0);
 rect(50,50,200,100);
 fill(255,175,0);
 rect(50,150,200,100);
 fill(255,0,0);
 rect(50,250,200,100);
text ('3',20,400);
fill(255,255,255);
square(20,600,210);
fill(0,0,0);
square(20,600,70);
fill(255,255,255);
square(160,600,70);
fill(0,0,0);
square(90,670,70);
fill(0,0,0);
square(20,670,70);
fill(0,0,0);
square(160,670,70);
fill(255,255,255);
square(90,740,70);
fill(0,0,0);
square(90,600,70);  
fill(255,255,255);
square(160,670,70);  
fill(0,0,0);
square(160,600,70);  
fill(0,0,0);
square(160,740,70);

text ('4',300,50);
rect(350,50,100,200)
fill(255,0,0);
circle(400,100,50);
fill(255,165,0);
circle(400,150,50);
fill(0,255,0);
circle(400,200,50)
fill(0,0,0);
rect(400,250,20,100);


 fill(255,0,0)
  strokeWeight(0)
  rect(1000, 50, 100, 20);
  rect(980, 70, 180, 20);
  fill(255, 219, 176)
  rect(1000, 90, 100, 100);
  rect(1100, 110, 40, 80);
  rect(1100, 110, 60, 60);
  rect(1160, 130, 20, 20);
  rect(980, 110, 20, 40);
  fill(0,0,0)
  rect(1080, 90, 20, 40);
  rect(1080, 150, 80, 20);
  rect(1100, 130, 20, 20);
  fill(130, 96, 56)
  rect(980, 90, 60, 20);
  rect(1000, 110, 20, 40);
  rect(1020, 130, 20, 20);
  rect(980, 150, 20, 20);
  rect(960, 110, 20, 60);
  fill(255,0,0)
  rect(980, 190, 120, 80);
  rect(960, 210, 180, 20);
  rect(940, 230, 220, 20);
  rect(980, 250, 140, 20);
  fill(0,0,255)
  rect(1000, 250, 100, 60);
  rect(1070, 290, 50, 40);
  rect(980, 290, 50, 40);
  fill(79, 56, 29)
  rect(960, 330, 50, 40);
  rect(1090, 330, 50, 40);
  rect(940, 350, 50, 20);
  rect(1100, 350, 60, 20);
  fill(255, 219, 176)
  rect(940, 250, 40, 60);
  rect(1120, 250, 40, 60);
  rect(980, 270, 20, 20);
  rect(1100, 270, 20, 20);

strokeWeight(5)
fill(255)
square(20, 600, 300);
fill(0)
square(20, 600, 100);
square(20,800,100);
square(220,600,100)
square(220,800,100);
square(120,700,100)

fill(255)
square(450,400,200,20)
fill(0)
circle(550,500,50,)

const startX = 800;
  const startY = 800;
  const pixelSize = 20;

  const C = {
    H: "#ff7700",
    S: "#f2ba91",
    L: "#d49b73",
    d: "#b77d54",
    W: "#ffffff",
    E: "#2c9342",
    N: "#f07e9c",
    M: "#442211",
  };

  const steveGrid = [
    [C.H, C.H, C.H, C.H, C.H, C.H, C.H, C.H],
    [C.H, C.H, C.H, C.H, C.H, C.H, C.H, C.H],
    [C.H, C.H, C.H, C.H, C.S, C.S, C.H, C.H],
    [C.H  , C.H, C.H, C.S, C.S, C.S, C.S, C.H],
    [C.S, C.W, C.E, C.S, C.S, C.E, C.W, C.S],
    [C.S, C.S, C.S, C.S, C.S, C.S, C.S, C.S],
    [C.S, C.S, C.S, C.N, C.N, C.S, C.S, C.S],
    [C.S, C.S, C.S, C.S, C.S, C.S, C.S, C.S],
  ];

  noStroke();

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      fill(steveGrid[row][col]);

      let x = startX + col * (pixelSize * 2);
      let y = startY + row * (pixelSize * 2);

      rect(x, y, pixelSize * 2, pixelSize * 2);
   
   
   
   
   
    }
  }
}



fill (255,255,255,30)
square (20,200,200)