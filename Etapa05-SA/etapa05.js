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

// Puxar JSON


