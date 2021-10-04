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

