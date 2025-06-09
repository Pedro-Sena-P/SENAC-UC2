function msg(){
    alert("Sr(a) " + document.fale_conosco.inputNome.value + ", seus dados foram enviados com sucesso.")
}

function tel(objeto){
    if(objeto.value.length == 0){
        objeto.value = objeto.value + '(';
    }
    if(objeto.value.length == 3){
        objeto.value = objeto.value + ')';
    }
    if(objeto.value.length == 9){
        objeto.value = objeto.value + '-';
    }
}