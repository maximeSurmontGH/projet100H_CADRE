// fonction pour gérer la ffichage des éléments de la page. (menu)
function gestionnairePage(){
	document.getElementById("boutonVehicules1").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonConges").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonAttestations").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonVehicules2").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonDevis").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonEvenements").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonRetour").className = "btn btn-primary mesBtns disparaitre";
	document.getElementById("boutonVehicules1").onclick=function(){var pageModifiee = "vehicules1"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonConges").onclick=function(){ var pageModifiee = "conges"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonAttestations").onclick=function(){ var pageModifiee = "attestations"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonVehicules2").onclick=function(){ var pageModifiee = "vehicules2"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonDevis").onclick=function(){ var pageModifiee = "devis"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
	document.getElementById("boutonEvenements").onclick=function(){ var pageModifiee = "evenements"; gestionnairePage2(pageModifiee); disparaitre(); gestionFooter();}
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
	document.getElementById("boutonEvenements").className = "disparaitre";
	document.getElementById("boutonRetour").className = "btn btn-primary btn-lg";

	if(pageModifiee=="vehicules1"){
		document.getElementById("sousTitre1").innerHTML = "Demandes en cours : ";
		var table = document.getElementById("tableauDesDemandes1");
		table.className = "table";
		var tr = document.createElement('tr');
		tr.id="trRacine1";
		var th1 = document.createElement('th');
		th1.innerHTML = "Prénom.Nom";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Immatriculation";
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
		tr.id="trRacine2";
		var th1 = document.createElement('th');
		th1.innerHTML = "Prénom.Nom";
		tr.appendChild(th1);
		var th2 = document.createElement('th');
		th2.innerHTML = "Immatriculation";
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
		
		getHistoriqueVehicule();
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
		
		getHistoriqueConge();
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
		
		getHistoriqueAttestion();
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
		input1.id="nom";
		td1.appendChild(input1);
		var td2 = document.createElement('td');
		var input2 = document.createElement('input');
		input2.type="text";
		input2.className = "form-control";
		input2.id="imma";
		td2.appendChild(input2);
		var td3 = document.createElement('td');
		td3.className="colonneFine";
		var a = document.createElement('a');
		a.href="#";
		var span = document.createElement('span');
		span.className=" glyphicon glyphicon-plus";
		span.id="ajoutVehicule";
		a.appendChild(span);
		td3.appendChild(a);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
		
		document.getElementById("ajoutVehicule").onclick=function(){
			
			var nom = document.getElementById("nom").value;
			var imma = document.getElementById("imma").value;
			var requetePostReponse = new XMLHttpRequest();
			requetePostReponse.open("POST","../cadrews/vehicules/addVehicule");
			requetePostReponse.responseType = "text";
			requetePostReponse.onload = function(){
				
			}
			requetePostReponse.error = function(){
				console.error("Erreur de requete AJAX de l'ajout du rappel : "+error);
			}
			
			requetePostReponse.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requetePostReponse.send("immatriculation="+imma+"&typeVehicule="+nom);
			
			while(document.getElementById("tableauDesDemandes1").firstChild){
				document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
			}
			gestionnairePage2("vehicules2");
		}
			
		getVehicules();
		
		
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
		var th5 = document.createElement('th');
		th5.innerHTML = "Action";
		tr.appendChild(th5);
		table.appendChild(tr);

		getDevis();
	}

	if(pageModifiee=="evenements"){
		document.getElementById("sousTitre1").innerHTML = "Créez et gérez vos rappels pour tous vos employés: ";
		var table = document.getElementById("tableauDesDemandes1");
		table.className = "table";
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		th1.innerHTML = "Contenu";
		tr.appendChild(th1);
		var th1_bis = document.createElement('th');
		th1_bis.innerHTML = "Employé";
		tr.appendChild(th1_bis);
		var th2 = document.createElement('th');
		th2.innerHTML = "Date";
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
		input1.id="msgRappel";
		td1.appendChild(input1);
		
		var td1_bis = document.createElement('td');
		var sel1_bis = document.createElement('select');
		sel1_bis.id="pourFairePlaisirAChloe";
		
		var opt = document.createElement('option');
		opt.innerText="tous les employés";
		sel1_bis.appendChild(opt);
		
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/employes/listIdEmploye",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			for (var i=0; i<this.response.length; i++){
				var opt = document.createElement('option');
				opt.innerText=this.response[i].idEmploye;
				sel1_bis.appendChild(opt);			}
		}
		getList2.send();
		
		td1_bis.appendChild(sel1_bis);
		
		var td2 = document.createElement('td');
		var sel1_1 = document.createElement('select');
		sel1_1.id = "Jours";
		var sel2_1 = document.createElement('select');
		sel2_1.id = "Mois";
		var sel3_1 = document.createElement('select');
		sel3_1.id = "Annees";
		td2.appendChild(sel1_1);
		td2.appendChild(sel2_1);
		td2.appendChild(sel3_1);
		td2.className="tdDate";
		var td3 = document.createElement('td');
		td3.className="colonneFine";
		var a = document.createElement('a');
		a.href="#";
		var span = document.createElement('span');
		span.className=" glyphicon glyphicon-plus";
		span.id="ajoutRappel";
		a.appendChild(span);
		td3.appendChild(a);
		tr.appendChild(td1);
		tr.appendChild(td1_bis);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
		remplissageJMA();

		getHistoriqueRappels();
		
		document.getElementById("ajoutRappel").onclick=function(){
			var msg = document.getElementById("msgRappel").value;
			var imprt = "";
			var bool = "0";
			while (bool!="1"){
				imprt = prompt('Quel est la nature du message? 1 = important, 2 = informatif, 3 = sympathique',"");
				if(imprt=="1" || imprt=="2" || imprt=="3"){
					bool = 1;
				}
			}
			
			var date ="";
			var select = document.getElementById("Jours");
			var choice = select.selectedIndex;
			var jour = select.options[choice].value;
			
			var select2 = document.getElementById("Mois");
			var choice2 = select2.selectedIndex;
			var mois = select2.options[choice2].value;
			if(mois=="Janvier"){mois=1}
			else if(mois=="Fevrier"){mois=2}
			else if(mois=="Mars"){mois=3}
			else if(mois=="Avril"){mois=4}
			else if(mois=="Mai"){mois=5}
			else if(mois=="Juin"){mois=6}
			else if(mois=="Juillet"){mois=7}
			else if(mois=="Aout"){mois=8}
			else if(mois=="Septembre"){mois=9}
			else if(mois=="Octobtre"){mois=10}
			else if(mois=="Novembre"){mois=11}
			else if(mois=="Decembre"){mois=12}
			
			var select3 = document.getElementById("Annees");
			var choice3 = select3.selectedIndex;
			var annee = select3.options[choice3].value;
			
			date = jour+mois+annee;
			
			var select4 = document.getElementById("pourFairePlaisirAChloe");
			var choice4 = select4.selectedIndex;
			var employe = select4.options[choice4].value;
			
			if(employe=="tous les employés"){
				var getList2 = new XMLHttpRequest();
				getList2.open("GET","../cadrews/employes/listIdEmploye",true, null, null);
				getList2.responseType="json";
				getList2.onload=function(){
					for (var i=0; i<this.response.length; i++){
						addRappel(date, msg, this.response[i].idEmploye, parseInt(imprt));
						
					}
				}
				getList2.send();
			}
			else{
				addRappel(date, msg, employe, parseInt(imprt));
			}
			
			document.getElementById("msgRappel").value="";
			while(document.getElementById("tableauDesDemandes1").firstChild){
				document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
			}
			gestionnairePage2("evenements");
		}
	}

	document.getElementById("boutonRetour").onclick=function(){
		gestionnairePage();
		disparaitre();
		gestionFooter();
	}
}

