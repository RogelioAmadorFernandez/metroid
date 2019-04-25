let horizon;
let velocidadObs;
let morro = []
const arregloCamina = []
let morroimg
let score
let obstaculos = []
let obstaculosArriba = []
let cactusGrande
let med
let ground
let bg
let size
const parallaxBg = []
function preload(){
	ground = loadImage('image/ground.png')
	bg = loadImage('image/fondo.png')
	
	cactusGrande = loadImage('image/metroidboss.png')
}

function setup() {
	size = 30
  	createCanvas(windowWidth, windowHeight);
	
	for(let i = 0; i <2; i++){
		parallaxBg.push(new parallaxs(bg, i*width, 0, width, height))
	}
	for(let i = 0; i < 2; i++){
		parallaxBg.push(new parallaxs(ground, i*width, height -42, width, 100))

	}
 	textAlign(CENTER);

  	horizon = height - 40;

	score = 0
	scoreAnt = 0
	velocidadObs = 6;

	for(let i = 0 ; i < 5; i++){

		morroimg = loadImage(`image/corriendo/correr-${i+1}.png`) 
		morro.push(morroimg)
	}
	
  textSize(20);

	med = new metroid(morro, size * 2, height - horizon, 60, 60);
	arregloCamina.push(med)
}

function draw() {
  	background('white')

	drawPaisajeScore()

	manejaNivel(frameCount)

	med.update(horizon)
	
	pintaObs()
	if (keyIsDown(UP_ARROW) && med.tierra)
		med.jump()
}

function drawPaisajeScore() {

	for(let p of parallaxBg){
		p.draw()
		p.move()
	}
	
	fill('white')
  	text("Puntos Metroid: " + score, width * .5, 30);

	for(let p of arregloCamina){
		p.draw();
	}
	
}
function pintaObs(){
	for(let ob of obstaculos){
		ob.update(velocidadObs)
		ob.draw()

		if (ob.hit(med)){
			noLoop()
		}


	}
}

function manejaNivel(n) {

  if (n % 180 == 0) {  

    var n = random(n)

    if (n > 2)
      creaNuevoObstaculo()

	  if (n % 150 == 0) 
	    velocidadObs *= 1
  }

	score++
}

function creaNuevoObstaculo() {

	let size = random(30) + 20;
	let sizeD = random(200, 300)
  	let obs = new medusa(cactusGrande, width + size, horizon - 80, 90, 80, size)
  	
  	obstaculos.push(obs);

}	
