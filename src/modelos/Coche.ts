class Coche{
    private _matricula : string
    private _marcha : boolean
    private _fuel : number

    constructor(matricula: string){
        this._matricula = matricula
        this._fuel = 0
        this._marcha = false
    }

    get fuel(){
        return this._fuel
    }

    reposta(fuel: number){
        this._fuel += fuel
    }

    conduceHastaDestino(fuelConsumo: number){
        if(fuelConsumo > this._fuel){
            this._fuel = 0
            return false
        }
        else{
            this._fuel -= fuelConsumo
            return true
        }
    }
}

export {Coche}