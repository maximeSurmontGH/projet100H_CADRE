function disparaitre(){
	if (window.matchMedia("(max-width: 650px)").matches){
		document.getElementById("navigation").className="disparaitreAlerte";
		document.getElementById("iconePasla").id="iconeMenu";
		document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
	}
	window.onresize=function(){
  	if (window.matchMedia("(max-width: 650px)").matches){
			document.getElementById("navigation").parentNode.className="disparaitreAlerte";
    	document.getElementById("navigation").className="disparaitreAlerte";
			document.getElementById("iconePasla").id="iconeMenu";
			document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
			ouvrirPetitMenu();
  	}
		else{
			document.getElementById("navigation").style.left=0;
			document.getElementById("navigation").className="col-lg-3 col-md-3 col-sm-3 col-xs-3";
			document.getElementById("section").className="col-lg-8 col-md-8 col-sm-8 col-xs-8";
			document.getElementById("iconeMenu").id="iconePasla";
			document.getElementById("navigation").parentNode.className="";
		}
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
	disparaitre();
	ouvrirPetitMenu ();
};
