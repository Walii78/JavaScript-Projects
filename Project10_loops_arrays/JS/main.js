
// A function using a while loop
function count_To_Ten(){
    var Digit="";
    var X=1;
    while (X<11){
        Digit += "<br>" +X;
    }
    document.getElementById("Counting_to_Ten").innerHTML=Digit;
}

//A function using for loop
var Instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content="";
var Y;
function for_Loop(){
    for(Y=0; Y<Instruments.length; Y++){
    Content+= Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}
// A function with an array
function cat_pics(){
    var Cat_Pictures= [];
    Cat_Picture[0]="sleeping";
    Cat_Picture[1]="playing";
    Cat_Picture[2]="eating";
    Cat_Picture[3]="purring";
    document.getElementById("Cat").innerHTML="In this picture, the cat is"+Cat_Picture[2]+".";
}

function constant_function(){
    const Musical_Instrument={type:"guitar",brand:"Fender",color:"black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML="The const of the"+Musical_Instrument.type+"was"+Musical_Instrument.price;
    
}

var X=82;
document.write(X);
{
    let X=33;
    document.write("<br>"+X);
}
Document.write("<br>"+X);

let car={
    make:"Dodge",
    model: "Viper",
    year: "2021",
    color:"red",
    description: function(){
        return "The car is a"+this.year+this.color+this.model;
    }
}
document.getElementById("Car_Object").innerHTML=car.description();