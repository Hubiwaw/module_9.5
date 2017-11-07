var buttonElements = document.getElementsByClassName("button");
var length = buttonElements.length
	for (var i = 0; i < length; i++) {
		var textButton = buttonElements[i].innerText;
		alert(textButton);
}