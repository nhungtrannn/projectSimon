/*----- constants -----*/ 
const one = document.getElementsByClassName("blue");
const two = document.getElementsByClassName("red");
const three = document.getElementsByClassName("green");
const four = document.getElementsByClassName("yellow");



/*----- app's state (variables) -----*/
var userClicks = [];

var compClicks = [];

var level = 0;

var color = 0;

/*----- cached element references -----*/

// const topleft = document.getElementById("topleft");
// const topleftClass = document.getElementById('topleft').className;
// const topright = document.getElementById("topright");
// const toprightClass = document.getElementById('topright').className;
// const bottomleft = document.getElementById("bottomleft");
// const bottomleftClass = document.getElementById('bottomleft').className;
// const bottomright = document.getElementById("bottomright");
// const bottomrightClass = document.getElementById('bottomright').className;



/*----- event listeners -----*/ 

//topleft, topright, bottomleft, bottomright event listener
topleft.addEventListener('click', topLeftCallback);
topright.addEventListener('click', topRightCallback);
bottomleft.addEventListener('click', bottomLeftCallback);
bottomright.addEventListener('click', bottomRightCallback);

/*----- functions -----*/
//start game 
let topLeftColor = '#6495ED';
let topRightColor = '#DC143C';
let bottomLeftColor = '#2E8B57';
let bottomRightColor = '#FFFF00'; 


$(document).ready(function() {
    $(".turn").text("");
    $(".button").click(function() {
        // console.log('hello');
        level++;
        startSequence();
       changeColor('#topright', topRightColor)
    })
})

function changeColor(id, color) {
    $(id).css({'background-color' : 'white'})

    setTimeout(function(){
        console.log('hellp')
        $(id).css({'background-color' : color})
    }, 500);  
}

function startSequence() {
    $("#turn").text(level);
}




//topleft, topright, bottomleft, bottomright callback
function topLeftCallback (event) {
    console.log(document.getElementById('topleft').className);
    console.log(event.target.style.background);
    if (event.target.style.background === 'white') {
        event.target.style.background = "#6495ED";
    } else {
        event.target.style.background = "white";
    }
}

function topRightCallback (event) {
    console.log(document.getElementById('topright').className);
    console.log(event.target.style.background);
    if (event.target.style.background === 'white') {
        event.target.style.background = "#DC143C";
    } else {
        event.target.style.background = "white";
    }
}

function bottomLeftCallback (event) {
        console.log(document.getElementById('bottomleft').className);
        console.log(event.target.style.background);
        if (event.target.style.background === 'white') {
            event.target.style.background = "#2E8B57";
        } else {
            event.target.style.background = "white";
        }
}

function bottomRightCallback (event) {
            console.log(document.getElementById('bottomright').className);
            console.log(event.target.style.background);
            if (event.target.style.background === 'white') {
                event.target.style.background = "#FFFF00";
            } else {
                event.target.style.background = "white";
            }
}