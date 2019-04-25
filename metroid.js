class metroid{
	constructor (img, x, y, w, h) {
	this.img    = img
	this.x      = x
	this.y      = y
	this.w      = w
	this.h      = h
	this.index  = 0
	this.speedY = 0
	this.speed  = 0.5
	this.tierra = true
	this.gravedad = 0.29
}

	draw() {

		image(this.img[floor(this.index) % 5], this.x, this.y, this.w, this.h)
		this.index += this.speed
	}

	jump() {

		this.speedY = -(this.w * this.gravedad) 
	}
	update(piso) {

	let toca = this.y + this.w 
	let calcularAbajo = toca + this.speedY

  if (toca <= piso && calcularAbajo >= piso) { 

		this.speedY = 0 
		this.y = piso - this.w 
		this.tierra = true
  } else if (piso - toca > 1) { 

		this.speedY += this.speed	
		this.tierra = false
  }

	this.y += this.speedY
}
	
}