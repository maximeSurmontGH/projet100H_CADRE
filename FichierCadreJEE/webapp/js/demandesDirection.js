// fonction pour gérer la ffichage des éléments de la page. (menu)
function gestionnairePage(){
	document.getElementById("boutonVehicules1").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonConges").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonAttestations").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonVehicules2").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonDevis").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonMotDePasse").className = "btn btn-primary mesBtns apparaitre lastElement";
	document.getElementById("boutonRetour").className = "btn btn-primary mesBtns disparaitre";
	document.getElementById("boutonVehicules1").onclick=function(){var pageModifiee = "vehicules1"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonConges").onclick=function(){ var pageModifiee = "conges"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonAttestations").onclick=function(){ var pageModifiee = "attestations"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonVehicules2").onclick=function(){ var pageModifiee = "vehicules2"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonDevis").onclick=function(){ var pageModifiee = "devis"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonMotDePasse").onclick=function(){ var pageModifiee = "motDePasse"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
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

// fonction pour gérer la ffichage des éléments de la page. (les différentes pages)
function gestionnairePage2(pageModifiee){
	document.getElementById("boutonVehicules1").className = "disparaitre";
	document.getElementById("boutonConges").className = "disparaitre";
	document.getElementById("boutonAttestations").className = "disparaitre";
	document.getElementById("boutonVehicules2").className = "disparaitre";
	document.getElementById("boutonDevis").className = "disparaitre";
	document.getElementById("boutonMotDePasse").className = "disparaitre";
	document.getElementById("boutonRetour").className = "btn btn-primary btn-lg";

	if(pageModifiee=="vehicules1"){
		document.getElementById("sousTitre1").innerHTML = "Demandes en cours : ";
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

		createurDeLigneVC("SURMONT Maxime", "Camionnette 2", "13/05/17", "15/05/17", "actuel", "1");
		createurDeLigneVC("SURMONT Maxime", "Camionnette 2", "13/05/17", "15/05/17", "refus", "2");
		createurDeLigneVC("SURMONT Maxime", "Camionnette 2", "13/05/17", "15/05/17", "succes", "3");
	}

	if(pageModifiee=="conges"){
		document.getElementById("sousTitre1").innerHTML = "Demandes en cours : ";
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

		createurDeLigneVC("SURMONT Maxime", "Congé maternité", "13/05/17", "15/05/17", "actuel", "1");
		createurDeLigneVC("SURMONT Maxime", "Congé payé", "13/05/17", "15/05/17", "refus", "2");
		createurDeLigneVC("SURMONT Maxime", "Congé payé", "13/05/17", "15/05/17", "succes", "3");
	}

	if(pageModifiee=="attestations"){
		document.getElementById("sousTitre1").innerHTML = "Demandes en cours : ";
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

		createurDeLigneA("SURMONT Maxime", "Attestation1", "", "actuel", "1");
		createurDeLigneA("SURMONT Maxime", "Attestation1", "", "refus", "2");
		createurDeLigneA("SURMONT Maxime", "Attestation2", "15/05/17", "succes", "3");
	}

	if(pageModifiee=="vehicules2"){
		document.getElementById("sousTitre1").innerHTML = "Vos véhicules : ";
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
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var input1 = document.createElement('input');
		input1.type="text";
		input1.className = "form-control";
		td1.appendChild(input1);
		var td2 = document.createElement('td');
		var input2 = document.createElement('input');
		input2.type="text";
		input2.className = "form-control";
		td2.appendChild(input2);
		var td3 = document.createElement('td');
		td3.className="colonneFine";
		var a = document.createElement('a');
		a.href="#";
		var span = document.createElement('span');
		span.className=" glyphicon glyphicon-plus";
		a.appendChild(span);
		td3.appendChild(a);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);

		createurDeLigneV("Utilitaire 1", "535 BGC 59");
		createurDeLigneV("Voiture commerciale 1", "397 ADD 59");
		createurDeLigneV("Voiture commerciale 2", "048 SOA 59");
		createurDeLigneV("Voiture commerciale 2", "162 NXI 59");
		createurDeLigneV("Voiture touristique 1", "110 BKQ 59");
		createurDeLigneV("Utilitaire 2", "610 MP 59");
	}

	if(pageModifiee=="devis"){
		document.getElementById("sousTitre1").innerHTML = "Demandes en cours : ";
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

		createurDeLigneD("OVH","SURMONT Maxime");
	}

	if(pageModifiee=="motDePasse"){
		document.getElementById("sousTitre1").innerHTML = "Vos comptes employés : ";
		var table = document.getElementById("tableauDesDemandes1");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Nom";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Prénom";
		tr.appendChild(th2);
		var th3 = document.createElement('th');
		th3.innerHTML = "Identifiant";
		tr.appendChild(th3);
		var th4 = document.createElement('th');
		th4.innerHTML = "Mot de passe";
		tr.appendChild(th4);
		var th5 = document.createElement('th');
		th5.innerHTML = "Action";
		tr.appendChild(th5);
		table.appendChild(tr);
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var input1 = document.createElement('input');
		input1.type="text";
		input1.className = "form-control";
		td1.appendChild(input1);
		var td2 = document.createElement('td');
		var input2 = document.createElement('input');
		input2.type="text";
		input2.className = "form-control";
		td2.appendChild(input2);
		var td3 = document.createElement('td');
		var input3 = document.createElement('input');
		input3.type="text";
		input3.className = "form-control";
		td3.appendChild(input3);
		var td4 = document.createElement('td');
		var input4 = document.createElement('input');
		input4.type="text";
		input4.className = "form-control";
		td4.appendChild(input4);
		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var a = document.createElement('a');
		a.href="#";
		var span = document.createElement('span');
		span.className=" glyphicon glyphicon-plus";
		a.appendChild(span);
		td5.appendChild(a);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		table.appendChild(tr);

		createurDeLigneMdP("SURMONT", "Maxime", "C30291", "kegkmex9");
	}

	document.getElementById("boutonRetour").onclick=function(){
		gestionnairePage();
		disparaitre();
		gestionFooter();
	}
}