// pour remplir les selects jour mois année
function remplissageJMA(){
	var selectJ = document.getElementById("Jours");
	for (var i=1; i<10; i++){
		var optn = document.createElement('option');
		optn.innerText = [0]+i;
		selectJ.appendChild(optn);
	}
	for (var i=10; i<32; i++){
		var optn = document.createElement('option');
		optn.innerText = i;
		selectJ.appendChild(optn);
	}
	var selectM = document.getElementById("Mois");
	var optn = document.createElement('option');
	optn.innerText = "Janvier";
	selectM.appendChild(optn);
	var optn2 = document.createElement('option');
	optn2.innerText = "Fevrier";
	selectM.appendChild(optn2);
	var optn3 = document.createElement('option');
	optn3.innerText = "Mars";
	selectM.appendChild(optn3);
	var optn4 = document.createElement('option');
	optn4.innerText = "Avril";
	selectM.appendChild(optn4);
	var optn5 = document.createElement('option');
	optn5.innerText = "Mai";
	selectM.appendChild(optn5);
	var optn6 = document.createElement('option');
	optn6.innerText = "Juin";
	selectM.appendChild(optn6);
	var optn7 = document.createElement('option');
	optn7.innerText = "Juillet";
	selectM.appendChild(optn7);
	var optn8 = document.createElement('option');
	optn8.innerText = "Août";
	selectM.appendChild(optn8);
	var optn9 = document.createElement('option');
	optn9.innerText = "Septembre";
	selectM.appendChild(optn9);
	var optn10 = document.createElement('option');
	optn10.innerText = "Octobre";
	selectM.appendChild(optn10);
	var optn11 = document.createElement('option');
	optn11.innerText = "Novembre";
	selectM.appendChild(optn11);
	var optn12 = document.createElement('option');
	optn12.innerText = "Decembre";
	selectM.appendChild(optn12);
	var selectA = document.getElementById("Annees");
	for (var i=2017; i<2025; i++){
		var optn = document.createElement('option');
		optn.innerText = i;
		selectA.appendChild(optn);
	}
}

