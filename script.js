
console.log("hello world")

class particle {
    constructor(energy,position=0){
        this._energy = energy;
        this._position = position;
    }
    get energy(){
        return this._energy;
    }
    set energy(newEnergy){
        this._energy = newEnergy;
    }
    get position(){
        return this._position;
    }
    set position(newPosition){
        this._position = newPosition;
    }
}


var A = new particle(10)

console.log(A.energy)

