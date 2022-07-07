// 기준카드 카드사진변경 기능 구현, 보충 필요

const h2 = document.querySelector("h2");
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const bettingForm = document.querySelector("#betting");
const upBtn = document.getElementById("upBetting");
const downBtn = document.getElementById("downBetting");
const calcBetHigh = document.getElementById("calcBetHigh");
const calcBetLow = document.getElementById("calcBetLow");
const betMoney = document.getElementById("betMoney");
const bettingButton = document.querySelector(".bettingButton");
const upReward = document.getElementById("reward");
const downReward = document.getElementById("Dreward");
const bettingMoneyForm = document.getElementById("bettingMoneyForm");
const standardCardImage = document.getElementById("cardImg1");
const bettingCardImage = document.getElementById("cardImg2");

let card1Num, card2Num;
let card1Type, card2Type;
let highMoneyPer, lowMoneyPer;
let money = 10000;
h2.innerText = money;

const cardType = ["H_", "D_", "S_", "C_"];
const cardNum = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "JOKER"];
// 사진으로 대체 예정.
card2Type = cardType[Math.round(Math.random()*3)];
card2Num  = cardNum[Math.round(Math.random()*13)];

createStandardCard();
calculatorMoney();

console.log(`${card2Num}`);

bettingMoneyForm.addEventListener("submit", bettingMoneyFormPrevent);
bettingForm.addEventListener("submit", bettingFormPrevent);
upBtn.addEventListener("click", ifButtonClickIsUp);
downBtn.addEventListener("click", ifButtonClickIsDown);

function bettingMoneyFormPrevent(event){
    event.preventDefault();
}

function bettingFormPrevent(event){
    event.preventDefault();
}
// 이미지 createElement하기
function createStandardCard(){
    card1Type = cardType[Math.round(Math.random()*3)];
    card1Num  = cardNum[Math.round(Math.random()*13)];

    standardCardImage.src=`${card1Type}${card1Num}.png`;
    console.log(standardCardImage.src);

    if(card1Num==="1" || card1Num==="JOKER"){
        card1Num="7";
    } 
}

function ifButtonClickIsUp(){
    if(parseInt(betMoney.value)>money){
        alert(`베팅금은 보유금을 초과할 수 없습니다.`);
        betMoney.value ="";
        return 0;
    }
    if(parseInt(betMoney.value)<1000){
        alert(`천 원 이상부터 베팅이 가능합니다.`);
        betMoney.value = "";
        return 0;
    }

    bettingCardImage.src=`${card2Type}${card2Num}.png`;
    console.log(bettingCardImage.src);

    if(card2Num==="JOKER" && card1Num !== "JOKER"){
        money = money + parseInt(betMoney.value*highMoneyPer);
        h2.innerText = `${money}`;
    }
    if(card2Num==="JOKER" && card1Num === "JOKER"){
        console.log(`draw`);
    }
    if(card2Num!=="JOKER" && card1Num === "JOKER"){
        money = money - parseInt(betMoney.value);
        h2.innerText = `${money}`;
    }


    if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER" && isNaN(parseInt(card1Num)) && card1Num!=="JOKER"){
        if((card1Num==="J" && card2Num==="Q") || (card1Num==="Q" && card2Num==="K") || (card1Num==="K" && card2Num==="A") || (card1Num==="Q" && card2Num==="A")){
            money = money + parseInt(betMoney.value*highMoneyPer);
            h2.innerText = `${money}`;
        } else if(card1Num===card2Num){
            console.log(`draw`);
        } else {
            money = money - betMoney.value;
            h2.innerText = `${money}`;
        }
    } else if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER"){
        money = money + parseInt(betMoney.value*highMoneyPer);
        h2.innerText = `${money}`;
    } else if(isNaN(parseInt(card1Num)) && card2Num!=="JOKER"){
        money = money - betMoney.value;
        h2.innerText = `${money}`;
    } else {
        if(parseInt(card1Num)<parseInt(card2Num)){
            money = money + parseInt(betMoney.value*highMoneyPer);
            h2.innerText = `${money}`;
        } else if(card1Num===card2Num){
            console.log(`draw`);
        } else {
            money = money - betMoney.value;
            h2.innerText = `${money}`;
        }
    }

    if(card2Num===11){
        card2Num = ["J"];
    }else if(card2Num===12){
        card2Num = ["Q"];
    }else if(card2Num===13){
        card2Num = ["K"];
    }else if(card2Num===14){
        card2Num = ["A"];
    }else if(card2Num===15){
        card2Num = ["JOKER"];
    }
    
    if(card1Num===11){
        card1Num = ["J"];
    }else if(card1Num===12){
        card1Num = ["Q"];
    }else if(card1Num===13){
        card1Num = ["K"];
    }else if(card1Num===14){
        card1Num = ["A"];
    }else if(card2Num===15){
        card2Num = ["JOKER"];
    }

    //card2.innerText = `${card2Type}${card2Num}`;
}


