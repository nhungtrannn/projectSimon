/*----- constants -----*/ 




/*----- app's state (variables) -----*/



/*----- cached element references -----*/
var count=0;

function incrementCount() {
    count++;
}



/*----- event listeners -----*/ 




/*----- functions -----*/
function myFunction() {
    document.getElementById("topleft").style.color = "blue";
}

function render() {
	renderHands();
	renderControls();
	if (winner) {
		renderWinnerMessage("You're a winner!");
	} else {
		renderTurnMessage("Try again.");
	}
}