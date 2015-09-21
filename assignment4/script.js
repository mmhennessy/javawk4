var firstArray = [
	"Winston Churchill",
	"Their Finest",
	false
];

var secondArray = [
	"Ghandi",
	"Quit India",
	 false
];

var thirdArray = [
	 "Demosthenes",
	 "The Third Philippic",
	 true
];

console.log(1942 - 1940);
var speech = function() {
	alert('Ghandi and Churchill speeches are two years apart');
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  alert("There are three speeches on the page");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  alert("The speech Their Finest was written by Winston Churchill in 1940 in the Common Era");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
	alert("The speech Quit India was written by Ghandi in 1942 in the Common Era");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
 	alert("The speech The Third Philippic was written by Demosthenes in 342 Before Common Era");
});