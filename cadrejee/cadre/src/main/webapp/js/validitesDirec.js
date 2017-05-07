// avoir la date du jour 
function getDate(){
	var date = new Date();
	var jour=date.getDate();
	if (jour<10){
		jour="0"+jour.toString();
	}
	jour=jour.toString();
	var mois= date.getMonth()+1;
	if (mois<10){
		mois="0"+mois.toString();
	}
	mois=mois.toString();
	var annee=date.getFullYear().toString();
	
	return jour+mois+annee;	
}


// remplisseur du tableau des validités.
function remplissageRecherche(){
	var nb=0;
	document.getElementById("boutonSearch1").onclick=function(){
		var id=document.getElementById("nomR").value;
		document.getElementById("nomR").value="";
		id=id.toLowerCase();
		
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/validites/listDemandesValiditeByidEmploye/"+id,true, null, null);
		getList2.responseType="json";
		
		if(nb==0){
			var div = document.getElementById("tableauDesValidites1");
			var tab = document.createElement('table')
			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('th');
			td1_1.innerHTML = "Type de la validité";
			var td1_2 = document.createElement('th');
			td1_2.innerHTML = "Nom et prénom de l'employé";
			var td1_3 = document.createElement('th');
			td1_3.innerHTML = "Date de début";
			var td1_4 = document.createElement('th');
			td1_4.innerHTML = "Date de fin";
			var td1_7 = document.createElement('th');
			td1_7.innerHTML = "Valide ?";
			
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			tr2.appendChild(td1_7);
			tab.appendChild(tr2);	
			
			getList2.onload=function(){
				for (var i=0; i<this.response.length; i++){
					var tr2 = document.createElement('tr');
					var td1_1 = document.createElement('td');
					var id= "li"+this.response[i].validites_idValidite;
					var type=document.getElementById(id).innerHTML;
					td1_1.innerHTML =type;
					var td1_2 = document.createElement('td');
					var getList3 = new XMLHttpRequest();
					var id=this.response[i].employes_idEmploye;
					var nom='';
					var j=0;
					while(this.response[i].employes_idEmploye[j]!=undefined){
						if(this.response[i].employes_idEmploye[j]=='.'){
							nom=nom+" ";
						}
						else{
							nom=nom+this.response[i].employes_idEmploye[j];
						}
						j++;
					}
					td1_2.innerHTML =nom ;					
					var td1_3 = document.createElement('td');
					var dateD=this.response[i].dateDebut[0]+this.response[i].dateDebut[1]+"/"+this.response[i].dateDebut[2]+this.response[i].dateDebut[3]+"/"+this.response[i].dateDebut[4]+this.response[i].dateDebut[5]+this.response[i].dateDebut[6]+this.response[i].dateDebut[7];
					td1_3.innerHTML = dateD ;
					var td1_4 = document.createElement('td');
					var dateF=this.response[i].dateFin[0]+this.response[i].dateFin[1]+"/"+this.response[i].dateFin[2]+this.response[i].dateFin[3]+"/"+this.response[i].dateFin[4]+this.response[i].dateFin[5]+this.response[i].dateFin[6]+this.response[i].dateFin[7];
					td1_4.innerHTML = dateF;
					var td1_7 = document.createElement('td');
					var span1_7 = document.createElement('span');
					dateJour=getDate()[6]+getDate()[7]+getDate()[2]+getDate()[3]+getDate()[0]+getDate()[1];
					dateFinal= this.response[i].dateFin[6]+this.response[i].dateFin[7]+this.response[i].dateFin[2]+this.response[i].dateFin[3]+this.response[i].dateFin[0]+this.response[i].dateFin[1];
					dateJour= parseInt(dateJour);
					dateFinal= parseInt(dateFinal);
					
					if(dateFinal>dateJour){
						span1_7.className="glyphicon glyphicon-ok";
					}else{
						span1_7.className="glyphicon glyphicon-remove"
					}
					tr2.appendChild(td1_1);
					tr2.appendChild(td1_2);
					tr2.appendChild(td1_3);
					tr2.appendChild(td1_4);
					td1_7.appendChild(span1_7);
					tr2.appendChild(td1_7);
					tab.appendChild(tr2);
					tab.appendChild(tr2);
					div.appendChild(tab);
					
				}
			}
			getList2.send();
			

		}
		while(document.getElementById("tableauDesValidites1").firstChild){
			document.getElementById("tableauDesValidites1").removeChild(document.getElementById("tableauDesValidites1").firstChild);
		}
		remplissageRecherche();
	}
	
}
function remplissageRechercheType(){
	var nb=0;
		
	document.getElementById("boutonSearch2").onclick=function(){
		var type=document.getElementById("typeR").value;
		document.getElementById("typeR").value="";
		type=type.toLowerCase();
		
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/validites/listDemandesDeValiditeByType/"+type,true, null, null);
		getList2.responseType="json";
		if(nb==0){
			nb++;
			var div = document.getElementById("tableauDesValidites2");
			var tab = document.createElement('table')
			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('th');
			td1_1.innerHTML = "Type de la validité";
			var td1_2 = document.createElement('th');
			td1_2.innerHTML = "Nom et prénom de l'employé";
			var td1_3 = document.createElement('th');
			td1_3.innerHTML = "Date de début";
			var td1_4 = document.createElement('th');
			td1_4.innerHTML = "Date de fin";
			var td1_7 = document.createElement('th');
			td1_7.innerHTML = "Valide ?";
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			tr2.appendChild(td1_7);
			tab.appendChild(tr2);	
			
			getList2.onload=function(){
				for (var i=0; i<this.response.length; i++){
					var tr2 = document.createElement('tr');
					var td1_1 = document.createElement('td');
					var id= "li"+this.response[i].validites_idValidite;
					var type=document.getElementById(id).innerHTML;
					td1_1.innerHTML =type;
					var td1_2 = document.createElement('td');
					var getList3 = new XMLHttpRequest();
					var id=this.response[i].employes_idEmploye;
					var nom='';
					var j=0;
					while(this.response[i].employes_idEmploye[j]!=undefined){
						if(this.response[i].employes_idEmploye[j]=='.'){
							nom=nom+" ";
						}
						else{
							nom=nom+this.response[i].employes_idEmploye[j];
						}
						j++;
					}
					td1_2.innerHTML =nom ;					
					var td1_3 = document.createElement('td');
					var dateD=this.response[i].dateDebut[0]+this.response[i].dateDebut[1]+"/"+this.response[i].dateDebut[2]+this.response[i].dateDebut[3]+"/"+this.response[i].dateDebut[4]+this.response[i].dateDebut[5]+this.response[i].dateDebut[6]+this.response[i].dateDebut[7];
					td1_3.innerHTML = dateD ;
					var td1_4 = document.createElement('td');
					var dateF=this.response[i].dateFin[0]+this.response[i].dateFin[1]+"/"+this.response[i].dateFin[2]+this.response[i].dateFin[3]+"/"+this.response[i].dateFin[4]+this.response[i].dateFin[5]+this.response[i].dateFin[6]+this.response[i].dateFin[7];
					td1_4.innerHTML = dateF;
					var td1_7 = document.createElement('td');
					var span1_7 = document.createElement('span');
					dateJour=getDate()[6]+getDate()[7]+getDate()[2]+getDate()[3]+getDate()[0]+getDate()[1];
					dateFinal= this.response[i].dateFin[6]+this.response[i].dateFin[7]+this.response[i].dateFin[2]+this.response[i].dateFin[3]+this.response[i].dateFin[0]+this.response[i].dateFin[1];
					dateJour= parseInt(dateJour);
					dateFinal= parseInt(dateFinal);
					
					if(dateFinal>dateJour){
						span1_7.className="glyphicon glyphicon-ok";
					}else{
						span1_7.className="glyphicon glyphicon-remove"
					}
					tr2.appendChild(td1_1);
					tr2.appendChild(td1_2);
					tr2.appendChild(td1_3);
					tr2.appendChild(td1_4);
					td1_7.appendChild(span1_7);
					tr2.appendChild(td1_7);
					tab.appendChild(tr2);
					tab.appendChild(tr2);
					div.appendChild(tab);
					
				}
			}
			getList2.send();
			

			
		}
		while(document.getElementById("tableauDesValidites2").firstChild){
			document.getElementById("tableauDesValidites2").removeChild(document.getElementById("tableauDesValidites2").firstChild);
		}
		remplissageRechercheType();
	}
}

