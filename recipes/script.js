let e,t=0;function n(e){const n=document.querySelectorAll(".slider-container .slide"),l=n.length;t+=e,t>=l&&(t=0),t<0&&(t=l-1),n.forEach((e=>e.style.display="none")),n[t].style.display="block"}function l(){clearInterval(e)}document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll(".slider-container .slide");t.length>0&&(t[0].style.display="block"),e=setInterval((()=>{n(1)}),2e3);const c=document.querySelector(".slider-btn.prev"),d=document.querySelector(".slider-btn.next");c.addEventListener("click",(()=>{l(),n(-1)})),d.addEventListener("click",(()=>{l(),n(1)}))}));






