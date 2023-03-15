function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
       // window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value) 
        let fi = Number(fim.value)
        let pa = Number(passo.value)
        if(pa <= 0){
            window.alert('Passo inválido! Condiderando PASSO = 1')
            p = 1
        }
        if(i < fi){
            // contagem crescente
            for(let contador = i; contador <= fi; contador += pa){
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }else{
            //contagem decrescente
            for(let contador = i; contador >= fi; contador -=pa){
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}