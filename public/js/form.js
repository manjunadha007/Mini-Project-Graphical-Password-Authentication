function signUp(){
    var usr = document.getElementById("name").value;
    var em = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;

    localStorage.setItem("username", usr);
    localStorage.setItem("email", em);
    localStorage.setItem("password", pwd);
}



