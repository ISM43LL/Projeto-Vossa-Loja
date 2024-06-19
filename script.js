let nome, usuario, senha

function recuperarSenha(){
    let usuario = document.getElementById("email3").value
    recEmail = localStorage.getItem("email")

    if(recEmail == usuario){
        alert("Enviamos para o email fornecido instruções para recuperar a senha \nEmail: " + recEmail +"\nVerifique seu email !")
    }else{
        alert("Email inválido")
    }
    document.getElementById("email3").value = ''
}
function criarConta(){
    nome = document.getElementById("name").value
    usuario = document.getElementById("email").value
    senha = document.getElementById("password").value
    localStorage.setItem("name",nome)
    localStorage.setItem("email",usuario)
    localStorage.setItem("password",senha)
    if(!nome || !usuario || !senha){
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    alert("Conta Criada com sucesso\nVá a tela de Login !")    
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
}
function fazerLogin(){
    let usuario = document.getElementById("email2").value
    let pass = document.getElementById("password2").value
    let usuLs = localStorage.getItem("email")
    let passLs = localStorage.getItem("password")
    if(!usuario || !pass){
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    if(usuario == usuLs && pass == passLs){
        alert("Login efetuado com sucesso!")
        location.href = 'https://projetovossaloja.web.app/'
    }else{
        alert("Usúario ou senha incorretos")
    }
    document.getElementById("email2").value = ''
    document.getElementById("password2").value = ''
}
function cadastrarEndereco() {
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("number").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let cep = document.getElementById("cep").value;
    
    localStorage.setItem("rua", rua);
    localStorage.setItem("number", numero);
    localStorage.setItem("bairro", bairro);
    localStorage.setItem("cidade", cidade);
    localStorage.setItem("estado", estado);
    localStorage.setItem("cep", cep);
    if(!rua || !numero || !bairro || !cidade || !estado || !cep){
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    alert("Endereço cadastrado com sucesso!");
    document.getElementById("rua").value = ''
    document.getElementById("number").value = ''
    document.getElementById("bairro").value = ''
    document.getElementById("cidade").value = ''
    document.getElementById("estado").value = ''
    document.getElementById("cep").value = ''
}