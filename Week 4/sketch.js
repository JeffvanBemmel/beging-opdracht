let cicrles = []

let squares = []

function setup() {
  createCanvas(400, 400);

  cicrles.push([100, 200, 444, "cyan"]);


  cicrles.push([100, 200, 333, "pink"]);

  cicrles.push([100, 200, 222, "blue"]);

  cicrles.push([100, 200, 111, "green"]);

  cicrles.push([100, 200, 51, "orange"]);


  let sq = {
    x: 200, 
    y: 200, 
    size: 51, 
    color: "magenta"
  }

  squares.push( sq );

}

function draw() {
  background(220);

  for (let i = 0; i < cicrles.length; i++) {
    fill(cicrles[i][3])
    circle(cicrles[i][0], cicrles[i][1], cicrles[i][2])
  }


    for (let i = 0; i < squares.length; i++) {
    fill( squares[i].color )
    square(squares[i].x, squares[i].y, squares[i].size )
  }


}
