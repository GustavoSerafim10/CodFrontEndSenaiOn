//efeito de esconder formulário de cadastro
// essa função abaixo, e apenas para inicializar o JQuery
$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    
    });



});
