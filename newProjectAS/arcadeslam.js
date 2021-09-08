function button1(){
    //button1
    function blink(selector) {
        $(selector).fadeOut('slow', function() {
            $(this).fadeIn('slow', function() {
                blink(this);
            });
        });
    }
    
    setTimeout(function(){blink(document.getElementById("button1"));},1000);
    

    //button2
    document.getElementById("button2").disable = "disabled";
    
    document.getElementById("button2").style.transition = "opacity 1s";
    document.getElementById("button2").style.opacity = "0";
    
    //button3
    document.getElementById("button3").disable = "disabled";

    document.getElementById("button3").style.transition = "opacity 1s";
    document.getElementById("button3").style.opacity = "0";

    //button4
    document.getElementById("button4").disable = "disabled";

    document.getElementById("button4").style.transition = "opacity 1s";
    document.getElementById("button4").style.opacity = "0";
    
    //directory
    setTimeout(function(){window.location.href = 'theproject.html';},2000);
}

function button2(){
    //button2
    function blink(selector) {
        $(selector).fadeOut('slow', function() {
            $(this).fadeIn('slow', function() {
                blink(this);
            });
        });
    }
    
    setTimeout(function(){blink(document.getElementById("button2"));},1000);
    

    //button1
    document.getElementById("button1").disable = "disabled";
    
    document.getElementById("button1").style.transition = "opacity 1s";
    document.getElementById("button1").style.opacity = "0";
    
    //button3
    document.getElementById("button3").disable = "disabled";

    document.getElementById("button3").style.transition = "opacity 1s";
    document.getElementById("button3").style.opacity = "0";

    //button4
    document.getElementById("button4").disable = "disabled";

    document.getElementById("button4").style.transition = "opacity 1s";
    document.getElementById("button4").style.opacity = "0";

    //directory
    setTimeout(function(){window.location.href = 'aboutme.html';},2000);
}

function button3(){
    //button3
    function blink(selector) {
        $(selector).fadeOut('slow', function() {
            $(this).fadeIn('slow', function() {
                blink(this);
            });
        });
    }
    
    setTimeout(function(){blink(document.getElementById("button3"));},1000);
    

    //button1
    document.getElementById("button1").disable = "disabled";
    
    document.getElementById("button1").style.transition = "opacity 1s";
    document.getElementById("button1").style.opacity = "0";
    
    //button2
    document.getElementById("button2").disable = "disabled";

    document.getElementById("button2").style.transition = "opacity 1s";
    document.getElementById("button2").style.opacity = "0";

    //button4
    document.getElementById("button4").disable = "disabled";

    document.getElementById("button4").style.transition = "opacity 1s";
    document.getElementById("button4").style.opacity = "0";

    //directory
    setTimeout(function(){window.location.href = 'download.html';},2000);
}

function button4(){
    //button3
    function blink(selector) {
        $(selector).fadeOut('slow', function() {
            $(this).fadeIn('slow', function() {
                blink(this);
            });
        });
    }
    
    setTimeout(function(){blink(document.getElementById("button4"));},1000);
    

    //button1
    document.getElementById("button1").disable = "disabled";
    
    document.getElementById("button1").style.transition = "opacity 1s";
    document.getElementById("button1").style.opacity = "0";
    
    //button2
    document.getElementById("button2").disable = "disabled";

    document.getElementById("button2").style.transition = "opacity 1s";
    document.getElementById("button2").style.opacity = "0";

    //button3
    document.getElementById("button3").disable = "disabled";

    document.getElementById("button3").style.transition = "opacity 1s";
    document.getElementById("button3").style.opacity = "0";

    //directory
    setTimeout(function(){window.location.href = 'leaderboard.html';},2000);
}

//checkButton
function check(){
    document.getElementById("checkButton").style.display = "none";
    document.getElementById("check").style.paddingBottom = "0.2rem";
    document.getElementById("check").innerHTML = "<img src='media/loading.gif' width='64' height='64'>"
    setTimeout(function(){document.getElementById("check").innerHTML = "yes :)<br>";
    document.getElementById("check").style.paddingBottom = "2.6rem"; }, 1000);
}
