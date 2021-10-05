
import {World, Particle} from "./Model.mjs"
import {View} from "./View.mjs";


class Controller {
    #DELTA_T;
    #view;
    #world;
    #id;
    #buttons; //{"removeAllParticles": obj, "addParticle", obj, ...}
    constructor() {
        this.#DELTA_T = .1;
        this.#view = new View(document.getElementById("canvas"));
        this.#world = new World;
        this.#world.addParticle(new Particle(undefined, [80, 100]));
        this.#world.addParticle(new Particle([0, 100],[0,20]));
        this.#buttons = {
            removeAllParticles: document.querySelector(".removeAllParticles button"),
            addParticle: document.querySelector(".createParticle button")
        }
        this.setUpEventListeners();
    }

    setUpEventListeners(){
        this.#buttons.removeAllParticles.addEventListener('click', event => {
            event.preventDefault();
            this.#world.removeAllParticles();
            console.log("all particles removed. ");
            console.log(`world currently has ${this.#world.getParticles().length} particles`)
        })
    }

    run(){
        this.#id = setInterval(()=> {
            this.#world.timeEvolve();
            this.#view.render(this.#world);
            console.log("i'm being called.")
        }, this.#DELTA_T);
    }
}

var c = new Controller();
c.run();