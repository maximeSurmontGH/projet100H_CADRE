//fonction pour remplir le tableau de l annuaire employe
function remplissageTableau(){
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

		var table = document.getElementById("tableauDuPersonnel");

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

		remplisseur("Kahina HASSAM", "Boss", "non disponible", "kahina.hassam@hei.yncrea.fr");
		remplisseur("Chloé PELLETIER", "Fille du patron", "06 14 34 84 99", "chloé.pelletier@hei.fr");
		remplisseur("Maxime SURMONT", "Stagiaire non payé", "06 40 40 04 78", "maxime.surmont@hei.fr");

		disparaitre();
		gestionFooter();
	}
}

// remplisseur de ligne du tableau
function remplisseur(nom, poste, numero, email){
	var table = document.getElementById("tableauDuPersonnel");

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


window.onload = function(){
	gestionnaireDeMenu(2);
	maillingAnnonce();
	remplissageTableau();
	supprimeurDeNotifications();
	disparaitre();
	gestionFooter();
};
