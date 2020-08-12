var nome = document.querySelector('#nome')
var tel = document.querySelector('#telefone')
var email = document.querySelector('#email')


tel.addEventListener('blur',function(){
    if(tel.value == ''){
        alert("Campo Obrigatório")
    }
    tel.style.borderBottom = ""
})
tel.addEventListener('focus',function(){
    tel.style.borderBottom = " 1px red solid"
})


nome.addEventListener('blur',function(){
    if(nome.value == ''){
        alert("Campo Obrigatório")
    }
    nome.style.borderBottom = ""
})
nome.addEventListener('focus',function(){
    nome.style.borderBottom = " 1px red solid"
})


email.addEventListener('blur',function(){
    if(email.value == ''){
        alert("Campo Obrigatório")
    }
    email.style.borderBottom = ""
})
email.addEventListener('focus',function(){
    email.style.borderBottom = " 1px red solid"
})