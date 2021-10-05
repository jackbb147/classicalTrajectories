
/*
assuming : a 2D world and a mgx2 potential
 */

//position, velocity are both number arrays of length 2
class Particle {
    #position;
    #velocity;
    #initialPos;
    #initialVel;
    #age; //integer starting from 0; increments by 1 each time-quanta

    constructor(position, velocity){
        console.assert(!position || (position instanceof Array && position.length == 2 && typeof position[0]==='number' && typeof position[1]==='number'), "Model.mjs line 12")
        console.assert(!velocity|| (velocity instanceof Array && velocity.length == 2 && typeof velocity[0]==='number' && typeof velocity[1]==='number'), "Model.mjs line 13")

        this.#position = position || [0,0];
        this.#velocity = velocity || [0,0];
        this.#initialPos = this.#position;
        this.#initialVel = this.#velocity;
        console.log("hello")
        this.#age = 0;
    }

    /**
     *
     * @param initial: true if asking for initial value.
     * @returns {*}
     */
    getAge(){
        return this.#age;
    }
    incrementAge(){
        this.#age += 1;
    }
    getPosition(initial){
        return initial ? this.#initialPos : this.#position;
    }

    /**
     *
     * @param initial: true if asking for initial value.
     * @returns {*}
     */
    getVelocity(initial){
        return initial ? this.#initialVel : this.#velocity;
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

/*
particles: array []
time: number
deltaT: number
elapsedTimeIntervalCount: number 1,2,3,4....
V(x): the potential function

 */
class World {
    #particles;
    #time;
    #deltaT;
    #elapsedTimeIntervalCount;
    #V;
    #g;

    /**
     * this is the unaccelerated direction
     * @param elapsedT
     * @param v0
     * @param x0
     * @returns {*}
     */
    static constantVelocityTrajectory(elapsedT, v0,x0){
        return x0 + v0*elapsedT;
    }

    /**
     *
     * @param accel
     * @param elapsedT
     * @param v0
     * @param x0
     * @returns {*}
     */
    static acceleratedTrajectory(accel, elapsedT, v0, x0){
        var ans = .5 * accel * (elapsedT**2) +  v0*elapsedT + x0;
        return ans;
    }

    /*
    Particles: array
    time: number
     */
    constructor(particles, time, deltaT, V,g){
        console.assert(
            !particles || particles instanceof Array,
            "line 43 Model.mjs"
        )
        this.#particles = particles || [];
        this.#time = time || 0;
        this.#deltaT = deltaT || .01;
        this.#elapsedTimeIntervalCount = 0 ;
        this.#V = V || ((x)=>{return 0});
        this.#g = g || -9.8;
    }

    getV(x){
        return this.#V(x);
    }

    setV(f){
        console.assert(f instanceof Function);
        this.#V = f;
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

    removeAllParticles(){
        this.#particles.splice(0, this.#particles.length);
    }



    //inch forward in time, according to the Hamiltonian
    timeEvolve(){
        this.#particles.forEach(particle => {
            var pos = particle.getPosition(true);
            var vel = particle.getVelocity(true);
            var elapsedTime = particle.getAge() * this.#deltaT;
            var newPos = [
                World.constantVelocityTrajectory(
                    elapsedTime,
                    vel[0],
                    pos[0]
                ),
                World.acceleratedTrajectory(
                    this.#g,
                    elapsedTime,
                    vel[1],
                    pos[1]
                )
            ]

            particle.setPosition(newPos);
            particle.incrementAge();
        //!!! velocity hasn't been updated. probably should! !!!
        })
        this.#elapsedTimeIntervalCount ++;
    }


}

export {World, Particle};