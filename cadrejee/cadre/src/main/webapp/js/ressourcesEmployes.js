//fonction pour remplir le tableau de l annuaire employe
function remplissageTableau(){
	document.getElementById("boutonSearch").onclick=function(){
		var element = document.getElementById("tableauDuPersonnel");
		while (element.firstChild) {
		  	element.removeChild(element.firstChild);
		}
		
		document.getElementById("boutonDL").className="disparaitre";

		var table = document.getElementById("tableauDuPersonnel");
		var tr1 = document.createElement('tr');
		var td1_1 = document.createElement('th');
		td1_1.innerHTML = "Nom du fichier";
		var td1_3 = document.createElement('th');
		td1_3.innerHTML = "Type";
		var td1_4 = document.createElement('th');
		td1_4.innerHTML = "Corps de métier";
		var td1_5 = document.createElement('th');
		td1_5.innerHTML = "Selection";
		tr1.appendChild(td1_1);
		tr1.appendChild(td1_3);
		tr1.appendChild(td1_4);
		tr1.appendChild(td1_5);
		table.appendChild(tr1);

		disparaitre();
		gestionFooter();	

		
		if(document.getElementById("inputSearch").value==""){
			getRessource();
		}
		else if(document.getElementById("inputSearch").value!=""){
			getRessourceByNom(document.getElementById("inputSearch").value.toLowerCase());
			document.getElementById("inputSearch").value="";
		}
	}
}

// remplisseur de ligne du tableau
function remplisseur(nom, format, poste){
	var table = document.getElementById("tableauDuPersonnel");

	var tr2 = document.createElement('tr');
	var td1_1 = document.createElement('td');
	td1_1.innerHTML = nom;
	var td1_3 = document.createElement('td');
	td1_3.innerHTML = format;
	var td1_4 = document.createElement('td');
	td1_4.innerHTML = poste;

	var td1_4_5 = document.createElement('td');
	var td1_5 = document.createElement('input');
	td1_5.type='checkbox';
	td1_5.name=td1_1.innerHTML;
	td1_4_5.className='selectRessource';
	td1_4_5.appendChild(td1_5);

	tr2.appendChild(td1_1);
	tr2.appendChild(td1_3);
	tr2.appendChild(td1_4);
	tr2.appendChild(td1_4_5);
	table.appendChild(tr2);
}

// recuperation de la liste de toutes les ressources
function getRessource(){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/ressources/listRessource",true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		for (var i=0; i<this.response.length; i++){
			var taille=this.response[i].cheminRessource.length-3;
			remplisseur(this.response[i].contenuRessource , this.response[i].cheminRessource[taille]+this.response[i].cheminRessource[taille+1]+this.response[i].cheminRessource[taille+2], this.response[i].corpsDeMetier);
		}
		document.getElementById("boutonDL").className="apparaitre";
	}
	createurDeNotifications(2, "Affichage de tout l'anuaire par défaut");
	getEmploye.send();
	
	remplissageTableau();
}

// recuperation de la ressource voulue
function getRessourceByNom(poste){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/ressources/ressourceByPosteNom/"+poste,true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		for (var i=0; i<this.response.length; i++){
			var taille=this.response[i].cheminRessource.length-3;
			remplisseur(this.response[i].contenuRessource , this.response[i].cheminRessource[taille]+this.response[i].cheminRessource[taille+1]+this.response[i].cheminRessource[taille+2], this.response[i].corpsDeMetier);
		}
		
		document.getElementById("boutonDL").className="apparaitre";
	
		if(this.response.length==0){
			var element = document.getElementById("tableauDuPersonnel");
			while (element.firstChild) {
			  	element.removeChild(element.firstChild);
			}
			document.getElementById("boutonDL").className="disparaitre";
			
			createurDeNotifications(4, "Ressource non trouvé.");
		}
	}
	getEmploye.send();
	
	remplissageTableau();
}

//remplis la dataliste avec les choix existant dans la BDD
function remplissageDataListe(){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/ressources/listRessource",true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		var dataliste = document.getElementById("lstRessources");
		for (var i=0; i<this.response.length; i++){
			var option = document.createElement('option');
			option.value=this.response[i].contenuRessource;
			dataliste.appendChild(option);
		}
	}
	getEmploye.send();
	
	remplissageTableau();
}

window.onload = function(){
	gestionnaireDeMenu(9);
	maillingAnnonce();
	remplissageTableau();
	supprimeurDeNotifications();
	disparaitre();
	gestionFooter();
	remplissageDataListe();
};
