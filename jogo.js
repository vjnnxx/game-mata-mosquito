var altura
var largura
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500 ms
    criaMosquitoTempo = 1500
}else if (nivel === 'dificil'){
    //1000 ms
    criaMosquitoTempo = 1000
}else if(nivel ==='chucknorris'){
    //750 ms
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    //pegar a largura e a altura atuais da janela
    altura = window.innerHeight 
    largura = window.innerWidth
    //console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    
    tempo--
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
},1000)

function posicaoRandomica(){
    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++ 
        }
        
    }
    

    //gerar posições randomicas

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //prevenção caso as posições sejam negativas
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0: posicaoY


    //criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    
    mosquito.onclick = function(){
        this.remove()

    }

    document.body.appendChild(mosquito)


    
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    //muda a posição horizontal da imagem de maneira randomica
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
