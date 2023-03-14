// alert('Olá') - só para testar funcionalidade;
// console - um obejeto que temos acesso         ponto - acessar alguma coisa dentro do console      log - metodo/logar  

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


// passo 2 - identificar o clique do usuário no botão

// const botao1 = document.getElementById('botao1');
// botao1.addEventListener('click', () => {
//     console.log('clicou no botao 1');
// })

// const botao2 = document.getElementById('botao2');
// botao2.addEventListener('click', () => {
//     console.log('clicou no botao 2');
// })
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        console.log(indice);

        // passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionada
        selecionarBotaoCarrossel(botao);

        // passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // passo 6 - mostrar a imagem de fundo do botão clicado
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

