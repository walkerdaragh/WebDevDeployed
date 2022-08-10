let toss = document.getElementById('theflip');
function flip(){
    if(Math.random() < 0.5){
        toss.innerHTML = "You got Heads";

    }
    else{
        toss.innerHTML = "You got Tails";

    }
}
document.getElementById('clicker').onclick = flip;
// https://unsplash.com/photos/eo5Hrzyb4D0
document.body.style.backgroundImage = "url('images/game/gameB.png')";

// Was trying to make a counter to tick up everytime you got heads but couldnt make it work.
/* let score = document.getElementById('thescore')
var func1 = flip();
function click(){
    if(func1 == "You got Heads"){
        score++;
        score.innerHTML;
    }
    else{
        score--;
        score.innerHTML;
    }
} */
