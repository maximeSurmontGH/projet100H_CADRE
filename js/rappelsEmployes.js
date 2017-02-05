function maillingAnnonce(){
	document.getElementById("mailling").onclick=function(){
		var p = document.getElementById("maillingAnnonceNum");
		var img =  document.getElementById("imgAlerte");
		p.className="apparaitreAlerte";
		img.className="apparaitreAlerte";
		}
}

window.onload = function(){
	maillingAnnonce();
};