// function searchEntry() {

// }
var input = document.getElementById("sec");
function emptyAfterKeypress(event) {
	debugger;
	if (input.value.length > 0 && event.keyCode === 13) {
		input.value = "";
	}
}