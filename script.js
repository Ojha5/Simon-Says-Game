let gameSeq = []
let userSeq = []

let isGameStarted = false;
let level = 0;
let h2 = document.querySelector("h2")
let btns = ["yellow" , "purple" , "green" , "red"]

document.addEventListener("keypress" , function(){
    if(!isGameStarted){
        console.log("Game started")
        isGameStarted = true;

        levelUp();
    }
})

let btnFlash = function(btn , flash){
    (flash == "COMP") ? btn.classList.add("white") : btn.classList.add("grey")
    setTimeout(() => {
        (flash == "COMP") ? btn.classList.remove("white") : btn.classList.remove("grey")
    } , 250)
}

let levelUp = function(){
    ++level;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random() * 4)
    let randColor = btns[randInd] // Yeh color define kar raha hai ki woh div jiska color yeh hai that we want to flash 
    let randBtn = document.querySelector(`.${randColor}`)
    
    btnFlash(randBtn , "COMP")
}

function keyPress(){
    if(isGameStarted){
        btnFlash(this , "USER")
    }
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click" , keyPress);
}
