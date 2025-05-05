let gameseq=[];
let userseq =[];
let btns=["btn-1","btn-2","btn-3","btn-4"]

let started=false;
let level =0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started !");
        started=true;

        levelUp();
    }
});

function flashBtn(btnn) {
    btnn.classList.add("flash");
    setTimeout(() => btnn.classList.remove("flash"), 300);
}


function levelUp(){
    userseq=[];

    level++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);

    flashBtn(randbtn);
};

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,600);
        }
    }else{
        h2.innerHTML=`Game Over ! Your Score was <b>${level}<b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){ document.querySelector("body").style.backgroundColor="white",150})
        reset();
    }
}

function btnPress(){
    let btn=this;
    flashBtn(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq-[];
    level=0;
};