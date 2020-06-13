var imagemMidia = [];
var tituloMidia = [];
var generoMidia = [];
var anoMidia = [];
var avaliacaoMidia = [];
var statusMidia = [];

function Adicionar(){
    const _titulo = prompt('Digite o nome do livro/jogo/filme que deseja adicionar:');
    const titulo = _titulo.toUpperCase();
    const genero = prompt('Digite o genero de '+titulo+':');
    const ano = prompt('Digite o ano de '+titulo+':');
    let imagem = prompt('Deseja adicionar uma imagem? se sim, insira sua url, se não, deixe em branco:');
    const avaliacao = prompt('De 1 a 5, quanto você avalia '+titulo+'?');
    const status = prompt('Escolha um status para '+titulo+' na sua biblioteca. (ex: Obtido ou Já li/joguei/assisti)');

    if(imagem == null){
        imagem="";
    }

    imagemMidia.push(imagem);
    tituloMidia.push(titulo);
    generoMidia.push(genero);
    anoMidia.push(ano);
    avaliacaoMidia.push(avaliacao);
    statusMidia.push(status);

    exibirListaMidia();
}

function exibirListaMidia(){
        //pego todos os elementos com a classe .item-show
    const elementos = document.querySelectorAll(".item-show");

        //"excluo" os elementos já existentes com a classe .item-show para não serem exibidos de novo
    for(let i = 0; i < elementos.length; i++){
        elementos[i].parentNode.removeChild(elementos[i]);
    }

    for(let i = 0; i < tituloMidia.length; i++){
        const cloneItem = document.querySelector("#item-base").cloneNode(true);

        const parent = document.querySelector("body");
        parent.appendChild(cloneItem);

        cloneItem.className = "item-show";

        cloneItem.querySelector(".imagem-midia").src = imagemMidia[i];
        cloneItem.querySelector(".item-titulo").textContent = tituloMidia[i];
        cloneItem.querySelector(".item-genero").textContent = 'Gênero: '+generoMidia[i];
        cloneItem.querySelector(".item-ano").textContent = 'Ano: '+anoMidia[i];
        cloneItem.querySelector(".item-avaliacao").textContent = avaliacaoMidia[i]+'☆';
        cloneItem.querySelector(".item-status").textContent = statusMidia[i];
    }

}

function Editar(){
    const titulo = prompt('Digite o nome do titulo que deseja editar: ').toUpperCase();

    const elementos = document.querySelectorAll(".item-show");

    const tituloQuery = document.querySelectorAll(".item-titulo");

    for(let i = 0; i<elementos.length; i++){
       
        //pula o titulo do modelo e verifica se o que foi digitado bate com o titulo do item
        if(tituloQuery[i+1].textContent==titulo){
            const novoNome = prompt('Digite o novo nome para o jogo/filme/livro:').toUpperCase();
            elementos[i].querySelector(".item-titulo").textContent = novoNome;
            elementos[i].querySelector(".item-genero").textContent = 'Gênero: '+ prompt('Digite o novo gênero para '+novoNome+':');
            elementos[i].querySelector(".item-ano").textContent = 'Ano: '+ prompt('Digite o novo ano de lançamento de '+novoNome+':');
            elementos[i].querySelector(".imagem-midia").src = prompt('Digite a nova url da imagem do '+novoNome+' (caso não queria, deixe em branco):');
            elementos[i].querySelector(".item-avaliacao").textContent = prompt('Digite a nova avaliação (de 1 a 5) para '+novoNome+':')+'☆';
            elementos[i].querySelector(".item-status").textContent = prompt('Escolha um novo status para '+novoNome+' na sua biblioteca. (ex: Obtido ou Já li/joguei/assisti)');
        }
    }
}

function Excluir(){

    const titulo = prompt('Digite o nome do titulo que deseja excluir: ').toUpperCase();

    const elementos = document.querySelectorAll(".item-show");

    const tituloQuery = document.querySelectorAll(".item-titulo");

    for (let i = 0; i < elementos.length; i++){      

        if(tituloQuery[i+1].textContent==titulo){
            var resposta = confirm('Você tem certeza disso?');
            if(resposta){
                elementos[i].parentNode.removeChild(elementos[i]);
            }
            else{
                alert('Item não encontrado');
            }
        }
    }
}
