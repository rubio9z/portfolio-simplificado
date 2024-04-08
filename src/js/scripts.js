/*

   Passo 3 - identificar o clique no botão 
   

 
*/


//- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
 //  Passo 1 - pegar o botão mostrar   mais no JS pra poder verificar quando o usuário clicar em cima dele 

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

 botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 2 - adicionar a classe ativo nos projetos escondidos
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    // - Objetivo 2 - esconder o botão de mostrar mais 
    //  Passo 1 - pegar o botão e esconder ele
    botaoMostrarProjetos.classList.add("remover");
 });