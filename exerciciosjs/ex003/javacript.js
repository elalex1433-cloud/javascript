function contar(){
 let inc = document.getElementById('txti')
 let fim = document.getElementById('txtf')
 let passo = document.getElementById('txtp')
 let res = document.getElementById ('res')

if (inc.value.length  == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
 window.alert('[ERRO] Faltam Dados!')
}
else{
    res.innerHTML = 'contando: '
   let i = Number(inc.value)
   let f = Number(fim.value)
   let p = Number(passo.value)

 if(p <= 0){
    window.alert('Passo inválido! Considerando PASSO 1')
    p = 1
 } if( i < f){
    for(let c = i; c <= f; c +=p){
        res.innerHTML += `${c}`
    }
 }
 
   }
}


