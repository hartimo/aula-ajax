
function gravar()
{
    var nome = document.getElementById("nome");
    var fone = document.getElementById("fone");
    var email = document.getElementById("email");
    var lista = document.getElementById("lista");
   
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