// createur de ligne des tableaux véhicules (demandes de pret) et congés
function createurDeLigneVC(nom, type, dateD, dateF, genre, num){
	if (genre=="actuel"){
		var table = document.getElementById("tableauDesDemandes1");

		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var a1 = document.createElement('a');
		a1.href="#";
		a1.id="a1"+num;
		var span1 = document.createElement('span');
		span1.className=" glyphicon glyphicon-ok spanSpe";
		a1.appendChild(span1);
		td5.appendChild(a1);
		var a2 = document.createElement('a');
		a2.href="#";
		a2.id="a2"+num;
		var span2 = document.createElement('span');
		span2.className=" glyphicon glyphicon-remove spanSpe";
		a2.appendChild(span2);
		td5.appendChild(a2);
	}

	if (genre=="refus"){
		var table = document.getElementById("tableauDesDemandes2");

		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var span = document.createElement('span');
		span.id="span"+num;
		span.className="glyphicon glyphicon-remove";
		td5.appendChild(span);
	}

	if (genre=="succes"){
		var table = document.getElementById("tableauDesDemandes2");

		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var span = document.createElement('span');
		span.id="span"+num;
		span.className="glyphicon glyphicon-ok";
		td5.appendChild(span);
	}

	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = nom;
	var td2 = document.createElement('td');
	td2.innerHTML = type;
	var td3 = document.createElement('td');
	td3.innerHTML = dateD;
	var td4 = document.createElement('td');
	td4.innerHTML = dateF;
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	table.appendChild(tr);
}

// createur de ligne du tableau attestation
function createurDeLigneA(nom, type, date, genre, num){
	if (genre=="actuel"){
		var table = document.getElementById("tableauDesDemandes1");

		var td3 = document.createElement('td');
		var sel1_1 = document.createElement('select');
		sel1_1.id = "Jours";
		var sel2_1 = document.createElement('select');
		sel2_1.id = "Mois";
		var sel3_1 = document.createElement('select');
		sel3_1.id = "Annees";
		td3.appendChild(sel1_1);
		td3.appendChild(sel2_1);
		td3.appendChild(sel3_1);

		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var a1 = document.createElement('a');
		a1.href="#";
		a1.id="a1"+num;
		var span1 = document.createElement('span');
		span1.className=" glyphicon glyphicon-ok spanSpe";
		a1.appendChild(span1);
		td5.appendChild(a1);
		var a2 = document.createElement('a');
		a2.href="#";
		a2.id="a2"+num;
		var span2 = document.createElement('span');
		span2.className=" glyphicon glyphicon-remove spanSpe";
		a2.appendChild(span2);
		td5.appendChild(a2);
	}

	if (genre=="refus"){
		var table = document.getElementById("tableauDesDemandes2");

		var td3 = document.createElement('td');
		td3.innerHTML = date;
		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var span = document.createElement('span');
		span.id="span"+num;
		span.className="glyphicon glyphicon-remove";
		td5.appendChild(span);
	}

	if (genre=="succes"){
		var table = document.getElementById("tableauDesDemandes2");

		var td3 = document.createElement('td');
		td3.innerHTML = date;
		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var span = document.createElement('span');
		span.id="span"+num;
		span.className="glyphicon glyphicon-ok";
		td5.appendChild(span);
	}

	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = nom;
	var td2 = document.createElement('td');
	td2.innerHTML = type;

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td5);
	table.appendChild(tr);
	remplissageJMA();
}

