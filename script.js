const cover = document.getElementById("cover");

let startY = 0;
let dragging = false;

function openCover(){
    cover.style.transform = "translateY(100%)";
}

cover.addEventListener("pointerdown", (e)=>{
    dragging = true;
    startY = e.clientY;
});

cover.addEventListener("pointermove", (e)=>{

    if(!dragging) return;

    let distance = e.clientY - startY;

    if(distance < 0) distance = 0;

    // opcional feedback visual suave
    cover.style.transform = `translateY(${distance * 0.3}px)`;

    if(distance > 120){
        openCover();
        dragging = false;
    }
});

cover.addEventListener("pointerup", ()=>{
    dragging = false;
    cover.style.transform = "translateY(0)";
});

cover.addEventListener("pointercancel", ()=>{
    dragging = false;
});
