function getDate(){
	var date = new Date();
	var jour=date.getDate();
	if (jour<10){
		jour="0"+jour.toString();
	}
	jour=jour.toString();
	var mois= date.getMonth()+1;
	if (mois<10){
		mois="0"+mois.toString();
	}
	mois=mois.toString();
	var annee=date.getFullYear().toString();
	
	return jour+mois+annee;	
}


function getIdNom(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","../cadrews/attestation/listIdAttestation",true, null, null);
	getList2.responseType="json";
	var select = document.getElementById("whichask");
	getList2.onload=function(){
		for (var i=0; i<this.response.length; i++){
			var newoption=document.createElement("option");
			newoption.textContent=this.response[i].typeAttestation;
			select.appendChild(newoption);
		}
	}
	getList2.send();
}



function getIdByName(name){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","../cadrews/attestation/listIdAttestation",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		for (var i=0; i<this.response.length; i++){
			if(this.response[i].typeAttestation == name){
				alert(this.response[i].idAttestation);
				return(this.response[i].idAttestation);
			}
		}
	}
	getList2.send();
}

//Liste des demandes deja effectuee
function getDemandes(){
	var getList1 = new XMLHttpRequest();
	var employeId = document.getElementById("employeId").innerText;
	getList1.open("GET","../cadrews/attestation/listDemandesAttestation",true, null, null);
	getList1.responseType="json";
	var divhisto = document.getElementById("historique");
	getList1.onload=function(){
		for (var i=0; i<this.response.length; i++){
					
			if (this.response[i].employes_idEmploye==employeId){
				var newdiv = document.createElement("div");
				var newstrong = document.createElement("strong");
				var type= this.response[i].attestations_idAttestation;
				newstrong.textContent = "Demande de type : "+type+" , ";
				var str=document.createElement("em");
				str.textContent=this.response[i].date[0]+this.response[i].date[1]+"/"+this.response[i].date[2]+this.response[i].date[3]+"/"+this.response[i].date[4]+this.response[i].date[5]+this.response[i].date[6]+this.response[i].date[7]+ " , "+this.response[i].etat ;
				newdiv.appendChild(newstrong)
				newdiv.appendChild(str);
				divhisto.appendChild(newdiv);
				if(this.response[i].etat=='valide'){
					newdiv.className="alert alert-success alert-dismissable demandeHist";
				}
				else if(this.response[i].etat=='attente'){
					newdiv.className="alert alert-warning alert-dismissable demandeHist";
				}
				else/**(this.response[i].etat=='refuse')**/{
					newdiv.className="alert alert-danger alert-dismissable demandeHist";
				}
			}
		}
	}
	getList1.send();
};
		
		
function addDemandeAttestation(){
	document.getElementById("boutonSearch").onclick=function(){
		var employeId = document.getElementById("employeId").innerText;			
		var requetePostReponse = new XMLHttpRequest();
		requetePostReponse.open("POST","../cadrews/attestation");
		requetePostReponse.responseType = "json";
				
		var nom = document.getElementById("inputNom").value;
		document.getElementById("inputNom").value="";
		var prenom = document.getElementById("inputPrenom").value;
		document.getElementById("inputPrenom").value="";
					
		var select = document.getElementById("whichask");
		var choice = select.selectedIndex;
		var type = select.options[choice].value;
		
		var getList2 = new XMLHttpRequest();
		getList2.open("GET","../cadrews/attestation/listIdAttestation",true, null, null);
		getList2.responseType="json";
		var a;
		getList2.onload=function(){
			for (var i=0; i<this.response.length; i++){
				if(this.response[i].typeAttestation == type){
					a=this.response[i].idAttestation;
					requetePostReponse.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					requetePostReponse.send("idAttestation="+a+"&idEmploye="+employeId+"&date="+getDate());
				}
			}
		}
		getList2.send();
		createurDeNotifications(1, "Demande d'attestation du type : "+type+" bien envoyée!");
	}
}
		

window.onload = function(){
	getDate();
	gestionnaireDeMenu(5);
	maillingAnnonce();
	supprimeurDeNotifications();
	disparaitre();
	gestionFooter();
	getDemandes();
	getIdNom();
	addDemandeAttestation();
	getIdByName;
};
