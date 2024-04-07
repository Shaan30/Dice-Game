var n=Math.floor(Math.random()*6)+1;
var m=Math.floor(Math.random()*6)+1;

var imgdst1="./images/dice"+n+".png";
var imgdst2="./images/dice"+m+".png";
var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2");

image1.setAttribute("src",imgdst1);
image2.setAttribute("src",imgdst2);
// switch (n) {
//     case 1:
//         // image.src="./images/dice1.png";
//         image1.setAttribute("src","./images/dice1.png");
//         break;
//     case 2:
//         // image.src="./images/dice2.png";
//         image1.setAttribute("src","./images/dice2.png");
//         break;
//     case 3:
//         // image.src="./images/dice3.png";
//         image1.setAttribute("src","./images/dice3.png");
//         break;
//     case 4:
//         // image.src="./images/dice4.png";
//         image1.setAttribute("src","./images/dice4.png");
//         break;
//     case 5:
//         // image.src="./images/dice5.png";
//         image1.setAttribute("src","./images/dice5.png");
//         break;
//     case 6:
//         // image.src="./images/dice6.png";
//         image1.setAttribute("src","./images/dice6.png");
//         break;

//     default:
//         break;
// }
// switch (m) {
//     case 1:
//         // image.src="./images/dice1.png";
//         image2.setAttribute("src","./images/dice1.png");
//         break;
//     case 2:
//         // image.src="./images/dice2.png";
//         image2.setAttribute("src","./images/dice2.png");
//         break;
//     case 3:
//         // image.src="./images/dice3.png";
//         image2.setAttribute("src","./images/dice3.png");
//         break;
//     case 4:
//         // image.src="./images/dice4.png";
//         image2.setAttribute("src","./images/dice4.png");
//         break;
//     case 5:
//         // image.src="./images/dice5.png";
//         image2.setAttribute("src","./images/dice5.png");
//         break;
//     case 6:
//         // image.src="./images/dice6.png";
//         image2.setAttribute("src","./images/dice6.png");
//         break;

//     default:
//         break;
// }

if(n>m){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(n<m){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}