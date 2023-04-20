function esconde(el){
    document.getElementById(el).style.display = 'none';
}

/*
el= elemento
chamando a função esconde
procura no documento o elemento com id EL, modificando seu display no style para none (Sumir)
*/

function mostra(el){
    document.getElementById(el).style.display = 'block'
}

/*
el= elemento
chamando a função mostra
procura no documento o elemento com id EL, modificando seu display no style para block (Exibir)
*/

function toggle(el){
    var display = document.getElementById(el).style.display;
    if(display == "block"){
    document.getElementById(el).style.display = 'none';
    }
    else{
        document.getElementById(el).style.display = 'block';
    }


}

/*
el= elemento
chamando a função toggle
pega qual é o valor da propriedade display
analisa qual o valor atual para fazer a alteração.

caso minha display esteja exibindo ela tem que sumir,
caso contrário, ela tem que aparecer
*/
