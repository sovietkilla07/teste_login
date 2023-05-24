let email = document.getElementById("email");
let senha = document.getElementById("senha");

function enviarInfo(event)
{

    let emailDigitado = email.value;
    let senhaDigitado = senha.value;
    console.log(emailDigitado);
    console.log(senhaDigitado);

    event.preventDefalt();

}