function erreurConnexion(){
	document.getElementById("bouton1").onclick=function(){
		document.getElementById("notification").className='alert alert-danger alert-dismissable fade in notification apparaitreAlerte';
	}
}

function suppressionNotification(){
	document.getElementById("notification").onclick=function(){
		document.getElementById("notification").className='alert alert-danger alert-dismissable fade in notification  disparaitreAlerte';
	}
}

window.onload = function(){
	//erreurConnexion();
	suppressionNotification();
};
