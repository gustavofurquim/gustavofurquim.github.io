function check(){
    document.getElementById("checkButton").style.display = "none";
    document.getElementById("check").style.paddingBottom = "0rem";
    document.getElementById("check").innerHTML = "<img src='media/loading.gif' width='64' height='64'>"
    setTimeout(function(){document.getElementById("check").innerHTML = "yes :)<br>";
    document.getElementById("check").style.paddingBottom = "2.2rem"; }, 1000);
}