
function usernametest() {
    var username=document.getElementById("user").value
    var password=document.getElementById("pass").value
    if (username.length<5 ) {
        document.getElementById("user-error").innerHTML="Le nom d'utlisateur comporte au moin 5 caractere"
    }
    else {
        document.getElementById("user-error").innerHTML=""
    }
    var k=passwor.charAt(0)
    if (password.length<5 || (k.toUpperCase()<'A' || k.toUpperCase()>'Z')) {
        document.getElementById("pass-error").innerHTML="Mot de passe Invalid"
    }
    else {
        document.getElementById("pass-error").innerHTML=""
    }
    
    

}
