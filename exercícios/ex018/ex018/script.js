function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    if 
       (inicio.value.length == 0 ||
       fim.value.length == 0 ||
       passo.value.length == 0) {
    window.alert('[ERRO] Os dados são inválidos!')
    } 
}
