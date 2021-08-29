class Runner{

	constructor(){
		this.pos = 1
	}

	advanceDistance(){	

		let d = Math.floor(Math.random()*6 + 1)

		if(d == 1 || d == 2){
		this.pos += 1
		}else if(d == 3 || d == 4 || d == 5){
		this.pos += 2
		}else if(d == 6){
		this.pos += 3
		}

	return this.pos
	}

}

let p1 = new Runner()
let p2 = new Runner()

console.log("Corredor #1"+ "     " + "Corredor #2")

while(p1.pos < 100 && p2.pos < 100) {
p1.advanceDistance()
p2.advanceDistance()

console.log(p1.pos + "                " + p2.pos)

}

if(p1.pos >= 100 && p2.pos >=100){
console.log("ES UN EMPATE!")
}else if(p1.pos < 100){
console.log("EL CORREDOR 2 HA GANADO!")
}else if(p2.pos < 100){
console.log("EL CORREDOR 1 HA GANADO!")
}
