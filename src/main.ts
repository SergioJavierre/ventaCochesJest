import { Coche } from './modelos/Coche'


let coche = new Coche('1234')
let repostaje = 100
coche.reposta(repostaje)
let fuelEsperado : number = coche.fuel
console.log(coche)
console.log(fuelEsperado)