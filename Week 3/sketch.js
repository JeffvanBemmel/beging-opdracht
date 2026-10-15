let v1 = 'gray'
let v2 = 'gray'
let v3 = 'gray'
let v4 = 'gray'
let v5 = 'gray'
let v6 = 'gray'
let v7 = 'gray'
let v8 = 'gray'
let v9 = 'gray'

let player = 1



let blueWon = 0
let redWon = 0

//v = vakje

// 




function setup() {
  createCanvas(380, 380);
}

function draw() {
  background(200);
  noStroke()
  fill('red')
  rect(0, 0, 190, 380)

  fill('blue')
  rect(190, 0, 190, 380)

  if (player ==2 ||player == 4 || player == 6 || player == 8 || player == 10){
  fill (0,0,0,100)  
rect (0,0,190,380)
  }
if (player ==1 ||player == 3 || player == 5 || player == 7 || player == 9){
  fill (0,0,0,100)  
rect (190,0,190,380)
}
  fill('white')
  rect(50, 50, 280, 280, 20)





  if (v1 == 'gray' || v1 == 170) {

    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 60 && mouseY <= 140) {
      v1 = 170
    } else {
      v1 = 'gray'
    }
  }
  fill(v1)
  rect(60, 60, 80, 80, 10)





  if (v2 == 'gray' || v2 == 170) {

    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 60 && mouseY <= 140) {
      v2 = 170
    } else {
      v2 = 'gray'
    }
  }

  fill(v2)
  rect(150, 60, 80, 80, 10)

  if (v3 == 'gray' || v3 == 170) {

    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 60 && mouseY <= 140) {
      v3 = 170
    } else {
      v3 = 'gray'
    }
  }
  fill(v3)
  rect(240, 60, 80, 80, 10)




  if (v4 == 'gray' || v4 == 170) {

    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 150 && mouseY <= 230) {
      v4 = 170
    } else {
      v4 = 'gray'
    }
  }




  fill(v4)
  rect(60, 150, 80, 80, 10)




  if (v5 == 'gray' || v5 == 170) {

    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 150 && mouseY <= 230) {
      v5 = 170
    } else {
      v5 = 'gray'
    }
  }







  fill(v5)
  rect(150, 150, 80, 80, 10)






  if (v6 == 'gray' || v6 == 170) {

    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 150 && mouseY <= 230) {
      v6 = 170
    } else {
      v6 = 'gray'
    }
  }

  fill(v6)
  rect(240, 150, 80, 80, 10)




  if (v7 == 'gray' || v7 == 170) {

    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 240 && mouseY <= 320) {
      v7 = 170
    } else {
      v7 = 'gray'
    }
  }





  fill(v7)
  rect(60, 240, 80, 80, 10)




  if (v8 == 'gray' || v8 == 170) {

    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 240 && mouseY <= 320) {
      v8 = 170
    } else {
      v8 = 'gray'
    }
  }
  fill(v8)
  rect(150, 240, 80, 80, 10)


  if (v9 == 'gray' || v9 == 170) {

    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 240 && mouseY <= 320) {
      v9 = 170
    } else {
      v9 = 'gray'
    }
  }
  fill(v9)
  rect(240, 240, 80, 80, 10)






  fill('white')
  rect(140, 340, 100, 30, 10)
  fill('black')
  textSize(20)
  text('restart', 160, 360)

 // text(player, 20, 20)

  //winconditions
  
  //blue
  
  if(player <= 9 || blueWon == 0 || redWon == 0){




  if (v1 != 'gray' && v1 != 170 && v2 != 'gray' && v2 != 170 && v3 != 'gray' && v3 != 170 && v4 != 'gray' && v4 != 170 && v5 != 'gray' && v5 != 170 &&
    v6 != 'gray' && v6 != 170 && v7 != 'gray' && v7 != 170 && v8 != 'gray' && v8 != 170 && v9 != 'gray' && v9 != 170 && blueWon == 0 && redWon == 0
  ) {
    fill(255)
    textSize(20)
    text('draw', 170, 40)

  }








  if (v1 == 'blue' && v2 == 'blue' && v3 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
    player = 20
    strokeWeight(5)
    stroke(0)
    fill(0)
    line (80,100,300, 100)
    blueWon = 1
  }
  if (v4 == 'blue' && v5 == 'blue' && v6 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
    player = 20
    strokeWeight(5)
    stroke(0)
    fill(0)
    line (80,190,300, 190)
    blueWon = 1
  }
  if (v7 == 'blue' && v8 == 'blue' && v9 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (80,280,300, 280)
    blueWon = 1
  }
if (v1 == 'blue' && v4 == 'blue' && v7 == 'blue')  {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
    player = 20
   strokeWeight(5)
    stroke(0)
    fill(0)
  line(100,100,100, 280)
  blueWon = 1
}
     
  if (v2 == 'blue' && v5 == 'blue' && v8 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (190,100,190, 280)
    blueWon = 1
  }
  if (v3 == 'blue' && v6 == 'blue' && v9 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (280,100,280, 280)
    blueWon = 1
  }
  if (v1 == 'blue' && v5 == 'blue' && v9 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (100,100,280, 280)
    blueWon = 1
  }
  if (v3 == 'blue' && v5 == 'blue' && v7 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (280,100,100, 280)
    blueWon = 1
  }

  //red
  if (v1 == 'red' && v2 == 'red' && v3 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (80,100,300, 100)
    redWon = 1
  }
  if (v4 == 'red' && v5 == 'red' && v6 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (80,190,300, 190)
    redWon = 1
  }
  if (v7 == 'red' && v8 == 'red' && v9 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (80,280,300, 280)
    redWon = 1
  }
  if (v1 == 'red' && v4 == 'red' && v7 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (100,100,100, 280)
    redWon = 1
  }
  if (v2 == 'red' && v5 == 'red' && v8 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (190,100,190, 280)
  }
  if (v3 == 'red' && v6 == 'red' && v9 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (280,100,280, 280)
    redWon = 1
  }
  if (v1 == 'red' && v5 == 'red' && v9 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (100,100,280, 280)
    redWon = 1
  }

  if (v3 == 'red' && v5 == 'red' && v7 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
    player = 20
     strokeWeight(5)
    stroke(0)
    fill(0)
    line (280,100,100, 280)
    redWon = 1
  }
 }
}
function changeTurn()
{
player +=1

}






















