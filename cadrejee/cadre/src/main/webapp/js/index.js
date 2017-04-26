function getDescription(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/ades",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("description");
		var newp=document.createElement("p");
		newp.textContent=this.response.contenuElement;
		pdes.appendChild(newp);
	}
	getList2.send();
}


function getSlogan(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/aslogan",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		document.getElementById("sloganH5").textContent=this.response.contenuElement;
	}
	getList2.send();
}


window.onload = function(){
	getDescription();
	getSlogan();
};