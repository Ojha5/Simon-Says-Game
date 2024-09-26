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

let btnFlash = function(btn){
    btn.classList.add("white")
    setTimeout(() => {
        btn.classList.remove("white")
    } , 250)
}

let levelUp = function(){
    ++level;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random() * 4)
    let randColor = btns[randInd] // Yeh color define kar raha hai ki woh div jiska color yeh hai that we want to flash 
    let randBtn = document.querySelector(`.${randColor}`)
    
    btnFlash(randBtn)
}