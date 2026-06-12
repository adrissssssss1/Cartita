const puller = document.getElementById("puller");
const cover = document.getElementById("cover");
const rope = document.getElementById("rope");

let startY = 0;
let dragging = false;

function startDrag(y){
    dragging = true;
    startY = y;
}

function moveDrag(y){

    if(!dragging) return;

    let distance = y - startY;

    if(distance < 0) distance = 0;

    puller.style.transform =
        `translateX(-50%) translateY(${distance}px)`;

    rope.style.height = `${180 + distance}px`;

    if(distance > 150){
        cover.style.transform = "translateY(100%)";
        dragging = false;
    }
}

function endDrag(){
    dragging = false;

    puller.style.transform = "translateX(-50%)";
    rope.style.height = "180px";
}

puller.addEventListener("mousedown", (e)=>{
    startDrag(e.clientY);
});

document.addEventListener("mousemove", (e)=>{
    moveDrag(e.clientY);
});

document.addEventListener("mouseup", endDrag);


puller.addEventListener("touchstart", (e)=>{
    startDrag(e.touches[0].clientY);
}, {passive:true});

document.addEventListener("touchmove", (e)=>{
    moveDrag(e.touches[0].clientY);
}, {passive:true});

document.addEventListener("touchend", endDrag);

if(distance > 150){
    cover.style.transform = "translateY(100%)";
    dragging = false;

    document.body.style.overflow = "auto";
    document.body.style.overflowY = "scroll";
}