// createur de ligne des tableaux véhicules (demandes de pret) et congés
function createurDeLigneVC(nom, type, dateD, dateF, genre, num){
	if (genre=="attente"){
		var table = document.getElementById("tableauDesDemandes1");

		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var a1 = document.createElement('a');
		a1.href="#";
		a1.className="boutonValide";
		a1.id="a1"+num;
		var span1 = document.createElement('span');
		span1.className=" glyphicon glyphicon-ok spanSpe";
		a1.appendChild(span1);
		td5.appendChild(a1);
		var a2 = document.createElement('a');
		a2.href="#";
		a2.className="boutonRefuse";
		a2.id="a2"+num;
		var span2 = document.createElement('span');
		span2.className=" glyphicon glyphicon-remove spanSpe";
		a2.appendChild(span2);
		td5.appendChild(a2);
	}

	if (genre=="refuse"){
		var table = document.getElementById("tableauDesDemandes2");

		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var span = document.createElement('span');
		span.id="span"+num;
		span.className="glyphicon glyphicon-remove";
		td5.appendChild(span);
	}

	if (genre=="valide"){
		var table = document.getElementById("tableauDesDemandes2");

		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var span = document.createElement('span');
		span.id="span"+num;
		span.className="glyphicon glyphicon-ok";
		td5.appendChild(span);
	}

	var tr = document.createElement('tr');
	tr.id="tr"+num;
	var td1 = document.createElement('td');
	td1.id="ID"+num;
	td1.innerHTML = nom;
	var td2 = document.createElement('td');
	td2.innerHTML = type;
	var td3 = document.createElement('td');
	td3.innerHTML = dateD;
	var td4 = document.createElement('td');
	td4.innerHTML = dateF;
	td4.id="DATE"+num;
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	table.appendChild(tr);
	
	
	if(type=="Maternité" || type=="RTT" || type=="Non Payé" || type=="Payé"){
		updateDemandeConge();
	}
	else{
		updateDemandeVehicule();
	}
}

