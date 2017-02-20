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
}

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

function compteurInfos(){
	document.getElementById("boutonSearch3").onclick=function(){
		document.getElementById("messageCompteur").innerHTML = "Vous en etes à 6 jours de congés payés";
		document.getElementById("messageCompteur").className = "alert alert-info alert-dismissable"
	}
}


window.onload = function(){
	maillingAnnonce();
	creationTableau();
	ajoutInfo(20, "inProcess", "Demande de congés payé", "");
	ajoutInfo(21, "inProcess", "Demande de congés payé", "");
	ajoutInfo(22, "inProcess", "Demande de congés payé", "");
	ajoutInfo(23, "inProcess", "Demande de congés payé", "");
	ajoutInfo(24, "inProcess", "Demande de congés payé", "");
	ajoutInfo(25, "inProcess", "Demande de congés payé", "");
	ajoutInfo(26, "inProcess", "Demande de congés payé", "");
  ajoutInfo(7, "bad", "Refus de prêt du véhicule HG-379", "");
	ajoutInfo(25, "fine", "Acceptation du prêt du véhicule HG-379", "");
	ajoutInfo(26, "fine", "Acceptation du prêt du véhicule HG-379", "");
	compteurInfos();
	disparaitre();
	gestionFooter();
};
