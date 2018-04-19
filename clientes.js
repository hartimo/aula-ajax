$(function(){
    /* $("fieldset + button").click(function(){*/
        
        $.getJSON("/lista-clientes.json",function(valores){
            
            /* for(var i=0; i < valores.length; i++)
            {
                var tr = '<tr>'
                        +'<td>'+ valores[i].nome +'</td>'
                        +'<td>'+ valores[i].email +'</td>'
                        +'<td>'+ valores[i].cep +'</td>'
                        +'<td>'+ valores[i].dataNasc +'</td>'
                        +'</tr>';

                $("tbody").append(tr);
            }*/

            $('tbody').empty();

            valores.forEach(function(val, idx){
                console.log(val, idx)

                var tr = '<tr>'
                        +'<td>'+ val.nome +'</td>'
                        +'<td>'+ val.email +'</td>'
                        +'<td>'+ val.cep +'</td>'
                        +'<td>'+ val.dataNasc +'</td>'
                        +'</tr>';

                $("tbody").append(tr);
            });//Fim forEach
        });//Fim JSON
    /*});*/
    
    $("fieldset button").click(function(){

        var nome = $("input[name=nome]").val();
        var email = $("input[name=email]").val();
        var cep = $("input[name=cep]").val();
        var dataNasc = $("input[name=data-nasc]").val();

        var form = {
            "nome": nome,
            "email": email,
            "cep": cep,
            "dataNasc": dataNasc
        };
    /*    
        $.post('/clientes.php',form);

            var tr = '<tr>'
        +'<td>'+ nome +'</td>'
        +'<td>'+ email +'</td>'
        +'<td>'+ cep +'</td>'
        +'<td>'+ dataNasc +'</td>'
        +'</tr>';

    var tr2 = $(tr).hide().fadeIn();//Cria ao evento de aparecer, hide oculta e fadeInt Mostra.
        $("tbody").append(tr2);
    */    

    });//Fim do click - Botão adicionar

    $("input[name=cep]").keydown(function(ev){
        if ((ev.keyCode >= 48 && ev.keyCode <= 57) || ev.keyCode == 8)
        {
            return True;
        } else {
            return false;
        }
    });//Fim Keydown

    $("input[name=data-nasc]").datepicker({
        dateFormat: "dd/mm/yy"
    })

    $("input[name=email]").blur(function(){
        var valor = $(this).val();
        var regex = /^[a-zA-Z0-9\.\-_]*@[a-z0-9]*\.[a-z\.]*$/gm;//Expressão Regular - Site: regex101.com - Estudar livro:
        
        if(regex.test(valor) == false)
        {
            alert("email inválido");
        }
    });

});