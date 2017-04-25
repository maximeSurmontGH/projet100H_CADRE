// fonctions pour gérer le menu.
function gestionnaireDeMenu(nb){
	if(nb == 1){
		createurDeMenu("modifications", "calendrier", "annuaire", "demandes", "ressources");
	}
	if(nb == 2){
		createurDeMenu("rappels", "calendrier", "annuaire", "demandes", "ressources");
	}
	if(nb == 3){
		createurDeMenu("rappels", "demandes", "calendrier", "annuaire", "ressources");
	}
	if(nb == 4){
		createurDeMenu("modifications", "calendrier", "demandes", "annuaire", "ressources");
	}
	if(nb == 5){
		createurDeMenu("rappels", "calendrier", "demandes", "annuaire", "ressources");
	}
	if(nb == 6){
		createurDeMenu("calendrier", "demandes","modifications", "annuaire", "ressources");
	}
	if(nb == 7){
		createurDeMenu("calendrier", "demandes", "rappels", "annuaire", "ressources");
	}
	if(nb == 8){
		createurDeMenu("modifications", "calendrier", "ressources", "demandes", "annuaire");
	}
	if(nb == 9){
		createurDeMenu("rappels", "calendrier", "ressources", "demandes", "annuaire");
	}
	if(nb == 10){
		createurDeMenu("modifications", "demandes", "calendrier", "annuaire", "ressources");
	}
}

function createurDeMenu(a, b, c, d, e){
	var nav = document.getElementById("navigation");

	var div1 = document.createElement('div');
	div1.className = "row";
	var div1_1 = document.createElement('div');
	div1_1.className = "col-lg-5 col-md-5 col-sm-5 col-xs-5";
	div1_1.id=a;
	var a1_1 = document.createElement('a');
	var img1_1 = document.createElement('img');
	img1_1.src = imgAssocié(a);
	a1_1.appendChild(img1_1);
	a1_1.href = lienAssocié(a);
	div1_1.appendChild(a1_1);
	div1.appendChild(div1_1);
	var div1_2 = document.createElement('div');
	div1_2.className = "col-lg-5 col-md-5 col-sm-5 col-xs-5";
	div1_2.id=b;
	var a1_2 = document.createElement('a');
	a1_2.href = lienAssocié(b);
	var img1_2 = document.createElement('img');
	img1_2.src = imgAssocié(b);
	a1_2.appendChild(img1_2);
	div1_2.appendChild(a1_2);
	div1.appendChild(div1_2);
	nav.appendChild(div1);

	var div2 = document.createElement('div');
	div2.className = "row";
	var div2_1 = document.createElement('div');
	div2_1.className = "col-lg-10 col-md-10 col-sm-10 col-xs-10";
	div2_1.id=c;
	var a2_1 = document.createElement('a');
	a2_1.href = lienAssocié(c);
	var img2_1 = document.createElement('img');
	img2_1.src = imgAssocié(c);
	a2_1.appendChild(img2_1);
	div2_1.appendChild(a2_1);
	div2.appendChild(div2_1);
	nav.appendChild(div2);

	var div3 = document.createElement('div');
	div3.className = "row";
	var div3_1 = document.createElement('div');
	div3_1.className = "col-lg-5 col-md-5 col-sm-5 col-xs-5";
	div3_1.id=d;
	var a3_1 = document.createElement('a');
	a3_1.href = lienAssocié(d);
	var img3_1 = document.createElement('img');
	img3_1.src = imgAssocié(d);
	a3_1.appendChild(img3_1);
	div3_1.appendChild(a3_1);
	div3.appendChild(div3_1);
	var div3_2 = document.createElement('div');
	div3_2.className = "col-lg-5 col-md-5 col-sm-5 col-xs-5";
	div3_2.id=e;
	var a3_2 = document.createElement('a');
	a3_2.href = lienAssocié(e);
	var img3_2 = document.createElement('img');
	img3_2.src = imgAssocié(e);
	a3_2.appendChild(img3_2);
	div3_2.appendChild(a3_2);
	div3.appendChild(div3_2);
	nav.appendChild(div3);
}

