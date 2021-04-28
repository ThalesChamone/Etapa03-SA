

//Validação Formulário//

function validar(){
    var nome = document.getElementById("NomeUsuario").value;
    var sobrenome = document.getElementById("SobrenomeUsuario").value
    var endereco = document.getElementById("ENDEREÇO").value
    var estado = document.getElementById("estado").value
    var city = document.getElementById("Cidade").value
    var email = document.getElementById("correio").value
    var confirmar = document.getElementById("confirmar").value

    //document.querySelector("#resultado").innerHTML = nome;
    if(nome == ""){
        alert("Nome Obrigatório")
        return false;
    }
    if(sobrenome == ""){
        alert("Sobrenome Obrigatório")
        return false;
    }
    if(endereco == ""){
        alert("Endereço Obrigatório")
        return false;
    }
    if(estado == ""){
        alert("Estado Obrigatório")
        return false;
    }
    if(city == ""){
        alert("Cidade Obrigatório")
        return false;
    }
    if(email == ""){
        alert("Email Obrigatório")
        return false;
    }
    if(confirmar == ""){
        alert("Confirme seu Email")
        return false;
    }
}



/* VALIDADOR DE CEP */

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('ENDEREÇO').value=("");
    document.getElementById('Cidade').value=("");
    document.getElementById('estado').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('ENDEREÇO').value=(conteudo.logradouro);
    document.getElementById('Cidade').value=(conteudo.localidade);
    document.getElementById('estado').value=(conteudo.uf);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function validacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('ENDEREÇO').value="...";
        document.getElementById('Cidade').value="...";
        document.getElementById('estado').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};

// CRIANDO PRODUTOS

const itens = [
    {
        id: 0,
        nome: "Bolo de Chocolate",
        img: "./img/bolo-de-aniversario-de-chocolate.jpg",
        valor: 45.00,
        quantidade: 0
    },
    {
        id: 1,
        nome: "Bolo de Fuba",
        img: "./img/Bolo-de-fuba.jpg",
        valor: 28.00,
        quantidade: 0
    },
    {
        id: 2,
        nome: "Bolo de Sorvete",
        img: "./img/receita-de-bolo-de-sorvete.jpg",
        valor: 55.00,
        quantidade: 0
    },
    {
        id: 3,
        nome: "Bolo de Café com Chocolate",
        img: "./img/bolo-cafe-chocolate.jpg",
        valor: 32.00,
        quantidade: 0
    },
    {
        id: 4,
        nome: "Bolo de Cenoura com Chocolate",
        img: "./img/bolo-cenoura.jpg",
        valor: 40.00,
        quantidade: 0
    },
    {
        id: 5,
        nome: "Bolo de Laranja",
        img: "./img/bolo-de-laranja",
        valor: 30.00,
        quantidade: 0
    },
    {
        id: 6,
        nome: "Bolo de Maracujá",
        img: "./img/bolo-de-maracuja",
        valor: 30.00,
        quantidade: 0
    },
    {
        id: 7,
        nome: "Bolo de Frutas",
        img: "./img/bolo-de-frutas",
        valor: 65.00,
        quantidade: 0
    },
    {
        id: 8,
        nome: "Bolo de Limão com Gelatina",
        img: "./img/Bolo-de-Limão-com-Gelatina",
        valor: 43.00,
        quantidade: 0
    }

]

//localStorage.setItem('produtos',itens);

// CARREGAR LOJA

function CarregarLoja(){
    let loja = document.querySelector("#produtos");

    itens.forEach((item) => {
        loja.innerHTML+=`
        
        <div>
            
            <p>${item.nome}</p>
            <p>R$ ${item.valor}</p>
            <a href="#void" id="adiciona" key="${item.id}" class="btn btn-primary">Adicionar</a>
            <hr>
        </div>
        
        `;

    })
}
CarregarLoja();


//CARREGAR CARRINHO

carregarCarrinho = () =>{
    let ItensCarrinho = document.querySelector("#carrinho");
    ItensCarrinho.innerHTML = ''
    let valorTotal = 0;

    itens.forEach((item) => {
        if(item.quantidade > 0) {

            valorTotal+=item.quantidade*item.valor;
            ItensCarrinho.innerHTML += `
            <p>${item.nome} | Valor Unitario: R$ ${item.valor} | Quantidade: ${item.quantidade}</P>
            <hr>
            `;
        }
    })
    totalcompra.innerHTML = `<p>Total: R$${valorTotal.toFixed(2)}</p>`
}

// ATUALIZAR QUANTIDADE ITENS CARRINHO

let adicionar = document.querySelectorAll("#adiciona");

for( i = 0; i < adicionar.length; i++){
    adicionar[i].addEventListener('click',function(){
        let key = this.getAttribute('key')
        itens[key].quantidade++;
        carregarCarrinho();
    })
}



//Limpar Carrinho

let reset = document.querySelector("#resetar");

reset.addEventListener('click',() => {
    ItensCarrinho.remove();
})