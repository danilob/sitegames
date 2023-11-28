//efeito do botão voltar ao Topo
function topo(){
	window.scrollTo(
		{
			top: 0,
			left: 0,
			behavior: 'smooth'
		}
	);
}
//Validação de Login
function login(){
	var logado = false;
	var usuario = document.getElementById("usuario").value;
	var senha = document.getElementById("senha").value;

	if (usuario == 'admin' && senha == '123456'){
		window.location = "index.html";
		logado = true;
		
	}

	if(!logado){
		alert("Acesso Negado. Dados incorretos!")
	}

	sessionStorage.setItem('isLogged', logado);


}

function logout(){
	sessionStorage.setItem('isLogged', false);
	window.location = "index.html";
}

//Ativar alert no botão cadastrar
function cadastro() {
	alert("Cadastrado com sucesso!");
	window.location.href = "index.html";
}

function checkIsLogged(){
	var isLogged = sessionStorage.getItem('isLogged')=='true'

	if (isLogged){
		var navLogin = document.getElementById("nav-login");
		navLogin.style.display = 'none'
		var navLogout = document.getElementById("nav-logout");
		navLogout.style.display = 'block'
	}else{
		
		var navLogin = document.getElementById("nav-login");
		navLogin.style.display = 'block'
		var navLogout = document.getElementById("nav-logout");
		navLogout.style.display = 'none'
	}
}