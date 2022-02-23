function distanceFromHqInBlocks(x){
    let distance = (x - 42)
    return (Math.abs(distance))
}
function distanceFromHqInFeet(y){
    let feet = (distanceFromHqInBlocks(y) * 264);
    return (parseInt(feet));
}

function distanceTravelledInFeet(c, d){
    let blocks = (Math.abs(d - c));
    return (blocks * 264);

}

function calculatesFarePrice(start, destination){
    let dist = ((Math.abs(destination - start)) * 264)
    if (dist < 401) {
        return (0);
    }else if (dist > 401 && dist < 2000) {
        return ((dist - 400) * .02);
    }else if (dist > 1999 && dist < 2500) {
        return (25);
    }else {
        return ('cannot travel that far')
    }
}