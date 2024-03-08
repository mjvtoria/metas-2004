const botoes = document.querySelectorAll(".botao");

for(let1=0;1<botoes.length;1++){
    botoes[1].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[1].classList.add("ativo");

    }
}