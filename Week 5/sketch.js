

let vragenlijst = [     ]
let welkeVraag = 0;






function setup() {
  createCanvas(700, 700);

  let data = {} //maak een nieuwe vraag (dit is een object)
  data.vraag = "Hoe heet dit logo?"
  data.antwoordA = "Puma"
  data.antwoordB = "Zonnebloem"
  data.antwoordC = "MSI"
  data.antwoordD = "Omen"

  vragenlijst.push(data); //toevoegen vraag aan de vragenlijst

  data = {}
  data.vraag = "Zonnig?"
  data.antwoordA = "Ja"
  data.antwoordB = "Nee"
  data.antwoordC = "Misschien"
  data.antwoordD = "Wolken"

  vragenlijst.push(data);

  console.log(vragenlijst)
}

function draw() {
  background(220);

rect (250,200,150,50)

text (vragenlijst[welkeVraag].vraag,270,230)

text (vragenlijst[welkeVraag].antwoordA,270,250)
text (vragenlijst[welkeVraag].antwoordB,270,270)
text (vragenlijst[welkeVraag].antwoordC,270,290)
text (vragenlijst[welkeVraag].antwoordD,270,310)

rect (10,400,150,50)
rect (10,300,150,50)

rect (540,400,150,50)
rect (54                                                                  0,300,150,50)
}

function mouseClicked()
{
  doeAntwoordA();
  welkeVraag = welkeVraag + 1
}

function doeAntwoordA()
{
  console.log("jeej")
}
