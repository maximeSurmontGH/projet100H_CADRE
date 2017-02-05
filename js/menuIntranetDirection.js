function annonces(){
	document.getElementById("demandes").onclick=function(){
		var p = document.getElementById("maillingAnnonceNum");
		var img =  document.getElementById("imgAlerte");
		p.className="apparaitreAlerte";
		img.className="apparaitreAlerte";
		}
}

window.onload = function(){
	annonces();
};