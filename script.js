const cover = document.getElementById("cover");

let startY = 0;
let dragging = false;

function openCover(){
    cover.style.transition = "transform 0.8s ease";
    cover.style.transform = "translateY(100%)";
}

cover.addEventListener("pointerdown", (e)=>{
    dragging = true;
    startY = e.clientY;

    cover.style.transition = "none";
});

cover.addEventListener("pointermove", (e)=>{
    if(!dragging) return;

    let distance = e.clientY - startY;
    if(distance < 0) distance = 0;

    cover.style.transform = `translateY(${distance * 0.15}px)`;

    if(distance > 120){
        dragging = false;
        openCover();
    }
});

cover.addEventListener("pointerup", ()=>{
    if(!dragging) return;

    dragging = false;

    cover.style.transition = "transform 0.5s ease";
    cover.style.transform = "translateY(0)";
});

cover.addEventListener("pointercancel", ()=>{
    dragging = false;
});
