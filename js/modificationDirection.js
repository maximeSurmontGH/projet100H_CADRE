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
	gestionnairePage(0);
};
