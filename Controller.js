
import {World, Particle} from "./Model.mjs"

var w  = new World();
w.addParticle(new Particle(undefined, [50, 90]));


var particles = w.getParticles();
var p1 = particles[0];

console.log(p1.getPosition())

w.timeEvolve();
console.log(p1.getPosition());

for(var i = 0; i < 1800; i++){
    w.timeEvolve();
    console.log(p1.getPosition());
}
