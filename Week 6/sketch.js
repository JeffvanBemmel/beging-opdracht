let energy =100 


function setup() {

  createCanvas(800, 600);

  let buttonEat = createButton('eet banaan')
  buttonEat.position(100,100)
  buttonEat.mousePressed(eatfunction)


  
   let buttonEat1 = createButton('eet vlees')
  buttonEat1.position(200,200)
  buttonEat1.mousePressed(eatfunction)
}

function draw() {
   background(220);

   

  energy = energy - 0.1
  if (energy <= 0 ) {
    energy = 0 
  }
 fill('black')
 text ("energy: "  +  round ( energy ),50,50 )
  

 fill('blue')
 rect (50,60,energy,20)
}

function eatfunction (){
  console.log('ga eten')
  energy += 20






  //honger              //dorst
 //gezondheid
 //gelukigheid 
}