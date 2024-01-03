


randomNumber1=Math.floor(Math.random() * (6) + 1);
//console.log(randomNumber1);

randomNumber2=Math.floor(Math.random() * (6) + 1);


var leftimg  = document.querySelector(".img1");
if(randomNumber1===1){
    leftimg.src="./images/dice1.png";
}else if(randomNumber1===2){
    leftimg.src="./images/dice2.png";
}else if(randomNumber1===3){
    leftimg.src="./images/dice3.png";
}else if(randomNumber1===4){
    leftimg.src="./images/dice4.png";
}else if(randomNumber1===5){
    leftimg.src="./images/dice5.png";
}else if(randomNumber1===6){
    leftimg.src="./images/dice6.png";
}


var leftimg  = document.querySelector(".img2");
if(randomNumber2===1){
    leftimg.src="./images/dice1.png";
}else if(randomNumber2===2){
    leftimg.src="./images/dice2.png";
}else if(randomNumber2===3){
    leftimg.src="./images/dice3.png";
}else if(randomNumber2===4){
    leftimg.src="./images/dice4.png";
}else if(randomNumber2===5){
    leftimg.src="./images/dice5.png";
}else if(randomNumber2===6){
    leftimg.src="./images/dice6.png";
}

var heading = document.querySelector("h1");

if(randomNumber1>randomNumber2){
    heading.textContent="Player 1 Wins";
}else if(randomNumber1<randomNumber2){
    heading.textContent="Playeer 2 Wins";
}else{
    heading.textContent="Draw";
}
