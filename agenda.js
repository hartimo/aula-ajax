
var nome = document.getElementById("nome");
var fone = document.getElementById("fone");
var email = document.getElementById("email");
var lista = document.getElementById("lista");

function gravar()
{
    var div = document.getElementById("msg-erro");
    div.style.display = "none";

    if (nome.value == "" || nome.value.length < 3){
        exibeErro("O campo nome é obrigatório");
        nome.focus();
        return; //early return
    }

    var regex = /^\([0-9]+\)[0-9]{4}\-[0-9]{4}$/gm;

    if (regex.exec(fone.value) == null){
        exibeErro("O campo fone é obrigatório");
        fone.focus();
        return; //early return
    }

    if (email.value == ""){
        exibeErro("O campo email é obrigatório");
        email.focus();
        return; //early return
    }

    var novo =   '<tr>'
                + '<td>'+ nome.value +'</td>'
                + '<td>'+ fone.value +'</td>'
                + '<td>'+ email.value +'</td>'
                + '<tr>'

        lista.innerHTML += novo;
}

function exibeErro(msg)
{
    var div = document.getElementById("msg-erro");
    div.innerHTML = msg;
    div.style.display = "block"
}

function pegar()
{
    var dados =
    [
        {
            nome: "hartimo",
            fone: "98808-9765",
            email: "adriano@hartimo.com.br",
        },
        {
            nome: "Pedro",
            fone: "94008-6065",
            email: "pedro@uol.com.br",
        }
    ]; 
    
    for (var i=0; i<dados.length; i++)
    {
        var novo =   '<tr>'
        + '<td>'+ dados[i].nome +'</td>'
        + '<td>'+ dados[i].fone +'</td>'
        + '<td>'+ dados[i].email +'</td>'
        + '<tr>'

        lista.innerHTML += novo;
    }
}

// pegar();
