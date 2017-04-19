package projet.cadre.model;

public class Vehicules {
	
	private String immatriculation;
	private String typeVehicule;
	private String disponibilite;
	
	public Vehicules (String imma, String type){
		this.immatriculation=imma;
		this.typeVehicule=type;
		this.disponibilite="T";
	}

	public String getImmatriculation() {
		return immatriculation;
	}

	public void setImmatriculation(String immatriculation) {
		this.immatriculation = immatriculation;
	}

	public String getTypeDeVehicule() {
		return typeVehicule;
	}

	public void setTypeDeVehicule(String typeDeVehicule) {
		this.typeVehicule = typeDeVehicule;
	}
	
	public void setDispoTrue(){
		this.disponibilite="T";
	}
	
	public void setDispoFalse(){
		this.disponibilite="F";
	}
}
