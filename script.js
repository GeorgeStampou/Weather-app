const btn = document.querySelector("button");
const containerInfo = document.querySelector(".container-info");
const input = document.querySelector("input");

btn.addEventListener("click", onClick);

function onClick(){
    if(input.reportValidity()){
        console.log("true");
        containerInfo.classList.add("container-info-active");
    }
    else return;
}