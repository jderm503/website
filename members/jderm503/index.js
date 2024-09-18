const TOTAL_BUBBLES= 88;
let bubbleNums = [];

function makeButtons(n){
    const container = document.getElementById("bubble-container");
    for (let i = 1; i <= n; i++){
        const bubble = document.createElement("button");
        bubble.textContent = "pop";
        bubble.setAttribute("class", "bubble-button");
        bubble.setAttribute("id", "bubble-button" + i);
        container.append(bubble);
        bubble.onclick = () => handlePop(i);
    }
    for (let n = 1; n <= TOTAL_BUBBLES; n++){
        bubbleNums.push(n);
    }
}

let popCount = 0;
function handlePop(i){
    bubbleNums = bubbleNums.filter(num => num != i);
    const popped = document.getElementById("bubble-button" + i);
    popped.style.color = "#D3E0DD";
    popped.style.background = "#2C3333";
    popped.disabled = true;
    if (popCount < TOTAL_BUBBLES){
        popCount++;
        document.getElementById("counter").innerHTML = "pops: " + popCount;
    }
    if (popCount == TOTAL_BUBBLES){
        document.getElementById("counter").innerHTML = "Congrats, you popped all the bubbles!";

    }
}

function randomPop(){
    if(popCount < TOTAL_BUBBLES){
        const randomBubbleNum = bubbleNums [Math.floor(Math.random()*bubbleNums.length)];
        handlePop(randomBubbleNum);
        bubbleNums = bubbleNums.filter(num => num != randomBubbleNum);
    }
}

window.addEventListener("load", () => {
    makeButtons(TOTAL_BUBBLES);
});

window.addEventListener("keypress", (event) => {
    if (event.key == "Enter"){
        document.getElementById("refresh-button").click();
    } else if (event.key == ' '){
        randomPop();
    }
});