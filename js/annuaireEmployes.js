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
	document.getElementById("boutonSearch").onclick=function(){
		nb+=1;
		if (nb ==1){
			var table = document.getElementById("tableauDuPersonnel");

			var tr1 = document.createElement('tr');
			var td1_1 = document.createElement('th');
			td1_1.innerHTML = "Nom Prénom";
			var td1_2 = document.createElement('th');
			td1_2.innerHTML = "Poste";
			var td1_3 = document.createElement('th');
			td1_3.innerHTML = "Tel";
			var td1_4 = document.createElement('th');
			td1_4.innerHTML = "Mail";
			tr1.appendChild(td1_1);
			tr1.appendChild(td1_2);
			tr1.appendChild(td1_3);
			tr1.appendChild(td1_4);
			table.appendChild(tr1);

			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('td');
			td1_1.innerHTML = "Kahina HASSAM";
			var td1_2 = document.createElement('td');
			td1_2.innerHTML = "Boss";
			var td1_3 = document.createElement('td');
			td1_3.innerHTML = "non disponible";
			var td1_4 = document.createElement('td');
			td1_4.innerHTML = "kahina.hassam@hei.yncrea.fr";
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			table.appendChild(tr2);

			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('td');
			td1_1.innerHTML = "Chloé PELLETIER";
			var td1_2 = document.createElement('td');
			td1_2.innerHTML = "Fille du patron";
			var td1_3 = document.createElement('td');
			td1_3.innerHTML = "06 14 34 84 99";
			var td1_4 = document.createElement('td');
			td1_4.innerHTML = "chloé.pelletier@hei.fr";
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			table.appendChild(tr2);

			var tr2 = document.createElement('tr');
			var td1_1 = document.createElement('td');
			td1_1.innerHTML = "Maxime SURMONT";
			var td1_2 = document.createElement('td');
			td1_2.innerHTML = "Stagiaire non payé";
			var td1_3 = document.createElement('td');
			td1_3.innerHTML = "06 40 40 04 78";
			var td1_4 = document.createElement('td');
			td1_4.innerHTML = "maxime.surmont@hei.fr";
			tr2.appendChild(td1_1);
			tr2.appendChild(td1_2);
			tr2.appendChild(td1_3);
			tr2.appendChild(td1_4);
			table.appendChild(tr2);
		}
		if (nb == 2){
			document.getElementById("notification").className='alert alert-danger alert-dismissable fade in notification  apparaitreAlerte';
		}
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
	suppressionNotification();
};
