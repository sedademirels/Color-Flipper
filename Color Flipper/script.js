const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const myButton=document.getElementById("btnColorChanger");
const myColorSpan=document.getElementById("myColorSpan");

function getRandomHexCar(){
    return Math.floor(Math.random()*hex.length);
}



myButton.addEventListener("click",function(){
    let hex_color='#';

    for(let i=0; i<6;i++){
        hex_color += hex[getRandomHexCar()];
    };

    myColorSpan.innerHTML=hex_color;
    document.body.style.backgroundColor=hex_color;
})