// pour générer les jours mois années des balises selection.
function remplissageJMA(){
	var sel1_2 = document.getElementById('JoursF');
	var J = document.createElement('option');
	J.innerHTML='-';
	sel1_2.appendChild(J);
	for(var i = 1; i<32; i++){
		var J = document.createElement('option');
		J.innerHTML=i;
		if(i<10){
		J.value="0"+i;}
		sel1_2.appendChild(J);
	}
	var sel1_1 = document.getElementById('JoursD');
	var J = document.createElement('option');
	J.innerHTML='-';
	sel1_1.appendChild(J);
	for(var i = 1; i<32; i++){
		var J = document.createElement('option');
		J.innerHTML=i;
		if(i<10){
		J.value="0"+i;}
		sel1_1.appendChild(J);
	}
	var sel2_1 = document.getElementById('MoisD');

	var M = document.createElement('option');M.value="-"; M.innerHTML="-"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="01"; M.innerHTML="janvier"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="02"; M.innerHTML="février"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="03"; M.innerHTML="mars"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="04"; M.innerHTML="avril"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="05"; M.innerHTML="mai"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="06"; M.innerHTML="juin"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="07"; M.innerHTML="juillet"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="08"; M.innerHTML="aout"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="09"; M.innerHTML="septembre"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="10"; M.innerHTML="octobre"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="11"; M.innerHTML="novembre"; sel2_1.appendChild(M);
	var M = document.createElement('option');M.value="12"; M.innerHTML="decembre"; sel2_1.appendChild(M);
	var sel2_2 = document.getElementById('MoisF');
	var M = document.createElement('option'); M.value="-";M.innerHTML="-"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.value="01";M.innerHTML="janvier"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.value="02";M.innerHTML="février"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="03"; M.innerHTML="mars"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="04"; M.innerHTML="avril"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="05"; M.innerHTML="mai"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="06"; M.innerHTML="juin"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="07"; M.innerHTML="juillet"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="08"; M.innerHTML="aout"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="09"; M.innerHTML="septembre"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="10"; M.innerHTML="octobre"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="11"; M.innerHTML="novembre"; sel2_2.appendChild(M);
	var M = document.createElement('option');M.value="12"; M.innerHTML="decembre"; sel2_2.appendChild(M);
	var sel3_1 = document.getElementById('AnneesD');
	var A = document.createElement('option');
	A.innerHTML='-';
	sel3_1.appendChild(A);
	for(var i = 2030; i>2000; i--){
		var A = document.createElement('option');
		A.innerHTML=i;
		sel3_1.appendChild(A);
	}
	var sel3_2 = document.getElementById('AnneesF');
	var A = document.createElement('option');
	A.innerHTML='-';
	sel3_2.appendChild(A);
	for(var i = 2030; i>2000; i--){
		var A = document.createElement('option');
		A.innerHTML=i;
		sel3_2.appendChild(A);
	}
}

