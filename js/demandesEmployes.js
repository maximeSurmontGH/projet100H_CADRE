function disparaitre(){
	if (window.matchMedia("(max-width: 650px)").matches){
		document.getElementById("navigation").className="disparaitreAlerte";
		document.getElementById("iconePasla").id="iconeMenu";
		document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
	}
	window.onresize=function(){
  	if (window.matchMedia("(max-width: 650px)").matches){
			document.getElementById("navigation").parentNode.className="disparaitreAlerte";
    	document.getElementById("navigation").className="disparaitreAlerte";
			document.getElementById("iconePasla").id="iconeMenu";
			document.getElementById("section").className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1";
			ouvrirPetitMenu();
  	}
		else{
			document.getElementById("navigation").style.left=0;
			document.getElementById("navigation").className="col-lg-3 col-md-3 col-sm-3 col-xs-3";
			document.getElementById("section").className="col-lg-8 col-md-8 col-sm-8 col-xs-8";
			document.getElementById("iconeMenu").id="iconePasla";
			document.getElementById("navigation").parentNode.className="";
		}
	}
}

function ouvrirPetitMenu (){
	document.getElementById("iconeMenu").onclick=function(){
		var width = window.innerWidth;
		if (width>500){
			var marginLeft = window.innerWidth*40/100;
		}
		else if (width>350){
			var marginLeft = window.innerWidth*30/100;
		}
		else if (width>200){
			var marginLeft = window.innerWidth*20/100;
		}
		document.getElementById("navigation").className="petitMenu";
		document.getElementById("navigation").style.left=marginLeft+"px";
		document.getElementById("navigation").parentNode.className="opaque";
	}
	document.getElementById("navigation").parentNode.onclick=function(){
		document.getElementById("navigation").parentNode.className="disparaitreAlerte";
	}
}

function maillingAnnonce(){
	document.getElementById("mailling").onclick=function(){
		var p = document.getElementById("maillingAnnonceNum");
		var img =  document.getElementById("imgAlerte");
		p.className="disparaitreAlerte";
		img.className="disparaitreAlerte";
		}
}
function apparitionNotification(){
	document.getElementById("boutonSearch").onclick=function(){
			document.getElementById("notification").className='alert alert-info alert-dismissable notification  apparaitreAlerte';
			document.getElementById("notification2").className='alert alert-warning alert-dismissable demandeHist  apparaitreAlerte';
	}
}

function suppressionNotification(){
	document.getElementById("notification").onclick=function(){
		document.getElementById("notification").className='disparaitreAlerte';
	}
	document.getElementById("notification2").onclick=function(){
		document.getElementById("notification2").className='disparaitreAlerte';
	}
}






window.onload = function(){
	maillingAnnonce();
	apparitionNotification();
	suppressionNotification();
	disparaitre();
	ouvrirPetitMenu ();
};
