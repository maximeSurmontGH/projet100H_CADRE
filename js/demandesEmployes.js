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
	apparitionNotification()
	suppressionNotification();
};
