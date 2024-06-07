var timer=60;
var score=0;
var hit=0;

function IncreaseScore()
{
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}


function getNewHit()
{
    hit=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hit;
}


function makeBubble(){
    var clutter="";
for(let i=1;i<=114;i++)
{
    var r= Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${r}</div>`;
}
document.querySelector("#panel-bottom").innerHTML = clutter;

}


function runTimer()
{
    var t=setInterval(function(){
        
        if(timer>0)
        {
            timer--;
            document.querySelector("#timervalue").textContent =timer;
        }
        else{
            clearInterval(t);
            document.querySelector("#panel-bottom").innerHTML =`<h1> Game Over</h1>`
        }
    
    },1000);
}

runTimer();

makeBubble();

getNewHit();

document.querySelector("#panel-bottom").addEventListener("click", function(details){
    var clicked = Number(details.target.textContent);
    if(clicked === hit)
    {
    IncreaseScore();
    makeBubble();
    getNewHit();
    }
})

