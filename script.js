const colors = ["red",'blue','green','yellow','orange',"#FFF","#EEE","#GGG","#AAA"];
const colorTextEm = document.querySelector(".color-text");
const bodyEm = document.body;
const btn = document.querySelector(".btn");

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click",function(){
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    bodyEm.style.backgroundColor=colors[randomNumber];
    colorTextEm.textContent = colors[randomNumber];
})
function getRandomHex(){
    let randomNum1 = Math.floor(Math.random()*10);
    let randomNum2 = Math.floor(Math.random()*10);
    let randomNum3 = Math.floor(Math.random()*10);
    let randomNum4 = Math.floor(Math.random()*10);

    return hexStr = "#"+hex[randomNum1]+hex[randomNum2]+hex[randomNum3]+hex[randomNum4];
}




