var  intentos = 0;
function login(){
if(intentos ==2){
        document.getElementById("resultado").innerHTML = "alcanzaste el maximo de intentos disponibles"
        return;
    } 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
        if (username == "" || password == "") {
            document.getElementById("resultado").innerHTML = "Falta agregar el usuario/contraseña";
            alert('Falta agregar el usuario/contraseña');
            return false;
        }else if (username == "usuario" || password == "123") {
            location.href = "index1.html";
            return false;
        } else {
            alert('Usuario no registrado, vaya al panel de registro');
            document.getElementById("resultado").innerHTML = "Usuario no registrado, vaya al panel de registro"
        }
    }