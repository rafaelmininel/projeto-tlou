// alert('Olá') - só para testar funcionalidade;
// console - um obejeto que temos acesso         ponto - acessar alguma coisa dentro do console      log - metodo/logar  

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');


// passo 2 - identificar o clique do usuário no botão

// const botao1 = document.getElementById('botao1');
// botao1.addEventListener('click', () => {
//     console.log('clicou no botao 1');
// })

// const botao2 = document.getElementById('botao2');
// botao2.addEventListener('click', () => {
//     console.log('clicou no botao 2');
// })
botoesCarrossel.forEach((botao) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // passo 4 - marcar o botão clicado como se estivesse selecionada
    })
})

