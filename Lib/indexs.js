window.onload=function () {
    var score = 0;
    var result = document.getElementsByClassName("boundary example")[0];
    var boundraies = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    start.addEventListener("mouseenter", game);
    start.addEventListener("click", reset);

    function game() {

        for (var i = 0; i < boundraies.length; i++) {
            boundraies[i].addEventListener("mouseenter", function (event) {
                lose();
                document.getElementById("status").innerHTML = "you lose"


                var end = document.getElementById("end");

            });
            end.addEventListener("mouseenter", win);
            start.addEventListener("mouseenter", cheat);


        }
        ;


    }


}