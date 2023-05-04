
var X=10;
function Add_numbers_1(){
    document.write(20+X+"<br>");
}

function Add_number_2(){
    document.write(X+100);
}
Add_numbers_1();
Add_number_2();

function get_date(){
    if(new Date().getHours()<18){
        document.getElementById("Greeting").innerHTML="How are you today";
    }
}

function Age_Function(){
    Age=document.getElementById("Age").value;
    if (Age>=18){
        Vote="You are old enough to vote";
    }
    else{
        Vote="you are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote;
}