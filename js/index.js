/*function anota() {
    let text = document.getElementById('entrada').value;  //Recebe os dados digitados no input
    let listaDeDados = document.getElementById('lista').innerHTML; //Recebe os dados carregados na ul/li*/



//Verifica se o input está vazio. Se sim, emite aviso, se não, envia para o id lista o conteúdo da variável listaDeDados

/*if (document.querySelector('#entrada').value == "") {   
    window.alert("Escreva algo!");
} else {
    listaDeDados += '<li>' + text + '</li>';  //Concatena cada tag li de abertura e fechamento ao conteúdo digitado no input e salvo na variável text
    document.getElementById('lista').innerHTML = listaDeDados;

}

document.getElementById('entrada').value = "";  //Limpa o campo do input após a function anota

}*/

//-----------------*--------------*-------------------*--------------*----
//Capturando os dados do input e lançando em uma lista

const input = document.getElementById('entrada');

const button = document.getElementById('escrever');

button.addEventListener('click', function () {
    const text = input.value;
    if (text === "") {
        alert("O campo não pode ser vazio.");
        return;
    }

    const list = document.getElementById("lista");
    const li = document.createElement("li");

    li.textContent = text;
    list.appendChild(li);

    input.value = "";


    let audio1 = document.querySelector('#som1');
    audio1.play();
});

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

/*const botao1 = document.querySelector('#escrever'); //Seleciona o botão id escrever

botao1.addEventListener('click', function () {  //Adiciona o evento click ao botão e cria uma function...

    const audio1 = document.querySelector('#som1'); //Seleciona a tag de audio com o id som1

    if (document.querySelector('#entrada').value == ""); {
        window.alert('O campo não pode estar vazio!');
        return;
    }else {
        audio1.play();   //Executa a variável audio1 com o método play

    }

});*/

