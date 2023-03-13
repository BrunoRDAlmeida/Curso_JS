//expressão CONDIÇÃO MULTIPLA
/*
Os dias da semana em JavaScript:

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
var agora = new Date()
var diaSem = agora.getDay()
switch(diaSem){
    case 0:
        console.log('Domingo')
        break //obrigatório sempre por break no fim de cada ação
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break 
}