function ifButtonClickIsDown(){
    if(parseInt(betMoney.value)>money){
        alert(`베팅금은 보유금을 초과할 수 없습니다.`);
        betMoney.value ="";
        return 0;
    }
    if(parseInt(betMoney.value)<1000){
        alert(`천 원 이상부터 베팅이 가능합니다.`);
        betMoney.value = "";
        return 0;
    }
    bettingCardImage.src=`${card2Type}${card2Num}.png`;
    console.log(bettingCardImage.src);

    if(card2Num==="JOKER" && card1Num !== "JOKER"){
        money = money + parseInt(betMoney.value*highMoneyPer);
        h2.innerText = `${money}`;
    }
    if(card2Num==="JOKER" && card1Num === "JOKER"){
        console.log(`draw`);
    }
    if(card2Num!=="JOKER" && card1Num === "JOKER"){
        money = money - parseInt(betMoney.value);
        h2.innerText = `${money}`;
    }

    if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER" && isNaN(parseInt(card1Num)) && card1Num!=="JOKER"){
        if((card1Num==="J" && card2Num==="Q") || (card1Num==="Q" && card2Num==="K") || (card1Num==="K" && card2Num==="A") || (card1Num==="Q" && card2Num==="A")){
            money = money - betMoney.value;
            h2.innerText = `${money}`;
        } else if(card1Num===card2Num){
            console.log(`draw`);
        } else {
            money = money + parseInt(betMoney.value*highMoneyPer);
            h2.innerText = `${money}`;
        }
    } else if(isNaN(parseInt(card2Num)) && card2Num!=="JOKER"){
        money = money - betMoney.value;
        h2.innerText = `${money}`;
    } else if(isNaN(parseInt(card1Num)) && card2Num!=="JOKER"){
        money = money + parseInt(betMoney.value*highMoneyPer);
        h2.innerText = `${money}`;
    } else {
        if(parseInt(card1Num)<parseInt(card2Num)){
            money = money - betMoney.value;
            h2.innerText = `${money}`;
        } else if(card1Num===card2Num){
            console.log(`draw`);
        } else {
            money = money + parseInt(betMoney.value*highMoneyPer);
            h2.innerText = `${money}`;
        }
    }

    if(card2Num===11){
        card2Num = ["J"];
    }else if(card2Num===12){
        card2Num = ["Q"];
    }else if(card2Num===13){
        card2Num = ["K"];
    }else if(card2Num===14){
        card2Num = ["A"];
    }else if(card2Num===15){
        card2Num = ["JOKER"];
    }

    if(card1Num===11){
        card1Num = ["J"];
    }else if(card1Num===12){
        card1Num = ["Q"];
    }else if(card1Num===13){
        card1Num = ["K"];
    }else if(card1Num===14){
        card1Num = ["A"];
    }else if(card2Num===15){
        card2Num = ["JOKER"];
    }

    //card2.innerText = `${card2Type}${card2Num}`;
}

function calculatorMoney(){
    if(card1Num==="J"){
        card1Num = 11;
    } else if(card1Num==="Q"){
        card1Num = 12;
    } else if(card1Num==="K"){
        card1Num = 13;
    } else if(card1Num==="A"){
        card1Num = 14;
    } else if(card1Num==="JOKER"){
        card1Num = 15;
    }
    if(card2Num==="J"){
        card2Num = 11;
    } else if(card2Num==="Q"){
        card2Num = 12;
    } else if(card2Num==="K"){
        card2Num = 13;
    } else if(card2Num==="A"){
        card2Num = 14;
    } else if(card2Num==="JOKER"){
        card2Num = 15;
    }
    let downCount=0, upCount=0;
    for(let i=1; i<parseInt(card1Num); i++){  //  LOW 계산
        downCount++;
    }
    for(let i=parseInt(card1Num); i<15; i++){ // HIGH 계산
        upCount++;
    }
    highMoneyPer = Math.round(((downCount*0.1)+1)*1000)/1000;
    lowMoneyPer = Math.round(((upCount*0.1)+1)*1000)/1000;

    upReward.innerText = `x${highMoneyPer}`;
    downReward.innerText = ` x${lowMoneyPer}`;
}