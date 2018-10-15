var preValue = 0;
var nowValue;
var lastFinal=0;
var totalValue;

function t0(){
	nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
}

function t1(){
	nowValue = document.getElementById("one").value;
	preValue = (preValue*10)+Number(nowValue);
}

function t2(){
	nowValue = document.getElementById("two").value;
	preValue = (preValue*10)+Number(nowValue);
}

function t3(){
	nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
}

function t4(){
	nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
}

function t5(){
	nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
}

function t6(){
	nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
}

function t7(){
	nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
}

function t8(){
	nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
}

function t9(){
	nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
}

function tt(){
	nowValue = document.getElementById("three").value;
	preValue = (preValue*10)+Number(nowValue);
}

function plus(){
	lastFinal = lastFinal+preValue;
	preValue = 0;
	document.getElementById("sd").innerHTML = lastFinal;
}

function minus(){
	lastFinal = lastFinal+preValue;
	preValue = 0;
	document.getElementById("sd").innerHTML = lastFinal;
}

function mul(){
	lastFinal = lastFinal+preValue;
	preValue = 0;
	document.getElementById("sd").innerHTML = lastFinal;
}

function div(){
	lastFinal = lastFinal+preValue;
	preValue = 0;
	document.getElementById("sd").innerHTML = lastFinal;
}

function show(){
	totalValue = lastFinal+preValue;
	document.getElementById("dis").innerHTML = totalValue;	
}

function clar(){
	preValue = 0;
	nowValue = 0;
	lastFinal= 0;
	totalValue=0;
	document.getElementById("sd").innerHTML = lastFinal;
	document.getElementById("dis").innerHTML = totalValue;
}