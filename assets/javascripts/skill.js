
function carregar(){
    let txtn1 = document.querySelector("input#txtn1")
    let pontuacao = document.getElementsByClassName('pontuacao')
    let chek = document.getElementsByName('chek')
    
    let html = 0

    pontuacao[0].style.height = '100%'
    pontuacao[0].style.width = `30%`
    pontuacao[0].style.backgroundColor = '#38BD5CF6'
    txtn1.value = ''
    txtn1.focus()
    
    pontuacao[1].style.height = '100%'
    pontuacao[1].style.width = `30%`
    pontuacao[1].style.backgroundColor = '#EC4899'
    txtn1.value = ''
    txtn1.focus()

    pontuacao[2].style.height = '100%'
    pontuacao[2].style.width = `30%`
    pontuacao[2].style.backgroundColor = 'red'

    pontuacao[3].style.height = '100%'
    pontuacao[3].style.width = `30%`
    pontuacao[3].style.backgroundColor = 'yellow'
    }

function adicionar(){

    let txtn1 = document.querySelector("input#txtn1")
    let pontuacao = document.getElementsByClassName('pontuacao')
    let chek = document.getElementsByName('chek')
    
    let html = 0

    if (txtn1.value.length == 0 ){
        alert(" Adicione um valor a caixa ")

    }else if (txtn1.value > 0 && txtn1.value <= 100){
        if (chek[0].checked){
            pontuacao[0].style.height = '100%'
            pontuacao[0].style.width = `${txtn1.value}%`
            pontuacao[0].style.backgroundColor = '#38BD5CF6'
            txtn1.value = ''
            txtn1.focus()
            

        }else if (chek[1].checked){
            pontuacao[1].style.height = '100%'
            pontuacao[1].style.width = `${txtn1.value}%`
            pontuacao[1].style.backgroundColor = '#EC4899'
            txtn1.value = ''
            txtn1.focus()

        }else if (chek[2].checked){
            pontuacao[2].style.height = '100%'
            pontuacao[2].style.width = `${txtn1.value}%`
            pontuacao[2].style.backgroundColor = 'red'
            txtn1.value = ''
            txtn1.focus()

        }else if(chek[3].checked){
            pontuacao[3].style.height = '100%'
            pontuacao[3].style.width = `${txtn1.value}%`
            pontuacao[3].style.backgroundColor = 'yellow'
            txtn1.value = ''
            txtn1.focus()
            
        }else{
            alert(" Marque uma opção para adicionar o valor ")
            txtn1.value = ''
            txtn1.focus()
        }

    }else if (txtn1.value < 0){
        alert(" Digite valores de 1 á 100  ")
        txtn1.value = ''
        txtn1.focus()

    }else if (txtn1.value == 0){
        alert(" Digite valores de 1 á 100 ")
        txtn1.value = ''
        txtn1.focus()

    }else {
        alert(" Digite valores de 1 á 100 ")
        txtn1.value = ''
        txtn1.focus()
    }

}
