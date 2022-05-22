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


        };
    }

    function lose() {

        if (!boundraies[0].classList.contains("youlose"))  {
         score -= 10};


        for (var i = 0; i < boundraies.length; i++) {
            boundraies[i].classList.add("youlose");
        }


        document.getElementById("status").innerHtml = "You Lose"
        var result = document.getElementsByClassName("boundary example")[0];
         result.innerHTML = score;

    }


    function win() {
                if(!boundraies[0].classList.contains("youlose")) {
                    var winn = document.getElementById("status").innerHTML = "You Win"
                    var resul = document.getElementsByClassName("boundary example")[0];
                    score += 5;
                    resul.innerHTML = score;
                }

    }


     function reset() {
        for (var i = 0; i < boundraies.length; i++) {

            boundraies[i].classList.remove("youlose");

            document.getElementsByClassName("boundary example")[0].innerHTML = 0;
            score=0;

        }


    }

    function cheat(){
        document.getElementById("status").innerHTML="Dont Try to Cheat :p"
    }

}