const bg = document.querySelector(".bg-animation");

for(let i=0;i<60;i++){

let bubble = document.createElement("span")

bubble.style.left = Math.random()*100+"%"

bubble.style.animationDuration = 5+Math.random()*10+"s"

bg.appendChild(bubble)

}
const animation = document.querySelector(".bg-animation");

for(let i=0;i<60;i++){

const span = document.createElement("span");

span.style.left = Math.random()*100 + "vw";
span.style.animationDuration = (Math.random()*5+5) + "s";
span.style.opacity = Math.random();

animation.appendChild(span);

}
