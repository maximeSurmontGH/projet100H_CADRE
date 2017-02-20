function disparaitre(){
	if (window.matchMedia("(max-width: 650px)").matches){
		document.getElementById("navigation").className="disparaitreAlerte";
		document.getElementById("iconeMenu").className="iconeMenu glyphicon glyphicon-th";
		document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
		ouvrirPetitMenu();
	}
}

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
		document.getElementById("navigation").parentNode.className="disparaitreAlerte";
	}
}

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

window.onresize=function(){
	if (window.matchMedia("(max-width: 650px)").matches){
		document.getElementById("navigation").parentNode.className="disparaitreAlerte";
		document.getElementById("navigation").className="disparaitreAlerte";
		document.getElementById("iconeMenu").className="iconeMenu glyphicon glyphicon-th";
		document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
		ouvrirPetitMenu();
	}
	else{
		document.getElementById("navigation").style.left=0;
		document.getElementById("navigation").className="col-lg-3 col-md-3 col-sm-3 col-xs-3";
		document.getElementById("section").className="col-lg-8 col-md-8 col-sm-8 col-xs-8";
		document.getElementById("iconeMenu").className="disparaitreAlerte";
		document.getElementById("navigation").parentNode.className="";
	}
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

function maillingAnnonce(){
	document.getElementById("mailling").onclick=function(){
		var p = document.getElementById("maillingAnnonceNum");
		var img =  document.getElementById("imgAlerte");
		p.className="disparaitreAlerte";
		img.className="disparaitreAlerte";
		}
}

function suppressionNotification(){
	document.getElementById("notification").onclick=function(){
		document.getElementById("notification").className='disparaitreAlerte';
	}
}

function gestionnairePage(){
	document.getElementById("boutonAccueil").className = "btn btn-primary mesBtns apparait";
	document.getElementById("boutonEntreprise").className = "btn btn-primary mesBtns apparait";
	document.getElementById("boutonPrestations").className = "btn btn-primary mesBtns apparait";
	document.getElementById("boutonContact").className = "btn btn-primary mesBtns apparait";
	document.getElementById("boutonRetour").className = "btn btn-primary mesBtns disparait";
	document.getElementById("boutonAccueil").onclick=function(){var pageModifiee = "acceuil"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonEntreprise").onclick=function(){ var pageModifiee = "entreprise"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonPrestations").onclick=function(){ var pageModifiee = "prestations"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonContact").onclick=function(){ var pageModifiee = "contact"; gestionnairePage2(pageModifiee);}
	while(document.getElementById("tableauDesModifications").firstChild) {
  	document.getElementById("tableauDesModifications").removeChild(document.getElementById("tableauDesModifications").firstChild);
	}
}

function gestionnairePage2(pageModifiee){
	document.getElementById("boutonAccueil").className = "disparait";
	document.getElementById("boutonEntreprise").className = "disparait";
	document.getElementById("boutonPrestations").className = "disparait";
	document.getElementById("boutonContact").className = "disparait";
	document.getElementById("boutonRetour").className = "btn btn-primary btn-lg";

	var table = document.getElementById("tableauDesModifications");
	var tr = document.createElement('tr');
	var th1 = document.createElement('th');
	th1.innerHTML = "Element de la page";
	tr.appendChild(th1);
	var th2 = document.createElement('th');
	th2.innerHTML = "Action";
	tr.appendChild(th2);
	var th3 = document.createElement('th');
	th3.innerHTML = "Envoit";
	tr.appendChild(th3);
	table.appendChild(tr);

	if(pageModifiee=="acceuil"){
		createurDeLigne ("Logo de l'entreprise", "photo", "1");
		createurDeLigne ("Slogan de l'entreprise", "message", "2");
		createurDeLigne ("Photo de l'entreprise", "photo", "3");
		createurDeLigne ("Texte de présentation", "message", "4");
	}
	if(pageModifiee=="entreprise"){
		createurDeLigne ("Photo de l'entreprise", "photo", "1");
		createurDeLigne ("Bref historique de l'entreprise", "message", "2");
		createurDeLigne ("Paragraphe 'CADRE ET EDF'", "message", "3");
		createurDeLigne ("Photo de l'équipe de PENLY", "photo", "4");
		createurDeLigne ("Photo de l'équipe de PALUEL", "photo", "5");
	}
	if(pageModifiee=="prestations"){
		createurDeLigne ("Photo de la réalisation 1", "photo", "1");
		createurDeLigne ("Texte de la réalisation 1 (format nom//description)", "message", "2");
		createurDeLigne ("Photo de la réalisation 2", "photo", "3");
		createurDeLigne ("Texte de la réalisation 2 (format nom//description)", "message", "4");
		createurDeLigne ("Photo de la réalisation 3", "photo", "5");
		createurDeLigne ("Texte de la réalisation 3 (format nom//description)", "message", "6");

		createurDeLigne ("Texte du paragraphe 'FABRICATION'", "message", "7");
		createurDeLigne ("Texte du paragraphe 'INSTALLATION ET MODIFICATION'", "message", "8");
		createurDeLigne ("Texte du paragraphe 'ENTRETIEN, MAINTENANCE ET CONTROLE'", "message", "9");
	}
	if(pageModifiee=="contact"){
		createurDeLigne ("Photo du paragraphe 'NOUS TROUVER'", "photo", "1");
		createurDeLigne ("Texte du paragraphe 'NOS CONTACTS'", "message", "2");
	}

	document.getElementById("boutonRetour").onclick=function(){
		gestionnairePage();
	}
	for (var i = 1; i < 10; i++) {
		document.getElementById("a"+i).onclick=function(){
			document.getElementById("notification").className='alert alert-success alert-dismissable fade in notification apparaitreAlerte';
		}
	}
}

function createurDeLigne (element, action, num){
	var table = document.getElementById("tableauDesModifications");
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = element;
	tr.appendChild(td1);
	var td2 = document.createElement('td');
	td2.className="colonneLarge";
	if (action=="message"){
		var textarea = document.createElement('textarea');
		textarea.className="inputTextarea form-control";
		textarea.id="input"+num;
		td2.appendChild(textarea);
	}
	else if (action=="photo"){
		var input = document.createElement('input');
		input.type="file";
		input.id="input"+num;
		td2.appendChild(input);
	}
	tr.appendChild(td2);
	var td3 = document.createElement('td');
	td3.className="colonneFine";
	var a = document.createElement('a');
	a.href="#";
	a.id="a"+num;
	var span = document.createElement('span');
	span.className=" glyphicon glyphicon-new-window";
	a.appendChild(span);
	td3.appendChild(a);
	tr.appendChild(td3);
	table.appendChild(tr);
}

//fct verification jpg png

window.onload = function(){
	maillingAnnonce();
	suppressionNotification();
	gestionnairePage();
	disparaitre();
	gestionFooter();
};
