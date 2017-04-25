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
	getEmploye();
};
