/*
for testing purposes, inject jQuery via console:
var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);
*/

//find the nickname of the users who have posted in the thread or forum page
var x = document.getElementsByClassName("p-nickname");

//store username in array
var names = ["sample", "sampleTwo"];

//when the username is found, remove the li element that contains all the data

for (var i=0; i < names.length; i++){
	for (var j=0; j < x.length; j++){
	if (x[j].text == names[i]){
	console.log(x[j].parentNode.parentNode);
	x[j].closest('li').remove();
		}
	}
}

//note: for /forum/ url the text field above for p-nickname is textContent
