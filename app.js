const charachter=document.getElementById("charchter");
const block=document.getElementById("block");

function jump(){
    if(charachter.classList != "animate"){
        charachter.classList.add("animate");
    }
    charachter.classList.add("animate");
    setTimeout(function(){
        charachter.classList.remove("animate")
    },500);
}

const chackDead = setInterval(function(){
    const charachterTop=parseInt(window.getComputedStyle(charachter).getPropertyValue("top"));
    const blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<20 && blockleft>0 && charachterTop>=130){
            block.style.animate ="none";
            block.style.display="none";
            alert("You Lose a Game");
        }
    
},10);