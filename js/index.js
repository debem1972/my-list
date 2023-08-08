function anota() {
    let text = document.getElementById('entrada').value;  //Recebe os dados digitados no input
    let listaDeDados = document.getElementById('lista').innerHTML; //Recebe os dados carregados na ul/li

    listaDeDados += '<li>' + text + '</li>'  //Concatena cada tag li de abertura e fechamento ao conteúdo digitado no input e salvo na variável text


    //Verifica se o input está vazio. Se sim, emite aviso, se não, envia para o id lista o conteúdo da variável listaDeDados
    if (document.getElementById('entrada').value == "") {
        window.alert("Escreva algo!");
    } else {
        document.getElementById('lista').innerHTML = listaDeDados;
    }

    document.getElementById('entrada').value = null;  //Limpa o campo do input após a function anota

}

//-------------*--------------------*--------------------------------

//Salva a lista no localStorage após clicar no botão salvar
function salva() {
    const meusDados = document.querySelector('#lista').innerHTML;
    localStorage.setItem('meusDados', meusDados);
    window.alert('Sua lista foi salva!!!');

}

//-------------*-----------------------*------------------------------------

//Busca a lista salva no localStorage pelo método getItem com a chave meusDados, e a envia para a ul id lista.
function busca() {
    const meusDados = localStorage.getItem('meusDados');
    document.querySelector('#lista').innerHTML = meusDados;
}

//--------------*---------------------*----------------------------------*
//Efeito de som escrever ao clicar no botão anotar

const anotando = new Audio();
anotando.src = "./sound/escrevendo.mp3";

