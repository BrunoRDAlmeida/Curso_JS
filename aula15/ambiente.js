let num = [5, 8, 2, 9, 3]
num.push(1) //adicionando um valor no vetor
num.sort() //ordenando o vetor do menor para o maior
console.log(num) //exibindo o vetor
console.log(`O vetor tem ${num.length} posições`) //exibindo quantas keys tem o vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) // mostrando qual e o valor da primeira key
let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 4 está na posição ${pos}`)
}