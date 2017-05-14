function getSlogan(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/aslogan",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		document.getElementById("sloganH5").textContent=this.response.contenuElement;
	}
	getList2.error=function(error){
		createurDeNotifications(4, "Erreur! Votre requête n'a pas abouti");
		console.error("Erreur de requete ajax de suppression de la ressource : "+error);
	};
	getList2.send();
}

function notif(){
	document.getElementById("ok").onclick=function(){
		alert("Demande envoyée");
		document.getElementById("nomContact").value='';
		document.getElementById("mailContact").value='';
		document.getElementById("societeContact").value='';
		document.getElementById("messageContact").value='';
		
	}
}


window.onload = function(){
	notif();
	getSlogan();
};