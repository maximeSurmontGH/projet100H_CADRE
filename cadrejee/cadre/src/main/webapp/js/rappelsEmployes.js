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
    getRappels(mois.nb, 7-jour);
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

//recuperation de la liste de tous les conges de l employe et ajout au calendrier
function getRappels(mois, jour){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/rappels/getRappelByIdEmploye/"+document.getElementById('employeId').innerText,true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		for (var i=0; i<this.response.length; i++){
			//on affiche que les notif du mois affiché
			if(parseInt(this.response[i].dateRappel[2]+this.response[i].dateRappel[3])==mois){
				if(this.response[i].imprt==3){
					  ajoutInfo(parseInt(this.response[i].dateRappel[0]+this.response[i].dateRappel[1])-2+jour, "fine", this.response[i].messageRappel, "");

				}
				else if(this.response[i].imprt==2){
					  ajoutInfo(parseInt(this.response[i].dateRappel[0]+this.response[i].dateRappel[1])-2+jour, "info", this.response[i].messageRappel, "");

				}
				else{
					  ajoutInfo(parseInt(this.response[i].dateRappel[0]+this.response[i].dateRappel[1])-2+jour, "bad", this.response[i].messageRappel, "");
				}
			}
		}
	}
	getEmploye.send();
}


window.onload = function(){
    gestionnaireDeMenu(7);
	maillingAnnonce();
	creationTableau();
	disparaitre();
	gestionFooter();
    supprimeurDeNotifications();
};