function mouseClicked() {



  

  if (player == 1 || player == 3 || player == 5 || player == 7|| player == 9 || player == 11) {
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 60 && mouseY <= 140 && v1 == 170) {
      v1 = 'red'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 60 && mouseY <= 140 && v2 == 170) {
      v2 = 'red'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 60 && mouseY <= 140 && v3 == 170) {
      v3 = 'red'
      changeTurn();
    }
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 150 && mouseY <= 230 && v4 == 170) {
      v4 = 'red'
    changeTurn();}
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 150 && mouseY <= 230 && v5 == 170) {
      v5 = 'red'
      changeTurn();}
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 150 && mouseY <= 230 && v6 == 170) {
      v6 = 'red'
    changeTurn();}
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 240 && mouseY <= 320 && v7 == 170) {
      v7 = 'red'
    changeTurn();}
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 240 && mouseY <= 320 && v8 == 170) {
      v8 = 'red'
    changeTurn();}
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 240 && mouseY <= 320 && v9 == 170) {
      v9 = 'red'
    changeTurn();}
  }




  if (player == 2 || player == 4 || player == 6 || player == 8 || player == 10) {
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 60 && mouseY <= 140 && v1 == 170) {
      v1 = 'blue'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 60 && mouseY <= 140 && v2 == 170) {
      v2 = 'blue'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 60 && mouseY <= 140 && v3 == 170) {
      v3 = 'blue'
      changeTurn();
    }
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 150 && mouseY <= 230 && v4 == 170) {
      v4 = 'blue'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 150 && mouseY <= 230 && v5 ==170) {
      v5 = 'blue'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 150 && mouseY <= 230 && v6 ==170) {
      v6 = 'blue'
      changeTurn();
    }
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 240 && mouseY <= 320 && v7 ==170) {
      v7 = 'blue'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 240 && mouseY <= 320 && v8 ==170) {
      v8 = 'blue'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 240 && mouseY <= 320 && v9 ==170) {
      v9 = 'blue'
      changeTurn();
    }
  }

  if (mouseX >= 140 && mouseX <= 240 && mouseY >= 340 && mouseY <= 370) {
    player = 1
    v1 = 'gray'
    v2 = 'gray'
    v3 = 'gray'
    v4 = 'gray'
    v5 = 'gray'
    v6 = 'gray'
    v7 = 'gray'
    v8 = 'gray'
    v9 = 'gray'
    blueWon = 0
    redWon = 0
  }
}