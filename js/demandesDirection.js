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
	document.getElementById("boutonVehicules1").className = "btn btn-primary mesBtns apparait";
	document.getElementById("boutonConges").className = "btn btn-primary mesBtns apparait";
	document.getElementById("boutonAttestations").className = "btn btn-primary mesBtns apparait";
	document.getElementById("boutonVehicules2").className = "btn btn-primary mesBtns apparait";
	document.getElementById("boutonDevis").className = "btn btn-primary mesBtns apparait lastElement";
	document.getElementById("boutonRetour").className = "btn btn-primary mesBtns disparait";
	document.getElementById("boutonVehicules1").onclick=function(){var pageModifiee = "vehicules1"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonConges").onclick=function(){ var pageModifiee = "conges"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonAttestations").onclick=function(){ var pageModifiee = "attestations"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonVehicules2").onclick=function(){ var pageModifiee = "vehicules2"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonDevis").onclick=function(){ var pageModifiee = "devis"; gestionnairePage2(pageModifiee);}
	while(document.getElementById("tableauDesDemandes1").firstChild) {
  	document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
	}
	while(document.getElementById("tableauDesDemandes2").firstChild) {
  	document.getElementById("tableauDesDemandes2").removeChild(document.getElementById("tableauDesDemandes2").firstChild);
	}
	document.getElementById("sousTitre1").innerHTML = "";
	document.getElementById("sousTitre2").innerHTML = "";
	document.getElementById("sousTitre1").className = "";
	document.getElementById("sousTitre2").className = "";
	document.getElementById("tableauDesDemandes1").className = "";
	document.getElementById("tableauDesDemandes2").className = "";
}

function gestionnairePage2(pageModifiee){
	document.getElementById("boutonVehicules1").className = "disparait";
	document.getElementById("boutonConges").className = "disparait";
	document.getElementById("boutonAttestations").className = "disparait";
	document.getElementById("boutonVehicules2").className = "disparait";
	document.getElementById("boutonDevis").className = "disparait";
	document.getElementById("boutonRetour").className = "btn btn-primary btn-lg";

	if(pageModifiee=="vehicules1"){
		document.getElementById("sousTitre1").innerHTML = "Demandes en cours : ";
		document.getElementById("sousTitre1").className = "sectionP";
		var table = document.getElementById("tableauDesDemandes1");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Nom et Prénom";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Type";
		tr.appendChild(th2);
		var th3 = document.createElement('th');
		th3.innerHTML = "Date de Début";
		tr.appendChild(th3);
		var th4 = document.createElement('th');
		th4.innerHTML = "Date de Fin";
		tr.appendChild(th4);
		var th5 = document.createElement('th');
		th5.innerHTML = "Action";
		tr.appendChild(th5);
		table.appendChild(tr);

		document.getElementById("sousTitre2").innerHTML = "Historique des demandes : ";
		document.getElementById("sousTitre2").className = "sectionP";
		var table = document.getElementById("tableauDesDemandes2");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Nom et Prénom";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Type";
		tr.appendChild(th2);
		var th3 = document.createElement('th');
		th3.innerHTML = "Date de Début";
		tr.appendChild(th3);
		var th4 = document.createElement('th');
		th4.innerHTML = "Date de Fin";
		tr.appendChild(th4);
		var th5 = document.createElement('th');
		th5.innerHTML = "Décision";
		tr.appendChild(th5);
		table.appendChild(tr);
	}
	
	if(pageModifiee=="conges"){
		document.getElementById("sousTitre1").innerHTML = "Demandes en cours : ";
		document.getElementById("sousTitre1").className = "sectionP";
		var table = document.getElementById("tableauDesDemandes1");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Nom et Prénom";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Type";
		tr.appendChild(th2);
		var th3 = document.createElement('th');
		th3.innerHTML = "Date de Début";
		tr.appendChild(th3);
		var th4 = document.createElement('th');
		th4.innerHTML = "Date de Fin";
		tr.appendChild(th4);
		var th5 = document.createElement('th');
		th5.innerHTML = "Action";
		tr.appendChild(th5);
		table.appendChild(tr);

		document.getElementById("sousTitre2").innerHTML = "Historique des demandes : ";
		document.getElementById("sousTitre2").className = "sectionP";
		var table = document.getElementById("tableauDesDemandes2");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Nom et Prénom";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Type";
		tr.appendChild(th2);
		var th3 = document.createElement('th');
		th3.innerHTML = "Date de Début";
		tr.appendChild(th3);
		var th4 = document.createElement('th');
		th4.innerHTML = "Date de Fin";
		tr.appendChild(th4);
		var th5 = document.createElement('th');
		th5.innerHTML = "Décision";
		tr.appendChild(th5);
		table.appendChild(tr);
	}

	if(pageModifiee=="attestations"){
		document.getElementById("sousTitre1").innerHTML = "Demandes en cours : ";
		document.getElementById("sousTitre1").className = "sectionP";
		var table = document.getElementById("tableauDesDemandes1");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Nom et Prénom";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Type";
		tr.appendChild(th2);
		var th3 = document.createElement('th');
		th3.innerHTML = "Date";
		tr.appendChild(th3);
		var th4 = document.createElement('th');
		th4.innerHTML = "Action";
		tr.appendChild(th4);
		table.appendChild(tr);

		document.getElementById("sousTitre2").innerHTML = "Historique des demandes : ";
		document.getElementById("sousTitre2").className = "sectionP";
		var table = document.getElementById("tableauDesDemandes2");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Nom et Prénom";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Type";
		tr.appendChild(th2);
		var th3 = document.createElement('th');
		th3.innerHTML = "Date";
		tr.appendChild(th3);
		var th4 = document.createElement('th');
		th4.innerHTML = "Décision";
		tr.appendChild(th4);
		table.appendChild(tr);
	}

	if(pageModifiee=="vehicules2"){
		document.getElementById("sousTitre1").innerHTML = "Vos véhicules : ";
		document.getElementById("sousTitre1").className = "sectionP";
		var table = document.getElementById("tableauDesDemandes1");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Type";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Immatriculation";
		tr.appendChild(th2);
		var th3 = document.createElement('th');
		th3.innerHTML = "Action";
		tr.appendChild(th3);
		table.appendChild(tr);
	}

	if(pageModifiee=="devis"){
		document.getElementById("sousTitre1").innerHTML = "Demandes en cours : ";
		document.getElementById("sousTitre1").className = "sectionP";
		var table = document.getElementById("tableauDesDemandes1");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Entreprise";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Nom et prénom";
		tr.appendChild(th2);
		var th3 = document.createElement('th');
		th3.innerHTML = "Détail";
		tr.appendChild(th3);
		var th4 = document.createElement('th');
		th4.innerHTML = "Pièce jointe";
		tr.appendChild(th4);
		var th5 = document.createElement('th');
		th5.innerHTML = "Action";
		tr.appendChild(th5);
		table.appendChild(tr);
	}

	document.getElementById("boutonRetour").onclick=function(){
		gestionnairePage();
	}
}

function createurDeLigne (element, action, num){
	var table = document.getElementById("tableauDesModifications1");
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
};
