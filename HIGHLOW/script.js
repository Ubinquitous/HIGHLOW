const h2 = document.querySelector("h2");
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const bettingForm = document.querySelector("#betting");
const upBtn = document.getElementById("upBetting");
const downBtn = document.getElementById("downBetting");

let card1Num, card2Num;
let card1Type, card2Type;

let money = 10000;
h2.innerText = money;

const cardType = ["H_", "D_", "S_", "C_"];
const cardNum = ["JOKER", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
// 사진으로 대체 예정.

createStandardCard();

bettingForm.addEventListener("submit", bettingFormPrevent);
upBtn.addEventListener("click", ifButtonClickIsUp);
//downBtn.addEventListener("click", ifButtonClickIsDown);


function bettingFormPrevent(event){
    event.preventDefault();
}

function createStandardCard(){
    card1Type = cardType[Math.round(Math.random()*3)];
    card1Num  = cardNum[Math.round(Math.random()*14)];
    card1.innerText = `${card1Type}${card1Num}`;
}

function ifButtonClickIsUp(){
    card2Type = cardType[Math.round(Math.random()*3)];
    card2Num  = cardNum[Math.round(Math.random()*14)];

    console.log(`${card1Num}, ${card2Num}`);

    if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER" && isNaN(parseInt(card1Num)) && card1Num!=="JOKER"){
        if((card1Num==="J" && card2Num==="Q") || (card1Num==="Q" && card2Num==="K") || (card1Num==="K" && card2Num==="A") || (card1Num==="Q" && card2Num==="A")){
            console.log(`card2Num`);
            money*=2;
            h2.innerText = `${money}`;
        } else if(card1Num===card2Num){
            console.log(`draw`);
        } else {
            console.log(`card1Num`);
        }
    } else if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER"){
        console.log(`card2Num`);
        money*=2;
        h2.innerText = `${money}`;
    } else if(isNaN(parseInt(card1Num)) && card2Num!=="JOKER"){
        console.log(`card1Num`);
    } else {
        if(parseInt(card1Num)<parseInt(card2Num)){
            console.log(`card2Num`);
            money*=2;
            h2.innerText = `${money}`;
        } else if(card1Num===card2Num){
            console.log(`draw`);
        } else {
            console.log(`card1Num`);
        }
    }
}
