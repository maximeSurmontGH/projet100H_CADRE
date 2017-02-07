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
  //creation des jours de la semaine
  var lundi = {
    jour : "LUNDI",
    nb : 1
  }
  var mardi = {
    jour : "MARDI",
    nb : 1
  }
  var mercredi = {
    jour : "MERCREDI",
    nb : 1
  }
  var jeudi = {
    jour : "JEUDI",
    nb : 1
  }
  var vendredi = {
    jour : "VENDREDI",
    nb : 1
  }
  var samedi = {
    jour : "SAMEDI",
    nb : 1
  }
  var dimanche = {
    jour : "DIMANCHE",
    nb : 1
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
  // crée le caledndrier
  createurTableau(jourDeLaSemaine, mois, jour);
	//changement de mois
	document.getElementById("flecheLeft").onclick=function(){
		if(mois.nb==1) mois = decembre;
		if(mois.nb==2) mois = janvier;
		if (mois.nb==3 && bisextile) mois = fevrier2;
	  if (mois.nb==3 && !bisextile) mois = fevrier;
	  if (mois.nb==4 && bisextile) mois = mars2;
	  if (mois.nb==4 && !bisextile) mois = mars;
		if(mois.nb==5) mois = avril;
		if(mois.nb==6) mois = mai;
		if(mois.nb==7) mois = juin;
		if(mois.nb==8) mois = juillet;
		if(mois.nb==9) mois = aout;
		if(mois.nb==10) mois = septembre;
		if(mois.nb==11) mois = octobre;
		if(mois.nb==12) mois = novembre;
		// suppression de l'ancien mois
		var element = document.getElementById("pourLaSuppression");
		while (element.firstChild) {
  		element.removeChild(element.firstChild);
		}
		//change la date pour la date actuel
	  document.getElementById("choixMoisAnnee").innerHTML=mois.mois+" "+annee;
	  // crée le caledndrier
	  createurTableau(jourDeLaSemaine, mois, jour);
	}
	document.getElementById("flecheRight").onclick=function(){
		if (mois.nb==1 && bisextile) mois = fevrier2;
	  if (mois.nb==1 && !bisextile) mois = fevrier;
	  if (mois.nb==2 && bisextile) mois = mars2 ;
	  if (mois.nb==2 && !bisextile) mois = mars;
		if(mois.nb==3) mois = avril;
		if(mois.nb==4) mois = mai;
		if(mois.nb==5) mois = juin;
		if(mois.nb==6) mois = juillet;
		if(mois.nb==7) mois = aout;
		if(mois.nb==8) mois = septembre;
		if(mois.nb==9) mois = octobre;
		if(mois.nb==10) mois = novembre;
		if(mois.nb==11) mois = decembre;
		if(mois.nb==12) mois = janvier;
		// suppression de l'ancien mois
		var element = document.getElementById("pourLaSuppression");
		while (element.firstChild) {
  		element.removeChild(element.firstChild);
		}
		//change la date pour la date actuel
	  document.getElementById("choixMoisAnnee").innerHTML=mois.mois+" "+annee;
	  // crée le caledndrier
	  createurTableau(jourDeLaSemaine, mois, jour);
	}
}

function createurTableau(jourDeLaSemaine, mois, jour){
    jourDeLaSemaineActuel = jourDeLaSemaine;
    jourActuel = jour%7-jourDeLaSemaine.nb-1; //nous permet de savoir quel jour de la semaine fut le permier jour du mois
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
    //remplir le tableau jusqu'a la fin du mois
    while(jourCumul<=mois.nbJour){
      for(var i=0; i<7; i++){
        var li = document.createElement('li');
        if (jourCumul<=mois.nbJour) li.className = "day";
        else li.className = "day other-mounth";
        var div = document.createElement('div');
        div.className = "date";
        div.innerHTML = jourCumul;
        li.appendChild(div);
        ul.appendChild(li);
        jourCumul++;
      }
    }
    divCalendar.appendChild(ul);
}

function ajoutInfo(nb, notif, message, heure){
  var li = document.getElementsByTagName("li")[nb+6];
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


window.onload = function(){
	maillingAnnonce();
	creationTableau();
  ajoutInfo(25, "info", "Réunion en salle Q13", "15h00 à 16h00");
  ajoutInfo(7, "fine", "Bon retour de vacances", "");
  ajoutInfo(12, "bad", "Délais de livraison chez e fournisseur 'HEI' J-3", "");
  ajoutInfo(15, "bad", "Réunion retour livraison", "18h30 à 19h00");
};
