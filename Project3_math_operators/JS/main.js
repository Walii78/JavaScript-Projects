function addition(){ //Defining and naming the addition function
    var add=2+2;
    document.getElementById("Add").innerHTML="2+2= "+add;
}

function subtraction(){ //Defining and naming the subtraction function
    var sub = 5-2;
    document.getElementById("Sub").innerHTML="5-2="+sub;
}

function multiplication(){ //Defining and naming the multiplication function
    var mult=6*8;
    document.getElementById("Mlt").innerHTML="6*8="+mult;
}

function division(){
    var divide=48/6;
    document.getElementById("Div").innerHTML="48/6="+divide;
}

function more_Math(){
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10,divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator(){
    var modulus = 25 % 6;
    document.getElementById("Mod").innerHTML="When you divide 25 by 6 you have a remainder of: "+modulus;
}

function negation_Operator(){
    var x=10;
    document.getElementById("Math").innerHTML=-x;

}

var X=5;
X++;
document.write(X);

var X=5.25;
X--;
document.write(X);

window.alert(Math.random());
window.alert(Math.random()*100);

