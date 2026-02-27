window.onload=function(){
document.getElementById("preloader").style.display="none";
}

window.onscroll=function(){
let winScroll=document.body.scrollTop || document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled=(winScroll/height)*100;
document.getElementById("progress-bar").style.width=scrolled+"%";
};

new Typed("#typed",{
strings:["Web Applications","Cloud Systems","AI Solutions"],
typeSpeed:60,
backSpeed:40,
loop:true
});

const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
counter.innerText="0";
const update=()=>{
const target=+counter.getAttribute("data-target");
const c=+counter.innerText;
const increment=target/200;
if(c<target){
counter.innerText=Math.ceil(c+increment);
setTimeout(update,10);
}else{
counter.innerText=target;
}
};
update();
});

document.getElementById("themeToggle").onclick=function(){
document.body.classList.toggle("dark-mode");
};