// createur de ligne du tableau attestation
function createurDeLigneA(nom, type, date, genre, num){
	if (genre=="attente"){
		var table = document.getElementById("tableauDesDemandes1");

		var td5 = document.createElement('td');
		td5.className="colonneFine";
		var a1 = document.createElement('a');
		a1.href="#";
		a1.className="boutonValide";
		a1.id="a1"+num;
		var span1 = document.createElement('span');
		span1.className=" glyphicon glyphicon-ok spanSpe";
		a1.appendChild(span1);
		td5.appendChild(a1);
		var a2 = document.createElement('a');
		a2.href="#";
		a2.className="boutonRefuse";
		a2.id="a2"+num;
		var span2 = document.createElement('span');
		span2.className=" glyphicon glyphicon-remove spanSpe";
		a2.appendChild(span2);
		td5.appendChild(a2);
	}

	if (genre=="refuse"){
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

	if (genre=="valide"){
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
	td1.id="ID"+num;
	tr.appendChild(td2);
	var td3 = document.createElement('td');
	td3.innerHTML = date;
	td3.id="DATE"+num;
	tr.appendChild(td3);
	tr.appendChild(td5);
	table.appendChild(tr);
	
	updateDemandeAttestation();
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
	span.className=" glyphicon glyphicon-minus boutonDelete";
	span.id="a1"+immatriculation;
	a.appendChild(span);
	td3.appendChild(a);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	table.appendChild(tr);
	
	deleteVehicule();
}

// createur de ligne du tableau devis
function createurDeLigneD(entreprise, nom, num){
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
	span.className="glyphicon glyphicon-pencil boutonDetails";
	span.id="a1"+num;
	a.appendChild(span);
	td3.appendChild(a);
	tr.appendChild(td3);
	var td5 = document.createElement('td');
	td5.className="colonneFine";
	var a = document.createElement('a');
	a.href="#";
	var span = document.createElement('span');
	span.className=" glyphicon glyphicon-remove boutonDelete";
	span.id="a2"+num;
	a.appendChild(span);
	td5.appendChild(a);
	tr.appendChild(td5);
	table.appendChild(tr);
	
	deleteDevis();
	detailDevis();
}

// createur de ligne du tableau événement
function createurDeLigneE(message, employe, date, num){
	var table = document.getElementById("tableauDesDemandes1");
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = message;
	var td1_bis = document.createElement('td');
	td1_bis.innerHTML = employe;
	var td2 = document.createElement('td');
	td2.innerHTML = date;
	var td3 = document.createElement('td');
	td3.className="colonneFine";
	var a = document.createElement('a');
	a.href="#";
	a.id="a1"+num;
	a.className="boutonDelete";
	var span = document.createElement('span');
	span.className=" glyphicon glyphicon-minus";
	a.appendChild(span);
	td3.appendChild(a);
	tr.appendChild(td1);
	tr.appendChild(td1_bis);
	tr.appendChild(td2);
	tr.appendChild(td3);
	table.appendChild(tr);
	
	deleteRappel();
}

// Creation d un rappel
function addRappel(date, msg, employe, imprt){
	var requetePostReponse = new XMLHttpRequest();
	requetePostReponse.open("POST","../cadrews/rappels/addRappel");
	requetePostReponse.responseType = "text";
	requetePostReponse.onload = function(){
		
	}
	requetePostReponse.error = function(){
		console.error("Erreur de requete AJAX de l'ajout du rappel : "+error);
	}
	
	requetePostReponse.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	requetePostReponse.send("dateRappel="+date+"&messageRappel="+msg+"&employes_idEmploye="+employe+"&imprt="+imprt);
}

// recuperation des demandes véhicule
function getHistoriqueVehicule(){
	var getList = new XMLHttpRequest();
	getList.open("GET","../cadrews/vehicules/listDemandesDeVehicule",true, null, null);
	getList.responseType="json";
	getList.onload=function(){
		for (var i=0; i<this.response.length; i++){
			var dateD=this.response[i].dateDebut[0]+this.response[i].dateDebut[1]+"/"+this.response[i].dateDebut[2]+this.response[i].dateDebut[3]+"/"+this.response[i].dateDebut[4]+this.response[i].dateDebut[5]+this.response[i].dateDebut[6]+this.response[i].dateDebut[7];
			var dateF=this.response[i].dateFin[0]+this.response[i].dateFin[1]+"/"+this.response[i].dateFin[2]+this.response[i].dateFin[3]+"/"+this.response[i].dateFin[4]+this.response[i].dateFin[5]+this.response[i].dateFin[6]+this.response[i].dateFin[7];
			createurDeLigneVC(this.response[i].employes_idEmploye, this.response[i].vehicules_immatriculation, dateD, dateF, this.response[i].etat, this.response[i].id);
			if(parseInt(this.response[i].dateFin[4]+this.response[i].dateFin[5]+this.response[i].dateFin[6]+this.response[i].dateFin[7])-2017>1){
				deleteHistoriqueVehicule(this.response[i].vehicules_immatriculation);
			}
		}
	}
	getList.send();
}

// pour supprimer les trop vieille demandes
function deleteHistoriqueVehicule(imma){
	var deleteElmt = new XMLHttpRequest();
	deleteElmt.open("DELETE","../cadrews/vehicules/delete/"+imma);
	deleteElmt.responseType = "json";
	deleteElmt.onload = function(){
	};
	deleteElmt.error=function(error){
		console.error("Erreur de requete ajax dde suppression de vieille demande de vehicule : "+error);
	};
	deleteElmt.send();
}

// validation ou refus d'une demande de vehicules
function updateDemandeVehicule(){
	var lstBoutonValide = document.getElementsByClassName("boutonValide");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			var requeteUpdate = new XMLHttpRequest();
			requeteUpdate.open("PUT","../cadrews/vehicules/update");
			requeteUpdate.responseType = "json";
			requeteUpdate.onload = function(){
				while(document.getElementById("tableauDesDemandes1").firstChild){
					document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
				}
				while(document.getElementById("tableauDesDemandes2").firstChild){
					document.getElementById("tableauDesDemandes2").removeChild(document.getElementById("tableauDesDemandes2").firstChild);
				}				
				gestionnairePage2("vehicules1");
			};
			requeteUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requeteUpdate.send("id="+idNum+"&nb="+1);
			
			var date =document.getElementById("DATE"+idNum).innerHTML;
			date=date[0]+date[1]+date[3]+date[4]+date[6]+date[7]+date[8]+date[9];
			addRappel(date, "N'oubliez pas de faire le plein !", document.getElementById("ID"+idNum).innerHTML, 2);
		}
		i++;
	}
	
	var lstBoutonValide = document.getElementsByClassName("boutonRefuse");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			var requeteUpdate = new XMLHttpRequest();
			requeteUpdate.open("PUT","../cadrews/vehicules/update");
			requeteUpdate.responseType = "json";
			requeteUpdate.onload = function(){
				while(document.getElementById("tableauDesDemandes1").firstChild){
					document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
				}
				while(document.getElementById("tableauDesDemandes2").firstChild){
					document.getElementById("tableauDesDemandes2").removeChild(document.getElementById("tableauDesDemandes2").firstChild);
				}				
				gestionnairePage2("vehicules1");
			};
			requeteUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requeteUpdate.send("id="+idNum+"&nb="+2);
		}
		i++;
	}
}

