function my_Dictionary(){
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
delete Animal.Sound; // this removed the sound from dictionary before its displayed
document.getElementById("Dictionary").innerHTML=Animal.Sound;
}