function imgAssocié(a){
	if (a=="modifications"){
		return("../img/Modifications.png");
	}
	if (a=="calendrier"){
		return("../img/CalendrierValidites.png");
	}
	if (a=="demandes" ){
		return("../img/Demandes.png");
	}
	if (a=="ressources"){
		return("../img/RessourcePeda.png");
	}
	if (a=="rappels"){
		return("../img/RappelsPerso.png");
	}
	if (a=="annuaire"){
		return("../img/Annuaire.png");
	}
}

function lienAssocié(a){
	if (a=="modifications"){
		return("modification");
	}
	if (a=="calendrier"){
		return("calendrier");
	}
	if (a=="demandes"){
		return("demandes");
	}
	if (a=="ressources"){
		return("ressources");
	}
	if (a=="rappels"){
		return("rappels");
	}
	if (a=="annuaire"){
		return("annuaire");
	}
}

// fonction pour faire disparaitre le menu de gauche lorsque la page est trop petite et faire reaparraitre celui ci si la fentre est assez grande.
function disparaitre(){
	if (window.matchMedia("(max-width: 650px)").matches){
		document.getElementById("navigation").parentNode.className="disparaitre";
		document.getElementById("navigation").className="disparaitre";
		document.getElementById("iconeMenu").className="iconeMenu glyphicon glyphicon-th";
		document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
		ouvrirPetitMenu();
	}
	else{
		document.getElementById("navigation").style.left=0;
		document.getElementById("navigation").className="col-lg-3 col-md-3 col-sm-3 col-xs-3";
		document.getElementById("section").className="col-lg-8 col-md-8 col-sm-8 col-xs-8";
		document.getElementById("iconeMenu").className="disparaitre";
		document.getElementById("navigation").parentNode.className="";
	}
}

// fonction pour ouvrir le menu lorsque l on clique sur l icone voulue.
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
		document.getElementById("navigation").parentNode.className="disparaitre";
	}
}

// fonction pour que le footer soit sois en bas de la page html si celle ci est plus grande que la fenetre sois en bas dela fenetre dans le cas inverse.
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

// lorsque le navigateur est redimensionné, vérifie la fonction disparaitre et la fonction gestion footer.
window.onresize=function(){
	disparaitre();
	gestionFooter();
}

// gestion des annonces de mailling.
function alerteMailling(){
}

function maillingAnnonce(){
}

// gestion des notifications. (creations et suppression);
function supprimeurDeNotifications(){
		if (document.getElementById("notification") != null){
			document.getElementById("notification").onclick=function(){
				DELETE();
			}
		}
}

function DELETE(i){
	var element = document.getElementById("notification").parentNode;
	while (element.firstChild) {
  	element.removeChild(element.firstChild);
	}
	element.parentNode.removeChild(element);
	alerteMailling();
	supprimeurDeNotifications();
}

function createurDeNotifications(lvlAlerte, message){
	if (document.getElementById("notification") != null){
			DELETE();
	}
	var div = document.createElement('div');
	if (lvlAlerte == 1){
		div.className = "alert alert-success alert-dismissable fade in notification";
	}
	if (lvlAlerte == 2){
		div.className = "alert alert-info alert-dismissable fade in notification";
	}
	if (lvlAlerte == 3){
		div.className = "alert alert-warning  alert-dismissable fade in notification";
	}
	if (lvlAlerte == 4){
		div.className = "alert alert-danger alert-dismissable fade in notification";
	}
	var a = document.createElement('a');
	a.className = "close";
	a.datadismiss="alert";
	a.arialabel="close";
	a.innerHTML = "&times;";
	a.id = "notification";
	div.appendChild(a);

	var strong = document.createElement('strong');
	if (lvlAlerte == 1){
		strong.innerHTML = "Succès ! ";
	}
	if (lvlAlerte == 2){
		strong.innerHTML = "Info ! ";
	}
	if (lvlAlerte == 3){
		strong.innerHTML = "Attention ! ";
	}
	if (lvlAlerte == 4){
		strong.innerHTML = "Erreur ! ";
	}
	div.appendChild(strong);
	var span = document.createElement('span');
	span.innerHTML = message;
	div.appendChild(span);
	document.body.appendChild(div);

	supprimeurDeNotifications();
	alerteMailling();
}