//recuperation des demandes de conges
function getHistoriqueConge(){
	var getList = new XMLHttpRequest();
	getList.open("GET","../cadrews/conges/listConges",true, null, null);
	getList.responseType="json";
	getList.onload=function(){
		for (var i=0; i<this.response.length; i++){
			var dateD=this.response[i].dateDebut[0]+this.response[i].dateDebut[1]+"/"+this.response[i].dateDebut[2]+this.response[i].dateDebut[3]+"/"+this.response[i].dateDebut[4]+this.response[i].dateDebut[5]+this.response[i].dateDebut[6]+this.response[i].dateDebut[7];
			var dateF=this.response[i].dateFin[0]+this.response[i].dateFin[1]+"/"+this.response[i].dateFin[2]+this.response[i].dateFin[3]+"/"+this.response[i].dateFin[4]+this.response[i].dateFin[5]+this.response[i].dateFin[6]+this.response[i].dateFin[7];
			if(this.response[i].conges_idConge==1){
				var type = "Maternité";
			}
			if(this.response[i].conges_idConge==2){
				var type = "RTT";
			}
			if(this.response[i].conges_idConge==3){
				var type = "Payé";
			}
			else{
				var type = "Non Payé";
			}
			createurDeLigneVC(this.response[i].employes_idEmploye, type, dateD, dateF, this.response[i].etat, this.response[i].id);
		}
	}
	getList.send();
}

