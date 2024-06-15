const drag = document.getElementById('mydiv');
let offSetY= 0; 
let offSetX=0;
let dragging =false;
let initialX; 
let initialY;

drag.addEventListener('mousedown', (event)=>{
    dragging = true;
    initialX = event.clientX - offSetX;
    initialY = event.clientY - offSetY;
})

document.addEventListener('mousemove' , (event) =>{
    if(dragging){
        offSetX = event.clientX -initialX;
        offSetY= event.clientY - initialY;
        drag.style.transform= `translate(${offSetX}px, ${offSetY}px)`;
    }
})

document.addEventListener('mouseup', (event)=>{
    dragging = false;
})