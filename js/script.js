console.log("Calculator Made by Sazzad Alam Bhuiyan");
const output1=document.querySelector(".previous-result");
const output2=document.querySelector(".current-result");
var input1;
var input2;
const b0=document.querySelector(".btn0");
b0.addEventListener("click",function(){
	console.log(b0.value);
	output2.innerText=b0.value
})

const b1=document.querySelector(".btn1");
b1.addEventListener("click",function(){
	console.log(b1.value);
	output2.innerText=b1.value
})

const b2=document.querySelector(".btn2");
b2.addEventListener("click",function(){
	console.log(b2.value);
	output2.innerText=b2.value
})

const b3=document.querySelector(".btn3");
b3.addEventListener("click",function(){
	console.log(b3.value);
	output2.innerText=b3.value
})

const b4=document.querySelector(".btn4");
b4.addEventListener("click",function(){
	console.log(b4.value);
	output2.innerText=b4.value
})

const b5=document.querySelector(".btn5");
b5.addEventListener("click",function(){
	console.log(b5.value);
	output2.innerText=b5.value
})

const b6=document.querySelector(".btn6");
b6.addEventListener("click",function(){
	console.log(b6.value);
	output2.innerText=b6.value
})

const b7=document.querySelector(".btn7");
b7.addEventListener("click",function(){
	console.log(b7.value);
	output2.innerText=b7.value
})

const b8=document.querySelector(".btn8");
b8.addEventListener("click",function(){
	console.log(b8.value);
	output2.innerText=b8.value
})

const b9=document.querySelector(".btn9");
b9.addEventListener("click",function(){
	console.log(b9.value);
	output2.innerText=b9.value
})

const bac=document.querySelector(".btnac");
bac.addEventListener("click",function(){
	console.log("AC");
	output2.innerText="AC"
})

const bdel=document.querySelector(".btndel");
bdel.addEventListener("click",function(){
	console.log("DEL");
	output2.innerText="DEL"
})

const bf=document.querySelector(".btnf");
bf.addEventListener("click",function(){
	console.log("F");
	output2.innerText="Fectorial"
})

const bpi=document.querySelector(".btnpi");
bpi.addEventListener("click",function(){
	console.log("PI");
	output2.innerText=3.1416
})

const bsq=document.querySelector(".btnsq");
bsq.addEventListener("click",function(){
	console.log("Square");
	output2.innerHTML="X<sup>2</sup>"
})

const bsqrt=document.querySelector(".btnsqrt");
bsqrt.addEventListener("click",function(){
	console.log("Square Root");
	output2.innerHTML="Square Root"
})

const bper=document.querySelector(".btnper");
bper.addEventListener("click",function(){
	console.log("%");
	output2.innerText="%"
})


const bd=document.querySelector(".btnd");
bd.addEventListener("click",function(){
	console.log("÷");
	output2.innerText="÷"
})

const bm=document.querySelector(".btnm");
bm.addEventListener("click",function(){
	console.log("x");
	output2.innerText="x"
})

const bs=document.querySelector(".btns");
bs.addEventListener("click",function(){
	console.log("-");
	output2.innerText="-"
})

const bp=document.querySelector(".btnp");
bp.addEventListener("click",function(){
	console.log("+");
	output2.innerText="+"
})

const bans=document.querySelector(".btnans");
bans.addEventListener("click",function(){
	console.log("=");
	output2.innerText="="
})

const bpoint=document.querySelector(".btnpoint");
bpoint.addEventListener("click",function(){
	console.log(".");
	output2.innerText="."
})

function Add(n1,n2){
	return n1+n2;
}