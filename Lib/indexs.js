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

    function game() {


        startTimer()

        for (var i = 0; i < boundraies.length; i++) {
            boundraies[i].addEventListener("mouseenter", function (event) {
                lose();
                document.getElementById("status").innerHTML = "you lose"


                var end = document.getElementById("end");

            });
            end.addEventListener("mouseenter", win);
            start.addEventListener("mouseenter", cheat);

            console.log("first",msS)
            console.log("second",msS3)


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


        last()
        resetTimer()




    }


    function win() {
                if(!boundraies[0].classList.contains("youlose")) {
                    var winn = document.getElementById("status").innerHTML = "You Win"
                    var resul = document.getElementsByClassName("boundary example")[0];
                    score += 5;
                    resul.innerHTML = score;
                }

                last()
                resetTimer()

    }


    function reset() {
        for (var i = 0; i < boundraies.length; i++) {

            boundraies[i].classList.remove("youlose");

            document.getElementsByClassName("boundary example")[0].innerHTML = 0;
            score=0;

        }
       last()
       resetTimer()


    }

    function cheat(){
        document.getElementById("status").innerHTML="Dont Try to Cheat :p"
    }








   function stopWatch(){
        ms++;
        if (ms==100) {
            ms=0;
            sec++;
            msS.innerHTML=ms;

        }

        if (sec==60) {
            sec=0;
            min++;
            secS.innerHTML=sec;
        }

        if (ms<10) {
            msS.innerHTML='0'+ms;
        }
        else {
            msS.innerHTML=ms;
        }

        if (sec<10) {
            secS.innerHTML='0'+sec;
        }
        else {
            secS.innerHTML=sec;
        }

        if (min<10) {
            minS.innerHTML='0'+min;
        }
        else {
            minS.innerHTML=min;
        }



    }
    function startTimer(){
        clearInterval(interval);
        interval=setInterval(stopWatch,10);
    }

    // function stoptimer() {
    //     clearInterval(interval);
    // }


    function resetTimer() {
        clearInterval(interval);
        ms=0;
        sec=0;
        min=0;

        msS.innerHTML=00;
        secS.innerHTML=00;
        minS.innerHTML=00;

    }


    function last(){
        msS3.innerHTML=ms;
        secS3.innerHTML=sec;
        minS3.innerHTML=min;
    }
}