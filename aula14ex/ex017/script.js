function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let numero = Number(num.value)
        let contador = 1
        tab.innerHTML = ''
        while(contador <= 10){
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            contador++
        }
    }
}