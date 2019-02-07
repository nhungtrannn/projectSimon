/*----- constants -----*/ 




/*----- app's state (variables) -----*/
// winningPattern
// losingPattern
// winGame
let start 


/*----- cached element references -----*/
const topleft = document.getElementById("topleft");
const topleftClass = document.getElementById('topleft').className;
const topright = document.getElementById("topright");
const topleftClass = document.getElementById('topright').className;
const bottomleft = document.getElementById("bottomleft");
const topleftClass = document.getElementById('bottomleft').className;
const bottomright = document.getElementById("bottomright");
const topleftClass = document.getElementById('bottomright').className;



/*----- event listeners -----*/ 

//topleft event listener
topleft.addEventListener('click', topLeftCallback);



/*----- functions -----*/
//topleft callback
function topLeftCallback (event) {
    console.log(document.getElementById('topleft').className);
    console.log(event.target.style.background);
    event.target.style.background = "purple";
    
}