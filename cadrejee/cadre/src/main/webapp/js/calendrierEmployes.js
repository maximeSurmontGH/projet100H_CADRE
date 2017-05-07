// avoir la date du jour 
function getDateverif(){
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
	
	return annee+mois+jour;	
}

function creationTableau(){
  //creation des mois de l'annee
  var janvier = {
    mois:'Janvier',
    nb:1,
    nbJour:31,
    moisAvant : decembre
  }
  var fevrier = {
    mois:'Février',
    nb:2,
    nbJour:28,
    moisAvant : janvier
  }
  var fevrier2 = {
    mois:'Février',
    nb:2,
    nbJour:29,
    moisAvant : janvier
  }
  var mars = {
    mois:'Mars',
    nb:3,
    nbJour:31,
    moisAvant : fevrier
  }
  var mars2 = {
    mois:'Mars',
    nb:3,
    nbJour:31,
    moisAvant : fevrier2
  }
  var avril = {
    mois:'Avril',
    nb:4,
    nbJour:30,
    moisAvant : mars
  }
  var mai = {
    mois:'Mai',
    nb:5,
    nbJour:31,
    moisAvant : avril
  }
  var juin = {
    mois:'Juin',
    nb:6,
    nbJour:30,
    moisAvant : mai
  }
  var juillet = {
    mois:'Juillet',
    nb:7,
    nbJour:31,
    moisAvant : juin
  }
  var aout = {
    mois:'Aout',
    nb:8,
    nbJour:31,
    moisAvant : juillet
  }
  var septembre = {
    mois:'Septembre',
    nb:9,
    nbJour:30,
    moisAvant : aout
  }
  var octobre = {
    mois:'Octobre',
    nb:10,
    nbJour:31,
    moisAvant : septembre
  }
  var novembre = {
    mois:'Novembre',
    nb:11,
    nbJour:30,
    moisAvant : octobre
  }
  var decembre = {
    mois:'Decembre',
    nb:12,
    nbJour:31,
    moisAvant : novembre
  }
	janvier.moisAvant = decembre;
  //creation des jours de la semaine
  var lundi = {
    jour : "LUNDI",
    nb : 1
  }
  var mardi = {
    jour : "MARDI",
    nb : 2
  }
  var mercredi = {
    jour : "MERCREDI",
    nb : 3
  }
  var jeudi = {
    jour : "JEUDI",
    nb : 4
  }
  var vendredi = {
    jour : "VENDREDI",
    nb : 5
  }
  var samedi = {
    jour : "SAMEDI",
    nb : 6
  }
  var dimanche = {
    jour : "DIMANCHE",
    nb : 7
  }
  // recuperation de la date du jour
  var ajd = new Date();
  var annee = ajd.getFullYear();
  var mois = ajd.getMonth() + 1;
  var jour = ajd.getDate();
  // savoir si l'annee est ou non bisextile
  if(annee%4==0){
    var bisextile=true;
  }
  else {
    var bisextile=false;
  }
  //recuperation du jour de la semaine actuel
  var weekday = new Array(7);
  weekday[0] = dimanche;
  weekday[1] = lundi;
  weekday[2] = mardi;
  weekday[3] = mercredi;
  weekday[4] = jeudi;
  weekday[5] = vendredi;
  weekday[6] = samedi;
  var jourDeLaSemaine = weekday[ajd.getDay()];
  //recuperation du mois
  if (mois==1) var mois = janvier;
  if (mois==2 && bisextile) var mois = fevrier2;
  if (mois==2 && !bisextile) var mois = fevrier;
  if (mois==3 && bisextile) var mois = mars2;
  if (mois==3 && !bisextile) var mois = mars;
  if (mois==4) var mois = avril;
  if (mois==5) var mois = mai;
  if (mois==6) var mois = juin;
  if (mois==7) var mois = juillet;
  if (mois==8) var mois = aout;
  if (mois==9) var mois = septembre;
  if (mois==10) var mois = octobre;
  if (mois==11) var mois = novembre;
  if (mois==12) var mois = decembre;
  //change la date pour la date actuel
  document.getElementById("choixMoisAnnee").innerHTML=mois.mois+" "+annee;
  // crée le caledndriee
  createurTableau(jourDeLaSemaine, mois, jour);
	//changement de mois
	document.getElementById("flecheLeft").onclick=function(){
		if(annee%4==0){
	    var bisextile=true;
	  }
	  else {
	    var bisextile=false;
	  }
		if(mois.nb==1) {
			mois = decembre; annee-=1;
		}
		else if(mois.nb==2) mois = janvier;
		else if (mois.nb==3 && bisextile) mois = fevrier2;
	  else if (mois.nb==3 && !bisextile) mois = fevrier;
	  else if (mois.nb==4 && bisextile) mois = mars2;
	  else if (mois.nb==4 && !bisextile) mois = mars;
		else if(mois.nb==5) mois = avril;
		else if(mois.nb==6) mois = mai;
		else if(mois.nb==7) mois = juin;
		else if(mois.nb==8) mois = juillet;
		else if(mois.nb==9) mois = aout;
		else if(mois.nb==10) mois = septembre;
		else if(mois.nb==11) mois = octobre;
		else if(mois.nb==12) mois = novembre;
		// suppression de l'ancien mois
		var element = document.getElementById("pourLaSuppression");
		while (element.firstChild) {
  		element.removeChild(element.firstChild);
		}
		//change la date pour la date actuel
	  document.getElementById("choixMoisAnnee").innerHTML=mois.mois+" "+annee;
		// détermine le jour de la semaine du dernier jour du mois précédant
		while(jour!=0){
			if (jourDeLaSemaine.nb == 1) jourDeLaSemaine = dimanche;
			else if (jourDeLaSemaine.nb == 2) jourDeLaSemaine = lundi;
			else if (jourDeLaSemaine.nb == 3) jourDeLaSemaine = mardi;
			else if (jourDeLaSemaine.nb == 4) jourDeLaSemaine = mercredi;
			else if (jourDeLaSemaine.nb == 5) jourDeLaSemaine = jeudi;
			else if (jourDeLaSemaine.nb == 6) jourDeLaSemaine = vendredi;
			else if (jourDeLaSemaine.nb == 7) jourDeLaSemaine = samedi;
			jour--;
		}
		if (jour == 00) jour=mois.nbJour;
	  // crée le caledndrier
	  createurTableau(jourDeLaSemaine, mois, jour);
	}
	document.getElementById("flecheRight").onclick=function(){
		if(annee%4==0){
			var bisextile=true;
		}
		else {
			var bisextile=false;
		}
		if (mois.nb==1 && bisextile) mois = fevrier2;
	  else if (mois.nb==1 && !bisextile) mois = fevrier;
	  else if (mois.nb==2 && bisextile) mois = mars2 ;
	  else if (mois.nb==2 && !bisextile) mois = mars;
		else if(mois.nb==3) mois = avril;
		else if(mois.nb==4) mois = mai;
		else if(mois.nb==5) mois = juin;
		else if(mois.nb==6) mois = juillet;
		else if(mois.nb==7) mois = aout;
		else if(mois.nb==8) mois = septembre;
		else if(mois.nb==9) mois = octobre;
		else if(mois.nb==10) mois = novembre;
		else if(mois.nb==11) mois = decembre;
		else if(mois.nb==12) {
			mois = janvier; annee+=1;
		}
		// suppression de l'ancien mois
		var element = document.getElementById("pourLaSuppression");
		while (element.firstChild) {
  		element.removeChild(element.firstChild);
		}
		//change la date pour la date actuel
	    document.getElementById("choixMoisAnnee").innerHTML=mois.mois+" "+annee;
		// détermine le jour de la semaine du dernier jour du mois précédant
		while(jour<=mois.moisAvant.nbJour){
			if (jourDeLaSemaine.nb == 1) jourDeLaSemaine = mardi;
			else if (jourDeLaSemaine.nb == 2) jourDeLaSemaine = mercredi;
			else if (jourDeLaSemaine.nb == 3) jourDeLaSemaine = jeudi;
			else if (jourDeLaSemaine.nb == 4) jourDeLaSemaine = vendredi;
			else if (jourDeLaSemaine.nb == 5) jourDeLaSemaine = samedi;
			else if (jourDeLaSemaine.nb == 6) jourDeLaSemaine = dimanche;
			else if (jourDeLaSemaine.nb == 7) jourDeLaSemaine = lundi;
			jour++;
		}
		if (jour == mois.moisAvant.nbJour+1) jour=1;
	  // crée le caledndrier
	  createurTableau(jourDeLaSemaine, mois, jour);
	}
}

