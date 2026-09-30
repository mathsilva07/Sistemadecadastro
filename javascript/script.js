//Procura o elemento que possui o id "Item"
let item = document.getElementById("item");
//Procura o elemento que possui o id "Lista"
let lista = document.getElementById("lista");
//Procurar o elemento que possui o id "Busca"
let busca = document.getElementById("busca");
//Procurar o elemento que possui o id "btnAdicionar"
let adicionar = document.getElementById("btnAdicionar")

//Cria uma matriz vazia para guardar os itens // É a casinha
let itens = [];
//Quando clicar no botão adicionar, executa a função adicionar()
adicionar.addEventListener("click", BtnAdicionar);
//Quando o usuário digitar no campo busca,
//Executa a função busca()
busca.addEventListener("keyup", buscar);


function BtnAdicionar() {
    //Adicionar o valor digitado no array // Pega a galinha e leva pra casa
    itens.push(item.value);
    //Crie uma nova tag <li> // Cria etiqueta vazia
    let li = document.createElement("li");
    //Cria um texto com um valor digitado // Pega o nome "Galinha" do usuário
    let texto = document.createTextNode(item.value);
    //Coloca o texto dentro da tag <li> // Coloca o nome "Galinha" na etiqueta
    li.appendChild(texto);
    //Coloca o <li> dentro da lista <ul> // Leva a galinha até o curral com a etiqueta
    lista.appendChild(li);
}

function buscar() {
    //Pega o valor digita e converte para maíusculas // A Denise falou "Boi"
    let nome = busca.value.toLowerCase();
    //Busca todas as tags <li> da página // vai até o curral

    let itensLista = document.getElementsByTagName("li")
    //Percorre todos os itens da lista // Ele vai percorrer o curral

    for (let i = 0; i < itensLista.length; i++) {
        //Pega o texto do item atual e converte para maiúsculo // nesse caso, no curral, as etiquetas ficarão maiusculas no momento em que o elvis percorrer cada animal.

        let texto = itensLista[i].textContent.toLocaleLowerCase();
        if (texto.includes(nome)) {
            itensLista[i].style.display = "block"
        }
        else {
            itensLista[i].style.display = "none";
        }

    }

}
