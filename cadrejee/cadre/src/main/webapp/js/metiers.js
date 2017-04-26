
function getFab1(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/fab1",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("fab1");
		var newp=document.createElement("h6");
		newp.textContent=this.response.contenuElement;
		pdes.appendChild(newp);
	}
	getList2.send();
}

function getFab2(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/fab2",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("fab2");
		var newp=document.createElement("h6");
		newp.textContent=this.response.contenuElement;
		pdes.appendChild(newp);
	}
	getList2.send();
}

function getFab3(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/fab3",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("fab3");
		var newp=document.createElement("h6");
		newp.textContent=this.response.contenuElement;
		pdes.appendChild(newp);
	}
	getList2.send();
}

function getMod1(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/mod1",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("mod1");
		var newp=document.createElement("h6");
		newp.textContent=this.response.contenuElement;
		pdes.appendChild(newp);
	}
	getList2.send();
}

function getMod2(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/mod2",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("mod2");
		var newp=document.createElement("h6");
		newp.textContent=this.response.contenuElement;
		pdes.appendChild(newp);
	}
	getList2.send();
}

function getMod3(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/mod3",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("mod3");
		var newp=document.createElement("h6");
		newp.textContent=this.response.contenuElement;
		pdes.appendChild(newp);
	}
	getList2.send();
}

function getCont1(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/cont1",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("cont1");
		var newp=document.createElement("h6");
		newp.textContent=this.response.contenuElement;
		pdes.appendChild(newp);
	}
	getList2.send();
}

function getCont2(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/cont2",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("cont2");
		var newp=document.createElement("h6");
		newp.textContent=this.response.contenuElement;
		pdes.appendChild(newp);
	}
	getList2.send();
}

function getCont3(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/cont3",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pdes = document.getElementById("cont3");
		var newp=document.createElement("h6");
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
	getSlogan();
	getFab1();
	getFab2();
	getFab3();
	getMod1();
	getMod2();
	getMod3();
	getCont1();
	getCont2();
	getCont3();
};