// create a turn on function
function bulbOn(){
    let bulbobj = document.querySelector(".bulbOff");
    bulbobj.setAttribute('src', "img/on.jpg");
}

function bulbOff(){
    let bulbobj = document.querySelector(".bulbOff");
    bulbobj.setAttribute('src', "img/off.jpg");
}
