(()=>{const e=document.querySelector(".right-button"),s=document.querySelector(".left-button"),d=document.querySelectorAll(".image");document.getElementById("starting-image"),document.querySelector(".nav-circles-container");let t=0;setInterval((function(){t>=d.length-1?(d[t].classList.add("hidden"),t=0,d[t].classList.remove("hidden")):(d[t].classList.add("hidden"),t++,d[t].classList.remove("hidden"))}),5e3),e.addEventListener("click",(()=>{t>=d.length-1?(t=0,d.forEach((e=>{e.classList.contains("hidden")||e.classList.add("hidden")})),d[0].classList.remove("hidden")):(d[t].classList.add("hidden"),t++,d[t].classList.remove("hidden")),console.log(t)})),s.addEventListener("click",(()=>{0===t?(t=d.length-1,d.forEach((e=>{e.classList.contains("hidden")||e.classList.add("hidden")})),d[0].classList.add("hidden"),d[t].classList.remove("hidden")):(d[t].classList.add("hidden"),t--,d[t].classList.remove("hidden")),console.log(t)}))})();