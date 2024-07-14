let gameseq=[];
let userseq=[];

let level=0;
let started=false;

let h2=document.querySelector("h2");
let diffcolors=["yellow","orange","blue","red"];
let allbtns=document.querySelectorAll(".btn");


document.addEventListener("keypress",function (){
    if (!started) {
        started = true;
        levelup();
    }
    
});


function levelup(){
    level++;
    userseq=[];
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randColor=diffcolors[randomIdx];
    // console.log(randColor);
    gameseq.push();
    // console.log(randomIdx);
    let btn=document.querySelector(`.${randColor}`);
    gameseq.push(btn.innerText);
    gameflash(btn);
    for(btn of allbtns){
        btn.addEventListener("click",userpress);
    }
    
}

function userpress(){
    let btn=this;
    // console.log(btn.innerText);
    userseq.push(btn.innerText);
    userflash(btn);
    checker();


}



function checker(){
    if(gameseq.length === userseq.length){
        if(gameseq.toString()===userseq.toString()){
            levelup();
        }
        else{
            reset();
        }
    }
}


function reset(){
    h2.innerText=`The Game Over! .Your score is ${gameseq.length-1}.Press any key to continue`;
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);

}

function userflash(btn){
    btn.classList.add("green");
    setTimeout(() => {
        btn.classList.remove("green");
    }, 250);
}

function gameflash(btn){
    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white");
    }, 250);
}