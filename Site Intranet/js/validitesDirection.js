// remplisseur du tableau des validités.
function remplissageRecherche(){
	var nb=0;
	document.getElementById("boutonSearch1").onclick=function(){
		if(nb==0){
			nb++;
			var div = document.getElementById("tableauDesValidites1");
			var tab = document.createElement('table')
			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('th');
			td1_1.innerHTML = "Type de la validité";
			var td1_2 = document.createElement('th');
			td1_2.innerHTML = "Nom et prénom de l'employé";
			var td1_3 = document.createElement('th');
			td1_3.innerHTML = "Date de début";
			var td1_4 = document.createElement('th');
			td1_4.innerHTML = "Date de fin";
			var td1_7 = document.createElement('th');
			td1_7.innerHTML = "Valide ?";
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			tr2.appendChild(td1_7);
			tab.appendChild(tr2);

			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('td');
			td1_1.innerHTML = "Accès à la centrale de Paluel";
			var td1_2 = document.createElement('td');
			td1_2.innerHTML = "Jean DUPONT";
			var td1_3 = document.createElement('td');
			td1_3.innerHTML = "13/05/2014";
			var td1_4 = document.createElement('td');
			td1_4.innerHTML = "13/05/2017";
			var td1_7 = document.createElement('td');
			var span1_7 = document.createElement('span');
			span1_7.className="glyphicon glyphicon-ok";
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			td1_7.appendChild(span1_7);
			tr2.appendChild(td1_7);
			tab.appendChild(tr2);
			tab.appendChild(tr2);
			div.appendChild(tab);

			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('td');
			td1_1.innerHTML = "Accès à la centrale de Paluel";
			var td1_2 = document.createElement('td');
			td1_2.innerHTML = "Jean DUPONT";
			var td1_3 = document.createElement('td');
			td1_3.innerHTML = "19/06/2012";
			var td1_4 = document.createElement('td');
			td1_4.innerHTML = "19/06/2014";
			var td1_7 = document.createElement('td');
			var span1_7 = document.createElement('span');
			span1_7.className="glyphicon glyphicon-remove";
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			td1_7.appendChild(span1_7);
			tr2.appendChild(td1_7);
			tab.appendChild(tr2);
			tab.appendChild(tr2);
			div.appendChild(tab);

			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('td');
			td1_1.innerHTML = "Accès à la centrale de Penly";
			var td1_2 = document.createElement('td');
			td1_2.innerHTML = "Jean DUPONT";
			var td1_3 = document.createElement('td');
			td1_3.innerHTML = "05/12/2015";
			var td1_4 = document.createElement('td');
			td1_4.innerHTML = "05/12/2016";
			var td1_7 = document.createElement('td');
			var span1_7 = document.createElement('span');
			span1_7.className="glyphicon glyphicon-remove";
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			td1_7.appendChild(span1_7);
			tr2.appendChild(td1_7);
			tab.appendChild(tr2);
			tab.appendChild(tr2);
			div.appendChild(tab);
		}
	}
}

// pour générer les jours mois années des balises selection.
function remplissageJMA(){
	var sel1_2 = document.getElementById('JoursF');
	for(var i = 1; i<32; i++){
		var J = document.createElement('option');
		J.innerHTML=i;
		sel1_2.appendChild(J);
	}
	var sel1_1 = document.getElementById('JoursD');
	for(var i = 1; i<32; i++){
		var J = document.createElement('option');
		J.innerHTML=i;
		sel1_1.appendChild(J);
	}
	var sel2_1 = document.getElementById('MoisD');
	var M = document.createElement('option'); M.innerHTML="janvier"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="février"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="mars"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="avril"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="mai"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="juin"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="juillet"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="aout"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="septembre"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="octobre"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="novembre"; sel2_1.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="decembre"; sel2_1.appendChild(M);
	var sel2_2 = document.getElementById('MoisF');
	var M = document.createElement('option'); M.innerHTML="janvier"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="février"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="mars"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="avril"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="mai"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="juin"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="juillet"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="aout"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="septembre"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="octobre"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="novembre"; sel2_2.appendChild(M);
	var M = document.createElement('option'); M.innerHTML="decembre"; sel2_2.appendChild(M);
	var sel3_1 = document.getElementById('AnneesD');
	for(var i = 2030; i>2000; i--){
		var A = document.createElement('option');
		A.innerHTML=i;
		sel3_1.appendChild(A);
	}
	var sel3_2 = document.getElementById('AnneesF');
	for(var i = 2030; i>2000; i--){
		var A = document.createElement('option');
		A.innerHTML=i;
		sel3_2.appendChild(A);
	}
}


window.onload = function(){
	gestionnaireDeMenu(10);
	maillingAnnonce();
	remplissageRecherche();
	supprimeurDeNotifications();
	remplissageJMA();
	disparaitre();
	gestionFooter();
};
