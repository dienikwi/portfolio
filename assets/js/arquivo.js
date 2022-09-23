var string = "Dienifer Kwiatkowski";
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("dieniferNome").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 100);
}