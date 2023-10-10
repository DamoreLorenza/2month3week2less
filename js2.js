
const timer=document.getElementById("time")


function update(){

timer.textContent=` sono passati ${passTime} secondi`;
passTime++;
sessionStorage.setItem("passTime", passTime)}

setInterval(update,1000)

let passTime= parseInt(sessionStorage.getItem("passTime")) || 0;