//validation ou refus d'une demande de conges
function updateDemandeConge(){
	var lstBoutonValide = document.getElementsByClassName("boutonValide");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			var requeteUpdate = new XMLHttpRequest();
			requeteUpdate.open("PUT","../cadrews/conges/update");
			requeteUpdate.responseType = "json";
			requeteUpdate.onload = function(){
				while(document.getElementById("tableauDesDemandes1").firstChild){
					document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
				}
				while(document.getElementById("tableauDesDemandes2").firstChild){
					document.getElementById("tableauDesDemandes2").removeChild(document.getElementById("tableauDesDemandes2").firstChild);
				}				
				gestionnairePage2("conges");
			};
			requeteUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requeteUpdate.send("id="+idNum+"&nb="+1);
			
			var date =document.getElementById("DATE"+idNum).innerHTML;
			date=date[0]+date[1]+date[3]+date[4]+date[6]+date[7]+date[8]+date[9];
			addRappel(date, "Bon retour de vancances !", document.getElementById("ID"+idNum).innerHTML, 3);
		}
		i++;
	}
	
	var lstBoutonValide = document.getElementsByClassName("boutonRefuse");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			var requeteUpdate = new XMLHttpRequest();
			requeteUpdate.open("PUT","../cadrews/conges/update");
			requeteUpdate.responseType = "json";
			requeteUpdate.onload = function(){
				while(document.getElementById("tableauDesDemandes1").firstChild){
					document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
				}
				while(document.getElementById("tableauDesDemandes2").firstChild){
					document.getElementById("tableauDesDemandes2").removeChild(document.getElementById("tableauDesDemandes2").firstChild);
				}				
				gestionnairePage2("conges");
			};
			requeteUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requeteUpdate.send("id="+idNum+"&nb="+2);
		}
		i++;
	}
}

//recuperation des demandes d'attestations
function getHistoriqueAttestion(){
	var getList = new XMLHttpRequest();
	getList.open("GET","../cadrews/attestation/listDemandesAttestation",true, null, null);
	getList.responseType="json";
	getList.onload=function(){
		for (var i=0; i<this.response.length; i++){
			var date=this.response[i].date[0]+this.response[i].date[1]+"/"+this.response[i].date[2]+this.response[i].date[3]+"/"+this.response[i].date[4]+this.response[i].date[5]+this.response[i].date[6]+this.response[i].date[7];
			if(this.response[i].attestations_idAttestation==1){
				var type = "Attestation 1";
			}
			else if(this.response[i].attestations_idAttestation==2){
				var type = "Attestation 2";
			}
			else if(this.response[i].attestations_idAttestation==3){
				var type = "Attestation 3";
			}
			else{
				var type = "Attestation 4";
			}
			createurDeLigneA(this.response[i].employes_idEmploye, type, date, this.response[i].etat, this.response[i].id);
		}
	}
	getList.send();
}

//validation ou refus d'une demande d'attestation
function updateDemandeAttestation(){
	var lstBoutonValide = document.getElementsByClassName("boutonValide");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			var requeteUpdate = new XMLHttpRequest();
			requeteUpdate.open("PUT","../cadrews/attestation/update");
			requeteUpdate.responseType = "json";
			requeteUpdate.onload = function(){
				while(document.getElementById("tableauDesDemandes1").firstChild){
					document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
				}
				while(document.getElementById("tableauDesDemandes2").firstChild){
					document.getElementById("tableauDesDemandes2").removeChild(document.getElementById("tableauDesDemandes2").firstChild);
				}				
				gestionnairePage2("attestations");
			};
			requeteUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requeteUpdate.send("id="+idNum+"&nb="+1);
			
			var date =document.getElementById("DATE"+idNum).innerHTML;
			date=date[0]+date[1]+date[3]+date[4]+date[6]+date[7]+date[8]+date[9];
			addRappel(date, "Votre attestations est disponible. N'oubliez pas de venir la récupérer !", document.getElementById("ID"+idNum).innerHTML, 3);
		}
		i++;
	}
	
	var lstBoutonValide = document.getElementsByClassName("boutonRefuse");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			var requeteUpdate = new XMLHttpRequest();
			requeteUpdate.open("PUT","../cadrews/attestation/update");
			requeteUpdate.responseType = "json";
			requeteUpdate.onload = function(){
				while(document.getElementById("tableauDesDemandes1").firstChild){
					document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
				}
				while(document.getElementById("tableauDesDemandes2").firstChild){
					document.getElementById("tableauDesDemandes2").removeChild(document.getElementById("tableauDesDemandes2").firstChild);
				}				
				gestionnairePage2("attestations");
			};
			requeteUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requeteUpdate.send("id="+idNum+"&nb="+2);
		}
		i++;
	}
}

//recuperation des vehicules
function getVehicules(){
	var getList = new XMLHttpRequest();
	getList.open("GET","../cadrews/vehicules/listIdVehicule",true, null, null);
	getList.responseType="json";
	getList.onload=function(){
		for (var i=0; i<this.response.length; i++){
			createurDeLigneV(this.response[i].typeVehicule, this.response[i].immatriculation);
		}
	}
	getList.send();
}

