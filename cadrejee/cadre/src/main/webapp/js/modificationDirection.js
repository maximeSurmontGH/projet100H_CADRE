// fonction pour gérer la ffichage des éléments de la page. (menu)
function gestionnairePage(){
	document.getElementById("boutonAccueil").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonEntreprise").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonPrestations").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonContact").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonRetour").className = "btn btn-primary mesBtns disparaitre";
	document.getElementById("boutonAccueil").onclick=function(){var pageModifiee = "acceuil"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonEntreprise").onclick=function(){ var pageModifiee = "entreprise"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonPrestations").onclick=function(){ var pageModifiee = "prestations"; gestionnairePage2(pageModifiee);}
	document.getElementById("boutonContact").onclick=function(){ var pageModifiee = "contact"; gestionnairePage2(pageModifiee);}
	while(document.getElementById("tableauDesModifications").firstChild) {
  	document.getElementById("tableauDesModifications").removeChild(document.getElementById("tableauDesModifications").firstChild);
	}
}

// fonction pour gérer la ffichage des éléments de la page. (les différentes pages)
function gestionnairePage2(pageModifiee){
	document.getElementById("boutonAccueil").className = "disparaitre";
	document.getElementById("boutonEntreprise").className = "disparaitre";
	document.getElementById("boutonPrestations").className = "disparaitre";
	document.getElementById("boutonContact").className = "disparaitre";
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
	th3.innerHTML = "Envoi";
	tr.appendChild(th3);
	table.appendChild(tr);

	if(pageModifiee=="acceuil"){
		createurDeLigne ("Logo de l'entreprise", "photo", "1");
		createurDeLigne ("Slogan de l'entreprise", "message", "2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/aslogan",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var slogan=this.response.contenuElement;		
			document.getElementsByName("input2")[0].placeholder=slogan;
		}
		getList2.send();
		createurDeLigne ("Photo de l'entreprise", "photo", "3");
		createurDeLigne ("Texte de présentation", "message", "4");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/ades",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var description=this.response.contenuElement;	
			document.getElementsByName("input4")[0].placeholder=description;
		}
		getList2.send();
		
	}
	if(pageModifiee=="entreprise"){
		createurDeLigne ("Photo de l'entreprise", "photo", "1");
		createurDeLigne ("Bref historique de l'entreprise / Partie 1", "message", "2.1");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/histo1",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var histo1=this.response.contenuElement;
			document.getElementsByName("input2.1")[0].placeholder=histo1;
		}
		getList2.send();
		createurDeLigne ("Bref historique de l'entreprise / Partie 2", "message", "2.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/histo2",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var histo2=this.response.contenuElement;	
			document.getElementsByName("input2.2")[0].placeholder=histo2;
		}
		getList2.send();
		createurDeLigne ("Bref historique de l'entreprise / Partie 3", "message", "2.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/histo3",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var histo3=this.response.contenuElement;	
			document.getElementsByName("input2.3")[0].placeholder=histo3;
		}
		getList2.send();
		createurDeLigne ("Bref historique de l'entreprise / Partie 4", "message", "2.4");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/histo4",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var histo4=this.response.contenuElement;	
			document.getElementsByName("input2.4")[0].placeholder=histo4;
		}
		getList2.send();
		createurDeLigne ("Paragraphe 'CADRE ET EDF'", "message", "3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/edf",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var edf=this.response.contenuElement;	
			document.getElementsByName("input3")[0].placeholder=edf;
		}
		getList2.send();
		createurDeLigne ("Photo de l'équipe de PENLY", "photo", "4");
		createurDeLigne ("Photo de l'équipe de PALUEL", "photo", "5");
	}
	if(pageModifiee=="prestations"){
		createurDeLigne ("Photo de la réalisation 1", "photo", "1.1");
		createurDeLigne ("Texte de la réalisation 1 (nom)", "message", "1.2");
		createurDeLigne ("Texte de la réalisation 1 (description)", "message", "1.3");
		
		createurDeLigne ("Photo de la réalisation 2", "photo", "2.1");
		createurDeLigne ("Texte de la réalisation 2 (nom)", "message", "2.1");
		createurDeLigne ("Texte de la réalisation 2 (description)", "message", "2.3");
		
		createurDeLigne ("Photo de la réalisation 3", "photo", "3.1");
		createurDeLigne ("Texte de la réalisation 3 (nom)", "message", "3.2");
		createurDeLigne ("Texte de la réalisation 3 (description)", "message", "3.3");
		
		createurDeLigne ("Photo de la réalisation 4", "photo", "4.1");
		createurDeLigne ("Texte de la réalisation 4 (nom)", "message", "4.2");
		createurDeLigne ("Texte de la réalisation 4 (description)", "message", "4.3");
		
		createurDeLigne ("Photo de la réalisation 5", "photo", "5.1");
		createurDeLigne ("Texte de la réalisation 5 (nom)", "message", "5.2");
		createurDeLigne ("Texte de la réalisation 5 (description)", "message", "5.3");
		
		createurDeLigne ("Photo de la réalisation 6", "photo", "6.1");
		createurDeLigne ("Texte de la réalisation 6 (nom)", "message", "6.2");
		createurDeLigne ("Texte de la réalisation 6 (description)", "message", "6.3");
		
		createurDeLigne ("Photo de la réalisation 7", "photo", "7.1");
		createurDeLigne ("Texte de la réalisation 7 (nom)", "message", "7.2");
		createurDeLigne ("Texte de la réalisation 7 (description)", "message", "7.3");
		
		createurDeLigne ("Photo de la réalisation 8", "photo", "8.1");
		createurDeLigne ("Texte de la réalisation 8 (nom)", "message", "8.2");
		createurDeLigne ("Texte de la réalisation 8 (description)", "message", "8.3");
		
		createurDeLigne ("Photo de la réalisation 9", "photo", "9.1");
		createurDeLigne ("Texte de la réalisation 9 (nom)", "message", "9.2");
		createurDeLigne ("Texte de la réalisation 9 (description)", "message", "9.3");
		
		createurDeLigne ("Photo de la réalisation 10", "photo", "10.1");
		createurDeLigne ("Texte de la réalisation 10 (nom)", "message", "10.2");
		createurDeLigne ("Texte de la réalisation 10 (description)", "message", "10.3");
		
		createurDeLigne ("Photo de la réalisation 11", "photo", "11.1");
		createurDeLigne ("Texte de la réalisation 11 (nom)", "message", "11.2");
		createurDeLigne ("Texte de la réalisation 11 (description)", "message", "11.3");
		
		createurDeLigne ("Texte du paragraphe 'FABRICATION' (séparer chaque section par //)", "message", "7");
		createurDeLigne ("Texte du paragraphe 'INSTALLATION ET MODIFICATION' (séparer chaque section par //)", "message", "8");
		createurDeLigne ("Texte du paragraphe 'ENTRETIEN, MAINTENANCE ET CONTROLE' (séparer chaque section par //)", "message", "9");
	}

	document.getElementById("boutonRetour").onclick=function(){
		gestionnairePage();
	}
	for (var i = 1; i < 10; i++) {
		if (document.getElementById("a"+i) != null){
			document.getElementById("a"+i).onclick=function(){
				createurDeNotifications(1, "Modification effectuée.");
			}
		}
	}
}

// createur de ligne des différents tableaux
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
		textarea.name="input"+num;
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




window.onload = function(){
	
	gestionnaireDeMenu(6);
	maillingAnnonce();
	supprimeurDeNotifications();
	gestionnairePage();
	disparaitre();
	gestionFooter();
};
