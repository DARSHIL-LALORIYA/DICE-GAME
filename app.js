var randomNumber1 = Math.floor(Math.random()*6)+1,
randomDiceImage = "dice-" + randomNumber1 +".png",
randomImageSource ="image/" + randomDiceImage,
image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1,
randomImageSource2 ="image/dice-" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "<i class='bx bxs-party bx-tada' ></i>Player 1 Win!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h2").innerHTML = "<i class='bx bxs-party bx-tada bx-rotate-270' ></i>Player 2 Win!";
}else{
    document.querySelector("h2").innerHTML = "Draw!"
}