function getSlogan(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/aslogan",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		document.getElementById("sloganH5").textContent=this.response.contenuElement;
	}
	getList2.send();
}


function getHisto1(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/histo1",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var phisto = document.getElementById("histo1");
		var newp=document.createElement("p");
		newp.textContent=this.response.contenuElement;
		phisto.appendChild(newp);
	}
	getList2.send();
}

function getHisto2(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/histo2",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var phisto = document.getElementById("histo2");
		var newp=document.createElement("p");
		newp.textContent=this.response.contenuElement;
		phisto.appendChild(newp);
	}
	getList2.send();
}

function getHisto3(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/histo3",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var phisto = document.getElementById("histo3");
		var newp=document.createElement("p");
		newp.textContent=this.response.contenuElement;
		phisto.appendChild(newp);
	}
	getList2.send();
}

function getHisto4(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/histo4",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var phisto = document.getElementById("histo4");
		var newp=document.createElement("p");
		newp.textContent=this.response.contenuElement;
		phisto.appendChild(newp);
	}
	getList2.send();
}

function getEdf(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/edf",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pedf = document.getElementById("edf");
		var newp=document.createElement("p");
		newp.textContent=this.response.contenuElement;
		pedf.appendChild(newp);
	}
	getList2.send();
}




window.onload = function(){
	getSlogan();
	getHisto1();
	getHisto2();
	getHisto4();
	getHisto3();
	getEdf();
	
};