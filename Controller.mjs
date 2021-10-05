
import {World, Particle} from "./Model.mjs"
import {View} from "./View.mjs";


class Controller {
    #paused; //boolean true or false
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
            addParticle: document.querySelector(".createParticle input[name='create']"),
            newParticleInitialConditions: document.querySelector(".createParticle"),
            togglePause: document.querySelector(".togglePause button")
        }
        this.setUpEventListeners();
        this.#paused = false;
    }

    setUpEventListeners(){
        this.#buttons.removeAllParticles.addEventListener('click', event => {
            event.preventDefault();
            this.#world.removeAllParticles();
            console.log("all particles removed. ");
            console.log(`world currently has ${this.#world.getParticles().length} particles`)
        })
        this.#buttons.togglePause.addEventListener('click', event=>{
            event.preventDefault();
            this.#paused = !this.#paused;
        })
        this.#buttons.addParticle.addEventListener('click', event => {
            event.preventDefault();
            console.log(event);
            const form = this.#buttons.newParticleInitialConditions;
            console.log(form)
            const x = Number(form.querySelector("input[id='x']").value);
            const y = Number(form.querySelector("input[id='y']").value);
            const vx = Number(form.querySelector("input[id='vx']").value);
            const vy = Number(form.querySelector("input[id='vy']").value);
            console.log(x,y,vx,vy)
            this.#world.addParticle(new Particle([x,y],[vx,vy]));
            console.log("new particle has been added")
            console.log(this.#world.getParticles()[0].getPosition())
        })

    }

    run(){
        this.#id = setInterval(()=> {
            if(!this.#paused)
                this.#world.timeEvolve();
            this.#view.render(this.#world);
            console.log(this.#world);
        }, this.#DELTA_T);
    }
}

var c = new Controller();
c.run();