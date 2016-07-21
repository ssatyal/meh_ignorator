/*
for testing purposes, inject jQuery via console:
var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);
*/

//find the nickname of the users who have posted in the thread
var x = document.getElementsByClassName("p-nickname");

//when the username is found, remove the li element that contains all the data
for (var i = 0; i < x.length; i++){
if (x[i].text == ""){
console.log(x[i].parentNode.parentNode);
x[i].closest('li').remove();
}
}
