// fonction pour demander à remplir le tableau annuaire employe, sera à remplacer par la suite.
function remplissageTableau(){
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78","chloe.pelletier@hei.fr");

	document.getElementById("boutonAdd").onclick=function(){
		var prenom = document.getElementById("nom").value;
		var nom = document.getElementById("prenom").value;
		var poste = document.getElementById("poste").value;
		var numero = document.getElementById("telephone").value;
		var email = document.getElementById("email").value;
		remplisseur(prenom, nom, poste, numero, email);
		document.getElementById("nom").value="";
		document.getElementById("prenom").value="";
		document.getElementById("poste").value="";
		document.getElementById("telephone").value="";
		document.getElementById("email").value="";
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

// fonction pour remplir le tableau 2 en fonction de la personne cherchée.
function remplissageRecherche(){
	var nb = 0;
	document.getElementById("boutonSearch").onclick=function(){

		if (nb>0){
			var element = document.getElementById("tableauDuPersonnel2");
			while (element.firstChild) {
		  	element.removeChild(element.firstChild);
			}

			createurDeNotifications(4, "Employé non trouvé."); //a supprimer
		}

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

		var tr2 = document.createElement('tr');
		var td1_1 = document.createElement('td');
		td1_1.innerHTML = "Maxime";
		var td1_2 = document.createElement('td');
		td1_2.innerHTML = "SURMONT";
		var td1_3 = document.createElement('td');
		td1_3.innerHTML = "Assistant";
		var td1_4 = document.createElement('td');
		td1_4.innerHTML = "06 40 40 04 78";

		var td1_6 = document.createElement('td');
		td1_6.innerHTML = "maxime.surmont@hei.fr";
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


window.onload = function(){
	gestionnaireDeMenu(1);
	remplissageTableau();
	remplissageRecherche();
	disparaitre();
	gestionFooter();
	supprimeurDeNotifications();
	maillingAnnonce();
};