function createurTableau(jourDeLaSemaine, mois, jour){
    jourActuel = jour%7 - jourDeLaSemaine.nb; //nous permet de savoir quel jour de la semaine fut le permier jour du mois
		if (jourActuel<0) jourActuel+=7;
    jourCumul = 1;
    var divCalendar = document.getElementById("pourLaSuppression");
    //remplir le tableau pour la premiere semaine (cas particulier car des jours apparaissant n'appartiendrons pas au mois en cours)
    var ul = document.createElement('ul');
    ul.className ="days";
    if (jourActuel!=0) {
      for(var i=1; i<=7-jourActuel; i++){
        var li = document.createElement('li');
        li.className = "day other-mounth";
        var div = document.createElement('div');
        div.className = "date";
        div.innerHTML = mois.moisAvant.nbJour+i-7+jourActuel;
        li.appendChild(div);
        ul.appendChild(li);
      }
      for(var i=1; i<=jourActuel; i++){
        var li = document.createElement('li');
        li.className = "day";
        var div = document.createElement('div');
        div.className = "date";
        div.innerHTML = i;
        li.appendChild(div);
        ul.appendChild(li);
        jourCumul++;
      }
    }
		var depasse = 0;
    //remplir le tableau jusqu'a la fin du mois
    while(depasse==0){
      for(var i=0; i<7; i++){
        var li = document.createElement('li');
        if (depasse==0) li.className = "day";
        else li.className = "day other-mounth";
        var div = document.createElement('div');
        div.className = "date";
        div.innerHTML = jourCumul;
        li.appendChild(div);
        ul.appendChild(li);
				if (jourCumul>=mois.nbJour){
					jourCumul=0;
					depasse=1;
				}
        jourCumul++;
      }
    }
    divCalendar.appendChild(ul);
    //on supprime le decalage
    var jour=jourActuel;
    if (jour==0){jour=7-jour;}
    getDemandes(mois.nb, 7-jour, mois.nbJour);
}

