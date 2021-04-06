"use strict";
var $ = function(id) {
	return document.getElementById(id);
}

var printPage = function() {
	//document.getElementById("printButton").display  = none;
    window.print(); 
	//document.getElementById("printButton").display  = content;
}

window.onload = function() {
	$("printButton").onclick = printPage;
}