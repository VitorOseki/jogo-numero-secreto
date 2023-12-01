let numerosSorteados = [];
let max = 200;
let numSecreto = gerarNumAleatorio();
let tentativas = 0;
let i = 0;

function exibirTextoNaTela(texto, tag) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * max + 1);
    let qtdElementosLista = numerosSorteados.length;
    if (qtdElementosLista == max) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function ativarBotao() {
    botao = document.getElementById('reiniciar');
}
function exibirMensagemInicial(){
exibirTextoNaTela("Jogo do número secreto", "h1");
exibirTextoNaTela(`Escolha um número entre 1 e ${max}`, "p");
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value
    tentativas++;
    let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        if (chute == numSecreto) {
            exibirTextoNaTela(`ACERTOU! Com ${tentativas} ${palavraTentativa}.`,"h1");
            exibirTextoNaTela(`Parabéns! O número secreto é mesmo ${chute}!`, "p");
            document.getElementById('reiniciar').removeAttribute("disabled");
        } else if (chute > numSecreto) {
            exibirTextoNaTela(`ERROU! Você fez ${tentativas} ${palavraTentativa} até o momento.`, "h1");
            exibirTextoNaTela(`O número misterioso é menor do que ${chute}`, "p");
        } else {
            exibirTextoNaTela(`ERROU! Você fez ${tentativas} ${palavraTentativa} até o momento.`, "h1");
            exibirTextoNaTela(`O número misterioso é maior do que ${chute}`, "p");
        }
    limparCampo();
    }

    
function reiniciarJogo() {
    numSecreto = gerarNumAleatorio();
    tentativas = 0;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}