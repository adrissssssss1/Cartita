const cover = document.getElementById("cover");

let startY = 0;
let currentY = 0;
let dragging = false;

function openCover(){
    cover.style.transform = "translateY(100%)";
}

document.addEventListener("mousedown", (e)=>{
    dragging = true;
    startY = e.clientY;
});

document.addEventListener("mousemove", (e)=>{
    if(!dragging) return;

    currentY = e.clientY;

    let distance = currentY - startY;

    if(distance > 120){
        openCover();
        dragging = false;
    }
});

document.addEventListener("mouseup", ()=>{
    dragging = false;
});

document.addEventListener("touchstart", (e)=>{
    startY = e.touches[0].clientY;
    dragging = true;
});

document.addEventListener("touchmove", (e)=>{
    if(!dragging) return;

    currentY = e.touches[0].clientY;

    let distance = currentY - startY;

    if(distance > 120){
        openCover();
        dragging = false;
    }
});

document.addEventListener("touchend", ()=>{
    dragging = false;
});
