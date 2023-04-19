const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector(".btn");

function getRandomHex(){
    let randomNum1 = Math.floor(Math.random()*hex.length);
    let randomNum2 = Math.floor(Math.random()*hex.length);
    let randomNum3 = Math.floor(Math.random()*hex.length);
    let randomNum4 = Math.floor(Math.random()*hex.length);
    let randomNum5 = Math.floor(Math.random()*hex.length);
    let randomNum6 = Math.floor(Math.random()*hex.length);

    return hexStr = "#"+hex[randomNum1]+hex[randomNum2]+hex[randomNum3]+hex[randomNum4]
    + hex[randomNum5]+hex[randomNum6];
}

btn.addEventListener("click", function(){
    let randomStr = getRandomHex();
    document.body.style.backgroundColor=randomStr;
    document.querySelector(".color-text").textContent = randomStr;
})

