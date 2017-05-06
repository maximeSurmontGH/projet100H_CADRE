// fonction pour gérer la ffichage des éléments de la page. (menu)
function gestionnairePage(){
	document.getElementById("boutonAccueil").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonEntreprise").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonPrestations").className = "btn btn-primary mesBtns apparaitre";
	document.getElementById("boutonRetour").className = "btn btn-primary mesBtns disparaitre";
	document.getElementById("boutonAccueil").onclick=function(){var pageModifiee = "acceuil"; gestionnairePage2(pageModifiee);modifElement(pageModifiee);}
	document.getElementById("boutonEntreprise").onclick=function(){ var pageModifiee = "entreprise"; gestionnairePage2(pageModifiee);modifElement(pageModifiee);}
	document.getElementById("boutonPrestations").onclick=function(){ var pageModifiee = "prestations"; gestionnairePage2(pageModifiee);modifElement(pageModifiee);}
	while(document.getElementById("tableauDesModifications").firstChild) {
  	document.getElementById("tableauDesModifications").removeChild(document.getElementById("tableauDesModifications").firstChild);
	}
}

// fonction pour gérer l affichage des éléments de la page. (les différentes pages)
function gestionnairePage2(pageModifiee){
	document.getElementById("boutonAccueil").className = "disparaitre";
	document.getElementById("boutonEntreprise").className = "disparaitre";
	document.getElementById("boutonPrestations").className = "disparaitre";
	document.getElementById("boutonRetour").className = "btn btn-primary btn-lg";

	var table = document.getElementById("tableauDesModifications");
	var tr = document.createElement('tr');
	var th1 = document.createElement('th');
	th1.innerHTML = "Element de la page";
	tr.appendChild(th1);
	var th2 = document.createElement('th');
	th2.innerHTML = "Action";
	tr.appendChild(th2);
	var th3 = document.createElement('th');
	th3.innerHTML = "Envoi";
	tr.appendChild(th3);
	table.appendChild(tr);

	if(pageModifiee=="acceuil"){
		//createurDeLigne ("Logo de l'entreprise", "photo", "1");
		createurDeLigne ("Slogan de l'entreprise", "message", "2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/aslogan",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var slogan=this.response.contenuElement;		
			document.getElementsByName("input2")[0].placeholder=slogan;
		}
		getList2.send();
		//createurDeLigne ("Photo de l'entreprise", "photo", "3");
		createurDeLigne ("Texte de présentation", "message", "4");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/ades",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var description=this.response.contenuElement;	
			document.getElementsByName("input4")[0].placeholder=description;
		}
		getList2.send();
		
	}
	if(pageModifiee=="entreprise"){
		//createurDeLigne ("Photo de l'entreprise", "photo", "1");
		createurDeLigne ("Bref historique de l'entreprise / Partie 1", "message", "2.1");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/histo1",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var histo1=this.response.contenuElement;
			document.getElementsByName("input2.1")[0].placeholder=histo1;
		}
		getList2.send();
		createurDeLigne ("Bref historique de l'entreprise / Partie 2", "message", "2.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/histo2",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var histo2=this.response.contenuElement;	
			document.getElementsByName("input2.2")[0].placeholder=histo2;
		}
		getList2.send();
		createurDeLigne ("Bref historique de l'entreprise / Partie 3", "message", "2.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/histo3",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var histo3=this.response.contenuElement;	
			document.getElementsByName("input2.3")[0].placeholder=histo3;
		}
		getList2.send();
		createurDeLigne ("Bref historique de l'entreprise / Partie 4", "message", "2.4");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/histo4",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var histo4=this.response.contenuElement;	
			document.getElementsByName("input2.4")[0].placeholder=histo4;
		}
		getList2.send();
		createurDeLigne ("Paragraphe 'CADRE ET EDF'", "message", "3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/edf",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var edf=this.response.contenuElement;	
			document.getElementsByName("input3")[0].placeholder=edf;
		}
		getList2.send();
		//createurDeLigne ("Photo de l'équipe de PENLY", "photo", "4");
		//createurDeLigne ("Photo de l'équipe de PALUEL", "photo", "5");
	}
	if(pageModifiee=="prestations"){
		createurDeLigne ("Photo de la réalisation 1", "photo", "1.1");
		createurDeLigne ("Texte de la réalisation 1 (nom)", "message", "1.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea1",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea1=this.response.contenuElement;	
			document.getElementsByName("input1.2")[0].placeholder=nomRea1;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 1 (description)", "message", "1.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea1",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea1=this.response.contenuElement;	
			document.getElementsByName("input1.3")[0].placeholder=desRea1;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 2", "photo", "2.1");
		createurDeLigne ("Texte de la réalisation 2 (nom)", "message", "2.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea2",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea2=this.response.contenuElement;	
			document.getElementsByName("input2.2")[0].placeholder=nomRea2;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 2 (description)", "message", "2.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea2",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea2=this.response.contenuElement;	
			document.getElementsByName("input2.3")[0].placeholder=desRea2;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 3", "photo", "3.1");
		createurDeLigne ("Texte de la réalisation 3 (nom)", "message", "3.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea3",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea3=this.response.contenuElement;	
			document.getElementsByName("input3.2")[0].placeholder=nomRea3;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 3 (description)", "message", "3.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea3",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea3=this.response.contenuElement;	
			document.getElementsByName("input3.3")[0].placeholder=desRea3;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 4", "photo", "4.1");
		createurDeLigne ("Texte de la réalisation 4 (nom)", "message", "4.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea4",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea4=this.response.contenuElement;	
			document.getElementsByName("input4.2")[0].placeholder=nomRea4;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 4 (description)", "message", "4.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea4",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea4=this.response.contenuElement;	
			document.getElementsByName("input4.3")[0].placeholder=desRea4;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 5", "photo", "5.1");
		createurDeLigne ("Texte de la réalisation 5 (nom)", "message", "5.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea5",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea5=this.response.contenuElement;	
			document.getElementsByName("input5.2")[0].placeholder=nomRea5;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 5 (description)", "message", "5.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea5",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea5=this.response.contenuElement;	
			document.getElementsByName("input5.3")[0].placeholder=desRea5;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 6", "photo", "6.1");
		createurDeLigne ("Texte de la réalisation 6 (nom)", "message", "6.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea6",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea6=this.response.contenuElement;	
			document.getElementsByName("input6.2")[0].placeholder=nomRea6;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 6 (description)", "message", "6.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea6",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea6=this.response.contenuElement;	
			document.getElementsByName("input6.3")[0].placeholder=desRea6;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 7", "photo", "7.1");
		createurDeLigne ("Texte de la réalisation 7 (nom)", "message", "7.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea7",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea7=this.response.contenuElement;	
			document.getElementsByName("input7.2")[0].placeholder=nomRea7;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 7 (description)", "message", "7.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea7",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea7=this.response.contenuElement;	
			document.getElementsByName("input7.3")[0].placeholder=desRea7;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 8", "photo", "8.1");
		createurDeLigne ("Texte de la réalisation 8 (nom)", "message", "8.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea8",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea8=this.response.contenuElement;	
			document.getElementsByName("input8.2")[0].placeholder=nomRea8;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 8 (description)", "message", "8.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea8",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea8=this.response.contenuElement;	
			document.getElementsByName("input8.3")[0].placeholder=desRea8;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 9", "photo", "9.1");
		createurDeLigne ("Texte de la réalisation 9 (nom)", "message", "9.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea9",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea9=this.response.contenuElement;	
			document.getElementsByName("input9.2")[0].placeholder=nomRea9;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 9 (description)", "message", "9.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea9",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea9=this.response.contenuElement;	
			document.getElementsByName("input9.3")[0].placeholder=desRea9;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 10", "photo", "10.1");
		createurDeLigne ("Texte de la réalisation 10 (nom)", "message", "10.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea10",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea10=this.response.contenuElement;	
			document.getElementsByName("input10.2")[0].placeholder=nomRea10;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 10 (description)", "message", "10.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea10",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea10=this.response.contenuElement;	
			document.getElementsByName("input10.3")[0].placeholder=desRea10;
		}
		getList2.send();
		createurDeLigne ("Photo de la réalisation 11", "photo", "11.1");
		createurDeLigne ("Texte de la réalisation 11 (nom)", "message", "11.2");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/nomRea11",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var nomRea11=this.response.contenuElement;	
			document.getElementsByName("input11.2")[0].placeholder=nomRea11;
		}
		getList2.send();
		createurDeLigne ("Texte de la réalisation 11 (description)", "message", "11.3");
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/elementssite/getElementById/desRea11",true, null, null);
		getList2.responseType="json";
		getList2.onload=function(){
			var desRea11=this.response.contenuElement;	
			document.getElementsByName("input11.3")[0].placeholder=desRea11;
		}
		getList2.send();
		createurDeLigne ("Texte du paragraphe 'FABRICATION' (séparer chaque section par //)", "message", "7");
		createurDeLigne ("Texte du paragraphe 'INSTALLATION ET MODIFICATION' (séparer chaque section par //)", "message", "8");
		createurDeLigne ("Texte du paragraphe 'ENTRETIEN, MAINTENANCE ET CONTROLE' (séparer chaque section par //)", "message", "9");
	}

	document.getElementById("boutonRetour").onclick=function(){
		gestionnairePage();
	}
	for (var i = 1; i < 10; i++) {
		if (document.getElementById("a"+i) != null){
			document.getElementById("a"+i).onclick=function(){
				createurDeNotifications(1, "Modification effectuée.");
			}
		}
	}
}

// createur de ligne des différents tableaux
function createurDeLigne (element, action, num){
	var table = document.getElementById("tableauDesModifications");
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = element;
	tr.appendChild(td1);
	var td2 = document.createElement('td');
	td2.className="colonneLarge";
	if (action=="message"){
		var textarea = document.createElement('textarea');
		textarea.className="inputTextarea form-control";
		textarea.id="input"+num;
		textarea.name="input"+num;
		td2.appendChild(textarea);
	}
	else if (action=="photo"){
		var input = document.createElement('input');
		input.type="file";
		input.id="input"+num;
		input.name="fileName";
		input.accept="image/*"
		td2.appendChild(input);
	}
	tr.appendChild(td2);
	var td3 = document.createElement('td');
	td3.className="colonneFine";
	if (action=="message"){
		var a = document.createElement('a');
		a.href="#";
		a.id="a"+num;
		var span = document.createElement('span');
		span.className=" glyphicon glyphicon-new-window";
		a.appendChild(span);
		td3.appendChild(a);
	}
	else if (action=="photo"){
		var input2 = document.createElement('input');
		input2.type="submit";
		input2.value="GO";
		td3.appendChild(input2);
	}
	tr.appendChild(td3);
	table.appendChild(tr);
}
// Modifier les elements 

function modifElement(pageModifiee){
	var requete = new XMLHttpRequest();
	requete.open("PUT","../cadrews/elementssite/updateET");
	requete.responseType = "json";
	if(pageModifiee=="acceuil"){
		document.getElementById("a2").onclick=function(){
			var newSlogan = document.getElementById("input2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=aslogan"+"&contenuElement="+newSlogan);
			window.location.href="../direction/modification";

		};
		document.getElementById("a4").onclick=function(){
			var newDescription = document.getElementById("input4").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=ades"+"&contenuElement="+newDescription);
			window.location.href="../direction/modification";
		};
		
	}
	if(pageModifiee=="entreprise"){
		document.getElementById("a2.1").onclick=function(){
			var newHisto1 = document.getElementById("input2.1").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=histo1"+"&contenuElement="+newHisto1);
			window.location.href="../direction/modification";
		};
		document.getElementById("a2.2").onclick=function(){
			var newHisto2 = document.getElementById("input2.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=histo2"+"&contenuElement="+newHisto2);
			window.location.href="../direction/modification";
		};
		document.getElementById("a2.3").onclick=function(){
			var newHisto3 = document.getElementById("input2.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=histo3"+"&contenuElement="+newHisto3);
			window.location.href="../direction/modification";
		};
		document.getElementById("a2.3").onclick=function(){
			var newHisto3 = document.getElementById("input2.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=histo3"+"&contenuElement="+newHisto3);
			window.location.href="../direction/modification";
		};
		document.getElementById("a2.4").onclick=function(){
			var newHisto4 = document.getElementById("input2.4").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=histo4"+"&contenuElement="+newHisto4);
			window.location.href="../direction/modification";
		};
		document.getElementById("a3").onclick=function(){
			var newEDF = document.getElementById("input3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=edf"+"&contenuElement="+newEDF);
			window.location.href="../direction/modification";
		};
		
	}
	if(pageModifiee=="prestations"){
		document.getElementById("a1.2").onclick=function(){
			var newE12 = document.getElementById("input1.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea1"+"&contenuElement="+newE12);
			window.location.href="../direction/modification";
		};
		document.getElementById("a1.3").onclick=function(){
			var newE13 = document.getElementById("input1.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea1"+"&contenuElement="+newE13);
			window.location.href="../direction/modification";
		};
		document.getElementById("a2.2").onclick=function(){
			var newE22 = document.getElementById("input2.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea2"+"&contenuElement="+newE22);
			window.location.href="../direction/modification";
		};
		document.getElementById("a2.3").onclick=function(){
			var newE23 = document.getElementById("input1.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea2"+"&contenuElement="+newE23);
			window.location.href="../direction/modification";
		};
		document.getElementById("a3.2").onclick=function(){
			var newE32 = document.getElementById("input3.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea3"+"&contenuElement="+newE32);
			window.location.href="../direction/modification";
		};
		document.getElementById("a3.3").onclick=function(){
			var newE33 = document.getElementById("input3.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea3"+"&contenuElement="+newE33);
			window.location.href="../direction/modification";
		};
		document.getElementById("a4.2").onclick=function(){
			var newE42 = document.getElementById("input4.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea4"+"&contenuElement="+newE42);
			window.location.href="../direction/modification";
		};
		document.getElementById("a4.3").onclick=function(){
			var newE43 = document.getElementById("input4.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea4"+"&contenuElement="+newE43);
			window.location.href="../direction/modification";
		};
		document.getElementById("a1.2").onclick=function(){
			var newE12 = document.getElementById("input1.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea1"+"&contenuElement="+newE12);
			window.location.href="../direction/modification";
		};
		document.getElementById("a1.3").onclick=function(){
			var newE13 = document.getElementById("input1.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea1"+"&contenuElement="+newE13);
			window.location.href="../direction/modification";
		};
		document.getElementById("a5.2").onclick=function(){
			var newE52 = document.getElementById("input5.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea5"+"&contenuElement="+newE52);
			window.location.href="../direction/modification";
		};
		document.getElementById("a5.3").onclick=function(){
			var newE53 = document.getElementById("input5.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea5"+"&contenuElement="+newE53);
			window.location.href="../direction/modification";
		};
		document.getElementById("a6.2").onclick=function(){
			var newE62 = document.getElementById("input6.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea6"+"&contenuElement="+newE62);
			window.location.href="../direction/modification";
		};
		document.getElementById("a6.3").onclick=function(){
			var newE63 = document.getElementById("input6.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea6"+"&contenuElement="+newE63);
			window.location.href="../direction/modification";
		};
		document.getElementById("a7.2").onclick=function(){
			var newE72 = document.getElementById("input7.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea7"+"&contenuElement="+newE72);
			window.location.href="../direction/modification";
		};
		document.getElementById("a7.3").onclick=function(){
			var newE73 = document.getElementById("input7.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea7"+"&contenuElement="+newE73);
			window.location.href="../direction/modification";
		};
		document.getElementById("a8.2").onclick=function(){
			var newE82 = document.getElementById("input8.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea8"+"&contenuElement="+newE82);
			window.location.href="../direction/modification";
		};
		document.getElementById("a8.3").onclick=function(){
			var newE83 = document.getElementById("input8.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea8"+"&contenuElement="+newE83);
			window.location.href="../direction/modification";
		};
		document.getElementById("a9.2").onclick=function(){
			var newE92 = document.getElementById("input9.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea9"+"&contenuElement="+newE92);
			window.location.href="../direction/modification";
		};
		document.getElementById("a9.3").onclick=function(){
			var newE93 = document.getElementById("input9.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea9"+"&contenuElement="+newE93);
			window.location.href="../direction/modification";
		};
		document.getElementById("a10.2").onclick=function(){
			var newE102 = document.getElementById("input10.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea10"+"&contenuElement="+newE102);
			window.location.href="../direction/modification";
		};
		document.getElementById("a10.3").onclick=function(){
			var newE103 = document.getElementById("input10.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea10"+"&contenuElement="+newE103);
			window.location.href="../direction/modification";
		};
		document.getElementById("a11.2").onclick=function(){
			var newE112 = document.getElementById("input11.2").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=nomRea11"+"&contenuElement="+newE112);
			window.location.href="../direction/modification";
		};
		document.getElementById("a11.3").onclick=function(){
			var newE113 = document.getElementById("input11.3").value;
			requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requete.send("idElement=desRea11"+"&contenuElement="+newE113);
			window.location.href="../direction/modification";
		};
	}
}



window.onload = function(){
	
	gestionnaireDeMenu(6);
	maillingAnnonce();
	supprimeurDeNotifications();
	gestionnairePage();
	disparaitre();
	gestionFooter();
};