// fonction pour ajouter différentes notifs de différents styles.
function ajoutInfo(nb, notif, message, heure){
  var li = document.getElementsByTagName("li")[nb+8];
  var div = document.createElement('div');
  div.className= "event "+notif;
  var div1 = document.createElement('div');
  div1.className= "event-desc";
  div1.innerHTML = message;
  var div2 = document.createElement('div');
  div2.className="event-time";
  div2.innerHTML = heure;
  div.appendChild(div1);
  div.appendChild(div2);
  li.appendChild(div);
}

// fonction qui permettra de compter les jours en fonction du compteur demandé et l'affichera.
function compteurInfos(){
	document.getElementById("boutonSearch3").onclick=function(){
		var nb=0;
		var typenb=0;
		var ladate=new Date();
		var year = ladate.getFullYear();
		
		var select = document.getElementById("select3");
		var choice = select.selectedIndex;
		var type = select.options[choice].value.toString();
		
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/conges/listIdConge",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			for (var i=0; i<this.response.length; i++){
				if(this.response[i].typeConge==type){
					typenb = this.response[i].idConge;
					
					var getEmploye = new XMLHttpRequest();
					getEmploye.open("GET","../cadrews/conges/listCongesById/"+document.getElementById('employeId').innerText,true, null, null);
					getEmploye.responseType="json";
					
					var k=0
					getEmploye.onload=function(){
						for (var i=0; i<this.response.length; i++){
							var anneeDebut = parseInt(this.response[i].dateDebut[4]+this.response[i].dateDebut[5]+this.response[i].dateDebut[6]+this.response[i].dateDebut[7]);
							var anneeFin = parseInt(this.response[i].dateFin[4]+this.response[i].dateFin[5]+this.response[i].dateFin[6]+this.response[i].dateFin[7]);
							var moisDebut = parseInt(this.response[i].dateDebut[2]+this.response[i].dateDebut[3]);
							var moisFin = parseInt(this.response[i].dateFin[2]+this.response[i].dateFin[3]);
							var jourDebut = parseInt(this.response[i].dateDebut[0]+this.response[i].dateDebut[1]);
							var jourFin = parseInt(this.response[i].dateFin[0]+this.response[i].dateFin[1]);
							var typenb2 = this.response[i].conges_idConge;
							
							if(anneeDebut<year && anneeFin>=year){
								anneeDebut = year;
								jourDebut = 1;
								moisDebut = 1;
							}
							
							if(anneeFin>year && anneeDebut<=year){
								anneeFin = year;
								jourFin = 31;
								moisFin = 12;
							}
							
							if(typenb2==typenb){
								while(moisDebut <= moisFin){
									if(moisDebut == moisFin){
										while(jourDebut != jourFin){
											nb++;
											jourDebut++;
										}
									}
									else{
										if(moisDebut == 2){
											if(year%4==0 || year%400==0){
												jourFin2 = 30;
											}
											else{
												jourFin2 = 29;
											}
										}
										else if(moisDebut == 1 || moisDebut == 3 || moisDebut == 5 || moisDebut == 7 || moisDebut == 9 || moisDebut == 11){
											jourFin2 = 32;
										}
										else{
											jourFin2 = 31;
										}
										while(jourDebut != jourFin2){
											nb++;
											jourDebut++;
										}
									}
									jourDebut = 1;
									moisDebut++;
								}	
							}
						}
						if(nb!=0){nb++;}
						document.getElementById("messageCompteur").innerHTML = "Vous en etes à "+nb+" jours de congés "+type;
						document.getElementById("messageCompteur").className = "alert alert-info alert-dismissable";
					}
					getEmploye.send();
				}
			}
		}
		getList2.send();
	}
}

