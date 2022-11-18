document.getElementById("redButton").addEventListener("click", function () {
    var text = document.getElementById("text");
    text.value += "red";
})

document.getElementById("greenButton").addEventListener("click", function () {
    var text = document.getElementById("text");
    text.value += "green";
})

document.getElementById("blueButton").addEventListener("click", function () {
    var text = document.getElementById("text");
    text.value += "blue";
})

function validateData() {
    var user_email = document.getElementById("email").value;
    var user_password = document.getElementById("password").value;
    var colorPattern = document.getElementById("text").value;
    if ((user_email == localStorage.getItem("email")) && (user_password == localStorage.getItem("password")) && (colorPattern == localStorage.getItem("colorpattern"))) {
        alert("Login Successful");
    }
    else {
        alert("Check your email or password in level one"+"\n"+" OR "+"\n"+" Check your colour pattern in level 2");
    }
}

