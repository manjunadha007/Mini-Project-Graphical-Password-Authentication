document.getElementById("redButton").addEventListener("click", function(){
    var text = document.getElementById("text");
    text.value += "red";
})

document.getElementById("greenButton").addEventListener("click", function(){
    var text = document.getElementById("text");
    text.value += "green";
})

document.getElementById("blueButton").addEventListener("click", function(){
    var text = document.getElementById("text");
    text.value += "blue";
})

function signUp2() {
    var colorPattern = document.getElementById("text").value;
    localStorage.setItem("colorpattern",colorPattern);
}