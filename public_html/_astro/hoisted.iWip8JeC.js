const n=document.querySelectorAll(".dropdown");n.forEach(e=>{let i;e.querySelector(".dropdown__button"),e.querySelector(":not(a)").addEventListener("click",()=>{const r=e.getAttribute("aria-expanded");r==="false"?e.setAttribute("aria-expanded",!0):r==="true"&&e.setAttribute("aria-expanded",!1)}),e.addEventListener("mouseenter",()=>{e.setAttribute("aria-expanded",!0),clearTimeout(i)}),e.addEventListener("mouseleave",()=>{i=setTimeout(()=>{e.setAttribute("aria-expanded",!1)},500)})});const t=document.querySelector(".nav"),a=document.querySelector(".nav-toggler");a.addEventListener("click",()=>{t.getAttribute("data-visible")==="false"?(t.setAttribute("data-visible",!0),a.setAttribute("aria-expanded",!0)):(t.setAttribute("data-visible",!1),a.setAttribute("aria-expanded",!1))});