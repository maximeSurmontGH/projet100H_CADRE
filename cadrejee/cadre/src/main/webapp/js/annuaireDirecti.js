// fonction pour demander à remplir le tableau annuaire employe, sera à remplacer par la suite.
function remplissageTableau(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","../cadrews/employes/listIdEmploye",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		for (var i=0; i<this.response.length; i++){
			remplisseur(this.response[i].prenomEmploye,this.response[i].nomEmploye,this.response[i].poste, this.response[i].telephone,this.response[i].email);
		}
	}
	getList2.send();
	
	document.getElementById("boutonAdd").onclick=function(){
		var requetePostReponse = new XMLHttpRequest();
		requetePostReponse.open("POST","../cadrews/validites");
		requetePostReponse.responseType = "json";
		
		var prenom = document.getElementById("prenom").value;
		var nom = document.getElementById("nom").value;
		var poste = document.getElementById("poste").value;
		var numero = document.getElementById("telephone").value;
		var email = document.getElementById("email").value;
		remplisseur(prenom, nom, poste, numero, email);
		document.getElementById("nom").value="";
		document.getElementById("prenom").value="";
		document.getElementById("poste").value="";
		document.getElementById("telephone").value="";
		document.getElementById("email").value="";
		requetePostReponse.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		requetePostReponse.send("nomEmploye="+nom+"&prenomEmploye="+prenom+"&telephone="+telephone+"&poste="+poste+"&email="+email);
		createurDeNotifications(1, "Employé bien ajouté à la BDD.");
	}
}

//fonction pour ajouter une ligne au tableau1.
function remplisseur(prenom, nom, poste, numero, email){
	var table = document.getElementById("tableauDuPersonnel");

	var tr2 = document.createElement('tr');
	var td1_1 = document.createElement('td');
	td1_1.innerHTML = prenom;
	var td1_2 = document.createElement('td');
	td1_2.innerHTML = nom;
	var td1_3 = document.createElement('td');
	td1_3.innerHTML = poste;
	var td1_4 = document.createElement('td');
	td1_4.innerHTML = numero;

	var td1_6 = document.createElement('td');
	td1_6.innerHTML = email;
	var td1_7 = document.createElement('td');
	var a1_7_1 = document.createElement('a');
	var a1_7_2 = document.createElement('a');
	a1_7_1.href="#";
	a1_7_2.href="#";
	var span1_7_1 = document.createElement('span');
	var span1_7_2 = document.createElement('span');
	span1_7_1.className="glyphicon glyphicon-remove boutons";
	span1_7_2.className="glyphicon glyphicon-pencil boutons";
	tr2.appendChild(td1_1);
	tr2.appendChild(td1_2);
	tr2.appendChild(td1_3);
	tr2.appendChild(td1_4);
	tr2.appendChild(td1_6);
	a1_7_1.appendChild(span1_7_1);
	a1_7_2.appendChild(span1_7_2);
	td1_7.appendChild(a1_7_1);
	td1_7.appendChild(a1_7_2);
	tr2.appendChild(td1_7);
	table.appendChild(tr2);
}

// fonction pour la recherche 
function remplissageRecherchebis(){
	var nb=0;
	document.getElementById("boutonSearch").onclick=function(){
		while(document.getElementById("tableauDuPersonnel2").firstChild){
			document.getElementById("tableauDuPersonnel2").removeChild(document.getElementById("tableauDuPersonnel2").firstChild);
		}
		if(nb==0){
			var champs=document.getElementById("inputSearch").value;
			document.getElementById("inputSearch").value="";
			champs=champs.toLowerCase();
			var getList2 = new XMLHttpRequest();
			getList2.open("GET","../cadrews/employes/employeByPosteNom/"+champs,true, null, null);
			getList2.responseType="json";
			nb++;
			var table = document.getElementById("tableauDuPersonnel2");
			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('th');
			td1_1.innerHTML = "Prénom";
			var td1_2 = document.createElement('th');
			td1_2.innerHTML = "Nom";
			var td1_3 = document.createElement('th');
			td1_3.innerHTML = "Poste";
			var td1_4 = document.createElement('th');
			td1_4.innerHTML = "Numéro";

			var td1_6 = document.createElement('th');
			td1_6.innerHTML = "E-mail";
			var td1_7 = document.createElement('th');
			td1_7.innerHTML = "Action";
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			tr2.appendChild(td1_6);
			tr2.appendChild(td1_7);
			table.appendChild(tr2);
			
			getList2.onload=function(){
				for (var i=0; i<this.response.length; i++){
					var tr2 = document.createElement('tr');
					var td1_1 = document.createElement('td');
					td1_1.innerHTML = this.response[i].prenomEmploye;
					var td1_2 = document.createElement('td');
					td1_2.innerHTML = this.response[i].nomEmploye;
					var td1_3 = document.createElement('td');
					td1_3.innerHTML = this.response[i].poste;
					var td1_4 = document.createElement('td');
					td1_4.innerHTML =this.response[i].telephone;
			
					var td1_6 = document.createElement('td');
					td1_6.innerHTML = this.response[i].email;
					var td1_7 = document.createElement('td');
					var a1_7_1 = document.createElement('a');
					var a1_7_2 = document.createElement('a');
					a1_7_1.href="#";
					a1_7_2.href="#";
					var span1_7_1 = document.createElement('span');
					var span1_7_2 = document.createElement('span');
					span1_7_1.className="glyphicon glyphicon-minus boutons";
					span1_7_2.className="glyphicon glyphicon-pencil boutons";
					tr2.appendChild(td1_1);
					tr2.appendChild(td1_2);
					tr2.appendChild(td1_3);
					tr2.appendChild(td1_4);
					tr2.appendChild(td1_6);
					a1_7_1.appendChild(span1_7_1);
					a1_7_2.appendChild(span1_7_2);
					td1_7.appendChild(a1_7_1);
					td1_7.appendChild(a1_7_2);
					tr2.appendChild(td1_7);
					table.appendChild(tr2);
					table.appendChild(tr2);
					
					
				}
			}
			getList2.send();
			

		}
		
		remplissageRecherchebis();
	}
}
//remplis la dataliste avec les choix existant dans la BDD
function remplissageDataListe(){
	var getEmploye = new XMLHttpRequest();
	getEmploye.open("GET","../cadrews/employes/listIdEmploye",true, null, null);
	getEmploye.responseType="json";
	var dataliste = document.getElementById("lstAnnuaires");
	getEmploye.onload=function(){
		
		for (var i=0; i<this.response.length; i++){
			var option = document.createElement('option');
			option.value=this.response[i].nomEmploye;
			dataliste.appendChild(option);
		}
	}
	getEmploye.send();
	var getPoste = new XMLHttpRequest();
	getPoste.open("GET","../cadrews/employes/listIdEmploye",true, null, null);
	getPoste.responseType="json";
	getPoste.onload=function(){
		for (var i=0; i<this.response.length; i++){
			var option = document.createElement('option');
			option.value=this.response[i].poste;
			dataliste.appendChild(option);
		}
	}
	getPoste.send();
}


window.onload = function(){
	remplissageRecherchebis();
	gestionnaireDeMenu(1);
	remplissageTableau();
	disparaitre();
	gestionFooter();
	supprimeurDeNotifications();
	maillingAnnonce();
	remplissageDataListe();
};