//affichage type de congé dans le selecteur
function getIdNom(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","../cadrews/conges/listIdConge",true, null, null);
	getList2.responseType="json";
	var select = document.getElementById("typeConge");
	var select2 = document.getElementById("select3");
	getList2.onload=function(){
		for (var i=0; i<this.response.length; i++){
			var newoption=document.createElement("option");
			var newoption2=document.createElement("option");
			newoption.textContent=this.response[i].typeConge;
			newoption2.textContent=this.response[i].typeConge;
			select.appendChild(newoption);
			select2.appendChild(newoption2);
		}
	}
	getList2.send();
}

// affichage du type de Vehicule dans le selecteur
function getIdVehicule(){
			var getList2 = new XMLHttpRequest();
			getList2.open("GET","../cadrews/vehicules/listIdVehicule",true, null, null);
			getList2.responseType="json";
			var select = document.getElementById("whichcar");
			getList2.onload=function(){
				for (var i=0; i<this.response.length; i++){
					var newoption=document.createElement("option");
					newoption.textContent=this.response[i].typeVehicule;
					select.appendChild(newoption);
				}
			}
			getList2.send();
}

//ajouter une demande de vehicule
function addDemandeVehicule(){
	
	//verif date 
	var ajd=parseInt(getDateverif());
	
	document.getElementById("boutonSearch2").onclick=function(){
		var employeId = document.getElementById("employeId").innerText;
		
		var requetePostReponse = new XMLHttpRequest();
		requetePostReponse.open("POST","../cadrews/vehicules/addDemandeV");
		requetePostReponse.responseType = "json";
		
		var nom = document.getElementById("inputNom2").value;
		document.getElementById("inputNom2").value="";
		var prenom = document.getElementById("inputPrenom2").value;
		document.getElementById("inputPrenom2").value="";
				
		var select = document.getElementById("whichcar");
		var choice = select.selectedIndex;
		var type = select.options[choice].value.toString();
		
		var select = document.getElementById("formV_dayD");
		var choice = select.selectedIndex;
		var dateDebutJour = select.options[choice].value.toString();
		
		var select = document.getElementById("formV_monthD");
		var choice = select.selectedIndex;
		var dateDebutMois = select.options[choice].value.toString();
		
		var select = document.getElementById("formV_yearD");
		var choice = select.selectedIndex;
		var dateDebutAnnee = select.options[choice].value.toString();
		
		var select = document.getElementById("formV_dayF");
		var choice = select.selectedIndex;
		var dateFinJour = select.options[choice].value.toString();
		
		var select = document.getElementById("formV_monthF");
		var choice = select.selectedIndex;
		var dateFinMois = select.options[choice].value.toString();
		
		var select = document.getElementById("formV_yearF");
		var choice = select.selectedIndex;
		var dateFinAnnee = select.options[choice].value.toString();
		
		//verif date 
		var dateDverif=dateDebutAnnee+dateDebutMois+dateDebutJour;
		var dateFverif=dateFinAnnee+dateFinMois+dateFinJour;
		dateDverif=parseInt(dateDverif);
		dateFverif=parseInt(dateFverif);

		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/vehicules/listIdVehicule",true, null, null);
		getList2.responseType="json";
		var a;
		
		getList2.onload=function(){
			if (type!=''&& dateDebutAnnee!='-' && dateDebutMois!='-' && dateDebutJour!='-'&& dateFinAnnee!='-' && dateFinMois!='-' && dateFinJour!='-' ){
			if (dateDverif >= ajd && dateDverif <= dateFverif){
			for (var i=0; i<this.response.length; i++){
				if(this.response[i].typeVehicule == type){
					a=this.response[i].immatriculation;
					requetePostReponse.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					requetePostReponse.send("immatriculation="+a+"&idEmploye="+employeId+"&dateD="+dateDebutJour+dateDebutMois+dateDebutAnnee+"&dateF="+dateFinJour+dateFinMois+dateFinAnnee);
					createurDeNotifications(1, "Demande de vehicule du type : "+type+" bien envoyée!");
					
				
				}
			}
		} else{
			createurDeNotifications(4, "Problème au niveau de la date. Vérifiez que la date de fin est bien ultérieure à la date de début et que ces dates sont bien ultérieures à la date du jour ");
			
			}
		}else{
			createurDeNotifications(4, "Vérifiez que tout les champs sont remplis");
			
		}
		
		}
		getList2.send();
	}
}


