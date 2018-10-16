var preValue = 0;
var lastFinal=0;
var totalValue;


function sendValue(getValue){
	preValue = (preValue*10)+Number(getValue);
    document.getElementById("display").value = preValue;
}


function plus(){
    nowValue = document.getElementById("plus").value;
	preValue = nowValue;
    document.getElementById("display").value = preValue;
}
function minus(){
    nowValue = document.getElementById("minus").value;
	preValue = nowValue;
    document.getElementById("display").value = preValue;
}
function mul(){
    nowValue = document.getElementById("mul").value;
	preValue = nowValue;
    document.getElementById("display").value = preValue;
}
function div(){
    nowValue = document.getElementById("div").value;
	preValue = nowValue;
    document.getElementById("display").value = preValue;
}
function result(){
	totalValue = lastFinal+preValue;
	document.getElementById("display").value = totalValue;
	document.getElementById("semidisplay").value = totalValue;
}
function clar(){
	preValue = 0;
	lastFinal= 0;
	totalValue=0;
	document.getElementById("display").value = null;
}