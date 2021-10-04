import {World, Particle} from "./Model.mjs";

var w = new World();
//
console.assert(
    w.getParticles().length === 0,
    "empty world must have particle array length to be 0"
)
//
w.addParticle(new Particle())

console.assert(
    w.getParticles().length == 1,
    "World with one particle must have particle array length to be 1"
)

w.removeParticle(0)

console.assert(
    w.getParticles().length == 0,
    "after removing a particle from a world with 1 particle, " +
    "particle array length should be 0"
)

console.assert(
    w.getV(10) == 0,
    "default potential is 0 for all x"
)


/**
 *  m: number
    x1,x2: number
 * @return {number}
 */
function V(m, x1, x2){
    const g = 9.8;
    return -m *g * x2;
}

w.setV((m,pos)=>{
    const g = 9.8;

    return m * g * x;
})
