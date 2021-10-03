
function roundTo2Decimal(number){
    return Number(number).toFixed(2)
}
function constantVelocityTrajectory(elapsedT, v0,x0){
    return x0 + v0*elapsedT;
}

function acceleratedTrajectory(accel, elapsedT, v0, x0){
    return .5 * accel * (elapsedT**2) +  v0*elapsedT + x0;
}

/*
Compute a 2D trajectory
Assumming [unaccelerated coordinate, accelerated coordinate]
input:
    initial velocity vector(array),
    initial position vector(array),
    initial t(number),
    final t(number),
    time interval delta t(number)
output: a list containing positions at all intermediate times
 */
function _2DTrajectorySolver(initialVel, initialPos, ti, tf, deltaT, accel){
    var answer = {unaccelerated:[], accelated:[]};
    for(var i=0;(ti + i*deltaT) <= tf ; i++){
        answer.unaccelerated.push(constantVelocityTrajectory(
            i*deltaT,
            roundTo2Decimal(initialVel[0]),
            roundTo2Decimal(initialPos[0])
        ));
        answer.accelated.push(acceleratedTrajectory(
            accel,
            i*deltaT,
            roundTo2Decimal(initialVel[1]),
            roundTo2Decimal(initialPos[1])
        ));
    }

    return answer;
}

export {_2DTrajectorySolver}