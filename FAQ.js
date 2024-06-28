// console.log(document.getElementsByTagName("h1"));

const element= document.querySelector(".scrollObject");
let scrollHeight= document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(element);
console.log(scrollHeight);


window.addEventListener("scroll",scrolledFn);
function scrolledFn(){
   let scrollTop = document.documentElement.scrollTop;
    let currentPosition= (scrollTop/ scrollHeight)* 100;
    console.log(`${currentPosition} %`);
    element.style.width=`${currentPosition}%`;
}