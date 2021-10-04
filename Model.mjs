
/*
assuming a 2D world
 */

//position, velocity are both number arrays of length 2
class Particle {
    #position;
    #velocity;

    constructor(position, velocity){
        console.assert(!position || (position instanceof Array && position.length == 2), "Model.mjs line 12")
        console.assert(!velocity|| (velocity instanceof Array && velocity.length == 2), "Model.mjs line 13")
        this.#position = position || [0,0];
        this.#velocity = velocity || [0,0];
    }

    getPosition(){
        return this.#position;
    }

    getVelocity(){
        return this.#velocity;
    }

    setPosition(pos){
        console.assert(pos instanceof Array && pos.length == 2, "Model.mjs line 26")
        this.#position = pos;
    }

    setVelocity(vel){
        console.assert(vel instanceof Array && vel.length == 2, "Model.mjs line 31");
        this.#velocity = vel;
    }
}

class World {
    #particles;
    constructor(particles){
        this.#particles = particles || [];
    }

    getParticles(){
        return this.#particles;
    }

    addParticle(particle){
        console.assert(particle instanceof Particle)
        this.#particles.push(particle);
    }

    //i: index of particle to remove
    removeParticle(i){
        console.assert(
            Number.isInteger(i) && i>=0 && i<this.#particles.length,
            "remove particle failed; line 56 Model.mjs"
            );

        this.#particles.splice(i, 1);
    }


}

export {World, Particle};