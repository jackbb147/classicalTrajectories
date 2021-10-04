
/*
assuming a 2D world
 */

//position, velocity are both number arrays of length 2
class Particle {
    #position;
    #velocity;

    constructor(position, velocity){
        console.assert(position instanceof Array, "Model.mjs line 12")
        this.#position = position || [0,0];
        this.#velocity = velocity || [0,0];
    }

    getPosition(){
        return this.#position;
    }

    getVelocity(){
        return this.#velocity;
    }
}

class World {
    constructor(){
        this._particles = [];
    }


}

export {World, Particle};