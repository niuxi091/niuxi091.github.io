define(function(n,t,i){function e(n,t){return Math.random()*(t-n)+n}function o(){for(var n=0;n<u.length;n++)u[n].style.animation="biu 1s 1",function(n){u[n].addEventListener("animationend",function(){this.style.animation="float "+e(2,5).toFixed(2)+"s infinite"})}(n)}var f=document.querySelector(".skill"),u=f.querySelectorAll("div");t.div=u,t.bub=function(){f.offsetLeft>=0&&o()},t.bubble=o});