function aide(){
	document.getElementById("user").onclick=function(){
		var input = document.getElementById("inputUser");
		input.placeholder = "votre identifiant ici";
		}
	document.getElementById("password").onclick=function(){
		var input = document.getElementById("inputPassword");
		input.placeholder = "votre mot de passe ici";
		}
}


window.onload = function(){
	aide();
};