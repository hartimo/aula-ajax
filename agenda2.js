
function gravar()
{
    var nome = document.getElementById("nome");
    var fone = document.getElementById("fone");
    var email = document.getElementById("email");
    var lista = document.getElementById("lista");
    
    var novo =   '<tr>'
               + '<td>'+ nome.value +'</td>'
               + '<td>'+ fone.value +'</td>'
               + '<td>'+ email.value +'</td>'
               + '<tr>'

    lista.innerHTML += novo;
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
    
    
}