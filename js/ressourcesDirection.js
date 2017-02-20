function disparaitre(){
	if (window.matchMedia("(max-width: 650px)").matches){
		document.getElementById("navigation").className="disparaitreAlerte";
		document.getElementById("iconeMenu").className="iconeMenu glyphicon glyphicon-th";
		document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
		ouvrirPetitMenu();
	}
}

function ouvrirPetitMenu (){
	document.getElementById("iconeMenu").onclick=function(){
		var width = window.innerWidth;
		if (width>500){
			var marginLeft = window.innerWidth*40/100;
		}
		else if (width>350){
			var marginLeft = window.innerWidth*30/100;
		}
		else if (width>200){
			var marginLeft = window.innerWidth*20/100;
		}
		document.getElementById("navigation").className="petitMenu";
		document.getElementById("navigation").style.left=marginLeft+"px";
		document.getElementById("navigation").parentNode.className="opaque";
	}
	document.getElementById("navigation").parentNode.onclick=function(){
		document.getElementById("navigation").parentNode.className="disparaitreAlerte";
	}
}

function gestionFooter(){
	var heightWindow = window.innerHeight;
	var heightSection = document.getElementById("section");
	var heightNavigation = document.getElementById("navigation");
	var heightSection2 = parseInt(getComputedStyle(heightSection).height, 10);
	var heightNavigation2 = parseInt(getComputedStyle(heightNavigation).height, 10);
  heightNavigation2 += 90;
	if (heightNavigation2>heightSection2){
		var res = heightWindow - heightNavigation2 - 70;
	}
	else{
		var res = heightWindow - heightSection2 - 70;
	}
	if (res>0){
		document.getElementById("footer").style.top=res+"px";
	}
	else{
		document.getElementById("footer").style.top=0;
	}
}

window.onresize=function(){
	if (window.matchMedia("(max-width: 650px)").matches){
		document.getElementById("navigation").parentNode.className="disparaitreAlerte";
		document.getElementById("navigation").className="disparaitreAlerte";
		document.getElementById("iconeMenu").className="iconeMenu glyphicon glyphicon-th";
		document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
		ouvrirPetitMenu();
	}
	else{
		document.getElementById("navigation").style.left=0;
		document.getElementById("navigation").className="col-lg-3 col-md-3 col-sm-3 col-xs-3";
		document.getElementById("section").className="col-lg-8 col-md-8 col-sm-8 col-xs-8";
		document.getElementById("iconeMenu").className="disparaitreAlerte";
		document.getElementById("navigation").parentNode.className="";
	}
	var heightWindow = window.innerHeight;
	var heightSection = document.getElementById("section");
	var heightNavigation = document.getElementById("navigation");
	var heightSection2 = parseInt(getComputedStyle(heightSection).height, 10);
	var heightNavigation2 = parseInt(getComputedStyle(heightNavigation).height, 10);
	heightNavigation2 += 90;
	if (heightNavigation2>heightSection2){
		var res = heightWindow - heightNavigation2 - 70;
	}
	else{
		var res = heightWindow - heightSection2 - 70;
	}
	if (res>0){
		document.getElementById("footer").style.top=res+"px";
	}
	else{
		document.getElementById("footer").style.top=0;
	}
}

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
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
	remplisseur("Fiche de poste VERNISSAGE","10 MO","JPEG","Ouvrier");
}

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

function remplissageRecherche(){
	nb=0;
	document.getElementById("boutonSearch").onclick=function(){
		if(nb==0){
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
	remplissageRecherche();
	suppressionNotification();
	disparaitre();
	gestionFooter();
};
