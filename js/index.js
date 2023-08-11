//-----------------*--------------*-------------------*--------------*----
//Capturando os dados do input e lançando em uma lista

const input = document.getElementById('entrada'); //A variável input, recebe os dados digitados no input id entrada

const button = document.getElementById('escrever'); //A variável button seleciona o botão id escrever

//É criado o evento click no botão id escrever. Quando clicado, dispara a função...
button.addEventListener('click', function () {
    const text = input.value;  //A variável text recebe o valor da variável input

    //Se o valor da variável text for igual a vazio(se o campo input estiver vazio), emite o alerta, caso contrário, retornará o resto do código abaixo...
    if (text === "") {
        alert("Não há nada para se anotar...!!!");
        return;
    }

    const list = document.getElementById("lista");  //A variável list seleciona a ul id lista
    const li = document.createElement("li");  //A variável li cria o elemento li da ul

    li.textContent = text;  //A variável li, recebe o conteúdo da variável text
    list.appendChild(li);  //São carregados os elementos li dentro da ul

    //Limpa o campo input após escrever na lista
    input.value = "";


    const audio1 = document.querySelector('#som1');  //A variável audio1, seleciona o arquivo de audio  id som1
    audio1.play();   //O arquivo de audio é executado
});

//-------------*--------------------*--------------------------------

//Salva a lista no localStorage após clicar no botão salvar


const botao2 = document.querySelector('#salvar');  //A variável botao2 seleciona o botao id salvar

botao2.addEventListener('click', function () {
    const input = document.querySelector('#entrada');
    const text = input.value;
    const meusDados = document.querySelector('#lista').innerHTML;  //A variável meusDados seleciona os dados html da ul id lista

    localStorage.setItem('meusDados', meusDados);  //Os dados da variável meusDados são salvos pelo método setItem no local Storage na chave 'meus Dados'
    window.alert('Sua lista foi salva!!!');

    const audio2 = document.querySelector('#som2');
    audio2.play();
});




//-------------*-----------------------*------------------------------------

//Busca a lista salva no localStorage pelo método getItem com a chave 'meusDados', e a envia para a ul id lista.
function busca() {
    const meusDados = localStorage.getItem('meusDados');
    document.querySelector('#lista').innerHTML = meusDados;
};




