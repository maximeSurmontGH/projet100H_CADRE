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
	getSlogan();
};