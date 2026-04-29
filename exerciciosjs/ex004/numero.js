function verificar(){
    let n = document.getElementById('numero').value
    let res = document.getElementById('res')

    if(n.length == 0){
        window.alert('Digite um número')
    }

    else{
       let num = Number(n)

       if(num % 2 == 0){
        res.innerHTML = `O número ${num} é PAR`
       }
       else{
        res.innerHTML = `O número ${num} é IMPAR`
       }
    }
}