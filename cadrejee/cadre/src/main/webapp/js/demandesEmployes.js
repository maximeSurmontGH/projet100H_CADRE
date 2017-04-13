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
						if(this.response[i].etat=='accepte'){
							var newdiv = document.createElement("div");
							newdiv.className="alert alert-success alert-dismissable demandeHist";
							var newstrong = document.createElement("strong");
							newstrong.textContent = "Demande de type : "+this.response[i].attestations_idAttestation+" , ";
							var str=document.createElement("em");
							str.textContent=this.response[i].date[0]+this.response[i].date[1]+"/"+this.response[i].date[2]+this.response[i].date[3]+"/"+this.response[i].date[4]+this.response[i].date[5]+this.response[i].date[6]+this.response[i].date[7]+ " , "+this.response[i].etat ;
							newdiv.appendChild(newstrong)
							newdiv.appendChild(str);
							divhisto.appendChild(newdiv);
						}
						if(this.response[i].etat=='attente'){
							var newdiv = document.createElement("div");
							newdiv.className="alert alert-warning alert-dismissable demandeHist";
							var newstrong = document.createElement("strong");
							newstrong.textContent = "Demande de type : "+this.response[i].attestations_idAttestation+" , ";
							var str=document.createElement("em");
							str.textContent=this.response[i].date[0]+this.response[i].date[1]+"/"+this.response[i].date[2]+this.response[i].date[3]+"/"+this.response[i].date[4]+this.response[i].date[5]+this.response[i].date[6]+this.response[i].date[7]+ " , "+this.response[i].etat ;
							newdiv.appendChild(newstrong)
							newdiv.appendChild(str);
							divhisto.appendChild(newdiv);
						}
						if(this.response[i].etat=='refuse'){
							var newdiv = document.createElement("div");
							newdiv.className="alert alert-danger alert-dismissable demandeHist";
							var newstrong = document.createElement("strong");
							newstrong.textContent = "Demande de type : "+this.response[i].attestations_idAttestation+" , ";
							var str=document.createElement("em");
							str.textContent=this.response[i].date[0]+this.response[i].date[1]+"/"+this.response[i].date[2]+this.response[i].date[3]+"/"+this.response[i].date[4]+this.response[i].date[5]+this.response[i].date[6]+this.response[i].date[7]+ " , "+this.response[i].etat ;
							newdiv.appendChild(newstrong)
							newdiv.appendChild(str);
							divhisto.appendChild(newdiv);
						}
						
					}
				}
			}
			getList1.send();
		};

window.onload = function(){
	gestionnaireDeMenu(5);
	maillingAnnonce();
	supprimeurDeNotifications();
	disparaitre();
	gestionFooter();
	getDemandes();
};
