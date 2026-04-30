let valores = []

function isNumero(n){
    return Number(n) >= 1 && Number (n) <= 100
}

function inLista(n, lista){
    return lista.indexOf(Number(n)) !== -1
}

function adicionar(){
    let num = document.getElementById('txtn')
    let lista = document.getElementById('lista')
    let res = document.getElementById('res')
if (isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))

    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)

    res.innerHTML = ''
} else{
    alert('Valor inválido ou já encontrado!')
}
num.value = ''
num.focus()
}

function finalizar() {
let res = document.getElementById('res')

if(valores.length === 0) {
    alert('Adicione valores antes de finalizar!')
    return
}

let total = valores.length
let maior = valores[0]
let menor = valores [0]
let soma = 0

for(let pos in valores){
    soma += valores[pos]

    if(valores[pos] > maior) maior = valores [pos]
   if(valores[pos] < menor) menor = valores [pos]
}
 let media = soma / total
 res.innerHTML = `
 <p> Total de número: ${total} </p>
 <p> Maior valor: ${maior} </p>
 <p> Menor valor: ${menor} </p>
 <p>soma: ${soma}</p>
 <p> Média: ${media.toFixed(2)}</p>
 `
 
}
