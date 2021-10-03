import {_2DTrajectorySolver} from './library.js'
console.log("hello world")

var trajectory = _2DTrajectorySolver(
    [10,50],
    [0,0],
    0,
    10,
    .1,
    -9.8
)
console.log(trajectory)
