// fonction de remplissage, sera supprimée ou modifiée plus tard.
function remplissageTableau(){
	var nb = 0;
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
}

// fonction pour ajouter des lignes au tableau.
function remplisseur(nomFichier, Taille, Type, Corps){
	var table = document.getElementById("tableauDuPersonnel");

	var tr2 = document.createElement('tr');
	var td1_1 = document.createElement('td');
	td1_1.innerHTML = nomFichier;
	var td1_2 = document.createElement('td');
	td1_2.innerHTML = Taille;
	var td1_3 = document.createElement('td');
	td1_3.innerHTML = Type;
	var td1_4 = document.createElement('td');
	td1_4.innerHTML = Corps;
	var td1_7 = document.createElement('td');
	var a1_7_1 = document.createElement('a');
	var a1_7_2 = document.createElement('a');
	a1_7_1.href="#";
	a1_7_2.href="#";
	var span1_7_1 = document.createElement('span');
	var span1_7_2 = document.createElement('span');
	span1_7_1.className="glyphicon glyphicon-minus boutons";
	span1_7_2.className="glyphicon glyphicon-download-alt boutons";
	tr2.appendChild(td1_1);
	tr2.appendChild(td1_2);
	tr2.appendChild(td1_3);
	tr2.appendChild(td1_4);
	a1_7_1.appendChild(span1_7_1);
	a1_7_2.appendChild(span1_7_2);
	td1_7.appendChild(a1_7_1);
	td1_7.appendChild(a1_7_2);
	tr2.appendChild(td1_7);
	table.appendChild(tr2);
}

// fonction pour remplir le tableau de recherche
function remplissageRecherche(){
	nb=0;
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
		td1_1.innerHTML = "Nom du Fichier";
		var td1_2 = document.createElement('th');
		td1_2.innerHTML = "Taille";
		var td1_3 = document.createElement('th');
		td1_3.innerHTML = "Type";
		var td1_4 = document.createElement('th');
		td1_4.innerHTML = "Corps de métier";
		var td1_7 = document.createElement('th');
		td1_7.innerHTML = "Action";
		tr2.appendChild(td1_1);
		tr2.appendChild(td1_2);
		tr2.appendChild(td1_3);
		tr2.appendChild(td1_4);
		tr2.appendChild(td1_7);
		table.appendChild(tr2);

		var tr2 = document.createElement('tr');
		var td1_1 = document.createElement('td');
		td1_1.innerHTML = "Fiche de poste VERNISSAGE";
		var td1_2 = document.createElement('td');
		td1_2.innerHTML = "10 MO";
		var td1_3 = document.createElement('td');
		td1_3.innerHTML = "JPEG";
		var td1_4 = document.createElement('td');
		td1_4.innerHTML = "Ouvrier";
		var td1_7 = document.createElement('td');
		var a1_7_1 = document.createElement('a');
		var a1_7_2 = document.createElement('a');
		a1_7_1.href="#";
		a1_7_2.href="#";
		var span1_7_1 = document.createElement('span');
		var span1_7_2 = document.createElement('span');
		span1_7_1.className="glyphicon glyphicon-minus boutons";
		span1_7_2.className="glyphicon glyphicon-download-alt boutons";
		tr2.appendChild(td1_1);
		tr2.appendChild(td1_2);
		tr2.appendChild(td1_3);
		tr2.appendChild(td1_4);
		a1_7_1.appendChild(span1_7_1);
		a1_7_2.appendChild(span1_7_2);
		td1_7.appendChild(a1_7_1);
		td1_7.appendChild(a1_7_2);
		tr2.appendChild(td1_7);
		table.appendChild(tr2);
		table.appendChild(tr2);
		disparaitre();
		gestionFooter();
	}
}


window.onload = function(){
	gestionnaireDeMenu(8);
	maillingAnnonce();
	remplissageTableau();
	remplissageRecherche();
	supprimeurDeNotifications();
	disparaitre();
	gestionFooter();
};
