function maillingAnnonce(){
	document.getElementById("mailling").onclick=function(){
		var p = document.getElementById("maillingAnnonceNum");
		var img =  document.getElementById("imgAlerte");
		p.className="disparaitreAlerte";
		img.className="disparaitreAlerte";
		}
}


function Notifications(){
	var footer = document.getElementByTagName(footer);
		var div = document.createElement(div);
		var strong = document.createElement(strong);
	  var a = document.createElement(a);
		strong.innerHTML = "alert :";

		div.className="alert alert-success alert-dismissable";
		a.className="close";
		a.datadismiss="alert";
		a.arialabel="close";
		a.innerHTML = "&times;";

		div.appendChild(a);
		div.appendChild(strong);
		div.innerHTML = "nouvelle ressource disponible";
		footer.appendChild(div);
}

function getEmploye(){
	var getEmploye = new XMLHttpRequest();
	var employeId = document.getElementById("employeId").innerText;
	getEmploye.open("GET","../cadrews/employes/employeById/"+employeId,true, null, null);
	getEmploye.responseType="json";
	var spanNom = document.getElementById("nomEmploye");
	
	getEmploye.onload=function(){
		spanNom.textContent=this.response.prenomEmploye+" "+this.response.nomEmploye;
	}
	getEmploye.send();
}

window.onload = function(){
	maillingAnnonce();
	//Notifications();
	getEmploye();
};
