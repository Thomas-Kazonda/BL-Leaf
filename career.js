var  element= document.getElementsByClassName("scroll-object")
// console.log(element.style.width);
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// console.log(scrollHeight);

//adding Event listeners
window.addEventListener("scroll",scrolled);
function scrolled(){
    let scrollTop = document.documentElement.scrollTop;
    let currentScroll= (scrollTop / scrollHeight)* 100;
    element.style.width=`${currentScroll}%`;
    console.log(currentScroll);
}