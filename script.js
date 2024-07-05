document.getElementById("red").onclick=switchtoRed;
document.getElementById("blue").onclick=switchtoBlue;
document.getElementById("green").onclick=switchtoGreen;
document.getElementById("yellow").onclick=switchtoYellow;

function switchtoRed(){
    document.getElementsByTagName("body")[0].style.backgroundColor="red";
    document.getElementsByTagName("body")[0].style.color="black";
}


function switchtoBlue(){
    document.getElementsByTagName("body")[0].style.backgroundColor="blue";
    document.getElementsByTagName("body")[0].style.color="black";
}


function switchtoYellow(){
    document.getElementsByTagName("body")[0].style.backgroundColor="yellow";
    document.getElementsByTagName("body")[0].style.color="black";
}


function switchtoGreen(){
    document.getElementsByTagName("body")[0].style.backgroundColor="green";
    document.getElementsByTagName("body")[0].style.color="black";
}