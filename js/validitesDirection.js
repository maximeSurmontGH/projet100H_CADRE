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
	document.getElementById("boutonSearch2").onclick=function(){
		document.getElementById("notification").className='alert alert-danger alert-dismissable fade in notification  apparaitreAlerte';
	}
}

function suppressionNotification(){
	document.getElementById("notification").onclick=function(){
		document.getElementById("notification").className='alert alert-danger alert-dismissable fade in notification  disparaitreAlerte';
	}
}

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
	maillingAnnonce();
	remplissageRecherche();
	suppressionNotification();
	remplissageJMA();
	disparaitre();
	gestionFooter();
};
