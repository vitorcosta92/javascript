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
    } else {
        res.innerHTML = 'Contando...'
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (ini < f) {
            for (let c = ini; c <=f; c += p){
                res.innerHTML += `${c} 👉, `
            }
                
                res.innerHTML += `🏁`
                res.innerHTML += `<br>Contagem Finalizada, meu parça! `

        } else {
            for (let c = ini; c >= f; c-= p){
                res.innerHTML +=`${c} 👉, `
                }
                res.innerHTML += `🏁`
                res.innerHTML += `<br>Contagem Finalizada, meu parça!`
        }
    
    } 
}
