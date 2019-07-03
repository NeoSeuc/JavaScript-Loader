document.addEventListener("DOMContentLoaded", ready);

function ready() {
    var width = 0;
    var max_width = 300;
    var obj = document.getElementById("loader");
    document.getElementById("loader-bar").style.width = max_width+"px";

    var timer = setInterval(()=>{
        width+=20+Math.random()*50;
        if (width>max_width) {
            width = max_width;
            clearInterval(timer);
            let el = document.getElementById("loader-wrapper");
            el.parentNode.removeChild(el);
        }
        obj.style.width = width + "px";
    }, 300+Math.random()*300);
}