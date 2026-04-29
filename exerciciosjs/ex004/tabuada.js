function tabuada(){
    let num = document.getElementById('num')
    let res = document.getElementById('res')

    if(num.value.length == 0){
       window.alert('Digite um número!')
    }

    else{
        let n = Number(num.value)
        res.innerHTML = ''

        for(let i = 1 ; i <= 10; i++){
            let resultado = n * i
            res.innerHTML += `${n} x ${i} = ${resultado} <br>`
        }
    }
}