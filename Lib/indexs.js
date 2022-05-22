window.onload=function () {
    var score = 0;
    var result = document.getElementsByClassName("boundary example")[0];
    var boundraies = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    start.addEventListener("mouseenter", game);
    start.addEventListener("click", reset);


}