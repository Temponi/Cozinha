$("document").ready(function(){

    // Pega o JSON
    $.getJSON("../arquivo.json", function(item){

        ingredientes = listarIngredientes(item.ingredientes);
        listarReceitas(item.receitas);
        listarReceitasPossiveis(item.receitas,item.ingredientes);

    });//end getJSON

});//end documentReady

$("#ing").on("keydown", function () {
    if(document.getElementById("ing") != ""){
        
    }
});//end keydown ing

// Lista as receitas possiveis de se fazer com os ingredientes atuais
function listarReceitasPossiveis(receitas,ingredientes){

    var receitasPossiveis = "";

    for(var i = 0; i < receitas.length; i++){ // Itera entre as receitas
        
        var possivel = 0; //Variavel que diz se e possivel ou nao fazer a receita

        for(var j = 0; j < receitas[i].ingredientes.length; j++){ // Itera entre os ingredientes das receitas
            for(var k = 0; k < ingredientes.length; k++){         // Itera entre os ingredientes possiveis

                if(receitas[i].ingredientes[j].nome == ingredientes[k].nome){
                    if(receitas[i].ingredientes[j].quantidade <= ingredientes[k].quantidade) {
                        possivel++;
                    }
                }

            }//end fork
        }//end forj

        if(possivel > 0){receitasPossiveis += receitas[i].nome + "<br>";}

    }//end fori

    $("#receitasPossiveis").html(receitasPossiveis);

}//end listarReceitasPossiveis

// Lista todas as receitas
function listarReceitas(lista){

    var receitas = ""; //Variavel para armazenar as receitas

    for(var i = 0; i < lista.length; i++){
        receitas += lista[i].nome + "<br>";
    }//end for

    $("#receitas").html(receitas);

}//end listarReceitas

// Lista todos os ingredientes
function listarIngredientes(lista){
    var ingredientes = ""; //Variavel para armazenar os ingredientes

    for(var i = 0; i < lista.length; i++){
        ingredientes += lista[i].nome + " - " + lista[i].quantidade + "g<br>";
    }//end for

    $("#ingredientes").html(ingredientes);

}//end listarIngredientes