//ajouter une demande de congé 
function addDemandeConge(){
	//verif date 
	var ajd=parseInt(getDateverif());
	
	document.getElementById("boutonSearch1").onclick=function(){
		
		var employeId = document.getElementById("employeId").innerText;
		
		var requetePostReponse = new XMLHttpRequest();
		requetePostReponse.open("POST","../cadrews/conges");
		requetePostReponse.responseType = "json";
		
		var nom = document.getElementById("inputNom1").value;
		document.getElementById("inputNom1").value="";
		var prenom = document.getElementById("inputPrenom1").value;
		document.getElementById("inputPrenom1").value="";
				
		var select = document.getElementById("typeConge");
		var choice = select.selectedIndex;
		var type = select.options[choice].value.toString();
		
		var select = document.getElementById("form_dayD");
		var choice = select.selectedIndex;
		var dateDebutJour = select.options[choice].value.toString();
		
		var select = document.getElementById("form_monthD");
		var choice = select.selectedIndex;
		var dateDebutMois = select.options[choice].value.toString();
		
		var select = document.getElementById("form_yearD");
		var choice = select.selectedIndex;
		var dateDebutAnnee = select.options[choice].value.toString();
		
		var select = document.getElementById("form_dayF");
		var choice = select.selectedIndex;
		var dateFinJour = select.options[choice].value.toString();
		
		var select = document.getElementById("form_monthF");
		var choice = select.selectedIndex;
		var dateFinMois = select.options[choice].value.toString();
		
		var select = document.getElementById("form_yearF");
		var choice = select.selectedIndex;
		var dateFinAnnee = select.options[choice].value.toString();
		
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/conges/listIdConge",true, null, null);
		getList2.responseType="json";
		var a;
		
		//verif date 
		var dateDverif=dateDebutAnnee+dateDebutMois+dateDebutJour;
		var dateFverif=dateFinAnnee+dateFinMois+dateFinJour;
		dateDverif=parseInt(dateDverif);
		dateFverif=parseInt(dateFverif);
		
		getList2.onload=function(){
			if (type!=''&& dateDebutAnnee!='-' && dateDebutMois!='-' && dateDebutJour!='-'&& dateFinAnnee!='-' && dateFinMois!='-' && dateFinJour!='-' ){
			if (dateDverif >= ajd && dateDverif <= dateFverif){
			for (var i=0; i<this.response.length; i++){
				if(this.response[i].typeConge == type){
					a=this.response[i].idConge;
					requetePostReponse.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					requetePostReponse.send("idConge="+a+"&idEmploye="+employeId+"&dateDebut="+dateDebutJour+dateDebutMois+dateDebutAnnee+"&dateFin="+dateFinJour+dateFinMois+dateFinAnnee);
					createurDeNotifications(1, "Demande de conge du type : "+type+" bien envoyée!");
				
				}
			}
			}else{
				createurDeNotifications(4, "Problème au niveau de la date. Vérifiez que la date de fin est bien ultérieure à la date de début et que ces dates sont bien ultérieures à la date du jour ");
				
			}
			}else {
				createurDeNotifications(4, "Vérifiez que tout les champs sont remplis ");
				
			}
		}
		getList2.send();
		}
}


