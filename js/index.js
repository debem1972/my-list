function anota() {
    let anotar = document.getElementById('entrada').value;  //Recebe os dados digitados no input
    let ulList = document.getElementById('lista').innerHTML; //Rece os dados carregados na ul/li

    ulList += '<li>' + anotar + '</li>'  //Concatena cada tag li de entrada e saída ao conteúdo digitado no input e salvo na variável anotar


    //Verifica se o input está vazio. Se sim, emite aviso, se não, envia para o id lista o conteúdo da variável ulList
    if (document.getElementById('entrada').value == "") {
        window.alert("Escreva algo!");
    } else {
        document.getElementById('lista').innerHTML = ulList;
    }

    document.getElementById('entrada').value = null;  //Limpa o campo do input após a function anotar

}

//-------------*--------------------*--------------------------------

//Salva a lista no localStorage após clicar no botão salvar
function salva() {
    const meusDados = document.querySelector('#ulList').innerHTML
    localStorage.setItem('meusDados', meusDados);
    window.alert('Sua lista foi salva!!!');

}

//-------------*-----------------------*------------------------------------

function busca() {
    const meusDados = localStorage.getItem('meusDados');
    document.querySelector('#ulList').innerHTML = meusDados;
}