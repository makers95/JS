var pics = document.getElementById("pics");
var n = 1;

setInterval(function () {
    pics.innerHTML = "<img src='images/A" + n + ".jpg'/>";
    n++
    if (n == 3) {
        n = 1;
    }
}, 1000)