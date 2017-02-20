// fonction pour faire disparaitre le menu de gauche lorsque la page est trop petite et faire reaparraitre celui ci si la fentre est assez grande.
function disparaitre(){
	if (window.matchMedia("(max-width: 650px)").matches){
		document.getElementById("navigation").parentNode.className="disparaitre";
		document.getElementById("navigation").className="disparaitre";
		document.getElementById("iconeMenu").className="iconeMenu glyphicon glyphicon-th";
		document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
		ouvrirPetitMenu();
	}
	else{
		document.getElementById("navigation").style.left=0;
		document.getElementById("navigation").className="col-lg-3 col-md-3 col-sm-3 col-xs-3";
		document.getElementById("section").className="col-lg-8 col-md-8 col-sm-8 col-xs-8";
		document.getElementById("iconeMenu").className="disparaitre";
		document.getElementById("navigation").parentNode.className="";
	}
}

// fonction pour ouvrir le menu lorsque l on clique sur l icone voulue.
function ouvrirPetitMenu (){
	document.getElementById("iconeMenu").onclick=function(){
		var width = window.innerWidth;
		if (width>500){
			var marginLeft = window.innerWidth*40/100;
		}
		else if (width>350){
			var marginLeft = window.innerWidth*30/100;
		}
		else if (width>200){
			var marginLeft = window.innerWidth*20/100;
		}
		document.getElementById("navigation").className="petitMenu";
		document.getElementById("navigation").style.left=marginLeft+"px";
		document.getElementById("navigation").parentNode.className="opaque";
	}
	document.getElementById("navigation").parentNode.onclick=function(){
		document.getElementById("navigation").parentNode.className="disparaitre";
	}
}

// fonction pour que le footer soit sois en bas de la page html si celle ci est plus grande que la fenetre sois en bas dela fenetre dans le cas inverse.
function gestionFooter(){
	var heightWindow = window.innerHeight;
	var heightSection = document.getElementById("section");
	var heightNavigation = document.getElementById("navigation");
	var heightSection2 = parseInt(getComputedStyle(heightSection).height, 10);
	var heightNavigation2 = parseInt(getComputedStyle(heightNavigation).height, 10);
  heightNavigation2 += 90;
	if (heightNavigation2>heightSection2){
		var res = heightWindow - heightNavigation2 - 70;
	}
	else{
		var res = heightWindow - heightSection2 - 70;
	}
	if (res>0){
		document.getElementById("footer").style.top=res+"px";
	}
	else{
		document.getElementById("footer").style.top=0;
	}
}

// lorsque le navigateur est redimensionné, vérifie la fonction disparaitre et la fonction gestion footer.
window.onresize=function(){
	disparaitre();
	gestionFooter();
}

// gestion des annonces de mailling.
function alerteMailling(){
	var i = 0;
	if (document.getElementsByClassName("close") != null){
		var tableauDesNotifs = document.getElementsByClassName("close");
		while (tableauDesNotifs[i] != undefined){
			i++;
		}
	}
	if (i>0){
		var p = document.getElementById("maillingAnnonceNum");
		p.innerHTML = i;
		p.className="apparaitre";
		var img =  document.getElementById("imgAlerte");
		img.className="apparaitre";
	}
	if(i==0){
		var p = document.getElementById("maillingAnnonceNum");
		p.className="disparaitre";
		var img =  document.getElementById("imgAlerte");
		img.className="disparaitre";
	}
}

function maillingAnnonce(){
	alerteMailling();
	document.getElementById("mailling").onclick=function(){
		alerteMailling();
	}
}

// gestion des notifications. (creations et suppression);
function supprimeurDeNotifications(){
		if (document.getElementById("notification") != null){
			document.getElementById("notification").onclick=function(){
				DELETE();
			}
		}
}

function DELETE(i){
	var element = document.getElementById("notification").parentNode;
	while (element.firstChild) {
  	element.removeChild(element.firstChild);
	}
	element.parentNode.removeChild(element);
	alerteMailling();
	supprimeurDeNotifications();
}

function createurDeNotifications(lvlAlerte, message){
	if (document.getElementById("notification") != null){
			DELETE();
	}
	var div = document.createElement('div');
	if (lvlAlerte == 1){
		div.className = "alert alert-success alert-dismissable fade in notification";
	}
	if (lvlAlerte == 2){
		div.className = "alert alert-info alert-dismissable fade in notification";
	}
	if (lvlAlerte == 3){
		div.className = "alert alert-warning  alert-dismissable fade in notification";
	}
	if (lvlAlerte == 4){
		div.className = "alert alert-danger alert-dismissable fade in notification";
	}
	var a = document.createElement('a');
	a.className = "close";
	a.datadismiss="alert";
	a.arialabel="close";
	a.innerHTML = "&times;";
	a.id = "notification";
	div.appendChild(a);

	var strong = document.createElement('strong');
	if (lvlAlerte == 1){
		strong.innerHTML = "Succès ! ";
	}
	if (lvlAlerte == 2){
		strong.innerHTML = "Info ! ";
	}
	if (lvlAlerte == 3){
		strong.innerHTML = "Attention ! ";
	}
	if (lvlAlerte == 4){
		strong.innerHTML = "Erreur ! ";
	}
	div.appendChild(strong);
	var span = document.createElement('span');
	span.innerHTML = message;
	div.appendChild(span);
	document.body.appendChild(div);

	supprimeurDeNotifications();
	alerteMailling();
}
