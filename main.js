var b = document.createElement("style");
b.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Vazirmatn');`
document.head.appendChild(b);


var a = document.createElement("span");
a.innerText = "دانلود کن!";
a.classList = "dl";
a.dir = "rtl";
a.style.fontFamily = "Vazirmatn";
a.style.background = "#EA3323";
a.style.color = "white"
a.style.padding = "8px";
a.style.borderRadius = "3px";
a.style.position = "fixed";
a.style.left = "15px";
a.style.bottom = "15px";
a.addEventListener("click", ()=>{
   a.style.transform = "scale(.9)"
   setTimeout(()=>a.style.transform = "scale(1)", 35);
   window.location = `https://upull.me/#${window.location.href}`
})
document.body.appendChild(a);
