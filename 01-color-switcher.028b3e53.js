const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let o,a=!0;e.addEventListener("click",(function(){a&&(a=!1,e.disabled=!0,o=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),t.addEventListener("click",(function(){a=!0,e.disabled=!1,clearInterval(o)})),e.disabled=!1;
//# sourceMappingURL=01-color-switcher.028b3e53.js.map