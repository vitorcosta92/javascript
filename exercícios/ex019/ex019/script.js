function tabuada() {
    let numero = document.getElementById('txtnum')
    let tabuada = document.getElementById('tabuada')

    if 
    (numero.value.length == 0) {
        window.alert('[ERRO] Digite um número, meu parça!')
    } else {
        let n = Number(numero.value)
        tabuada.innerHTML = ''

        for (let c = 1; c <= 10; c += 1) {
            let item = document.createElement('option')     
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
        }
    } 
}


