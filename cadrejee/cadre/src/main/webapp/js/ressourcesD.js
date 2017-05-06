//recuperation de la liste de toutes les ressources et remplissage du tableau 1
function getRessourceDirection(){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/ressources/listRessource",true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		for (var i=0; i<this.response.length; i++){
			remplisseur(this.response[i].contenuRessource.split(".")[0] , this.response[i].cheminRessource.split(".")[1], this.response[i].corpsDeMetier, "", this.response[i].idRessource);
		}
	}
	getEmploye.send();
}

// fonction pour ajouter des lignes au tableau.
function remplisseur(nomFichier, Type, Corps, num, idRessource){
	var table = document.getElementById("tableauDuPersonnel"+num);

	var tr2 = document.createElement('tr');
	tr2.id="tr"+idRessource;
	var td1_1 = document.createElement('td');
	td1_1.innerHTML = nomFichier;
	var td1_3 = document.createElement('td');
	td1_3.innerHTML = Type;
	var td1_4 = document.createElement('td');
	td1_4.innerHTML = Corps;
	var td1_7 = document.createElement('td');
	var a1_7_1 = document.createElement('a');
	var a1_7_2 = document.createElement('a');
	a1_7_1.href="#";
	a1_7_1.className="boutonSuppr";
	a1_7_1.id="supr"+idRessource;
	a1_7_2.href="DownloadServlet?fileName="+nomFichier+"."+Type;
	a1_7_2.target="_blank";
	a1_7_2.className="boutonDwl";
	a1_7_2.id="dwl"+idRessource;
	var span1_7_1 = document.createElement('span');
	var span1_7_2 = document.createElement('span');
	span1_7_1.className="glyphicon glyphicon-remove boutons";
	span1_7_2.className="glyphicon glyphicon-download boutons";
	tr2.appendChild(td1_1);
	tr2.appendChild(td1_3);
	tr2.appendChild(td1_4);
	a1_7_1.appendChild(span1_7_1);
	a1_7_2.appendChild(span1_7_2);
	td1_7.appendChild(a1_7_1);
	td1_7.appendChild(a1_7_2);
	tr2.appendChild(td1_7);
	table.appendChild(tr2);
	
	deleteRessource();
}

//fonction pour remplir le tableau 2 de l annuaire employe
function remplissageTableau2(){
	document.getElementById("boutonSearch").onclick=function(){
		var table = document.getElementById("tableauDuPersonnel2");		
		while (table.firstChild) {
			table.removeChild(table.firstChild);
		}
		
		var tr1 = document.createElement('tr');
		var td1_1 = document.createElement('th');
		td1_1.innerHTML = "Nom du fichier";
		var td1_3 = document.createElement('th');
		td1_3.innerHTML = "Type";
		var td1_4 = document.createElement('th');
		td1_4.innerHTML = "Corps de métier";
		var td1_5 = document.createElement('th');
		td1_5.innerHTML = "Action";
		tr1.appendChild(td1_1);
		tr1.appendChild(td1_3);
		tr1.appendChild(td1_4);
		tr1.appendChild(td1_5);
		table.appendChild(tr1);
	
		if(document.getElementById("inputRessources").value!=""){
			getRessourceByNom(document.getElementById("inputRessources").value.toLowerCase());
			
		}
		document.getElementById("inputRessources").value="";
	}
}

//recuperation de la ressource voulue
function getRessourceByNom(poste){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/ressources/ressourceByPosteNom/"+poste,true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		for (var i=0; i<this.response.length; i++){
			remplisseur(this.response[i].contenuRessource.split(".")[0] , this.response[i].cheminRessource.split(".")[1], this.response[i].corpsDeMetier, 2, this.response[i].idRessource);
		}
			
		if(this.response.length==0){
			var element = document.getElementById("tableauDuPersonnel2");
			while (element.firstChild) {
			  	element.removeChild(element.firstChild);
			}
			
			createurDeNotifications(4, "Ressource non trouvé.");
		}
	}
	getEmploye.send();
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
}

//supprime une ressource
function deleteRessource(){
	var nbRessourceSupprimable = document.getElementsByClassName("boutonSuppr");
	var i = 0;
	while(nbRessourceSupprimable[i]!=null){
		nbRessourceSupprimable[i].onclick=function(){
			var idNum = this.id;
			idNum = idNum.substr(4);
			
			var requeteDelete = new XMLHttpRequest();
			requeteDelete.open("DELETE","../cadrews/ressources/"+idNum);
			requeteDelete.responseType = "json";
			requeteDelete.onload = function(){
				createurDeNotifications(1, "La ressource a bien été supprimée.");
				while (document.getElementById("tr"+idNum).firstChild) {
					document.getElementById("tr"+idNum).removeChild(document.getElementById("tr"+idNum).firstChild);
				}				
			};
			requeteDelete.error=function(error){
				createurDeNotifications(4, "Ressource non supprimée.");
				console.error("Erreur de requete ajax de suppression de la ressource : "+error);
			};
			
			requeteDelete.send();
		}
		i++;
	}
}

window.onload = function(){
	gestionnaireDeMenu(8);
	disparaitre();
	gestionFooter();
	getRessourceDirection();
	remplissageDataListe();
	remplissageTableau2();
};
