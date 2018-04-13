
//lê todo o arquivo html antes de executar o JQuery -> $(document).ready(function(){})
$(document).ready(function(){

//$() Mesma coisa que JQuery()

$("#btn").click(function(){
    var cor = $("#cores").val();   
    $("h1.azul").css("color",cor);
});

$("#cores").change(function(){
    var cor = $("#cores").val();   
    $("h1.azul").css("color",cor);
});

$("btn-add").click(function(){
    var cor = $("#nova-cor").val();
    var opt = '<option value="'+ cor +'">'+ cor +'</option>';
    $("#cores").append(opt);

})


})
