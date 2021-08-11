class automovil{
    constructor(pMarca, pColor, pRuedas, pMotor, pAutomatico){
        this.marca = pMarca;
        this.color = pColor;
        this.ruedas = pRuedas;
        this.motor = pMotor;
        this.automatico = pAutomatico
    }
}

let pMarca = prompt("Ingrese marca");
let pColor = prompt("ingrese color");
let pRuedas = parseInt(prompt("Ingrese cant ruedas"));
let pMotor = parseFloat(prompt("Ingrese motor"));
let pAutomatico = prompt("Seleccione con SI o No para automatico")

var miAuto = new automovil(pMarca, pColor, pRuedas, pMotor, pAutomatico);

console.log(miAuto)

alert("tu auto es un "+miAuto.marca+" de color "+miAuto.color+" y con un motor de "+miAuto.motor)