//supprimer un vehicule
function deleteVehicule(){	
	var lstBoutonValide = document.getElementsByClassName("boutonDelete");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			var requeteUpdate = new XMLHttpRequest();
			requeteUpdate.open("DELETE","../cadrews/vehicules/delete/"+idNum);
			requeteUpdate.responseType = "json";
			requeteUpdate.onload = function(){
				while(document.getElementById("tableauDesDemandes1").firstChild){
					document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
				}
				gestionnairePage2("vehicules2");
			};
			requeteUpdate.send();
		}
		i++;
	}
}

//recuperation des devis
function getDevis(){
	var getList = new XMLHttpRequest();
	getList.open("GET","../cadrews/devis/listDevis",true, null, null);
	getList.responseType="json";
	getList.onload=function(){
		for (var i=0; i<this.response.length; i++){
			createurDeLigneD(this.response[i].nomSociete, this.response[i].nomDemandeur, this.response[i].idDevis);
		}
	}
	getList.send();
}

//supprimer un devis
function deleteDevis(){	
	var lstBoutonValide = document.getElementsByClassName("boutonDelete");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			var requeteUpdate = new XMLHttpRequest();
			requeteUpdate.open("DELETE","../cadrews/devis/delete/"+idNum);
			requeteUpdate.responseType = "json";
			requeteUpdate.onload = function(){
				while(document.getElementById("tableauDesDemandes1").firstChild){
					document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
				}
				gestionnairePage2("devis");
			};
			requeteUpdate.send();
		}
		i++;
	}
}

//afficher les détails d'un devis
function detailDevis(){
	var lstBoutonValide = document.getElementsByClassName("boutonDetails");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			
			var getList = new XMLHttpRequest();
			getList.open("GET","../cadrews/devis/listDevis",true, null, null);
			getList.responseType="json";
			getList.onload=function(){
				for (var j=0; j<this.response.length; j++){
					if (this.response[j].idDevis == idNum){
						alert("Nom de la Société : "+this.response[j].nomSociete+"\n Nom du demandeur : "+this.response[j].nomDemandeur+"\n \n Mail : "+this.response[j].mail+"\n Tel : "+this.response[j].telephone+"\n Adresse : "+this.response[j].adresse+"\n Ville : "+this.response[j].ville+"\n Code postal : "+this.response[j].codePostal+"\n Service : "+this.response[j].service+"\n \n Message : \n"+this.response[j].message+"\n \n");
					}				
				}
			}
			getList.send();
		}
		i++;
	}
}

//recuperation des rappels
function getHistoriqueRappels(){
	var getList = new XMLHttpRequest();
	getList.open("GET","../cadrews/rappels/listRappels",true, null, null);
	getList.responseType="json";
	getList.onload=function(){
		for (var i=0; i<this.response.length; i++){
			createurDeLigneE(this.response[i].messageRappel, this.response[i].employes_idEmploye,this.response[i].dateRappel[0]+this.response[i].dateRappel[1]+"/"+this.response[i].dateRappel[2]+this.response[i].dateRappel[3]+"/"+this.response[i].dateRappel[4]+this.response[i].dateRappel[5]+this.response[i].dateRappel[6]+this.response[i].dateRappel[7], this.response[i].idRappel);
		}
	}
	getList.send();
}

//supprimer un rappel
function deleteRappel(){	
	var lstBoutonValide = document.getElementsByClassName("boutonDelete");
	var i = 0;
	while(lstBoutonValide[i]!=null){
		lstBoutonValide[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(2);
			
			var requeteUpdate = new XMLHttpRequest();
			requeteUpdate.open("DELETE","../cadrews/rappels/delete");
			requeteUpdate.responseType = "json";
			requeteUpdate.onload = function(){
				while(document.getElementById("tableauDesDemandes1").firstChild){
					document.getElementById("tableauDesDemandes1").removeChild(document.getElementById("tableauDesDemandes1").firstChild);
				}
				gestionnairePage2("evenements");
			};
			requeteUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requeteUpdate.send("idRappel="+idNum);
		}
		i++;
	}
}



window.onload = function(){
	gestionnaireDeMenu(4);
	maillingAnnonce();
	supprimeurDeNotifications();
	gestionnairePage();
	disparaitre();
	gestionFooter();
};
