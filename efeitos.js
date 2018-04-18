// $(document).ready(function(){}); = $(function(){});
$(function(){
    $(".box-azul").click(function(){

        var tam = $(this).css("width");

        var mod = {};

        if(tam == "100px")
        {
            mod.width = "200px";
        } else {
            mod.width = "100px";
        }

        $(this).animate(mod);
    });

    $(".btn-vai").click(function(){
        $("box-azul").slideToggle()
    });

    $(".box-verde").click(function(){
        var left = $(document).width();//Pega o tamanho da página em questão

        left -= 120;
        var css = {"left":left};
        $(this).animate(css, 1000);
    });

    $(document).keydown(function(ev){
        var left = parseInt($(".box-pink").css
        
        if(ev.keyCode == 39)
        {
            var css = {"left": "+=10"};
        }elseif(ev.keyCode == 37)
        {
            var css = {"left": "-=10"};
        }
        $(".box-pink").animate(css, 1000);
    });

});