import { Coche } from '../modelos/Coche'

test('Prueba de repostaje', () => {
    let coche = new Coche('1234')
    let repostaje = 100
    coche.reposta(repostaje)
    let fuelEsperado : number = coche.fuel
    expect(fuelEsperado).toBe(repostaje)
})

test('Prueba de distancia', () => {
    let coche = new Coche('1234')
    let repostaje = 100
    coche.reposta(repostaje)
    let llega = coche.conduceHastaDestino(90)
    expect(llega).toBe(true)
})