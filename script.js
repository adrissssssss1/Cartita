const puller = document.getElementById("puller");
const cover = document.getElementById("cover");
const rope = document.getElementById("rope");

let startY = 0;
let dragging = false;

puller.addEventListener("mousedown", (e) => {
    dragging = true;
    startY = e.clientY;
});

document.addEventListener("mousemove", (e) => {

    if (!dragging) return;

    let distance = startY - e.clientY;

    if(distance > 0){

        puller.style.transform =
            `translateX(-50%) translateY(${-distance}px)`;

        rope.style.height =
            `${180 + distance}px`;
    }

    if(distance > 150){
        cover.style.transform = "translateY(-100%)";
    }
});

document.addEventListener("mouseup", () => {

    if(!dragging) return;

    dragging = false;

    puller.style.transform =
        "translateX(-50%)";

    rope.style.height = "180px";
});