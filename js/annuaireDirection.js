function maillingAnnonce(){
	document.getElementById("mailling").onclick=function(){
		var p = document.getElementById("maillingAnnonceNum");
		var img =  document.getElementById("imgAlerte");
		p.className="disparaitreAlerte";
		img.className="disparaitreAlerte";
		}
}
function remplissageTableau(){
	var nb = 0;
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78", "3 rue des coquelicots","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78", "3 rue des coquelicots","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78", "3 rue des coquelicots","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78", "3 rue des coquelicots","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78", "3 rue des coquelicots","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78", "3 rue des coquelicots","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78", "3 rue des coquelicots","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78", "3 rue des coquelicots","chloe.pelletier@hei.fr");
	remplisseur("chloe","PELLETIER","présidente","06 40 40 04 78", "3 rue des coquelicots","chloe.pelletier@hei.fr");
	document.getElementById("boutonAdd").onclick=function(){
		nb+=1;
		if (nb ==1){
			remplisseur("maxime","SURMONT","assistant","06 40 40 04 78", "105 Avenue Robert Descamps","maxime.surmont@hei.fr");
		}
		if (nb == 2){
			document.getElementById("notification").className='alert alert-danger alert-dismissable fade in notification  apparaitreAlerte';
		}
	}
}

function remplisseur(prenom, nom, poste, numero, adresse, email){
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
	var td1_5 = document.createElement('td');
	td1_5.innerHTML = adresse;
	var td1_6 = document.createElement('td');
	td1_6.innerHTML = email;
	td1_6.className="break";
	var td1_7 = document.createElement('td');
	var a1_7_1 = document.createElement('a');
	var a1_7_2 = document.createElement('a');
	a1_7_1.href="#";
	a1_7_2.href="#";
	var span1_7_1 = document.createElement('span');
	var span1_7_2 = document.createElement('span');
	span1_7_1.className="glyphicon glyphicon-minus boutons";
	span1_7_2.className="glyphicon glyphicon-search boutons";
	tr2.appendChild(td1_1);
	tr2.appendChild(td1_2);
	tr2.appendChild(td1_3);
	tr2.appendChild(td1_4);
	tr2.appendChild(td1_5);
	tr2.appendChild(td1_6);
	a1_7_1.appendChild(span1_7_1);
	a1_7_2.appendChild(span1_7_2);
	td1_7.appendChild(a1_7_1);
	td1_7.appendChild(a1_7_2);
	tr2.appendChild(td1_7);
	table.appendChild(tr2);
}

function remplissageRecherche(){
	document.getElementById("boutonSearch").onclick=function(){
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
		var td1_5 = document.createElement('th');
		td1_5.innerHTML = "Adresse";
		var td1_6 = document.createElement('th');
		td1_6.innerHTML = "E-mail";
		td1_6.className="break";
		var td1_7 = document.createElement('th');
		td1_7.innerHTML = "Action";
		tr2.appendChild(td1_1);
		tr2.appendChild(td1_2);
		tr2.appendChild(td1_3);
		tr2.appendChild(td1_4);
		tr2.appendChild(td1_5);
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
		var td1_5 = document.createElement('td');
		td1_5.innerHTML = "105 Avenue Robert Descamps";
		var td1_6 = document.createElement('td');
		td1_6.innerHTML = "maxime.surmont@hei.fr";
		td1_6.className="break";
		var td1_7 = document.createElement('td');
		var a1_7_1 = document.createElement('a');
		var a1_7_2 = document.createElement('a');
		a1_7_1.href="#";
		a1_7_2.href="#";
		var span1_7_1 = document.createElement('span');
		var span1_7_2 = document.createElement('span');
		span1_7_1.className="glyphicon glyphicon-minus boutons";
		span1_7_2.className="glyphicon glyphicon-search boutons";
		tr2.appendChild(td1_1);
		tr2.appendChild(td1_2);
		tr2.appendChild(td1_3);
		tr2.appendChild(td1_4);
		tr2.appendChild(td1_5);
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

function suppressionNotification(){
	document.getElementById("notification").onclick=function(){
		document.getElementById("notification").className='alert alert-danger alert-dismissable fade in notification  disparaitreAlerte';
	}
}




window.onload = function(){
	maillingAnnonce();
	remplissageTableau();
	remplissageRecherche();
	suppressionNotification();
};
