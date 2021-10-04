
class View{

    #canvas;
    #ctx;
    #particleDefaultSize; //[width, height]
    //canvasEl: obtained through document.getElement
    constructor(canvasEl){
        this.#canvas = canvasEl;
        this.#ctx = this.#canvas.getContext("2d");
        this.#ctx.translate(0, this.#canvas.height);
        this.#ctx.scale(1,-1);
        this.#particleDefaultSize = [10,10];
    }

    /**
     *
     * @param world: World class
     */
    render(world){
        const ctx = this.#ctx;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "#FF0000";
        const particles = world.getParticles();
        const size = this.#particleDefaultSize;
        particles.forEach(particle => {
            const position = particle.getPosition();
            ctx.fillRect(
                position[0],
                position[1],
                size[0],
                size[1]
            )
        })
    }


}

export {View};







// import {_2DTrajectorySolver} from "./library.js";
// const DELTA_T = .01;
// var canvas = document.getElementById("canvas");
// console.log(canvas)
//
//
// var ctx = canvas.getContext("2d");
//
// //reset origin so that it's on bottom left
// ctx.translate(0, canvas.height);
// ctx.scale(1, -1);
//
//
// //drawing
// ctx.fillStyle = "#FF0000";
// // ctx.fillRect(0, 0, 10, 10);
//
// // ctx.clearRect(0,0, canvas.width, canvas.height)
// // ctx.fillRect(100, 0, 10, 10);
//
//
//
// var updateFrame = (()=>{
//     var trajectory = _2DTrajectorySolver(
//         [90,90],
//         [0,0],
//         0,
//         10,
//         DELTA_T,
//         -9.8
//     )
//     var i_x=0; // unaccelerated
//     var i_y=1; // accelerated
//     var x = 0;
//     var y = 0;
//
//     return ()=>{
//         console.log(trajectory.unaccelerated[i_x]);
//         console.log(trajectory.accelated[i_y]);
//         ctx.clearRect(0,0, canvas.width, canvas.height);
//         // ctx.fillRect(
//         //         //     trajectory.unaccelerated[i_x],
//         //         //     trajectory.accelated[i_y],
//         //         //     5,
//         //         //     5
//         //         // );
//         ctx.fillRect(trajectory.unaccelerated[i_x], trajectory.accelated[i_y], 10, 10);
//         x+=10;
//         y+=10;
//         i_x++;
//         i_y++;
//         console.log("I'm being called!");
//     };
// })();
//
// let id = setInterval(updateFrame, DELTA_T);
