// rempllisseur du tableau des ressources employés.
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
		td1_1.innerHTML = "Nom du fichier";
		var td1_2 = document.createElement('th');
		td1_2.innerHTML = "Taille";
		var td1_3 = document.createElement('th');
		td1_3.innerHTML = "Type";
		var td1_4 = document.createElement('th');
		td1_4.innerHTML = "Corps de métier";
		var td1_5 = document.createElement('th');
		td1_5.innerHTML = "Selection";
		tr1.appendChild(td1_1);
		tr1.appendChild(td1_2);
		tr1.appendChild(td1_3);
		tr1.appendChild(td1_4);
		tr1.appendChild(td1_5);
		table.appendChild(tr1);

		var tr2 = document.createElement('tr');
		var td1_1 = document.createElement('td');
		td1_1.innerHTML = "Fiche de Poste 3";
		var td1_2 = document.createElement('td');
		td1_2.innerHTML = "10 Mo";
		var td1_3 = document.createElement('td');
		td1_3.innerHTML = "Word";
		var td1_4 = document.createElement('td');
		td1_4.innerHTML = "Qualité";

		var td1_4_5 = document.createElement('td');
		var td1_5 = document.createElement('input');
		td1_5.type='checkbox';
		td1_5.name=td1_1.innerHTML;
		td1_4_5.className='selectRessource';
		td1_4_5.appendChild(td1_5);

		tr2.appendChild(td1_1);
		tr2.appendChild(td1_2);
		tr2.appendChild(td1_3);
		tr2.appendChild(td1_4);
		tr2.appendChild(td1_4_5);
		table.appendChild(tr2);

		var formulaire2 = document.getElementById("formulaire2");
		var bouton3 = document.createElement('div');
		bouton3.id='boutonDL';
		var a_bouton3 = document.createElement('a');
		a_bouton3.innerHTML="Télécharger";
		a_bouton3.href='#';
		a_bouton3.id='boutonDL';
		a_bouton3.className='btn btn-primary';
		bouton3.appendChild(a_bouton3);
		formulaire2.appendChild(bouton3);
		disparaitre();
		gestionFooter();
	}
}

window.onload = function(){
	gestionnaireDeMenu(9);
	maillingAnnonce();
	remplissageTableau();
	supprimeurDeNotifications();
	disparaitre();
	gestionFooter();
};
