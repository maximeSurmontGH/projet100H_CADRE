function getSlogan(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/aslogan",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		document.getElementById("sloganH5").textContent=this.response.contenuElement;
	}
	getList2.send();
}

function getImgs(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/img1",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		console.log("C:/Users/Maxime/Desktop/ITI4/apache-tomcat-8.5.8-windows-x64/apache-tomcat-8.5.8/tmpfiles/"+this.response.contenuElement);
		document.getElementById("img1").src="../../../../../../ITI4/apache-tomcat-8.5.8-windows-x64/apache-tomcat-8.5.8/tmpfiles/"+this.response.contenuElement;
	}
	getList2.send();
	
}


function getNomRealisation1(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea1",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id1-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation1(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea1",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id1-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}

function getNomRealisation2(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea2",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id2-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation2(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea2",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id2-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}

function getNomRealisation3(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea3",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id3-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation3(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea3",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id3-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}

function getNomRealisation4(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea4",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id4-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation4(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea4",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id4-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}


function getNomRealisation5(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea5",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id5-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation5(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea5",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id5-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}

function getNomRealisation6(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea6",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id6-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation6(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea6",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id6-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}

function getNomRealisation7(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea7",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id7-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation7(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea7",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id7-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}

function getNomRealisation8(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea8",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id8-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation8(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea8",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id8-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}

function getNomRealisation9(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea9",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id9-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation9(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea9",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id9-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}

function getNomRealisation10(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea10",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id10-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation10(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea10",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id10-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}


function getNomRealisation11(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/nomRea11",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id11-nom");
		var newa=document.createElement("a");
		newa.textContent=this.response.contenuElement;
		pnom.appendChild(newa);
	}
	getList2.send();
}

function getDesRealisation11(){
	var getList2 = new XMLHttpRequest();
	getList2.open("GET","cadrews/elementssite/getElementById/desRea11",true, null, null);
	getList2.responseType="json";
	getList2.onload=function(){
		var pnom = document.getElementById("id11-des");
		var newem=document.createElement("em");
		newem.textContent=this.response.contenuElement;
		pnom.appendChild(newem);
	}
	getList2.send();
}

window.onload=function(){
	getSlogan();
	getImgs();
	getNomRealisation1();
	getDesRealisation1();
	getNomRealisation2();
	getDesRealisation2();
	getNomRealisation3();
	getDesRealisation3();
	getNomRealisation4();
	getDesRealisation4();
	getNomRealisation5();
	getDesRealisation5();
	getNomRealisation6();
	getDesRealisation6();
	getNomRealisation7();
	getDesRealisation7();
	getNomRealisation8();
	getDesRealisation8();
	getNomRealisation9();
	getDesRealisation9();
	getNomRealisation10();
	getDesRealisation10();
	getNomRealisation11();
	getDesRealisation11();
}