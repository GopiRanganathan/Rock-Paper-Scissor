
const computerDisplay=document.getElementById("computer");
const userDisplay=document.getElementById("user");
const result=document.getElementById("result");
let computerChoice;
let userChoice = document.querySelectorAll(".choice button");
let userChosen;


let generateComputerChoice=()=>{
    computerChoice=Math.floor(Math.random()*3)+1;
    if(computerChoice===1){
        computerDisplay.className="rock right";
        document.querySelector("#computer i").className="fa-regular fa-hand-back-fist";
    }
    else if(computerChoice===2){
        computerDisplay.className="paper right";
        document.querySelector("#computer i").className="fa-regular fa-hand";

    }
    else if(computerChoice===3){
        computerDisplay.className="scissor right";
        document.querySelector("#computer i").className="fa-regular fa-hand-scissors";

    }
    console.log(computerChoice);
}
let getResult=()=>{
    if(computerChoice===userChosen){
        result.innerText="Its a draw";
    }
    else if(computerChoice===1 && userChosen===2){
        result.innerText="You won!";
    }
    else if(computerChoice===1 && userChosen===3){
        result.innerText="You lose!";
    }
    else if(computerChoice===2 && userChosen===1){
        result.innerText="You lose!";
    }
    else if(computerChoice===2 && userChosen===3){
        result.innerText="You won!";
    }
    else if(computerChoice===3 && userChosen===1){
        result.innerText="You won!";
    }
    else if(computerChoice===3 && userChosen===2){
        result.innerText="You lose!";
    }
}
const load=()=>{
    computerDisplay.className="rock right";
    document.querySelector("#computer i").className="fa-regular fa-hand-back-fist";
    userDisplay.className="rock left";
    document.querySelector("#user i").className="fa-regular fa-hand-back-fist";
    result.innerText="Wait...";
    document.querySelector(".rock.right").style.animation="shake1 0.3s linear infinite";
    document.querySelector(".rock.left").style.animation="shake2 0.3s linear infinite";

}

userChoice.forEach(choice=>{
    choice.addEventListener("click", ()=>{
load();
        console.log(choice.id);
        setTimeout(()=>{
            document.querySelector(".rock.right").style.animation="none";
            document.querySelector(".rock.left").style.animation="none";
        userChosen = choice.id==="rock"?1:choice.id==="paper"?2:3;
        if(userChosen===1){
            userDisplay.className="rock left";
            document.querySelector("#user i").className="fa-regular fa-hand-back-fist";
        }
        else if(userChosen===2){
            userDisplay.className="paper left";
            document.querySelector("#user i").className="fa-regular fa-hand";
        }
        else if(userChosen===3){
            userDisplay.className="scissor left";
            document.querySelector("#user i").className="fa-regular fa-hand-scissors";
        }
    console.log(userChosen)
    
        generateComputerChoice();
        getResult();
 } ,3000); })
})

