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

    let distance = y - startY; // 👈 AHORA VA HACIA ABAJO

    if(distance < 0) distance = 0;

    // mover PNG
    puller.style.transform =
        `translateX(-50%) translateY(${distance}px)`;

    // estirar cuerda
    rope.style.height = `${180 + distance}px`;

    // abrir cuando llegue al límite
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

/* ------------------ */
/* PC (mouse) */
/* ------------------ */
puller.addEventListener("mousedown", (e)=>{
    startDrag(e.clientY);
});

document.addEventListener("mousemove", (e)=>{
    moveDrag(e.clientY);
});

document.addEventListener("mouseup", endDrag);

/* ------------------ */
/* CELULAR (touch) */
/* ------------------ */
puller.addEventListener("touchstart", (e)=>{
    startDrag(e.touches[0].clientY);
}, {passive:true});

document.addEventListener("touchmove", (e)=>{
    moveDrag(e.touches[0].clientY);
}, {passive:true});

document.addEventListener("touchend", endDrag);
