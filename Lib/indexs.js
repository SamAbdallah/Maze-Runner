window.onload=function () {
    var score = 0;
    var result = document.getElementsByClassName("boundary example")[0];
    var boundraies = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    start.addEventListener("mouseenter", game);
    start.addEventListener("click", reset);
    var live = [];
    var best = [];
    let ms = 0;
    let sec = 0;
    let min = 0;
    let msS = document.getElementById("ms")
    let secS = document.getElementById("sec")
    let minS = document.getElementById("min")
    let msS3 = document.getElementById("ms3")
    let secS3 = document.getElementById("sec3")
    let minS3 = document.getElementById("min3")

    let interval;
}