function remplissageJMA(){
	var sel1_1 = document.getElementById('Jours');
	for(var i = 1; i<32; i++){
		var J = document.createElement('option');
		J.innerHTML=i;
		sel1_1.appendChild(J);
	}
	var sel2_1 = document.getElementById('Mois');
	var M = document.createElement('option'); M.innerHTML="janvier"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="février"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="mars"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="avril"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="mai"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="juin"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="juillet"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="aout"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="septembre"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="octobre"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="novembre"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="decembre"; sel2_1.appendChild(M);
	var sel3_1 = document.getElementById('Annees');
	for(var i = 2030; i>2000; i--){
		var A = document.createElement('option');
		A.innerHTML=i;
		sel3_1.appendChild(A);
	}
}

// createur de ligne du tableau vehicules(gestion des véhicules de la boite)
function createurDeLigneV(nom, immatriculation){
	var table = document.getElementById("tableauDesDemandes1");
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = nom;
	var td2 = document.createElement('td');
	td2.innerHTML = immatriculation;
	var td3 = document.createElement('td');
	td3.className="colonneFine";
	var a = document.createElement('a');
	a.href="#";
	var span = document.createElement('span');
	span.className=" glyphicon glyphicon-minus";
	a.appendChild(span);
	td3.appendChild(a);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	table.appendChild(tr);
}

// createur de ligne du tableau devis
function createurDeLigneD(entreprise, nom){
	var table = document.getElementById("tableauDesDemandes1");
	table.className = "table";
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = entreprise;
	tr.appendChild(td1);
	var td2 = document.createElement('td');
	td2.innerHTML = nom;
	tr.appendChild(td2);
	var td3 = document.createElement('td');
	td3.className="colonneFine";
	var a = document.createElement('a');
	a.href="#";
	var span = document.createElement('span');
	span.className=" glyphicon glyphicon-pencil";
	a.appendChild(span);
	td3.appendChild(a);
	tr.appendChild(td3);
	var td4 = document.createElement('td');
	td4.className="colonneFine";
	var a = document.createElement('a');
	a.href="#";
	var span = document.createElement('span');
	span.className=" glyphicon glyphicon-new-window";
	a.appendChild(span);
	td4.appendChild(a);
	tr.appendChild(td4);
	var td5 = document.createElement('td');
	td5.className="colonneFine";
	var a = document.createElement('a');
	a.href="#";
	var span = document.createElement('span');
	span.className=" glyphicon glyphicon-minus";
	a.appendChild(span);
	td5.appendChild(a);
	tr.appendChild(td5);
	table.appendChild(tr);
}

// createur de ligne du tableau de gestion des mots de passe
function createurDeLigneMdP(nom, prenom, identifiant, mdp){
	var table = document.getElementById("tableauDesDemandes1");
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = nom;
	var td2 = document.createElement('td');
	td2.innerHTML = prenom;
	var td3 = document.createElement('td');
	td3.innerHTML = identifiant;
	var td4 = document.createElement('td');
	td4.innerHTML = mdp;
	var td5 = document.createElement('td');
	td5.className="colonneFine";
	var a = document.createElement('a');
	a.href="#";
	var span = document.createElement('span');
	span.className="glyphicon glyphicon-remove";
	a.appendChild(span);
	td5.appendChild(a);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	table.appendChild(tr);
}

window.onload = function(){
	gestionnaireDeMenu(4);
	maillingAnnonce();
	supprimeurDeNotifications();
	gestionnairePage();
	disparaitre();
	gestionFooter();
};
