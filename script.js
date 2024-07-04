let timer=60;
let score=0;
let hit=0;
let t;
let gameActive;
let startButton= document.getElementById("start");
let resetButton= document.getElementById("reset");
resetButton.style.display="none";



function increaseScore()
{
    score+=5;
    document.querySelector("#score-val").textContent=score;
}

function getNewHit()
{
    hit=Math.floor(Math.random()*16);
    document.querySelector("#hit-val").textContent=hit;
}


function makeBubble(){
    let clutter="";
for(let i=1;i<=105;i++)
{
    let r= Math.floor(Math.random()*16);
    clutter +=`<div class="bubble">${r}</div>`;
}
document.querySelector("#panel-bottom").innerHTML = clutter;

}


function runTimer()
{
     t=setInterval(function(){
        
        if(timer>0)
        {
            timer--;
            document.querySelector("#timer-val").textContent =timer;
        }
        else{
            clearInterval(t);
            document.querySelector("#panel-bottom").innerHTML =`<h1> Game Over</h1>`
            gameActive=false;
        }
    
    },1000);
}

function checkHit(){
document.querySelector("#panel-bottom").addEventListener("click", function(details){
    if(!gameActive)return;

    let clicked = Number(details.target.textContent);
    if(clicked === hit)
    {
    increaseScore();
    makeBubble();
    getNewHit();
    }
    else{
        details.target.classList.add("wrong");
        setTimeout(function(){
            details.target.classList.remove("wrong");
        },500)
    }

})
}

makeBubble();

const startGame=()=>{
getNewHit();
runTimer();
checkHit();
makeBubble();
resetButton.style.display="block";
startButton.style.display="none";
gameActive=true;
}

const resetGame=()=>{
    clearInterval(t);
    resetButton.style.display="none";
    startButton.style.display="block";
    timer=60;
    score=0;
    let hitValue="?";
    document.querySelector("#score-val").textContent=score;
    document.querySelector("#timer-val").textContent=timer;
    document.querySelector("#hit-val").textContent=hitValue;
    gameActive =false;
    if(timer>=0)
    makeBubble();
}
startButton.addEventListener("click",startGame);
resetButton.addEventListener("click",resetGame);

document.addEventListener('DOMContentLoaded',(event)=>{
    const popup=document.querySelector('.popup');
    const closeButton=document.getElementById('close');

    popup.style.display='block';
    
    closeButton.addEventListener('click',()=>{
        popup.style.display='none';
    });

    const main=document.querySelector("#main");
    main.addEventListener('click',(event)=>{
        popup.style.display='none';
    });

});
