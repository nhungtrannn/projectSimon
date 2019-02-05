/*----- constants -----*/ 




/*----- app's state (variables) -----*/



/*----- cached element references -----*/




/*----- event listeners -----*/ 




/*----- functions -----*/
function render() {
	renderHands();
	renderControls();
	if (winner) {
		renderWinnerMessage("You're a winner!");
	} else {
		renderTurnMessage("Try again.");
	}
}