//recuperation des différentes demandes et implementation dans le calendrier
function getDemandes(mois, jour, moisNbJours){
	
	//demandes de conges
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/conges/listCongesById/"+document.getElementById('employeId').innerText,true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		for (var i=0; i<this.response.length; i++){
			//on affiche que les notif du mois affiché
			if(this.response[i].conges_idConge==1){var demande = "demande de conges de maternité"}
			else if(this.response[i].conges_idConge==2){var demande = "demande de conges RTT"}
			else if(this.response[i].conges_idConge==3){var demande = "demande de conges payés"}
			else{var demande = "demande de congés non payé"};
			if(parseInt(this.response[i].dateDebut[2]+this.response[i].dateDebut[3])!=mois && parseInt(this.response[i].dateFin[2]+this.response[i].dateFin[3])==mois){
				var jourFin=parseInt(this.response[i].dateFin[0]+this.response[i].dateFin[1])-2+jour;
				if(this.response[i].etat=="refuse"){
					while(jourFin!=-2+jour){
						ajoutInfo(jourFin, "bad", "Refus de la "+demande, "");
						jourFin--;
					}
				} 
				else if(this.response[i].etat=="attente"){
					while(jourFin!=-2+jour){
						ajoutInfo(jourFin, "info", "Demande en cours de la "+demande, "");
						jourFin--;
					}
				}
				else{
					while(jourFin!=-2+jour){
						ajoutInfo(jourFin, "fine", "Acceptation de la "+demande, "");
						jourFin--;
					}
				}
			}
			
			if(parseInt(this.response[i].dateDebut[2]+this.response[i].dateDebut[3])==mois && parseInt(this.response[i].dateFin[2]+this.response[i].dateFin[3])==mois){
				var jourFin=parseInt(this.response[i].dateFin[0]+this.response[i].dateFin[1])-2+jour;
				var jourDebut=parseInt(this.response[i].dateDebut[0]+this.response[i].dateDebut[1])-2+jour;
				if(this.response[i].etat=="refuse"){
					while(jourFin!=jourDebut-1){
						ajoutInfo(jourFin, "bad", "Refus de la "+demande, "");
						jourFin--;
					}
				} 
				else if(this.response[i].etat=="attente"){
					while(jourFin!=jourDebut-1){
						ajoutInfo(jourFin, "info", "Demande en cours de la "+demande, "");
						jourFin--;
					}
				}
				else{
					while(jourFin!=jourDebut-1){
						ajoutInfo(jourFin, "fine", "Acceptation de la "+demande, "");
						jourFin--;
					}
				}
			}
			
			if(parseInt(this.response[i].dateDebut[2]+this.response[i].dateDebut[3])==mois && parseInt(this.response[i].dateFin[2]+this.response[i].dateFin[3])!=mois){
				var jourFin=parseInt(this.response[i].dateFin[0]+this.response[i].dateFin[1])-2+jour;
				var jourDebut=parseInt(this.response[i].dateDebut[0]+this.response[i].dateDebut[1])-2+jour;
				if(this.response[i].etat=="refuse"){
					while(jourDebut!=moisNbJours+1){
						ajoutInfo(jourDebut, "bad", "Refus de la "+demande, "");
						jourDebut++;
					}
				} 
				else if(this.response[i].etat=="attente"){
					while(jourDebut!=moisNbJours+1){
						ajoutInfo(jourDebut, "info", "Demande en cours de la "+demande, "");
						jourDebut++;
					}
				}
				else{
					while(jourDebut!=moisNbJours+1){
						ajoutInfo(jourDebut, "fine", "Acceptation de la "+demande, "");
						jourDebut++;
					}
				}
			}
			
			if(parseInt(this.response[i].dateDebut[2]+this.response[i].dateDebut[3])<mois && parseInt(this.response[i].dateFin[2]+this.response[i].dateFin[3])>mois){
				var jourFin=moisNbJours+1-2+jour;
				var jourDebut=1-2+jour;
				if(this.response[i].etat=="refuse"){
					while(jourDebut!=jourFin){
						ajoutInfo(jourDebut, "bad", "Refus de la "+demande, "");
						jourDebut++;
					}
				} 
				else if(this.response[i].etat=="attente"){
					while(jourDebut!=jourFin){
						ajoutInfo(jourDebut, "info", "Demande en cours de la "+demande, "");
						jourDebut++;
					}
				}
				else{
					while(jourDebut!=jourFin){
						ajoutInfo(jourDebut, "fine", "Acceptation de la "+demande, "");
						jourDebut++;
					}
				}
			}
		}
	}
	getEmploye.send();
	
	//demandes de prêt de véhicules
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/vehicules/listDemandesDeVehiculeByidEmploye/"+document.getElementById('employeId').innerText,true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		for (var i=0; i<this.response.length; i++){
			//on affiche que les notif du mois affiché
			var demande = "demande de prêt du véhicule "+this.response[i].vehicules_immatriculation;
			if(parseInt(this.response[i].dateDebut[2]+this.response[i].dateDebut[3])!=mois && parseInt(this.response[i].dateFin[2]+this.response[i].dateFin[3])==mois){
				var jourFin=parseInt(this.response[i].dateFin[0]+this.response[i].dateFin[1])-2+jour;
				if(this.response[i].etat=="refuse"){
					while(jourFin!=-2+jour){
						ajoutInfo(jourFin, "bad", "Refus de la "+demande, "");
						jourFin--;
					}
				} 
				else if(this.response[i].etat=="attente"){
					while(jourFin!=-2+jour){
						ajoutInfo(jourFin, "info", "Demande en cours de la "+demande, "");
						jourFin--;
					}
				}
				else{
					while(jourFin!=-2+jour){
						ajoutInfo(jourFin, "fine", "Acceptation de la "+demande, "");
						jourFin--;
					}
				}
			}
			
			if(parseInt(this.response[i].dateDebut[2]+this.response[i].dateDebut[3])==mois && parseInt(this.response[i].dateFin[2]+this.response[i].dateFin[3])==mois){
				var jourFin=parseInt(this.response[i].dateFin[0]+this.response[i].dateFin[1])-2+jour;
				var jourDebut=parseInt(this.response[i].dateDebut[0]+this.response[i].dateDebut[1])-2+jour;
				if(this.response[i].etat=="refuse"){
					while(jourFin!=jourDebut-1){
						ajoutInfo(jourFin, "bad", "Refus de la "+demande, "");
						jourFin--;
					}
				} 
				else if(this.response[i].etat=="attente"){
					while(jourFin!=jourDebut-1){
						ajoutInfo(jourFin, "info", "Demande en cours de la "+demande, "");
						jourFin--;
					}
				}
				else{
					while(jourFin!=jourDebut-1){
						ajoutInfo(jourFin, "fine", "Acceptation de la "+demande, "");
						jourFin--;
					}
				}
			}
			
			if(parseInt(this.response[i].dateDebut[2]+this.response[i].dateDebut[3])==mois && parseInt(this.response[i].dateFin[2]+this.response[i].dateFin[3])!=mois){
				var jourFin=parseInt(this.response[i].dateFin[0]+this.response[i].dateFin[1])-2+jour;
				var jourDebut=parseInt(this.response[i].dateDebut[0]+this.response[i].dateDebut[1])-2+jour;
				if(this.response[i].etat=="refuse"){
					while(jourDebut!=moisNbJours+1){
						ajoutInfo(jourDebut, "bad", "Refus de la "+demande, "");
						jourDebut++;
					}
				} 
				else if(this.response[i].etat=="attente"){
					while(jourDebut!=moisNbJours+1){
						ajoutInfo(jourDebut, "info", "Demande en cours de la "+demande, "");
						jourDebut++;
					}
				}
				else{
					while(jourDebut!=moisNbJours+1){
						ajoutInfo(jourDebut, "fine", "Acceptation de la "+demande, "");
						jourDebut++;
					}
				}
			}
		}
	}
	getEmploye.send();
}


window.onload = function(){
	getIdVehicule();
	getIdNom();
	addDemandeConge();
	addDemandeVehicule();
    gestionnaireDeMenu(3);
	maillingAnnonce();
	creationTableau();
	compteurInfos();
	disparaitre();
	gestionFooter();
};
