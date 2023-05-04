
//A function with HTML and JS using a ternary operation with input from browser
function Ride_Function(){
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52) ? "you are too short":"you are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + "to ride.";
}

//A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;

}
//A function to display the results of the constructor in an HTML element
function myFunction(){
var Jack= new Vehicle("Dodge","Viper,"2020,"Red");
var Emily= new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971,"Mustard");

document.getElementById("New_and_This").innerHTML="Erik drivers a"+Erik.Vehicle_Color+"-colored"+Erik.Vehicle_Model+"manufactured in"+Erik.Vehicle_Year;
}
//A nested function
function count_Function(){
    document.getElementById("Counting").innerHTML=Count();
    function Count(){
        var starting_point=9;
        function plus_one() {Starting_point+=1;}
        plus_one();
        return Starting_point;
    }
}