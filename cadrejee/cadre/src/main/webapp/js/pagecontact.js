function getSlogan(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/aslogan",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		document.getElementById("sloganH5").textContent=this.response.contenuElement;
	}
	getList2.send();
}

function notif(){
	document.getElementById("ok").onclick=function(){
		alert("Demande envoyée");
	}
}


window.onload = function(){
	notif();
	getSlogan();
};