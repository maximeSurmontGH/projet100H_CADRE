function getSlogan(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/aslogan",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pslo = document.getElementById("slogan");
		var newh=document.createElement("h5");
		newh.textContent=this.response.contenuElement;
		pslo.appendChild(newh);
	}
	getList2.send();
}

window.onload = function(){
	getSlogan();
};