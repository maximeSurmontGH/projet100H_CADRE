//fonction pour remplir le tableau de l annuaire employe
function remplissageTableau(){
	document.getElementById("boutonSearch").onclick=function(){
		var element = document.getElementById("tableauDuPersonnel");
		while (element.firstChild) {
		  	element.removeChild(element.firstChild);
		}

		var table = document.getElementById("tableauDuPersonnel");
		table.className="disparaitre";
		var tr1 = document.createElement('tr');
		var td1_1 = document.createElement('th');
		td1_1.innerHTML = "Nom Prénom";
		var td1_2 = document.createElement('th');
		td1_2.innerHTML = "Poste";
		var td1_3 = document.createElement('th');
		td1_3.innerHTML = "Téléphone";
		var td1_4 = document.createElement('th');
		td1_4.innerHTML = "Mail";
		tr1.appendChild(td1_1);
		tr1.appendChild(td1_2);
		tr1.appendChild(td1_3);
		tr1.appendChild(td1_4);
		table.appendChild(tr1);
		

		disparaitre();
		gestionFooter();	
		if(document.getElementById("inputSearch").value==""){
			table.className="";
			getAnnuaireEmploye();
		}
		else if(document.getElementById("inputSearch").value!=""){
			getAnnuaireEmployePoste(document.getElementById("inputSearch").value.toLowerCase());
			document.getElementById("inputSearch").value="";
		}
	}
}

// remplisseur de ligne du tableau
function remplisseur(nom, poste, numero, email){
	var table = document.getElementById("tableauDuPersonnel");
	var occurence = 0;
	var elements = table.childNodes;
	for (var i = 0; i <elements.length; i++) {
		var elements2 = elements[i].childNodes;
		if(elements2[0].innerText==nom){
			if(elements2[1].innerText==poste){
				if(elements2[2].innerText==numero){
					if(elements2[3].innerText==email){
						occurence++;
					}
				}
			}
		}
	}
	
	if(occurence==0){
		var tr2 = document.createElement('tr');
		var td1_1 = document.createElement('td');
		td1_1.innerHTML = nom;
		var td1_2 = document.createElement('td');
		td1_2.innerHTML = poste;
		var td1_3 = document.createElement('td');
		td1_3.innerHTML = numero;
		var td1_4 = document.createElement('td');
		td1_4.innerHTML = email;
		tr2.appendChild(td1_1);
		tr2.appendChild(td1_2);
		tr2.appendChild(td1_3);
		tr2.appendChild(td1_4);
		table.appendChild(tr2);
	}
}

// recuperation de la liste de tous les employes
function getAnnuaireEmploye(){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/employes/listIdEmploye",true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		for (var i=0; i<this.response.length; i++){
			remplisseur(this.response[i].nomEmploye+" "+this.response[i].prenomEmploye, this.response[i].poste, this.response[i].telephone, this.response[i].email);
		}
	}
	createurDeNotifications(2, "Affichage de tout l'anuaire par défaut");
	getEmploye.send();
	remplissageTableau();
}

// recuperation de l employe ou poste voulu
function getAnnuaireEmployePoste(poste){
	var element = poste.split(" ");
	var continu = 1;
	for(i=0;i<element.length;i++){
		var getEmploye = new XMLHttpRequest();
		getEmploye.open("GET","../cadrews/employes/employeByPosteNom/"+element[i],true, null, null);
		getEmploye.responseType="json";
		
		getEmploye.onload=function(){
			if(this.response.length!=0 && continu==1){
				var table = document.getElementById("tableauDuPersonnel");
				table.className="";
				for (var i=0; i<this.response.length; i++){
					remplisseur(this.response[i].nomEmploye+" "+this.response[i].prenomEmploye, this.response[i].poste, this.response[i].telephone, this.response[i].email);
				}
			}
			else{
				var element = document.getElementById("tableauDuPersonnel");
				while (element.firstChild) {
				  	element.removeChild(element.firstChild);
				}
				createurDeNotifications(4, "Poste ou nom non trouvé.");
				continu=0;
			}
		}
		getEmploye.send();
	}
	remplissageTableau();
}

//remplis la dataliste avec les choix existant dans la BDD
function remplissageDataListe(){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/employes/listIdEmploye",true, null, null);
	getEmploye.responseType="json";
	
	getEmploye.onload=function(){
		var dataliste = document.getElementById("lstAnnuaires");
		for (var i=0; i<this.response.length; i++){
			var option = document.createElement('option');
			option.value=this.response[i].nomEmploye+" "+this.response[i].prenomEmploye;
			dataliste.appendChild(option);
		}
	}
	getEmploye.send();
	
	remplissageTableau();
}


window.onload = function(){
	gestionnaireDeMenu(2);
	maillingAnnonce();
	remplissageTableau();
	supprimeurDeNotifications();
	disparaitre();
	gestionFooter();
	remplissageDataListe();
};