//affichage type de validites dans le selecteur

function getIdNom(){
			
			var getList2 = new XMLHttpRequest();
			getList2.open("GET","../cadrews/validites/listIdValidite",true, null, null);
			getList2.responseType="json";
			var select = document.getElementById("type");
			var ul=document.getElementById("idtypeV");
			getList2.onload=function(){
				for (var i=0; i<this.response.length; i++){
					var newoption=document.createElement("option");
					var newli=document.createElement("div");
					newoption.textContent=this.response[i].typeValidite;
					newli.textContent=this.response[i].typeValidite;
					newli.id="li"+this.response[i].idValidite;
					select.appendChild(newoption);
					ul.appendChild(newli);
				}
			}
			getList2.send();
}

function getNomDuType(id){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","../cadrews/validites/listIdValidite",true, null, null);
	getList2.responseType="json";
	
	getList2.onload=function(){
		a=this.response[id-1].typeValidite;
	
	}
	
	getList2.send();
}


function addvalidite(){
	
	document.getElementById("boutonAdd").onclick=function(){
		
		var requetePostReponse = new XMLHttpRequest();
		requetePostReponse.open("POST","../cadrews/validites");
		requetePostReponse.responseType = "json";
		
		var nom = document.getElementById("inputNom").value;
		nom=nom.toLowerCase();
		document.getElementById("inputNom").value="";
		
		var prenom = document.getElementById("inputPrenom").value;
		prenom=prenom.toLowerCase();
		document.getElementById("inputPrenom").value="";
		
		var select = document.getElementById("type");
		var choice = select.selectedIndex;
		var type = select.options[choice].value;
		
		var select = document.getElementById("JoursD");
		var choice = select.selectedIndex;
		var dateDebutJour = select.options[choice].value.toString();
		
		var select = document.getElementById("MoisD");
		var choice = select.selectedIndex;
		var dateDebutMois = select.options[choice].value.toString();
		
		var select = document.getElementById("AnneesD");
		var choice = select.selectedIndex;
		var dateDebutAnnee = select.options[choice].value.toString();
		
		var select = document.getElementById("JoursF");
		var choice = select.selectedIndex;
		var dateFinJour = select.options[choice].value.toString();
		
		var select = document.getElementById("MoisF");
		var choice = select.selectedIndex;
		var dateFinMois = select.options[choice].value.toString();
		
		var select = document.getElementById("AnneesF");
		var choice = select.selectedIndex;
		var dateFinAnnee = select.options[choice].value.toString();
		
		//verif date 
		var dateDverif=dateDebutAnnee+dateDebutMois+dateDebutJour;
		var dateFverif=dateFinAnnee+dateFinMois+dateFinJour;
		dateDverif=parseInt(dateDverif);
		dateFverif=parseInt(dateFverif);
		
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/validites/listIdValidite",true, null, null);
		getList2.responseType="json";
		var a;
	
		getList2.onload=function(){
			if (nom!=''&& prenom!=''&& type!=''&& dateDebutAnnee!='-' && dateDebutMois!='-' && dateDebutJour!='-'&& dateFinAnnee!='-' && dateFinMois!='-' && dateFinJour!='-' ){
			if (dateDverif <= dateFverif){
			for (var i=0; i<this.response.length; i++){
				if(this.response[i].typeValidite == type){
					a=this.response[i].idValidite;
					requetePostReponse.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					requetePostReponse.send("idValidite="+a+"&idEmploye="+prenom+"."+nom+"&dateD="+dateDebutJour+dateDebutMois+dateDebutAnnee+"&dateF="+dateFinJour+dateFinMois+dateFinAnnee);
					createurDeNotifications(1, "Demande d'attestation du type : "+type+" bien envoyée!");
					
				
				}
			}
		}else{
			createurDeNotifications(4, "Problème au niveau de la date. Vérifiez que la date de fin est bien ultérieure à la date de début");
			
		}
	}else{
		createurDeNotifications(4, "Vérifiez que tout les champs sont remplis");
		
	}
		}
		getList2.send();
		}
}

function remplissageDataListeEmploye(){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/employes/listIdEmploye",true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		var dataliste = document.getElementById("lstEmployes");
		for (var i=0; i<this.response.length; i++){
			var option = document.createElement('option');
			option.value=this.response[i].idEmploye;
			dataliste.appendChild(option);
		}
	}
	getEmploye.send();
}

function remplissageDataListeTypes(){
	var getT = new XMLHttpRequest();
	getT.open("GET","../cadrews/validites/listIdValidite",true, null, null);
	getT.responseType="json";
	
	getT.onload=function(){
		var dataliste = document.getElementById("lstTypes");
		for (var i=0; i<this.response.length; i++){
			var option = document.createElement('option');
			option.value=this.response[i].typeValidite;
			dataliste.appendChild(option);
		}
	}
	getT.send();
}

window.onload = function(){
	getIdNom();
	remplissageDataListeEmploye();
	remplissageDataListeTypes();
	remplissageRechercheType();
	addvalidite();
	gestionnaireDeMenu(10);
	maillingAnnonce();
	remplissageRecherche();
	supprimeurDeNotifications();
	remplissageJMA();
	disparaitre();
	gestionFooter();
};