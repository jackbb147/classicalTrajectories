
import {World, Particle} from "./Model.mjs"
import {View} from "./View.mjs";

const DELTA_T = 0.1;
const v = new View(document.getElementById("canvas"));
var w  = new World();

w.addParticle(new Particle(undefined, [80, 100]));
w.addParticle(new Particle([0, 100],[0,20]));

let id = setInterval(()=> {
    w.timeEvolve();
    v.render(w);
    console.log("i'm being called.")
}, DELTA_T);