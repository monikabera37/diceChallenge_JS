let randomNumber1 = Math.ceil(Math.random()*6);
let randomImage1 = `dice${randomNumber1}.png`;
let randomImgSource1 = "./images/"+randomImage1;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource1)

let randomNumber2 = Math.ceil(Math.random()*6);
let randomImage2 = `dice${randomNumber2}.png`;
let randomImgSource2 = "./images/"+randomImage2;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins"
    
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    
}else{
    document.querySelector("h1").innerHTML ="Draw";
}