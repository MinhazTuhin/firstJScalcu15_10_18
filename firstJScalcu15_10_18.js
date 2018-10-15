var preValue = 0;
var nowValue;
var lastFinal=0;
var totalValue;


function zero(){
    nowValue = document.getElementById("zero").value;
	preValue = (preValue*10)+Number(nowValue);
    document.getElementById("display").value = preValue;
}
function one(){
    nowValue = document.getElementById("one").value;
	preValue = (preValue*10)+Number(nowValue);
    document.getElementById("display").value = preValue;
}
function two(){
    nowValue = document.getElementById("two").value;
	preValue = (preValue*10)+Number(nowValue);
    document.getElementById("display").value = preValue;
}
function three(){
    nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
    document.getElementById("display").value = preValue;
}
function four(){
    nowValue = document.getElementById("four").value;
	preValue = (preValue*10)+Number(nowValue);
    document.getElementById("display").value = preValue;
}
function five(){
    nowValue = document.getElementById("five").value;
	preValue = (preValue*10)+Number(nowValue);
    document.getElementById("display").value = preValue;
}
function six(){
    nowValue = document.getElementById("six").value;
	preValue = (preValue*10)+Number(nowValue);
    document.getElementById("display").value = preValue;
}
function seven(){
    nowValue = document.getElementById("seven").value;
	preValue = (preValue*10)+Number(nowValue);
    document.getElementById("display").value = preValue;
}
function eight(){
    nowValue = document.getElementById("eight").value;
	preValue = (preValue*10)+Number(nowValue);
    document.getElementById("display").value = preValue;
}
function nine(){
    nowValue = document.getElementById("nine").value;
	preValue = (preValue*10)+Number(nowValue);
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
function dot(){
    nowValue = document.getElementById("dot").value;
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
	nowValue = 0;
	lastFinal= 0;
	totalValue=0;
	document.getElementById("display").value = lastFinal;
}